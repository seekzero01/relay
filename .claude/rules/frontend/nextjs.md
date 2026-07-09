---
paths:
  - "src/**/*.{ts,tsx,js,jsx}"
---

# Next.js Guidelines

## App Router

- Use the App Router exclusively.
- Organize routes using the `app/` directory.
- Follow Next.js file conventions (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, etc.).
- Keep route segments focused on a single feature.

---

## Server vs Client Components

- Default to **Server Components**.
- Add `"use client"` only when client-side interactivity or browser APIs are required.
- Keep Client Components as small as possible.
- Never convert an entire page into a Client Component because a child requires interactivity.
- Pass data from Server Components to Client Components through props whenever practical.

---

## Data Fetching

- Fetch data in Server Components whenever possible.
- Fetch data directly from the appropriate backend service or API client.
- Avoid duplicate requests for the same data.
- Use streaming and Suspense where they improve user experience.
- Handle loading, empty, and error states explicitly.

---

## Mutations

- Use Server Actions when they fit the application's architecture.
- Keep mutations close to the feature that owns them.
- Validate all user input before sending requests.
- Refresh or invalidate affected data after successful mutations.

---

## Routing & Navigation

- Use the App Router navigation APIs.
- Prefer `<Link>` for navigation.
- Use programmatic navigation only when required.
- Keep routing logic simple and predictable.

---

## Layouts

- Use layouts to share navigation, providers, and common UI.
- Keep layouts free of feature-specific business logic.
- Avoid duplicating shared UI across pages.

---

## Rendering

- Choose the simplest rendering strategy that satisfies the feature.
- Avoid unnecessary client-side rendering.
- Keep server-rendered pages fast and lightweight.

---

## Performance

- Lazy-load heavy components when appropriate.
- Optimize images using Next.js features.
- Optimize fonts using `next/font`.
- Avoid unnecessary JavaScript in the client bundle.
- Optimize only after identifying real bottlenecks.

---

## Project Structure

- Organize code by feature rather than by file type.
- Keep route-specific components close to their routes.
- Move reusable code into shared modules.
- Avoid deeply nested directory structures.

---

## Error Handling

- Provide route-level error boundaries where appropriate.
- Display user-friendly error messages.
- Handle expected failures gracefully.
- Never expose internal implementation details to users.

---

## Metadata

- Define metadata using the App Router Metadata API.
- Provide meaningful titles and descriptions.
- Configure Open Graph and social metadata when applicable.

---

## Accessibility

- Use semantic HTML.
- Ensure keyboard navigation works correctly.
- Provide accessible labels for interactive elements.
- Use ARIA attributes only when semantic HTML is insufficient.

---

## Framework Documentation

Before implementing or modifying Next.js functionality:

- Read the relevant version-matched documentation from `apps/web/node_modules/next/dist/docs/`.
- Treat the bundled Next.js documentation as the source of truth.
- Prefer official framework guidance over outdated patterns or model knowledge.

---

## AI Instructions

Before implementing a Next.js feature, verify:

- Is a Server Component sufficient?
- Is `"use client"` actually required?
- Does the implementation follow App Router conventions?
- Is data fetched in the appropriate place?
- Can client-side JavaScript be reduced?
- Are layouts and routing used correctly?
- Does the implementation follow the project's architecture and coding standards?