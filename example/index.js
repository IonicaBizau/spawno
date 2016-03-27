"use strict";

const spawn = require("../lib");

spawn("ls", ["-l"], { cwd: __dirname }, (err, stdout, stderr) => {
    console.log(err || stderr || stdout);
});

let proc = spawn("ping", ["ionicabizau.net"], {
    cwd: __dirname
  , _showOutput: true
});
