
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, subtotal, updateQuantity, removeFromCart, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-md w-full glass shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight">Your Cart ({itemCount})</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-gray-400">Your cart is empty.</p>
              <Link to="/shop" onClick={onClose} className="text-primary font-bold hover:underline">Continue Shopping</Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex space-x-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-sm">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-primary font-bold text-sm mt-1">${item.price}</p>
                  <div className="flex items-center mt-3 space-x-3">
                    <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
                      <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 hover:bg-white/10">-</button>
                      <span className="px-3 py-1 text-sm font-bold border-x border-white/20">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-white/10">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-charcoal space-y-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Subtotal</span>
              <span className="text-primary">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-primary text-dark py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all">
              Checkout Now
            </button>
            <p className="text-center text-xs text-gray-500">Shipping & taxes calculated at checkout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
