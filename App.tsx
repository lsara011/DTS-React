
import React, { useState, useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Owners from './pages/Owners';
import { NAV_LINKS } from './constants';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    const newMessages = [...messages, { role: 'user', text: userMsg } as const];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Convert internal message history to Gemini API format
      const contents = newMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: `You are an expert tire and automotive technician at Davie Tire & Auto in Davie, FL. 
          Your tone is professional, helpful, and highly knowledgeable. 
          Use markdown (bold, lists, headers) to make your recommendations clear. 
          Emphasize:
          1. Our expert mobile service (we come to the customer).
          2. Premium brands like Michelin, Goodyear, and Bridgestone.
          3. Proper tire fitment based on vehicle type and driving conditions.
          Keep responses concise but thorough. If you don't know something, suggest they call us at (954) 555-0199.`,
        },
      });
      
      const responseText = response.text || "I'm sorry, I couldn't process that. How else can I help?";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "**Error:** I'm having trouble connecting to my automotive database. Please try again or call our shop directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-surface-dark border border-white/10 w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-90 slide-in-from-bottom-10">
          <div className="p-4 bg-primary text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="font-bold italic uppercase tracking-wider">Tire Expert AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 rounded-full p-1 transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-background-dark/50 scroll-smooth">
            {messages.length === 0 && (
              <div className="text-center py-10 text-slate-500 animate-pulse">
                <span className="material-symbols-outlined text-4xl mb-2">auto_awesome</span>
                <p className="text-sm italic px-6">Hello! I'm your Davie Tire expert. Ask me about the best tires for your car or our mobile services!</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-3 rounded-xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none shadow-md' 
                    : 'bg-white/10 text-slate-200 rounded-bl-none border border-white/5'
                }`}>
                  <div className={`prose prose-invert prose-sm max-w-none ${m.role === 'user' ? 'prose-p:text-white' : ''}`}>
                    <ReactMarkdown>{m.text}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-xl rounded-bl-none border border-white/5 flex gap-1.5 items-center">
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-white/5 bg-surface-dark flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about tires, brands, or service..." 
              className="bg-white/5 border border-white/10 rounded-lg flex-1 px-4 py-2.5 text-sm text-white focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600" 
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white p-2.5 rounded-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-red-700 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all group relative border border-white/10"
        >
          <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">chat</span>
          <span className="absolute right-full mr-4 bg-background-dark/90 backdrop-blur px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all border border-white/10 uppercase italic translate-x-4 group-hover:translate-x-0">
            Talk to an Expert
          </span>
        </button>
      )}
    </div>
  );
};

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
            <span className="text-[10px] uppercase tracking-widest text-slate-400">Emergency Dispatch</span>
            <span className="text-sm font-bold text-white">(954) 555-0199</span>
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
            <span>1234 Stirling Rd,<br/>Davie, FL 33314</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">phone</span>
            <span>(954) 555-0199</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Hours</h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li className="flex justify-between"><span>Mon - Fri:</span> <span>8am - 6pm</span></li>
          <li className="flex justify-between"><span>Saturday:</span> <span>9am - 4pm</span></li>
          <li className="flex justify-between text-primary font-bold"><span>Sunday:</span> <span>Closed</span></li>
        </ul>
      </div>
    </div>
    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
      <p>© 2024 Davie Tire & Auto. All Rights Reserved.</p>
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
        <AIChatAssistant />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
