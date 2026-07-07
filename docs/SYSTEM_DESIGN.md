# System Design

## Overview

Relay is an AI-powered knowledge platform that allows engineering teams to upload documents and interact with them using natural language.

Instead of manually searching through documentation, users can ask questions and receive AI-generated answers grounded in their uploaded documents.

The system follows a service-oriented architecture with two backend services:

- **NestJS API** — business logic
- **FastAPI AI Service** — document processing and AI inference

---

# Goals

- Demonstrate production-ready backend engineering
- Keep business logic separate from AI workloads
- Build a scalable and maintainable architecture
- Support future integrations and horizontal scaling

---

# Functional Requirements

## Authentication

- User registration
- Login
- JWT Authentication
- Protected routes

---

## Projects

Users can:

- Create project
- Delete project
- View project

Projects isolate documents.

---

## Documents

Users can:

- Upload PDF
- Upload Markdown
- List uploaded documents
- Delete documents

---

## AI Processing

When a document is uploaded:

- Extract text
- Split into chunks
- Generate embeddings
- Store searchable knowledge

---

## AI Chat

Users can ask:

> How does authentication work?

The system should:

- Find relevant document chunks
- Generate an answer
- Return referenced documents

---

# Non-Functional Requirements

## Performance

| Operation | Target |
|------------|---------|
| Login | <200 ms |
| CRUD | <100 ms |
| Upload | <500 ms |
| AI Chat | <3 s |

---

## Availability

Target:

- 99.9%

---

## Scalability

Support horizontal scaling for:

- API
- AI workers

API services should remain stateless.

---

## Reliability

- Health checks
- Validation
- Graceful failures

---

## Security

- JWT
- Password hashing
- HTTPS
- Input validation

---

## Maintainability

- Modular architecture
- SOLID principles
- Automated tests
- OpenAPI documentation

---

# High-Level Architecture

```
                Next.js

                   │

            REST / HTTPS

                   │

             NestJS API

        Authentication
        Projects
        Documents

          │        │

 PostgreSQL      HTTP

                   │

          FastAPI AI Service

      Chunking
      Embeddings
      Retrieval
      Chat

                   │

             OpenAI API
```

---

# User Flow

```
Login

↓

Create Project

↓

Upload Document

↓

Document Processing

↓

Ask Question

↓

Receive AI Answer
```

---

# Upload Flow

```
Client

↓

NestJS

↓

Save metadata

↓

Upload file

↓

FastAPI

↓

Extract text

↓

Chunk

↓

Generate embeddings

↓

Ready
```

---

# Chat Flow

```
Question

↓

NestJS

↓

Authenticate

↓

FastAPI

↓

Similarity Search

↓

LLM

↓

Answer

↓

Client
```

---

# REST API

## Authentication

```
POST /auth/register

POST /auth/login

GET /auth/me
```

---

## Projects

```
GET /projects

POST /projects

DELETE /projects/:id
```

---

## Documents

```
POST /documents

GET /documents

DELETE /documents/:id
```

---

## AI

```
POST /chat
```

---

# Technology Stack

## Frontend

- Next.js
- TailwindCSS
- shadcn/ui
- TanStack Query

## Backend

- NestJS
- FastAPI

## Database

- PostgreSQL

## AI

- OpenAI API

## DevOps

- Docker Compose
- GitHub Actions

---

# Future Improvements

- Redis
- BullMQ
- pgvector
- Background jobs
- RBAC
- API Keys
- Audit Logs
- AWS deployment