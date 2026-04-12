import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.kunera, href: "/kunera" },
    { label: t.nav.sparti, href: "/sparti" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.faq, href: "/faq" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "lt" : "en");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b bg-white/0 border-white/0 opacity-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold text-charcoal tracking-tight">
          KUNERA<span className="text-sage">.</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-body text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                location.pathname === link.href
                  ? "text-charcoal"
                  : "text-muted-foreground hover:text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-xs font-body font-medium text-muted-foreground cursor-pointer hover:text-charcoal transition-colors"
          >
            {language === "en" ? "EN" : "LT"} / {language === "en" ? "LT" : "EN"}
          </button>
          <Link to="/contact">
            <Button size="sm" className="bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-xs tracking-wide uppercase px-6">
              {t.nav.register}
            </Button>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-charcoal">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t px-6 py-6 space-y-4 border-[#dae2e7]/0 bg-[#f5f8fa]/[0.49] text-center pt-[24px] pb-[24px] shadow-none">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block font-body text-sm font-medium text-foreground uppercase tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="gap-4 flex-row flex items-center justify-center py-[20px] my-0 pb-[20px] pt-[14px]">
            <button
              onClick={toggleLanguage}
              className="text-xs font-body font-medium text-muted-foreground hover:text-charcoal transition-colors"
            >
              {language === "en" ? "EN" : "LT"} / {language === "en" ? "LT" : "EN"}
            </button>
          </div>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body">
              {t.nav.register}
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
