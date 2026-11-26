import styles from "./Footer.module.css";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles["footer-logo"]}>
          <p className="display">
            tarcies<span>.</span>
          </p>
          <span className="label">full-stack web developer</span>
        </div>
        <div className={styles["footer-copyright"]}>
          <p>© 2026 tarcies. All rights reserved.</p>
        </div>
        <div className={styles["footer-links"]}>
          <a href="https://github.com/tarcies">GitHub</a>
          <a href="https://linkedin.com/in/tarcies/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
