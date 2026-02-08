
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowUpRight, Facebook, Instagram, Youtube, Linkedin, CheckCircle2, MessageCircle, ChevronRight } from 'lucide-react';

const campusData = [
  {
    image: "/branch_novotel.png",
    address: "54-14/8-68, Srinagar Colony SBI Road, near Novotel Hotel, Bharathi Nagar, Vijayawada, AP 520008",
    city: "Vijayawada",
    maps: "https://www.google.com/maps/search/?api=1&query=Vidisha+Junior+College+Bharathi+Nagar+Vijayawada+Novotel"
  },
  {
    image: "/branch_bharathinagar.png",
    address: "VMC Revenue, 54-1-7/2D, High Tension Line Road, Bharathi Nagar, Ward 2, Vijayawada, AP 520008",
    city: "Vijayawada",
    maps: "https://www.google.com/maps/search/?api=1&query=Vidisha+Junior+College+Bharathi+Nagar+High+Tension+Line+Road"
  },
  {
    image: "/branch_benz_circle.png",
    address: "Chaganti Mercantile, Near Nirmala Convent Signal, Benz Circle, Vijayawada, AP 520010",
    city: "Vijayawada",
    maps: "https://www.google.com/maps/search/?api=1&query=Vidisha+Junior+College+Benz+Circle+Vijayawada"
  },
  {
    image: "/branch_edupugallu.png",
    address: "Vijayawada Rd, beside Anjaneya Towers, Edupugallu Vijayawada, AP 521151",
    city: "Vijayawada",
    maps: "https://www.google.com/maps/search/?api=1&query=Vidisha+Junior+College+Edupugallu+Vijayawada"
  },
  {
    image: "/branch_guntur.png",
    address: "YS Plaza, beside Gorantla Venkateswara Swami Temple, Gorantla, Guntur, AP 522034",
    city: "Guntur",
    maps: "https://www.google.com/maps/search/?api=1&query=Vidisha+Junior+College+Gorantla+Guntur"
  },
  {
    image: "/branch_hyderabad.jpeg",
    address: "1st Floor, ATC - Anil Trading Co., Bolaram Rd, Lal Bahadur Colony, Tirumalagiri, Secunderabad 500015",
    city: "Secunderabad",
    maps: "https://www.google.com/maps/search/?api=1&query=Vidisha+Junior+College+Tirumalagiri+Secunderabad"
  },
  {
    image: "/branch_kakinada.png",
    address: "D.no.2-4-24, LRKS Plaza, Behind Anand theatre Opp: abhaya blood bank, Kakinada, AP 533003",
    city: "Kakinada",
    maps: "https://www.google.com/maps/search/?api=1&query=Vidisha+Junior+College+Kakinada"
  },
  {
    image: "/branch_visakhapatnam.png",
    address: "Rednam Gardens, 10-12-1/b, Jail Road Junction opp: Central Park, Ramnagar, Visakhapatnam, AP 530002",
    city: "Visakhapatnam",
    maps: "https://www.google.com/maps/search/?api=1&query=Vidisha+Junior+College+Ramnagar+Visakhapatnam"
  }
];

const Contact: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  const cities = ["Vijayawada", "Visakhapatnam", "Guntur", "Kakinada", "Hyderabad"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsCityOpen(false);
    if (isCityOpen) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isCityOpen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campusData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-10 lg:py-20 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center mb-16 lg:mb-32">
          <div className="lg:w-1/2">
            <span className="text-yellow-500 font-black text-xs uppercase tracking-widest block mb-3 lg:mb-4">Admissions & Inquiries</span>
            <h1 className="text-3xl lg:text-6xl font-black text-purple-950 mb-4 lg:mb-8 leading-tight">Get in Touch with <br className="hidden lg:block" /><span className="text-purple-700 font-black tracking-tighter">Vidisha Junior College</span></h1>
            <p className="text-base lg:text-xl text-slate-500 leading-relaxed mb-8 lg:mb-12 font-medium">
              We're here to answer your questions and guide you toward academic success. Reach out to our admissions office today for a detailed counselor interaction.
            </p>
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
              <div className="p-5 lg:p-10 bg-slate-50 rounded-2xl lg:rounded-[3rem] border border-slate-100 shadow-sm group hover:bg-white hover:shadow-xl transition-all">
                <Clock className="text-purple-700 mb-3 lg:mb-4 group-hover:scale-110 transition-transform w-6 h-6 lg:w-8 lg:h-8" />
                <h4 className="font-black text-slate-900 text-sm lg:text-base">Visiting Hours</h4>
                <p className="text-xs lg:text-sm text-slate-500 mt-2 lg:mt-3 font-medium">Mon-Sun, 8 AM - 8 PM<br /><span className="text-[10px] lg:text-xs italic opacity-70">Sunday: Appointment Only</span></p>
              </div>
              <div className="p-5 lg:p-10 bg-slate-50 rounded-2xl lg:rounded-[3rem] border border-slate-100 shadow-sm group hover:bg-white hover:shadow-xl transition-all">
                <MessageSquare className="text-purple-700 mb-3 lg:mb-4 group-hover:scale-110 transition-transform w-6 h-6 lg:w-8 lg:h-8" />
                <h4 className="font-black text-slate-900 text-sm lg:text-base">Career Counseling</h4>
                <p className="text-xs lg:text-sm text-slate-500 mt-2 lg:mt-3 font-medium">Free 30-min expert consultation for MPC & BiPC.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full">
            <div className="absolute -top-8 lg:-top-16 -right-8 lg:-right-16 w-32 lg:w-64 h-32 lg:h-64 bg-yellow-400 rounded-2xl lg:rounded-[4rem] -z-10 rotate-12 opacity-20"></div>
            <div className="relative w-full h-64 lg:h-[550px] overflow-hidden rounded-2xl lg:rounded-[5rem] shadow-2xl border-4 lg:border-[10px] border-white bg-white">
              {campusData.map((campus, index) => (
                <img
                  key={index}
                  src={campus.image}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  alt={`Campus ${index + 1}`}
                />
              ))}
            </div>
            <div className="absolute bottom-4 lg:bottom-12 left-0 lg:-left-12 bg-white p-5 lg:p-10 rounded-2xl lg:rounded-[2.5rem] shadow-2xl max-w-[280px] lg:max-w-sm border border-slate-50 transition-all duration-500">
              <div key={`info-${currentSlide}`} className="animate-in fade-in duration-700">
                <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-6">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.15em] lg:tracking-[0.2em] text-slate-400">{campusData[currentSlide].city}</span>
                </div>
                <p className="text-slate-900 font-black text-sm lg:text-lg leading-tight min-h-[3em]">
                  {campusData[currentSlide].address}
                </p>
                <a
                  href={campusData[currentSlide].maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 text-[10px] lg:text-xs font-black uppercase tracking-widest mt-4 lg:mt-6 inline-flex items-center gap-2 lg:gap-3 hover:text-yellow-600 transition-colors"
                >
                  Get Directions <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-2xl lg:text-4xl font-black text-purple-950 mb-8 lg:mb-12">Contact Information</h2>
            <div className="space-y-6 lg:space-y-12 mb-10 lg:mb-20">
              <div className="flex items-start gap-4 lg:gap-8">
                <div className="bg-purple-900 p-4 lg:p-6 rounded-xl lg:rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <Mail size={20} className="lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[9px] lg:text-[10px] mb-1 lg:mb-2">Email Your Queries</h3>
                  <p className="text-slate-500 font-bold text-sm lg:text-lg break-all">
                    <a href="mailto:admissions@vidishaedusociety.com" className="hover:text-purple-700 transition-colors">admissions@vidishaedusociety.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 lg:gap-8">
                <div className="bg-purple-900 p-4 lg:p-6 rounded-xl lg:rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <Phone size={20} className="lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[9px] lg:text-[10px] mb-1 lg:mb-2">Call Us Directly</h3>
                  <p className="text-slate-500 font-bold text-sm lg:text-lg hover:text-purple-700 transition-colors">
                    <a href="tel:+919121147747">+91 91211 47747</a>
                  </p>
                  <p className="text-slate-500 font-bold text-sm lg:text-lg hover:text-purple-700 transition-colors">
                    <a href="tel:+916366527168">+91 63665 27168</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 lg:gap-8">
                <div className="bg-purple-900 p-4 lg:p-6 rounded-xl lg:rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <MapPin size={20} className="lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[9px] lg:text-[10px] mb-1 lg:mb-2">Vijayawada HQ</h3>
                  <p className="text-slate-500 font-bold leading-relaxed text-sm lg:text-base">54-14/8-68, Srinagar Colony SBI Road,<br />Bharathi Nagar, Vijayawada, AP 520008</p>
                </div>
              </div>

              <div className="flex items-start gap-4 lg:gap-8">
                <div className="bg-purple-900 p-4 lg:p-6 rounded-xl lg:rounded-[1.5rem] text-yellow-400 shadow-xl">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="lg:w-6 lg:h-6"
                  >
                    <path d="M17.472 14.382c-.301-.15-1.767-.872-2.036-.969-.269-.099-.465-.148-.659.15s-.759.969-.928 1.162c-.171.192-.341.217-.642.066-1.132-.567-1.856-.917-2.607-2.193-.61-.957-.503-1.446-.35-1.86.1-.274.301-.565.452-.716.151-.15.201-.257.301-.428.1-.171.05-.323-.025-.473-.075-.15-.659-1.591-.904-2.18-.243-.585-.488-.504-.66-.513-.171-.01-.367-.01-.563-.01-.196 0-.514.075-.783.367-.269.292-1.027 1.004-1.027 2.449 0 1.445 1.051 2.844 1.196 3.037.145.193 2.067 3.155 5.006 4.42 2.939 1.265 2.939.844 3.473.794.534-.05 1.716-.7 1.956-1.378.24-.678.24-1.258.169-1.378-.071-.121-.263-.194-.564-.344zm-5.467 5.617c-1.832 0-3.619-.485-5.204-1.403l-.372-.218-3.874 1.016 1.034-3.778-.239-.38a8.956 8.956 0 0 1-1.373-4.79c0-4.964 4.041-9.005 9.006-9.005 2.404 0 4.664.936 6.362 2.635 1.697 1.698 2.633 3.96 2.632 6.369a9.014 9.014 0 0 1-9.006 9.006zm0-18.35c-5.147 0-9.335 4.187-9.335 9.335 0 1.643.43 3.248 1.246 4.665L1.5 22.502l6.814-1.788a9.293 9.293 0 0 0 4.654 1.25c5.143 0 9.329-4.187 9.333-9.333a9.28 9.28 0 0 0-2.73-6.607S17.11 3.65 12.005 3.65z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-[9px] lg:text-[10px] mb-1 lg:mb-2">WhatsApp Support</h3>
                  <p className="text-slate-500 font-bold text-sm lg:text-lg hover:text-purple-700 transition-colors">
                    <a href="https://wa.me/919121147747" target="_blank" rel="noopener noreferrer">+91 9346270306</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email Support Block */}
            <div className="bg-purple-950 text-white rounded-2xl lg:rounded-[3rem] p-6 lg:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-yellow-400/10 rounded-full -mr-12 lg:-mr-16 -mt-12 lg:-mt-16 blur-2xl"></div>
              <h3 className="text-xl lg:text-2xl font-black mb-6 lg:mb-8 flex items-center gap-3 lg:gap-4">
                <Mail className="text-yellow-400 w-5 h-5 lg:w-7 lg:h-7" />
                Email Us
              </h3>
              <div className="space-y-4 lg:space-y-6">
                {[
                  "chairman@vidishaedusociety.com",
                  "management@vidishaedusociety.com",
                  "accounts@vidishaedusociety.com",
                  "enquiry@vidishaedusociety.com",
                  "vijayawada@vidishaedusociety.com",
                  "visakhapatnam@vidishaedusociety.com",
                  "hyderabad@vidishaedusociety.com",
                  "guntur@vidishaedusociety.com",
                  "kakinada@vidishaedusociety.com"
                ].map((email, i) => (
                  <div key={i} className="group cursor-pointer">
                    <a
                      href={`mailto:${email}`}
                      className="text-[10px] lg:text-xs font-bold text-purple-200 hover:text-yellow-400 transition-colors block break-all leading-relaxed tracking-wider"
                    >
                      {email}
                    </a>
                    <div className="h-[1px] w-full bg-white/5 mt-2 lg:mt-3"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 lg:mt-12">
              <h3 className="font-black text-slate-900 uppercase tracking-widest text-[9px] lg:text-[10px] mb-4 lg:mb-6">Follow Us</h3>
              <div className="flex gap-3 lg:gap-4">
                {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-purple-900 shadow-sm hover:scale-110 hover:shadow-md transition-all">
                    <Icon size={18} className="lg:w-5 lg:h-5" />
                  </a>
                ))}
              </div>
              <p className="text-[9px] lg:text-[10px] text-slate-400 font-bold mt-3 lg:mt-4 max-w-[200px]">Stay updated with admissions, results, events, and campus news.</p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-slate-50 rounded-2xl lg:rounded-[5rem] p-6 lg:p-10 xl:p-20 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 lg:w-48 h-32 lg:h-48 bg-purple-900/5 blob-shape"></div>
              <h2 className="text-xl lg:text-3xl font-black text-purple-950 mb-6 lg:mb-12">Enquiry Form</h2>
              <form className="space-y-6 lg:space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
                  <div className="space-y-2 lg:space-y-4">
                    <label className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-400 ml-1">Your Name*</label>
                    <input
                      type="text"
                      placeholder="Enter Your Full Name"
                      className="w-full bg-white border-2 border-slate-100 rounded-2xl lg:rounded-3xl px-5 lg:px-8 py-4 lg:py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm text-sm lg:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2 lg:space-y-4">
                    <label className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-400 ml-1">Parent/Guardian Name*</label>
                    <input
                      type="text"
                      placeholder="Enter Parent Name"
                      className="w-full bg-white border-2 border-slate-100 rounded-2xl lg:rounded-3xl px-5 lg:px-8 py-4 lg:py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm text-sm lg:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
                  <div className="space-y-2 lg:space-y-4">
                    <label className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-400 ml-1">Phone Number*</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white border-2 border-slate-100 rounded-2xl lg:rounded-3xl px-5 lg:px-8 py-4 lg:py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm text-sm lg:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2 lg:space-y-4">
                    <label className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-400 ml-1">Email Address*</label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full bg-white border-2 border-slate-100 rounded-2xl lg:rounded-3xl px-5 lg:px-8 py-4 lg:py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm text-sm lg:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
                  <div className="space-y-2 lg:space-y-4">
                    <label className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-400 ml-1">Student's Current Class*</label>
                    <select className="w-full bg-white border-2 border-slate-100 rounded-2xl lg:rounded-3xl px-5 lg:px-8 py-4 lg:py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm appearance-none text-sm lg:text-base">
                      <option>Select Current Status</option>
                      <option>Completed 10th (Joining 1st Year)</option>
                      <option>Completed Inter 1st Year (Joining 2nd Year)</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2 lg:space-y-4">
                    <label className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-400 ml-1">Interested Stream*</label>
                    <select className="w-full bg-white border-2 border-slate-100 rounded-2xl lg:rounded-3xl px-5 lg:px-8 py-4 lg:py-6 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all font-bold text-slate-700 shadow-sm appearance-none text-sm lg:text-base">
                      <option>Select Stream</option>
                      <option>MPC with JEE Mains</option>
                      <option>MPC with JEE Mains & Advanced</option>
                      <option>BiPC with NEET</option>
                      <option>Need Counseling</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
                  <div className="space-y-2 lg:space-y-4 relative">
                    <label className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-400 ml-1">City*</label>
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={() => setIsCityOpen(!isCityOpen)}
                        className={`w-full bg-white border-2 rounded-2xl lg:rounded-3xl px-5 lg:px-8 py-4 lg:py-6 transition-all font-bold text-left flex items-center justify-between shadow-sm text-sm lg:text-base ${isCityOpen ? 'border-purple-900 ring-4 ring-purple-900/10' : 'border-slate-100 hover:border-slate-200'
                          } ${selectedCity ? 'text-slate-700' : 'text-slate-400'}`}
                      >
                        <span>{selectedCity || "Select Your City"}</span>
                        <ChevronRight className={`transition-transform duration-300 ${isCityOpen ? 'rotate-90' : 'rotate-0'}`} size={20} />
                      </button>

                      {isCityOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-100 rounded-2xl lg:rounded-3xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                          {cities.map((city) => (
                            <button
                              key={city}
                              type="button"
                              onClick={() => {
                                setSelectedCity(city);
                                setIsCityOpen(false);
                              }}
                              className="w-full text-left px-8 py-4 hover:bg-purple-50 hover:text-purple-950 font-bold text-slate-600 transition-colors border-b border-slate-50 last:border-0"
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
                  <div className="space-y-3 lg:space-y-6">
                    <label className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-400 ml-1">Interested in Hostel?</label>
                    <div className="flex gap-6 lg:gap-10">
                      <label className="flex items-center gap-2 lg:gap-3 cursor-pointer group">
                        <input type="radio" name="hostel" className="w-4 h-4 lg:w-5 lg:h-5 accent-purple-900" />
                        <span className="font-bold text-slate-600 group-hover:text-purple-900 transition-colors text-sm lg:text-base">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 lg:gap-3 cursor-pointer group">
                        <input type="radio" name="hostel" className="w-4 h-4 lg:w-5 lg:h-5 accent-purple-900" />
                        <span className="font-bold text-slate-600 group-hover:text-purple-900 transition-colors text-sm lg:text-base">No</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-3 lg:space-y-6">
                    <label className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-400 ml-1">Need Transportation?</label>
                    <div className="flex gap-6 lg:gap-10">
                      <label className="flex items-center gap-2 lg:gap-3 cursor-pointer group">
                        <input type="radio" name="transport" className="w-4 h-4 lg:w-5 lg:h-5 accent-purple-900" />
                        <span className="font-bold text-slate-600 group-hover:text-purple-900 transition-colors text-sm lg:text-base">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 lg:gap-3 cursor-pointer group">
                        <input type="radio" name="transport" className="w-4 h-4 lg:w-5 lg:h-5 accent-purple-900" />
                        <span className="font-bold text-slate-600 group-hover:text-purple-900 transition-colors text-sm lg:text-base">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 lg:space-y-4">
                  <label className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-slate-400 ml-1">Your Message/Questions</label>
                  <textarea
                    rows={3}
                    placeholder="Ask about scholarships, coaching, or campus specifics..."
                    className="w-full bg-white border-2 border-slate-100 rounded-2xl lg:rounded-[3rem] px-5 lg:px-8 py-5 lg:py-8 focus:ring-4 focus:ring-purple-900/10 focus:border-purple-900 outline-none transition-all resize-none font-bold text-slate-700 shadow-sm text-sm lg:text-base"
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 pt-4 lg:pt-6">
                  <button className="w-full md:w-auto bg-purple-950 text-white font-black px-8 lg:px-16 py-5 lg:py-7 rounded-2xl lg:rounded-3xl hover:bg-yellow-400 hover:text-purple-950 transition-all shadow-2xl flex items-center justify-center gap-3 lg:gap-4 group text-base lg:text-xl">
                    Send Message <Send className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-[9px] lg:text-[10px] text-slate-400 uppercase tracking-widest max-w-[240px] font-black leading-relaxed text-center md:text-left">
                    By submitting, you agree to receive updates via WhatsApp and Email.
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

