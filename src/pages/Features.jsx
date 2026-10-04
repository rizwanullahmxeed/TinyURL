
import { Link2, BarChart3, QrCode, Globe, ShieldCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Link2 />,
      title: "URL Shortener",
      description: "Create short and memorable links from long URLs.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700"
    },
    {
      icon: <BarChart3 />,
      title: "Link Analytics",
      description: "Track clicks and understand your audience.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700"
    },
    {
      icon: <QrCode />,
      title: "QR Codes",
      description: "Generate QR codes for your digital links.",
      image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=700"
    },
    {
      icon: <Globe />,
      title: "Custom Domains",
      description: "Create branded links for your business.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700"
    },
    {
      icon: <ShieldCheck />,
      title: "Link Management",
      description: "Organize and manage your links in one place.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
    }
  ];

  return (
    <main className="page-container">
      <div className="section-heading">
        <span>OUR FEATURES</span>
        <h1>Everything you need to grow</h1>
        <p>Powerful tools for smarter link management.</p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <article className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} />
            <div className="feature-content">
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}