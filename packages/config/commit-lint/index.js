const fs = require('fs');
const { exec, log, error } = require('../utility.js');

function commitLintInit() {
  exec('npm install husky --save-dev');
  exec('npx husky install');
  exec('npm pkg set scripts.prepare="husky install"');
  set(['base', 'test', 'version']);
}

function get() {
  if (!fs.existsSync('.husky/commit-msg')) {
    error('commit-msg hook not found');
    process.exit(1);
  }
  const file = fs.readFileSync('.husky/commit-msg');
  const lines = file.toString().split('\n');
  for (const line of lines) {
    if (line.startsWith('COMMIT_PREFIXES=')) {
      return line.split('=')[1].replace(/"/g, '').split(' ');
    }
  }

  error('COMMIT_PREFIXES not found');
}

function set(prefixes) {
  const text = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

COMMIT_MSG=$(head -n1 "$1")
COMMIT_PREFIXES="${prefixes.join(' ')}"

for item in $COMMIT_PREFIXES; do
  if echo $COMMIT_MSG | grep -qE "^$item: .+$"; then
    exit 0;
  fi
done

echo "@dilanx/config is aborting commit! Follow format \\"<prefix>: <message>\\" where prefix is one of $COMMIT_PREFIXES."
exit 1
`;

  fs.writeFileSync('.husky/commit-msg', text, {
    mode: 0o0755,
  });
  log('Updated commit linting');
}

function getPrefixes() {
  const prefixes = get();
  log(prefixes.join(' '), false);
}

function addPrefix(prefix) {
  const prefixes = get();
  if (prefixes.includes(prefix)) {
    error(`Prefix ${prefix} already exists`);
    process.exit(1);
  }

  const newPrefixes = [...prefixes, prefix];
  set(newPrefixes);
}

function removePrefix(prefix) {
  const prefixes = get();
  if (!prefixes.includes(prefix)) {
    error(`Prefix ${prefix} does not exist`);
    process.exit(1);
  }

  const newPrefixes = prefixes.filter((p) => p !== prefix);
  set(newPrefixes);
}

function setPrefixes(prefixes) {
  set(prefixes.split(','));
}

module.exports = {
  commitLintInit,
  getPrefixes,
  addPrefix,
  removePrefix,
  setPrefixes,
};
