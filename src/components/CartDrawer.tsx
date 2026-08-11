import { Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore, generateOrderNumber } from '@/store/cartStore';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import type { OrderSummary } from '@/types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToCheckout: (orderSummary: OrderSummary) => void;
}

export function CartDrawer({ isOpen, onClose, onProceedToCheckout }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, getOrderSummary, clearCart } = useCartStore();

  const handleCheckout = () => {
    const summary = getOrderSummary();
    const orderNumber = generateOrderNumber();
    onProceedToCheckout({ ...summary, orderNumber });
    onClose();
  };

  const orderSummary = getOrderSummary();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-white border-l border-gray-200">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <ShoppingBag className="w-5 h-5 text-orange-500" />
            Shopping Cart <span className="text-sm font-normal text-gray-400">({items.length} items)</span>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-4"><ShoppingBag className="w-10 h-10 text-orange-400" /></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-400 mb-6">Add some products to get started!</p>
            <Button onClick={onClose} className="btn-primary bg-orange-500 hover:bg-orange-600">Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 -mx-6 px-6">
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                      <p className="text-xs text-gray-400 mb-2">{item.category}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-100 rounded-l-lg text-gray-500"><Minus className="w-3 h-3" /></button>
                          <span className="w-6 text-center text-sm text-gray-900">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-gray-100 rounded-r-lg text-gray-500"><Plus className="w-3 h-3" /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="p-1.5 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                    <div className="text-right"><p className="font-bold text-orange-500">${(item.price * item.quantity).toFixed(2)}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-auto">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-500 text-sm"><span>Subtotal</span><span>${orderSummary.subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-gray-500 text-sm"><span>Tax (8%)</span><span>${orderSummary.tax.toFixed(2)}</span></div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200"><span>Total</span><span className="text-orange-500">${orderSummary.total.toFixed(2)}</span></div>
              </div>
              <div className="space-y-2">
                <Button className="w-full btn-primary bg-orange-500 hover:bg-orange-600 py-5" onClick={handleCheckout}>Proceed to Checkout <ArrowRight className="w-5 h-5 ml-2" /></Button>
                <Button variant="outline" className="w-full border-gray-200 text-gray-500 hover:bg-gray-50" onClick={onClose}>Continue Shopping</Button>
                <button onClick={clearCart} className="w-full text-center text-sm text-red-400 hover:text-red-500 py-2">Clear Cart</button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
