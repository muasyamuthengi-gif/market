
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Essential',
      price: isYearly ? 49 : 59,
      features: [
        'Access to Weight Room',
        'Locker Room Access',
        '2 Group Classes / Month',
        'Standard Recovery Suite',
        'Free Parking'
      ],
      popular: false
    },
    {
      name: 'Elite',
      price: isYearly ? 89 : 99,
      features: [
        'Unlimited Access 24/7',
        'Priority Class Booking',
        'Full Recovery Lounge Access',
        'Monthly Body Scan',
        '10% Shop Discount',
        'Bring a Guest 2x / Month'
      ],
      popular: true
    },
    {
      name: 'Pro Athlete',
      price: isYearly ? 149 : 169,
      features: [
        'All Elite Benefits',
        'Dedicated Personal Coach',
        'Custom Nutrition Plan',
        'Cold Plunge & Infrared Sauna',
        'Unlimited Guest Access',
        '25% Shop Discount'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-8xl font-display font-black uppercase mb-6 italic leading-none">PRIME <span className="text-primary">ACCESS</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">Choose your level of commitment and unlock the elite experience.</p>
        
        {/* Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-20">
          <span className={`text-lg font-bold ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-16 h-8 bg-charcoal border border-white/20 rounded-full relative p-1 transition-colors"
          >
            <div className={`w-6 h-6 bg-primary rounded-full transition-all duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-0'}`}></div>
          </button>
          <span className={`text-lg font-bold ${isYearly ? 'text-white' : 'text-gray-500'}`}>Yearly <span className="text-primary text-xs uppercase ml-1">Save 20%</span></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-[40px] border ${plan.popular ? 'border-primary bg-primary/5' : 'border-white/10 bg-charcoal'} flex flex-col transition-transform hover:scale-105`}>
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-dark font-black uppercase tracking-widest px-6 py-2 rounded-full text-xs">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display font-black uppercase tracking-widest mb-4">{plan.name}</h3>
              <div className="flex items-baseline justify-center mb-8">
                <span className="text-5xl font-black">$</span>
                <span className="text-7xl font-black">{plan.price}</span>
                <span className="text-gray-500 ml-2 font-bold">/mo</span>
              </div>
              <ul className="space-y-4 mb-12 text-left flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-300">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/booking"
                className={`w-full py-5 rounded-full font-black uppercase tracking-widest transition-all ${plan.popular ? 'bg-primary text-dark hover:bg-white' : 'bg-white text-dark hover:bg-primary'}`}
              >
                Join Now
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-charcoal rounded-[40px] border border-white/5 max-w-4xl mx-auto text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-display font-black uppercase mb-2">Corporate Membership</h2>
            <p className="text-gray-400">Custom plans for teams that perform together. Boost morale and physical health.</p>
          </div>
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-dark px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all shrink-0">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
