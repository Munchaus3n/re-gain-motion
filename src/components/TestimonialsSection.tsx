import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    text: "After my knee surgery, I thought my running days were over. The team at Kinesis designed a functional recovery program that had me back on the track in 4 months. Incredible care.",
    rating: 5,
  },
  {
    name: "James Thornton",
    role: "Office Professional",
    text: "Years of desk work left me with chronic back pain. The corrective exercise program completely transformed my posture and eliminated my pain. I feel 10 years younger.",
    rating: 5,
  },
  {
    name: "Elena Vasquez",
    role: "Retired Teacher",
    text: "The mobility training program gave me back my independence. I can now walk my grandchildren to school and garden without pain. This clinic truly cares about its patients.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-body font-semibold uppercase tracking-widest text-gold mb-3">Patient Stories</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Real Results, Real Lives
          </h2>
          <p className="text-primary-foreground/60 font-body text-lg">
            Hear from patients who have transformed their mobility and quality of life with our care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10">
              <Quote className="w-8 h-8 text-gold/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-6 text-sm">{t.text}</p>
              <div>
                <p className="font-display font-semibold text-primary-foreground">{t.name}</p>
                <p className="text-sm text-primary-foreground/50 font-body">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
