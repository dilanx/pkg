#!/usr/bin/env node

const yargs = require('yargs');

yargs(process.argv.slice(2))
  .version()
  .scriptName('@dilanx/config')
  .usage('Usage: $0 <command> [options]')
  .help('h')
  .alias('h', 'help')
  .strict()
  .epilog('@dilanx/config').argv;
