module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    // 这里增加一行，用于支持后面的测试环境
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 这里添加一行规则把这条规则隐藏
    'import/prefer-default-export': 0,
  },
};
