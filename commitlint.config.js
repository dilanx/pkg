export default {
  extends: ['@dilanx/config/commitlint'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['access-nodes', 'avatar', 'base', 'config', 'themes'],
    ],
  },
};
