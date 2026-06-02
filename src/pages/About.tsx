import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import coachImage from "@/assets/coach.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const p = t.pages.about;

  return (
    <Layout>
      <PageHero badge={p.badge} title={p.title} subtitle={p.subtitle} />

      {/* Asymmetric Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <AnimatedSection className="lg:col-span-5 relative">
              <div
                className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-sage-muted/50 hidden lg:block"
                aria-hidden
              />
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={coachImage}
                  alt="Coach"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedItem delay={0.15} className="lg:col-span-7 lg:pl-4">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">
                {p.eyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                {p.whyTitle}
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>{p.whyP1}</p>
                <blockquote className="font-display italic text-xl md:text-2xl leading-snug text-charcoal border-l-2 border-sage pl-6 py-1 my-6">
                  "{p.pullQuote}"
                </blockquote>
                <p>{p.whyP2}</p>
                <p>{p.whyP3}</p>
                <p className="text-charcoal font-medium">{p.whyP4}</p>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">
              {p.valuesBadge}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
              {p.valuesTitle}
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              {p.valuesSubtitle}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {p.values.map((v, i) => (
              <AnimatedItem key={v.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-8 shadow-soft border border-border h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-sage-muted flex items-center justify-center shrink-0">
                      <span className="font-display text-lg font-bold text-sage">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                        {v.title}
                      </h3>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
