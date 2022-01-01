import createConfigFile from "./utils/create-config-file";
import prettier from "prettier";

const prettierConfig: prettier.Options = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: "always",
  printWidth: 80,
  bracketSameLine: false,
};

createConfigFile(".prettierrc", prettierConfig, true);
