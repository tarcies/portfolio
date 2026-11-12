import { Link } from "react-router";

export function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo">
          <p className="display">
            tarcies<span>.</span>
          </p>
          <span className="label">full-stack web developer</span>
        </div>
        <div className="footer-copyright">
          <p>© 2026 tarcies. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <a href="https://github.com/tarcies">GitHub</a>
          <a href="https://linkedin.com/in/tarcies/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
