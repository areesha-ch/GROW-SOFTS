import { ArrowLeft, CreditCard, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { OrderSummary } from '@/types';
import { useState } from 'react';

interface OrderSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderSummary: OrderSummary | null;
  onProceedToPayment: (method: 'online' | 'bank') => void;
  onBackToCart: () => void;
}

export function OrderSummaryModal({ isOpen, onClose, orderSummary, onProceedToPayment, onBackToCart }: OrderSummaryModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<'online' | 'bank'>('online');
  if (!orderSummary) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <button onClick={onBackToCart} className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><ArrowLeft className="w-5 h-5" /></button>
            Payment Details
          </DialogTitle>
        </DialogHeader>
        <div className="mt-2 space-y-5">
          <p className="text-gray-400 text-sm">Select your preferred payment method to complete your order.</p>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="font-semibold text-gray-900 mb-3">Order Summary</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm"><span className="text-gray-400">Subtotal</span><span className="text-gray-700">${orderSummary.subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-400">Tax</span><span className="text-gray-700">${orderSummary.tax.toFixed(2)}</span></div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200"><span className="text-gray-900">Total</span><span className="text-orange-500">${orderSummary.total.toFixed(2)}</span></div>
            </div>
          </div>
          <div className="space-y-3">
            {(['online', 'bank'] as const).map((method) => (
              <button key={method} onClick={() => setSelectedMethod(method)} className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${selectedMethod === method ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-300'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedMethod === method ? 'bg-orange-500' : 'bg-gray-100'}`}>
                  {method === 'online' ? <CreditCard className={`w-6 h-6 ${selectedMethod === method ? 'text-white' : 'text-gray-400'}`} /> : <Building2 className={`w-6 h-6 ${selectedMethod === method ? 'text-white' : 'text-gray-400'}`} />}
                </div>
                <div className="text-left flex-1">
                  <p className="font-semibold text-gray-900">{method === 'online' ? 'Pay Online' : 'Bank Transfer'}</p>
                  <p className="text-sm text-gray-400">{method === 'online' ? 'Secure payment via credit/debit card' : 'Pay directly to our bank account'}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === method ? 'border-orange-500' : 'border-gray-300'}`}>
                  {selectedMethod === method && <div className="w-3 h-3 bg-orange-500 rounded-full" />}
                </div>
              </button>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            <Button variant="outline" className="flex-1 border-gray-200" onClick={onBackToCart}><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
            <Button className="flex-1 btn-primary bg-orange-500 hover:bg-orange-600" onClick={() => selectedMethod && onProceedToPayment(selectedMethod)}>Pay Online</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
