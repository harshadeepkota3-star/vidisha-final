
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowUpRight, Facebook, Instagram, Youtube, Linkedin, CheckCircle2, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2">
            <span className="text-yellow-500 font-black text-xs uppercase tracking-widest block mb-4">Admissions & Inquiries</span>
            <h1 className="text-6xl font-black text-purple-950 mb-8 leading-tight">Get in Touch with <br /><span className="text-purple-700 font-black tracking-tighter">Vidisha Junior College</span></h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-12 font-medium">
              We're here to answer your questions and guide you toward academic success. Reach out to our admissions office today for a detailed counselor interaction.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm group hover:bg-white hover:shadow-xl transition-all">
                <Clock className="text-purple-700 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-black text-slate-900">Visiting Hours</h4>
                <p className="text-sm text-slate-500 mt-3 font-medium">Mon-Sat, 9:00 AM - 6:00 PM<br /><span className="text-xs italic opacity-70">Sunday: By Appointment Only</span></p>
              </div>
              <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm group hover:bg-white hover:shadow-xl transition-all">
                <MessageSquare className="text-purple-700 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-black text-slate-900">Career Counseling</h4>
                <p className="text-sm text-slate-500 mt-3 font-medium">Free 30-min expert consultation for MPC & BiPC.</p>
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
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Principal Branch - Vijayawada</span>
              </div>
              <p className="text-slate-900 font-black text-lg leading-tight">54-14/8-68, Srinagar Colony SBI Road, near Novotel Hotel, Bharathi Nagar, Vijayawada</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Vidisha+Junior+College+Bharathi+Nagar+Vijayawada+Srinagar+Colony+SBI+Road" target="_blank" rel="noopener noreferrer" className="text-purple-700 text-xs font-black uppercase tracking-widest mt-6 inline-flex items-center gap-3 hover:text-yellow-600 transition-colors">Get Google Directions <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-black text-purple-950 mb-12">Contact Information</h2>
            <div className="space-y-12 mb-20">
              <div className="flex items-start gap-8">
                <div className="bg-purple-900 p-6 rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2">Email Your Queries</h3>
                  <p className="text-slate-500 font-bold text-lg">admissions@vidishaedusociety.com</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="bg-purple-900 p-6 rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2">Call Us Directly</h3>
                  <p className="text-slate-500 font-bold text-lg">+91 91211 47747</p>
                  <p className="text-slate-500 font-bold text-lg">+91 63665 27168</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="bg-purple-900 p-6 rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2">Vijayawada Headquarters</h3>
                  <p className="text-slate-500 font-bold leading-relaxed">54-14/8-68, Srinagar Colony SBI Road,<br />Bharathi Nagar, Vijayawada, AP 520008</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="bg-purple-900 p-6 rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.301-.15-1.767-.872-2.036-.969-.269-.099-.465-.148-.659.15s-.759.969-.928 1.162c-.171.192-.341.217-.642.066-1.132-.567-1.856-.917-2.607-2.193-.61-.957-.503-1.446-.35-1.86.1-.274.301-.565.452-.716.151-.15.201-.257.301-.428.1-.171.05-.323-.025-.473-.075-.15-.659-1.591-.904-2.18-.243-.585-.488-.504-.66-.513-.171-.01-.367-.01-.563-.01-.196 0-.514.075-.783.367-.269.292-1.027 1.004-1.027 2.449 0 1.445 1.051 2.844 1.196 3.037.145.193 2.067 3.155 5.006 4.42 2.939 1.265 2.939.844 3.473.794.534-.05 1.716-.7 1.956-1.378.24-.678.24-1.258.169-1.378-.071-.121-.263-.194-.564-.344zm-5.467 5.617c-1.832 0-3.619-.485-5.204-1.403l-.372-.218-3.874 1.016 1.034-3.778-.239-.38a8.956 8.956 0 0 1-1.373-4.79c0-4.964 4.041-9.005 9.006-9.005 2.404 0 4.664.936 6.362 2.635 1.697 1.698 2.633 3.96 2.632 6.369a9.014 9.014 0 0 1-9.006 9.006zm0-18.35c-5.147 0-9.335 4.187-9.335 9.335 0 1.643.43 3.248 1.246 4.665L1.5 22.502l6.814-1.788a9.293 9.293 0 0 0 4.654 1.25c5.143 0 9.329-4.187 9.333-9.333a9.28 9.28 0 0 0-2.73-6.607S17.11 3.65 12.005 3.65z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2">WhatsApp Support</h3>
                  <p className="text-slate-500 font-bold text-lg">+91 91211 47747</p>
                </div>
              </div>
            </div>

            {/* Email Support Block */}
            <div className="bg-purple-950 text-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
                <Mail className="text-yellow-400" size={28} />
                Email Us
              </h3>
              <div className="space-y-6">
                {[
                  "Chairman@vidishaedusociety.com",
                  "Management@vidishaedusociety.com",
                  "Accounts@vidishaedusociety.com",
                  "Enquiry@vidishaedusociety.com",
                  "Vijayawada@vidishaedusociety.com",
                  "Visakhapatnam@vidishaedusociety.com",
                  "Hyderabad@vidishaedusociety.com",
                  "Guntur@vidishaedusociety.com",
                  "Kakinada@vidishaedusociety.com"
                ].map((email, i) => (
                  <div key={i} className="group cursor-pointer">
                    <a
                      href={`mailto:${email}`}
                      className="text-xs font-bold text-purple-200 hover:text-yellow-400 transition-colors block break-all leading-relaxed tracking-wider"
                    >
                      {email}
                    </a>
                    <div className="h-[1px] w-full bg-white/5 mt-3"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-purple-900 shadow-sm hover:scale-110 hover:shadow-md transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 font-bold mt-4 max-w-[200px]">Stay updated with admissions, results, events, and campus news.</p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-slate-50 rounded-[5rem] p-10 md:p-20 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-900/5 blob-shape"></div>
              <h2 className="text-3xl font-black text-purple-950 mb-12">Enquiry Form</h2>
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Your Name*</label>
                    <input
                      type="text"
                      placeholder="Enter Your Full Name"
                      className="w-full bg-white border-2 border-slate-100 rounded-3xl px-8 py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm"
                      required
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Parent/Guardian Name*</label>
                    <input
                      type="text"
                      placeholder="Enter Parent Name"
                      className="w-full bg-white border-2 border-slate-100 rounded-3xl px-8 py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Phone Number*</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white border-2 border-slate-100 rounded-3xl px-8 py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm"
                      required
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Email Address*</label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full bg-white border-2 border-slate-100 rounded-3xl px-8 py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Student's Current Class*</label>
                    <select className="w-full bg-white border-2 border-slate-100 rounded-3xl px-8 py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm appearance-none">
                      <option>Select Current Status</option>
                      <option>Completed 10th Standard (Joining 1st Year)</option>
                      <option>Completed Intermediate 1st Year (Joining 2nd Year)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Interested Stream*</label>
                    <select className="w-full bg-white border-2 border-slate-100 rounded-3xl px-8 py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm appearance-none">
                      <option>Select Stream</option>
                      <option>MPC with JEE Mains</option>
                      <option>MPC with JEE Mains & Advanced</option>
                      <option>BiPC with NEET</option>
                      <option>Need Counseling</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Interested in Hostel Facility?</label>
                    <div className="flex gap-10">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="hostel" className="w-5 h-5 accent-purple-900" />
                        <span className="font-bold text-slate-600 group-hover:text-purple-900 transition-colors">Yes</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="hostel" className="w-5 h-5 accent-purple-900" />
                        <span className="font-bold text-slate-600 group-hover:text-purple-900 transition-colors">No</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Need Transportation?</label>
                    <div className="flex gap-10">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="transport" className="w-5 h-5 accent-purple-900" />
                        <span className="font-bold text-slate-600 group-hover:text-purple-900 transition-colors">Yes</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="transport" className="w-5 h-5 accent-purple-900" />
                        <span className="font-bold text-slate-600 group-hover:text-purple-900 transition-colors">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Your Message/Questions</label>
                  <textarea
                    rows={4}
                    placeholder="Ask about scholarships, entrance exam integrated coaching, or campus specifics..."
                    className="w-full bg-white border-2 border-slate-100 rounded-[3rem] px-8 py-8 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all resize-none font-bold text-slate-700 shadow-sm"
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 pt-6">
                  <button className="w-full md:w-auto bg-purple-950 text-white font-black px-16 py-7 rounded-3xl hover:bg-yellow-400 hover:text-purple-950 transition-all shadow-2xl flex items-center justify-center gap-4 group text-xl">
                    Send Message <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest max-w-[240px] font-black leading-relaxed">
                    By submitting, you agree to receive academic updates via WhatsApp and Email.
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

