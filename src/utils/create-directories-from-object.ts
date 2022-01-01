import { existsSync, mkdirSync } from "fs";

export default function createDirectoriesFromObject(obj: object) {
  for (const dir in obj) {
    if (typeof dir === "string") {
      if (!existsSync(dir)) {
        mkdirSync(dir);
      }
    } else {
      createDirectoriesFromObject(dir);
    }
  }
}
