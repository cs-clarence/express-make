import fmt from "@/text-format";
import { spawn } from "child_process";
import process from "process";

export function initializePackage() {
  let npmCmd = "npm";

  if (process.platform === "win32") {
    npmCmd = "npm.cmd";
  }

  console.log(fmt.normal("Running npm init"));
  return spawn(npmCmd, ["init"], {
    stdio: [process.stdin, process.stdout, process.stderr],
    cwd: process.cwd(),
  });
}
