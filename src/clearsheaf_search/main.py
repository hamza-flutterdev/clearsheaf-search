from fastapi import FastAPI

app = FastAPI(
    title="ClearSheaf Search",
    description="A private, local-first document intelligence API.",
    version="0.1.0",
)


@app.get("/api/v1/health")
def health_check() -> dict[str, str]:
    return {
        "status": "ok",
        "application": "ClearSheaf Search",
    }
