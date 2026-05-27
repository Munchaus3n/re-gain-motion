import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const PricingPreview = () => {
  const { t } = useLanguage();

  const popularIndex = 1;

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">{t.pricingPreview.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">{t.pricingPreview.title}</h2>
          <p className="text-muted-foreground font-body text-lg">{t.pricingPreview.subtitle}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.pricingPreview.plans.map((plan, i) => (
            <AnimatedItem key={plan.title} delay={i * 0.12}>
              <div className={`bg-card rounded-2xl p-8 border transition-all duration-300 h-full ${i === popularIndex ? "border-sage shadow-elevated scale-[1.02]" : "border-border shadow-card hover:shadow-elevated"}`}>
                {i === popularIndex && (
                  <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-sage bg-sage-muted px-3 py-1 rounded-full mb-4">{t.pricingPreview.mostPopular}</span>
                )}
                <h3 className="font-display text-xl font-bold text-charcoal mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-4xl font-bold text-charcoal">{plan.price}</span>
                  <span className="text-sm font-body text-muted-foreground">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <span className="text-sage">✓</span>{feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant={i === popularIndex ? "hero" : "heroOutline"} className="w-full text-sm py-5 gap-2">
                    {t.pricingPreview.register}<ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center mt-8">
          <Link to="/pricing" className="text-sm font-body font-medium text-sage hover:text-sage-light transition-colors">{t.pricingPreview.viewAll}</Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingPreview;
