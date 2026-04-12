import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="font-display text-2xl font-bold text-primary-foreground tracking-tight">
              KUNERA<span className="text-sage-light">.</span>
            </Link>
            <p className="text-sm font-body text-primary-foreground/50 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/70 mb-4">{t.footer.navigate}</h4>
            <div className="space-y-3">
              {[
                { label: t.nav.about, href: "/about" },
                { label: t.nav.kunera, href: "/kunera" },
                { label: t.nav.sparti, href: "/sparti" },
                { label: t.nav.pricing, href: "/pricing" },
                { label: t.nav.gallery, href: "/gallery" },
                { label: t.nav.blog, href: "/blog" },
                { label: t.nav.faq, href: "/faq" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="block text-sm font-body text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/70 mb-4">{t.footer.training}</h4>
            <div className="space-y-3">
              {[
                { label: t.footer.personalTraining, href: "/personal-training" },
                { label: t.footer.groupTraining, href: "/group-training" },
                { label: t.nav.register, href: "/contact" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="block text-sm font-body text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/70 mb-4">{t.footer.contactTitle}</h4>
            <div className="space-y-3 text-sm font-body text-primary-foreground/40">
              <p>info@kunera.com</p>
              <p>+31 6 12 34 56 78</p>
              <p>Training Studio Address<br />City, Postal Code</p>
            </div>
            <div className="flex gap-4 mt-4">
              {["Instagram", "Facebook"].map((social) => (
                <a key={social} href="#" className="text-xs font-body text-primary-foreground/30 hover:text-primary-foreground transition-colors uppercase tracking-wide">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-primary-foreground/25">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            {[
              { label: t.footer.privacyPolicy, href: "/privacy" },
              { label: t.footer.terms, href: "/terms" },
              { label: t.footer.cookies, href: "/cookies" },
              { label: t.footer.healthDisclaimer, href: "/health-disclaimer" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-xs font-body text-primary-foreground/25 hover:text-primary-foreground/50 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
