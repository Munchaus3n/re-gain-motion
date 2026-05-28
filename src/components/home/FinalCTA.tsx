import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal">
      <AnimatedSection className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6 whitespace-pre-line">
          {t.finalCta.title}
        </h2>
        <p className="text-lg font-body text-primary-foreground/60 leading-relaxed mb-8 max-w-xl mx-auto">
          {t.finalCta.subtitle}
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-sage hover:bg-sage-light text-primary-foreground font-body text-sm px-10 py-6 gap-2 shadow-elevated">
            {t.finalCta.registerNow}<ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </AnimatedSection>
    </section>
  );
};

export default FinalCTA;
