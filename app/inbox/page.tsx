export default function InboxPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">SMS + chat inbox</h1>
      <p className="text-sm text-teal-dark/70">Free plan is read-only after 10 chats.</p>
      <div className="mt-6 space-y-3">
        <div className="rounded-2xl bg-teal-mint p-4 text-sm">Customer: Can you do a 2/2 Saturday?</div>
        <div className="rounded-2xl bg-teal p-4 text-sm text-white">Desk: 2/2 deep clean $240. Photos + $50 deposit holds Sat 9am.</div>
      </div>
    </main>
  );
}
