"use client";

import { useState } from "react";

export default function UnlockPage() {
  const [token, setToken] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function check(e) {
    e.preventDefault();
    setError("");
    setResult(null);
    const res = await fetch("/api/access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Invalid token");
      return;
    }
    setResult(data);
  }

  return (
    <main className="section">
      <div className="card" style={{ maxWidth: 520 }}>
        <h1 style={{ fontSize: 42 }}>Unlock</h1>
        <p className="muted">Paste the access token from your receipt page.</p>
        <form onSubmit={check} style={{ marginTop: 16 }}>
          <label htmlFor="token">Access token</label>
          <textarea id="token" rows={4} value={token} onChange={(e) => setToken(e.target.value)} />
          <button className="btn" type="submit">Check access</button>
        </form>
        {error ? <p style={{ color: "var(--accent)" }}>{error}</p> : null}
        {result ? (
          <div className="notice">
            <strong>{result.product.name}</strong> is unlocked.
            <div>
              <a href={result.product.file} download>Download file</a>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
