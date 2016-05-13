# spawno [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/spawno.svg)](https://www.npmjs.com/package/spawno) [![Downloads](https://img.shields.io/npm/dt/spawno.svg)](https://www.npmjs.com/package/spawno) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Easily work with child processes.

## Installation

```sh
$ npm i --save spawno
```

## Example

```js
"use strict";

const spawn = require("spawno");

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
```

## Documentation

### `spawno(command, args, options, cb)`
Creates the child process.

#### Params
- **String** `command`: The command you want to run.
- **Array** `args`: The command arguments.
- **Object** `options`: The options to pass to the `spawn` function extended with:
 - `_showOutput` (Boolean): If truly, the output will be piped in the
   process stdout/stderr streams.
- **Function** `cb`: The callback function.

#### Return
- **Process** The child process that was created.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md