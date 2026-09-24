"use client";
import { useState } from "react";
export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-semibold">Create your free workspace</h1>
      <p className="mt-2 text-sm text-teal-dark/70">No credit card. 10 chats and 5 photo estimates.</p>
      <form className="mt-6 grid gap-3" onSubmit={(e) => { e.preventDefault(); window.location.href = "/dashboard"; }}>
        <input className="rounded-xl border px-3 py-3" placeholder="Business name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="rounded-xl border px-3 py-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button className="rounded-full bg-teal py-3 text-white">Start free</button>
      </form>
    </main>
  );
}
