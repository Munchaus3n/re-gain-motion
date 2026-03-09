import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { User, Target, Clock, TrendingUp } from "lucide-react";

const features = [
  { icon: User, title: "Fully Personalized", desc: "Every session is designed around your body, goals, and current fitness level." },
  { icon: Target, title: "Goal-Focused", desc: "Whether it's strength, mobility, rehabilitation, or confidence — we build your plan around it." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Sessions are scheduled to fit your lifestyle. Morning, evening, or midday — your choice." },
  { icon: TrendingUp, title: "Progressive Results", desc: "Structured programming ensures you keep improving, safely and sustainably." },
];

const PersonalTraining = () => {
  return (
    <Layout>
      <PageHero
        badge="Personal Training"
        title="One-on-One Coaching"
        subtitle="Experience the most personalized training approach. Every session is tailored to you — your body, your goals, your pace."
        ctaLabel="Register for Personal Training"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-xl p-8 shadow-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-sage-muted flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-sage" />
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">{f.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-charcoal mb-6 text-center">What to Expect</h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-center max-w-2xl mx-auto">
            <p>In a personal training session, you'll work one-on-one with your coach through a program designed specifically for you. Each session includes a warm-up, focused bodyweight exercises, and cool-down.</p>
            <p>Sessions are available through both KUNERA (open to everyone) and SPARTI (women-only). Simply choose the path that feels right for you during registration.</p>
          </div>
          <div className="text-center mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-sm px-8 py-3 rounded-lg transition-colors">
              Register Now →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PersonalTraining;
