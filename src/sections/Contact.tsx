import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { companyInfo } from '@/data/products';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-info', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
      gsap.fromTo('.contact-form', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitted(true); setTimeout(() => { setIsSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }, 3000); };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { icon: Phone, label: 'Phone', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
    { icon: MapPin, label: 'Address', value: `${companyInfo.address}, ${companyInfo.city}, ${companyInfo.state} ${companyInfo.zip}`, href: '#' },
    { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM (EST)', href: '#' },
  ];

  return (
    <>
      <section className="pt-40 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-br from-white via-orange-50/50 to-white">
        <div className="section-padding"><div className="container-max text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-5">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">Let's <span className="text-orange-500">talk.</span></h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Have a question about a product, service, order, or project? Send us a message and our team will get back to you.</p>
        </div></div>
      </section>
      <section id="contact" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-white via-orange-50/30 to-white">
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get in <span className="text-orange-500">Touch</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Have a question or need assistance? We are here to help. Reach out to us and we will respond as soon as possible.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="contact-info">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-300 transition-colors shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0"><item.icon className="w-6 h-6 text-orange-500" /></div>
                    <div><p className="text-sm text-gray-400">{item.label}</p><p className="font-medium text-gray-900">{item.value}</p></div>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-form">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-8 h-8 text-green-500" /></div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-500">Thank you for contacting us. We will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div><label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label><Input type="text" placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-11 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500" /></div>
                      <div><label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label><Input type="email" placeholder="john@example.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-11 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500" /></div>
                    </div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-2">Subject</label><Input type="text" placeholder="How can we help?" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="h-11 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-2">Message</label><Textarea placeholder="Tell us more about your inquiry..." required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500 resize-none" /></div>
                    <Button type="submit" className="w-full btn-primary bg-orange-500 hover:bg-orange-600 h-11"><Send className="w-4 h-4 mr-2" /> Send Message</Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
