---
paths:
  - "packages/database/**/*"
---

# Database Guidelines

## Package Structure

- Treat `packages/database` as the single source of truth for all database-related code.
- Keep the Prisma schema in `packages/database/prisma/schema.prisma`.
- Configure Prisma exclusively through `packages/database/prisma.config.ts`.
- Keep migrations under `packages/database/prisma/migrations/`.
- Export the Prisma Client from `packages/database/src/client.ts`.
- Import the shared Prisma Client instead of creating additional instances.
- Never duplicate database configuration outside `packages/database`.

---

## Database Design

- Design schemas with normalization as the default.
- Denormalize only when justified by measured performance.
- Define primary keys for every table.
- Use foreign keys to enforce referential integrity.
- Choose appropriate data types for each column.
- Avoid storing multiple values in a single column.
- Prefer `NOT NULL` where applicable.
- Enforce data integrity with database constraints.

---

## Prisma

- Use Prisma as the primary data access layer.
- Keep the Prisma schema synchronized with the database.
- Generate the Prisma Client after schema changes.
- Model relations explicitly on both sides.
- Use enums for finite value sets.
- Add indexes for frequently queried relation fields.
- Prefer explicit relation names for complex schemas.
- Keep models focused and easy to understand.
- Use the Rust-free `prisma-client` generator.
- Configure Prisma through `prisma.config.ts`.
- Use Prisma Migrate for all schema changes.
- Never edit generated Prisma Client files manually.

---

## Schema Evolution

- Manage all schema changes through Prisma Migrate.
- Keep migrations small and deterministic.
- Never modify applied migrations.
- Review every migration before applying it.
- Use the expand-and-contract pattern for breaking schema changes.
- Separate migration generation from migration execution.

---

## Query Design

- Select only the required columns.
- Avoid `SELECT *`.
- Filter data as early as possible.
- Prefer explicit joins when they improve readability.
- Always paginate large result sets.
- Avoid unnecessary sorting and grouping.
- Write readable queries before optimizing them.

---

## Indexing

- Create indexes based on real query patterns.
- Index frequently filtered, joined, and sorted columns.
- Use composite indexes only for known access patterns.
- Remove unused indexes.
- Balance read performance against write overhead.
- Select the appropriate index type for each workload.

---

## Performance

- Measure before optimizing.
- Use `EXPLAIN ANALYZE` for performance investigations.
- Verify index usage.
- Eliminate N+1 queries.
- Fetch only the required rows.
- Optimize the highest-impact queries first.

---

## Transactions

- Keep transactions short.
- Group related operations into a single transaction.
- Roll back failed transactions completely.
- Avoid long-running transactions.

---

## Concurrency

- Design for concurrent access.
- Use appropriate transaction isolation levels.
- Avoid unnecessary locks.
- Handle deadlocks gracefully.

---

## Bulk Operations

- Batch large write operations.
- Prefer bulk inserts for imports.
- Use set-based operations instead of row-by-row processing.
- Analyze tables after large imports.

---

## Security

- Always use parameterized queries.
- Never concatenate user input into SQL.
- Apply the principle of least privilege.
- Keep secrets outside the database.

---

## Monitoring

- Monitor slow queries.
- Review execution plans for critical operations.
- Monitor index usage.
- Remove obsolete indexes.
- Investigate regressions before optimizing.

---

## AI Instructions

Before generating or modifying database code, verify:

- Is the change located in `packages/database`?
- Is the Prisma schema the source of truth?
- Is a migration required?
- Are relations modeled correctly?
- Are constraints and indexes appropriate?
- Does the query fetch only the required data?
- Can the query use an existing index?
- Has performance been considered with `EXPLAIN ANALYZE` when necessary?
- Does the change preserve data integrity?
- Was the Prisma Client regenerated after schema changes?