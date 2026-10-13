export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <div className="relative flex items-center justify-center">
        {/* Animated outer ring in brand ink navy */}
        <div className="h-14 w-14 rounded-full border-4 border-slate-200 border-t-red-600 animate-spin" />
        {/* Brand center marker */}
        <span className="absolute h-3 w-3 rounded-full bg-[#0B2152]" />
      </div>

      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
        Plotting The Route...
      </p>
      <p className="text-xs text-slate-400 mt-1">
        Loading removals and vehicle data
      </p>
    </div>
  );
}
