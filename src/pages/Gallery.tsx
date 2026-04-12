import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection, { AnimatedItem } from "@/components/AnimatedSection";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const galleryItems = [
  { id: 1, src: "/placeholder.svg", alt: "Bodyweight training session", categoryIndex: 1 },
  { id: 2, src: "/placeholder.svg", alt: "Group training outdoors", categoryIndex: 3 },
  { id: 3, src: "/placeholder.svg", alt: "SPARTI women's session", categoryIndex: 2 },
  { id: 4, src: "/placeholder.svg", alt: "Personal training moment", categoryIndex: 1 },
  { id: 5, src: "/placeholder.svg", alt: "Community workout", categoryIndex: 4 },
  { id: 6, src: "/placeholder.svg", alt: "Movement practice", categoryIndex: 3 },
  { id: 7, src: "/placeholder.svg", alt: "SPARTI group energy", categoryIndex: 2 },
  { id: 8, src: "/placeholder.svg", alt: "Strength fundamentals", categoryIndex: 1 },
  { id: 9, src: "/placeholder.svg", alt: "Outdoor session", categoryIndex: 4 },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  const p = t.pages.gallery;

  const filtered = activeIndex === 0 ? galleryItems : galleryItems.filter((i) => i.categoryIndex === activeIndex);

  return (
    <Layout>
      <PageHero title={p.title} subtitle={p.subtitle} />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {p.categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveIndex(i)}
                  className={`px-5 py-2 rounded-full font-body text-xs font-semibold uppercase tracking-[0.12em] transition-all ${
                    activeIndex === i ? "bg-charcoal text-primary-foreground" : "bg-sand/30 text-charcoal/60 hover:bg-sand/50 hover:text-charcoal"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <AnimatedItem key={item.id} delay={i * 0.06}>
                <div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-sand/20">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-end">
                    <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs font-body font-semibold uppercase tracking-[0.12em] text-primary-foreground/80">{p.categories[item.categoryIndex]}</span>
                      <p className="text-sm font-body text-primary-foreground mt-1">{item.alt}</p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
