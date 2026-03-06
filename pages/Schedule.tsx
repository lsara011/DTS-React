
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ServiceType, LocationType } from '../types';

const Schedule: React.FC = () => {
  const [state, handleSubmit] = useForm("mykngqql");
  const [step, setStep] = useState(1);
  const [reviewConfirmed, setReviewConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: ServiceType.TIRE,
    locationType: LocationType.MOBILE,
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    tireSize: '',
    brand: 'Any Brand (Best Value)',
    year: '',
    makeModel: '',
    date: '',
    time: '',
    oilType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === 'state') {
      value = value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 2);
    }

    if (name === 'zipCode') {
      value = value.replace(/[^\d-]/g, '').slice(0, 10);
    }

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
               !!formData.address.trim() &&
               !!formData.city.trim() &&
               !!formData.state.trim() &&
               !!formData.zipCode.trim();
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
  
  const prevStep = () => {
    setReviewConfirmed(false);
    setStep(s => Math.max(s - 1, 1));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (step !== 6) {
      e.preventDefault();
      return;
    }
    void handleSubmit(e);
  };

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
                  name="serviceType"
                  value={ServiceType.TIRE}
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
                  name="serviceType"
                  value={ServiceType.OIL}
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
                type="button"
                onClick={nextStep} 
                className="bg-primary hover:bg-red-700 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic text-sm sm:text-base shadow-xl shadow-primary/20"
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
                  name="locationType"
                  value={LocationType.SHOP}
                  className="peer sr-only" 
                  checked={formData.locationType === LocationType.SHOP}
                  onChange={() => setFormData({...formData, locationType: LocationType.SHOP})}
                />
                <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5 transition-all group-hover:bg-white/10 peer-checked:border-primary peer-checked:bg-primary/5">
                  <div className="p-3 w-fit rounded-lg bg-primary/20 text-primary mb-4">
                    <span className="material-symbols-outlined text-3xl">store</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 italic">In-Shop</h3>
                  <p className="text-sm text-slate-400">Visit us at our location.</p>
                </div>
              </label>

              <label className="relative cursor-pointer group">
                <input 
                  type="radio" 
                  name="locationType"
                  value={LocationType.MOBILE}
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
              <button type="button" onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Back
              </button>
              <button 
                type="button"
                onClick={nextStep} 
                className="bg-primary hover:bg-red-700 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic text-sm sm:text-base shadow-xl shadow-primary/20"
              >
                Vehicle Info <span className="material-symbols-outlined">arrow_forward</span>
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
                    <option className="text-black" value="">Select Oil Type</option>
                    <option className="text-black" value="Regular">Regular / Conventional</option>
                    <option className="text-black" value="Synthetic">Full Synthetic (Recommended)</option>
                    <option className="text-black" value="Synthetic Blend">Synthetic Blend</option>
                  </select>
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-black">Preferred Brand</label>
                <select name="brand" value={formData.brand} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white">
                  <option className="text-black">Any Brand (Best Value)</option>
                  {formData.serviceType === ServiceType.TIRE ? (
                    <>
                      <option className="text-black">Michelin</option>
                      <option className="text-black">Bridgestone</option>
                      <option className="text-black">Goodyear</option>
                      <option className="text-black">Continental</option>
                    </>
                  ) : (
                    <>
                      <option className="text-black">Mobil 1</option>
                      <option className="text-black">Castrol</option>
                      <option className="text-black">Valvoline</option>
                      <option className="text-black">Pennzoil</option>
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
              <button type="button" onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Back
              </button>
              <button 
                type="button"
                onClick={nextStep} 
                disabled={!valid}
                className={`bg-primary text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic text-sm sm:text-base shadow-xl shadow-primary/20 ${!valid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
              >
                Contact Info <span className="material-symbols-outlined">arrow_forward</span>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 md:col-span-1">
                <label className="text-sm font-semibold text-slate-300">City *</label>
                <input required name="city" value={formData.city} onChange={handleInputChange} autoComplete="address-level2" maxLength={60} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="Davie" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">State *</label>
                <input required name="state" value={formData.state} onChange={handleInputChange} autoComplete="address-level1" maxLength={2} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white uppercase" placeholder="FL" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Zip Code *</label>
                <input required name="zipCode" value={formData.zipCode} onChange={handleInputChange} autoComplete="postal-code" inputMode="numeric" maxLength={10} pattern="\d{5}(-\d{4})?" title="Enter a valid ZIP code (e.g. 33314 or 33314-1234)" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="33314" />
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button type="button" onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Back
              </button>
              <button 
                type="button"
                onClick={nextStep} 
                disabled={!valid}
                className={`bg-primary text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic text-sm sm:text-base shadow-xl shadow-primary/20 ${!valid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
              >
                Appointment <span className="material-symbols-outlined">arrow_forward</span>
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
                  <option className="text-black" value="">Choose Time</option>
                  <option className="text-black">Morning (8am - 12pm)</option>
                  <option className="text-black">Afternoon (12pm - 4pm)</option>
                  <option className="text-black">Evening (4pm - 8pm)</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button type="button" onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Back
              </button>
              <button 
                type="button"
                onClick={nextStep} 
                disabled={!valid}
                className={`bg-primary text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic text-sm sm:text-base shadow-xl shadow-primary/20 ${!valid ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
              >
                Summary <span className="material-symbols-outlined">arrow_forward</span>
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
                <div className="truncate text-xs text-slate-400">{formData.city}, {formData.state} {formData.zipCode}</div>
                <div className="flex justify-between text-sm pt-2 border-t border-white/5"><span className="text-slate-500">Appt:</span> <span className="text-white font-bold">{formData.date} @ {formData.time}</span></div>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button type="button" onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Edit
              </button>
            </div>
            <label className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
              <input
                type="checkbox"
                checked={reviewConfirmed}
                onChange={(e) => setReviewConfirmed(e.target.checked)}
                className="mt-1 h-4 w-4 accent-primary"
              />
              <span className="text-sm text-slate-300">
                I reviewed all details above and I am ready to send this service request.
              </span>
            </label>
            <button
              type="submit"
              disabled={state.submitting || !reviewConfirmed}
              className="w-full bg-primary hover:bg-red-700 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all shadow-2xl shadow-primary/20 uppercase italic text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Sending...' : 'Send Request'}
            </button>
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

        <div className="flex justify-center">
          <div className="w-full max-w-4xl stagger-3 animate-from-top">
            <form onSubmit={onSubmit} className="bg-surface-dark border border-white/10 rounded-xl p-8 shadow-2xl min-h-[450px]">
              <input type="hidden" name="serviceType" value={formData.serviceType} />
              <input type="hidden" name="locationType" value={formData.locationType} />
              <input type="hidden" name="_subject" value={`New Service Request - ${formData.name || "Customer"}`} />
              <input type="hidden" name="name" value={formData.name} />
              <input type="hidden" name="phone" value={formData.phone} />
              <input type="hidden" name="email" value={formData.email} />
              <input type="hidden" name="address" value={formData.address} />
              <input type="hidden" name="city" value={formData.city} />
              <input type="hidden" name="state" value={formData.state} />
              <input type="hidden" name="zipCode" value={formData.zipCode} />
              <input type="hidden" name="tireSize" value={formData.tireSize} />
              <input type="hidden" name="oilType" value={formData.oilType} />
              <input type="hidden" name="brand" value={formData.brand} />
              <input type="hidden" name="year" value={formData.year} />
              <input type="hidden" name="makeModel" value={formData.makeModel} />
              <input type="hidden" name="date" value={formData.date} />
              <input type="hidden" name="time" value={formData.time} />
              <input
                type="hidden"
                name="serviceDetails"
                value={`${formData.serviceType} | ${formData.locationType} | ${formData.year} ${formData.makeModel} | ${formData.tireSize || formData.oilType || "N/A"} | ${formData.brand} | ${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}`}
              />
              {state.succeeded ? (
                <div className="space-y-4 text-center animate-from-top">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h2 className="text-3xl font-bold uppercase italic">Request Sent</h2>
                  <p className="text-slate-400">Thanks. We received your service request and will contact you shortly.</p>
                </div>
              ) : (
                <>
                  {renderStep()}
                  {step === 6 && (
                    <div className="mt-6">
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm" />
                    </div>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
