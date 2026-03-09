import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Check, Heart } from "lucide-react";

const benefits = [
  "Dedicated women-only training space",
  "Supportive and empowering atmosphere",
  "100% bodyweight-based training",
  "Personal and group sessions available",
  "Build strength, health, and confidence",
  "Expert female-focused coaching",
  "Non-intimidating, judgment-free zone",
  "Community of like-minded women",
];

const Sparti = () => {
  return (
    <Layout>
      <PageHero
        badge="SPARTI"
        title="Women-Only Training"
        subtitle="SPARTI is a dedicated training path for women — offering the same premium bodyweight coaching in a supportive, empowering environment built just for you."
        ctaLabel="Register for SPARTI"
        ctaHref="/contact?program=sparti"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="bg-sand-light rounded-2xl flex items-center justify-center min-h-[450px] border border-border">
              <div className="text-center space-y-4">
                <Heart className="w-16 h-16 text-bronze mx-auto" />
                <p className="font-display text-2xl font-bold text-charcoal">SPARTI</p>
                <p className="font-body text-sm text-taupe">Women-Only Training Path</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">Why SPARTI Exists</h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                SPARTI was created because we believe women deserve a dedicated space to train — one that feels safe, supportive, and empowering. A place where you can focus on your strength without distraction.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                SPARTI is part of the KUNERA family, sharing the same training philosophy and quality. The difference is the environment: exclusively for women, designed to help you build confidence alongside strength.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-bronze mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sand-light">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Who Is SPARTI For?</h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
            SPARTI is for women who want to train in a supportive, women-only environment. Whether you're new to fitness or experienced — SPARTI is your space to grow stronger and more confident.
          </p>
          <a href="/contact?program=sparti" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-sm px-8 py-3 rounded-lg transition-colors">
            Register for SPARTI →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Sparti;
