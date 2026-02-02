
import React from 'react';
import { Clock, GraduationCap, ChevronRight, BookOpen, FlaskConical, Calculator, Stethoscope } from 'lucide-react';

const streams = [
  { 
    id: 1, 
    title: "MPC Stream", 
    subtitle: "Mathematics, Physics, Chemistry",
    description: "The premier stream for students aspiring for engineering excellence. Focuses on IIT-JEE (Mains & Advanced), EAPCET, and BITSAT.",
    duration: "2 Year Program", 
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600", 
    fee: "Competitive",
    icon: <Calculator className="w-10 h-10 text-purple-700" />,
    subjects: ["Advanced Mathematics", "Kinematics & Dynamics", "Organic & Inorganic Chemistry"]
  },
  { 
    id: 2, 
    title: "BiPC Stream", 
    subtitle: "Biology, Physics, Chemistry",
    description: "The ideal pathway for future medical professionals. Includes intensive preparation for NEET, AIIMS, and Veterinary entrance exams.",
    duration: "2 Year Program", 
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=600", 
    fee: "Competitive",
    icon: <Stethoscope className="w-10 h-10 text-purple-700" />,
    subjects: ["Botany & Zoology", "Atomic Physics", "Biochemistry & Chemistry"]
  }
];

const campusFacilities = [
  "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=400",
];

const Courses: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-purple-700 font-black uppercase tracking-widest text-sm block mb-4">Academic Pathways</span>
          <h1 className="text-6xl font-black text-purple-950 mb-6 leading-tight">Our <span className="text-yellow-500">Core Streams</span></h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Choosing between MPC and BiPC is the first step toward a successful career. At Hardcoded Junior College, we provide the foundation for both.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {streams.map((stream) => (
            <div key={stream.id} className="group bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
              <div className="relative h-80 overflow-hidden">
                <img src={stream.image} alt={stream.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-purple-900 text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-xl shadow-sm">
                  {stream.id === 1 ? 'Engineering Focus' : 'Medical Focus'}
                </div>
              </div>
              <div className="p-12 flex-grow">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-black text-purple-950 mb-2">{stream.title}</h3>
                    <p className="text-yellow-600 font-bold text-sm tracking-wide">{stream.subtitle}</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-2xl group-hover:bg-purple-900 group-hover:text-yellow-400 transition-colors">
                    {stream.icon}
                  </div>
                </div>
                
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                  {stream.description}
                </p>

                <div className="space-y-4 mb-10">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Core Subjects:</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {stream.subjects.map((sub, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                        <BookOpen size={16} className="text-purple-600" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <Clock size={18} className="text-purple-600" />
                    <span>{stream.duration}</span>
                  </div>
                  <button className="bg-purple-900 text-white p-5 rounded-3xl hover:bg-yellow-400 hover:text-purple-950 transition-all shadow-xl group-hover:translate-x-2">
                    <ChevronRight size={28} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="mt-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-purple-950">Academic Environment</h2>
            <p className="text-lg text-slate-500 mt-4">Providing the best infrastructure for MPC and BiPC learning.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {campusFacilities.map((img, i) => (
              <div key={i} className="group relative h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-md">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Facility" />
                <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <FlaskConical className="text-purple-700 mb-6" size={40} />
              <h4 className="font-bold text-slate-900 text-lg">Integrated Labs</h4>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">Dedicated Physics, Chemistry, and Biology laboratories with the latest equipment.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <GraduationCap className="text-purple-700 mb-6" size={40} />
              <h4 className="font-bold text-slate-900 text-lg">Entrance Excellence</h4>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">Systematic coaching for JEE, NEET, and regional entrance exams integrated with academics.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <BookOpen className="text-purple-700 mb-6" size={40} />
              <h4 className="font-bold text-slate-900 text-lg">Resource Rich</h4>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">Expansive library with textbooks, journals, and digital entrance preparation modules.</p>
            </div>
          </div>
        </div>

        {/* Admission CTA */}
        <div className="mt-40 bg-purple-950 rounded-[4rem] p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 blob-shape"></div>
          <div className="max-w-xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">Secure Your Future in MPC or BiPC.</h2>
            <p className="text-xl font-medium opacity-80 leading-relaxed">Join the most successful academic community in the region. Limited seats available for the 2025 batch.</p>
          </div>
          <button className="bg-yellow-400 text-purple-950 font-black px-14 py-7 rounded-2xl hover:bg-white transition-all shadow-2xl text-xl relative z-10">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
