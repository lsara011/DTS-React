
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col w-full p-6 lg:p-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-white text-4xl lg:text-5xl font-black tracking-tight uppercase italic">Contact & <span className="text-primary">Location Details</span></h1>
          <p className="text-white/60 text-lg max-w-2xl">Expert solutions right in the heart of Davie, FL. Visit our shop or message us for immediate assistance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Map and Financing */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#000000] shadow-2xl h-[450px] group">
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-50 opacity-80" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxUI0ocqxWWmnm2vS7mVDrESj4lcIUo5v3yOJSpIL47C43euOA7RywXWDvhJfU7iRWy9GKNjiUN4SH9U4Fnn7KBAe8RkdstEzOIfLYNkOI7s26QsieujYDUX91SbwawL6az6kcweE-ojc-9meG9m2cd1KDDZTyEge42HZqHrmTdwmuV0PioqHsDVbziC9CaSJwbq8ozCjdZnwB8oB99A6J7S7ha4fr1JHV-ViHYT8rZn-1qRQRd5Res6tMtkSO1o_C_d0biDjIolQ")' }}
              />
              <div className="absolute top-4 left-4 z-10 w-72">
                <div className="flex items-center bg-black/80 backdrop-blur border border-white/10 rounded-lg p-2">
                  <span className="material-symbols-outlined text-white/50 px-2">search</span>
                  <input className="bg-transparent border-none focus:ring-0 text-sm text-white w-full" placeholder="Find nearby services..." />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-black/90 border border-primary/50 px-3 py-1.5 rounded-full text-xs font-bold text-white mb-2 shadow-xl">Our Shop</div>
                <span className="material-symbols-outlined text-primary text-5xl drop-shadow-[0_0_15px_rgba(236,19,19,0.6)] animate-bounce">location_on</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 bg-[#000000] border border-white/10 rounded-xl">
                <span className="material-symbols-outlined text-primary mb-4">map</span>
                <h3 className="text-white font-bold mb-1 italic uppercase">Our Address</h3>
                <p className="text-white/60 text-sm leading-relaxed">1234 Stirling Rd<br/>Davie, FL 33314</p>
              </div>
              <div className="p-6 bg-[#000000] border border-white/10 rounded-xl">
                <span className="material-symbols-outlined text-primary mb-4">call</span>
                <h3 className="text-white font-bold mb-1 italic uppercase">Call Us</h3>
                <p className="text-white/60 text-sm">(954) 555-0199</p>
                <p className="text-primary text-xs font-bold mt-1">Available Now</p>
              </div>
              <div className="p-6 bg-[#000000] border border-white/10 rounded-xl">
                <span className="material-symbols-outlined text-primary mb-4">schedule</span>
                <h3 className="text-white font-bold mb-1 italic uppercase">Business Hours</h3>
                <p className="text-white/60 text-xs">Mon-Fri: 9am - 6pm</p>
                <p className="text-white/40 text-xs italic mt-1">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#000000] border border-white/10 rounded-xl p-8 shadow-2xl h-full flex flex-col">
              <h2 className="text-2xl font-bold text-white mb-2 italic uppercase">Send Us a Message</h2>
              <p className="text-white/50 text-sm mb-8">Have a question? Our team responds within 2 business hours.</p>
              <form className="flex flex-col gap-5 flex-1">
                <input className="bg-white/5 border-white/10 rounded-lg text-white p-3" placeholder="Full Name" />
                <input className="bg-white/5 border-white/10 rounded-lg text-white p-3" placeholder="Email Address" type="email" />
                <input className="bg-white/5 border-white/10 rounded-lg text-white p-3" placeholder="Phone Number" type="tel" />
                <textarea className="bg-white/5 border-white/10 rounded-lg text-white p-3 flex-1 resize-none" placeholder="How can we help?" rows={5} />
                <button className="w-full py-4 bg-primary text-white font-black text-lg rounded-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all uppercase italic">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
