
import { useState } from "react";
import { Link2, Copy, Check, ArrowRight, BarChart3, ShieldCheck, QrCode } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  function handleShorten(e) {
    e.preventDefault();

    try {
      if (!url.trim()) {
        setError("Please enter a URL");
        return;
      }

      new URL(url.startsWith("http") ? url : `https://${url}`);

      const slug = Math.random().toString(36).substring(2, 8);

      setShortUrl(`https://tinyurl.com/${slug}`);
      setError("");
    } catch {
      setError("Please enter a valid URL");
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main>

      <section className="hero">
        <div className="hero-content">

          <span className="hero-badge">
            The link management platform
          </span>

          <h1>
            Short links.
            <br />
            <span>Big results.</span>
          </h1>

          <p>
            Build stronger digital connections with TinyURL.
            Create short, memorable links and track your
            performance with ease.
          </p>

          <form className="shortener-card" onSubmit={handleShorten}>

            <label>Enter your long URL</label>

            <div className="url-input">
              <Link2 size={20} />
              <input
                type="text"
                placeholder="https://example.com/my-long-url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button className="shorten-btn">
              Shorten URL <ArrowRight size={18} />
            </button>

            {shortUrl && (
              <div className="result">
                <a href={shortUrl} target="_blank" rel="noreferrer">
                  {shortUrl}
                </a>

                <button type="button" onClick={handleCopy}>
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            )}

            <small>
              By clicking Shorten URL, you agree to our Terms
              of Service and Privacy Policy.
            </small>
          </form>

          <div className="trust-points">
            <span>✓ Free to use</span>
            <span>✓ No credit card required</span>
            <span>✓ Fast & secure</span>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900"
            alt="Creative digital design"
          />

          <div className="image-card">
            <BarChart3 color="#2864dc" />
            <div>
              <strong>Link analytics</strong>
              <p>Track every click</p>
            </div>
          </div>

          <div className="image-card second-card">
            <ShieldCheck color="#16a36a" />
            <div>
              <strong>Secure links</strong>
              <p>Safe and reliable</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted">
        <p>Trusted by individuals and businesses worldwide</p>
        <div className="brands">
          <span>Shopify</span>
          <span>HubSpot</span>
          <span>Slack</span>
          <span>Notion</span>
          <span>Canva</span>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span>POWERFUL FEATURES</span>
          <h2>More than just a short link</h2>
          <p>
            Everything you need to manage, track, and optimize
            your links in one place.
          </p>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <Link2 size={30} color="#2864dc" />
            <h3>URL Shortener</h3>
            <p>Transform long URLs into short and memorable links.</p>
          </div>

          <div className="feature-card">
            <BarChart3 size={30} color="#2864dc" />
            <h3>Link Analytics</h3>
            <p>Understand your audience with detailed analytics.</p>
          </div>

          <div className="feature-card">
            <QrCode size={30} color="#2864dc" />
            <h3>QR Codes</h3>
            <p>Connect your offline and online audience.</p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={30} color="#2864dc" />
            <h3>Secure Links</h3>
            <p>Manage your links with reliable tools.</p>
          </div>

        </div>
      </section>

      <section className="cta">
        <h2>Ready to make every link count?</h2>
        <p>Start creating smarter links today.</p>
        <a href="/signup">Get started for free <ArrowRight size={18} /></a>
      </section>

    </main>
  );
}