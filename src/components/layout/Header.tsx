import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header>
      <Navbar />
      <div className="header">
        <div className="header-title">
          <p className="system-label">TARCIES.DEV</p>
          <p className="display">Portfolio</p>
          <div className="header-meta label">
            <span>B.ICT // </span>
            <span>Junior Web Dev // </span>
            <span>React.js • </span>
            <span>TypeScript • </span>
            <span>PostgreSQL</span>
          </div>
        </div>
        <div className="header-theme">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
