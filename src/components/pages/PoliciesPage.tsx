import { motion } from 'framer-motion';
import { Shield, FileText, Truck, RefreshCw } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PoliciesPage() {
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
              Policies & Information
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed"
            >
              Transparency is at the core of our business. Review our policies to understand how we protect and serve you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full py-20 border-b border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="#privacy"
              className="flex flex-col items-center text-center p-6 rounded-lg border border-foreground/10 hover:border-secondary transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-accent/20 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-emerald-accent" />
              </div>
              <h3 className="font-heading text-lg text-foreground">Privacy Policy</h3>
            </a>

            <a
              href="#terms"
              className="flex flex-col items-center text-center p-6 rounded-lg border border-foreground/10 hover:border-secondary transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-accent/20 flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-emerald-accent" />
              </div>
              <h3 className="font-heading text-lg text-foreground">Terms of Service</h3>
            </a>

            <a
              href="#shipping"
              className="flex flex-col items-center text-center p-6 rounded-lg border border-foreground/10 hover:border-secondary transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-accent/20 flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-emerald-accent" />
              </div>
              <h3 className="font-heading text-lg text-foreground">Shipping Policy</h3>
            </a>

            <a
              href="#returns"
              className="flex flex-col items-center text-center p-6 rounded-lg border border-foreground/10 hover:border-secondary transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-accent/20 flex items-center justify-center mb-4">
                <RefreshCw className="w-8 h-8 text-emerald-accent" />
              </div>
              <h3 className="font-heading text-lg text-foreground">Return Policy</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="w-full py-32 scroll-mt-20">
        <div className="max-w-[56rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-foreground mb-8">Privacy Policy</h2>
            <div className="space-y-6 font-paragraph text-base text-foreground/80 leading-relaxed">
              <p>
                <strong>Last Updated:</strong> January 2026
              </p>
              <p>
                At Root & Fruit Co., we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or purchase our products.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, shipping address, and payment information (processed securely through Amazon).
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">How We Use Your Information</h3>
              <p>
                We use your information to process orders, send you updates about your purchases, provide customer support, and send marketing communications (with your consent). We never sell your personal information to third parties.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your personal information. All payment processing is handled securely through Amazon's payment systems.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Your Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal information at any time. Contact us at privacy@rootandfruit.com to exercise these rights.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms of Service */}
      <section id="terms" className="w-full bg-foreground/5 py-32 scroll-mt-20">
        <div className="max-w-[56rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-foreground mb-8">Terms of Service</h2>
            <div className="space-y-6 font-paragraph text-base text-foreground/80 leading-relaxed">
              <p>
                <strong>Last Updated:</strong> January 2026
              </p>
              <p>
                By accessing and using the Root & Fruit Co. website, you agree to be bound by these Terms of Service. Please read them carefully.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Product Information</h3>
              <p>
                We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions, images, or other content are accurate, complete, or error-free.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Purchases Through Amazon</h3>
              <p>
                All product purchases are processed through Amazon. By clicking "Buy on Amazon," you will be redirected to Amazon's platform, where their terms and conditions apply.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Intellectual Property</h3>
              <p>
                All content on this website, including text, images, logos, and designs, is the property of Root & Fruit Co. and protected by copyright laws.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Limitation of Liability</h3>
              <p>
                Root & Fruit Co. shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shipping Policy */}
      <section id="shipping" className="w-full py-32 scroll-mt-20">
        <div className="max-w-[56rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-foreground mb-8">Shipping Policy</h2>
            <div className="space-y-6 font-paragraph text-base text-foreground/80 leading-relaxed">
              <p>
                All Root & Fruit Co. products are fulfilled through Amazon, ensuring fast and reliable delivery to your door.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Shipping Methods</h3>
              <p>
                Shipping options and delivery times are determined by Amazon based on your location and selected shipping method at checkout. Amazon Prime members may be eligible for free two-day shipping.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Processing Time</h3>
              <p>
                Orders are typically processed within 1-2 business days. You will receive tracking information via email once your order ships.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">International Shipping</h3>
              <p>
                International shipping availability varies by product and destination. Please check Amazon for specific international shipping options.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Shipping Costs</h3>
              <p>
                Shipping costs are calculated at checkout based on your location and selected shipping method. Amazon Prime members may qualify for free shipping.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Return Policy */}
      <section id="returns" className="w-full bg-foreground/5 py-32 scroll-mt-20">
        <div className="max-w-[56rem] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-foreground mb-8">Return Policy</h2>
            <div className="space-y-6 font-paragraph text-base text-foreground/80 leading-relaxed">
              <p>
                Your satisfaction is our priority. All returns are processed through Amazon's return system, which offers a hassle-free return experience.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Return Window</h3>
              <p>
                Most items can be returned within 30 days of delivery. Please refer to Amazon's return policy for specific details on your purchase.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Return Process</h3>
              <p>
                To initiate a return, log into your Amazon account, navigate to your orders, and select the item you wish to return. Follow the prompts to print a return label and ship the item back.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Refunds</h3>
              <p>
                Refunds are processed by Amazon once the returned item is received and inspected. Please allow 5-7 business days for the refund to appear in your account.
              </p>
              <h3 className="font-heading text-xl text-foreground mt-8 mb-4">Quality Guarantee</h3>
              <p>
                If you receive a damaged or defective product, please contact us immediately at support@rootandfruit.com. We stand behind the quality of our products and will work with you to resolve any issues.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20">
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <h2 className="font-heading text-3xl text-foreground mb-4">
              Questions About Our Policies?
            </h2>
            <p className="font-paragraph text-base text-foreground/80 mb-8">
              Our team is here to help clarify any policy questions you may have.
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
