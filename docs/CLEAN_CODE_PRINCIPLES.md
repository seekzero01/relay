# Clean Code Guidelines for AI Agents

> **Purpose:**  
> These guidelines define the engineering standards an AI coding agent should follow when generating, modifying, or reviewing code. The primary objective is to produce code that is readable, maintainable, testable, and easy to evolve over time.

---

# Core Philosophy

The primary goal is **long-term maintainability**, not writing the shortest or most clever code.

When multiple implementations are possible:

1. Prefer readability.
2. Prefer simplicity.
3. Prefer explicitness.
4. Prefer maintainability.
5. Optimize only when there is measurable evidence.

Always leave the codebase cleaner than you found it.

---

# 1. Separation of Concerns (SoC)

## Principle

Every module, class, function, or component should have one clear responsibility.

Different concerns should never be mixed together.

Examples of concerns include:

- UI rendering
- Business logic
- Validation
- Data access
- Networking
- Authentication
- Logging
- Error handling
- Configuration

---

## Rules

- Every file should have a clear purpose.
- Every class should represent one concept.
- Every function should perform one task.
- Business logic should not live inside UI code.
- Database code should not be mixed with HTTP handlers.
- Validation should be isolated from persistence.

---

## Good

```
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

---

## Bad

```
Controller

- validate request
- query database
- calculate business rules
- send email
- transform response
```

---

## AI Instructions

Always ask:

> "Does this function perform more than one responsibility?"

If yes:

Split it into smaller units.

---

# 2. Document Your Code (DYC)

## Principle

Code should be understandable without reading documentation.

Documentation exists to explain **why**, not **what**.

---

## Document

- public APIs
- exported functions
- complex algorithms
- architectural decisions
- unexpected business rules
- non-obvious optimizations

---

## Avoid documenting

- obvious code
- self-explanatory variables
- trivial loops
- simple assignments

Bad

```ts
// increment i
i++;
```

Good

```ts
// Retry because external API occasionally returns stale cache
```

---

## AI Instructions

Generate comments only when they explain:

- why something exists
- why an unusual solution was chosen
- hidden assumptions
- business context

Never generate comments describing obvious syntax.

---

# 3. Don't Repeat Yourself (DRY)

## Principle

Every piece of knowledge should have a single authoritative implementation.

Avoid duplicated:

- logic
- validation
- constants
- SQL
- configuration
- transformations

---

## Rules

Extract duplication into:

- reusable functions
- utilities
- hooks
- services
- shared modules

---

Bad

```
calculateTax()

calculateTaxAgain()

calculateTaxV2()
```

Good

```
calculateTax()
```

---

## AI Instructions

When similar logic appears multiple times:

1. Identify the shared behavior.
2. Extract reusable abstraction.
3. Avoid premature abstraction if duplication only occurs once.

Remember:

Small duplication is preferable to poor abstraction.

---

# 4. Keep It Simple, Stupid (KISS)

## Principle

The simplest correct solution is usually the best solution.

Readable code is more valuable than clever code.

---

## Prefer

Simple loops

instead of

Nested functional chains

Prefer

Explicit variables

instead of

Complex inline expressions

Prefer

Readable conditionals

instead of

Boolean tricks

---

Bad

```ts
items?.filter(...).map(...).reduce(...).flatMap(...)
```

Good

```ts
const activeUsers = users.filter(...)
const emails = activeUsers.map(...)
```

---

## AI Instructions

Never optimize for:

- fewer lines
- impressive syntax
- clever one-liners

Optimize for:

- readability
- maintainability
- debugging

---

# 5. Test-Driven Development (TDD)

## Principle

Behavior should be verified through automated tests.

Follow the Red → Green → Refactor cycle.

1. Write a failing test.
2. Implement the minimum code.
3. Make the test pass.
4. Refactor without changing behavior.

[oai_citation:1‡LinkedIn](https://www.linkedin.com/posts/nk-systemdesign-one_6-rules-thatll-help-you-write-clean-code-activity-7449798034906935296-yhnB?utm_source=chatgpt.com)

---

## Tests should verify

- expected behavior
- edge cases
- error handling
- validation
- regressions

---

## AI Instructions

Whenever generating new functionality:

Also generate:

- unit tests
- integration tests when appropriate
- edge cases
- failure scenarios

Avoid testing implementation details.

Test observable behavior.

---

# 6. You Aren't Gonna Need It (YAGNI)

## Principle

Do not build functionality until it is actually required.

Avoid speculative engineering.

---

Do NOT create:

- future configuration
- generic frameworks
- extension points
- unused interfaces
- unnecessary abstractions

unless they are currently required.

---

Bad

```
AbstractPaymentFactoryProviderManager
```

when only Stripe exists.

---

Good

```
StripeService
```

---

## AI Instructions

Only implement requirements explicitly requested.

Ignore hypothetical future features.

---

# Additional Best Practices

Although not explicitly listed in the original six rules, these practices reinforce them and are widely accepted in professional software engineering.  [oai_citation:2‡arXiv](https://arxiv.org/abs/2208.07056?utm_source=chatgpt.com)

## Naming

Use descriptive names.

Prefer

```
calculateInvoiceTotal()
```

instead of

```
process()
```

---

Variables should describe intent.

Good

```
userAge
invoiceTotal
isAuthenticated
```

Bad

```
x
tmp
value
data
```

---

# Small Functions

Aim for:

- one purpose
- short implementation
- descriptive name

If a function requires multiple paragraphs to understand, split it.

---

# Explicit Error Handling

Never silently ignore errors.

Always:

- propagate
- log
- recover intentionally

Avoid empty catch blocks.

---

# Consistent Formatting

Follow project formatting rules.

Never invent a new style.

Respect:

- linter
- formatter
- naming conventions

---

# Readability First

Future developers should understand the code without additional explanation.

Readable code always wins over clever code.

---

# Refactoring

Whenever modifying existing code:

- improve names
- remove duplication
- simplify logic
- reduce nesting
- eliminate dead code

without changing behavior.

---

# AI Agent Checklist

Before producing code, verify:

- [ ] Single Responsibility
- [ ] Clear Separation of Concerns
- [ ] No duplicated logic
- [ ] Simple implementation
- [ ] Descriptive naming
- [ ] Only necessary abstractions
- [ ] Helpful documentation where appropriate
- [ ] Comprehensive tests
- [ ] Consistent formatting
- [ ] Explicit error handling
- [ ] Readability prioritized over cleverness
- [ ] Leave the code cleaner than before

---

# Golden Rule

> Write code as if the next engineer maintaining it is yourself six months from now.

Every decision should reduce cognitive load for future readers.