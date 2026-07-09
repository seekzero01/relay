# Engineering Principles

## Purpose & Scope

These principles define the engineering standards for all code written in this project. They govern both human developers and AI coding agents to ensure the codebase remains readable, maintainable, testable, and scalable over time.

---

# Core Philosophy

The primary goal is **long-term maintainability**, not writing the shortest or most clever code.

Future developers (including yourself six months from now) must be able to understand the code without additional explanation.

When multiple implementations are possible, prioritize choices in this order:

1. Readability
2. Simplicity
3. Explicitness
4. Maintainability

Optimize performance **only** when there is measurable, profiling-backed evidence.

Always leave the codebase cleaner than you found it.

---

# 1. SOLID & Separation of Concerns (SoC)

## Single Responsibility / Separation of Concerns

Every module, class, function, or component must have one clear responsibility and a single reason to change.

Different layers and architectural concerns should never be mixed together.

### Rules

- Isolate Layers: Keep business logic, persistence, validation, transport, UI rendering, networking, authentication, logging, and configuration strictly separated.
- Thin Delivery Layers: Keep controllers, HTTP handlers, and API routes thin. Database mutations or complex business rules must not live inside them.
- UI Boundaries: Business logic and data fetching mechanics should not live deep inside UI presentation code.

### Recommended Architecture

```text
[Controller / API Route]
          ↓
   [Service Layer] (Business Rules)
          ↓
[Repository / Data Access]
          ↓
     [Database]
```

### ❌ Bad Architecture

```text
Controller / Handler
  ├── Validate raw HTTP request
  ├── Query database directly
  ├── Calculate business / financial rules
  ├── Send transactional email
  └── Transform and return JSON response
```

### AI Instructions

Always ask:

> Does this unit perform more than one basic responsibility?

If yes, split it into smaller, isolated units before implementing.

---

## Open/Closed Principle (OCP)

- Extend existing behavior by adding new code or configurations instead of modifying stable, tested source code.
- Prefer composition and polymorphic patterns over large `if/else` or `switch` statements.

---

## Liskov Substitution Principle (LSP)

- Derived implementations or classes must preserve the behavior, exceptions, and contracts of their base abstractions.
- Avoid special-case client checks or implementations that break expected API contracts.

---

## Interface Segregation Principle (ISP)

- Keep interfaces and type definitions small, cohesive, and focused.
- Clients should not be forced to depend on methods or properties they do not use.

---

## Dependency Inversion Principle (DIP)

- Depend on high-level abstractions (interfaces/types) rather than concrete implementations.
- Inject dependencies instead of instantiating heavy infrastructure utilities directly inside business logic components.

---

# 2. Don't Repeat Yourself (DRY)

Every piece of system knowledge, business rule, or logic path must have a single, authoritative, unambiguous implementation within the system.

## Rules

- Eliminate duplicated business logic, validation structures, constants, raw queries, transformations, and configurations.
- Extract shared behavior into reusable services, hooks, utilities, or components.
- Rule of Three: Extract reusable code only after structural duplication becomes explicitly apparent.
- Avoid copy-paste implementations.

> ⚠️ Minor code duplication is preferable to a poor, overly coupled abstraction.

### AI Instructions

When similar logic appears multiple times:

1. Identify the shared behavior pattern.
2. Extract a clean, reusable abstraction.
3. Verify that the abstraction does not introduce brittle architectural coupling.

---

# 3. Keep It Simple, Stupid (KISS)

The simplest correct solution is always the best solution.

Readable, explicit structures win over dense, implicit, or highly clever engineering patterns.

## Implementation Preferences

- Prefer explicit loops over deeply nested functional chains (`filter → map → reduce → flatMap`).
- Prefer explicit variables and descriptive naming.
- Prefer human-readable conditionals over syntax shortcuts or implicit coercion.

### ❌ Clever but Unmaintainable

```ts
const data = items
  ?.filter(i => i.active && !i.archived)
  .map(i => i.vals)
  .reduce((a, b) => [...a, ...b], [])
  ?.[0];
```

### ✅ Clean and Readable

```ts
const activeItems = items.filter(
  item => item.isActive && !item.isArchived
);

const flatValues = activeItems.flatMap(
  item => item.values
);

const primaryValue = flatValues[0];
```

### AI Instructions

Never optimize code for:

- fewer lines
- clever one-liners
- impressive language tricks

Optimize only for:

- readability
- deterministic execution
- easy debugging

---

# 4. You Aren't Gonna Need It (YAGNI)

Do not build functionality, features, or architectural scaffolds until they are explicitly required.

## Rules

- Implement only today's requirements.
- Do not build speculative frameworks.
- Avoid unused abstractions.
- Add complexity only when justified by real requirements.

### ❌ Speculative Over-Engineering

```text
AbstractPaymentFactoryProviderInterfaceManager
```

(when the application only supports Stripe)

### ✅ Lean Implementation

```text
StripeService
```

### AI Instructions

Implement **only** functional requirements explicitly outlined in the current request.

Ignore hypothetical future requirements.

---

# 5. Document Your Code (DYC)

Code structure and naming should be clean enough that documentation is rarely necessary.

Comments exist to explain **why**, not **what**.

## Rules

- Explain business decisions.
- Explain architectural constraints.
- Explain non-obvious optimizations.
- Explain edge cases.
- Explain external integration quirks.

### ❌ Redundant Comments

```ts
// Increment index by 1
index++;

// Get user profile
const user = getUserProfile(userId);
```

### ✅ Valuable Comments

```ts
// Retry policy exists because the downstream API
// occasionally returns stale cached responses
// during peak traffic.
```

### AI Instructions

Generate comments **only** when explaining:

- hidden assumptions
- architectural reasoning
- business context
- non-obvious implementation details

Never describe obvious syntax.

---

# 6. Test-Driven Development (TDD)

All business behavior must be verified through automated tests.

Follow the Red → Green → Refactor cycle.

## Workflow

### 1. 🔴 Red

Write a failing test describing the expected behavior.

### 2. 🟢 Green

Implement the smallest amount of code necessary.

### 3. 🔵 Refactor

Improve readability and design without changing behavior.

## Test Boundaries

Tests should verify:

- expected execution paths
- boundary cases
- validation
- regressions
- error handling

Test observable behavior—not implementation details.

### AI Instructions

Whenever generating or modifying functionality, also generate:

- unit tests
- integration tests (when appropriate)

Cover:

- success cases
- validation
- boundary conditions
- failure scenarios

---

# 7. Code Craftsmanship & Best Practices

## Naming Standards

### Descriptive Identifiers

Use clear, intent-revealing names.

Avoid generic placeholders.

| Context | ✅ Good | ❌ Bad |
|---------|---------|--------|
| Methods | `calculateInvoiceTotal()` | `process()` |
| Methods | `calculateTax()` | `run()` |
| Variables | `userAge` | `x` |
| Variables | `invoiceTotal` | `tmp` |
| Variables | `isAuthenticated` | `data` |

---

## Size & Complexity Limits

- Keep functions focused on a single purpose.
- Keep implementations short.
- Use guard clauses.
- Return early.
- Avoid deep nesting.

---

## Explicit Error Handling

- Never silently swallow exceptions.
- Never leave empty `catch` blocks.
- Log or propagate errors intentionally.
- Recover gracefully whenever possible.

---

## Code Consistency & Refactoring

- Follow the project's formatter.
- Follow linting rules.
- Respect directory structure.
- Remove dead code immediately.
- Remove commented-out implementations.
- Improve readability whenever touching existing code.

---

# AI Agent Checklist

Before producing code, verify:

- [ ] Single Responsibility
- [ ] Clear Separation of Concerns
- [ ] No Duplicated Logic
- [ ] Simple Implementation
- [ ] Descriptive Naming
- [ ] Only Necessary Abstractions
- [ ] Helpful Documentation
- [ ] Comprehensive Tests
- [ ] Consistent Formatting
- [ ] Explicit Error Handling
- [ ] Readability Prioritized
- [ ] Leave Code Cleaner Than Before

---

# The Golden Rule

> Write code as if the next engineer maintaining it is yourself six months from now.
>
> Every technical decision should actively reduce the cognitive overhead for future readers.