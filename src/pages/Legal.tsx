import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

interface LegalPageProps {
  type: "privacy" | "terms" | "cookies" | "health";
}

const content = {
  privacy: {
    badge: "Legal",
    title: "Privacy Policy",
    subtitle: "How we collect, use, and protect your personal information.",
    body: [
      "This Privacy Policy describes how KUNERA collects, uses, and shares your personal information when you visit our website or use our services.",
      "We collect personal information such as your name, email address, phone number, and health-related information that you voluntarily provide through our registration form.",
      "Your personal information is used to process your registration, communicate with you about training options, and improve our services.",
      "We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.",
      "You have the right to access, correct, or delete your personal information at any time by contacting us at info@kunera.com.",
      "This policy is a placeholder and should be reviewed by a legal professional before publishing.",
    ],
  },
  terms: {
    badge: "Legal",
    title: "Terms & Conditions",
    subtitle: "The terms governing the use of our services.",
    body: [
      "By registering for KUNERA or SPARTI training services, you agree to these Terms & Conditions.",
      "Training sessions must be canceled at least 24 hours in advance. Late cancellations may be charged at the full session rate.",
      "Training packages are non-refundable and non-transferable unless otherwise agreed upon in writing.",
      "Participants train at their own risk. KUNERA provides professional coaching but cannot be held liable for injuries sustained during training.",
      "KUNERA reserves the right to modify pricing, schedules, and these terms with reasonable notice.",
      "These terms are a placeholder and should be reviewed by a legal professional before publishing.",
    ],
  },
  cookies: {
    badge: "Legal",
    title: "Cookie Policy",
    subtitle: "How we use cookies on this website.",
    body: [
      "This website uses cookies to improve your browsing experience and analyze website traffic.",
      "Essential cookies are required for the website to function properly and cannot be disabled.",
      "Analytics cookies help us understand how visitors interact with our website so we can improve it.",
      "You can manage your cookie preferences through your browser settings at any time.",
      "This policy is a placeholder and should be reviewed by a legal professional before publishing.",
    ],
  },
  health: {
    badge: "Legal",
    title: "Health Disclaimer",
    subtitle: "Important health and safety information.",
    body: [
      "KUNERA and SPARTI training programs are designed for general fitness purposes. They are not a substitute for medical advice, diagnosis, or treatment.",
      "If you have any medical conditions, injuries, or health concerns, please consult your healthcare provider before starting any training program.",
      "You are responsible for informing your coach about any injuries, physical limitations, or health conditions that may affect your ability to train safely.",
      "By participating in our training programs, you acknowledge that physical activity carries inherent risks and you accept responsibility for your own health and safety.",
      "This disclaimer is a placeholder and should be reviewed by a legal professional before publishing.",
    ],
  },
};

const Legal = ({ type }: LegalPageProps) => {
  const page = content[type];

  return (
    <Layout>
      <PageHero badge={page.badge} title={page.title} subtitle={page.subtitle} />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="space-y-6">
            {page.body.map((paragraph, i) => (
              <p key={i} className="font-body text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-12 text-xs font-body text-muted-foreground/50">
            Last updated: March 2026
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
