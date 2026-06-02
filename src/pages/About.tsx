import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import coachImage from "@/assets/coach.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const p = t.pages.about;

  return (
    <Layout>
      {/* Editorial Hero */}
      <section className="pt-36 pb-24 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <AnimatedSection>
            <span className="block font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-sage mb-8">
              {p.eyebrow}
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-light text-charcoal leading-[1.05] mb-8">
              {p.title}
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              {p.subtitle}
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-[11px] tracking-[0.2em] uppercase px-10 py-6 gap-3 rounded-none"
              >
                {t.common.registerNow}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Asymmetric Story */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <AnimatedSection className="lg:col-span-5 relative">
              <div className="absolute -top-8 -left-8 w-full h-full bg-sage-muted/40 hidden lg:block" aria-hidden />
              <div className="relative overflow-hidden shadow-elevated">
                <img
                  src={coachImage}
                  alt="Coach"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedItem delay={0.15} className="lg:col-span-7 lg:pl-8">
              <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight mb-10">
                {p.whyTitle}
              </h2>
              <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>{p.whyP1}</p>
                <blockquote className="font-display italic text-2xl md:text-3xl leading-snug text-charcoal border-l border-sage pl-8 py-2 my-10">
                  "{p.pullQuote}"
                </blockquote>
                <p>{p.whyP2}</p>
                <p>{p.whyP3}</p>
                <p className="text-charcoal font-normal">{p.whyP4}</p>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* Values — numbered editorial grid */}
      <section className="py-32 bg-cream">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
            <span className="block font-body text-[10px] font-semibold uppercase tracking-[0.4em] text-sage mb-6">
              {p.valuesBadge}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-6">
              {p.valuesTitle}
            </h2>
            <div className="w-12 h-px bg-sage mx-auto mb-6" />
            <p className="font-body text-muted-foreground leading-relaxed">
              {p.valuesSubtitle}
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 max-w-5xl mx-auto">
            {p.values.map((v, i) => (
              <AnimatedItem key={v.title} delay={i * 0.1}>
                <div className="flex gap-8 group">
                  <span
                    className="font-display text-5xl font-light italic text-sage/50 leading-none transition-colors duration-500 group-hover:text-sage shrink-0"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-2xl font-normal text-charcoal mb-3">
                      {v.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
                      {v.desc}
                    </p>
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
