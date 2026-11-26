import styles from "./Navbar.module.css";
import { Link } from "react-router";
import { useState } from "react";

const SECTIONS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    name: "Contact",
    path: "/contact",
  },
] as const;

export function Navbar() {
  const [activePage, setActivePage] = useState<string>("none");
  const path = window.location.pathname;

  return (
    <nav className={`${styles.navigation} h2`}>
      <ul>
        {SECTIONS.map((s) => (
          <li key={s.name}>
            <Link
              to={s.path}
              className={
                activePage === s.path || path === s.path // Handles refresh / direct access
                  ? styles.active
                  : undefined
              }
              onClick={() => {
                setActivePage(s.path);
              }}
            >
              {s.path === "/" ? "Home" : s.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
