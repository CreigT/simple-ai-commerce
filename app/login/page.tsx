"use client";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-semibold">Log in</h1>
      <form className="mt-6 grid gap-3" onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }}>
        <input className="rounded-xl border px-3 py-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="rounded-full bg-teal py-3 text-white">Continue</button>
      </form>
    </main>
  );
}
