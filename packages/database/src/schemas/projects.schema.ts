import { index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users.schema.js";

export const projectsTable = pgTable(
    "projects",
    {
        id: uuid('id').primaryKey().defaultRandom(),
        name: text().notNull(),
        description: text(),
        userId: uuid()
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        createdAt: timestamp().notNull().defaultNow(),
        updatedAt: timestamp()
            .notNull()
            .defaultNow()
            .$onUpdate(() => new Date()),
    },
    (table) => [index("projects_user_id_idx").on(table.userId)],
);