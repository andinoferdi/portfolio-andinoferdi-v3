"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-out hover:scale-110 transform will-change-transform"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform duration-300 ease-out will-change-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-300 ease-out will-change-transform dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
