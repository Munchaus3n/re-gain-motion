import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import coachImage from "@/assets/coach.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const p = t.pages.about;

  return (
    <Layout>
      <PageHero badge={p.badge} title={p.title} subtitle={p.subtitle} />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={coachImage} alt="Coach" className="w-full h-[500px] object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">{p.whyTitle}</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>{p.whyP1}</p><p>{p.whyP2}</p><p>{p.whyP3}</p><p>{p.whyP4}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-4">{p.valuesTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {p.values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-8 shadow-soft border border-border">
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">{v.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
