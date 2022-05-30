export const knexConfig = {
  client: "postgresql",
  debug: false,
  connection: {
    host: "dev-tummi-db-us-east-1.c1u0znlor81i.us-east-1.rds.amazonaws.com",
    port: 5432,
    user: "admin_tummi",
    password: "2Ao4`#NFX7CoAJ~5",
    database: "test_thummi_db",
    supportBigNumbers: true,
    bigNumberStrings: true,
    multipleStatements: true,
    dateStrings: true,
  },
  pool: {
    min: 1,
    max: 1,
  },
  migrations: {
    tableName: "migrations",
  },
  seeds: {
    directory: "./seeds",
  },
  onUpdateTrigger: (table: string): string => `
      CREATE TRIGGER ${table}_updatedAt
      BEFORE UPDATE ON "${table}"
      FOR EACH ROW
      EXECUTE PROCEDURE on_update_timestamp();
    `,
  deleteUpdateTrigger: (table: string): string => `
      DROP TRIGGER IF EXISTS ${table}_updatedAt ON "${table}";
    `,
};
