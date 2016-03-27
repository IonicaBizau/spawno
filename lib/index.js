"use strict";

const spawn = require("child_process").spawn
    , procOutput = require("proc-output")
    ;

module.exports = function spawno(command, args, options, cb) {
    if (typeof options === "function") {
        cb = options;
        options = {};
    }

    let showOutput = options._showOutput;
    delete options._showOutput;

    let proc = spawn(command, args, options);

    if (showOutput) {
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
    }

    if (cb) {
        procOutput(proc, cb);
    }
    return proc;
};
