# Software Architecture

## Architecture Style

Relay follows a **modular service-oriented architecture**.

The system consists of two independent services:

- NestJS API
- FastAPI AI Service

Each service owns its own responsibilities and can evolve independently.

---

# Repository Structure

```

apps/

web/

api/

ai-service/

packages/

shared/

config/

docs/

docker/
```

---

# Component Diagram

```
             Frontend

                │

        REST API (HTTPS)

                │

        NestJS Backend

   ┌────────────┼────────────┐
   │            │            │
Auth      Projects      Documents
   │            │            │
   └────────────┼────────────┘

          PostgreSQL

                │

         HTTP Internal API

                │

        FastAPI AI Service

     Parser
     Chunker
     Embeddings
     Chat
```

---

# Responsibilities

## Frontend

Responsible for:

- Authentication
- Dashboard
- Upload UI
- Chat UI

Contains no business logic.

---

## NestJS

Responsible for:

- Authentication
- Users
- Projects
- Document metadata
- File upload
- Authorization
- Communication with AI Service

Acts as the single entry point for clients.

---

## FastAPI

Responsible for:

- Reading uploaded documents
- Text extraction
- Chunking
- Calling OpenAI
- Returning AI answers

Contains no authentication logic.

---

# Module Structure (NestJS)

```
src/

auth/

users/

projects/

documents/

common/

config/

database/
```

Each module owns:

- Controller
- Service
- DTOs
- Entities

---

# Module Structure (FastAPI)

```
app/

api/

services/

models/

utils/

main.py
```

---

# Communication

## Client → NestJS

REST API

```
POST /login

POST /documents

POST /chat
```

---

## NestJS → FastAPI

Internal HTTP

```
POST /process-document

POST /chat
```

No service is exposed directly to clients except the NestJS API.

---

# Database

## PostgreSQL

Tables

```
users

projects

documents
```

Relations

```
User

↓

Project

↓

Document
```

---

# Authentication

```
Client

↓

JWT

↓

NestJS Guard

↓

Controller

↓

Service
```

---

# Document Upload

```
Upload

↓

Validation

↓

Metadata

↓

Filesystem

↓

AI Service

↓

Processing
```

---

# AI Processing

```
Read file

↓

Extract text

↓

Split text

↓

Build prompt

↓

OpenAI

↓

Return answer
```

---

# Error Handling

NestJS

- Global Exception Filter
- ValidationPipe

FastAPI

- HTTPException
- Validation

---

# Logging

Every request logs:

- Timestamp
- Method
- Route
- Status
- Duration

Future:

- Request ID
- Correlation ID

---

# Configuration

Configuration is environment-based.

Examples:

```
DATABASE_URL

JWT_SECRET

OPENAI_API_KEY

AI_SERVICE_URL
```

---

# Testing Strategy

## Unit Tests

- Services
- Utilities

---

## Integration Tests

- Database
- Authentication

---

## End-to-End Tests

- Login
- Upload
- Chat

---

# Deployment

Development

```
Docker Compose

↓

Frontend

NestJS

FastAPI

PostgreSQL
```

Production (Future)

```
AWS ECS

↓

NestJS

↓

FastAPI

↓

RDS
```

---

# Design Principles

- Separation of Concerns
- Single Responsibility Principle
- Dependency Injection
- Modular Design
- Stateless Services
- API-first Development

---

# Future Evolution

As the platform grows, the architecture can evolve by introducing:

- Redis for caching
- BullMQ for asynchronous document processing
- Object storage (Amazon S3)
- pgvector for semantic search
- Background workers
- Webhooks
- API Keys
- Role-Based Access Control
- OpenTelemetry
- Kubernetes
- Terraform