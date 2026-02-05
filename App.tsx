
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Shop from './pages/Shop';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

// Helper component for Classes/Programs list
const ProgramsPage = () => (
  <div className="pt-32 pb-24 bg-dark min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-6xl font-display font-black uppercase italic mb-12">PRIME <span className="text-primary">PROGRAMS</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Bodybuilding', img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800' },
          { title: 'Powerlifting', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
          { title: 'CrossFit', img: 'https://images.unsplash.com/photo-1534367507873-d2b7e2495992?auto=format&fit=crop&q=80&w=800' },
          { title: 'Athletic Yoga', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800' },
          { title: 'HIIT Performance', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800' },
          { title: 'Functional Strength', img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800' },
        ].map((p, i) => (
          <div key={i} className="group relative h-[450px] overflow-hidden rounded-[40px] border border-white/10">
            <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <h3 className="text-3xl font-display font-black uppercase mb-4 tracking-widest italic">{p.title}</h3>
              <p className="text-gray-300 mb-6 line-clamp-2">Premium curriculum designed by professional athletes to push your physical and mental boundaries.</p>
              <Link to="/booking" className="inline-block bg-primary text-dark px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-white transition-all">
                Book Session
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Helper component for Trainers list
const TrainersPage = () => (
  <div className="pt-32 pb-24 bg-dark min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-6xl font-display font-black uppercase italic mb-12">THE <span className="text-primary">SQUAD</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { name: 'Alex Rivers', specialty: 'Powerlifting Head Coach', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800' },
          { name: 'Sarah Chen', specialty: 'HIIT Specialist', img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a47?auto=format&fit=crop&q=80&w=800' },
          { name: 'Marcus Thorne', specialty: 'Strength & Conditioning', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800' },
          { name: 'Elena Vance', specialty: 'Mobility & Recovery', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800' },
          { name: 'James Wilson', specialty: 'Bodybuilding Expert', img: 'https://images.unsplash.com/photo-1507398941214-57f8999c33c7?auto=format&fit=crop&q=80&w=800' },
          { name: 'Lila Grace', specialty: 'Yoga & Mindfulness', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800' },
        ].map((t, i) => (
          <div key={i} className="group bg-charcoal rounded-[40px] overflow-hidden border border-white/5 transition-all hover:border-primary/50">
            <div className="h-[400px] overflow-hidden">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-3xl font-display font-black uppercase mb-1">{t.name}</h3>
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-6">{t.specialty}</p>
              <div className="flex justify-center space-x-4">
                 <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-dark transition-all">IG</button>
                 <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-dark transition-all">TW</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen font-sans selection:bg-primary selection:text-dark">
          <Navbar onOpenCart={() => setIsCartOpen(true)} />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/trainers" element={<TrainersPage />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

          {/* Floating Booking Button */}
          <Link 
            to="/booking"
            className="fixed bottom-8 right-8 z-40 bg-primary text-dark p-5 rounded-full shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all group md:flex items-center space-x-0 md:space-x-3 overflow-hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="max-w-0 md:group-hover:max-w-xs transition-all duration-500 font-black uppercase text-sm tracking-widest">
              Book Session
            </span>
          </Link>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
