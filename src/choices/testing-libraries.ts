import { Choice } from "@/types";

export default function testingLibraries(): Choice[] {
  return [
    {
      name: "Chai - assertion library for testing",
      short: "chai",
      value: { packages: [{ name: "chai", isDevDep: true }] },
    },
    {
      name: "Supertest - HTTP library for testing",
      short: "supertest",
      value: { packages: [{ name: "supertest", isDevDep: true }] },
    },
  ];
}
