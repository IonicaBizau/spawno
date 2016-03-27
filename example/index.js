"use strict";

const spawn = require("../lib");

spawn("ls", ["-l"], { cwd: __dirname }, (err, stdout, stderr) => {
    console.log(err || stderr || stdout);
    // =>
    // total 4
    // -rw-rw-r-- 1 ionicabizau ionicabizau 256 Mar 27 14:53 index.js
});

// Pipe the output in the stdout/stderr streams (this will not collect the output in memory)
let proc = spawn("ping", ["ionicabizau.net"], {
    cwd: __dirname
  , _showOutput: true
});
// =>
// PING ionicabizau.net (109.107.37.233) 56(84) bytes of data.
// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=1 ttl=54 time=49.2 ms
// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=2 ttl=54 time=44.4 ms
// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=3 ttl=54 time=47.9 ms
// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=4 ttl=54 time=46.3 ms
