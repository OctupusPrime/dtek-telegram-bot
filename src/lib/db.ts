import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

interface UsersTable {
  id: number;
  city: string;
  street?: string;
  house?: string;
  updatestate?: string;
}

interface Database {
  users: UsersTable;
}

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
});

export { db };
