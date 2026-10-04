
import { Link, NavLink } from "react-router-dom";
import { Link2, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          <span className="logo-icon">
            <Link2 size={25} />
          </span>
          <span>tiny<span className="logo-blue">url</span></span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/pricing">Plans</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">
            Log in
          </Link>

          <Link to="/signup" className="signup-btn">
            Sign up free
          </Link>
        </div>

        <button className="mobile-menu">
          <Menu />
        </button>

      </div>
    </header>
  );
}