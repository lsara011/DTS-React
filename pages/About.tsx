
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="flex flex-col w-full animate-from-top">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent z-10"></div>
          <img 
            alt="Founder" 
            className="w-full h-full object-cover grayscale opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-WT3iaOu5HHPuTBeUsuTvIIZxCjol150D3QaSAgerbZ732D3BI5rRZQc49g5YBYcZam6UBKxpo8bUmSMZbN0Q_GNP5816q1puigUxjbxPACX6fXNbWFRed4lgJXomVM47ekLj1rt6xY3jdFcXS87LGn9Ks4c5wq8y5fPHm6pMtmcgNfIfl4Xj5P5VvAu4XIyYiLgnAe_NJ1eqVYNdvF32U-at60-CtZ3V0QV-G0ZW7JSVF8eDRqZmIVzxASkzNsAsC57ivXxBfM8" 
          />
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
              Breaking boundaries in Davie: A female-led path to automotive excellence, community trust, and a new standard for tire service.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform flex items-center gap-2 uppercase italic">
              Explore Our History <span className="material-symbols-outlined">arrow_downward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 relative max-w-5xl mx-auto">
        <div className="space-y-32">
          <div className="flex flex-col md:flex-row items-center gap-12 stagger-2 animate-from-top">
            <div className="flex-1 order-2 md:order-1">
              <div className="bg-surface-dark border border-white/5 p-8 rounded-xl shadow-2xl">
                <h3 className="text-primary font-bold text-sm uppercase mb-4 tracking-widest">The Beginning</h3>
                <h2 className="text-3xl font-bold mb-6 italic uppercase">A Vision for Davie</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Growing up in Davie, Sarah Jenkins saw more than just cars on the road—she saw a community in motion. She noticed a gap: the intimidating atmosphere of traditional tire shops that often left customers feeling disconnected.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  In 2021, Sarah traded her corporate career for grease and rubber, envisioning a shop where transparency and expertise were the main drivers.
                </p>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <img 
                className="rounded-xl border-4 border-primary/20 shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZy2sXvFflT64DzDtNYc2FCQGzyKwabIhnn3Lukyb7KLlshg_SMk6D46MU9xlDEmogHLfejtOA66P6CM3zdWEBA-T8lwrLMuyIIAAPJFixXRUmth0Xrwu3BmTSrSX04kffCENuQTldDtopwjc6DY68W6gXWN3xb8oIuqPvztMLPYoFJ3dTbydhVX4xug-782D7FpctsglXZWGp6OBOsHE-vpPq0EGlyYk2R60YaDrWXH8YfrkX3VVdS4ThQ5gsyNW-SXiZAZ-2DLU" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
