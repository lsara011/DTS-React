import React, { useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const DavieTireMapEmbed = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl shadow">
      <iframe
        title="DAVIE TIRE SHOP CORP Map"
        src="https://www.google.com/maps?q=3800+Davie+Blvd+B,+Fort+Lauderdale,+FL+33312&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mykngqql");
  const formStartedAt = useRef(Date.now());
  const [spamError, setSpamError] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSpamError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeyPot = String(formData.get("company") || "").trim();
    const submittedTooFast = Date.now() - formStartedAt.current < 4000;

    if (honeyPot || submittedTooFast) {
      setSpamError("Spam check failed. Please wait a moment and try again.");
      return;
    }

    await handleSubmit(event);
  };

  return (
    <div className="flex flex-col w-full p-6 lg:p-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-white text-4xl lg:text-5xl font-black tracking-tight uppercase italic">
            Contact & <span className="text-primary">Location Details</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Expert solutions right in the heart of Davie, FL. Visit our shop or
            message us for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Map and Financing */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#000000] shadow-2xl h-[450px] group">
              <div className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-50 opacity-80 pointer-events-none" />
              <DavieTireMapEmbed />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 bg-[#000000] border border-white/10 rounded-xl">
                <span className="material-symbols-outlined text-primary mb-4">
                  map
                </span>
                <h3 className="text-white font-bold mb-1 italic uppercase">
                  Our Address
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  3800 Davie Blvd, B,
                  <br />
                  Fort Lauderdale, FL 33312
                </p>
              </div>
              <div className="p-6 bg-[#000000] border border-white/10 rounded-xl">
                <span className="material-symbols-outlined text-primary mb-4">
                  call
                </span>
                <h3 className="text-white font-bold mb-3 italic uppercase">
                  Call Us
                </h3>
                <p className="text-white/60 text-sm">(954) 860-9497</p>
              </div>
              <div className="p-6 bg-[#000000] border border-white/10 rounded-xl">
                <span className="material-symbols-outlined text-primary mb-4">
                  schedule
                </span>
                <h3 className="text-white font-bold mb-1 italic uppercase">
                  Business Hours
                </h3>
                <p className="text-white/60 text-xs">Mon-Sat: 8am - 7pm</p>
                <p className="text-white/60 text-xs mt-1">Sun: 10am - 4pm</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#000000] border border-white/10 rounded-xl p-8 shadow-2xl h-full flex flex-col">
              <h2 className="text-2xl font-bold text-white mb-2 italic uppercase">
                Send Us a Message
              </h2>
              <p className="text-white/50 text-sm mb-8">
                Have a question? Let us know!
              </p>
              {state.succeeded ? (
                <p className="text-green-400 text-sm">
                  Thanks. Your message was sent successfully.
                </p>
              ) : (
                <form className="flex flex-col gap-5 flex-1" onSubmit={onSubmit}>
                <input
                  name="name"
                  required
                  className="bg-white/5 border-white/10 rounded-lg text-white p-3"
                  placeholder="Full Name"
                />
                <input
                  name="email"
                  required
                  className="bg-white/5 border-white/10 rounded-lg text-white p-3"
                  placeholder="Email Address"
                  type="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm -mt-3"
                />
                <input
                  name="phone"
                  required
                  className="bg-white/5 border-white/10 rounded-lg text-white p-3"
                  placeholder="Phone Number"
                  type="tel"
                />
                <input
                  name="company"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <textarea
                  name="message"
                  required
                  className="bg-white/5 border-white/10 rounded-lg text-white p-3 flex-1 resize-none"
                  placeholder="How can we help?"
                  rows={5}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm -mt-3"
                />
                {spamError && <p className="text-red-400 text-sm -mt-3">{spamError}</p>}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-primary text-white font-black text-lg rounded-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all uppercase italic"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
