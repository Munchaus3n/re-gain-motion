import { Check } from "lucide-react";

const audiences = [
  "Beginners who want to start moving better",
  "People looking to build functional strength",
  "Anyone wanting a healthier, more active lifestyle",
  "Women seeking a supportive, women-only training space",
  "Those who prefer bodyweight over machines",
  "People who want personal coaching and accountability",
];

const WhoItsForSection = () => {
  return (
    <section className="py-24 bg-sand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">Who It's For</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-4">
              Training That Fits Your Life
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              KUNERA is built for real people with real goals. No matter where you're starting from, there's a path here for you.
            </p>
          </div>

          <div className="space-y-4">
            {audiences.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card rounded-xl px-5 py-4 shadow-soft border border-border">
                <div className="w-6 h-6 rounded-full bg-sage-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-sage" />
                </div>
                <span className="text-sm font-body text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
