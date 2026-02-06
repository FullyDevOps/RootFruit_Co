import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed"
            >
              Have questions about our products or quality standards? We're here to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full py-32">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl text-foreground mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-paragraph text-sm text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3.5 rounded-lg border border-foreground/20 font-paragraph text-base text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-paragraph text-sm text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3.5 rounded-lg border border-foreground/20 font-paragraph text-base text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-paragraph text-sm text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-3.5 rounded-lg border border-foreground/20 font-paragraph text-base text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="quality-question">Quality Question</option>
                    <option value="wholesale">Wholesale Opportunities</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-paragraph text-sm text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-3.5 rounded-lg border border-foreground/20 font-paragraph text-base text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-secondary text-secondary-foreground font-paragraph text-base rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-accent/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-2">Email Us</h3>
                    <a
                      href="mailto:hello@rootandfruit.com"
                      className="font-paragraph text-base text-secondary hover:text-secondary/80 transition-colors"
                    >
                      hello@rootandfruit.com
                    </a>
                    <p className="font-paragraph text-sm text-foreground/60 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-accent/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-2">Call Us</h3>
                    <a
                      href="tel:+18005551234"
                      className="font-paragraph text-base text-secondary hover:text-secondary/80 transition-colors"
                    >
                      1-800-555-1234
                    </a>
                    <p className="font-paragraph text-sm text-foreground/60 mt-1">
                      Monday - Friday, 9am - 5pm EST
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-accent/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-2">Visit Us</h3>
                    <p className="font-paragraph text-base text-foreground/80">
                      123 Wellness Way<br />
                      Portland, OR 97201<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-accent/10 rounded-lg p-8">
                <h3 className="font-heading text-xl text-foreground mb-4">
                  Business Inquiries
                </h3>
                <p className="font-paragraph text-base text-foreground/80 leading-relaxed mb-4">
                  Interested in wholesale pricing, partnerships, or bulk orders? We'd love to hear from you.
                </p>
                <a
                  href="mailto:business@rootandfruit.com"
                  className="inline-flex items-center gap-2 text-secondary font-paragraph text-base hover:gap-3 transition-all"
                >
                  business@rootandfruit.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="w-full bg-foreground/5 py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-foreground mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="font-paragraph text-base text-foreground/80 mb-8">
              Check out our frequently asked questions for instant help.
            </p>
            <a
              href="/faqs"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-secondary text-foreground font-paragraph text-base rounded-lg hover:bg-secondary/10 transition-colors"
            >
              Visit FAQs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
