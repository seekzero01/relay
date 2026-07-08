# Git Workflow

This document defines the Git conventions used across the Relay project.

---

# Core Principles

- **NEVER commit directly to `main`**
- One feature = one branch
- One feature = one Git worktree
- Keep branches short-lived
- Merge through Pull Requests only

---

# Commit Conventions

Follow Conventional Commits.

Format:

```text
type(scope): description
```

Examples:

```text
feat(auth): implement JWT authentication
fix(api): validate webhook signature
docs(git): update workflow
refactor(search): simplify query builder
```

Allowed types:

- feat
- fix
- docs
- refactor
- test
- chore
- ci
- build
- perf
- style

Commit rules:

- One logical change per commit
- Use imperative mood
- Keep summary under 72 characters
- Avoid WIP or vague commit messages

---

# Branch Naming

Use descriptive branch names.

```text
feature/authentication
feature/notion-sync
fix/token-refresh
refactor/search-service
docs/git-workflow
chore/github-actions
```

---

# Git Worktree Workflow

Relay uses Git Worktrees for feature development.

Create a new worktree:

```bash
git checkout main
git pull origin main

git worktree add ../relay-auth \
  -b feature/authentication
```

After merging:

```bash
git worktree remove ../relay-auth
git branch -d feature/authentication
```

---

# Development Workflow

1. Update `main`
2. Create a feature worktree
3. Implement the feature
4. Run lint, typecheck, and tests
5. Commit using Conventional Commits
6. Open a Pull Request
7. Merge
8. Remove the worktree

---

# Pull Requests

Before requesting review:

- Ensure lint, typecheck, and tests pass
- Update documentation when needed
- Keep PRs focused on a single feature
- Link the related issue or specification

---

# AI-Native Practices

- One worktree per feature
- One AI conversation per feature
- Keep commits small and reviewable
- Verify all AI-generated code before merging
```