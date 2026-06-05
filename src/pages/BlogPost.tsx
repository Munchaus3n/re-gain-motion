import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  const p = t.pages.blog;
  const a = p.article;

  const post = p.posts.find((x) => x.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = p.posts.filter((x) => x.slug !== slug).slice(0, 2);

  return (
    <Layout>
      <article>
        {/* Hero */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                className="inline-block font-body text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-sage transition-colors mb-8"
              >
                {a.backToBlog}
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-body font-semibold uppercase tracking-[0.1em]">
                  {post.category}
                </span>
                <span className="text-xs font-body text-muted-foreground">{post.date}</span>
                <span className="text-xs font-body text-muted-foreground">·</span>
                <span className="text-xs font-body text-muted-foreground">{post.readTime}</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] mb-8">
                {post.title}
              </h1>

              <div className="flex items-center justify-between border-t border-b border-border py-4">
                <span className="font-body text-sm text-muted-foreground">{a.byline}</span>
                <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {a.share}
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Cover */}
        <AnimatedSection className="container mx-auto px-6 mb-16 lg:mb-20">
          <div className="max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden bg-sand/20">
            <img src="/placeholder.svg" alt={post.title} className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>

        {/* Body */}
        <section className="pb-20 lg:pb-28">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <AnimatedItem>
                <p className="font-display text-2xl md:text-3xl text-charcoal leading-snug mb-12 italic">
                  {a.lead}
                </p>
              </AnimatedItem>

              {a.sections.map((section, i) => (
                <AnimatedItem key={i} delay={0.05}>
                  <div className="mb-12">
                    <h2 className="font-display text-3xl text-charcoal mb-5">{section.heading}</h2>
                    <div className="space-y-5">
                      {section.paragraphs.map((para, j) => (
                        <p key={j} className="font-body text-base md:text-lg text-charcoal/80 leading-[1.8]">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {i === 0 && (
                    <figure className="my-14 -mx-2 md:-mx-12">
                      <blockquote className="border-l-2 border-sage pl-6 md:pl-8">
                        <p className="font-display text-2xl md:text-3xl text-charcoal leading-snug italic">
                          “{a.pullQuote}”
                        </p>
                      </blockquote>
                    </figure>
                  )}
                </AnimatedItem>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-sage-muted/40">
          <div className="container mx-auto px-6">
            <AnimatedSection className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-3">{a.ctaTitle}</h2>
              <p className="font-body text-muted-foreground mb-8">{a.ctaSubtitle}</p>
              <Button asChild size="lg" className="bg-sage hover:bg-sage/90 text-white">
                <Link to="/contact">{a.ctaButton}</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Related */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection className="max-w-5xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-10">{a.relatedTitle}</h2>
              <div className="grid sm:grid-cols-2 gap-10">
                {related.map((r, i) => (
                  <AnimatedItem key={r.slug} delay={i * 0.08}>
                    <Link to={`/blog/${r.slug}`} className="group block space-y-4">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden bg-sand/20">
                        <img
                          src="/placeholder.svg"
                          alt={r.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-body font-semibold uppercase tracking-[0.1em]">
                            {r.category}
                          </span>
                          <span className="text-xs font-body text-muted-foreground">{r.readTime}</span>
                        </div>
                        <h3 className="font-display text-xl text-charcoal group-hover:text-sage transition-colors leading-snug">
                          {r.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.excerpt}</p>
                      </div>
                    </Link>
                  </AnimatedItem>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
