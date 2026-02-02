
import React from 'react';
import { BookOpen, Award, Users, GraduationCap, ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { label: 'Success Rate', value: '98%' },
    { label: 'Students Enrolled', value: '1200+' },
    { label: 'Expert Faculty', value: '45+' },
  ];

  const features = [
    {
      title: 'Academic Precision',
      description: 'Our curriculum for MPC and BiPC is designed for depth and clarity, ensuring students master every concept with precision.',
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      link: "View Curriculum"
    },
    {
      title: 'Entrance Focus',
      description: 'Integrated coaching for IIT-JEE (MPC) and NEET (BiPC) to prepare students for the most rigorous national entrance exams.',
      icon: <Award className="w-8 h-8 text-purple-600" />,
      link: "Exam Schedule"
    },
    {
      title: 'Modern Laboratories',
      description: 'State-of-the-art Physics, Chemistry, and Biology labs to provide hands-on experience for both MPC and BiPC students.',
      icon: <FlaskConical className="w-8 h-8 text-purple-600" />,
      link: "Tour our Labs"
    },
    {
      title: 'Personalized Mentoring',
      description: 'Dedicated faculty members provide one-on-one guidance to help students navigate their MPC and BiPC career paths.',
      icon: <Users className="w-8 h-8 text-purple-600" />,
      link: "Meet Counselors"
    }
  ];

  const milestones = [
    { title: "MPC Rankers 2024", category: "Academic Results", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" },
    { title: "BiPC Toppers 2024", category: "Academic Results", img: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=800" },
    { title: "Advanced Physics Lab", category: "Campus Facility", img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800" },
    { title: "Convocation Ceremony", category: "Campus Event", img: "https://images.unsplash.com/photo-1523580494863-6f303122469a?auto=format&fit=crop&q=80&w=800" },
  ];

  const marqueeText = "ADMISSIONS OPEN FOR 2025-26 ACADEMIC YEAR • EXCLUSIVE MPC & BiPC STREAMS • INTEGRATED IIT-JEE & NEET COACHING • SCHOLARSHIPS AVAILABLE FOR MERIT STUDENTS • ENROL NOW FOR ACADEMIC EXCELLENCE • ";

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        {/* Slim Scrolling Strip - Positioned for better alignment under navbar */}
        <div className="absolute top-0 left-0 w-full z-40 bg-yellow-400 py-2.5 border-b border-purple-900/20 shadow-lg overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex text-[11px] font-black uppercase tracking-[0.3em] text-purple-950">
            <span className="px-6">{marqueeText}</span>
            <span className="px-6">{marqueeText}</span>
            <span className="px-6">{marqueeText}</span>
            <span className="px-6">{marqueeText}</span>
          </div>
        </div>

        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1920" 
            alt="College Campus" 
            className="w-full h-full object-cover"
          />
          {/* Enhanced gradient for text visibility - darker left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-purple-900/70 to-purple-900/10"></div>
          {/* Subtle noise or darkening for better contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/30 border border-yellow-400/50 text-yellow-300 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-10 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(250,204,21,0.6)]"></span>
              Admissions Open 2025-26
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Shape Your Future in <span className="text-yellow-400">MPC & BiPC.</span>
            </h1>
            <p className="text-xl text-slate-100 mb-12 leading-relaxed max-w-xl font-medium drop-shadow-md">
              Professional academic coaching, disciplined environment, and state-of-the-art facilities for aspiring doctors and engineers.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#contact" className="bg-yellow-400 hover:bg-yellow-500 text-purple-950 font-black py-4.5 px-12 rounded-2xl transition-all shadow-2xl hover:shadow-yellow-400/40 active:scale-95 flex items-center gap-3 text-lg">
                Apply for Admission <ArrowRight size={22} />
              </a>
              <a href="#courses" className="bg-white/10 hover:bg-white/20 text-white font-black py-4.5 px-12 rounded-2xl backdrop-blur-md transition-all border-2 border-white/30 text-lg">
                Explore Streams
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overlay */}
      <section className="relative -mt-24 z-20 px-4">
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

      {/* Academic Highlights */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-purple-900 mb-6">Academic Milestones</h2>
              <p className="text-xl text-slate-500 font-medium">Celebrating the achievements of our MPC and BiPC students in national level entrance exams.</p>
            </div>
            <a href="#gallery" className="text-purple-700 font-black flex items-center gap-3 group border-b-4 border-yellow-400 pb-2 text-lg uppercase tracking-wider">
              View All Achievements <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {milestones.map((milestone, i) => (
              <div key={i} className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl">
                <img src={milestone.img} alt={milestone.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-900/10 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <span className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.3em]">{milestone.category}</span>
                  <h3 className="text-2xl font-black text-white mt-2 leading-tight">{milestone.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-purple-900">Education with Discipline</h2>
            <div className="h-2 w-32 bg-yellow-400 mx-auto mt-8 rounded-full shadow-lg"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all border border-white hover:border-purple-200 group relative">
                <div className="mb-10 p-5 bg-purple-50 rounded-[2rem] w-fit group-hover:bg-purple-900 group-hover:text-white transition-all shadow-md">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-10 h-10' })}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6">{feature.title}</h3>
                <p className="text-slate-500 mb-10 leading-relaxed text-sm font-medium">
                  {feature.description}
                </p>
                <a href="#" className="text-purple-700 font-black text-[10px] uppercase tracking-[0.3em] hover:text-purple-900 inline-flex items-center gap-3 group/link">
                  Learn more <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
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
              <h2 className="text-5xl font-black mb-10 leading-[1.15]">Excellence is <br/><span className="text-yellow-400 underline decoration-yellow-400/30 underline-offset-8">Hardcoded</span> in our Students</h2>
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
  );
};

export default Home;
