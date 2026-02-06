import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Certifications } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<Certifications[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCertifications();
  }, []);

  const loadCertifications = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<Certifications>('certifications');
      setCertifications(result.items);
    } catch (error) {
      console.error('Failed to load certifications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-emerald-accent py-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-[48rem] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/20 mb-8"
            >
              <ShieldCheck className="w-10 h-10 text-primary-foreground" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl text-primary-foreground mb-6"
            >
              Our Certifications
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed"
            >
              Third-party validated excellence. Every certification represents our commitment to transparency, quality, and your trust.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="w-full py-20 border-b border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-[56rem] mx-auto text-center">
            <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
              We believe in complete transparency. That's why we submit our products to independent third-party organizations for rigorous testing and certification. These validations ensure that what we promise is what you receive—pure, premium, and trustworthy.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="w-full py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="min-h-[600px]">
            {isLoading ? null : certifications.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-background rounded-lg border border-foreground/10 overflow-hidden hover:border-secondary transition-colors"
                  >
                    {cert.logoImage && (
                      <div className="relative h-48 bg-foreground/5 flex items-center justify-center p-8">
                        <Image
                          src={cert.logoImage}
                          alt={cert.certificationName || 'Certification logo'}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="font-heading text-2xl text-foreground mb-4">
                        {cert.certificationName}
                      </h3>
                      {cert.description && (
                        <p className="font-paragraph text-base text-foreground/80 leading-relaxed mb-4">
                          {cert.description}
                        </p>
                      )}
                      {cert.validationDetails && (
                        <div className="bg-emerald-accent/10 rounded-lg p-4 mb-6">
                          <p className="font-paragraph text-sm text-foreground/80 leading-relaxed">
                            {cert.validationDetails}
                          </p>
                        </div>
                      )}
                      {cert.certificationUrl && (
                        <a
                          href={cert.certificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-secondary font-paragraph text-sm hover:gap-3 transition-all"
                        >
                          Verify Certification
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground/60">
                  Certification information coming soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="w-full bg-foreground text-primary-foreground py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-[56rem] mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl text-center mb-16">
              Why Certifications Matter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-heading text-xl mb-3">Independent Verification</h3>
                <p className="font-paragraph text-base text-primary-foreground/80 leading-relaxed">
                  Third-party organizations provide unbiased validation of our quality claims, ensuring you can trust what's on the label.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-heading text-xl mb-3">Rigorous Standards</h3>
                <p className="font-paragraph text-base text-primary-foreground/80 leading-relaxed">
                  Each certification requires meeting strict criteria for purity, safety, and ethical practices throughout our supply chain.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-heading text-xl mb-3">Continuous Monitoring</h3>
                <p className="font-paragraph text-base text-primary-foreground/80 leading-relaxed">
                  Certifications aren't one-time achievements. We undergo regular audits to maintain our standards year after year.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-heading text-xl mb-3">Your Peace of Mind</h3>
                <p className="font-paragraph text-base text-primary-foreground/80 leading-relaxed">
                  When you choose Root & Fruit Co., you're choosing products backed by the highest industry standards.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
