import { Generated, Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";

interface UsersTable {
  id: Generated<number>;
  user_id: number;
  name: string;
  city?: string;
  street: string;
  house: string;
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
