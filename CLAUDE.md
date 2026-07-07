# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure
This is a [Turborepo](https://turborepo.dev/) monorepo containing multiple applications and shared packages:

- `apps/api`: NestJS API application using Prisma.
- `apps/web`: Next.js frontend application.
- `apps/ai-service`: Python-based AI service.
- `packages/database`: Prisma schema and client generation.
- `packages/ui`: Shared React component library.
- `packages/types`: Shared TypeScript types.
- `packages/typescript-config`: Shared TypeScript configurations.
- `packages/eslint-config`: Shared ESLint configurations.

## Development Tasks

### General
- **Build all**: `turbo build`
- **Develop all**: `turbo dev`

### Filtering
You can run commands for specific packages/apps using `--filter`:
- **Build specific app**: `turbo build --filter=<app-name>`
- **Develop specific app**: `turbo dev --filter=<app-name>`

### Database (apps/api & packages/database)
- The database is managed via [Prisma](https://www.prisma.io/).
- Migrations and schema are located in `packages/database/prisma`.

### Testing
- **Run tests**: `turbo test` (check `package.json` in individual apps for specific test scripts).
- **Run specific API test**: Within `apps/api`, you can use standard Jest commands: `npm test` or `npm run test:e2e`.

## Architecture
- The monorepo uses `pnpm` workspaces.
- Shared code is extracted into `packages/`.
- Frontend (`web`) and Backend (`api`) are separated, with the shared database client package ensuring type safety across the stack.