import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <AnimatedSection className="text-center mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">{t.faqPreview.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">{t.faqPreview.title}</h2>
        </AnimatedSection>

        <Accordion type="single" collapsible className="space-y-3">
          {t.faqPreview.items.map((faq, i) => (
            <AnimatedItem key={i} delay={i * 0.06}>
              <AccordionItem value={`item-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-soft">
                <AccordionTrigger className="font-body text-sm font-semibold text-charcoal hover:no-underline py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            </AnimatedItem>
          ))}
        </Accordion>

        <AnimatedSection delay={0.3} className="text-center mt-8">
          <Link to="/faq" className="text-sm font-body font-medium text-sage hover:text-sage-light transition-colors">{t.faqPreview.viewAll}</Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQPreview;
