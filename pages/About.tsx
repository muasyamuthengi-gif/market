
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2000" 
          alt="About Hero" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase leading-none italic">PRIME <span className="text-primary">STORY</span></h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight">SINCE 2018</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Prime Gym started with a simple vision: to create a space where serious athletes and fitness enthusiasts could find the highest quality equipment and coaching without the distractions of corporate fitness chains.
            </p>
            <p className="text-gray-400 text-xl leading-relaxed">
              We've grown from a small warehouse setup to a state-of-the-art facility, but our core mission remains the same: helping you achieve your absolute prime performance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-64 w-full object-cover" alt="" />
            <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-64 w-full object-cover translate-y-8" alt="" />
            <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-64 w-full object-cover" alt="" />
            <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-64 w-full object-cover translate-y-8" alt="" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 bg-dark rounded-[40px] border border-white/5">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-display font-black uppercase mb-4 tracking-widest italic">OUR MISSION</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To provide the ultimate environment for physical transformation through elite coaching, premium infrastructure, and an unwavering commitment to member results.
              </p>
            </div>
            <div className="p-12 bg-dark rounded-[40px] border border-white/5">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-display font-black uppercase mb-4 tracking-widest italic">OUR VISION</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                To become the global gold standard for performance-oriented fitness communities, recognized for excellence in athletic training and member experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery Placeholder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-12 text-center">THE FACILITY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="md:col-span-2 h-96 bg-charcoal rounded-3xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="h-96 bg-charcoal rounded-3xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="h-96 bg-charcoal rounded-3xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=600" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="md:col-span-2 h-96 bg-charcoal rounded-3xl overflow-hidden">
               <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
