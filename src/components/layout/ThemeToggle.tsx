import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="btn theme-toggle"
      id="themeToggleBtn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="easing-fast" id="themeToggleIcon" key={theme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </div>
    </button>
  );
}
