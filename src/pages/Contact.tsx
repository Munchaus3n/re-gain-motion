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
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-stretch">
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-6 lg:p-7 shadow-elevated border border-border h-full">
                <h2 className="font-display text-xl font-bold text-charcoal mb-4">{p.formTitle}</h2>
                <RegistrationForm compact />
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-5 h-full">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
                <h3 className="font-display text-lg font-bold text-charcoal mb-3">{p.contactDetails}</h3>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: "info@kunera.com" },
                    { icon: Phone, label: "+31 6 12 34 56 78" },
                    { icon: MapPin, label: "Training Studio Address, City" },
                    { icon: Clock, label: "Mon–Fri: 7am–9pm | Sat: 8am–2pm" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sage-muted flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-sage" />
                      </div>
                      <span className="text-sm font-body text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-sand-light rounded-2xl flex items-center justify-center border border-border flex-1 min-h-[160px]">
                <div className="text-center space-y-2">
                  <MapPin className="w-7 h-7 text-taupe mx-auto" />
                  <p className="font-body text-xs text-taupe">{t.location.mapPlaceholder}</p>
                </div>
              </div>
              <div className="bg-cream rounded-2xl p-5 border border-border">
                <h4 className="font-body text-sm font-semibold text-charcoal mb-1.5">{p.notSure}</h4>
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
