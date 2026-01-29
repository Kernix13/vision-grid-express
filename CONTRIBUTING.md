# Contributing Guidelines

Thanks for your interest in contributing!

Please note that all contributors are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to uphold these guidelines.

## How to Contribute

1. Check existing issues to avoid duplicates.
2. If you want to work on something, **comment** on the issue first.
3. Once approved, the issue will be assigned to you.
4. Open a pull request when ready.

> Note: Only collaborators can be formally assigned via GitHub. Otherwise, a comment confirms ownership.

## Branching & Commit Guidelines

Branch naming:

```
feature/short-feature-description
bug/fix-description
```

Commit messages follow conventional prefixes, e.g.:

- `feat:` — new feature
- `bug:` / `fix:` — bug fix
- `chore:` — build or maintenance
- `docs:` — documentation changes
- `refactor:` — code changes that don’t add features

Example commit example:

```
feat: update modal image fade logic
```

## Pull Request Process

- Follow the instructions in the Pull Request template
- Reference the related issue in your PR description (`Closes #87`)
- One change per PR (small and focused)
- PR title should use the same prefix as the commit

Example PR title:

```
feat: update modal image fade logic
```

## Code Style

- Follow project formatting
- Use meaningful names — avoid abbreviations
- Keep functions small and focused

> A PR may request minor formatting or naming tweaks before merging.

## Code Quality

This project uses ESLint, Prettier, and Stylelint.

- Run JavaScript linting: `npm run lint`
- Fix JavaScript linting: `npm run lint:fix`
- Format code with Prettier: `npm run format`
- Run CSS linting: `npm run lint:css`
- Fix CSS linting: `npm run lint:css:fix`

## Issues / Questions

If you find a problem or have a suggestion:

1. Open an issue
2. Use labels that apply (`bug`, `feature`, `help wanted`, etc.)
3. Provide screenshots or steps if reporting a bug

## Code of Conduct

By participating in this project, you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).
