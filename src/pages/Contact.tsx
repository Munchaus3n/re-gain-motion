import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import RegistrationForm from "@/components/RegistrationForm";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <PageHero
        badge="Register"
        title="Start Your Journey"
        subtitle="Fill in the form below and we'll get in touch to find the perfect training path for you."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-elevated border border-border">
                <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Registration Form</h2>
                <RegistrationForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-4">Contact Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "info@kunera.com" },
                    { icon: Phone, label: "+31 6 12 34 56 78" },
                    { icon: MapPin, label: "Training Studio Address, City" },
                    { icon: Clock, label: "Mon–Fri: 7am–9pm | Sat: 8am–2pm" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sage-muted flex items-center justify-center">
                        <Icon className="w-4 h-4 text-sage" />
                      </div>
                      <span className="text-sm font-body text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-sand-light rounded-xl flex items-center justify-center min-h-[250px] border border-border">
                <div className="text-center space-y-2">
                  <MapPin className="w-8 h-8 text-taupe mx-auto" />
                  <p className="font-body text-xs text-taupe">Map placeholder</p>
                </div>
              </div>

              <div className="bg-cream rounded-xl p-6 border border-border">
                <h4 className="font-body text-sm font-semibold text-charcoal mb-2">Not sure which path?</h4>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">
                  Select "Not sure yet" in the form and we'll help you decide during a free introductory conversation. No pressure, no commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
