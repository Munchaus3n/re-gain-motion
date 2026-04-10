import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "KUNERA", href: "/kunera" },
  { label: "SPARTI", href: "/sparti" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f4f7fa] backdrop-blur-lg border-b border-border shadow-sm">
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
          <span className="text-xs font-body font-medium text-muted-foreground cursor-pointer hover:text-charcoal">
            EN / NL
          </span>
          <Link to="/contact">
            <Button size="sm" className="bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-xs tracking-wide uppercase px-6">
              Register
            </Button>
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-charcoal">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 space-y-4">
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
          <div className="flex items-center gap-4 pt-2">
            <span className="text-xs font-body font-medium text-muted-foreground">EN / NL</span>
          </div>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body">
              Register
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
