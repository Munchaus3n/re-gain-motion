import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General",
    items: [
      { q: "What is KUNERA?", a: "KUNERA is a premium bodyweight training brand that offers personal and group training for everyone. Our focus is on functional strength, mobility, and sustainable health." },
      { q: "What is SPARTI?", a: "SPARTI is our women-only training path under the KUNERA umbrella. It offers the same quality training in a dedicated, supportive environment exclusively for women." },
      { q: "Is KUNERA open to everyone?", a: "Yes! KUNERA is open to people of all ages, fitness levels, and backgrounds. Whether you're a complete beginner or experienced, there's a place for you." },
      { q: "What does 'bodyweight training' mean?", a: "Bodyweight training uses your own body as resistance instead of machines or weights. This builds functional strength, improves mobility, and reduces injury risk." },
    ],
  },
  {
    title: "Training",
    items: [
      { q: "Are the trainings beginner-friendly?", a: "Absolutely. Every session is adapted to your level. We meet you where you are and build from there, safely and progressively." },
      { q: "Can I choose between personal and group training?", a: "Yes, both personal and group training are available in KUNERA and SPARTI. You can also combine them based on your goals." },
      { q: "How long is a training session?", a: "Personal training sessions are typically 60 minutes. Group sessions are 45-60 minutes depending on the program." },
      { q: "What should I wear?", a: "Comfortable sportswear and clean indoor training shoes. We train in a clean studio environment." },
    ],
  },
  {
    title: "Registration & Practical",
    items: [
      { q: "How do I register?", a: "Simply fill in our registration form on the Contact page. We'll contact you to discuss the best training option for your goals and schedule." },
      { q: "Where does training take place?", a: "Training takes place at our studio. Check the contact page for our exact location and opening hours." },
      { q: "Can I cancel or reschedule?", a: "Yes, we have a flexible cancellation policy. Please give at least 24 hours notice for personal training sessions." },
      { q: "Do I need to bring anything?", a: "Just yourself, a water bottle, and a towel. We provide all the training space and any minimal equipment needed." },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about KUNERA, SPARTI, and how to get started."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          {faqCategories.map((cat) => (
            <div key={cat.title} className="mb-12">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">{cat.title}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.items.map((faq, i) => (
                  <AccordionItem key={i} value={`${cat.title}-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-soft">
                    <AccordionTrigger className="font-body text-sm font-semibold text-charcoal hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
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
