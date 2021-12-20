import minimist from "minimist";
import process from "process";
import clear from "clear";
import inquirer from "inquirer";
import fmt from "./text-format";
import fs from "fs";
import testingLibraries from "./choices/testing-libraries";
import testingFrameworks from "./choices/testing-frameworks";
import templateEngine from "./choices/template-engine";
import databaseAbstractions from "./choices/database-abstractions";
import databaseDrivers from "./choices/database-drivers";
import developmentTools from "./choices/development-tools";
import { Answers, DbName } from "./types";
import resolveDependencies from "./utils/resolve-dependencies";
import installPackages from "./utils/install-packages";
import { initializePackage } from "./utils/initialize-project";

const args = minimist(process.argv.slice(2));
const directory = args["_"][0];

if (directory === undefined) {
  console.error(fmt.error("ERROR: No directory provided"));
  process.exit(1);
}

clear();

console.log(fmt.success(process.cwd()));

const none = [{ name: "none", value: undefined }];

inquirer
  .prompt([
    {
      name: "developmentTools",
      type: "checkbox",
      message: "Select development tools:",
      choices: developmentTools(),
    },
    {
      name: "templateEngine",
      type: "list",
      message: "Select template engine:",
      choices: templateEngine().concat(none),
    },
    {
      name: "dbDriver",
      type: "list",
      message: "Select a database driver:",
      choices: databaseDrivers().concat(none),
    },
    {
      name: "dbAbstraction",
      type: "list",
      message: "Select a database abstraction:",
      choices: (answers: Answers) =>
        answers.dbDriver?.packages
          .map((item) => databaseAbstractions(item.metadata?.forDb as DbName))
          .flat()
          .concat(none),
    },
    {
      name: "testingFramework",
      type: "list",
      message: "Select a testing framework:",
      choices: testingFrameworks().concat(none),
    },
    {
      name: "testingLibraries",
      type: "checkbox",
      message: "Select additional testing libraries:",
      choices: testingLibraries(),
    },
  ])
  .then((answer: Answers) => {
    // console.log(answer);
    // console.log(resolveDependencies(answer));
    if (!(directory === "." || directory === "./")) {
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
      }
    }

    process.chdir(directory);
    console.log(process.cwd());
    initializePackage().on("exit", (code) => {
      if (code === 0) installPackages(resolveDependencies(answer));
    });

    // installPackages(resolveDependencies(answer));
  })
  .catch((error) => {
    console.log(error);
  });
