import heroImage from "@/assets/hero-clinic.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Modern physiotherapy clinic" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
      </div>

      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ice-deep border border-gold-light/30">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm font-body font-medium text-navy">Award-Winning Functional Rehabilitation</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-navy">
            Restore Your
            <br />
            <span className="text-gradient-navy">Movement</span>
            <span className="text-gold">.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-lg">
            Expert physiotherapy combining functional exercises and evidence-based care to rebuild your mobility, strength, and confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-navy hover:bg-navy-light text-primary-foreground font-body text-base px-8 py-6 gap-2 shadow-elevated">
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-navy/20 text-navy hover:bg-ice font-body text-base px-8 py-6">
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-12 pt-4">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "5,000+", label: "Patients Treated" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-navy">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
