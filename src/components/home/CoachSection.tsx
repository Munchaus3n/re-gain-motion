import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import coachImage from "@/assets/coach.jpg";

const CoachSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img src={coachImage} alt="Your coach" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elevated border border-border hidden md:block">
                <p className="font-display text-3xl font-bold text-charcoal">10+</p>
                <p className="text-sm font-body text-muted-foreground">Years of Experience</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedItem delay={0.15}>
            <div className="space-y-6">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage">Your Coach</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight">
                Built on Passion,<br />Driven by Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>With over a decade of experience in functional fitness and bodyweight training, I founded KUNERA to make premium movement coaching accessible to everyone.</p>
                <p>I believe that strength training should feel empowering, not intimidating. That's why I created two distinct paths — KUNERA for everyone, and SPARTI as a dedicated space where women can train with confidence in a supportive environment.</p>
                <p>Every session is designed around your body, your goals, and your pace. No machines. No shortcuts. Just real movement that makes you stronger, healthier, and more confident.</p>
              </div>
              <div className="flex gap-8 pt-4">
                {[
                  { label: "Certified Coach", icon: "✓" },
                  { label: "Bodyweight Specialist", icon: "✓" },
                  { label: "Personal Approach", icon: "✓" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sage-muted text-sage text-xs flex items-center justify-center font-bold">{item.icon}</span>
                    <span className="text-xs font-body font-medium text-charcoal">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
