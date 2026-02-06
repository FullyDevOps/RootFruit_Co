// HPI 1.7-G
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
  Award,
  ShieldCheck,
  Sun,
  Droplets,
  Heart,
  Check,
  Star,
  ShoppingBag,
  ArrowDown
} from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Canonical Data Sources ---
// Defined locally to ensure unbreakable data fidelity and zero external dependencies for this view.

const PRODUCTS = [
  {
    id: 'p1',
    name: 'Beetroot Powder',
    description: 'Nitric oxide boost for stamina and blood flow.',
    price: '$24.99',
    amazonLink: 'https://amazon.com',
    tags: ['Circulation', 'Stamina']
  },
  {
    id: 'p2',
    name: 'Spinach Powder',
    description: 'Nutrient-dense greens for daily vitality.',
    price: '$22.50',
    amazonLink: 'https://amazon.com',
    tags: ['Greens', 'Iron']
  },
  {
    id: 'p3',
    name: 'Turmeric & Ginger',
    description: 'Anti-inflammatory blend for joint health.',
    price: '$26.00',
    amazonLink: 'https://amazon.com',
    tags: ['Recovery', 'Immunity']
  },
  {
    id: 'p4',
    name: 'Blueberry Powder',
    description: 'Antioxidant powerhouse for brain health.',
    price: '$29.99',
    amazonLink: 'https://amazon.com',
    tags: ['Brain', 'Antioxidants']
  }
];

const QUALITY_STEPS = [
  {
    id: 'q1',
    title: 'Sourced with Integrity',
    description: 'We partner exclusively with certified organic farms that prioritize soil health and sustainable practices. Every root and fruit is hand-selected at peak ripeness.',
    icon: Leaf
  },
  {
    id: 'q2',
    title: 'Gentle Dehydration',
    description: 'Our proprietary low-temperature drying process preserves 98% of the raw nutritional profile, locking in enzymes, vitamins, and the vibrant natural color.',
    icon: Sun
  },
  {
    id: 'q3',
    title: 'Rigorous Testing',
    description: 'Every batch undergoes triple-stage testing for purity, potency, and safety. We guarantee zero additives, fillers, or heavy metals.',
    icon: ShieldCheck
  }
];

const RECIPES = [
  {
    id: 'r1',
    title: 'Morning Glow Smoothie',
    category: 'Breakfast',
    time: '5 min',
    imageAlt: 'Vibrant red smoothie bowl with fresh fruits'
  },
  {
    id: 'r2',
    title: 'Green Energy Elixir',
    category: 'Beverage',
    time: '2 min',
    imageAlt: 'Green juice in a glass with mint leaves'
  },
  {
    id: 'r3',
    title: 'Golden Milk Latte',
    category: 'Warm Drink',
    time: '10 min',
    imageAlt: 'Warm yellow latte in a ceramic mug'
  }
];

// --- Components ---

const SectionHeader = ({ title, subtitle, align = 'center', light = false }: { title: string, subtitle?: string, align?: 'left' | 'center' | 'right', light?: boolean }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`font-heading text-4xl md:text-5xl lg:text-6xl mb-6 ${light ? 'text-primary-foreground' : 'text-foreground'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className={`font-paragraph text-lg md:text-xl max-w-2xl ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''} ${light ? 'text-primary-foreground/80' : 'text-foreground/70'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ParallaxImage = ({ src, alt, className, speed = 0.5 }: { src: string, alt: string, className?: string, speed?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        <Image
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default function HomePage() {
  // Scroll progress for global indicators or effects
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-clip selection:bg-secondary selection:text-white">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50 origin-left"
        style={{ scaleX }}
      />

      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Parallax */}
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://static.wixstatic.com/media/59e798_895c9d3d4c374212ac45ce508d2e4123~mv2.png?originWidth=1600&originHeight=896"
            alt="Artistic arrangement of fruit powders"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-foreground/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 border border-foreground/30 rounded-full text-sm font-paragraph tracking-wider uppercase mb-4 bg-background/50 backdrop-blur-sm">
              Premium Dehydrated Superfoods
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] tracking-tight mb-8"
          >
            Nature's Essence,<br />
            <span className="italic text-secondary">Perfected.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-paragraph text-lg md:text-xl text-foreground/80 max-w-2xl mb-12 leading-relaxed"
          >
            Experience the purest form of nutrition. Grade A fruit and vegetable powders, sourced with integrity and crafted for your wellness journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              to="/products"
              className="group relative px-8 py-4 bg-foreground text-background font-paragraph text-base rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/about"
              className="group px-8 py-4 bg-transparent border border-foreground text-foreground font-paragraph text-base rounded-full hover:bg-foreground/5 transition-all"
            >
              Our Philosophy
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60"
        >
          <span className="text-xs font-paragraph uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* --- MANIFESTO SECTION (Sticky/Parallax) --- */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-6xl leading-tight mb-8">
                Rooted in the belief that <span className="text-emerald-accent italic">purity</span> is the ultimate luxury.
              </h2>
              <div className="space-y-6 font-paragraph text-lg text-foreground/80 leading-relaxed">
                <p>
                  In a world of synthetics, we return to the source. Root & Fruit Co. was born from a simple yet profound realization: nature has already done the hard work.
                </p>
                <p>
                  Our role is not to invent, but to preserve. Through advanced, gentle dehydration, we capture the vibrant soul of the harvest—the color, the flavor, and the vital nutrients—delivering it to you in its most potent, versatile form.
                </p>
              </div>
              <div className="mt-12 pt-8 border-t border-foreground/10">
                <div className="flex gap-12">
                  <div>
                    <span className="block font-heading text-3xl text-secondary mb-1">100%</span>
                    <span className="text-sm text-foreground/60 uppercase tracking-wider">Single Ingredient</span>
                  </div>
                  <div>
                    <span className="block font-heading text-3xl text-secondary mb-1">0g</span>
                    <span className="text-sm text-foreground/60 uppercase tracking-wider">Added Sugar</span>
                  </div>
                  <div>
                    <span className="block font-heading text-3xl text-secondary mb-1">A+</span>
                    <span className="text-sm text-foreground/60 uppercase tracking-wider">Grade Quality</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[600px] lg:h-[800px] w-full">
            <div className="absolute inset-0 bg-secondary/10 rounded-t-[10rem] rounded-b-none transform rotate-3 scale-95 z-0" />
            <div className="absolute inset-0 rounded-t-[10rem] overflow-hidden z-10">
              <ParallaxImage
                src="https://static.wixstatic.com/media/59e798_33f3630d50a644fab179e25a7925995a~mv2.png?originWidth=1152&originHeight=768"
                alt="Close up of powder texture"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE (Horizontal Scroll) --- */}
      <section className="py-32 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4">The Collection</h2>
            <p className="font-paragraph text-primary-foreground/70">Pure, potent powders for every need.</p>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-2 text-secondary hover:text-white transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="w-full overflow-x-auto pb-12 hide-scrollbar pl-6 md:pl-[max(2rem,calc((100vw-120rem)/2))]">
          <div className="flex gap-8 w-max pr-12">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative w-[300px] md:w-[400px] flex-shrink-0"
              >
                <div className="aspect-[4/5] bg-background/5 rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src="https://static.wixstatic.com/media/59e798_3ea95159331344359d5266df8b085318~mv2.png?originWidth=384&originHeight=448"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-heading text-2xl text-primary-foreground mb-2 group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>
                <p className="font-paragraph text-primary-foreground/60 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-paragraph text-lg text-primary-foreground">{product.price}</span>
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-secondary text-foreground rounded-full text-sm font-medium hover:bg-white transition-colors"
                  >
                    Buy on Amazon <ShoppingBag className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* "View All" Card */}
            <div className="w-[200px] flex items-center justify-center">
              <Link to="/products" className="group flex flex-col items-center gap-4 text-primary-foreground/50 hover:text-secondary transition-colors">
                <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <span className="font-heading text-xl">View All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUALITY PROCESS (Vertical Sticky) --- */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader
            title="From Soil to Spoon"
            subtitle="Our commitment to quality is not just a promise; it's a rigorous, transparent process."
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Sticky Image Side */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32 h-[60vh] w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/59e798_77ab65c05eae46379f4e5114bc4d24c3~mv2.png?originWidth=768&originHeight=576"
                  alt="Quality control process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-accent/10 mix-blend-multiply" />
              </div>
            </div>

            {/* Scrolling Content Side */}
            <div className="lg:col-span-7 flex flex-col gap-24 py-12">
              {QUALITY_STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                      <step.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="font-heading text-6xl text-foreground/5 font-bold -mt-4 select-none">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl text-foreground mb-4 group-hover:text-emerald-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}

              <div className="pt-12">
                <Link
                  to="/quality"
                  className="inline-flex items-center gap-3 text-lg font-paragraph text-emerald-accent hover:text-emerald-accent/80 transition-colors border-b border-emerald-accent/30 pb-1"
                >
                  Learn more about our certifications <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RECIPES & LIFESTYLE (Masonry-style Grid) --- */}
      <section className="py-32 bg-[#F0EFE6]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl mb-4">Nourish Your Body</h2>
              <p className="font-paragraph text-foreground/70 max-w-md">
                Simple, delicious ways to integrate superfoods into your daily ritual.
              </p>
            </div>
            <Link to="/recipes" className="hidden md:inline-flex px-6 py-3 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-all mt-6 md:mt-0">
              View All Recipes
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 relative group overflow-hidden rounded-2xl aspect-[16/9] md:aspect-auto md:h-[500px]"
            >
              <Link to="/recipes" className="block w-full h-full">
                <Image
                  src="https://static.wixstatic.com/media/59e798_fab6d0a50613448c9812fa7ab8258049~mv2.png?originWidth=896&originHeight=448"
                  alt="Lifestyle cooking scene"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                  <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-wider mb-3 rounded-sm">
                    Featured Guide
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl text-white mb-2">
                    The Ultimate Guide to Powder Blends
                  </h3>
                  <p className="text-white/80 font-paragraph max-w-lg">
                    Discover how to mix and match ingredients for targeted health benefits.
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Recipe Cards */}
            {RECIPES.map((recipe, idx) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <Link to="/recipes" className="block h-full flex flex-col">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="https://static.wixstatic.com/media/59e798_a9f865750b2d41a99858efe085ee958a~mv2.png?originWidth=896&originHeight=448"
                      alt={recipe.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-foreground">
                      {recipe.time}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{recipe.category}</span>
                    <h3 className="font-heading text-xl text-foreground mb-2 group-hover:text-emerald-accent transition-colors">
                      {recipe.title}
                    </h3>
                    <div className="mt-auto pt-4 flex items-center text-sm font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                      View Recipe <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/recipes" className="inline-flex px-8 py-4 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition-all">
              View All Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* --- TRUST & CERTIFICATIONS --- */}
      <section className="py-24 border-t border-foreground/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="font-paragraph text-foreground/50 uppercase tracking-widest text-sm mb-12">
            Trusted by Wellness Enthusiasts & Certified by Experts
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos using text/icons for now as no specific logo assets provided */}
            {['USDA Organic', 'Non-GMO Project', 'Gluten-Free', 'Vegan Certified', 'GMP Quality'].map((cert, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
                <div className="w-16 h-16 border-2 border-foreground/20 rounded-full flex items-center justify-center group-hover:border-emerald-accent group-hover:text-emerald-accent transition-colors">
                  <Award className="w-8 h-8" />
                </div>
                <span className="font-heading text-sm font-bold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER (Full Bleed) --- */}
      <section className="relative py-32 bg-emerald-accent text-primary-foreground overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Leaf className="w-12 h-12 mx-auto mb-8 text-secondary" />
            <h2 className="font-heading text-4xl md:text-6xl mb-6">
              Join the Root & Fruit Community
            </h2>
            <p className="font-paragraph text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              Receive exclusive wellness tips, seasonal recipes, and early access to new harvests.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-secondary backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-secondary text-foreground font-bold rounded-full hover:bg-white transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-6 text-xs text-primary-foreground/50">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
