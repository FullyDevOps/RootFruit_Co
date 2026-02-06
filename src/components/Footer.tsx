import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="font-heading text-xl text-secondary-foreground">R&F</span>
              </div>
              <span className="font-heading text-xl text-primary-foreground">
                Root & Fruit Co.
              </span>
            </div>
            <p className="font-paragraph text-sm text-primary-foreground/80 leading-relaxed">
              Premium Grade A dehydrated fruit and vegetable powders. Nature's essence, perfected.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-primary-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/store"
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Shop Products
                </Link>
              </li>
              <li>
                <Link
                  to="/recipes"
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/quality"
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Quality Standards
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading text-lg text-primary-foreground mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/faqs"
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/policies#privacy"
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/policies#terms"
                  className="font-paragraph text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg text-primary-foreground mb-6">Stay Connected</h3>
            <p className="font-paragraph text-sm text-primary-foreground/80 mb-4 leading-relaxed">
              Subscribe for recipes and wellness tips.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.target as HTMLFormElement).email.value;
                alert(`Thank you for subscribing with ${email}!`);
                (e.target as HTMLFormElement).reset();
              }}
              className="mb-6"
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2.5 rounded-lg font-paragraph text-sm text-foreground bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Root & Fruit Co. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/policies#shipping"
                className="font-paragraph text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Shipping
              </Link>
              <Link
                to="/policies#returns"
                className="font-paragraph text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
              >
                Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
