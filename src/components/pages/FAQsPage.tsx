import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { FrequentlyAskedQuestions } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<FrequentlyAskedQuestions[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  useEffect(() => {
    loadFaqs();
  }, []);

  const loadFaqs = async () => {
    try {
      setIsLoading(true);
      const result = await BaseCrudService.getAll<FrequentlyAskedQuestions>('faqs');
      const sortedFaqs = result.items.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return (a.sortOrder || 0) - (b.sortOrder || 0);
      });
      setFaqs(sortedFaqs);
    } catch (error) {
      console.error('Failed to load FAQs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category).filter(Boolean)))];

  const filteredFaqs = selectedCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-emerald-accent py-24">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-[48rem] mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-5xl md:text-6xl text-primary-foreground mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed"
            >
              Find answers to common questions about our products, quality standards, and ordering process.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 1 && (
        <section className="w-full border-b border-foreground/10">
          <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20 py-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-lg font-paragraph text-sm transition-colors capitalize ${
                    selectedCategory === category
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-background border border-foreground/20 text-foreground hover:border-secondary'
                  }`}
                >
                  {category === 'all' ? 'All Questions' : category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs List */}
      <section className="w-full py-32">
        <div className="max-w-[56rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="min-h-[600px]">
            {isLoading ? null : filteredFaqs.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="border border-foreground/10 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq._id)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-foreground/5 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-foreground">
                          {faq.question}
                        </h3>
                        {faq.isFeatured && (
                          <span className="inline-block mt-2 px-3 py-1 bg-secondary/20 text-secondary font-paragraph text-xs rounded">
                            Popular
                          </span>
                        )}
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-foreground/60 flex-shrink-0 transition-transform ${
                          openFaqId === faq._id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaqId === faq._id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="font-paragraph text-base text-foreground/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-foreground/60">
                  No questions found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-foreground text-primary-foreground py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <h2 className="font-heading text-3xl mb-4">
              Still Have Questions?
            </h2>
            <p className="font-paragraph text-base text-primary-foreground/90 mb-8">
              Our team is here to help. Reach out and we'll get back to you promptly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-paragraph text-base rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
