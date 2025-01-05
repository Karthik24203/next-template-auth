import {
  integer,
  pgTable,
  serial,
  varchar,
  unique,
  boolean,
} from "drizzle-orm/pg-core";

// Users Table
export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull().unique(),
});
