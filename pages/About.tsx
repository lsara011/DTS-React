
import React from 'react';
import { Link } from 'react-router-dom';
import MomAndDarwin from '../Assets/Images/MomAndDarwin.png';
import family from '../Assets/Images/compPhoto.png'

const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full animate-from-top">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent z-10"></div>
          <img 
            alt="Founder" 
            className="w-full h-full object-cover object-[50%-0%] grayscale opacity-90" 
            src={family}/>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 stagger-1 animate-from-top">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Established 2023 • Davie, FL
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
              Our <span className="text-primary italic">Journey</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
              Breaking boundaries in Davie: A family-led path to automotive excellence, community trust, and a new standard for tire service.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 relative max-w-5xl mx-auto">
        <div className="space-y-32">
          <div className="flex flex-col md:flex-row md:items-stretch gap-12 stagger-2 animate-from-top">
            <div className="flex-1 order-2 md:order-1">
              <div className="h-full bg-surface-dark border border-white/5 p-8 rounded-xl shadow-2xl">
                <h3 className="text-primary font-bold text-sm uppercase mb-4 tracking-widest">The Beginning</h3>
                <h2 className="text-3xl font-bold mb-6 italic uppercase">A Vision for Davie</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
Ada and Darwin’s journey is a testament to perseverance, sacrifice, and entrepreneurial spirit. Growing up in Honduras, they came to the United States in search of greater opportunities and a better future for their families. Through years of hard work in the restaurant industry, they developed a strong work ethic and a dream of becoming business owners. In 2023, that dream became a reality when they established and opened Davie Tire Shop in Florida. Built on dedication, integrity, and a commitment to serving their community, Davie Tire Shop represents not only a successful business, but also the fulfillment of a lifelong goal to create something of their own and leave a lasting legacy.
</p>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <img 
                className="h-full w-full rounded-xl border-4 border-primary/20 object-cover shadow-2xl" 
                src={MomAndDarwin}
                alt="Ada Sanchez portrait"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
