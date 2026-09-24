export default function UsageBar({ used, limit, label }: { used: number; limit: number; label: string }) {
  const pct = Math.min(100, Math.round((used / Math.max(limit, 1)) * 100));
  return (
    <div className="rounded-2xl border border-teal/15 bg-teal-mint p-4">
      <div className="mb-2 flex justify-between text-sm"><span>{label}</span><span>{used}/{limit} free used</span></div>
      <div className="h-2 overflow-hidden rounded-full bg-white"><div className="h-full bg-teal" style={{ width: `${pct}%` }} /></div>
    </div>
  );
}
