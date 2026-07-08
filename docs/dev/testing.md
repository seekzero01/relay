---
paths:
  - "**/*.test.*"
  - "**/*.spec.*"
  - "**/*.e2e.*"
---

# Testing Rules

## General

- Write tests for every new feature and bug fix.
- Write tests alongside implementation, not afterward.
- Test behavior, not implementation details.
- Follow the existing testing patterns in the repository.
- Keep tests deterministic and independent.

---

# Test Structure

- Follow the Arrange-Act-Assert (AAA) pattern.
- Each test should verify one behavior.
- Use descriptive test names.

Example:

```ts
it("should return 401 when authentication token is missing")
```

---

# Unit Tests

Test:

- Business logic
- Validation
- Data transformations
- Error handling
- Edge and boundary cases

Do not test:

- Framework internals
- Private methods directly
- Third-party libraries

Mock external dependencies.

---

# Integration Tests

Test interactions between:

- Services
- Database
- Cache
- External APIs

Use real internal components where practical.

Mock external services unless explicitly testing integrations. 

---

# End-to-End Tests

Cover only critical user workflows.

- Authentication
- Core application flows
- High-value user journeys

Avoid testing every edge case through E2E tests.

---

# Test Quality

Every test should be:

- Fast
- Independent
- Repeatable
- Self-validating
- Readable

Avoid:

- Shared mutable state
- Time-dependent assertions
- Order-dependent tests
- Flaky tests

---

# Before Completing Work

Verify:

- New functionality is covered by tests.
- Existing tests still pass.
- No tests were modified solely to make them pass.
- Lint, typecheck, and test suite succeed before committing.