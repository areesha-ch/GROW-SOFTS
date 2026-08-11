import { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.2 });
      gsap.fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.4 });
      gsap.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.6 });
      gsap.fromTo('.hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.8 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-white">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,140,66,0.08) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-[100px]" />

      <div className="section-padding w-full relative z-10">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-title">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" /> Digital Products & Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Digital solutions that <span className="text-orange-500">grow</span> your business.
              </h1>
            </div>

            <p className="hero-subtitle text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
              Premium digital products and professional services designed to accelerate your success — now organized into dedicated pages for easier browsing.
            </p>

            <div className="hero-cta flex flex-wrap gap-4 justify-center mb-16">
              <Button size="lg" className="btn-primary bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-base rounded-lg font-semibold" onClick={() => { window.location.href = 'products.html'; }}>
                Browse Products <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-6 text-base rounded-lg font-semibold" onClick={() => { window.location.href = 'services.html'; }}>
                Explore Services
              </Button>
            </div>

            <div className="hero-stats grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: Zap, label: 'Instant Delivery' },
                { icon: Shield, label: 'Quality Guaranteed' },
                { icon: Clock, label: '24/7 Support' },
                { icon: Users, label: 'Trusted by Thousands' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-orange-100 shadow-sm">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                  <span className="text-sm text-gray-600 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
