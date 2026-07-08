---
paths:
  - "apps/**"
  - "packages/**"
  - "**/*.ts"
  - "**/*.tsx"
  - "**/*.py"
---

# Security Rules

## General

- Treat all user input as untrusted.
- Validate and sanitize all external input.
- Follow the principle of least privilege.
- Fail securely with explicit error handling.
- Never sacrifice security for convenience.

---

# Authentication & Authorization

- Authenticate before authorizing access.
- Verify permissions for every protected resource.
- Never rely on client-side authorization.
- Use secure, short-lived access tokens.
- Store secrets and tokens securely.

---

# Secrets

- Never hardcode secrets, API keys, or credentials.
- Load secrets from environment variables or a secrets manager.
- Do not log secrets or sensitive data.
- Never commit `.env` files or credentials to the repository.

---

# Input Validation

- Validate all request bodies, query parameters, path parameters, and headers.
- Reject unexpected or malformed input.
- Use parameterized queries or ORM protections to prevent injection attacks.
- Escape or sanitize user-generated content when rendering.

---

# Data Protection

- Use HTTPS for all external communication.
- Encrypt sensitive data at rest when applicable.
- Collect and store only the data required by the application.
- Avoid exposing internal implementation details in API responses.

---

# Logging

- Log security-relevant events.
- Never log passwords, tokens, API keys, or personal data.
- Return generic error messages to clients.
- Record detailed errors only in server logs.

---

# Dependencies

- Use actively maintained dependencies.
- Keep dependencies up to date.
- Remove unused packages.
- Avoid introducing unnecessary dependencies.

---

# AI-Generated Code

- Review all AI-generated code for security risks.
- Check authentication, authorization, and input validation.
- Verify database queries are safe.
- Verify external API usage is secure.
- Never merge AI-generated code without human review.