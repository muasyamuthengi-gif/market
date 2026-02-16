
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-9xl font-display font-black uppercase italic italic mb-4 leading-none">GET IN <span className="text-primary">TOUCH</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">Have questions? We're here to help you start your journey.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-charcoal p-10 rounded-[40px] border border-white/5">
              <h3 className="text-2xl font-bold uppercase mb-6 flex items-center">
                <span className="w-2 h-8 bg-primary mr-4"></span> Location
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                123 Elite Way, Fitness District<br />
                Kenya, CA 90210
              </p>
              <button className="mt-6 text-primary font-bold hover:underline flex items-center space-x-2">
                <span>Open in Maps</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>

            <div className="bg-charcoal p-10 rounded-[40px] border border-white/5">
              <h3 className="text-2xl font-bold uppercase mb-6 flex items-center">
                <span className="w-2 h-8 bg-primary mr-4"></span> Reach Out
              </h3>
              <ul className="space-y-4 text-gray-400 text-lg">
                <li className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>07 123-4567</span>
                </li>
                <li className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@zealfit.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-charcoal p-10 md:p-16 rounded-[40px] border border-white/5">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">First Name</label>
                  <input type="text" className="w-full bg-dark border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary transition-all" placeholder="John" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Last Name</label>
                  <input type="text" className="w-full bg-dark border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Subject</label>
                <input type="text" className="w-full bg-dark border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary transition-all" placeholder="How can we help?" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Message</label>
                <textarea rows={6} className="w-full bg-dark border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-primary transition-all resize-none" placeholder="Your message..."></textarea>
              </div>
              <button className="w-full bg-primary text-dark py-6 rounded-full font-black text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/10">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-[500px] w-full rounded-[40px] overflow-hidden grayscale border border-white/5 relative">
          <div className="absolute inset-0 flex items-center justify-center bg-white/5">
            <div className="text-center">
              <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-gray-400 font-bold uppercase tracking-widest">Map Interactive View Unavailable</p>
              <p className="text-gray-600 text-sm">123 Elite Way, Fitness District, CA</p>
            </div>
          </div>
          {/* Visualizing a fake map */}
          <div className="w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
