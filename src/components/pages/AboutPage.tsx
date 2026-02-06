import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Linkedin } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { TeamMembers } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [team, setTeam] = useState<TeamMembers[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<TeamMembers>('team');
      setTeam(result.items);
    } catch (error) {
      console.error('Failed to load team:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const values = [
    {
      icon: Heart,
      title: 'Purity First',
      description: 'We never compromise on ingredient quality. Every powder contains only what nature intended—no additives, no shortcuts.',
    },
    {
      icon: Target,
      title: 'Transparency Always',
      description: 'From sourcing to packaging, we believe you deserve to know exactly what goes into every product and how it\'s made.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Your wellness journey is our priority. We\'re here to support, educate, and inspire healthier living every day.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-8">
                Rooted in Nature, Driven by Purpose
              </h1>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed mb-6">
                Root & Fruit Co. was born from a simple belief: nature provides everything we need for optimal health. Our mission is to make the nutritional power of fruits and vegetables accessible, convenient, and pure.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                We're not just creating powders—we're preserving nature's wisdom in its most concentrated, convenient form. Every product reflects our commitment to quality, transparency, and your well-being.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px]"
            >
              <Image
                src="https://static.wixstatic.com/media/59e798_795abdcb00a140e8a3d5584e4cc8b057~mv2.png?originWidth=960&originHeight=576"
                alt="Root & Fruit Co. story"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full bg-foreground text-primary-foreground py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h2 className="font-heading text-3xl mb-6">Our Mission</h2>
              <p className="font-paragraph text-base text-primary-foreground/90 leading-relaxed">
                To deliver the purest, most nutrient-dense fruit and vegetable powders while maintaining complete transparency in our sourcing, processing, and quality standards. We exist to make wellness simple, accessible, and trustworthy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h2 className="font-heading text-3xl mb-6">Our Vision</h2>
              <p className="font-paragraph text-base text-primary-foreground/90 leading-relaxed">
                To become the most trusted name in premium dehydrated powders, setting new industry standards for quality and transparency. We envision a world where everyone has access to pure, powerful nutrition from nature's finest ingredients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-[48rem] mx-auto leading-relaxed">
              These principles guide every decision we make, from sourcing to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-accent/20 mb-6">
                  <value.icon className="w-10 h-10 text-emerald-accent" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-foreground/5 py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="font-paragraph text-lg text-foreground/80 max-w-[48rem] mx-auto leading-relaxed">
              Passionate experts dedicated to bringing you the finest natural products.
            </p>
          </div>

          <div className="min-h-[400px]">
            {isLoading ? null : team.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {team.map((member, index) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-background rounded-lg overflow-hidden border border-foreground/10"
                  >
                    {member.photo && (
                      <div className="relative h-80">
                        <Image
                          src={member.photo}
                          alt={member.name || 'Team member'}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-heading text-xl text-foreground mb-2">
                        {member.name}
                      </h3>
                      {member.jobTitle && (
                        <p className="font-paragraph text-sm text-secondary mb-4">
                          {member.jobTitle}
                        </p>
                      )}
                      {member.bio && (
                        <p className="font-paragraph text-sm text-foreground/80 leading-relaxed mb-4">
                          {member.bio}
                        </p>
                      )}
                      {member.linkedInProfile && (
                        <a
                          href={member.linkedInProfile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-secondary font-paragraph text-sm hover:gap-3 transition-all"
                        >
                          <Linkedin className="w-4 h-4" />
                          Connect on LinkedIn
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground/60">
                  Team information coming soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-32">
        <div className="max-w-[56rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-left">
              <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                Root & Fruit Co. began with a simple observation: despite the abundance of wellness products on the market, few truly delivered on their promises of purity and quality. We saw an opportunity to do better—to create products that honored both nature and the people who trust us.
              </p>
              <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                Our founders spent years researching dehydration techniques, building relationships with organic farms, and developing rigorous quality standards. The result is a line of powders that preserve the full nutritional profile of fresh produce while offering unmatched convenience.
              </p>
              <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                Today, we're proud to serve thousands of health-conscious individuals who demand transparency, quality, and results. Every powder we create reflects our founding vision: to make nature's best nutrition accessible to everyone, without compromise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
