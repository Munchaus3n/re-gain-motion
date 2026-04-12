import { Star } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage-light mb-3 block">{t.testimonials.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t.testimonials.title}</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.testimonials.items.map((item, i) => (
            <AnimatedItem key={item.name} delay={i * 0.12}>
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-sand fill-sand" />
                  ))}
                </div>
                <p className="font-body text-primary-foreground/80 leading-relaxed mb-6 text-sm">"{item.quote}"</p>
                <div>
                  <p className="font-body font-semibold text-primary-foreground text-sm">{item.name}</p>
                  <p className="font-body text-primary-foreground/40 text-xs">{item.detail}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
