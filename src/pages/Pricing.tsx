import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const personalPlans = [
  { title: "Single Session", price: "€65", unit: "/ session", features: ["1-on-1 coaching", "Personalized program", "60 minutes"] },
  { title: "5-Pack", price: "€300", unit: "/ 5 sessions", features: ["Save €25", "1-on-1 coaching", "Valid 2 months"], popular: true },
  { title: "10-Pack", price: "€550", unit: "/ 10 sessions", features: ["Save €100", "1-on-1 coaching", "Valid 3 months"] },
];

const groupPlans = [
  { title: "Monthly", price: "€99", unit: "/ month", features: ["Unlimited group sessions", "Expert coaching", "Flexible schedule"] },
  { title: "Quarterly", price: "€259", unit: "/ 3 months", features: ["Save €38", "All monthly benefits", "Commitment discount"], popular: true },
  { title: "Drop-in", price: "€20", unit: "/ session", features: ["Single group session", "No commitment", "Subject to availability"] },
];

const PricingBlock = ({ title, plans }: { title: string; plans: typeof personalPlans }) => (
  <div className="mb-20">
    <h2 className="font-display text-3xl font-bold text-charcoal mb-8 text-center">{title}</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {plans.map((plan) => (
        <div
          key={plan.title}
          className={`bg-card rounded-2xl p-8 border transition-all duration-300 ${
            plan.popular ? "border-sage shadow-elevated scale-[1.02]" : "border-border shadow-card"
          }`}
        >
          {plan.popular && (
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-sage bg-sage-muted px-3 py-1 rounded-full mb-4">
              Best Value
            </span>
          )}
          <h3 className="font-display text-xl font-bold text-charcoal mb-2">{plan.title}</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-display text-4xl font-bold text-charcoal">{plan.price}</span>
            <span className="text-sm font-body text-muted-foreground">{plan.unit}</span>
          </div>
          <ul className="space-y-3 mb-8">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                <span className="text-sage">✓</span> {f}
              </li>
            ))}
          </ul>
          <Link to="/contact">
            <Button className={`w-full font-body gap-2 ${plan.popular ? "bg-charcoal hover:bg-charcoal-light text-primary-foreground" : "bg-transparent border border-charcoal/15 text-charcoal hover:bg-accent"}`}>
              Register <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const Pricing = () => {
  return (
    <Layout>
      <PageHero
        badge="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="All prices apply to both KUNERA and SPARTI. Choose the format and package that fits your goals."
      />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <PricingBlock title="Personal Training" plans={personalPlans} />
          <PricingBlock title="Group Training" plans={groupPlans} />
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              All prices include VAT. Packages are non-refundable. Not sure which option is right for you? Register and we'll help you choose during your first consultation.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
