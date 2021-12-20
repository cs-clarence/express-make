import { Answers, Package } from "@/types";
import { Dependencies } from "./install-packages";

export default function resolveDependencies({
  dbAbstraction,
  developmentTools,
  testingLibraries,
  dbDriver,
  templateEngine,
  testingFramework,
}: Answers): Dependencies {
  const deps: Dependencies = { deps: [], devDeps: [] };
  const typePackages: string[] = [];
  const packages: Package[] = [];

  for (const p of [
    dbAbstraction,
    dbDriver,
    templateEngine,
    testingFramework,
    testingLibraries,
    developmentTools,
  ]) {
    if (Array.isArray(p)) {
      for (const p2 of p) {
        packages.push(...p2.packages);
      }
    } else if (p) {
      packages.push(...p.packages);
    }
  }

  for (const p of packages) {
    if (p.isDevDep) {
      deps.devDeps.push(p.name);
    } else {
      deps.deps.push(p.name);
    }
    if (!p.includesTypeDefs) {
      typePackages.push(`@types/${p.name}`);
    }
  }

  if (
    developmentTools.find((i1) =>
      i1.packages.find((i2) => i2.name === "typescript"),
    )
  ) {
    deps.devDeps = deps.devDeps.concat(typePackages);
  }

  return deps;
}
