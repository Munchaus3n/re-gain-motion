import aboutImage from "@/assets/about-clinic.jpg";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Board-certified physiotherapy specialists",
  "State-of-the-art functional training facility",
  "Personalized treatment plans for every patient",
  "Evidence-based, outcome-driven rehabilitation",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={aboutImage} alt="Physiotherapist working with patient" className="w-full h-[500px] object-cover" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elevated border border-border max-w-[220px]">
              <p className="font-display text-3xl font-bold text-navy">15+</p>
              <p className="text-sm text-muted-foreground font-body">Years restoring movement and improving lives</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-sm font-body font-semibold uppercase tracking-widest text-gold">About Kinesis</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight">
              Where Science Meets Movement
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              At Kinesis, we believe that optimal movement is the foundation of a healthy life. Our clinic blends
              cutting-edge functional exercise methodologies with compassionate, one-on-one care to help you
              move better, feel stronger, and live fully.
            </p>
            <div className="space-y-4 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
