import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import RegistrationForm from "@/components/RegistrationForm";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const p = t.pages.contact;

  return (
    <Layout>
      <PageHero badge={p.badge} title={p.title} subtitle={p.subtitle} />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
                <h2 className="font-display text-2xl font-bold text-charcoal mb-6">{p.formTitle}</h2>
                <RegistrationForm />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-4">{p.contactDetails}</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "info@kunera.com" },
                    { icon: Phone, label: "+31 6 12 34 56 78" },
                    { icon: MapPin, label: "Training Studio Address, City" },
                    { icon: Clock, label: "Mon–Fri: 7am–9pm | Sat: 8am–2pm" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sage-muted flex items-center justify-center">
                        <Icon className="w-4 h-4 text-sage" />
                      </div>
                      <span className="text-sm font-body text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-sand-light rounded-xl flex items-center justify-center min-h-[250px] border border-border">
                <div className="text-center space-y-2">
                  <MapPin className="w-8 h-8 text-taupe mx-auto" />
                  <p className="font-body text-xs text-taupe">{t.location.mapPlaceholder}</p>
                </div>
              </div>
              <div className="bg-cream rounded-xl p-6 border border-border">
                <h4 className="font-body text-sm font-semibold text-charcoal mb-2">{p.notSure}</h4>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">{p.notSureDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
