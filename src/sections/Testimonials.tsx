import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonials-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
      gsap.fromTo('.testimonial-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.testimonials-grid', start: 'top 85%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-white via-orange-50/30 to-white">
      <div className="section-padding">
        <div className="container-max">
          <div className="testimonials-header text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Customer <span className="text-orange-500">Stories</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Do not just take our word for it. Here is what our customers have to say about our digital products.</p>
          </div>
          <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card bg-white rounded-xl p-6 border border-gray-200 relative hover:border-orange-300 transition-colors shadow-sm">
                <div className="absolute top-4 right-4 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"><Quote className="w-4 h-4 text-orange-500" /></div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center"><span className="text-white font-bold">{t.name.charAt(0)}</span></div>
                  <div><p className="font-medium text-gray-900 text-sm">{t.name}</p><p className="text-xs text-gray-400">{t.company}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
