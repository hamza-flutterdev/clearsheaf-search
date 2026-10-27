import { useEffect, useState } from "react";
import { getHealth, type HealthStatus } from "./api/client";
import "./App.css";

function App() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHealth()
      .then(setHealth)
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Request failed");
      });
  }, []);

  return (
    <main className="app">
      <h1>ClearSheaf Search</h1>

      {error ? (
        <p role="status">Backend unavailable: {error}</p>
      ) : health ? (
        <p role="status">
          Backend status: {health.status}
        </p>
      ) : (
        <p role="status">Checking backend…</p>
      )}
    </main>
  );
}

export default App;