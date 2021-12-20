import { Choice } from "@/types";

export default function developmentTools(): Choice[] {
  return [
    {
      name: "TypeScript - provides type system to JavaScript",
      short: "typescript",
      value: {
        packages: [
          { name: "typescript", isDevDep: true, includesTypeDefs: true },
          { name: "tsconfig-paths", includesTypeDefs: true },
        ],
      },
    },
    {
      name: "ESlint - lints code for errors",
      short: "eslint",
      value: { packages: [{ name: "eslint", isDevDep: true }] },
    },
    {
      name: "Prettier - formats code",
      short: "prettier",
      value: { packages: [{ name: "prettier", isDevDep: true }] },
    },
    {
      name: "Nodemon - reloads the application after editing source files",
      short: "nodemon",
      value: { packages: [{ name: "nodemon", isDevDep: true }] },
    },
  ];
}
