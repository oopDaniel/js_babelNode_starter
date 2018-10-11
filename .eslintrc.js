// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard']
}
