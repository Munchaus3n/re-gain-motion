import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Users, ArrowRight } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: User, title: t.services.personal.title, description: t.services.personal.description, audience: t.services.personal.audience, href: "/personal-training" },
    { icon: Users, title: t.services.group.title, description: t.services.group.description, audience: t.services.group.audience, href: "/group-training" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">{t.services.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground font-body text-lg">{t.services.subtitle}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <AnimatedItem key={service.title} delay={i * 0.15}>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-sage-muted flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-sage" />
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">{service.description}</p>
                <p className="text-xs font-body font-medium text-sage uppercase tracking-wide mb-6">{service.audience}</p>
                <Link to={service.href}>
                  <Button variant="outline" className="border-charcoal/15 text-charcoal hover:bg-accent font-body gap-2">
                    {t.services.learnMore}<ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
