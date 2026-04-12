import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const PricingBlock = ({ title, plans, bestValueLabel }: { title: string; plans: { title: string; price: string; unit: string; features: string[]; popular?: boolean }[]; bestValueLabel: string }) => {
  const { t } = useLanguage();
  const popularIndex = 1;
  return (
    <div className="mb-20">
      <h2 className="font-display text-3xl font-bold text-charcoal mb-8 text-center">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <div key={plan.title} className={`bg-card rounded-2xl p-8 border transition-all duration-300 ${i === popularIndex ? "border-sage shadow-elevated scale-[1.02]" : "border-border shadow-card"}`}>
            {i === popularIndex && (
              <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-sage bg-sage-muted px-3 py-1 rounded-full mb-4">{bestValueLabel}</span>
            )}
            <h3 className="font-display text-xl font-bold text-charcoal mb-2">{plan.title}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-display text-4xl font-bold text-charcoal">{plan.price}</span>
              <span className="text-sm font-body text-muted-foreground">{plan.unit}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm font-body text-muted-foreground"><span className="text-sage">✓</span> {f}</li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className={`w-full font-body gap-2 ${i === popularIndex ? "bg-charcoal hover:bg-charcoal-light text-primary-foreground" : "bg-transparent border border-charcoal/15 text-charcoal hover:bg-accent"}`}>
                {t.common.register} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const { t } = useLanguage();
  const p = t.pages.pricing;

  return (
    <Layout>
      <PageHero badge={p.badge} title={p.title} subtitle={p.subtitle} />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <PricingBlock title={p.personalTitle} plans={p.personalPlans} bestValueLabel={p.bestValue} />
          <PricingBlock title={p.groupTitle} plans={p.groupPlans} bestValueLabel={p.bestValue} />
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{p.vatNote}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
