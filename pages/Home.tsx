
import React from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS, TRAINERS, PRODUCTS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <h4 className="text-primary font-bold uppercase tracking-[0.3em] mb-4 flex items-center space-x-4">
              <span className="h-[2px] w-12 bg-primary"></span>
              <span>The Gold Standard Of Fitness</span>
            </h4>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none uppercase tracking-tighter mb-8 italic">
              UNLEASH YOUR <br />
              <span className="gradient-text">PRIME SELF</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Elite equipment, world-class coaching, and a community of high performers. Join the gym where limits are shattered daily.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/pricing" 
                className="bg-primary text-dark px-10 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:scale-105 transition-all text-center"
              >
                Join Now
              </Link>
              <Link 
                to="/booking" 
                className="border-2 border-white/20 hover:border-primary text-white px-10 py-5 rounded-full font-bold text-lg uppercase tracking-widest backdrop-blur-sm transition-all text-center"
              >
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-charcoal py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Members', value: '2500+' },
              { label: 'Professional Trainers', value: '30+' },
              { label: 'Premium Classes', value: '50+' },
              { label: 'Award Winning', value: '12x' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-black text-primary mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-4">WHY ATOMIC FITNESS?</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Modern Equipment', desc: 'The latest from Rogue, Eleiko, and Hammer Strength.', icon: '🏋️' },
              { title: 'Expert Coaching', desc: 'Certified trainers with backgrounds in elite athletics.', icon: '👨‍🏫' },
              { title: '24/7 Premium Access', desc: 'Train whenever inspiration strikes in a secure facility.', icon: '⚡' },
            ].map((f, i) => (
              <div key={i} className="bg-charcoal p-10 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-2">ELITE PROGRAMS</h2>
              <p className="text-gray-400 text-lg">Engineered for results. Built for you.</p>
            </div>
            <Link to="/programs" className="text-primary font-bold uppercase tracking-widest flex items-center space-x-2 group">
              <span>View All Programs</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.slice(0, 4).map((p) => (
              <div key={p.id} className="relative h-[400px] group overflow-hidden rounded-3xl">
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="text-[10px] uppercase font-black bg-primary text-dark px-2 py-0.5 rounded-sm inline-block mb-3">{p.difficulty}</div>
                  <h3 className="text-xl font-bold uppercase mb-2">{p.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {p.duration}
                  </div>
                  <Link to="/booking" className="block text-center border border-white/30 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-dark transition-all">
                    Book Session
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Preview */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-4">THE SQUAD</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Mentors. Athletes. Experts. Meet the team dedicated to your success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TRAINERS.map((t) => (
              <div key={t.id} className="text-center group">
                <div className="relative mb-8 aspect-square rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 border-[10px] border-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-1 uppercase tracking-tight">{t.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-xs">{t.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-2">PRIME GEAR</h2>
              <p className="text-gray-400 text-lg">High-performance merchandise for high-performance humans.</p>
            </div>
            <Link to="/shop" className="text-primary font-bold uppercase tracking-widest flex items-center space-x-2 group">
              <span>Visit The Shop</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((p) => (
              <div key={p.id} className="group bg-dark p-6 rounded-3xl border border-white/5 transition-all hover:translate-y-[-8px]">
                <div className="aspect-square bg-white/5 rounded-2xl mb-6 overflow-hidden relative">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-400">
                    {p.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-black text-2xl">${p.price}</span>
                  <Link to="/shop" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Voices Of Success</h4>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 leading-tight">THE PRIME <br /> COMMUNITY</h2>
              <p className="text-gray-400 text-lg mb-8 italic leading-relaxed">
                "The atmosphere at Atomic fit is addictive. It's not just a place to workout; it's where I go to push beyond what I thought was possible. The community is elite."
              </p>
              <div className="flex items-center space-x-4">
                <img src={TESTIMONIALS[0].avatar} alt="" className="w-16 h-16 rounded-full grayscale" />
                <div>
                  <div className="font-bold text-xl uppercase tracking-tight">{TESTIMONIALS[0].name}</div>
                  <div className="text-primary text-sm font-bold uppercase">{TESTIMONIALS[0].role}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800" 
                alt="Community" 
                className="rounded-3xl relative z-10 border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-primary text-dark">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase mb-8 tracking-tighter">STOP WAITING. START EVOLVING.</h2>
          <p className="text-xl md:text-2xl font-bold uppercase mb-12 opacity-80">Ready to transform your life and body?</p>
          <Link 
            to="/pricing" 
            className="inline-block bg-dark text-white px-12 py-6 rounded-full font-black text-xl uppercase tracking-widest hover:scale-110 transition-all shadow-2xl"
          >
            Claim Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
