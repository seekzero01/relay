import { pgTable, text, timestamp, index, uuid } from "drizzle-orm/pg-core";
import {user} from "./user.schema.js";

export const session = pgTable(
    "sessions",
    {
        id: uuid("id").primaryKey(),
        expiresAt: timestamp("expires_at").notNull(),
        token: text("token").notNull().unique(),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at")
            .$onUpdate(() => /* @__PURE__ */ new Date())
            .notNull(),
        ipAddress: text("ip_address"),
        userAgent: text("user_agent"),
        userId: uuid("user_id")
            .notNull()
            .references(() => user.id, { onDelete: "cascade" }),
    },
    (table) => [index("sessions_userId_idx").on(table.userId)],
);