import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-charcoal">
      <AnimatedSection className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
          Ready to Start<br />Your Journey?
        </h2>
        <p className="text-lg font-body text-primary-foreground/60 leading-relaxed mb-8 max-w-xl mx-auto">
          Take the first step. Fill in the registration form and we'll help you find the perfect training path — whether that's KUNERA or SPARTI.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-sage hover:bg-sage-light text-primary-foreground font-body text-sm px-10 py-6 gap-2 shadow-elevated">
            Register Now<ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </AnimatedSection>
    </section>
  );
};

export default FinalCTA;
