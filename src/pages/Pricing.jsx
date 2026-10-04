
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For personal use",
    features: ["Basic URL shortening", "Custom aliases", "Basic link management"]
  },
  {
    name: "Pro",
    price: "$9",
    description: "For growing businesses",
    features: ["Everything in Free", "Advanced analytics", "Custom domains", "QR code generation"],
    popular: true
  },
  {
    name: "Business",
    price: "$29",
    description: "For teams and enterprises",
    features: ["Everything in Pro", "Team collaboration", "Priority support", "Advanced reporting"]
  }
];

export default function Pricing() {
  return (
    <main className="page-container">
      <div className="section-heading">
        <span>SIMPLE PRICING</span>
        <h1>Plans for every need</h1>
        <p>Start free and upgrade as you grow.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div className={`pricing-card ${plan.popular ? "popular" : ""}`} key={plan.name}>
            {plan.popular && <span className="popular-label">MOST POPULAR</span>}

            <h2>{plan.name}</h2>
            <p>{plan.description}</p>

            <h3>{plan.price}<small>/month</small></h3>

            <Link to="/signup" className="plan-button">
              Get started
            </Link>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} /> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}