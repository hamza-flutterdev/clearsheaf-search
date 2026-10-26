# Contributing to ClearSheaf Search

Thank you for your interest in ClearSheaf Search. This guide explains how to set up the project, run the checks, and submit a change.

## Ground rules

- ClearSheaf Search is local-first. Do not add telemetry, analytics, cloud services, or any network call that sends document content, file names, paths, or questions anywhere.
- Keep changes small and focused. One pull request should do one thing.
- Every behavior change needs tests. Every pull request must pass CI.
- Never commit real personal documents, local databases, model weights, or secrets. Test fixtures must be synthetic or openly licensed.
- Do not add a dependency without a short justification in the pull request, including its license.

## Development setup

You need [`uv`](https://docs.astral.sh/uv/getting-started/installation/) and Node.js with npm.

```bash
git clone https://github.com/hamza-flutterdev/clearsheaf-search.git
cd clearsheaf-search
uv sync
cd frontend
npm install
cd ..
```

Run the backend:

```bash
uv run uvicorn clearsheaf_search.main:app --host 127.0.0.1 --port 8000
```

Run the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

## Quality checks

Run these from the repository root before every commit:

```bash
uv run ruff check .
uv run ruff format --check .
uv run pytest
```

Apply formatting automatically with:

```bash
uv run ruff format .
```

Frontend checks, run from `frontend/`:

```bash
npm run lint
npm run build
```

## Tests

- Default tests must not download a model, must not use the network, and must not touch your real data directory. Use temporary directories and temporary databases.
- Use the fake inference provider in tests. Do not write tests that depend on the exact wording of a real model's output.
- Tests that need a real model must be marked `slow` and are excluded from CI:

```bash
uv run pytest -m "not slow"
```

- Assert structural properties for question answering: source labels are valid, citations map to retrieved chunks, and unsupported sources are rejected.

## Workflow

The `main` branch is protected. Direct pushes are not allowed, and changes land through pull requests with passing CI.

1. Create a branch from an up-to-date `main`.
2. Make your change and add tests.
3. Run the quality checks above.
4. Push the branch and open a pull request.
5. Wait for CI to pass, then merge.

### Branch names

Use a short type prefix followed by a description in lowercase with hyphens:

```text
feat/pdf-extraction
fix/page-number-offset
docs/model-cards
test/chunking-edge-cases
chore/update-dependencies
```

### Commit messages

Use focused commits with a type prefix:

```text
feat: add PDF text extraction service
fix: convert page numbers to one-based once
test: cover resource planner fallback cases
docs: document supported model profiles
chore: update lockfile
```

## Pull request checklist

- [ ] The change is focused and the description explains why it is needed
- [ ] Tests cover normal and failure paths
- [ ] `ruff check`, `ruff format --check`, and `pytest` pass locally
- [ ] Documentation is updated where behavior changed
- [ ] No private data, model files, databases, or secrets are included
- [ ] New dependencies are justified and their licenses are recorded in `THIRD_PARTY_NOTICES.md`
- [ ] Any model change is recorded in `docs/MODEL_CARDS.md`

## Reporting security issues

Do not open a public issue for a vulnerability. Follow [`SECURITY.md`](SECURITY.md).

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE) that covers this project.
