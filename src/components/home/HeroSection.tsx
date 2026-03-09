import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Premium bodyweight training studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
      </div>

      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-muted border border-sage/20">
            <span className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-sage">Bodyweight Training</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-charcoal">
            Move Better<span className="text-sage">.</span>
            <br />
            Get Stronger<span className="text-sage">.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-lg">
            KUNERA is premium bodyweight training for everyone. Build strength, improve mobility, and feel healthier — at your own pace. Women can also join SPARTI, our dedicated women-only path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-sm px-8 py-6 gap-2 shadow-elevated">
                Register Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/sparti">
              <Button size="lg" variant="outline" className="border-charcoal/20 text-charcoal hover:bg-accent font-body text-sm px-8 py-6">
                Explore SPARTI
              </Button>
            </Link>
          </div>

          <div className="flex gap-12 pt-4">
            {[
              { value: "100%", label: "Bodyweight Based" },
              { value: "2", label: "Training Paths" },
              { value: "Personal", label: "& Group Training" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl md:text-3xl font-bold text-charcoal">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
