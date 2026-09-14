"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button type="button" aria-label="Toggle color theme" className="px-3 py-1 border rounded-full text-sm">
        Theme
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="px-3 py-1 border rounded-full text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
