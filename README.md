
# spawno

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/spawno.svg)](https://www.npmjs.com/package/spawno) [![Downloads](https://img.shields.io/npm/dt/spawno.svg)](https://www.npmjs.com/package/spawno)

> Easily work with child processes.

## :cloud: Installation

```sh
$ npm i --save spawno
```


## :clipboard: Example



```js
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
  , output: true
});
// =>
// PING ionicabizau.net (109.107.37.233) 56(84) bytes of data.
// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=1 ttl=54 time=49.2 ms
// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=2 ttl=54 time=44.4 ms
// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=3 ttl=54 time=47.9 ms
// 64 bytes from cip-109-107-37-233.gb1.brightbox.com (109.107.37.233): icmp_seq=4 ttl=54 time=46.3 ms
```

## :memo: Documentation


### `spawno(command, args, options, cb)`
Creates the child process.

#### Params
- **String** `command`: The command you want to run.
- **Array** `args`: The command arguments.
- **Object** `options`: The options to pass to the `spawn` function extended with:
 - `output` (Boolean): If truly, the output will be piped in the
   process stdout/stderr streams.
 - `data` (String|Boolean): If `false`, the `stdin` stream will not be ended. By default this is an empty string.
- **Function** `cb`: The callback function.

#### Return
- **Process** The child process that was created.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`babel-it`](https://github.com/IonicaBizau/babel-it#readme)—Babelify your code before `npm publish`.
 - [`diable`](https://github.com/IonicaBizau/diable)—Daemonize the things out.
 - [`electroner`](https://github.com/IonicaBizau/electroner#readme)—Start ElectronJS apps from Node.js.
 - [`fortran`](https://github.com/IonicaBizau/node-fortran)—Fortran bridge for Node.js which allows you to run Fortran code from Node.js.
 - [`git-cloner`](https://github.com/IonicaBizau/git-cloner#readme)—Clone multiple git repositories.
 - [`git-status`](https://github.com/IonicaBizau/git-status#readme)—A git-status wrapper.
 - [`initial-commit-date`](https://github.com/IonicaBizau/initial-commit-date#readme)—Get the initial commit date of a git repository.
 - [`powershell`](https://github.com/IonicaBizau/powershell#readme)—Run PowerShell scripts and commands from Node.js.
 - [`pull-from-source`](https://github.com/IonicaBizau/pull-from-source#readme)—Pulls the changes from the source repository in the forked one.
 - [`ship-release`](https://github.com/IonicaBizau/ship-release#readme)—Publish new versions on GitHub and npm with ease.
 - [`spawn-npm`](https://github.com/IonicaBizau/spawn-npm#readme)—Run npm commands by creating child processes.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
