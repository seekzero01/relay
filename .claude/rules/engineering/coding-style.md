# Coding Style

## General Principles

- Prioritize readability over cleverness.
- Follow SOLID, DRY, KISS, and YAGNI.
- Write self-explanatory code.
- Prefer consistency over personal preference.
- Leave the codebase cleaner than you found it.

---

## Naming

- Use descriptive names for functions, variables, classes, and files.
- Avoid abbreviations unless they are widely understood.

Good:

```ts
getUserById()
calculateEmbedding()
refreshAccessToken()
```

Avoid:

```ts
get()
calc()
process()
tmp()
```

---

## Functions

- Keep functions focused on a single responsibility.
- Prefer small, composable functions.
- Use early returns to reduce nesting.
- Minimize the number of parameters.

---

## Classes

- Give each class a single responsibility.
- Prefer composition to inheritance.
- Depend on abstractions rather than implementations.
- Avoid large "God" classes.

---

## File Organization

- Give each file one primary responsibility.
- Keep related code together.
- Organize code by feature when practical.
- Remove dead code and unused files.

---

## Error Handling

- Handle expected errors explicitly.
- Return meaningful error messages.
- Never ignore exceptions silently.
- Fail fast when assumptions are violated.

---

## Comments

- Prefer self-documenting code.
- Comment only business rules, architectural decisions, or non-obvious tradeoffs.
- Never comment code that is already obvious.

---

## Formatting

- Use the project's formatter.
- Keep imports organized.
- Follow project formatting conventions.
- Do not manually format code against project tooling.

---

## Refactoring

- Eliminate duplication.
- Refactor code with mixed responsibilities.
- Improve unclear naming.
- Simplify code that becomes difficult to understand.
- Avoid unrelated refactoring while implementing features.

---

## Preferred Practices

Prefer:

- early returns
- immutable data where practical
- dependency injection
- small reusable components
- explicit types and interfaces

Avoid:

- deep nesting
- magic values
- large functions
- unnecessary abstractions
- commented-out code
- premature optimization