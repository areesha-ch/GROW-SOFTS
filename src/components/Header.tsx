import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { companyInfo } from '@/data/products';

interface HeaderProps { onCartClick: () => void; }
const navItems = [
  { label: 'Home', href: 'index.html' },
  { label: 'Products', href: 'products.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'About Us', href: 'about.html' },
  { label: 'Contact Us', href: 'contact.html' },
];

export function Header({ onCartClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = useCartStore((state) => state.getCartCount());
  useEffect(() => { const fn = () => setIsScrolled(window.scrollY > 50); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);
  const goTo = (href: string) => { window.location.href = href; setIsMobileMenuOpen(false); };

  return <header className="fixed top-0 left-0 right-0 z-50">
    <div className="bg-orange-600 py-1.5"><div className="section-padding"><div className="container-max flex items-center justify-between text-xs text-white/90">
      <div className="flex items-center gap-4">
        <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 hover:text-white"><Phone className="w-3 h-3" /><span>{companyInfo.phone}</span></a>
        <a href={`mailto:${companyInfo.email}`} className="hidden sm:flex items-center gap-1.5 hover:text-white"><Mail className="w-3 h-3" /><span>{companyInfo.email}</span></a>
      </div><span className="hidden sm:inline">Digital Products & Services</span>
    </div></div></div>
    <div className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}><div className="section-padding"><div className="container-max">
      <div className="flex items-center justify-between h-16">
        <a href="index.html" className="flex items-center gap-2"><div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-sm">GS</span></div><span className="font-bold text-lg text-gray-900 tracking-tight">{companyInfo.name}</span></a>
        <nav className="hidden lg:flex items-center gap-6">{navItems.map((item) => <a key={item.label} href={item.href} className="text-gray-600 hover:text-orange-500 text-sm font-medium">{item.label}</a>)}</nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-orange-500 hover:bg-orange-50" onClick={onCartClick} aria-label="Open cart"><ShoppingCart className="w-5 h-5" />{cartCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold">{cartCount}</span>}</Button>
          <Button variant="ghost" size="icon" className="lg:hidden text-gray-600 hover:text-orange-500 hover:bg-orange-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">{isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</Button>
        </div>
      </div>
    </div></div></div>
    {isMobileMenuOpen && <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg"><div className="section-padding py-3"><nav className="flex flex-col gap-1">{navItems.map((item) => <button key={item.label} onClick={() => goTo(item.href)} className="text-left text-gray-600 hover:text-orange-500 font-medium py-2 px-3 rounded-lg hover:bg-orange-50">{item.label}</button>)}</nav></div></div>}
  </header>;
}
