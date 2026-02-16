
import React from 'react';

const Owners: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end px-6 lg:px-20 py-20 overflow-hidden bg-background-dark animate-from-top">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent z-10"></div>
          <img 
            alt="Owners at the shop" 
            className="w-full h-full object-cover grayscale opacity-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9VXj0Vl9WUOP_5n-MxV1NH52MFhns8jU4ayXjQT9x-OAIfVWhQDxWUxGzoOZauOdsCMU-dQao7macOSiNqt5B4v1MHunIbbrq_GCLKEi6T50hU3856VfqI1i8nlZ1HYEkzryo7njxmR5TsjZh9X9tGXOjQEjgkK6cprmuKQ-nFoT-5pO2LFxd6iurrKdD1uYp7jqVSCL682CqLj4QrFzZqiFwQFX6f-mgILFD2JzMYzs1iqvuCkmVoZR6-D1O9l8zx0D1cusPZw" 
          />
        </div>
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase stagger-1 animate-from-top">
            Meet The <span className="text-primary italic">Team</span>
          </h1>
          <p className="text-xl text-slate-400 mt-6 max-w-xl stagger-2 animate-from-top leading-relaxed">
            The heart and soul behind Davie's most innovative automotive service experience.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">
        <div className="stagger-3 animate-from-top">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/30 transition-all"></div>
            <img 
              className="relative rounded-2xl border border-white/10 shadow-2xl z-10 w-full aspect-[4/5] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZy2sXvFflT64DzDtNYc2FCQGzyKwabIhnn3Lukyb7KLlshg_SMk6D46MU9xlDEmogHLfejtOA66P6CM3zdWEBA-T8lwrLMuyIIAAPJFixXRUmth0Xrwu3BmTSrSX04kffCENuQTldDtopwjc6DY68W6gXWN3xb8oIuqPvztMLPYoFJ3dTbydhVX4xug-782D7FpctsglXZWGp6OBOsHE-vpPq0EGlyYk2R60YaDrWXH8YfrkX3VVdS4ThQ5gsyNW-SXiZAZ-2DLU" 
              alt="Sarah and Marco"
            />
          </div>
        </div>
        <div className="space-y-8 stagger-4 animate-from-top">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold uppercase italic text-white">Sarah & Marco Jenkins</h2>
            <p className="text-primary font-bold uppercase tracking-widest text-sm">Co-Founders & Lead Technicians</p>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed">
            Married and motivated, Sarah and Marco founded Davie Tire & Auto with a simple goal: treat every car like it was their own family's vehicle. Sarah handles the technical innovations and mobile dispatch systems, while Marco oversees the precision in every tire fitment and alignment.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-3xl font-black text-primary">20+</span>
              <p className="text-xs uppercase font-bold text-slate-500 mt-1">Combined Years</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-3xl font-black text-primary">ASE</span>
              <p className="text-xs uppercase font-bold text-slate-500 mt-1">Master Certified</p>
            </div>
          </div>
          <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-slate-300 text-xl">
            "We aren't just selling tires; we're providing the safety that gets you home to your family every night."
          </blockquote>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-accent-indigo/20 py-24 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-black uppercase italic mb-8">Part of the <span className="text-primary">Davie Community</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Beyond the shop, Sarah and Marco are dedicated to Davie. From sponsoring local Little League teams to hosting free "Car Care 101" workshops for teen drivers, they believe in giving back to the community that keeps them moving.
            </p>
            <div className="flex justify-center gap-12 flex-wrap grayscale opacity-50">
                <span className="text-xl font-bold italic">Davie Chamber of Commerce</span>
                <span className="text-xl font-bold italic">Florida Auto Assoc.</span>
                <span className="text-xl font-bold italic">Local 505 Support</span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Owners;
