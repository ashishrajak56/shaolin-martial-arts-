import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', program: 'shaolin' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', program: 'shaolin' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Visit Our Dojo</h2>
          <p className="text-gray-400">Start your transformation today. First class is on us.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-shaolin-gray p-8 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold mb-6 text-shaolin-gold">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-shaolin-red w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold text-white">Location</h4>
                    <p className="text-gray-400">
                      C wg, Banquet, SIERRA TOWER,<br/>
                      Near Domino's, Alica Nagar,<br/>
                      Lokhandwala Twp, Kandivali East,<br/>
                      Mumbai, Maharashtra 400101
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-shaolin-red w-6 h-6" />
                  <div>
                    <h4 className="font-bold text-white">Phone</h4>
                    <p className="text-gray-400">
                      <a href="tel:+918779635047" className="hover:text-white transition-colors">
                        +91 87796 35047
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-shaolin-red w-6 h-6" />
                  <div>
                    <h4 className="font-bold text-white">Email</h4>
                    <p className="text-gray-400">info@shaolinmumbai.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-shaolin-red w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold text-white">Training Hours</h4>
                    <p className="text-gray-400">Mon - Sat: 6:00 AM - 10:00 PM<br/>Sunday: Special Workshops</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="h-64 rounded-2xl overflow-hidden bg-gray-800 relative group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                alt="Location Map" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://maps.app.goo.gl/xXRZuNm7GL7daZC77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-shaolin-gold transition-colors flex items-center gap-2 group/btn"
                >
                  <MapPin size={16} className="text-shaolin-red" />
                  View on Google Maps
                  <ExternalLink size={14} className="opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-shaolin-red rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white">Book a Free Trial Class</h3>
              <p className="text-red-100 mb-8 text-sm">Fill out the form below and our master will contact you shortly.</p>
              
              {submitted ? (
                <div className="bg-white/10 p-6 rounded-lg text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="text-shaolin-red w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/80">We will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 text-white underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-red-100 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:bg-white/20 focus:border-white transition-colors"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-red-100 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:bg-white/20 focus:border-white transition-colors"
                      placeholder="+91"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-red-100 mb-1">Interested Program</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:bg-white/20 focus:border-white transition-colors [&>option]:bg-shaolin-red"
                      value={formState.program}
                      onChange={(e) => setFormState({...formState, program: e.target.value})}
                    >
                      <option value="shaolin">Shaolin Kung Fu</option>
                      <option value="mma">Mixed Martial Arts</option>
                      <option value="kids">Kids Program</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-white text-shaolin-red font-bold py-4 rounded-lg hover:bg-shaolin-gold hover:text-black transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;