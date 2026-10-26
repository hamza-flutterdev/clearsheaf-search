# Security Policy

## Supported versions

ClearSheaf Search is in pre-alpha. Only the latest commit on `main` receives security fixes. Once tagged releases exist, this section will list the supported versions.

## Reporting a vulnerability

Please do not report security vulnerabilities in public issues, discussions, or pull requests.

Use GitHub's private vulnerability reporting instead:

1. Open the [Security tab](https://github.com/hamza-flutterdev/clearsheaf-search/security) of this repository.
2. Choose **Report a vulnerability**.
3. Describe the problem and submit the report.

Direct link: <https://github.com/hamza-flutterdev/clearsheaf-search/security/advisories/new>

### What to include

- A clear description of the vulnerability and its impact
- The affected version or commit
- Your operating system and Python version
- Steps to reproduce, or a minimal proof of concept
- Any suggested fix, if you have one

Do not include real personal documents in a report. Use synthetic files that reproduce the problem.

## What to expect

This is a volunteer-maintained project. Reports are reviewed on a best-effort basis, and no response time is guaranteed. When a report is confirmed, a fix is prepared privately, released, and then disclosed with credit to the reporter unless anonymity is requested.

## Scope

Examples of issues that are in scope:

- Path traversal or writing files outside the managed data directory
- Unsafe handling of uploaded files, including parser crashes that expose internal details
- Exposure of the API beyond loopback without an explicit configuration
- Cross-origin or DNS-rebinding access to the local API from a web page
- Citations that reference documents or pages the user did not import
- Leakage of document text, prompts, or file paths into logs or API responses
- SQL or full-text-query injection
- Resource exhaustion from a single request that the configured limits should prevent

Out of scope:

- Vulnerabilities in third-party dependencies that are already publicly reported upstream, unless ClearSheaf Search uses them unsafely
- Prompt injection that only changes the wording of a model's answer, since the model has no tools, file access, or network access
- Attacks that require an attacker to already have full control of the user's computer or account

## Privacy by design

ClearSheaf Search does not include telemetry, and document content, questions, file names, and paths are never sent to remote services. If you find behavior that contradicts this, treat it as a security issue and report it privately.
