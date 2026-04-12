import { Check } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const WhoItsForSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-sand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">{t.whoItsFor.badge}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">{t.whoItsFor.title}</h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">{t.whoItsFor.subtitle}</p>
          </AnimatedSection>

          <div className="space-y-4">
            {t.whoItsFor.audiences.map((item, i) => (
              <AnimatedItem key={item} delay={i * 0.08}>
                <div className="flex items-start gap-3 bg-card rounded-xl px-5 py-4 shadow-soft border border-border">
                  <div className="w-6 h-6 rounded-full bg-sage-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-sage" />
                  </div>
                  <span className="text-sm font-body text-foreground">{item}</span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
