---
paths:
  - "**/*.test.*"
  - "**/*.spec.*"
  - "**/*.e2e.*"
---

# Testing Conventions

- Use descriptive test names: `it('should throw error when user is not authenticated')`
- Follow Arrange-Act-Assert pattern
- Mock external API calls
- Test both success and error cases
- Minimum 80% coverage for new code