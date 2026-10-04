
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="auth-page">
      <form className="auth-card">
        <h1>Welcome back</h1>
        <p>Log in to your TinyURL account</p>

        <label>Email address</label>
        <input type="email" placeholder="you@example.com" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit">Log in</button>

        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </main>
  );
}