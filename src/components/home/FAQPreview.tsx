import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is KUNERA open to everyone?", a: "Yes! KUNERA is open to people of all ages, fitness levels, and backgrounds. Whether you're a complete beginner or experienced, there's a place for you." },
  { q: "What is SPARTI?", a: "SPARTI is our women-only training path under the KUNERA umbrella. It offers the same quality training in a dedicated, supportive environment exclusively for women." },
  { q: "Are the trainings beginner-friendly?", a: "Absolutely. Every session is adapted to your level. We meet you where you are and build from there, safely and progressively." },
  { q: "Can I choose between personal and group training?", a: "Yes, both personal and group training are available in KUNERA and SPARTI. You can also combine them based on your goals." },
  { q: "How do I register?", a: "Simply fill in our registration form. We'll contact you to discuss the best training option for your goals and schedule." },
  { q: "Where does training take place?", a: "Training takes place at our studio. Check the contact section for our exact location and opening hours." },
];

const FAQPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Common Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-soft">
              <AccordionTrigger className="font-body text-sm font-semibold text-charcoal hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <Link to="/faq" className="text-sm font-body font-medium text-sage hover:text-sage-light transition-colors">
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
