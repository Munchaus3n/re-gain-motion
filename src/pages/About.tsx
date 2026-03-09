import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import coachImage from "@/assets/coach.jpg";

const values = [
  { title: "Movement First", desc: "We believe in building strength through natural, functional movement — no machines required." },
  { title: "Inclusive by Design", desc: "KUNERA is open to everyone. SPARTI ensures women have a dedicated, supportive space." },
  { title: "Sustainable Health", desc: "We focus on long-term wellbeing, not quick fixes. Every session builds toward lasting change." },
  { title: "Personal Connection", desc: "As a solo coach, I know every member by name. Your journey is personal to me." },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        badge="About"
        title="The Story Behind KUNERA"
        subtitle="A solo training brand built on the belief that everyone deserves access to premium, supportive, bodyweight-based coaching."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={coachImage} alt="Coach" className="w-full h-[500px] object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">Why I Started KUNERA</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>I spent years in the fitness industry and kept seeing the same problem: training that felt impersonal, intimidating, or focused on aesthetics over health.</p>
                <p>KUNERA was born from a simple idea — what if training could be premium, personal, and accessible to everyone? What if strength training felt empowering instead of exhausting?</p>
                <p>I also created SPARTI because I believe women deserve a dedicated space where they can train with confidence, free from judgment, surrounded by support.</p>
                <p>Today, KUNERA and SPARTI are two paths under one mission: help people move better, get stronger, and live healthier — through bodyweight training that works.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-8 shadow-soft border border-border">
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">{v.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
