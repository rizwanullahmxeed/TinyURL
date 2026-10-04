
import { Link } from "react-router-dom";
import { Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="logo">
        <Link2 />
        <span>tiny<span className="logo-blue">url</span></span>
      </Link>

      <p>Making every link shorter, smarter, and more powerful.</p>

      <div className="footer-links">
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>

      <small>© 2026 TinyURL UI Concept. All rights reserved.</small>
    </footer>
  );
}