import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Check } from "lucide-react";
import kuneraImage from "@/assets/kunera-training.jpg";

const benefits = [
  "Open to all ages, levels, and backgrounds",
  "100% bodyweight-based training",
  "Personal and group sessions available",
  "Focus on functional strength and mobility",
  "Sustainable, long-term approach to fitness",
  "Expert coaching with personal attention",
  "Supportive, non-intimidating environment",
  "Flexible scheduling options",
];

const Kunera = () => {
  return (
    <Layout>
      <PageHero
        badge="KUNERA"
        title="Training for Everyone"
        subtitle="KUNERA is premium bodyweight training designed for real people. Build strength, improve mobility, and move better — no matter your starting point."
        ctaLabel="Register for KUNERA"
        ctaHref="/contact?program=kunera"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={kuneraImage} alt="KUNERA training" className="w-full h-[450px] object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">What is KUNERA?</h2>
              <p className="text-muted-foreground font-body leading-relaxed">
                KUNERA is the main training brand — open to everyone. Whether you're a complete beginner, returning after a break, or an experienced athlete looking for a smarter approach, KUNERA is your path to better movement and real strength.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                All training is bodyweight-based, meaning we use your own body as the tool. This approach builds functional strength, improves mobility, and creates lasting results — safely and progressively.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">Who Is KUNERA For?</h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
            KUNERA is for anyone who wants to train smarter, feel healthier, and build real strength through bodyweight training. No experience required. All levels welcome.
          </p>
          <a href="/contact?program=kunera" className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-primary-foreground font-body text-sm px-8 py-3 rounded-lg transition-colors">
            Register for KUNERA →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Kunera;
