// eslint-disable-next-line
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "off",
    "prettier/prettier": "warn",
  },
};
