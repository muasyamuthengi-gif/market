
import React, { useState } from 'react';
import { PROGRAMS, TRAINERS } from '../constants';

const Booking: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    trainer: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '', email: '', phone: '', program: '', trainer: '', date: '', time: '', message: ''
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center min-h-screen bg-dark">
        <div className="max-w-md w-full text-center space-y-8 p-12 bg-charcoal rounded-[40px] border border-primary shadow-2xl shadow-primary/10">
          <div className="w-24 h-24 bg-primary text-dark rounded-full flex items-center justify-center mx-auto animate-bounce">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-display font-black uppercase tracking-tight">BOOKING SUCCESS!</h1>
          <p className="text-gray-400 leading-relaxed">Your request has been received. One of our performance consultants will contact you shortly to confirm your session.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-primary text-dark py-4 rounded-full font-black uppercase tracking-widest hover:bg-white transition-all"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-6xl md:text-8xl font-display font-black uppercase mb-6 italic leading-none">START YOUR <span className="text-primary">EVOLUTION</span></h1>
            <p className="text-gray-400 text-xl mb-12">Select your program and preferred trainer to begin your transformation journey at Prime Gym.</p>
            
            <div className="space-y-8">
              {[
                { title: 'Personal Consultation', desc: '1-on-1 session to discuss your goals and assessment.' },
                { title: 'Free Trial Session', desc: 'Experience any of our classes for free for your first visit.' },
                { title: 'Facility Tour', desc: 'Walk through our elite facility and meet our expert team.' },
              ].map((item, i) => (
                <div key={i} className="flex space-x-6">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-1">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-charcoal p-8 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Select Program</label>
                <select 
                  required
                  className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary appearance-none transition-all"
                  value={formData.program}
                  onChange={(e) => setFormData({...formData, program: e.target.value})}
                >
                  <option value="">Choose a program</option>
                  {PROGRAMS.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Preferred Date</label>
                  <input 
                    required
                    type="date" 
                    className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-gray-400"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Preferred Time</label>
                  <select 
                    required
                    className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary appearance-none transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (06:00 - 10:00)</option>
                    <option value="noon">Noon (10:00 - 14:00)</option>
                    <option value="afternoon">Afternoon (14:00 - 18:00)</option>
                    <option value="evening">Evening (18:00 - 22:00)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Message (Optional)</label>
                <textarea 
                  rows={4}
                  className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your fitness goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-dark py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all text-xl"
              >
                Book My Session
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
