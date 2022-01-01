import { Answers } from "@/types";

export default function generateFolderStructure(answers: Answers) {
  const projectStructure: object = {};
  if (answers.templateEngine)
    Object.defineProperty(projectStructure, "views", { enumerable: true });
}
