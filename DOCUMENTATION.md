## Documentation

You can see below the API reference of this module.

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

