
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Owners from './pages/Owners';
import { NAV_LINKS } from './constants';
import luisSaraviaLogo from './Assets/Images/luis-saravia-logo.svg';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="material-symbols-outlined text-primary text-4xl group-hover:rotate-45 transition-transform">tire_repair</span>
          <h2 className="text-xl font-extrabold tracking-tighter uppercase italic text-white">
            Davie Tire <span className="text-primary">& Auto</span>
          </h2>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors hover:text-primary relative group ${
                location.pathname === link.path ? 'text-primary' : 'text-slate-300'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-sm font-bold text-white">(954) 860-9497</span>
          </div>
          <Link 
            to="/schedule"
            className="bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
          >
            Schedule Now
          </Link>
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-dark border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 z-[49]">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold uppercase italic p-2 rounded-lg hover:bg-white/5 transition-all ${
                location.pathname === link.path ? 'text-primary' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-background-dark border-t border-white/5 py-12 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">tire_repair</span>
          <h2 className="text-xl font-extrabold tracking-tighter uppercase italic text-white">Davie Tire & Auto</h2>
        </div>
        <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
          Providing top-tier automotive maintenance and tire services to the Davie community for over 15 years. Quality service you can trust.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all">
            <span className="material-symbols-outlined text-xl">share</span>
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Location</h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-sm">location_on</span>
            <span>3800 Davie Blvd, B,<br/>Fort Lauderdale, FL 33312</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">phone</span>
            <span>(954) 860-9497</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Hours</h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li className="flex justify-between"><span>Mon - Sat:</span> <span>8am - 7pm</span></li>
          <li className="flex justify-between"><span>Sunday:</span> <span>10am - 4pm</span></li>
        </ul>
      </div>
    </div>
    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
      <p className="flex items-center gap-2">
        <span>© 2024 Davie Tire & Auto. All Rights Reserved. Created by</span>
        <a
          href="https://luissaravia.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center align-middle"
        >
          <img
            src={luisSaraviaLogo}
            alt="Luis Saravia"
            className="h-7 w-auto rounded bg-white px-1 py-0.5"
          />
        </a>
      </p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
