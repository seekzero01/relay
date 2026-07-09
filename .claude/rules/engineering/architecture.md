# Architecture Rules

## Service Boundaries

- Keep services independent and loosely coupled.
- Give each service a single, well-defined responsibility.
- Do not duplicate business logic across services.
- Do not bypass service boundaries.

---

## Client Communication

- Route all client requests through the NestJS API.
- Never expose internal services directly to clients.
- Treat NestJS as the single public entry point.

---

## Service Responsibilities

### NestJS

- Own authentication and authorization.
- Own business logic and API orchestration.
- Manage users, projects, and document metadata.
- Coordinate communication with the AI service.
- Do not implement AI processing logic.

### FastAPI

- Own document parsing and processing.
- Own chunking, embeddings, retrieval, and AI interactions.
- Do not implement authentication or authorization.
- Do not expose public APIs.

---

## Module Design

- Organize code by feature.
- Give each module a single responsibility.
- Keep modules cohesive and loosely coupled.
- Keep public interfaces minimal.

---

## Layering

- Respect architectural boundaries.
- Do not access infrastructure from presentation layers.
- Keep business logic independent of frameworks whenever practical.
- Avoid circular dependencies.

---

## Communication

- Use the project's defined communication mechanism between services.
- Validate all data crossing service boundaries.
- Keep service contracts explicit and versionable.

---

## Data Ownership

- Let each service own its data and responsibilities.
- Do not share implementation details between services.
- Exchange data only through defined APIs or contracts.

---

## Dependency Management

- Depend on abstractions rather than concrete implementations.
- Minimize cross-module dependencies.
- Introduce new dependencies only when justified.

---

## Configuration

- Store configuration in environment variables.
- Never hardcode secrets, credentials, or environment-specific values.
- Centralize configuration management.

---

## Error Handling

- Handle failures at service boundaries.
- Return consistent error responses.
- Avoid leaking internal implementation details.

---

## Logging

- Log meaningful events and errors.
- Include sufficient context for debugging.
- Never log secrets or sensitive user data.

---

## Scalability

- Design services to remain stateless whenever practical.
- Keep components independently deployable.
- Prefer asynchronous processing for long-running operations.

---

## Architecture Changes

- Preserve separation of concerns.
- Preserve clear service boundaries.
- Update architecture documentation when introducing structural changes.
- Justify any architectural exception before implementation.