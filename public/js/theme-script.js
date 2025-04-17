// Immediate theme detection script
(function () {
  try {
    // Check localStorage first
    const storedTheme = localStorage.getItem("theme");

    // If explicit theme is stored, use it
    if (storedTheme === "light" || storedTheme === "dark") {
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // If theme is 'system' or not set, check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);

      // Watch for system preference changes
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          const currentTheme = localStorage.getItem("theme");
          if (currentTheme === "system" || !currentTheme) {
            document.documentElement.classList.toggle("dark", e.matches);
          }
        });
    }
  } catch (e) {
    console.error("Error applying theme:", e);
  }
})();
