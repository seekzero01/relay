import { index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "./user.schema.js";

export const projects = pgTable(
    "projects",
    {
        id: uuid('id').primaryKey().defaultRandom(),
        name: text().notNull(),
        description: text(),
        userId: uuid()
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
        createdAt: timestamp().notNull().defaultNow(),
        updatedAt: timestamp()
            .notNull()
            .defaultNow()
            .$onUpdate(() => new Date()),
    },
    (table) => [index("projects_user_id_idx").on(table.userId)],
);