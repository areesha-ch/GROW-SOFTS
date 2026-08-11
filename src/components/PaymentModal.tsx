import { Loader2, AlertCircle, ArrowRight, CheckCircle, X, Mail, Phone, Copy, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { OrderSummary } from '@/types';
import { useState, useEffect } from 'react';
import { companyInfo } from '@/data/products';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderSummary: OrderSummary | null;
  paymentMethod: 'online' | 'bank' | null;
  onOrderComplete: () => void;
}

export function PaymentModal({ isOpen, onClose, orderSummary, paymentMethod, onOrderComplete }: PaymentModalProps) {
  const [step, setStep] = useState<'processing' | 'info' | 'success'>('processing');
  const [countdown, setCountdown] = useState(4);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && paymentMethod === 'online') {
      setStep('processing');
      setCountdown(4);
      const timer = setInterval(() => {
        setCountdown((prev) => { if (prev <= 1) { clearInterval(timer); setStep('info'); return 0; } return prev - 1; });
      }, 1000);
      return () => clearInterval(timer);
    } else if (isOpen && paymentMethod === 'bank') { setStep('success'); }
  }, [isOpen, paymentMethod]);

  const handleComplete = () => { onOrderComplete(); onClose(); };
  const handleCopyOrderNumber = () => {
    if (orderSummary?.orderNumber) { navigator.clipboard.writeText(orderSummary.orderNumber); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  if (!orderSummary) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white border-gray-200 max-h-[90vh] overflow-y-auto">
        {step === 'processing' && paymentMethod === 'online' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"><Loader2 className="w-8 h-8 text-orange-500 animate-spin" /></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Redirecting to Payment Gateway...</h3>
            <p className="text-gray-400 mb-4 text-sm">Please wait while we connect you to our secure payment processor.</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2"><div className="bg-orange-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: `${((4 - countdown) / 4) * 100}%` }} /></div>
            <p className="text-xs text-gray-400">Redirecting in {countdown} seconds...</p>
          </div>
        )}

        {step === 'info' && (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"><AlertCircle className="w-7 h-7 text-orange-500" /></div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Information</h3>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
              <p className="text-orange-800 text-sm leading-relaxed">Automatic online payment is currently disabled. Please place your order and contact our support team to complete the payment.</p>
            </div>
            <div className="text-left bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">Contact Support:</p>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-500" /><span className="text-gray-500">Email:</span><a href={`mailto:${companyInfo.email}`} className="text-orange-600 font-medium hover:underline">{companyInfo.email}</a></p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-500" /><span className="text-gray-500">Phone:</span><a href={`tel:${companyInfo.phone}`} className="text-orange-600 font-medium hover:underline">{companyInfo.phone}</a></p>
              </div>
            </div>
            <div className="space-y-3">
              <Button className="w-full btn-primary bg-orange-500 hover:bg-orange-600" onClick={() => setStep('success')}>
                <ArrowRight className="w-4 h-4 mr-2" /> Continue with Order
              </Button>
              <Button variant="outline" className="w-full border-gray-200" onClick={onClose}><X className="w-4 h-4 mr-2" /> Cancel</Button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"><CheckCircle className="w-8 h-8 text-green-600" /></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You For Your Order!</h3>
            <p className="text-gray-500 mb-6 text-sm">Your order has been successfully placed. Please contact our support team to complete the payment.</p>

            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
              <p className="text-sm font-semibold text-gray-900 mb-3">Order Details</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Order Number:</span>
                  <div className="flex items-center gap-2"><span className="font-semibold text-gray-900 text-sm">{orderSummary.orderNumber}</span>
                    <button onClick={handleCopyOrderNumber} className="p-1 hover:bg-gray-200 rounded transition-colors">{copied ? <CheckCircle className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5 text-gray-400" />}</button>
                  </div>
                </div>
                <div className="flex justify-between"><span className="text-gray-500 text-sm">Total Amount:</span><span className="font-bold text-orange-500">${orderSummary.total.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-gray-500 text-sm">Payment Status:</span><span className="font-semibold text-amber-600 text-sm">Pending</span></div>
              </div>
            </div>

            <div className="text-left mb-4">
              <p className="text-sm font-semibold text-gray-900 mb-2">Items Ordered</p>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {orderSummary.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded" />
                      <div><p className="text-sm font-medium text-gray-900">{item.name}</p><p className="text-xs text-gray-400">Qty: {item.quantity}</p></div>
                    </div>
                    <span className="text-sm font-semibold text-orange-500">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 text-left">
              <p className="text-sm font-semibold text-gray-900 mb-2">Payment Instructions</p>
              <p className="text-sm text-gray-500 mb-3">Please contact our support team to complete your payment:</p>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-500" /><a href={`mailto:${companyInfo.email}`} className="text-orange-600 font-medium hover:underline">{companyInfo.email}</a></p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-500" /><a href={`tel:${companyInfo.phone}`} className="text-orange-600 font-medium hover:underline">{companyInfo.phone}</a></p>
              </div>
              <p className="text-xs text-gray-400 mt-3">Please mention your order number when contacting support.</p>
            </div>

            <Button className="w-full btn-primary bg-orange-500 hover:bg-orange-600" onClick={handleComplete}>
              <ShoppingBag className="w-4 h-4 mr-2" /> Continue Shopping
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
