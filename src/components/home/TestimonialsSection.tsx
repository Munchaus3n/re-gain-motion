import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "KUNERA completely changed how I think about fitness. The bodyweight approach feels natural, and I've never felt stronger.",
    name: "Thomas K.",
    detail: "KUNERA member, 8 months",
  },
  {
    quote: "SPARTI gave me a space where I feel comfortable and supported. The training is challenging but the coach makes it feel safe.",
    name: "Sarah M.",
    detail: "SPARTI member, 6 months",
  },
  {
    quote: "I came in as a complete beginner and now I'm doing things I never thought possible. The personal attention makes all the difference.",
    name: "Lisa D.",
    detail: "KUNERA personal training",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage-light mb-3 block">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            What Our Members Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-sand fill-sand" />
                ))}
              </div>
              <p className="font-body text-primary-foreground/80 leading-relaxed mb-6 text-sm">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body font-semibold text-primary-foreground text-sm">{t.name}</p>
                <p className="font-body text-primary-foreground/40 text-xs">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
