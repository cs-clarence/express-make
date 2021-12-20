import { Choice } from "@/types";

export default function databaseDrivers(): Choice[] {
  return [
    {
      name: "mysql - MySql",
      short: "mysql",
      value: {
        packages: [{ name: "mysql", metadata: { forDb: "" } }],
      },
    },
    {
      name: "pg - PostgreSQL",
      short: "postgresql",
      value: {
        packages: [{ name: "pg", metadata: { forDb: "postgresql" } }],
      },
    },
    {
      name: "sqlite - SQLite",
      short: "sqlite",
      value: {
        packages: [{ name: "sqlite", metadata: { forDb: "sqlite" } }],
      },
    },
    {
      name: "mongodb - MongoDB",
      short: "mongodb",
      value: {
        packages: [{ name: "mongodb", metadata: { forDb: "mongodb" } }],
      },
    },
    {
      name: "mssql - MSSQL",
      short: "mssql",
      value: {
        packages: [{ name: "mssql", metadata: { forDb: "mssql" } }],
      },
    },
    {
      name: "oracledb - Oracle",
      short: "oracle",
      value: {
        packages: [{ name: "oracledb", metadata: { forDb: "oracle" } }],
      },
    },
    {
      name: "mariadb - MariaDB",
      short: "mariadb",
      value: {
        packages: [{ name: "mariadb", metadata: { forDb: "mariadb" } }],
      },
    },
  ];
}
