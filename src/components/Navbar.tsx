import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Services", "Testimonials", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold text-navy tracking-tight">
          KINESIS<span className="text-gold">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm font-medium text-muted-foreground hover:text-navy transition-colors tracking-wide uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 border-navy/20 text-navy hover:bg-navy hover:text-primary-foreground">
            <Phone className="w-3.5 h-3.5" />
            Call Us
          </Button>
          <Button size="sm" className="bg-navy hover:bg-navy-light text-primary-foreground">
            Book Now
          </Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-navy">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block font-body text-sm font-medium text-foreground uppercase tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button className="w-full bg-navy hover:bg-navy-light text-primary-foreground">Book Now</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
