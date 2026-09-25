"use client";
import { useState } from "react";
import PaywallModal from "@/components/PaywallModal";
export default function DashboardPage() {
  const chats = 7;
  const estimates = 3;
  const [open, setOpen] = useState(chats >= 10 || estimates >= 5);
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Front desk</h1>
      <p className="mt-3 rounded-2xl bg-[#E8F5E9] p-4 text-sm">Free: {chats}/10 chats used, {estimates}/5 estimates used</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[#E5E7EB] p-5"><p className="text-3xl font-semibold">128</p><p>Calls caught</p></div>
        <div className="rounded-2xl border border-[#E5E7EB] p-5"><p className="text-3xl font-semibold">64</p><p>Quotes sent</p></div>
        <div className="rounded-2xl border border-[#E5E7EB] p-5"><p className="text-3xl font-semibold">$3.2k</p><p>Deposits</p></div>
      </div>
      <p className="mt-6 text-sm">Google Calendar booking locked. Review requests locked.</p>
      <button className="mt-4 text-sm underline" onClick={() => setOpen(true)}>Show upgrade</button>
      <PaywallModal open={open} />
    </main>
  );
}
