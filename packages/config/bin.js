#!/usr/bin/env node

const yargs = require('yargs');
const {
  commitLintInit,
  getPrefixes,
  addPrefix,
  removePrefix,
  setPrefixes,
} = require('./commit-lint');

yargs(process.argv.slice(2))
  .version()
  .scriptName('@dilanx/config')
  .usage('Usage: $0 <command> [options]')
  .command({
    command: 'commit-lint',
    aliases: ['cl'],
    describe: 'Lint commit messages',
    builder: (yargs) =>
      yargs
        .command({
          command: 'init',
          aliases: ['i'],
          describe: 'Initialize commit linting',
          handler: () => commitLintInit(),
        })
        .command({
          command: 'get-prefixes',
          aliases: ['gp'],
          describe: 'Get commit prefixes',
          handler: () => getPrefixes(),
        })
        .command({
          command: 'add-prefix <prefix>',
          aliases: ['ap'],
          describe: 'Add commit prefix',
          handler: ({ prefix }) => addPrefix(prefix),
        })
        .command({
          command: 'remove-prefix <prefix>',
          aliases: ['rp'],
          describe: 'Remove commit prefix',
          handler: ({ prefix }) => removePrefix(prefix),
        })
        .command({
          command: 'set-prefixes <prefixes>',
          aliases: ['sp'],
          describe: 'Set commit prefixes (comma separated)',
          handler: ({ prefixes }) => setPrefixes(prefixes),
        })
        .demandCommand(1)
        .strict(),
  })
  .help('h')
  .alias('h', 'help')
  .demandCommand(1)
  .strict()
  .epilog('@dilanx/config').argv;

// npx @dilanx/config commit-lint --init
