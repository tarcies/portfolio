import styles from "./Navbar.module.css";
import { Link } from "react-router";

export function Navbar({
  routes,
  activePath,
}: {
  routes: Record<string, string>;
  activePath: string;
}) {
  return (
    <nav className={`${styles.navigation} h2`}>
      <ul>
        {Object.entries(routes).map(([key, value]) => (
          <li key={key}>
            <Link
              to={key}
              className={
                activePath === key // || path === r.path // Handles refresh / direct access
                  ? styles.active
                  : undefined
              }
            >
              {key === "/" ? "Home" : value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
