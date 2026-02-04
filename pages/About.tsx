
import React from 'react';
import { Target, Eye, ShieldCheck, Users2, Sparkles, Zap, Shield, Heart, GraduationCap, BookOpen, FlaskConical, Monitor, Bus, Home as HomeIcon, CheckCircle2, MessageCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in duration-500 relative z-10 selection:bg-yellow-200 selection:text-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-24 mb-32">
          <div className="lg:w-1/2">
            <span className="text-yellow-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">About Vidisha</span>
            <h1 className="text-6xl font-black text-purple-950 mb-10 leading-tight">
              Building Futures Through Excellence, Dedication & Vision
            </h1>
            <div className="space-y-8 text-lg text-slate-500 leading-relaxed font-medium">
              <p>
                Vidisha Junior College stands as a dedicated and future driven institution committed to shaping the next generation of engineers, doctors, and responsible citizens. Founded in 2023 with a powerful vision to ensure every household in Vijayawada and beyond has an engineer and a doctor we represent more than just an educational institution.
              </p>
              <div className="bg-slate-50 p-10 rounded-[3rem] italic text-purple-900 font-bold leading-relaxed shadow-sm">
                "We are a promise, a foundation for dreams, and a pathway to success."
              </div>
              <p>
                We believe in providing the intellectual resilience required for the world's most competitive entrance exams through precision in learning and dedicated mentorship.
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

        {/* Vision/Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
          <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[4rem] flex items-center justify-center -mr-4 -mt-4 transition-transform group-hover:scale-110">
              <Eye className="w-10 h-10 text-purple-700" />
            </div>
            <h2 className="text-4xl font-black text-purple-950 mb-8">Our Vision</h2>
            <div className="space-y-6 text-slate-500 font-medium leading-relaxed">
              <p>
                Vidisha envisions a world where education is not only a pathway to successful careers but a transformative journey that builds character, self belief, and lifelong excellence. We are committed to creating a progressive learning environment that inspires curiosity, fuels ambition, and empowers students to think independently, explore boldly, and act responsibly.
              </p>
              <p>
                We believe true success comes from the courage to challenge boundaries, the discipline to overcome setbacks, and the compassion to uplift others along the way. Vidisha aims to nurture confident leaders who can solve challenges, compassionate citizens who strengthen communities, and intellectually curious thinkers who continuously seek growth and discovery.
              </p>
              <p>
                By instilling purpose, resilience, and a passion for achievement in every learner, we strive to build a society that is not only stronger and smarter but also more inspired and humane.
              </p>
            </div>
          </div>

          <div className="bg-purple-950 p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[4rem] flex items-center justify-center -mr-4 -mt-4 transition-transform group-hover:scale-110">
              <Target className="w-10 h-10 text-yellow-400" />
            </div>
            <h2 className="text-4xl font-black mb-8">Our Mission</h2>
            <div className="space-y-6">
              <p className="text-purple-100 font-medium leading-relaxed">
                Our mission at Vidisha Junior College is to deliver transformative education that ignites ambition and unlocks every student's fullest potential. We are committed to nurturing future engineers, doctors, and leaders by providing:
              </p>
              <ul className="space-y-4">
                {[
                  "Strong academic foundation in intermediate education",
                  "Excellence in competitive exam preparation IIT JEE & NEET",
                  "Values driven personal growth and character development",
                  "Innovative teaching methods and disciplined learning environments",
                  "Dedicated mentorship and individualized attention"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-purple-100">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-purple-100 font-medium leading-relaxed mt-4">
                Through these pillars, we aim to cultivate curiosity, confidence, critical thinking, and a lifelong passion for achievement.
              </p>
            </div>
          </div>
        </div>

        {/* Chairman & Principal Section */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <span className="text-yellow-600 font-black text-xs uppercase tracking-widest mb-4 block">Leadership Messages</span>
            <h2 className="text-5xl font-black text-purple-950">Guiding the Way Forward</h2>
          </div>

          <div className="space-y-32">
            {/* Chairman */}
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/3">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-yellow-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-2xl"></div>
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-[12px] border-white shadow-2xl z-10 mx-auto">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Chairman Kommineni Venkatesh" />
                  </div>
                  <div className="mt-8 text-center relative z-20">
                    <h3 className="text-2xl font-black text-purple-950">Kommineni Venkatesh</h3>
                    <p className="text-yellow-600 font-black uppercase tracking-widest text-xs mt-2">Chairman, Vidisha Junior College</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 bg-slate-50 p-16 rounded-[4rem] border border-slate-100 relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-purple-950 mb-8 border-b border-slate-200 pb-4">Chairman's Message</h4>
                <div className="prose prose-slate max-w-none space-y-6 text-slate-600 font-medium leading-relaxed">
                  <p>
                    It gives me immense pride and purpose to present Vidisha Junior College as a beacon of learning, ambition, and excellence for the youth of Vijayawada and beyond.
                  </p>
                  <p>
                    When I established this institution in 2023, my dream was simple yet powerful: to ensure that every household in our community has both an engineer and a doctor, shaping a future where knowledge leads progress and every family has the power to transform society.
                  </p>
                  <p>
                    At Vidisha Junior College, we believe education is not limited to textbooks or examinations. It is about building strong character, nurturing curiosity, and inspiring students to dream bigger than their circumstances. Our dedicated faculty, advanced learning systems, and disciplined environment work together to empower students to unlock their true potential.
                  </p>
                  <p>
                    To every parent who entrusts us with their child's future and to every student who chooses Vidisha Junior College, I promise that we will walk with you every step of the way. Together, we will build a generation that leads with knowledge and serves with humanity.
                  </p>
                </div>
              </div>
            </div>

            {/* Principal */}
            <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/3">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-purple-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-2xl"></div>
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-[12px] border-white shadow-2xl z-10 mx-auto">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Principal" />
                  </div>
                  <div className="mt-8 text-center relative z-20">
                    <h3 className="text-2xl font-black text-purple-950">Principal</h3>
                    <p className="text-purple-600 font-black uppercase tracking-widest text-xs mt-2">Vidisha Junior College</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 bg-purple-50 p-16 rounded-[4rem] border border-purple-100 relative">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center text-white rotate-180">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-purple-950 mb-8 border-b border-purple-200 pb-4">Principal's Message</h4>
                <div className="prose prose-slate max-w-none space-y-6 text-slate-600 font-medium leading-relaxed">
                  <p>
                    At Vidisha Junior College, we believe that the right learning environment can transform a student's journey from ordinary to extraordinary.
                  </p>
                  <p>
                    Our campus is designed to provide students with a balanced and focused academic experience, supported by state of the art facilities such as air conditioned classrooms, smart digital learning systems, and technology driven teaching methods that make complex concepts easier to understand and apply.
                  </p>
                  <p>
                    The college management and board stand as a strong pillar of support, ensuring that resources, mentorship, and guidance are always accessible to our learners. I am proud to lead a campus where every day brings new opportunities for growth and achievement.
                  </p>
                  <p>
                    We welcome every learner to join us in this journey of excellence, ambition, and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <span className="text-yellow-600 font-black text-xs uppercase tracking-widest mb-4 block">Academic Pathways</span>
            <h2 className="text-5xl font-black text-purple-950">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "MPC Stream",
                sub: "Mathematics, Physics, Chemistry",
                icon: <GraduationCap />,
                desc: "Designed for students aspiring to become engineers, our MPC program integrates intermediate board syllabus with comprehensive IIT JEE Mains and Advanced coaching. Students receive focused training in problem solving, conceptual clarity, and exam strategies."
              },
              {
                title: "BiPC Stream",
                sub: "Biology, Physics, Chemistry",
                icon: <FlaskConical />,
                desc: "Tailored for future doctors and life science professionals, our BiPC program combines board preparation with rigorous NEET coaching. The curriculum emphasizes medical entrance exam patterns, biology depth, and application based learning."
              },
              {
                title: "Integrated Approach",
                sub: "Board + Competitive Coaching",
                icon: <BookOpen />,
                desc: "Unlike traditional colleges, Vidisha offers both board and competitive exam preparation under one roof, eliminating the need for separate coaching centers and ensuring a focused, streamlined learning experience."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center mb-8 text-purple-700 transition-colors group-hover:bg-purple-900 group-hover:text-white">
                  {React.cloneElement(item.icon, { className: 'w-10 h-10' })}
                </div>
                <h3 className="text-2xl font-black text-purple-950 mb-2">{item.title}</h3>
                <p className="text-yellow-600 font-bold text-xs uppercase tracking-widest mb-6">{item.sub}</p>
                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <span className="text-yellow-600 font-black text-xs uppercase tracking-widest mb-4 block">Our Infrastructure</span>
            <h2 className="text-5xl font-black text-purple-950">Modern Facilities for Modern Learners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Monitor />, title: "Smart Classrooms", desc: "Modern temperature controlled classrooms equipped with digital teaching systems make complex concepts easier to understand and retain." },
              { icon: <FlaskConical />, title: "Science Laboratories", desc: "State of the art Physics, Chemistry, and Biology labs allow students hands on exposure to experiments, fostering curiosity and practical understanding." },
              { icon: <BookOpen />, title: "Comprehensive Library", desc: "A well stocked library with reference books, study materials, previous years' papers, and resources for both boards and competitive exams." },
              { icon: <HomeIcon />, title: "Hostel Facilities", desc: "Separate, secure hostels for boys and girls with nutritious meals prepared with care, creating a comfortable home away from home environment." },
              { icon: <Bus />, title: "Transportation", desc: "Safe and reliable transportation covering major routes across Vijayawada for day scholar students." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] border border-slate-100 bg-slate-50 transition-all">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white text-purple-700 shadow-sm">
                  {React.cloneElement(item.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-2xl font-black mb-4 text-purple-950">{item.title}</h3>
                <p className="font-medium leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty & Holistic Development */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          {/* Faculty */}
          <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100">
            <h2 className="text-4xl font-black text-purple-950 mb-8">Our Faculty</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
              At the heart of Vidisha Junior College is a team of highly qualified, experienced, and passionate educators. Our teachers are mentors who invest time, effort, and genuine care into each student's progress.
            </p>
            <ul className="grid grid-cols-1 gap-4">
              {[
                "Identify individual strengths and address doubts",
                "Provide personalized academic support",
                "Conduct regular doubt clearing sessions",
                "Offer strategic guidance for competitive exams",
                "Build confidence and motivation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-50">
                  <Users2 className="w-6 h-6 text-purple-600 shrink-0" />
                  <span className="font-bold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Holistic */}
          <div className="bg-purple-900 p-16 rounded-[4rem] text-white">
            <h2 className="text-4xl font-black mb-8">Holistic Development</h2>
            <p className="text-lg text-purple-100 font-medium leading-relaxed mb-10">
              We believe strong academics flourish in a strong environment. Beyond textbooks and exams, Vidisha focuses on preparing students for life.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Discipline", desc: "Focus on time management and personal responsibility." },
                { title: "Communication", desc: "Building skills and confidence for professional interactions." },
                { title: "Critical Thinking", desc: "Encouraging analytic approaches to problem solving." },
                { title: "Balanced Growth", desc: "Emotional balance and stress management techniques." },
                { title: "Leadership Qualities", desc: "Fostering teamwork and individual excellence." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 border-b border-white/10 pb-4">
                  <span className="text-yellow-400 font-black uppercase tracking-widest text-xs">{item.title}</span>
                  <p className="font-bold text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parental Partnership */}
        <div className="bg-slate-900 rounded-[5rem] p-20 text-white relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 blur-[100px] rounded-full"></div>

          <div className="text-center mb-16 relative z-10">
            <span className="text-yellow-400 font-black text-xs uppercase tracking-widest mb-4 block">Teamwork for Success</span>
            <h2 className="text-5xl font-black mb-6">Parental Partnership</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              We honor the trust parents place in us. Transparent communication is a cornerstone of our philosophy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              "Regular progress reports and performance updates",
              "Open access to teachers for discussions",
              "Monthly parent teacher meetings",
              "Attendance and academic monitoring alerts",
              "Direct involvement in their child's educational journey"
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-purple-950 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-lg leading-snug">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
