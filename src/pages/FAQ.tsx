import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  const p = t.pages.faq;

  return (
    <Layout>
      <PageHero badge={p.badge} title={p.title} subtitle={p.subtitle} />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          {p.categories.map((cat) => (
            <div key={cat.title} className="mb-12">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">{cat.title}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.items.map((faq, i) => (
                  <AccordionItem key={i} value={`${cat.title}-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-soft">
                    <AccordionTrigger className="font-body text-sm font-semibold text-charcoal hover:no-underline py-5">{faq.q}</AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
