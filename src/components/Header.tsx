import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ExternalLink } from 'lucide-react';
import { MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/store' },
    { label: 'Recipes', path: '/recipes' },
    { label: 'Quality', path: '/quality' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'About', path: '/about' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/10">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-accent rounded-full flex items-center justify-center">
              <span className="font-heading text-xl text-primary-foreground">R&F</span>
            </div>
            <span className="font-heading text-2xl text-foreground hidden sm:block">
              Root & Fruit Co.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-secondary'
                    : 'text-foreground hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-foreground hover:text-secondary transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <MiniCart cartIconClassName="p-2" />

            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground font-paragraph text-sm rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Buy on Amazon
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-secondary transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-foreground/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const query = (e.target as HTMLFormElement).search.value;
                if (query.trim()) {
                  window.location.href = `/store?search=${encodeURIComponent(query)}`;
                }
              }}
              className="max-w-2xl mx-auto"
            >
              <input
                type="search"
                name="search"
                placeholder="Search products..."
                autoFocus
                className="w-full px-6 py-3 rounded-lg border border-foreground/20 font-paragraph text-base text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-foreground/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-base py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-secondary'
                      : 'text-foreground hover:text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-paragraph text-base rounded-lg hover:bg-secondary/90 transition-colors mt-4"
              >
                Buy on Amazon
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
