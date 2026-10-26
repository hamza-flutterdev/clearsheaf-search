# Third-Party Notices

ClearSheaf Search is released under the MIT License. It depends on third-party software and can be used with third-party models, each under its own license.

This file lists direct dependencies. Exact versions are pinned in `uv.lock` (Python) and `frontend/package-lock.json` (JavaScript). Licenses were recorded from each project's official page and must be re-verified before every release.

No modified copies of third-party code are included in this repository. Model weights are not included or redistributed.

## Python runtime dependencies

| Package | License | Source |
|---|---|---|
| FastAPI | MIT | https://github.com/fastapi/fastapi |
| Uvicorn | BSD-3-Clause | https://github.com/encode/uvicorn |
| Pydantic | MIT | https://github.com/pydantic/pydantic |
| pydantic-settings | MIT | https://github.com/pydantic/pydantic-settings |
| SQLAlchemy | MIT | https://github.com/sqlalchemy/sqlalchemy |
| pypdf | BSD-3-Clause | https://github.com/py-pdf/pypdf |
| python-multipart | Apache-2.0 | https://github.com/Kludex/python-multipart |
| platformdirs | MIT | https://github.com/tox-dev/platformdirs |
| psutil | BSD-3-Clause | https://github.com/giampaolo/psutil |
| NobodyWho | EUPL-1.2 | https://github.com/nobodywho-ooo/nobodywho |
| sentence-transformers (optional) | Apache-2.0 | https://github.com/UKPLab/sentence-transformers |
| NumPy (optional) | BSD-3-Clause | https://github.com/numpy/numpy |

NobodyWho is licensed under the European Union Public Licence v1.2. ClearSheaf Search uses it as an installed dependency and does not modify or redistribute its code. Review its license and FAQ before modifying, forking, or bundling it.

## Python development dependencies

| Package | License | Source |
|---|---|---|
| pytest | MIT | https://github.com/pytest-dev/pytest |
| pytest-cov | MIT | https://github.com/pytest-dev/pytest-cov |
| HTTPX | BSD-3-Clause | https://github.com/encode/httpx |
| Ruff | MIT | https://github.com/astral-sh/ruff |

## Frontend dependencies

| Package | License | Source |
|---|---|---|
| React | MIT | https://github.com/facebook/react |
| Vite | MIT | https://github.com/vitejs/vite |
| TypeScript | Apache-2.0 | https://github.com/microsoft/TypeScript |

## Models

Models are downloaded by the user and are not part of this repository. Each model has its own license that is separate from the license of this project. See [`docs/MODEL_CARDS.md`](docs/MODEL_CARDS.md) for the models that have been tested, their sources, and their recorded licenses.

## Updating this file

When a dependency or model is added, changed, or removed:

1. Update the relevant table with the license and source URL.
2. Confirm the license from the official project page or model card.
3. Note any modification made to third-party code, or any redistribution of third-party code or weights.
4. Re-check every entry before a release.
