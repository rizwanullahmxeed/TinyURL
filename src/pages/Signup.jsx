
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <main className="auth-page">
      <form className="auth-card">
        <h1>Create your account</h1>
        <p>Start shortening your links today.</p>

        <label>Full name</label>
        <input type="text" placeholder="Your name" required />

        <label>Email address</label>
        <input type="email" placeholder="you@example.com" required />

        <label>Password</label>
        <input type="password" placeholder="Create a password" required />

        <button type="submit">Create account</button>

        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </main>
  );
}