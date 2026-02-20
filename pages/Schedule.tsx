
import React, { useState } from 'react';
import { ServiceType, LocationType } from '../types';

const Schedule: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: ServiceType.TIRE,
    locationType: LocationType.MOBILE,
    name: '',
    phone: '',
    email: '',
    address: '',
    tireSize: '',
    brand: 'Any Brand (Best Value)',
    year: '',
    makeModel: '',
    date: '',
    time: '',
    oilType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isStepValid = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return !!formData.serviceType;
      case 2:
        return !!formData.locationType;
      case 3:
        const vehicleBase = !!formData.year.trim() && !!formData.makeModel.trim();
        if (formData.serviceType === ServiceType.TIRE) {
          return vehicleBase && !!formData.tireSize.trim();
        }
        return vehicleBase && !!formData.oilType;
      case 4:
        return !!formData.name.trim() && 
               !!formData.phone.trim() && 
               !!formData.email.trim() && 
               !!formData.address.trim();
      case 5:
        return !!formData.date && !!formData.time;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (isStepValid(step)) {
      setStep(s => Math.min(s + 1, 6));
    }
  };
  
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const renderStep = () => {
    const valid = isStepValid(step);
    
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-from-top">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 italic uppercase">
              <span className="material-symbols-outlined text-primary">handyman</span>
              Choose Your Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <label className="relative cursor-pointer group">
                <input 
                  type="radio" 
                  className="peer sr-only" 
                  checked={formData.serviceType === ServiceType.TIRE}
                  onChange={() => setFormData({...formData, serviceType: ServiceType.TIRE})}
                />
                <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5 transition-all group-hover:bg-white/10 peer-checked:border-primary peer-checked:bg-primary/5">
                  <div className="p-3 w-fit rounded-lg bg-primary/20 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">tire_repair</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 italic">Tire Service</h3>
                  <p className="text-sm text-slate-400">Installation, repair, or rotation.</p>
                </div>
              </label>

              <label className="relative cursor-pointer group">
                <input 
                  type="radio" 
                  className="peer sr-only"
                  checked={formData.serviceType === ServiceType.OIL}
                  onChange={() => setFormData({...formData, serviceType: ServiceType.OIL})}
                />
                <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5 transition-all group-hover:bg-white/10 peer-checked:border-primary peer-checked:bg-primary/5">
                  <div className="p-3 w-fit rounded-lg bg-primary/20 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">oil_barrel</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 italic">Oil Change</h3>
                  <p className="text-sm text-slate-400">Full synthetic or conventional blends.</p>
                </div>
              </label>
            </div>
            <div className="flex justify-end">
              <button 
                onClick={nextStep} 
                className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic shadow-xl shadow-primary/20"
              >
                Next: Location <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-from-top">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 italic uppercase">
              <span className="material-symbols-outlined text-primary">location_on</span>
              Service Location
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <label className="relative cursor-pointer group">
                <input 
                  type="radio" 
                  className="peer sr-only" 
                  checked={formData.locationType === LocationType.SHOP}
                  onChange={() => setFormData({...formData, locationType: LocationType.SHOP})}
                />
                <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5 transition-all group-hover:bg-white/10 peer-checked:border-primary peer-checked:bg-primary/5">
                  <div className="p-3 w-fit rounded-lg bg-primary/20 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">store</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 italic">In-Shop</h3>
                  <p className="text-sm text-slate-400">Visit us at Stirling Rd, Davie, FL.</p>
                </div>
              </label>

              <label className="relative cursor-pointer group">
                <input 
                  type="radio" 
                  className="peer sr-only"
                  checked={formData.locationType === LocationType.MOBILE}
                  onChange={() => setFormData({...formData, locationType: LocationType.MOBILE})}
                />
                <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5 transition-all group-hover:bg-white/10 peer-checked:border-primary peer-checked:bg-primary/5">
                  <div className="p-3 w-fit rounded-lg bg-primary/20 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">local_shipping</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 italic">At My Address</h3>
                  <p className="text-sm text-slate-400">Mobile dispatch to your location.</p>
                </div>
              </label>
            </div>
            <div className="flex justify-between">
              <button onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Back
              </button>
              <button 
                onClick={nextStep} 
                className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic shadow-xl shadow-primary/20"
              >
                Next: Vehicle Info <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-from-top">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 italic uppercase">
              <span className="material-symbols-outlined text-primary">directions_car</span>
              Vehicle Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formData.serviceType === ServiceType.TIRE ? (
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Tire Size *</label>
                  <input required name="tireSize" value={formData.tireSize} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="e.g. 225/45R17" />
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Oil Type Preference *</label>
                  <select required name="oilType" value={formData.oilType} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white">
                    <option value="">Select Oil Type</option>
                    <option value="Regular">Regular / Conventional</option>
                    <option value="Synthetic">Full Synthetic (Recommended)</option>
                    <option value="Synthetic Blend">Synthetic Blend</option>
                  </select>
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Preferred Brand</label>
                <select name="brand" value={formData.brand} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white">
                  <option>Any Brand (Best Value)</option>
                  {formData.serviceType === ServiceType.TIRE ? (
                    <>
                      <option>Michelin</option>
                      <option>Bridgestone</option>
                      <option>Goodyear</option>
                      <option>Continental</option>
                    </>
                  ) : (
                    <>
                      <option>Mobil 1</option>
                      <option>Castrol</option>
                      <option>Valvoline</option>
                      <option>Pennzoil</option>
                    </>
                  )}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Vehicle Year *</label>
                <input required name="year" value={formData.year} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="2022" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-300">Make & Model *</label>
                <input required name="makeModel" value={formData.makeModel} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="Toyota Camry" />
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Back
              </button>
              <button 
                onClick={nextStep} 
                disabled={!valid}
                className={`bg-primary text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic shadow-xl shadow-primary/20 ${!valid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
              >
                Next: Contact Info <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-from-top">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 italic uppercase">
              <span className="material-symbols-outlined text-primary">person</span>
              Customer Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Full Name *</label>
                <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Phone Number *</label>
                <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="(954) 555-0123" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">Email Address *</label>
              <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">
                {formData.locationType === LocationType.MOBILE ? 'Service Address *' : 'Street Address (for our records) *'}
              </label>
              <input required name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="123 Ocean Blvd, Davie, FL" />
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Back
              </button>
              <button 
                onClick={nextStep} 
                disabled={!valid}
                className={`bg-primary text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic shadow-xl shadow-primary/20 ${!valid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
              >
                Next: Appointment <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 animate-from-top">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 italic uppercase">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
              Select Appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Date *</label>
                <input required type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Time Window *</label>
                <select required name="time" value={formData.time} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white">
                  <option value="">Choose Time</option>
                  <option>Morning (8am - 12pm)</option>
                  <option>Afternoon (12pm - 4pm)</option>
                  <option>Evening (4pm - 8pm)</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Back
              </button>
              <button 
                onClick={nextStep} 
                disabled={!valid}
                className={`bg-primary text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic shadow-xl shadow-primary/20 ${!valid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
              >
                Next: Summary <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 animate-from-top">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h2 className="text-3xl font-bold uppercase italic">Ready to Confirm!</h2>
              <p className="text-slate-400">Please review your final service details.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl border border-white/10 p-4 space-y-3">
                <h4 className="text-xs uppercase font-bold text-primary tracking-widest">Service & Vehicle</h4>
                <div className="flex justify-between text-sm"><span className="text-slate-500">Service:</span> <span className="text-white font-bold">{formData.serviceType}</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-500">Location:</span> <span className="text-white font-bold">{formData.locationType}</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-500">Vehicle:</span> <span className="text-white font-bold">{formData.year} {formData.makeModel}</span></div>
                {formData.tireSize && <div className="flex justify-between text-sm"><span className="text-slate-500">Tire Size:</span> <span className="text-white font-bold">{formData.tireSize}</span></div>}
                {formData.oilType && <div className="flex justify-between text-sm"><span className="text-slate-500">Oil Type:</span> <span className="text-white font-bold">{formData.oilType}</span></div>}
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-4 space-y-3">
                <h4 className="text-xs uppercase font-bold text-primary tracking-widest">Customer Details</h4>
                <div className="flex justify-between text-sm"><span className="text-slate-500">Name:</span> <span className="text-white font-bold">{formData.name}</span></div>
                <div className="flex justify-between text-sm"><span className="text-slate-500">Phone:</span> <span className="text-white font-bold">{formData.phone}</span></div>
                <div className="truncate text-xs text-slate-400 mt-2">{formData.address}</div>
                <div className="flex justify-between text-sm pt-2 border-t border-white/5"><span className="text-slate-500">Appt:</span> <span className="text-white font-bold">{formData.date} @ {formData.time}</span></div>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Edit
              </button>
              <button onClick={() => alert('Service Request Sent! We will contact you shortly.')} className="bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-2xl shadow-primary/20 uppercase italic text-lg">
                Confirm Booking
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-indigo/20 via-background-dark to-background-dark animate-from-top">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 stagger-1 animate-from-top">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase italic">Schedule Your <span className="text-primary">Service</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Flexible tire and oil maintenance delivered at our shop or your doorstep.</p>
        </div>

        <div className="mb-10 max-w-3xl mx-auto stagger-2 animate-from-top">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
            {[
              { n: 1, label: 'Service' },
              { n: 2, label: 'Location' },
              { n: 3, label: 'Vehicle' },
              { n: 4, label: 'Contact' },
              { n: 5, label: 'Time' },
              { n: 6, label: 'Review' }
            ].map((s) => (
              <div key={s.n} className="relative z-10 flex flex-col items-center gap-2 bg-background-dark px-2 transition-all">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                  step >= s.n ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-slate-800 text-slate-500 border border-white/10'
                }`}>
                  {step > s.n ? <span className="material-symbols-outlined text-[12px]">check</span> : s.n}
                </div>
                <span className={`hidden md:block text-[10px] font-bold uppercase tracking-wider ${step >= s.n ? 'text-primary' : 'text-slate-500'}`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 stagger-3 animate-from-top">
            <div className="bg-surface-dark border border-white/10 rounded-xl p-8 shadow-2xl min-h-[450px]">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;