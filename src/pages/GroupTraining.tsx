import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Users, Smile, Shield, Zap } from "lucide-react";

const features = [
  { icon: Users, title: "Small Groups", desc: "Groups are kept small to ensure personal attention and quality coaching for every member." },
  { icon: Smile, title: "Community Atmosphere", desc: "Train alongside others who share your goals. The group energy keeps you motivated and accountable." },
  { icon: Shield, title: "Safe & Supportive", desc: "Every session is coached and supervised. Exercises are adapted to your level within the group." },
  { icon: Zap, title: "Effective Training", desc: "Structured group programs deliver real results while making training fun and engaging." },
];

const GroupTraining = () => {
  return (
    <Layout>
      <PageHero
        badge="Group Training"
        title="Train Together"
        subtitle="Small group sessions that combine expert coaching with community energy. Motivating, supportive, and effective."
        ctaLabel="Register for Group Training"
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
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal mb-6">How Group Sessions Work</h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            <p>Group training sessions follow a structured program led by your coach. Each session includes warm-up, main bodyweight workout, and cool-down. Exercises are adapted so everyone can participate at their own level.</p>
            <p>Group training is available through both KUNERA (mixed groups) and SPARTI (women-only groups). Choose the environment that suits you best.</p>
          </div>
          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-sm px-8 py-3 rounded-lg transition-colors">
              Register Now →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GroupTraining;
