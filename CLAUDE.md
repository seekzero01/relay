@AGENTS.md

See @README.md for project overview and @package.json for available commands.

# Additional Context
- Git workflow: @docs/dev/git-workflow.md
- API conventions: @docs/design/api-conventions.md
- Testing guide: @docs/dev/testing.md
- Code standards: @docs/design/engineering-principles.md
- Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

## Architecture Overview
This repository uses a modular service-oriented architecture:
- **`apps/web`**: Next.js frontend (UI layer only).
- **`apps/api`**: NestJS backend acting as the primary entry point, handling auth, user management, and document metadata.
- **`apps/ai-service`**: FastAPI service for document processing (text extraction, chunking) and AI interaction.
- **`packages/`**: Shared resources including `database` (Prisma), `types`, and `ui` (React components).

The services communicate via REST APIs, with the NestJS API orchestrating requests to the FastAPI AI service. PostgreSQL is used for data storage, managed via Prisma.

## Common Development Tasks

### General
- **Build all**: `turbo build`
- **Develop all**: `turbo dev`

### Package-Specific Commands
You can run commands for specific apps or packages using `--filter`:
- **Develop specific app**: `turbo dev --filter=<app-name>` (e.g., `apps/api`, `apps/web`)
- **Run tests**: `turbo test` (or `npm test` inside an app directory)

### Database (Prisma)
- The database schema is located in `packages/database/prisma/schema.prisma`.
- When modifying the schema, follow standard Prisma workflows (migration generation, client regeneration).

## Repository structure
```text
apps/
  ai-service/   # FastAPI AI service
  api/          # NestJS backend
  web/          # Next.js frontend
packages/
  database/     # Prisma schema & client
  types/        # Shared TypeScript types
  ui/           # Shared React components
docs/           # Detailed architectural and design documentation
```