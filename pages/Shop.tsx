
import React from 'react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

const Shop: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-4 italic">ZEAL <span className="text-primary">MERCH</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl">Fuel your lifestyle with high-quality apparel and supplements designed for the dedicated.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-charcoal p-4 rounded-3xl border border-white/5 flex flex-col h-full hover:border-primary/30 transition-all">
              <div className="aspect-square bg-dark rounded-2xl overflow-hidden relative mb-6">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-primary text-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {product.category}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-2xl font-black text-white">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-white/10 text-white p-3 rounded-full hover:bg-primary hover:text-dark transition-all transform hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { name: 'Apparel', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' },
             { name: 'Supplements', img: 'https://images.unsplash.com/photo-1593095191071-82b0c9ad6406?auto=format&fit=crop&q=80&w=800' },
             { name: 'Equipment', img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800' },
           ].map((cat, i) => (
             <div key={i} className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer">
               <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <h2 className="text-4xl font-display font-black uppercase tracking-widest group-hover:scale-125 transition-transform">{cat.name}</h2>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
