import React from "react";
import { Link } from "react-router-dom";
import { BRANDS } from "../constants";
import Storefront from "../Assets/Images/dts.jpg"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full animate-from-top">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-6 lg:px-20 py-20 overflow-hidden bg-accent-indigo">
        <div className="absolute inset-0 opacity-90 mix-blend-overlay">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10"></div>
          <img
            alt="Car in garage"
            className="w-full h-full object-cover"
            src={Storefront}
            />
        </div>
        <div className="relative z-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6 stagger-1 animate-from-top">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span className="text-xs font-bold uppercase tracking-wider">
              Davie's Most Trusted Tire Shop
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase stagger-2 animate-from-top">
            Davie's hometown <br />
            <span className="text-primary italic">Tire Care</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed stagger-3 animate-from-top">
            Professional automotive solutions right in your neighborhood. From
            premium new tires to quick oil changes, we keep you moving safely on
            the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 stagger-4 animate-from-top">
            <Link
              to="/schedule"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/30"
            >
              <span className="material-symbols-outlined">schedule</span>
              Book Service
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">directions</span>
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-surface-dark/50 border-y border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">
            Authorized Dealer of Premium Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {BRANDS.map((brand, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-2xl font-black italic text-white">
                  {brand.name}
                </span>
                {brand.sub && (
                  <span className="text-[10px] uppercase font-bold text-primary">
                    {brand.sub}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-20" id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 italic uppercase">
            Our Professional <span className="text-primary">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Complete tire and maintenance care handled by certified technicians
            using state-of-the-art equipment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Tire Replacement",
              icon: "tire_repair",
              desc: "Premium new tires and quality inspected used tires for every budget.",
            },
            {
              title: "Patches & Repair",
              icon: "build",
              desc: "Expert flat fixes and interior patches to get you back on the road safely.",
            },
            {
              title: "Tire Rotations",
              icon: "sync",
              desc: "Extend your tire life and improve fuel economy with precision rotation.",
            },
            {
              title: "Oil Changes",
              icon: "oil_barrel",
              desc: "Full synthetic and conventional options with filter replacement.",
            },
          ].map((svc, i) => (
            <div
              key={i}
              className="group bg-surface-dark p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[100px]">
                  {svc.icon}
                </span>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">
                  {svc.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 italic">
                {svc.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {svc.desc}
              </p>
              <Link
                to="/schedule"
                className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Book Now{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Finance Section */}
      <section className="px-6 lg:px-20 py-12" id="financing">
        <div className="bg-gradient-to-br from-accent-indigo to-background-dark border border-white/10 rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="p-12 lg:p-20 flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary text-white px-3 py-1 rounded-lg font-black text-2xl uppercase italic">
                Snap!
              </div>
              <span className="text-slate-400 font-bold uppercase tracking-widest">
                Finance Partner
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase leading-tight">
              No Credit Needed. <br />
              <span className="text-primary italic">Drive Now, Pay Later.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-lg">
              Get up to $5,000 in financing to get back on the road today.
              Simple application, instant decision, and flexible payments.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://snapfinance.com/find-stores?zipCode=33013&state=FL&city=Davie&industry=TIRES_RIMS_%26_AUTO&storeType=in-store&merchantId=490293121&dbaName=Davie+Tire+Shop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all uppercase inline-block text-center"
              >
                Apply Now
              </a>
              <span className="text-slate-400 text-sm italic">
                *Approvals up to $5,000
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
