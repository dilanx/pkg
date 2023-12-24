const cp = require('child_process');

function exec(cmd) {
  cp.execSync(cmd, { stdio: 'inherit' });
}

function getLogArgs(msg, usePrefix) {
  return usePrefix ? ['@dilanx/config:', msg] : [msg];
}

function log(msg, usePrefix = true) {
  console.log(...getLogArgs(msg, usePrefix));
}

function error(msg, usePrefix = true) {
  console.error(...getLogArgs(msg, usePrefix));
}

module.exports = { exec, log, error };
