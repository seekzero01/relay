# Engineering Principles

These principles apply to all code written in the Relay project.

---

# SOLID

## Single Responsibility Principle

- Each module, class, and function should have one responsibility.
- Separate business logic, persistence, validation, and transport layers.
- Keep controllers and API routes thin.

## Open/Closed Principle

- Extend existing behavior instead of modifying stable code.
- Prefer composition to branching large implementations.

## Liskov Substitution Principle

- Derived implementations must preserve the behavior and contracts of their abstractions.
- Avoid special-case implementations that violate expected behavior.

## Interface Segregation Principle

- Keep interfaces small and focused.
- Depend only on the methods that are actually required.

## Dependency Inversion Principle

- Depend on abstractions rather than concrete implementations.
- Inject dependencies instead of creating them inside business logic.

---

# KISS

- Prefer the simplest solution that satisfies the requirements.
- Avoid unnecessary abstractions.
- Keep functions small and readable.
- Optimize for maintainability over cleverness.

---

# DRY

- Eliminate duplicated business logic.
- Extract reusable code only after duplication becomes apparent.
- Share behavior through reusable services, utilities, or components.
- Avoid copy-paste implementations.

---

# YAGNI

- Implement only what is required today.
- Do not build speculative features.
- Avoid premature abstractions and extensibility.
- Add complexity only when justified by real requirements.

---

# General Guidelines

Always:

- Write readable code over clever code.
- Prefer composition to inheritance.
- Keep files focused on a single concern.
- Remove dead code instead of commenting it out.
- Refactor when complexity grows.

Avoid:

- God classes and large utility files.
- Deep nesting.
- Premature optimization.
- Over-engineering.
- Hidden side effects.
- Unused abstractions.