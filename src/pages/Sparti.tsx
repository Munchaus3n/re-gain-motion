import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Check, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Sparti = () => {
  const { t } = useLanguage();
  const p = t.pages.sparti;

  return (
    <Layout>
      <PageHero badge={p.badge} title={p.title} subtitle={p.subtitle} ctaLabel={p.ctaLabel} ctaHref="/contact?program=sparti" />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="bg-sand-light rounded-2xl flex items-center justify-center min-h-[450px] border border-border">
              <div className="text-center space-y-4">
                <Heart className="w-16 h-16 text-bronze mx-auto" />
                <p className="font-display text-2xl font-bold text-charcoal">SPARTI</p>
                <p className="font-body text-sm text-taupe">{p.womenOnlyPath}</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">{p.whyTitle}</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{p.whyP1}</p>
              <p className="text-muted-foreground font-body leading-relaxed">{p.whyP2}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {p.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-bronze mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-sand-light">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">{p.whoTitle}</h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">{p.whoDesc}</p>
          <a href="/contact?program=sparti" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-sm px-8 py-3 rounded-lg transition-colors">{p.registerSparti}</a>
        </div>
      </section>
    </Layout>
  );
};

export default Sparti;
