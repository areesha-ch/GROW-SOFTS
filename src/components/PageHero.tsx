import type { ReactNode } from 'react';
export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description: string }) {
  return <section className="pt-40 pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-br from-white via-orange-50/50 to-white"><div className="section-padding"><div className="container-max text-center max-w-4xl mx-auto">
    <span className="inline-flex items-center px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-5">{eyebrow}</span>
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">{title}</h1><p className="text-lg text-gray-500 max-w-2xl mx-auto">{description}</p>
  </div></div></section>;
}
