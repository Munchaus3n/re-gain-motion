const Footer = () => {
  return (
    <footer className="bg-navy py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display text-2xl font-bold text-primary-foreground tracking-tight">
            KINESIS<span className="text-gold">.</span>
          </a>
          <div className="flex gap-8">
            {["About", "Services", "Testimonials", "Contact"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-body text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
          <p className="text-sm font-body text-primary-foreground/30">
            © 2026 Kinesis Physiotherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
