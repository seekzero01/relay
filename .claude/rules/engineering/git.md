# Git Rules

## Branches

- Never commit directly to `main`.
- Create a dedicated branch for every feature, bug fix, or refactor.
- Keep branches short-lived.

---

## Worktrees

- Use one Git worktree per feature.
- Keep each worktree focused on a single task.
- Remove worktrees after the branch is merged.

---

## Commits

- Follow Conventional Commits.
- Keep commits focused on one logical change.
- Use the imperative mood.
- Avoid WIP commits.
- Keep commit summaries under 72 characters.

---

## Pull Requests

- Open one Pull Request per feature.
- Keep Pull Requests focused and reviewable.
- Ensure lint, typecheck, and tests pass before requesting review.
- Update relevant documentation before merging.

---

## AI Development

- Use one AI conversation per feature.
- Review all AI-generated code before committing.
- Never commit code you do not understand.