import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";

interface LegalPageProps {
  type: "privacy" | "terms" | "cookies" | "health";
}

const Legal = ({ type }: LegalPageProps) => {
  const { t } = useLanguage();
  const page = t.pages.legal[type];

  return (
    <Layout>
      <PageHero badge={page.badge} title={page.title} subtitle={page.subtitle} />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-6">
            {page.body.map((paragraph, i) => (
              <p key={i} className="font-body text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
          </div>
          <p className="mt-12 text-xs font-body text-muted-foreground/50">{t.pages.legal.lastUpdated}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
