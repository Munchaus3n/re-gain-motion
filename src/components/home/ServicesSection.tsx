import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Personal Training",
    description: "One-on-one sessions tailored to your body, goals, and pace. Fully personalized programming with direct coaching and accountability.",
    audience: "Available in both KUNERA and SPARTI",
    href: "/personal-training",
  },
  {
    icon: Users,
    title: "Group Training",
    description: "Train alongside others in a motivating, supportive environment. Small groups ensure personal attention while building community.",
    audience: "Available in both KUNERA and SPARTI",
    href: "/group-training",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            How You Can Train
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Choose the training format that suits your preferences. Both are bodyweight-based, coach-led, and designed for real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-sage-muted flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-sage" />
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">{service.description}</p>
              <p className="text-xs font-body font-medium text-sage uppercase tracking-wide mb-6">{service.audience}</p>
              <Link to={service.href}>
                <Button variant="outline" className="border-charcoal/15 text-charcoal hover:bg-accent font-body gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
