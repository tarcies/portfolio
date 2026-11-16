import { Button } from "../ui";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant="theme-toggle"
      id="themeToggleBtn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="easing-fast" id="themeToggleIcon" key={theme}>
        {theme === "dark" ? <Moon /> : <Sun />}
      </div>
    </Button>
  );
}
