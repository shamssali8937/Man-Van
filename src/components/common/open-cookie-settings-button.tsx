"use client";

export function OpenCookieSettingsButton() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-red-600 transition-colors"
    >
      ⚙️ Change Cookie Settings / Manage Preferences
    </button>
  );
}
