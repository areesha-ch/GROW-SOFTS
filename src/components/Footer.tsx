import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { companyInfo } from '@/data/products';
interface FooterProps { onLegalClick: (page: string) => void; }
const companyLinks = [{ label: 'Home', href: 'index.html' }, { label: 'Products', href: 'products.html' }, { label: 'Services', href: 'services.html' }, { label: 'About Us', href: 'about.html' }, { label: 'Contact Us', href: 'contact.html' }];
const productLinks = [{ label: 'Marketing', href: 'products.html' }, { label: 'Content Creation', href: 'products.html' }, { label: 'Education', href: 'products.html' }, { label: 'Development', href: 'products.html' }];
export function Footer({ onLegalClick }: FooterProps) {
  const legal = [{ label: 'Terms of Service', page: 'terms' }, { label: 'Privacy Policy', page: 'privacy' }, { label: 'Cookie Policy', page: 'cookies' }, { label: 'Refund Policy', page: 'refund' }];
  const socials = [{ icon: Facebook, href: '#', label: 'Facebook' }, { icon: Twitter, href: '#', label: 'Twitter' }, { icon: Instagram, href: '#', label: 'Instagram' }, { icon: Linkedin, href: '#', label: 'LinkedIn' }, { icon: Youtube, href: '#', label: 'YouTube' }];
  return <footer className="bg-gray-50 border-t border-gray-200"><div className="section-padding py-16"><div className="container-max">
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
      <div className="lg:col-span-2"><a href="index.html" className="flex items-center gap-3 mb-6"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center"><span className="text-white font-bold text-lg">GS</span></div><span className="font-bold text-xl text-gray-900">{companyInfo.name}</span></a><p className="text-gray-500 mb-6 max-w-sm text-sm"><p className="text-gray-400 text-sm mt-2">
      Grow Softs LLC is operated by ALLISON KALA MONDAY
    </p><br></br>Digital products and professional services designed to help creators, founders, teams, and growing businesses move forward with confidence.</p><div className="flex gap-2">{socials.map((s) => <a key={s.label} href={s.href} aria-label={s.label} className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-500 border border-gray-200"><s.icon className="w-4 h-4" /></a>)}</div></div>
      <div><h4 className="font-bold text-gray-900 mb-4">Products</h4><ul className="space-y-2.5">{productLinks.map(l => <li key={l.label}><a href={l.href} className="text-gray-500 hover:text-orange-500 text-sm">{l.label}</a></li>)}</ul></div>
      <div><h4 className="font-bold text-gray-900 mb-4">Company</h4><ul className="space-y-2.5">{companyLinks.map(l => <li key={l.label}><a href={l.href} className="text-gray-500 hover:text-orange-500 text-sm">{l.label}</a></li>)}</ul></div>
      <div><h4 className="font-bold text-gray-900 mb-4">Legal</h4><ul className="space-y-2.5">{legal.map(l => <li key={l.label}><button onClick={() => onLegalClick(l.page)} className="text-gray-500 hover:text-orange-500 text-sm">{l.label}</button></li>)}</ul></div>
    </div>
    <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"><p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p><div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400"><span>{companyInfo.address}</span><span>&middot;</span><span>{companyInfo.city}, {companyInfo.state} {companyInfo.zip}</span></div></div>
  </div></div></footer>;
}
