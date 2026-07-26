import {
    index,
    integer,
    pgTable,
    text,
    timestamp,
    uuid,
} from "drizzle-orm/pg-core";
import { projects } from "./project.schema.js";

export const documents = pgTable(
    "documents",
    {
        id: uuid('id').primaryKey().defaultRandom(),
        name: text().notNull(),
        filePath: text().notNull(),
        mimeType: text().notNull(),
        size: integer().notNull(),
        projectId: uuid()
            .notNull()
            .references(() => projects.id, { onDelete: "cascade" }),
        createdAt: timestamp().notNull().defaultNow(),
        updatedAt: timestamp()
            .notNull()
            .defaultNow()
            .$onUpdate(() => new Date()),
    },
    (table) => [index("documents_project_id_idx").on(table.projectId)],
);