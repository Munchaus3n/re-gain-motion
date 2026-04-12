import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Users, Smile, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Users, Smile, Shield, Zap];

const GroupTraining = () => {
  const { t } = useLanguage();
  const p = t.pages.groupTraining;

  return (
    <Layout>
      <PageHero badge={p.badge} title={p.title} subtitle={p.subtitle} ctaLabel={p.ctaLabel} />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {p.features.map((f, i) => {
              const Icon = icons[i];
              return (
                <div key={f.title} className="bg-card rounded-xl p-8 shadow-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-sage-muted flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">{f.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal mb-6">{p.howTitle}</h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            <p>{p.howP1}</p>
            <p>{p.howP2}</p>
          </div>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-sm px-8 py-3 rounded-lg transition-colors">{p.registerNow}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GroupTraining;
