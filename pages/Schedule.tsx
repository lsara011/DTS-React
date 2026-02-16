
import React, { useState } from 'react';
import { ServiceType } from '../types';

const Schedule: React.FC = () => {
  const [serviceType, setServiceType] = useState<ServiceType>(ServiceType.TIRE);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
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

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-from-top">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">handyman</span>
              Choose Your Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <label className="relative cursor-pointer group">
                <input 
                  type="radio" 
                  name="service" 
                  className="peer sr-only" 
                  checked={serviceType === ServiceType.TIRE}
                  onChange={() => setServiceType(ServiceType.TIRE)}
                />
                <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5 transition-all group-hover:bg-white/10 peer-checked:border-primary peer-checked:bg-primary/5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-3xl">tire_repair</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-1 italic">Mobile Tire Service</h3>
                  <p className="text-sm text-slate-400">Installation, repair, or rotation at your location.</p>
                </div>
              </label>

              <label className="relative cursor-pointer group">
                <input 
                  type="radio" 
                  name="service" 
                  className="peer sr-only"
                  checked={serviceType === ServiceType.OIL}
                  onChange={() => setServiceType(ServiceType.OIL)}
                />
                <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5 transition-all group-hover:bg-white/10 peer-checked:border-primary peer-checked:bg-primary/5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-3xl">oil_barrel</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-1 italic">Mobile Oil Change</h3>
                  <p className="text-sm text-slate-400">Full synthetic or blend oil change with filter.</p>
                </div>
              </label>
            </div>
            <div className="flex justify-end">
              <button onClick={nextStep} className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic shadow-xl shadow-primary/20">
                Next: Vehicle Info <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-from-top">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">directions_car</span>
              {serviceType === ServiceType.TIRE ? 'Tire & Vehicle Details' : 'Oil & Vehicle Details'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceType === ServiceType.TIRE ? (
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Tire Size (if known)</label>
                  <input name="tireSize" value={formData.tireSize} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="e.g. 225/45R17" />
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Oil Type</label>
                  <select name="oilType" value={formData.oilType} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white">
                    <option value="">Select Oil Type</option>
                    <option value="Regular">Regular / Conventional</option>
                    <option value="Synthetic">Full Synthetic (Recommended)</option>
                    <option value="Synthetic Blend">Synthetic Blend</option>
                  </select>
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Preferred {serviceType === ServiceType.TIRE ? 'Tire' : 'Oil'} Brand</label>
                <select name="brand" value={formData.brand} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white">
                  <option>Any Brand (Best Value)</option>
                  {serviceType === ServiceType.TIRE ? (
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
                <label className="text-sm font-semibold text-slate-300">Vehicle Year</label>
                <input name="year" value={formData.year} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="2022" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-300">Make & Model</label>
                <input name="makeModel" value={formData.makeModel} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" placeholder="Toyota Camry" />
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Back
              </button>
              <button onClick={nextStep} className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic shadow-xl shadow-primary/20">
                Next: Appointment <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-from-top">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
              Select Appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Time Window</label>
                <select name="time" value={formData.time} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white">
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
              <button onClick={nextStep} className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 uppercase italic shadow-xl shadow-primary/20">
                Next: Summary <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-from-top">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h2 className="text-3xl font-bold uppercase italic">Ready to Confirm!</h2>
              <p className="text-slate-400">Please review your details below before booking.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-white/10 p-6 space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500 text-sm">Service:</span>
                <span className="font-bold text-white">{serviceType}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500 text-sm">Vehicle:</span>
                <span className="font-bold text-white">{formData.year} {formData.makeModel}</span>
              </div>
              {serviceType === ServiceType.OIL && formData.oilType && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500 text-sm">Oil Type:</span>
                  <span className="font-bold text-white">{formData.oilType}</span>
                </div>
              )}
              {serviceType === ServiceType.TIRE && formData.tireSize && (
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-500 text-sm">Tire Size:</span>
                  <span className="font-bold text-white">{formData.tireSize}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500 text-sm">Preferred Brand:</span>
                <span className="font-bold text-white">{formData.brand}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500 text-sm">Appointment:</span>
                <span className="font-bold text-white">{formData.date || 'TBD'} • {formData.time || 'TBD'}</span>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="text-slate-400 hover:text-white font-bold flex items-center gap-2 uppercase italic">
                <span className="material-symbols-outlined">arrow_back</span> Edit
              </button>
              <button onClick={() => alert('Service Request Sent!')} className="bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-2xl shadow-primary/20 uppercase italic text-lg">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase italic">Schedule Your <span className="text-primary">Mobile Service</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Professional tire and oil service delivered directly to your driveway, office, or roadside location.</p>
        </div>

        <div className="mb-10 max-w-3xl mx-auto stagger-2 animate-from-top">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0"></div>
            {[
              { n: 1, label: 'Service' },
              { n: 2, label: 'Vehicle' },
              { n: 3, label: 'Appointment' },
              { n: 4, label: 'Summary' }
            ].map((s) => (
              <div key={s.n} className="relative z-10 flex flex-col items-center gap-2 bg-background-dark px-4 transition-all">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  step >= s.n ? 'bg-primary text-white ring-4 ring-primary/20' : 'bg-slate-800 text-slate-400 border border-white/10'
                }`}>
                  {step > s.n ? <span className="material-symbols-outlined text-sm">check</span> : s.n}
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${step >= s.n ? 'text-primary' : 'text-slate-500'}`}>
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

          <aside className="space-y-6 lg:sticky lg:top-24 stagger-4 animate-from-top">
            <div className="bg-surface-dark border border-white/10 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 italic uppercase">
                <span className="material-symbols-outlined text-primary">receipt_long</span>
                Booking Summary
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Service</p>
                    <p className="text-sm font-medium">{serviceType}</p>
                  </div>
                  <span className="text-primary font-bold">{serviceType === ServiceType.TIRE ? '$120.00' : '$85.00'}</span>
                </div>
                {serviceType === ServiceType.OIL && formData.oilType && (
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Oil Type</p>
                      <p className="text-sm font-medium">{formData.oilType}</p>
                    </div>
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Arrival Fee</p>
                    <p className="text-sm font-medium">Mobile Dispatch</p>
                  </div>
                  <span className="text-slate-300 font-bold">$25.00</span>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Estimated Total</span>
                  <span className="text-2xl font-bold text-primary">
                    ${(serviceType === ServiceType.TIRE ? 145 : 110).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex gap-3">
                <span className="material-symbols-outlined text-primary">verified</span>
                <div>
                  <p className="text-xs font-bold text-primary uppercase">Certified Technicians</p>
                  <p className="text-[11px] text-slate-300">All services include a 30-day workmanship guarantee.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
