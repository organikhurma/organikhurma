import React from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout
}) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed inset-0 overflow-hidden z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      
      <div className={`absolute inset-y-0 right-0 max-w-md w-full flex pointer-events-none transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-full h-full bg-white shadow-2xl flex flex-col pointer-events-auto">
          
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-brand-50">
            <h2 className="text-xl font-serif font-bold text-brand-900">Alışveriş Sepeti ({cartItems.length})</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2">
              <span className="sr-only">Kapat</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-brand-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 opacity-50">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <p>Sepetiniz şu an boş.</p>
                <button onClick={onClose} className="text-organic-600 hover:underline font-medium">Alışverişe Başla</button>
              </div>
            ) : (
              <ul className="space-y-6">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-2">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-brand-100">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-brand-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">{item.price * item.quantity} ₺</p>
                        </div>
                        <p className="mt-1 text-sm text-brand-500">{item.weight}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-brand-200 rounded-lg">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-2 py-1 text-brand-600 hover:bg-brand-50 rounded-l-lg"
                            disabled={item.quantity <= 1}
                          >-</button>
                          <span className="px-2 text-brand-900 font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-2 py-1 text-brand-600 hover:bg-brand-50 rounded-r-lg"
                          >+</button>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="font-medium text-red-500 hover:text-red-700"
                        >
                          Kaldır
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-brand-100 bg-brand-50 p-6">
              <div className="flex justify-between text-base font-medium text-brand-900 mb-4">
                <p>Ara Toplam</p>
                <p>{subtotal} ₺</p>
              </div>
              <p className="mt-0.5 text-sm text-brand-500 mb-6">
                Kargo ve vergiler ödeme adımında hesaplanır.
              </p>
              <button
                className="w-full flex items-center justify-center rounded-xl border border-transparent bg-brand-800 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-brand-900 transition-colors"
                onClick={onCheckout}
              >
                Siparişi Tamamla
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};