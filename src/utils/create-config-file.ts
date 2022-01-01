import { writeFile } from "fs";
import prettier from "prettier";

export default function createConfigFile(
  filePath: string,
  configObj: object,
  isJson = false,
) {
  let text: string = prettier.format(
    `// eslint-disable-next-line no-undef
  module.exports = ${JSON.stringify(configObj)}`,
    { parser: "babel" },
  );

  if (isJson) {
    text = prettier.format(`${JSON.stringify(configObj)}`, {
      parser: "json-stringify",
    });
  }

  writeFile(filePath, text, { encoding: "utf-8" }, (err) => {
    if (err) throw err;
  });
}
