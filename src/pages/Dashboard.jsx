
import { BarChart3, Link2, MousePointerClick } from "lucide-react";

export default function Dashboard() {
  const links = [
    { short: "tinyurl.com/demo01", original: "https://example.com/product", clicks: 1240 },
    { short: "tinyurl.com/demo02", original: "https://example.com/blog", clicks: 850 },
    { short: "tinyurl.com/demo03", original: "https://example.com/contact", clicks: 430 }
  ];

  return (
    <main className="dashboard">
      <h1>Dashboard</h1>
      <p>Manage your shortened links.</p>

      <div className="stats-grid">
        <div className="stat-card">
          <Link2 />
          <h3>24</h3>
          <p>Total links</p>
        </div>

        <div className="stat-card">
          <MousePointerClick />
          <h3>2,520</h3>
          <p>Total clicks</p>
        </div>

        <div className="stat-card">
          <BarChart3 />
          <h3>85%</h3>
          <p>Engagement</p>
        </div>
      </div>

      <div className="links-table">
        <h2>Your links</h2>

        {links.map((link) => (
          <div className="link-row" key={link.short}>
            <div>
              <strong>{link.short}</strong>
              <p>{link.original}</p>
            </div>

            <span>{link.clicks} clicks</span>
          </div>
        ))}
      </div>
    </main>
  );
}