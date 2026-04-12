import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import kuneraImage from "@/assets/kunera-training.jpg";

const DualPathSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">Two Paths, One Mission</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">Choose Your Path</h2>
          <p className="text-muted-foreground font-body text-lg">Whether you're looking for inclusive training or a women-only environment, we have the right path for you.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedItem delay={0.1}>
            <div className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300 h-full">
              <div className="h-56 overflow-hidden">
                <img src={kuneraImage} alt="KUNERA group training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 space-y-5 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sage-muted flex items-center justify-center">
                    <Users className="w-5 h-5 text-sage" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-charcoal">KUNERA</h3>
                </div>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-sage">Training for Everyone</p>
                <ul className="space-y-2">
                  {["Open to all levels and backgrounds", "Bodyweight-based strength & movement", "Personal and group training available", "Sustainable, healthy approach"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                      <span className="text-sage mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact?program=kunera" className="mt-auto pt-4">
                  <Button className="w-full bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body gap-2 py-5">
                    Register for KUNERA<ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.25}>
            <div className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300 h-full">
              <div className="h-56 overflow-hidden bg-sand-light flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-bronze mx-auto mb-2" />
                  <span className="font-body text-xs text-taupe uppercase tracking-widest">Women Only</span>
                </div>
              </div>
              <div className="p-8 space-y-5 flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sand-light flex items-center justify-center">
                    <Heart className="w-5 h-5 text-bronze" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-charcoal">SPARTI</h3>
                </div>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-bronze">Women-Only Training</p>
                <ul className="space-y-2">
                  {["Dedicated women-only environment", "Supportive and empowering atmosphere", "Personal and group training available", "Build strength, health & confidence"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                      <span className="text-bronze mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact?program=sparti" className="mt-auto pt-4">
                  <Button className="w-full bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body gap-2 py-5">
                    Register for SPARTI<ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
};

export default DualPathSection;
