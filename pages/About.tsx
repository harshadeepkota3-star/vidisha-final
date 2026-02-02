
import React from 'react';
import { Target, Eye, ShieldCheck, Users2, Sparkles, Zap, Shield, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in duration-500 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-24 mb-32">
          <div className="lg:w-1/2">
            <span className="text-yellow-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Our Academic Legacy</span>
            <h1 className="text-6xl font-black text-purple-950 mb-10 leading-tight">
              Leading the Way in <span className="text-purple-700">MPC & BiPC</span> Education.
            </h1>
            <div className="space-y-8 text-lg text-slate-500 leading-relaxed font-medium">
              <p>
                Founded with a vision to revolutionize intermediate education, Hardcoded Junior College has been a cornerstone of academic excellence for over two decades.
              </p>
              <div className="bg-slate-50 border-l-8 border-yellow-400 p-10 rounded-r-[3rem] italic text-purple-900 font-bold leading-relaxed shadow-sm">
                "We don't just teach MPC and BiPC; we build the intellectual resilience required for the world's most competitive entrance exams."
              </div>
              <p>
                Our philosophy centers on 'Precision in Learning.' By focusing exclusively on MPC and BiPC streams, we ensure our faculty and resources are entirely dedicated to the success of our aspiring engineers and doctors.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-8 relative">
             <div className="absolute inset-0 bg-purple-900/5 blur-[120px] -z-10 rounded-full"></div>
             <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl mt-12" alt="College Building" />
             <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl" alt="Students" />
             <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl" alt="Lab Work" />
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover rounded-[3rem] shadow-2xl -mt-12" alt="Classroom" />
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-purple-950">Academic Values in Action</h2>
            <p className="text-slate-500 mt-4 font-medium text-lg">Nurturing excellence through discipline and passion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Sparkles />, title: "Innovation", img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400" },
              { icon: <Zap />, title: "Agility", img: "https://images.unsplash.com/photo-1522071823991-b5188c4583e6?auto=format&fit=crop&q=80&w=400" },
              { icon: <Shield />, title: "Integrity", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400" },
              { icon: <Heart />, title: "Empathy", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" }
            ].map((card, i) => (
              <div key={i} className="group relative h-80 rounded-[3rem] overflow-hidden shadow-lg border border-slate-100">
                <img src={card.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={card.title} />
                <div className="absolute inset-0 bg-purple-950/70 flex flex-col items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="mb-4 text-yellow-400 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">{card.icon}</div>
                  <h3 className="text-2xl font-black tracking-widest uppercase text-sm">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision/Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-40">
          {[
            { icon: <Target className="w-10 h-10 text-purple-700" />, title: "Our Mission", desc: "To empower MPC and BiPC students with conceptual clarity and competitive edge." },
            { icon: <Eye className="w-10 h-10 text-purple-700" />, title: "Our Vision", desc: "To be the most trusted name in intermediate education for medical and engineering aspirants." },
            { icon: <ShieldCheck className="w-10 h-10 text-purple-700" />, title: "Elite Faculty", desc: "Our educators are seasoned experts in JEE and NEET coaching with decades of results." },
            { icon: <Users2 className="w-10 h-10 text-purple-700" />, title: "Holistic Growth", desc: "Balanced academic rigor with personal development for well-rounded success." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="mb-8 group-hover:rotate-12 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center pb-20">
          <span className="text-yellow-500 font-black text-xs uppercase tracking-widest mb-4 block">Our Senior Faculty</span>
          <h2 className="text-5xl font-black text-purple-950 mb-20">Architects of Student Success.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
            {[
              { name: "Dr. K. S. Rao", role: "Principal & Head of MPC", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
              { name: "Prof. Anjali Sharma", role: "Dean & Head of BiPC", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "Mr. Ramesh Kumar", role: "VP Academics - JEE Specialist", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" }
            ].map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center">
                <div className="mb-10 overflow-hidden rounded-full w-72 h-72 grayscale group-hover:grayscale-0 transition-all duration-700 border-[16px] border-slate-50 shadow-2xl relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-2xl font-black text-purple-950">{member.name}</h3>
                <p className="text-yellow-600 font-black uppercase tracking-widest text-[10px] mt-3">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
