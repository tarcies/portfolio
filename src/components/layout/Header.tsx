import styles from "./Header.module.css";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header>
      <Navbar />
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
    </header>
  );
}
