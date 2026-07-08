# Coding Style

This document defines the coding standards for the Relay project.

---

# General Principles

- Prioritize readability over cleverness.
- Follow SOLID, DRY, KISS, and YAGNI (reference ../engineering-principles.md)
- Write self-explanatory code.
- Prefer consistency to personal preference.
- Leave the codebase cleaner than you found it.

---

# Naming

Use descriptive names.

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

# Functions

- Keep functions focused on a single responsibility.
- Prefer small, composable functions.
- Minimize nesting by using early returns.
- Avoid functions with excessive parameters.

---

# Classes

- Keep classes focused on one responsibility.
- Prefer composition to inheritance.
- Depend on abstractions, not implementations.
- Avoid large "God" classes.

---

# File Organization

- One primary responsibility per file.
- Keep related code together.
- Group files by feature rather than by type where practical.
- Remove unused files and dead code.

---

# Error Handling

- Handle expected errors explicitly.
- Provide meaningful error messages.
- Never silently ignore exceptions.
- Fail fast when assumptions are violated.

---

# Comments

Write code that explains itself.

Use comments only to explain:

- business rules
- non-obvious decisions
- architectural tradeoffs

Avoid comments that simply restate the code.

---

# Formatting

- Use the project's formatter.
- Keep imports organized.
- Prefer consistent spacing and indentation.
- Avoid unnecessary blank lines.

Formatting should never be debated in code review.

---

# Code Reviews

Review for:

- readability
- correctness
- maintainability
- simplicity
- consistency

Reject code that introduces unnecessary complexity.

---

# Refactoring

Refactor when:

- duplication appears
- functions become difficult to understand
- responsibilities become mixed
- naming becomes unclear

Avoid refactoring unrelated code while implementing a feature.

---

# Preferred Practices

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