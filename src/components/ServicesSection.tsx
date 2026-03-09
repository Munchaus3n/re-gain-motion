import { Activity, Dumbbell, HeartPulse, Bone, Brain, StretchHorizontal } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Functional Movement Assessment",
    description: "Comprehensive evaluation of your movement patterns to identify imbalances and create a targeted recovery plan.",
  },
  {
    icon: Dumbbell,
    title: "Corrective Exercise Programs",
    description: "Tailored exercise protocols designed to rebuild strength, correct posture, and restore natural movement.",
  },
  {
    icon: HeartPulse,
    title: "Cardiovascular Rehabilitation",
    description: "Guided cardio programs to safely rebuild endurance and cardiovascular health post-injury or surgery.",
  },
  {
    icon: Bone,
    title: "Joint Mobilization Therapy",
    description: "Hands-on techniques to restore range of motion, reduce stiffness, and improve joint function.",
  },
  {
    icon: Brain,
    title: "Neuromuscular Re-education",
    description: "Advanced protocols to retrain the connection between your nervous system and muscles for optimal coordination.",
  },
  {
    icon: StretchHorizontal,
    title: "Flexibility & Mobility Training",
    description: "Progressive stretching and mobility routines to enhance flexibility and prevent future injuries.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-ice">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-body font-semibold uppercase tracking-widest text-gold mb-3">Our Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Specialized Services
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Evidence-based treatments tailored to your unique needs, delivered by our expert clinical team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-gold-light/40"
            >
              <div className="w-12 h-12 rounded-lg bg-ice-deep flex items-center justify-center mb-5 group-hover:bg-navy transition-colors duration-300">
                <service.icon className="w-6 h-6 text-navy group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
