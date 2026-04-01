import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "why-bodyweight-training",
    title: "Why Bodyweight Training Is the Foundation of Real Strength",
    excerpt: "Discover how training with your own body builds functional strength, mobility, and lasting health — without a single machine.",
    category: "Training",
    date: "March 2026",
    readTime: "5 min read",
  },
  {
    slug: "what-is-sparti",
    title: "What Is SPARTI — And Why Women-Only Training Matters",
    excerpt: "A closer look at the philosophy behind SPARTI and why a supportive, women-only environment can make all the difference.",
    category: "SPARTI",
    date: "February 2026",
    readTime: "4 min read",
  },
  {
    slug: "mobility-over-flexibility",
    title: "Mobility Over Flexibility: What Actually Matters for Your Body",
    excerpt: "Flexibility without control is meaningless. Learn why mobility-focused training leads to better movement and fewer injuries.",
    category: "Movement",
    date: "January 2026",
    readTime: "6 min read",
  },
  {
    slug: "beginners-guide",
    title: "Your First Session: What to Expect at KUNERA",
    excerpt: "Nervous about starting? Here's exactly what happens during your first training session — and why there's nothing to worry about.",
    category: "Getting Started",
    date: "December 2025",
    readTime: "3 min read",
  },
];

const Blog = () => {
  return (
    <Layout>
      <PageHero
        title="Blog"
        subtitle="Insights on movement, training, and building a stronger, healthier body — the KUNERA way."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {/* Featured post */}
          <AnimatedSection className="mb-16">
            <Link to="#" className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-sand/20">
                  <img
                    src="/placeholder.svg"
                    alt={posts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-body font-semibold uppercase tracking-[0.1em]">
                      {posts[0].category}
                    </span>
                    <span className="text-xs font-body text-muted-foreground">{posts[0].date}</span>
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl text-charcoal group-hover:text-sage transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {posts[0].excerpt}
                  </p>
                  <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <AnimatedItem key={post.slug} delay={i * 0.08}>
                <Link to="#" className="group block space-y-4">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-sand/20">
                    <img
                      src="/placeholder.svg"
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-body font-semibold uppercase tracking-[0.1em]">
                        {post.category}
                      </span>
                      <span className="text-xs font-body text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg text-charcoal group-hover:text-sage transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
