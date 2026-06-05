import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();
  const p = t.pages.blog;

  return (
    <Layout>
      <PageHero title={p.title} subtitle={p.subtitle} />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16">
            <Link to={`/blog/${p.posts[0].slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-sand/20">
                  <img src="/placeholder.svg" alt={p.posts[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-body font-semibold uppercase tracking-[0.1em]">{p.posts[0].category}</span>
                    <span className="text-xs font-body text-muted-foreground">{p.posts[0].date}</span>
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl text-charcoal group-hover:text-sage transition-colors">{p.posts[0].title}</h2>
                  <p className="font-body text-muted-foreground leading-relaxed">{p.posts[0].excerpt}</p>
                  <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.12em] text-sage">{p.readArticle}</span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {p.posts.slice(1).map((post, i) => (
              <AnimatedItem key={post.slug} delay={i * 0.08}>
                <Link to={`/blog/${post.slug}`} className="group block space-y-4">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-sand/20">
                    <img src="/placeholder.svg" alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-body font-semibold uppercase tracking-[0.1em]">{post.category}</span>
                      <span className="text-xs font-body text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg text-charcoal group-hover:text-sage transition-colors leading-snug">{post.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
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
