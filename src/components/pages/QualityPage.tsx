import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, ShieldCheck, Microscope } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { QualityStandards } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function QualityPage() {
  const [standards, setStandards] = useState<QualityStandards[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStandards();
  }, []);

  const loadStandards = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<QualityStandards>('qualitystandards');
      setStandards(result.items);
    } catch (error) {
      console.error('Failed to load quality standards:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const qualityPillars = [
    {
      icon: Leaf,
      title: 'Pure Ingredients',
      description: 'We source only the finest Grade A fruits and vegetables from trusted farms. No additives, no preservatives—just pure, natural goodness.',
    },
    {
      icon: Microscope,
      title: 'Rigorous Testing',
      description: 'Every batch undergoes comprehensive laboratory testing for purity, potency, and safety. We maintain the highest standards at every step.',
    },
    {
      icon: Award,
      title: 'Premium Processing',
      description: 'Our advanced dehydration technology preserves maximum nutritional value while ensuring optimal texture and flavor in every powder.',
    },
    {
      icon: ShieldCheck,
      title: 'Third-Party Certified',
      description: 'Independent certifications validate our commitment to quality, transparency, and excellence in every product we create.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-foreground text-primary-foreground py-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-[48rem] mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-5xl md:text-6xl mb-6"
            >
              Our Quality Promise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed"
            >
              Excellence is not just a goal—it's our standard. Every powder we create reflects our unwavering commitment to purity, potency, and your well-being.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="w-full py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {qualityPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-emerald-accent/20 flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-emerald-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="w-full bg-foreground/5 py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Our Standards in Detail
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-[48rem] mx-auto leading-relaxed">
              Transparency is at the heart of everything we do. Here's how we ensure excellence in every product.
            </p>
          </div>

          <div className="min-h-[400px]">
            {isLoading ? null : standards.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {standards.map((standard, index) => (
                  <motion.div
                    key={standard._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-background rounded-lg overflow-hidden border border-foreground/10"
                  >
                    {standard.standardImage && (
                      <div className="relative h-64">
                        <Image
                          src={standard.standardImage}
                          alt={standard.standardTitle || 'Quality standard'}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="font-heading text-2xl text-foreground mb-4">
                        {standard.standardTitle}
                      </h3>
                      {standard.shortSummary && (
                        <p className="font-paragraph text-base text-secondary mb-4">
                          {standard.shortSummary}
                        </p>
                      )}
                      {standard.description && (
                        <p className="font-paragraph text-base text-foreground/80 leading-relaxed mb-6">
                          {standard.description}
                        </p>
                      )}
                      {standard.learnMoreUrl && (
                        <a
                          href={standard.learnMoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-secondary font-paragraph text-sm hover:gap-3 transition-all"
                        >
                          Learn More
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground/60">
                  Quality standards information coming soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="w-full py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
                From Farm to Powder
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">1. Sourcing</h3>
                  <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                    We partner with certified organic farms that share our commitment to sustainable, ethical practices.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">2. Selection</h3>
                  <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                    Only Grade A produce makes it to our facility. Each batch is hand-inspected for quality.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">3. Processing</h3>
                  <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                    Our low-temperature dehydration preserves nutrients, flavor, and color naturally.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">4. Testing</h3>
                  <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                    Third-party laboratories verify purity, potency, and safety before packaging.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px]"
            >
              <Image
                src="https://static.wixstatic.com/media/59e798_81b9214519db4854951dbbfaf185d1ce~mv2.png?originWidth=960&originHeight=576"
                alt="Quality control process"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
