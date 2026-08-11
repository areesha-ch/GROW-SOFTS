import { useEffect, useRef } from 'react';
import { faqs } from '@/data/products';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
      gsap.fromTo('.faq-accordion', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: '.faq-accordion', start: 'top 85%' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="faq-header">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked <span className="text-orange-500">Questions</span></h2>
              <p className="text-gray-500 mb-6">Find answers to common questions about our digital products, delivery, and support.</p>
              <p className="text-gray-400">Cannot find what you are looking for? Feel free to <a href="#contact" className="text-orange-500 font-semibold hover:underline">contact our support team</a> and we will be happy to help.</p>
            </div>
            <div className="faq-accordion">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-xl px-5 border border-gray-200 shadow-sm">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-500 py-4 text-sm">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-500 pb-4 text-sm">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
