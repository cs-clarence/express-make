export interface Package {
  name: string;
  isDevDep?: boolean;
  includesTypeDefs?: boolean;
  metadata?: { [key: string]: unknown };
}

export interface Choice {
  name: string;
  value?: {
    packages: Package[];
  };
  short?: string;
}

export type DbName =
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "mssql"
  | "oracle"
  | "mariadb"
  | "sqlite"
  | "cockroachdb";

export type DbAbstraction = Choice & {
  dbSupport?: { [_ in DbName]?: boolean };
};

export type Answers = {
  developmentTools: NonNullable<Choice["value"]>[];
  templateEngine?: Choice["value"];
  dbDriver?: Choice["value"];
  dbAbstraction?: Choice["value"];
  testingFramework?: Choice["value"];
  testingLibraries: NonNullable<Choice["value"]>[];
};
