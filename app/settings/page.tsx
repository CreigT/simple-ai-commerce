export default function SettingsPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Settings</h1>
      <form className="mt-6 grid gap-3">
        <input className="rounded-xl border px-3 py-3" defaultValue="Demo Clean Co" />
        <input className="rounded-xl border px-3 py-3" defaultValue="Rialto, Fontana" />
        <textarea className="rounded-xl border px-3 py-3" rows={6} defaultValue='{"standard":{"2b2b":165},"deep":{"2b2b":240}}' />
        <button className="rounded-full bg-teal py-3 text-white">Save brain</button>
      </form>
    </main>
  );
}
