import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

const PageHero = ({ title, subtitle, badge, ctaLabel, ctaHref = "/contact", secondaryCtaLabel, secondaryCtaHref }: PageHeroProps) => {
  const { t } = useLanguage();
  const buttonLabel = ctaLabel || t.common.registerNow;

  return (
    <section className="pt-32 pb-20 bg-cream">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        {badge && (
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-4">
            {badge}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-charcoal leading-[1.1] mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={ctaHref}>
            <Button size="lg" className="bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-sm px-8 py-6 gap-2">
              {buttonLabel}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Link to={secondaryCtaHref}>
              <Button size="lg" variant="outline" className="border-charcoal/20 text-charcoal hover:bg-accent font-body text-sm px-8 py-6">
                {secondaryCtaLabel}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
