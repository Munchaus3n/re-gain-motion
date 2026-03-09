const steps = [
  {
    number: "01",
    title: "Choose Your Path",
    description: "Decide between KUNERA (open to everyone) or SPARTI (women-only). Not sure? We'll help you choose.",
  },
  {
    number: "02",
    title: "Fill in the Form",
    description: "Complete our simple registration form with your goals, experience, and preferences.",
  },
  {
    number: "03",
    title: "Get Matched",
    description: "We'll contact you to discuss the best training option — personal or group — tailored to your needs.",
  },
  {
    number: "04",
    title: "Start Training",
    description: "Begin your journey with expert coaching, real movement, and a supportive community.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage mb-3 block">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Getting Started Is Simple
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-sage-muted flex items-center justify-center mx-auto">
                <span className="font-display text-xl font-bold text-sage">{step.number}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute" />
              )}
              <h3 className="font-display text-xl font-bold text-charcoal">{step.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
