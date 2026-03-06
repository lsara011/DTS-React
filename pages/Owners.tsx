
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
            Meet The <span className="text-primary italic">Owners</span>
          </h1>
          <p className="text-xl text-slate-400 mt-6 max-w-xl stagger-2 animate-from-top leading-relaxed">
            The people behind Davie Tire Shop's story, service, and commitment to the community.
          </p>
        </div>
      </section>

      {/* Owners Section */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="stagger-3 animate-from-top bg-[#000000] border border-white/10 rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                className="w-full aspect-[4/5] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZy2sXvFflT64DzDtNYc2FCQGzyKwabIhnn3Lukyb7KLlshg_SMk6D46MU9xlDEmogHLfejtOA66P6CM3zdWEBA-T8lwrLMuyIIAAPJFixXRUmth0Xrwu3BmTSrSX04kffCENuQTldDtopwjc6DY68W6gXWN3xb8oIuqPvztMLPYoFJ3dTbydhVX4xug-782D7FpctsglXZWGp6OBOsHE-vpPq0EGlyYk2R60YaDrWXH8YfrkX3VVdS4ThQ5gsyNW-SXiZAZ-2DLU"
                alt="Ada Sanchez"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h2 className="text-3xl font-black uppercase italic text-white">Ada Sanchez</h2>
                <p className="text-primary uppercase tracking-widest text-xs font-bold">
                  Principal Owner
                </p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Ada (also known as Leticia) turned years of hard work and determination into a
                business that serves local families with reliable tire services.
              </p>
              <p className="text-slate-400 text-sm">
                Proud mother of three and co-owner focused on service quality and customer care.
              </p>
            </div>
          </div>

          <div className="stagger-4 animate-from-top bg-[#000000] border border-white/10 rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                className="w-full aspect-[4/5] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9VXj0Vl9WUOP_5n-MxV1NH52MFhns8jU4ayXjQT9x-OAIfVWhQDxWUxGzoOZauOdsCMU-dQao7macOSiNqt5B4v1MHunIbbrq_GCLKEi6T50hU3856VfqI1i8nlZ1HYEkzryo7njxmR5TsjZh9X9tGXOjQEjgkK6cprmuKQ-nFoT-5pO2LFxd6iurrKdD1uYp7jqVSCL682CqLj4QrFzZqiFwQFX6f-mgILFD2JzMYzs1iqvuCkmVoZR6-D1O9l8zx0D1cusPZw"
                alt="Darwin"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h2 className="text-3xl font-black uppercase italic text-white">Darwin</h2>
                <p className="text-primary uppercase tracking-widest text-xs font-bold">
                  Owner
                </p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Darwin partnered with Ada to open the shop on Davie Boulevard and helped turn
                their shared dream into a trusted local business.
              </p>
              <p className="text-slate-400 text-sm">
                Co-owner dedicated to day-to-day operations, customer trust, and dependable tire
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Owners;
