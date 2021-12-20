import { DbAbstraction, DbName } from "@/types";

export default function databaseAbstractions(db?: DbName): DbAbstraction[] {
  const dbas: DbAbstraction[] = [
    {
      name: "Knex - SQL Query Builder",
      short: "knex",
      value: { packages: [{ name: "knex", includesTypeDefs: true }] },
      dbSupport: {
        postgresql: true,
        oracle: true,
        mysql: true,
        cockroachdb: true,
        mariadb: true,
      },
    },
    {
      name: "Prisma",
      short: "prisma",
      value: { packages: [{ name: "prisma", includesTypeDefs: true }] },
      dbSupport: {
        postgresql: true,
        mysql: true,
        sqlite: true,
        mssql: true,
        mongodb: true,
      },
    },
    {
      name: "Sequelize",
      short: "sequelize",
      value: { packages: [{ name: "sequelize" }] },
      dbSupport: {
        postgresql: true,
        mysql: true,
        sqlite: true,
        mssql: true,
      },
    },
    {
      name: "TypeORM",
      short: "typeorm",
      value: { packages: [{ name: "typeorm", includesTypeDefs: true }] },
      dbSupport: {
        postgresql: true,
        mysql: true,
        sqlite: true,
        mssql: true,
        cockroachdb: true,
        oracle: true,
      },
    },
    {
      name: "MikroORM",
      short: "mikro-orm",
      value: { packages: [{ name: "mikro-orm", includesTypeDefs: true }] },
      dbSupport: {
        postgresql: true,
        mysql: true,
        sqlite: true,
        mssql: true,
        cockroachdb: true,
        oracle: true,
        mongodb: true,
      },
    },
    {
      name: "Mongoose - ODM For MongoDB",
      short: "mongoose",
      value: { packages: [{ name: "mongoose", includesTypeDefs: true }] },
      dbSupport: {
        mongodb: true,
      },
    },
  ];

  return db ? dbas.filter((item) => item.dbSupport?.[db]) : [];
}
