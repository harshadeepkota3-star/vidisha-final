import React, { useState, useEffect } from 'react';
import { BookOpen, Award, Users, GraduationCap, ArrowRight, FlaskConical, ChevronLeft, ChevronRight, Monitor, Home as HomeIcon, Bus, Calendar, MapPin, Image as ImageIcon, Plus, Minus, X, ChevronDown, Download } from 'lucide-react';

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
    { label: 'Students Enrolled', value: '5200+' },
    { label: 'Students Passed Out', value: '4500+' },
    { label: 'Expert Faculty', value: '150+' },
  ];

  const events = [
    {
      title: 'Admissions Open - 2026-27 Academic Year',
      date: 'Now Open',
      details: 'Limited seats for MPC (JEE) and BiPC (NEET) streams',
      action: 'Apply Now',
      isPrimary: true,
      image: '/admission_time.jpg'
    },
    {
      title: 'Campus Details',
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
      description: 'Separate experienced faculty for IIT-JEE/NEET and board preparation',
      icon: <img src="/icon/expert_faculty.png" alt="Experienced Faculty" className="w-full h-full object-contain" />
    },
    {
      title: 'Advanced Laboratories',
      description: 'Well-equipped Physics, Chemistry, and Biology labs for hands-on practical learning',
      icon: <img src="/icon/science_labs.png" alt="Science Labs" className="w-full h-full object-contain" />
    },
    {
      title: 'Hostel Facilities',
      description: 'Separate hostel accommodation for boys and girls with nutritious, home-like food',
      icon: <img src="/icon/hostel_facilities.png" alt="Hostel Facilities" className="w-full h-full object-contain" />
    },
    {
      title: 'Transportation Available',
      description: 'Safe and reliable transport facility for day-scholar students across Vijayawada',
      icon: <img src="/icon/transportation.png" alt="Transportation" className="w-full h-full object-contain" />
    },
    {
      title: 'Integrated Coaching',
      description: 'Board preparation combined with IIT-JEE Mains, Advanced, and NEET coaching under one roof',
      icon: <img src="/icon/library.png" alt="Integrated Coaching" className="w-full h-full object-contain" />
    },
    {
      title: 'Air-Conditioned Smart Classrooms',
      description: 'State-of-the-art learning environment with digital teaching systems for enhanced understanding',
      icon: <img src="/icon/smart_classrooms.png" alt="Smart Classrooms" className="w-full h-full object-contain" />
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState('Events');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

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
    { id: 12, url: '/labs0.jpeg', title: 'Physics Research Lab', cat: 'Labs' },
    { id: 13, url: '/labs1.jpeg', title: 'Chemistry Lab Session', cat: 'Labs' },
    { id: 14, url: '/labs2.jpeg', title: 'Biology Lab Session', cat: 'Labs' },
    { id: 15, url: '/labs3.jpeg', title: 'Lab Session', cat: 'Labs' },
    { id: 16, url: '/labs4.jpeg', title: 'Biology Lab Session', cat: 'Labs' },
    { id: 17, url: '/labs5.jpeg', title: 'Lab Session', cat: 'Labs' },
    { id: 18, url: '/labs6.jpeg', title: 'Lab Session', cat: 'Labs' },
    { id: 19, url: '/labs7.jpeg', title: 'Physics Lab Session', cat: 'Labs' },
    { id: 20, url: '/labs8.jpeg', title: 'Lab Session', cat: 'Labs' },
    { id: 21, url: '/labs9.jpeg', title: 'Lab Session', cat: 'Labs' },

    // Classrooms
    { id: 22, url: '/classrooms0.jpg', title: 'Classroom 0', cat: 'Classrooms' },
    { id: 23, url: '/classrooms1.jpg', title: 'Classroom 1', cat: 'Classrooms' },
    { id: 24, url: '/classrooms2.jpeg', title: 'Classroom 2', cat: 'Classrooms' },
    { id: 25, url: '/classrooms3.jpeg', title: 'Classroom 3', cat: 'Classrooms' },
    { id: 26, url: '/classrooms4.jpeg', title: 'Classroom 4', cat: 'Classrooms' },
    { id: 27, url: '/classrooms5.jpg', title: 'Classroom 5', cat: 'Classrooms' },
    { id: 28, url: '/classrooms6.jpg', title: 'Classroom 6', cat: 'Classrooms' },
    { id: 29, url: '/classrooms7.jpg', title: 'Classroom 7', cat: 'Classrooms' },
    // Achievements
    { id: 30, url: '/achievement0.jpg', title: 'Achievement 0', cat: 'Achievements' },
    { id: 31, url: '/achievement1.jpg', title: 'Achievement 1', cat: 'Achievements' },
    { id: 32, url: '/achievement2.jpg', title: 'Achievement 2', cat: 'Achievements' },
    { id: 33, url: '/achievement3.jpg', title: 'Achievement 3', cat: 'Achievements' },
    { id: 34, url: '/achievement4.jpg', title: 'Achievement 4', cat: 'Achievements' },
    { id: 35, url: '/achievement5.jpg', title: 'Achievement 5', cat: 'Achievements' },
    { id: 36, url: '/achievement6.jpg', title: 'Achievement 6', cat: 'Achievements' },
    { id: 37, url: '/achievement7.jpg', title: 'Achievement 7', cat: 'Achievements' },
    { id: 38, url: '/achievement8.jpg', title: 'Achievement 8', cat: 'Achievements' },
  ];

  const dropdownItems = [
    {
      title: "Dual Excellence",
      content: "Intermediate board preparation integrated with competitive exam coaching (IIT-JEE & NEET)"
    },
    {
      title: "Expert Mentorship",
      content: "Highly experienced faculty who understand both board patterns and competitive exam requirements"
    },
    {
      title: "Modern Infrastructure",
      content: "Air-conditioned smart classrooms, digital learning systems, and fully-equipped science laboratories"
    },
    {
      title: "Holistic Development",
      content: "Focus on academics, discipline, character building, and life skills"
    },
    {
      title: "Complete Support",
      // Edited to reflect the user's specific text
      content: "Academic monitoring, progress reviews, doubt-clearing sessions, and personalized study plans"
    },
    {
      title: "Residential & Day Scholar Options",
      content: "Hostel facilities with home-like food and transportation for day scholars"
    }
  ];

  const filteredImages = images.filter(i => i.cat === filter);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('vidishaPopupShown');
    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('vidishaPopupShown', 'true');
      }, 500);
      return () => clearTimeout(timer);
    }
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

  const marqueeText = "ADMISSIONS OPEN FOR 2026-27 ACADEMIC YEAR • EXCLUSIVE MPC & BiPC STREAMS • INTEGRATED IIT-JEE & NEET COACHING • SCHOLARSHIPS AVAILABLE FOR MERIT STUDENTS • ENROL NOW FOR ACADEMIC EXCELLENCE • ";

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
          className="relative bg-white rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/20 cursor-pointer"
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
      <div
        className="animate-in fade-in duration-700 relative min-h-screen"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
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
            <div className="w-full relative overflow-hidden sm:min-h-[400px] lg:min-h-[500px] bg-[#f8f9fa]">
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
                    <img src={img} alt={`Banner ${index + 1}`} className="w-full h-full object-contain sm:object-cover" />
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
            <div className="bg-slate-200/50 rounded-xl md:rounded-2xl shadow-xl border border-white/40 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-md py-6 md:py-12 px-4 text-center group hover:bg-white/40 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-4xl md:text-5xl font-black text-purple-950 mb-1 md:mb-3 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-800 group-hover:text-purple-700 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 relative text-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8 lg:mb-16">
              <h2 className="text-2xl lg:text-5xl font-black text-purple-900 mb-4 lg:mb-6">Why Choose Vidisha</h2>
              <div className="h-1.5 lg:h-2 w-20 lg:w-32 bg-yellow-400 mx-auto rounded-full shadow-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
              {vidishaFeatures.map((feature, idx) => (
                <div key={idx} className="group p-6 lg:p-8 rounded-xl lg:rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-purple-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-4 lg:mb-6 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-black mb-2 lg:mb-3 group-hover:text-white text-purple-950 transition-colors text-center">{feature.title}</h3>
                  <p className="font-bold text-slate-900 leading-relaxed group-hover:text-purple-100 transition-colors text-xs lg:text-sm text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 mb-20">
          <div className="bg-purple-950/90 backdrop-blur-md rounded-2xl p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl">
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

        <section className="py-12 lg:py-20 relative overflow-hidden text-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10 lg:mb-20">
              <h2 className="text-2xl lg:text-5xl font-black text-purple-900">Important Dates & Updates</h2>
              <div className="h-1.5 lg:h-2 w-20 lg:w-32 bg-yellow-400 mx-auto mt-4 lg:mt-6 rounded-full shadow-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
              {events.map((event: any, idx) => (
                <div key={idx} className="group bg-white/60 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-white/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className={`h-40 lg:h-56 bg-indigo-50 border-b border-indigo-100 relative group-hover:bg-indigo-100 transition-colors flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden ${event.image ? 'p-0' : 'p-4 lg:p-6'}`}>
                    {event.image ? (
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <>
                        <div className="absolute inset-0 border-2 border-dashed border-indigo-200/50 m-3 lg:m-4 rounded-xl lg:rounded-xl group-hover:border-indigo-300 transition-colors"></div>
                        <ImageIcon className="w-8 h-8 lg:w-10 lg:h-10 text-indigo-300 mb-2 lg:mb-3 relative z-10 group-hover:scale-110 transition-transform group-hover:text-indigo-500" />
                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-indigo-300 relative z-10 group-hover:text-indigo-600 transition-colors">Image Slot {idx + 1}</span>
                      </>
                    )}
                  </div>
                  <div className="p-5 lg:p-8 flex flex-col flex-1 text-left">
                    <h3 className="text-base lg:text-xl font-black text-purple-950 mb-2 lg:mb-3 leading-tight">{event.title}</h3>
                    <p className="text-slate-900 text-xs lg:text-sm font-bold mb-4 lg:mb-8 leading-relaxed flex-1">{event.details}</p>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full py-3 lg:py-4 px-4 rounded-xl font-black text-[10px] lg:text-xs uppercase tracking-[0.15em] lg:tracking-[0.2em] flex items-center justify-center gap-2 transition-all bg-yellow-400 text-purple-950 hover:bg-yellow-500 shadow-lg hover:shadow-yellow-400/50 group/btn"
                    >
                      <span className="text-center leading-tight">{event.action}</span>
                      <ArrowRight size={12} className="lg:w-3.5 lg:h-3.5 shrink-0 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:pt-4 lg:pb-20 relative overflow-hidden text-center">
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
                    className="relative group cursor-pointer break-inside-avoid overflow-hidden bg-white/20 backdrop-blur-[2px]"
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

        <section className="py-12 lg:py-24 bg-purple-950/95 backdrop-blur-sm text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-400/[0.03] -skew-x-12 translate-x-1/4 hidden lg:block"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="lg:w-[55%] text-left">
                <h2 className="text-3xl lg:text-5xl font-black mb-6 lg:mb-8 leading-tight lg:leading-[1.15]">
                  A Foundation for <span className="text-yellow-400">Dreams</span>,<br />
                  A Pathway to <span className="text-yellow-400">Success</span>
                </h2>

                <p className="text-sm lg:text-lg text-purple-100 mb-10 leading-relaxed font-bold max-w-2xl">
                  Vidisha Junior College stands as Vijayawada's dedicated institution committed to shaping the next generation of engineers, doctors, and leaders. Founded in 2023 with a powerful vision to ensure every household has an engineer and a doctor, we represent more than just an educational institution, we are a promise of transformation.
                </p>

                <div className="space-y-2 mb-12">
                  {dropdownItems.map((item, i) => (
                    <div
                      key={i}
                      className="group transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                        className="w-full py-4 flex items-center justify-between gap-4 text-left group"
                      >
                        <div className="flex items-center gap-5">
                          <img
                            src="/footer_logo.png"
                            alt="Vidisha Logo"
                            className={`w-5 h-5 object-contain transition-all duration-300 ${openAccordion === i ? 'opacity-100 scale-110' : 'opacity-20 group-hover:opacity-40'
                              }`}
                          />
                          <span className={`font-black text-sm lg:text-base uppercase tracking-widest transition-all duration-300 ${openAccordion === i ? 'text-yellow-400 translate-x-1' : 'text-white/90'
                            }`}>
                            {item.title}
                          </span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-white/30 transition-transform duration-500 ${openAccordion === i ? 'rotate-180 text-yellow-400' : 'group-hover:text-white'}`}
                        />
                      </button>
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordion === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="pb-6 pt-1 text-slate-200 text-xs lg:text-sm font-bold leading-relaxed pl-10 pr-4">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="/academic_brochure.pdf" download="Vidisha_Academic_Brochure.pdf" className="bg-white text-purple-950 font-black px-8 lg:px-12 py-4 lg:py-5 rounded-2xl lg:rounded-xl hover:bg-yellow-400 transition-all shadow-2xl text-[10px] lg:text-sm uppercase tracking-widest inline-flex items-center gap-3 lg:gap-4 group">
                  <Download className="w-4 h-4 lg:w-5 lg:h-5 group-hover:animate-bounce" />
                  <span>Download Academic Brochure</span>
                </a>
              </div>
              <div className="lg:w-[45%] lg:mt-0 mt-12 grid grid-cols-2 gap-3 lg:gap-5 w-full">
                <div className="space-y-3 lg:space-y-5">
                  <img src="/classrooms1.jpg" className="w-full h-32 lg:h-44 object-cover rounded-xl lg:rounded-2xl shadow-2xl border-2 border-white/10" alt="Students Studying" />
                  <img src="/labs1.jpeg" className="w-full h-44 lg:h-64 object-cover rounded-xl lg:rounded-2xl shadow-2xl border-2 border-white/10" alt="Laboratory" />
                </div>
                <div className="space-y-3 lg:space-y-5 pt-8 lg:pt-16">
                  <img src="/events3.JPG" className="w-full h-44 lg:h-64 object-cover rounded-xl lg:rounded-2xl shadow-2xl border-2 border-white/10" alt="Classroom" />
                  <img src="/classrooms2.jpeg" className="w-full h-32 lg:h-44 object-cover rounded-xl lg:rounded-2xl shadow-2xl border-2 border-white/10" alt="Library" />
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
