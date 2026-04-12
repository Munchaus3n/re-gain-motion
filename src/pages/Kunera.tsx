import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Check } from "lucide-react";
import kuneraImage from "@/assets/kunera-training.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Kunera = () => {
  const { t } = useLanguage();
  const p = t.pages.kunera;

  return (
    <Layout>
      <PageHero badge={p.badge} title={p.title} subtitle={p.subtitle} ctaLabel={p.ctaLabel} ctaHref="/contact?program=kunera" />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={kuneraImage} alt="KUNERA training" className="w-full h-[450px] object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">{p.whatTitle}</h2>
              <p className="text-muted-foreground font-body leading-relaxed">{p.whatP1}</p>
              <p className="text-muted-foreground font-body leading-relaxed">{p.whatP2}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {p.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">{p.whoTitle}</h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">{p.whoDesc}</p>
          <a href="/contact?program=kunera" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-sm px-8 py-3 rounded-lg transition-colors">{p.registerKunera}</a>
        </div>
      </section>
    </Layout>
  );
};

export default Kunera;
