import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* CTA */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-body font-semibold uppercase tracking-widest text-gold mb-3">Get Started</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight">
                Begin Your Recovery Journey
              </h2>
              <p className="mt-4 text-muted-foreground font-body text-lg leading-relaxed">
                Take the first step toward pain-free movement. Book a consultation and let our experts create your personalized treatment plan.
              </p>
            </div>

            <Button size="lg" className="bg-navy hover:bg-navy-light text-primary-foreground font-body text-base px-8 py-6 gap-2 shadow-elevated">
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>

            <div className="space-y-5 pt-4">
              {[
                { icon: MapPin, label: "123 Wellness Avenue, Suite 200" },
                { icon: Phone, label: "+1 (555) 234-5678" },
                { icon: Clock, label: "Mon–Fri: 7am–7pm | Sat: 8am–2pm" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ice-deep flex items-center justify-center">
                    <Icon className="w-5 h-5 text-navy" />
                  </div>
                  <span className="font-body text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
            <h3 className="font-display text-2xl font-bold text-navy mb-6">Request an Appointment</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">First Name</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition" />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1.5">Last Name</label>
                  <input className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition" />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition" />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">How can we help?</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition resize-none" />
              </div>
              <Button type="submit" className="w-full bg-navy hover:bg-navy-light text-primary-foreground font-body py-6">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
