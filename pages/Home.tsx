
import React from 'react';
import { BookOpen, Award, Users, GraduationCap, ArrowRight, CheckCircle2, FlaskConical, ChevronLeft, ChevronRight, Monitor, Home as HomeIcon, Bus, Calendar, MapPin, Image as ImageIcon, Plus, Minus, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const bannerImages = [
  "/banner_slide_1.jpg",
  "/banner_slide_2.jpg",
  "/banner_slide_3.jpg",
  "/banner_slide_4.jpg"
];

const Home: React.FC = () => {
  const stats = [
    { label: 'Success Rate', value: '98%' },
    { label: 'Students Enrolled', value: '1200+' },
    { label: 'Expert Faculty', value: '45+' },
  ];

  const events = [
    {
      title: 'Admissions Open - 2025-26 Academic Year',
      date: 'Now Open',
      details: 'Limited seats for MPC (JEE) and BiPC (NEET) streams',
      action: 'Apply Now',
      isPrimary: true
    },
    {
      title: 'Campus Open House',
      date: 'Every Sat',
      subtext: '10 AM - 4 PM',
      details: 'Visit our campus, meet faculty, explore facilities',
      location: 'Vijayawada',
      action: 'Book Your Visit',
      image: '/event_campus.png'
    },
    {
      title: 'Parent-Teacher Orientation',
      date: 'Monthly',
      subtext: '1st Saturday',
      details: 'Interactive sessions for parents to track student progress',
      action: 'Register'
    },
    {
      title: 'Free Counseling Sessions',
      date: 'Ongoing',
      details: 'Career guidance for MPC/BiPC stream selection',
      action: 'Schedule Consultation',
      image: '/event_counseling.jpg'
    }
  ];

  const vidishaFeatures = [
    {
      title: 'Air-Conditioned Smart Classrooms',
      description: 'State-of-the-art learning environment with digital teaching systems for enhanced understanding',
      icon: <Monitor className="w-8 h-8" />
    },
    {
      title: 'Experienced Faculty',
      description: 'Highly qualified and passionate teachers dedicated to student success in both boards and competitive exams',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Advanced Laboratories',
      description: 'Well-equipped Physics, Chemistry, and Biology labs for hands-on practical learning',
      icon: <FlaskConical className="w-8 h-8" />
    },
    {
      title: 'Hostel Facilities',
      description: 'Separate hostel accommodation for boys and girls with nutritious, home-like food',
      icon: <HomeIcon className="w-8 h-8" />
    },
    {
      title: 'Transportation Available',
      description: 'Safe and reliable transport facility for day-scholar students across Vijayawada',
      icon: <Bus className="w-8 h-8" />
    },
    {
      title: 'Integrated Coaching',
      description: 'Board preparation combined with IIT-JEE Mains, Advanced, and NEET coaching under one roof',
      icon: <BookOpen className="w-8 h-8" />
    }
  ];



  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup immediately or with a slight delay
    const timer = setTimeout(() => setShowPopup(true), 500);
    return () => clearTimeout(timer);
  }, []);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What courses does Vidisha Junior College offer?",
      answer: (
        <div className="space-y-4">
          <p className="font-semibold text-purple-900">We offer Intermediate 1st and 2nd Year programs in:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <h4 className="font-bold text-purple-900 mb-2">MPC Stream</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 1st Year with JEE Mains Coaching</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 1st Year with JEE Mains & Advanced Coaching</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 2nd Year with JEE Mains Coaching</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 2nd Year with JEE Mains & Advanced Coaching</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <h4 className="font-bold text-purple-900 mb-2">BiPC Stream</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 1st Year with NEET Coaching</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 2nd Year with NEET Coaching</li>
              </ul>
            </div>
          </div>
          <p className="text-sm font-medium text-slate-500 italic border-l-4 border-yellow-400 pl-3">All courses integrate board preparation with competitive exam training.</p>
        </div>
      )
    },
    {
      question: "What facilities are available for students?",
      answer: (
        <div className="space-y-4">
          <p className="text-slate-600">Vidisha Junior College provides:</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Air-conditioned smart classrooms with digital teaching systems",
              "Advanced Physics, Chemistry, and Biology laboratories",
              "Comprehensive library with reference materials",
              "Separate hostel facilities for boys and girls with nutritious, home-like food",
              "Safe transportation for day-scholar students across Vijayawada",
              "Regular doubt-clearing sessions and personalized mentoring"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm bg-slate-50 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      question: "Is hostel accommodation available?",
      answer: (
        <div className="space-y-4">
          <p className="text-slate-600 font-medium">Yes, we provide separate hostel facilities for boys and girls with:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Comfortable, safe living spaces",
              "Nutritious meals prepared with home-like care",
              "24/7 security and supervision",
              "Study-friendly environment",
              "All basic amenities included"
            ].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-yellow-100 text-purple-900 text-xs font-bold uppercase tracking-wider rounded-full border border-yellow-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      question: "Do you provide transportation for day scholars?",
      answer: (
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-50 rounded-full text-indigo-600 hidden sm:block">
            <Bus className="w-6 h-6" />
          </div>
          <div>
            <p className="text-slate-600 leading-relaxed">
              Yes, we offer <span className="font-bold text-slate-800">reliable and safe transportation facility</span> for day-scholar students covering major areas across Vijayawada.
            </p>
            <button className="mt-3 text-sm font-bold text-purple-900 hover:text-purple-700 underline underline-offset-4 decoration-yellow-400">
              Contact us for route details
            </button>
          </div>
        </div>
      )
    },
    {
      question: "How is the faculty at Vidisha Junior College?",
      answer: (
        <div className="bg-purple-900 text-white p-5 rounded-xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="leading-relaxed opacity-90">
              Our faculty comprises <span className="font-bold text-yellow-400">highly qualified and experienced teachers</span> who specialize in both intermediate board syllabus and competitive exam preparation. They provide personalized attention, regular doubt-clearing, progress monitoring, and focused guidance to help every student succeed.
            </p>
          </div>
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      )
    },
    {
      question: "How do you integrate board preparation with competitive exam coaching?",
      answer: (
        <div className="space-y-3 text-slate-600">
          <p className="leading-relaxed">
            Our curriculum is designed to cover both <span className="font-semibold text-purple-900">intermediate board syllabus</span> and <span className="font-semibold text-purple-900">IIT-JEE/NEET exam patterns</span> simultaneously.
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <div className="flex items-center gap-2 p-2 bg-white border border-slate-100 rounded shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500"></div> Regular Tests
            </div>
            <div className="flex items-center gap-2 p-2 bg-white border border-slate-100 rounded shadow-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> Topic-wise Modules
            </div>
            <div className="flex items-center gap-2 p-2 bg-white border border-slate-100 rounded shadow-sm">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div> Problem-solving Sessions
            </div>
            <div className="flex items-center gap-2 p-2 bg-white border border-slate-100 rounded shadow-sm">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div> Entrance Test Prep
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const marqueeText = "ADMISSIONS OPEN FOR 2025-26 ACADEMIC YEAR • EXCLUSIVE MPC & BiPC STREAMS • INTEGRATED IIT-JEE & NEET COACHING • SCHOLARSHIPS AVAILABLE FOR MERIT STUDENTS • ENROL NOW FOR ACADEMIC EXCELLENCE • ";



  const popupContent = showPopup && (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-500 ring-1 ring-white/20 mt-20">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 border border-white/20 shadow-lg"
          aria-label="Close Popup"
        >
          <X size={24} />
        </button>
        <div className="relative">
          <img
            src="/popup_announcement.jpg"
            alt="Admissions Open 2026-27"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {popupContent}
      <div className="animate-in fade-in duration-700">
        {/* Hero Section */}
        <section className="flex flex-col w-full">
          {/* Slim Scrolling Strip - Relative positioning to push content down */}
          <div className="w-full z-40 bg-yellow-400 py-2.5 border-b border-purple-900/20 shadow-sm overflow-hidden relative">
            <div className="animate-marquee whitespace-nowrap flex text-[11px] font-black uppercase tracking-[0.3em] text-purple-950">
              <span className="px-6">{marqueeText}</span>
              <span className="px-6">{marqueeText}</span>
              <span className="px-6">{marqueeText}</span>
              <span className="px-6">{marqueeText}</span>
            </div>
          </div>

          <div className="w-full relative group">
            <div className="w-full relative overflow-hidden">
              {/* Aspect Ratio container or just natural height */}
              {bannerImages.map((img, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'}`}
                >
                  <img
                    src={img}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>

            {/* Slider Navigation Buttons (CTA Slider Buttons) */}
            <button
              onClick={prevSlide}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next Slide"
            >
              <ChevronRight size={32} />
            </button>

            {/* Pagination Indicators */}
            <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-3 z-10">
              {bannerImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white'
                    }`}
                />
              ))}
            </div>
          </div>


        </section>

        {/* Stats Overlay */}
        <section className="relative z-20 px-4 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-14 text-center group hover:bg-slate-50 transition-colors">
                  <div className="text-6xl font-black text-purple-950 mb-3 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Vidisha */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-purple-900 mb-6">Why Choose Vidisha</h2>
              <div className="h-2 w-32 bg-yellow-400 mx-auto rounded-full shadow-lg"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vidishaFeatures.map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-purple-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-yellow-400 transition-colors">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-8 h-8 text-purple-900' })}
                  </div>
                  <h3 className="text-xl font-black mb-3 group-hover:text-white text-purple-950 transition-colors">{feature.title}</h3>
                  <p className="font-medium text-slate-500 leading-relaxed group-hover:text-purple-100 transition-colors text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-indigo-50/50 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="text-purple-600 font-bold uppercase tracking-widest text-xs mb-2 block">Got Questions?</span>
              <h2 className="text-5xl font-black text-purple-900 mb-6">Frequently Asked Questions</h2>
              <div className="h-2 w-24 bg-yellow-400 mx-auto rounded-full shadow-lg"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-[1.5rem] border transition-all duration-300 overflow-hidden ${openFaq === idx
                    ? 'border-purple-200 shadow-xl ring-2 ring-purple-100'
                    : 'border-slate-100 shadow-md hover:shadow-lg hover:border-purple-100'
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left gap-4"
                  >
                    <span className={`text-lg font-bold transition-colors ${openFaq === idx ? 'text-purple-900' : 'text-slate-700'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === idx ? 'bg-purple-900 text-white rotate-180' : 'bg-slate-100 text-slate-500 hover:bg-purple-100 hover:text-purple-900'
                      }`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-8 pb-8 pt-0">
                      <div className="h-px w-full bg-slate-100 mb-6"></div>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates & Updates */}
        <section className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black text-purple-900">Important Dates & Updates</h2>
              <div className="h-2 w-32 bg-yellow-400 mx-auto mt-6 rounded-full shadow-lg"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {events.map((event: any, idx) => (
                <div key={idx} className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  {/* Image Slot */}
                  <div className={`h-56 bg-indigo-50 border-b border-indigo-100 relative group-hover:bg-indigo-100 transition-colors flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden ${(event as any).image ? 'p-0' : 'p-6'}`}>
                    {(event as any).image ? (
                      <img
                        src={(event as any).image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 border-2 border-dashed border-indigo-200/50 m-4 rounded-[2rem] group-hover:border-indigo-300 transition-colors"></div>
                        <ImageIcon className="w-10 h-10 text-indigo-300 mb-3 relative z-10 group-hover:scale-110 transition-transform group-hover:text-indigo-500" />
                        <span className="text-xs font-black uppercase tracking-widest text-indigo-300 relative z-10 group-hover:text-indigo-600 transition-colors">Image Slot {idx + 1}</span>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-900 text-white">
                        {event.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-purple-950 mb-3 leading-tight">{event.title}</h3>
                    <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed flex-1">
                      {event.details}
                    </p>

                    <button className="w-full py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all bg-yellow-400 text-purple-950 hover:bg-yellow-500 shadow-lg hover:shadow-yellow-400/50">
                      {event.action} <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Workflow */}
        <section className="py-32 bg-purple-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400/5 -skew-x-12 translate-x-1/4"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="lg:w-1/2">
                <h2 className="text-5xl font-black mb-10 leading-[1.15]">Excellence is <br /><span className="text-yellow-400 underline decoration-yellow-400/30 underline-offset-8">Hardcoded</span> in our Students</h2>
                <ul className="space-y-8">
                  {[
                    "Intensive curriculum for MPC and BiPC streams",
                    "Weekly mock tests for JEE and NEET preparation",
                    "Dedicated doubt-clearing sessions with senior faculty",
                    "Holistic development and personality grooming"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-6 text-xl font-medium">
                      <CheckCircle2 className="text-yellow-400 shrink-0" size={32} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-16 bg-white text-purple-950 font-black px-16 py-6 rounded-3xl hover:bg-yellow-400 transition-all shadow-2xl text-lg uppercase tracking-widest">
                  Download Academic Brochure
                </button>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" className="w-full h-64 object-cover rounded-[3rem] shadow-2xl border-4 border-white/10" alt="Students Studying" />
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" className="w-full h-80 object-cover rounded-[3rem] shadow-2xl border-4 border-white/10" alt="Laboratory" />
                </div>
                <div className="space-y-6 pt-16">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" className="w-full h-80 object-cover rounded-[3rem] shadow-2xl border-4 border-white/10" alt="Classroom" />
                  <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=400" className="w-full h-64 object-cover rounded-[3rem] shadow-2xl border-4 border-white/10" alt="Library" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
