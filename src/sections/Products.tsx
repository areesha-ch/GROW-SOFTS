import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Eye, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import type { Product } from '@/types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductsProps {
  onProductClick?: (product: Product) => void;
}

export function Products({ onProductClick }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Marketing', 'Social Media', 'Content Creation', 'Streaming', 'Education', 'Branding', 'Development', 'Bundle'];

  const filteredProducts = selectedCategory === 'All' ? products : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 1500);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.products-header', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
      gsap.fromTo('.product-card-item', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.products-grid', start: 'top 85%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-white">
      <div className="section-padding">
        <div className="container-max">
          <div className="products-header text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Curated digital tools and resources you can download today — built for creators, founders, and teams.</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-orange-500 text-white' : 'bg-gray-50 text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card-item product-card bg-white rounded-xl overflow-hidden border border-gray-200 group cursor-pointer hover:border-orange-300" onClick={() => onProductClick?.(product)}>
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <button onClick={(e) => { e.stopPropagation(); setQuickViewProduct(product); }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4" /> Quick View
                  </button>
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-orange-500/90 text-white text-xs font-semibold rounded-md">{product.category}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-orange-500 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex"> {[1,2,3,4].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)} <Star className="w-3.5 h-3.5 fill-amber-400/30 text-amber-400/30" /> </div>
                    <span className="text-xs text-gray-500">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-500">${product.price.toFixed(2)}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 border-gray-200 text-gray-500 hover:text-orange-500 hover:border-orange-300 hover:bg-orange-50" onClick={(e) => { e.stopPropagation(); setQuickViewProduct(product); }}>
                        <Eye className="w-3.5 h-3.5" />
                      </Button>
                      <Button size="sm" className={`h-8 px-3 text-xs font-semibold rounded-lg ${addedToCart === product.id ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'}`} onClick={(e) => handleAddToCart(product, e)}>
                        {addedToCart === product.id ? <><Check className="w-3.5 h-3.5 mr-1" /> Added</> : <><ShoppingCart className="w-3.5 h-3.5 mr-1" /> Buy Now</>}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!quickViewProduct} onOpenChange={() => setQuickViewProduct(null)}>
        <DialogContent className="max-w-2xl bg-white border-gray-200">
          {quickViewProduct && (
            <>
              <DialogHeader><DialogTitle className="text-2xl font-bold text-gray-900">{quickViewProduct.name}</DialogTitle></DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-50"><img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" /></div>
                <div className="flex flex-col">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-semibold rounded-md w-fit mb-4">{quickViewProduct.category}</span>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex"> {[1,2,3,4].map((s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)} <Star className="w-4 h-4 fill-amber-400/30 text-amber-400/30" /> </div>
                    <span className="text-sm text-gray-500">({quickViewProduct.rating})</span>
                  </div>
                  <p className="text-gray-500 mb-4">{quickViewProduct.description}</p>
                  <p className="text-sm text-gray-500 mb-6 flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full" />{quickViewProduct.deliveryMethod}</p>
                  <div className="mt-auto">
                    <p className="text-3xl font-bold text-orange-500 mb-4">${quickViewProduct.price.toFixed(2)}</p>
                    <Button className="w-full btn-primary bg-orange-500 hover:bg-orange-600" onClick={() => { addToCart(quickViewProduct); setQuickViewProduct(null); }}>
                      <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
