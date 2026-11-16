import styles from "./Navbar.module.css";
import { useActiveSection } from "../../hooks/useActiveSection";

const SECTIONS = ["About", "Projects", "Contact"] as const;

export function Navbar() {
  const activeId = useActiveSection(SECTIONS);

  return (
    <nav className={`${styles.navigation} h2`}>
      <ul>
        {SECTIONS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeId === id ? styles.active : undefined}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
