import { Choice } from "@/types";

export default function testingFrameworks(): Choice[] {
  return [
    {
      name: "Mocha - JavaScript test framework running on Node.js and in the browser",
      short: "mocha",
      value: { packages: [{ name: "mocha", isDevDep: true }] },
    },
    {
      name: "Jest - delightful JavaScript Testing Framework with a focus on simplicity",
      short: "jest",
      value: { packages: [{ name: "jest", isDevDep: true }] },
    },
  ];
}
