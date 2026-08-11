import { useEffect, useRef } from 'react';
import { Target, Lightbulb, Heart, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { companyInfo } from '@/data/products';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } });
      gsap.fromTo('.value-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.values-grid', start: 'top 85%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const values = [
    { icon: Target, title: 'Our Mission', description: 'To provide high-quality digital products that empower individuals and businesses to achieve their goals.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We constantly evolve our products to stay ahead of trends and deliver cutting-edge solutions.' },
    { icon: Heart, title: 'Customer First', description: 'Your success is our priority. We are committed to providing exceptional support and value.' },
    { icon: Zap, title: 'Instant Delivery', description: 'All our products are delivered instantly via email, so you can start using them right away.' },
  ];

  return (
    <>
      <section className="pt-40 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-br from-white via-orange-50/50 to-white">
        <div className="section-padding"><div className="container-max text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-5">About Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">The team behind <span className="text-orange-500">GROW SOFTS.</span></h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">We create useful digital products and services that help people and businesses turn ideas into progress.</p>
        </div></div>
      </section>
      <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-white via-orange-50/30 to-white">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="about-content">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Welcome to <span className="text-orange-500">{companyInfo.name}</span></h2>
              <p className="text-gray-500 mb-6">We are a digital products company dedicated to creating high-quality resources that help individuals and businesses grow. From marketing tools to educational materials for children, our products are designed with care and expertise.</p>
              <p className="text-gray-500 mb-8">Based in {companyInfo.city}, {companyInfo.state}, we serve customers worldwide with instant digital delivery and exceptional customer support.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100"><p className="text-3xl font-bold text-orange-500">20+</p><p className="text-gray-400 text-sm">Digital Products</p></div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100"><p className="text-3xl font-bold text-orange-500">12K+</p><p className="text-gray-400 text-sm">Happy Customers</p></div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-orange-100/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-3xl shadow-xl p-8 aspect-square flex flex-col items-center justify-center border border-orange-100">
                  <div className="w-28 h-28 bg-orange-500 rounded-2xl flex items-center justify-center mb-4"><span className="text-white font-bold text-4xl">GS</span></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{companyInfo.name}</h3>
                  <p className="text-gray-400 text-center text-sm mb-3">{companyInfo.address}<br />{companyInfo.city}, {companyInfo.state} {companyInfo.zip}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="values-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={i} className="value-card bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-300 transition-colors shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4"><v.icon className="w-6 h-6 text-orange-500" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
