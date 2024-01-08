"use client";

import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";
import { Switch } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <span className="hidden sm:inline text-sm font-medium">
        {theme === "light" ? "Dark" : "Light"} mode
      </span>
      <Switch
        classNames={{
          // wrapper: ["bg-neutral-200"],
          startContent: ["text-amber-500"],
          endContent: ["text-blue-500"],
          thumb: ["bg-neutral-100 dark:bg-neutral-900"],
        }}
        defaultSelected={theme === "dark"}
        color="success"
        size="lg"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      ></Switch>
    </div>
  );
}
