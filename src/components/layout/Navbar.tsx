import { useActiveSection } from "../../hooks/useActiveSection";

const SECTIONS = ["about", "projects", "contact"] as const;

export function Navbar() {
  const activeId = useActiveSection(SECTIONS);

  return (
    <nav className="navigation h2">
      <ul>
        {SECTIONS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeId === id ? "active" : undefined}
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
