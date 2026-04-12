import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const numbers = ["01", "02", "03", "04"];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">{t.howItWorks.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">{t.howItWorks.title}</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {t.howItWorks.steps.map((step, index) => (
            <AnimatedItem key={index} delay={index * 0.12}>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-sage-muted flex items-center justify-center mx-auto">
                  <span className="font-display text-xl font-bold text-sage">{numbers[index]}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal">{step.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
