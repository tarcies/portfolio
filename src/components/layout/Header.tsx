import styles from "./Header.module.css";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";
import { TextBlock } from "../ui";
import { useLocation } from "react-router";

export function Header() {
  const path = useLocation().pathname;

  const titles: Record<string, string> = {
    "/": "Home",
    "/about": "About Me",
    "/projects": "Projects",
    "/experience": "Experience",
    "/skills": "Skills",
    "/testimonials": "Testimonials",
    "/contact": "Contact",
  };

  return (
    <header>
      <Navbar routes={titles} activePath={path} />
      <div className={styles.header}>
        <div className={styles["header-title"]}>
          <p className={styles["system-label"]}>TARCIES.DEV</p>
          <p className="display">Portfolio</p>
          <div className={`label ${styles["header-meta"]}`}>
            <span>B.ICT // </span>
            <span>Junior Web Dev // </span>
            <span>React.js • </span>
            <span>TypeScript • </span>
            <span>PostgreSQL</span>
          </div>
        </div>
        <div className={styles["header-theme"]}>
          <ThemeToggle />
        </div>
      </div>
      {path !== "/" && <TextBlock title={titles[path] || "Page Not Found"} />}
    </header>
  );
}
