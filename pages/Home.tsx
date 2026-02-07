import React, { useState, useEffect } from 'react';
import { BookOpen, Award, Users, GraduationCap, ArrowRight, CheckCircle2, FlaskConical, ChevronLeft, ChevronRight, Monitor, Home as HomeIcon, Bus, Calendar, MapPin, Image as ImageIcon, Plus, Minus, X, ChevronDown, Download } from 'lucide-react';

const bannerImages = [
  "/banner_slide_1.jpg",
  "/banner_slide_2.jpg",
  "/banner_slide_3.jpg",
  "/banner_slide_4.jpg"
];

interface HomeProps {
  onNavigate: (tab: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'Success Rate', value: '98%' },
    { label: 'Students Enrolled', value: '6000+' },
    { label: 'Expert Faculty', value: '100+' },
  ];

  const events = [
    {
      title: 'Admissions Open - 2025-26 Academic Year',
      date: 'Now Open',
      details: 'Limited seats for MPC (JEE) and BiPC (NEET) streams',
      action: 'Apply Now',
      isPrimary: true,
      image: '/admission_time.jpg'
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
      action: 'Register',
      image: '/parents_meet.jpg'
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
    },
    {
      title: 'Air-Conditioned Smart Classrooms',
      description: 'State-of-the-art learning environment with digital teaching systems for enhanced understanding',
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState('Events');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = ['Events', 'Labs', 'Classrooms', 'Achievements'];

  const images = [
    // Events - 11 slots
    { id: 1, url: '/events0.JPG', title: 'Event 0', cat: 'Events' },
    { id: 2, url: '/events1.JPG', title: 'Event 1', cat: 'Events' },
    { id: 3, url: '/events2.JPG', title: 'Event 2', cat: 'Events' },
    { id: 4, url: '/events3.JPG', title: 'Event 3', cat: 'Events' },
    { id: 5, url: '/events4.JPG', title: 'Event 4', cat: 'Events' },
    { id: 6, url: '/events5.JPG', title: 'Event 5', cat: 'Events' },
    { id: 7, url: '/events6.JPG', title: 'Event 6', cat: 'Events' },
    { id: 8, url: '/events7.JPG', title: 'Event 7', cat: 'Events' },
    { id: 9, url: '/events8.JPG', title: 'Event 8', cat: 'Events' },
    { id: 10, url: '/events9.JPG', title: 'Event 9', cat: 'Events' },
    { id: 11, url: '/events10.JPG', title: 'Event 10', cat: 'Events' },

    // Labs
    { id: 12, url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800', title: 'Physics Research Lab', cat: 'Labs' },
    { id: 13, url: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=800', title: 'Biology Lab Session', cat: 'Labs' },

    // Classrooms
    { id: 14, url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', title: 'Interactive MPC Classroom', cat: 'Classrooms' },
    { id: 15, url: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800', title: 'Central Library', cat: 'Classrooms' },

    // Achievements
    { id: 16, url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', title: 'Science Fair Winners', cat: 'Achievements' },
    { id: 17, url: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800', title: 'Main Campus Entrance', cat: 'Achievements' },
  ];

  const filteredImages = images.filter(i => i.cat === filter);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-500">
      <div className="relative w-full max-w-lg animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 mt-20">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute -top-6 -right-6 md:-right-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-purple-950 rounded-full backdrop-blur-xl transition-all z-50 border border-white/20 shadow-2xl group"
          aria-label="Close Popup"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
        <div
          className="relative bg-white rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/20 cursor-pointer"
          onClick={() => {
            setShowPopup(false);
            onNavigate('contact');
          }}
        >
          <img
            src="/popup_announcement.jpg"
            alt="Admissions Open 2026-27"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {popupContent}
      <div className="animate-in fade-in duration-700">
        <section className="flex flex-col w-full text-center">
          <div className="w-full z-40 bg-yellow-400 py-2 lg:py-2.5 border-b border-purple-900/20 shadow-sm overflow-hidden relative">
            <div className="animate-marquee whitespace-nowrap flex text-[8px] lg:text-[11px] font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-purple-950">
              <span className="px-4 lg:px-6">{marqueeText}</span>
              <span className="px-4 lg:px-6">{marqueeText}</span>
              <span className="px-4 lg:px-6">{marqueeText}</span>
              <span className="px-4 lg:px-6">{marqueeText}</span>
            </div>
          </div>

          <div className="w-full relative group [perspective:3000px]">
            <div className="w-full relative overflow-hidden min-h-[200px] sm:min-h-[400px] lg:min-h-[500px]">
              {/* Invisible anchor image to maintain h-auto aspect ratio responsiveness */}
              <img src={bannerImages[0]} alt="spacer" className="w-full h-auto block opacity-0 pointer-events-none" aria-hidden="true" />

              <div className="absolute inset-0 w-full h-full [transform-style:preserve-3d]">
                {bannerImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out origin-left [backface-visibility:hidden] ${index === currentSlide
                        ? 'z-20 [transform:rotateY(0deg)] opacity-100 invisible:opacity-0'
                        : index < currentSlide
                          ? 'z-10 [transform:rotateY(-150deg)] opacity-0 pointer-events-none'
                          : 'z-0 [transform:rotateY(0deg)] opacity-0 pointer-events-none'
                      }`}
                  >
                    <img src={img} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
                    {/* Depth shadow vignette during transition */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent transition-opacity duration-1000 ${index === currentSlide ? 'opacity-0' : 'opacity-100'}`}></div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={prevSlide} className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10">
              <ChevronLeft size={32} />
            </button>
            <button onClick={nextSlide} className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-10">
              <ChevronRight size={32} />
            </button>

            <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-3 z-10">
              {bannerImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/50 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-20 px-4 mt-6 md:mt-12 text-center">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl border border-slate-100 grid grid-cols-3 divide-x divide-slate-100 overflow-hidden">
              {stats.map((stat, idx) => (
                <div key={idx} className="py-4 md:py-10 px-2 text-center group hover:bg-slate-50 transition-colors">
                  <div className="text-xl sm:text-3xl md:text-5xl font-black text-purple-950 mb-0.5 md:mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-[6px] sm:text-[8px] md:text-[9px] font-black uppercase tracking-wider md:tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white relative text-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8 lg:mb-16">
              <h2 className="text-2xl lg:text-5xl font-black text-purple-900 mb-4 lg:mb-6">Why Choose Vidisha</h2>
              <div className="h-1.5 lg:h-2 w-20 lg:w-32 bg-yellow-400 mx-auto rounded-full shadow-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {vidishaFeatures.map((feature, idx) => (
                <div key={idx} className="group p-6 lg:p-8 rounded-2xl lg:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-purple-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 shadow-sm group-hover:bg-yellow-400 transition-colors mx-auto">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-6 h-6 lg:w-8 lg:h-8 text-purple-900' })}
                  </div>
                  <h3 className="text-lg lg:text-xl font-black mb-2 lg:mb-3 group-hover:text-white text-purple-950 transition-colors text-center">{feature.title}</h3>
                  <p className="font-medium text-slate-500 leading-relaxed group-hover:text-purple-100 transition-colors text-xs lg:text-sm text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="bg-purple-950 rounded-2xl p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-yellow-400/5 rotate-12 -translate-y-1/2 rounded-[50%]"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
              {/* Image Slot - Left Side */}
              <div className="w-full lg:w-[45%]">
                <div className="aspect-[16/10] bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                  <img
                    src="/book campus.jpg"
                    alt="Campus Perspective"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="text-white/10 font-black uppercase tracking-[0.2em] text-sm">Image Placement Slot</div>';
                    }}
                  />
                </div>
              </div>

              {/* Content Slot - Right Side */}
              <div className="w-full lg:w-[55%] text-center lg:text-left">
                <p className="text-lg lg:text-2xl text-purple-50 leading-relaxed font-semibold mb-8 lg:mb-12">
                  Choose your path to success with our specialized streams: <span className="text-yellow-400">MPC (Mathematics, Physics, Chemistry)</span> integrated with IIT-JEE coaching, or <span className="text-yellow-400">BiPC (Biology, Physics, Chemistry)</span> combined with NEET preparation.
                </p>

                <button
                  onClick={() => onNavigate('contact')}
                  className="group relative inline-flex items-center gap-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-black px-8 lg:px-12 py-4 lg:py-5 rounded-xl hover:bg-yellow-400 hover:text-purple-950 transition-all duration-500 text-[10px] lg:text-xs tracking-[0.2em] uppercase shadow-lg shadow-yellow-400/10"
                >
                  Book Campus Visit
                  <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="py-12 lg:py-20 bg-slate-50 relative overflow-hidden text-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10 lg:mb-20">
              <h2 className="text-2xl lg:text-5xl font-black text-purple-900">Important Dates & Updates</h2>
              <div className="h-1.5 lg:h-2 w-20 lg:w-32 bg-yellow-400 mx-auto mt-4 lg:mt-6 rounded-full shadow-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {events.map((event: any, idx) => (
                <div key={idx} className="group bg-white rounded-2xl lg:rounded-[2.5rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className={`h-40 lg:h-56 bg-indigo-50 border-b border-indigo-100 relative group-hover:bg-indigo-100 transition-colors flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden ${event.image ? 'p-0' : 'p-4 lg:p-6'}`}>
                    {event.image ? (
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <>
                        <div className="absolute inset-0 border-2 border-dashed border-indigo-200/50 m-3 lg:m-4 rounded-xl lg:rounded-[2rem] group-hover:border-indigo-300 transition-colors"></div>
                        <ImageIcon className="w-8 h-8 lg:w-10 lg:h-10 text-indigo-300 mb-2 lg:mb-3 relative z-10 group-hover:scale-110 transition-transform group-hover:text-indigo-500" />
                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-indigo-300 relative z-10 group-hover:text-indigo-600 transition-colors">Image Slot {idx + 1}</span>
                      </>
                    )}
                  </div>
                  <div className="p-5 lg:p-8 flex flex-col flex-1 text-left">
                    <h3 className="text-base lg:text-xl font-black text-purple-950 mb-2 lg:mb-3 leading-tight">{event.title}</h3>
                    <p className="text-slate-500 text-xs lg:text-sm font-medium mb-4 lg:mb-8 leading-relaxed flex-1">{event.details}</p>
                    <button className="w-full py-3 lg:py-4 px-4 rounded-xl font-black text-[10px] lg:text-xs uppercase tracking-[0.15em] lg:tracking-[0.2em] flex items-center justify-center gap-2 transition-all bg-yellow-400 text-purple-950 hover:bg-yellow-500 shadow-lg hover:shadow-yellow-400/50 group/btn">
                      <span className="text-center leading-tight">{event.action}</span>
                      <ArrowRight size={12} className="lg:w-3.5 lg:h-3.5 shrink-0 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-20 bg-white relative overflow-hidden text-center">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-yellow-500 font-black uppercase tracking-[0.3em] text-[10px] block mb-2">Visual Journey</span>
              <h2 className="text-3xl lg:text-5xl font-black text-purple-950">Campus <span className="text-silver-400">Gallery</span></h2>
              <div className="h-1 lg:h-1.5 w-16 lg:w-24 bg-yellow-400 mx-auto mt-4 rounded-full shadow-lg"></div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-8 mt-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border-b-2 ${filter === cat
                    ? 'text-purple-950 border-purple-950'
                    : 'text-slate-400 border-transparent hover:text-purple-400'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Main Masonry Grid */}
            <div className="relative">
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-[2px] space-y-[2px]">
                {filteredImages.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => setSelectedImage(img)}
                    className="relative group cursor-pointer break-inside-avoid overflow-hidden bg-white"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-auto transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500">
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest text-purple-950 shadow-2xl hover:bg-purple-950 hover:text-white transition-all"
                        >
                          <Download size={14} />
                          Save
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100000] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              />
              <div className="absolute -bottom-12 left-0 right-0 flex justify-between items-center text-white/70">
                <span className="text-xs font-bold uppercase tracking-widest">{selectedImage.cat} — {selectedImage.title}</span>
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <Download size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Download Original</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <section className="py-12 lg:py-20 bg-purple-950 text-white overflow-hidden relative text-center">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-400/5 -skew-x-12 translate-x-1/4 hidden lg:block"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
              <div className="lg:w-1/2 text-left">
                <h2 className="text-2xl lg:text-5xl font-black mb-6 lg:mb-10 leading-tight lg:leading-[1.15]">Excellence is <br className="hidden lg:block" /><span className="text-yellow-400 underline decoration-yellow-400/30 underline-offset-4 lg:underline-offset-8">Hardcoded</span> in our Students</h2>
                <ul className="space-y-4 lg:space-y-6">
                  {["Intensive curriculum for MPC and BiPC streams", "Weekly mock tests for JEE and NEET preparation", "Dedicated doubt-clearing sessions with senior faculty", "Holistic development and personality grooming"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 lg:gap-6 text-sm lg:text-lg font-medium">
                      <CheckCircle2 className="text-yellow-400 shrink-0 w-5 h-5 lg:w-7 lg:h-7 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/academic_brochure.pdf" download="Vidisha_Academic_Brochure.pdf" className="mt-8 lg:mt-12 bg-white text-purple-950 font-black px-6 lg:px-12 py-4 lg:py-5 rounded-2xl lg:rounded-3xl hover:bg-yellow-400 transition-all shadow-2xl text-xs lg:text-base uppercase tracking-widest inline-flex items-center gap-2 lg:gap-3 group">
                  <Download className="w-4 h-4 lg:w-5 lg:h-5 group-hover:animate-bounce" />
                  <span className="hidden sm:inline">Download Academic Brochure</span>
                  <span className="sm:hidden">Brochure</span>
                </a>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-3 lg:gap-6 w-full">
                <div className="space-y-3 lg:space-y-6">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" className="w-full h-32 lg:h-48 object-cover rounded-2xl lg:rounded-[3rem] shadow-2xl border-2 lg:border-4 border-white/10" alt="Students Studying" />
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" className="w-full h-40 lg:h-64 object-cover rounded-2xl lg:rounded-[3rem] shadow-2xl border-2 lg:border-4 border-white/10" alt="Laboratory" />
                </div>
                <div className="space-y-3 lg:space-y-6 pt-6 lg:pt-12">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=400" className="w-full h-40 lg:h-64 object-cover rounded-2xl lg:rounded-[3rem] shadow-2xl border-2 lg:border-4 border-white/10" alt="Classroom" />
                  <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=400" className="w-full h-32 lg:h-48 object-cover rounded-2xl lg:rounded-[3rem] shadow-2xl border-2 lg:border-4 border-white/10" alt="Library" />
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
