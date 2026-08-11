import { useState } from 'react';
import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { OrderSummaryModal } from '@/components/OrderSummaryModal';
import { PaymentModal } from '@/components/PaymentModal';
import { LegalPages } from '@/components/LegalPages';
import { useCartStore } from '@/store/cartStore';
import type { OrderSummary } from '@/types';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

export function SiteLayout({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false), [summaryOpen, setSummaryOpen] = useState(false), [paymentOpen, setPaymentOpen] = useState(false), [legal, setLegal] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'bank' | null>(null);
  const { orderSummary, setOrderSummary, clearCart } = useCartStore();
  if (legal) return <LegalPages currentPage={legal} onClose={() => setLegal(null)} />;
  const checkout = (summary: OrderSummary) => { setOrderSummary(summary); setCartOpen(false); setSummaryOpen(true); };
  const payment = (method: 'online' | 'bank') => { setPaymentMethod(method); setSummaryOpen(false); setPaymentOpen(true); };
  const complete = () => { clearCart(); setOrderSummary(null); setPaymentOpen(false); toast.success('Order placed successfully! Check your email for details.'); };
  return <div className="min-h-screen bg-white"><Header onCartClick={() => setCartOpen(true)} /><main>{children}</main><Footer onLegalClick={setLegal} />
    <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} onProceedToCheckout={checkout} />
    <OrderSummaryModal isOpen={summaryOpen} onClose={() => setSummaryOpen(false)} orderSummary={orderSummary} onProceedToPayment={payment} onBackToCart={() => { setSummaryOpen(false); setCartOpen(true); }} />
    <PaymentModal isOpen={paymentOpen} onClose={() => setPaymentOpen(false)} orderSummary={orderSummary} paymentMethod={paymentMethod} onOrderComplete={complete} />
    <Toaster position="top-right" richColors />
  </div>;
}
