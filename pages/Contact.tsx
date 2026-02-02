
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2">
            <span className="text-yellow-500 font-black text-xs uppercase tracking-widest block mb-4">Admissions & Inquiries</span>
            <h1 className="text-6xl font-black text-purple-950 mb-8 leading-tight">Your Success <br/><span className="text-purple-700">Starts Here.</span></h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
              Ready to enroll in our MPC or BiPC programs? Reach out to our admissions office today for a detailed counselor interaction and campus tour.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
                <Clock className="text-purple-700 mb-4" size={32} />
                <h4 className="font-black text-slate-900">Visiting Hours</h4>
                <p className="text-sm text-slate-500 mt-3 font-medium">Mon-Sat, 8:00 AM - 6:00 PM</p>
              </div>
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
                <MessageSquare className="text-purple-700 mb-4" size={32} />
                <h4 className="font-black text-slate-900">Career Counseling</h4>
                <p className="text-sm text-slate-500 mt-3 font-medium">Free 30-min expert consultation.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-16 -right-16 w-64 h-64 bg-yellow-400 rounded-[4rem] -z-10 rotate-12 opacity-20"></div>
             <img 
               src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
               className="w-full h-[550px] object-cover rounded-[5rem] shadow-2xl border-[10px] border-white"
               alt="College Entrance"
             />
             <div className="absolute bottom-12 -left-12 bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-sm border border-slate-50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Main Campus - Hyderabad</span>
                </div>
                <p className="text-slate-900 font-black text-lg leading-tight">Educational Hub, Road No. 45, Jubilee Hills, Hyderabad</p>
                <a href="#" className="text-purple-700 text-xs font-black uppercase tracking-widest mt-6 inline-flex items-center gap-3 hover:text-yellow-600 transition-colors">Get Google Directions <ArrowUpRight size={16} /></a>
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-black text-purple-950 mb-12">Connect Directly</h2>
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="bg-purple-900 p-6 rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <Mail size={32} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2">Admissions Email</h3>
                  <p className="text-slate-500 font-bold text-lg">admissions@hardcoded-jc.in</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="bg-purple-900 p-6 rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <Phone size={32} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2">Helpline Number</h3>
                  <p className="text-slate-500 font-bold text-lg">+91 98765 43210</p>
                  <p className="text-slate-500 font-bold text-lg">+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="bg-purple-900 p-6 rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <MapPin size={32} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2">Campus Location</h3>
                  <p className="text-slate-500 font-bold leading-relaxed">Road No. 45, Jubilee Hills,<br/>Hyderabad, Telangana 500033</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-slate-50 rounded-[5rem] p-10 md:p-20 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-900/5 blob-shape"></div>
              <h2 className="text-3xl font-black text-purple-950 mb-12">Enquiry Form</h2>
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Student Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter Full Name"
                      className="w-full bg-white border-2 border-slate-100 rounded-3xl px-8 py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Parent's Mobile</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white border-2 border-slate-100 rounded-3xl px-8 py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Preferred Stream</label>
                  <div className="grid grid-cols-2 gap-6">
                    <button className="py-6 px-8 rounded-3xl border-2 border-purple-900 bg-purple-900 text-white font-black uppercase tracking-widest text-xs transition-all">MPC Stream</button>
                    <button className="py-6 px-8 rounded-3xl border-2 border-slate-100 bg-white text-slate-400 font-black uppercase tracking-widest text-xs transition-all hover:border-purple-200">BiPC Stream</button>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Your Query</label>
                  <textarea 
                    rows={5} 
                    placeholder="Ask about hostel facilities, scholarships, or entrance exam integrated coaching..."
                    className="w-full bg-white border-2 border-slate-100 rounded-[3rem] px-8 py-8 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all resize-none font-bold text-slate-700 shadow-sm"
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 pt-6">
                  <button className="w-full md:w-auto bg-purple-950 text-white font-black px-16 py-7 rounded-3xl hover:bg-yellow-400 hover:text-purple-950 transition-all shadow-2xl flex items-center justify-center gap-4 group text-xl">
                    Submit Enquiry <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest max-w-[240px] font-black leading-relaxed">
                    By submitting, you agree to receive academic updates via WhatsApp and SMS.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
