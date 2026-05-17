import { spawn } from "node:child_process";
import procOutput from "proc-output";

/**
 * spawno
 * Creates the child process.
 * @name spawno
 * @function
 * @param {string} command The command you want to run.
 * @param {Array} args The command arguments.
 * @param {object} options The options to pass to the `spawn` function extended with:
 *
 *  - `output` (Boolean): If truly, the output will be piped in the
 *    process stdout/stderr streams.
 *  - `data` (String|Boolean): If `false`, the `stdin` stream will not be ended. By default this is an empty string.
 * @param {Function} cb The callback function.
 * @returns {Process} The child process that was created.
 */
function spawno(command, args, options, cb) {

    if (typeof args === "function") {
        cb = args;
        args = [];
        options = {};
    }

    if (typeof options === "function") {
        cb = options;
        if (!Array.isArray(args)) {
            options = args;
            args = [];
        } else {
            options = {};
        }
    }

    options = options || {};

    if (options.input !== false) {
        options.input = options.input || "";
    }

    let showOutput = options.output;
    let inputData = options.input
      ;

    delete options.output;
    delete options.input;

    let proc = spawn(command, args, options);

    if (showOutput) {
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
    }

    if (inputData !== false) {
        proc.stdin && proc.stdin.end(inputData);
    }

    if (cb) {
        procOutput(proc, cb);
    }

    return proc;
}

/**
 * spawno.promise
 * The promise interface.
 * @name spawno.promise
 * @function
 * @param {string} command The command you want to run.
 * @param {Array} args The command arguments.
 * @param {object} options The options to pass to the `spawn` function.
 * @returns {Promise} The promise which will be eventually resolved with the following object:
 *
 *   - `code`
 *   - `stdout`
 *   - `stderr`
 */
const promise = (command, args, options) => {
    return new Promise((resolve, reject) => {
        spawno(command, args, options, (err, stdout, stderr, code) => {
            if (err) { return reject(err); }
            resolve({
                code,
                stdout,
                stderr
            });
        });
    });
};

spawno.promise = promise;

export { promise };
export default spawno;
