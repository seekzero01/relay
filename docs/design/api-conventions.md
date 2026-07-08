# API Conventions

These conventions apply to all HTTP APIs in the Relay project.

---

# General Principles

- Design RESTful APIs.
- Use resource-oriented URLs.
- Keep endpoints predictable and consistent.
- Version APIs only when breaking changes are introduced.

---

# URL Design

Use nouns instead of verbs.

Good:

```text
GET    /users
GET    /users/{id}
POST   /users
PATCH  /users/{id}
DELETE /users/{id}
```

Avoid:

```text
/getUsers
/createUser
/deleteUser
```

Use lowercase and kebab-case.

Good:

```text
/user-profiles
/slack-workspaces
```

---

# HTTP Methods

| Method | Purpose |
|---------|----------|
| GET | Read resources |
| POST | Create resources |
| PUT | Replace a resource |
| PATCH | Partially update a resource |
| DELETE | Remove a resource |

---

# Request Validation

- Validate all request input.
- Reject invalid requests with appropriate HTTP status codes.
- Never trust client input.
- Validate query parameters, path parameters, headers, and request bodies.

---

# Response Format

Successful responses should return:

```json
{
  "data": {}
}
```

Errors should return:

```json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "User not found"
  }
}
```

Keep error responses consistent across all endpoints.

---

# HTTP Status Codes

Use standard status codes.

Common responses:

- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 409 Conflict
- 422 Unprocessable Entity
- 429 Too Many Requests
- 500 Internal Server Error

---

# Pagination

Use cursor-based pagination for collections.

Example:

```text
GET /documents?cursor=abc123&limit=20
```

Avoid offset pagination for large datasets.

---

# Filtering & Sorting

Filtering:

```text
GET /documents?status=processed
```

Sorting:

```text
GET /documents?sort=createdAt&order=desc
```

Searching:

```text
GET /documents?query=vector
```

---

# Idempotency

- GET, PUT, PATCH, and DELETE should be idempotent whenever possible.
- Support idempotency keys for operations that may be retried.

---

# API Documentation

Every endpoint should document:

- Purpose
- Authentication requirements
- Request parameters
- Request body
- Response schema
- Error responses