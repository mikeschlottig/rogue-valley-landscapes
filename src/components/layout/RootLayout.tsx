import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';
export function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-brand-forest">RVL</span>
            <span className="hidden sm:inline-block font-display font-bold text-brand-forest">Rogue Valley Landscapes</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-sand",
                  location.pathname === link.href ? "text-brand-forest font-bold underline decoration-brand-sand underline-offset-4" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-brand-forest hover:bg-brand-sage text-white rounded-full px-6">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle className="static" />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium p-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-brand-forest text-brand-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold">Rogue Valley Landscapes</h3>
              <p className="text-brand-cream/70 max-w-xs">
                Premium landscaping and artistic garden design in Grants Pass, Oregon.
              </p>
              <div className="flex gap-4">
                <Instagram className="w-5 h-5 hover:text-brand-sand cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 hover:text-brand-sand cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-2 text-brand-cream/70">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link to={link.href} className="hover:text-brand-sand transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
              <p className="text-brand-cream/70">Grants Pass, OR 97526</p>
              <p className="text-brand-cream/70">hello@roguevalleylandscapes.com</p>
              <p className="text-brand-cream/70">(541) 555-0123</p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-brand-cream/40 text-sm">
            © {new Date().getFullYear()} Rogue Valley Landscapes. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}