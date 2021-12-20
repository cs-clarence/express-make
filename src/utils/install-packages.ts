import { execSync } from "child_process";
import fmt from "@/text-format";

export type Dependencies = {
  deps: string[];
  devDeps: string[];
};

export default function installPackages(args: Dependencies) {
  console.log(fmt.normal("Installing dependencies"));
  args.deps.forEach((item) => execSync(`npm install ${item}`));

  console.log(fmt.normal("Installing development dependencies"));
  args.devDeps.forEach((item) => execSync(`npm install -D ${item}`));
}
