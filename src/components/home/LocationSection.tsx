import { MapPin, Phone, Clock, Mail } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const contactInfo = [
  { icon: MapPin, label: "Training Studio Address, City" },
  { icon: Phone, label: "+31 6 12 34 56 78" },
  { icon: Mail, label: "info@kunera.com" },
  { icon: Clock, label: "Mon–Fri: 7am–9pm | Sat: 8am–2pm" },
];

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">{t.location.badge}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">{t.location.title}</h2>
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sage-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-sage" />
                  </div>
                  <span className="font-body text-sm text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedItem delay={0.15}>
            <div className="bg-sand-light rounded-2xl flex items-center justify-center min-h-[350px] border border-border">
              <div className="text-center space-y-2">
                <MapPin className="w-10 h-10 text-taupe mx-auto" />
                <p className="font-body text-sm text-taupe">{t.location.mapPlaceholder}</p>
                <p className="font-body text-xs text-muted-foreground">{t.location.mapEmbed}</p>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
