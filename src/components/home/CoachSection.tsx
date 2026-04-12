import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import coachImage from "@/assets/coach.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const CoachSection = () => {
  const { t } = useLanguage();

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
                <p className="font-display text-3xl font-bold text-charcoal">{t.coach.yearsValue}</p>
                <p className="text-sm font-body text-muted-foreground">{t.coach.yearsLabel}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedItem delay={0.15}>
            <div className="space-y-6">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage">{t.coach.badge}</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight whitespace-pre-line">
                {t.coach.title}
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>{t.coach.p1}</p>
                <p>{t.coach.p2}</p>
                <p>{t.coach.p3}</p>
              </div>
              <div className="flex gap-8 pt-4">
                {t.coach.credentials.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sage-muted text-sage text-xs flex items-center justify-center font-bold">✓</span>
                    <span className="text-xs font-body font-medium text-charcoal">{item}</span>
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
