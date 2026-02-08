import React, { useState } from 'react';
import { Target, Eye, ShieldCheck, Users2, Sparkles, Zap, Shield, Heart, GraduationCap, BookOpen, FlaskConical, Monitor, Bus, Home as HomeIcon, CheckCircle2, MessageCircle, ChevronDown } from 'lucide-react';

const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What courses does Vidisha Junior College offer?",
      answer: (
        <div className="space-y-4 text-left">
          <p className="font-semibold text-purple-900">We offer Intermediate 1st and 2nd Year programs in:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <h4 className="font-bold text-purple-900 mb-2">MPC Stream</h4>
              <ul className="space-y-2 text-sm text-slate-900 font-medium">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 1st Year with JEE Mains Coaching</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 1st Year with JEE Mains & Advanced Coaching</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 2nd Year with JEE Mains Coaching</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 2nd Year with JEE Mains & Advanced Coaching</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <h4 className="font-bold text-purple-900 mb-2">BiPC Stream</h4>
              <ul className="space-y-2 text-sm text-slate-900 font-medium">
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 1st Year with NEET Coaching</li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div>Intermediate 2nd Year with NEET Coaching</li>
              </ul>
            </div>
          </div>
          <p className="text-sm font-black text-slate-700 italic border-l-4 border-yellow-400 pl-3">All courses integrate board preparation with competitive exam training.</p>
        </div>
      )
    },
    {
      question: "What facilities are available for students?",
      answer: (
        <div className="space-y-4 text-left">
          <p className="text-slate-900 font-bold">Vidisha Junior College provides:</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Air-conditioned smart classrooms with digital teaching systems",
              "Advanced Physics, Chemistry, and Biology laboratories",
              "Comprehensive library with reference materials",
              "Separate hostel facilities for boys and girls with nutritious, home-like food",
              "Safe transportation for day-scholar students across Vijayawada",
              "Regular doubt-clearing sessions and personalized mentoring"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-900 font-bold text-sm bg-slate-50 p-3 rounded-lg">
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
        <div className="space-y-4 text-left">
          <p className="text-slate-900 font-bold">Yes, we provide separate hostel facilities for boys and girls with:</p>
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
        <div className="flex items-start gap-4 text-left">
          <div className="p-3 bg-indigo-50 rounded-full text-indigo-600 hidden sm:block">
            <Bus className="w-6 h-6" />
          </div>
          <div>
            <p className="text-slate-900 font-bold leading-relaxed">
              Yes, we offer <span className="font-bold text-slate-800">reliable and safe transportation facility</span> for day-scholar students covering major areas across Vijayawada.
            </p>
          </div>
        </div>
      )
    },
    {
      question: "How is the faculty at Vidisha Junior College?",
      answer: (
        <div className="bg-purple-900 text-white p-5 rounded-xl relative overflow-hidden text-left">
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
        <div className="space-y-3 text-slate-900 font-bold text-left">
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

  return (
    <div className="py-20 animate-in fade-in duration-500 relative z-10 selection:bg-yellow-200 selection:text-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-12 lg:mb-20">
          <div className="lg:col-span-7">
            <span className="text-yellow-500 font-black text-xs uppercase tracking-[0.3em] mb-4 block">About Vidisha</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-purple-950 mb-6 lg:mb-10 leading-[1.1] tracking-tight">
              Building Futures Through Excellence, Dedication & Vision
            </h1>
            <div className="space-y-6 lg:space-y-8 text-base lg:text-lg text-slate-800 leading-relaxed font-bold max-w-2xl">
              <p>
                Vidisha Junior College stands as a dedicated and future driven institution committed to shaping the next generation of engineers, doctors, and responsible citizens. Founded in 2023 with a powerful vision to ensure every household in Vijayawada and beyond has an engineer and a doctor we represent more than just an educational institution.
              </p>
              <div className="bg-slate-50 p-6 lg:p-10 rounded-2xl lg:rounded-2xl italic text-purple-900 font-bold leading-relaxed shadow-sm text-sm lg:text-base">
                "We are a promise, a foundation for dreams, and a pathway to success."
              </div>
              <p>
                We believe in providing the intellectual resilience required for the world's most competitive entrance exams through precision in learning and dedicated mentorship.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 lg:gap-8 relative w-full">
            <div className="absolute inset-0 bg-purple-900/5 blur-[120px] -z-10 rounded-full"></div>
            <img src="/classrooms1.jpg" className="w-full aspect-square object-cover rounded-2xl lg:rounded-2xl shadow-xl lg:shadow-2xl mt-6 lg:mt-12" alt="College Building" />
            <img src="/classrooms2.jpeg" className="w-full aspect-square object-cover rounded-2xl lg:rounded-2xl shadow-xl lg:shadow-2xl" alt="Students" />
            <img src="/classrooms3.jpeg" className="w-full aspect-square object-cover rounded-2xl lg:rounded-2xl shadow-xl lg:shadow-2xl" alt="Lab Work" />
            <img src="/classrooms4.jpeg" className="w-full aspect-square object-cover rounded-2xl lg:rounded-2xl shadow-xl lg:shadow-2xl -mt-6 lg:-mt-12" alt="Classroom" />
          </div>
        </div>

        {/* Vision/Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mb-12 lg:mb-24">
          <div className="bg-white p-8 lg:p-16 rounded-xl lg:rounded-2xl border border-slate-100 shadow-xl relative overflow-hidden group">
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 lg:mb-8">
              <Eye className="w-7 h-7 lg:w-8 lg:h-8 text-purple-700" />
            </div>
            <h2 className="text-2xl lg:text-4xl font-black text-purple-950 mb-4 lg:mb-8">Our Vision</h2>
            <div className="space-y-4 lg:space-y-6 text-slate-800 font-bold leading-relaxed text-sm lg:text-base">
              <p>
                Vidisha envisions a world where education is not only a pathway to successful careers but a transformative journey that builds character, self belief, and lifelong excellence.
              </p>
              <p>
                We believe true success comes from the courage to challenge boundaries, the discipline to overcome setbacks, and the compassion to uplift others along the way.
              </p>
              <p>
                By instilling purpose, resilience, and a passion for achievement in every learner, we strive to build a society that is not only stronger and smarter but also more inspired and humane.
              </p>
            </div>
          </div>

          <div className="bg-purple-950 p-8 lg:p-16 rounded-xl lg:rounded-2xl text-white shadow-2xl relative overflow-hidden group">
            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 lg:mb-8">
              <Target className="w-7 h-7 lg:w-8 lg:h-8 text-yellow-400" />
            </div>
            <h2 className="text-2xl lg:text-4xl font-black mb-4 lg:mb-8">Our Mission</h2>
            <div className="space-y-4 lg:space-y-6">
              <p className="text-purple-100 font-medium leading-relaxed text-sm lg:text-base">
                Our mission at Vidisha Junior College is to deliver transformative education that ignites ambition and unlocks every student's fullest potential.
              </p>
              <ul className="space-y-3 lg:space-y-4">
                {[
                  "Strong academic foundation in intermediate education",
                  "Excellence in competitive exam preparation IIT JEE & NEET",
                  "Values driven personal growth and character development",
                  "Dedicated mentorship and individualized attention"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 lg:gap-4 text-purple-100">
                    <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 shrink-0 mt-0.5" />
                    <span className="font-medium text-sm lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Chairman & Principal Section */}
        <div className="mb-12 lg:mb-24">
          <div className="text-center mb-10 lg:mb-20">
            <span className="text-yellow-600 font-black text-xs uppercase tracking-widest mb-4 block">Leadership Messages</span>
            <h2 className="text-3xl lg:text-5xl font-black text-purple-950">Guiding the Way Forward</h2>
          </div>

          <div className="space-y-16 lg:space-y-32">
            {/* Chairman */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
              <div className="lg:w-1/3 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-yellow-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-2xl"></div>
                  <div className="relative w-48 h-48 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 lg:border-[12px] border-white shadow-2xl z-10 mx-auto">
                    <img src="/mr. chairman.jpg" alt="Kommineni Venkatesh" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-6 lg:mt-8 text-center relative z-20">
                    <h3 className="text-xl lg:text-2xl font-black text-purple-950">Kommineni Venkatesh</h3>
                    <p className="text-yellow-600 font-black uppercase tracking-widest text-[10px] lg:text-xs mt-2">Chairman, Vidisha Educational Society</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 w-full bg-slate-50 p-6 lg:p-16 rounded-2xl lg:rounded-2xl border border-slate-100 relative">
                <div className="hidden lg:flex absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full items-center justify-center text-purple-950">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl lg:text-2xl font-black text-purple-950 mb-4 lg:mb-8 border-b border-slate-200 pb-4">Chairman's Message</h4>
                <div className="space-y-4 lg:space-y-6 text-slate-800 font-bold leading-relaxed text-sm lg:text-base">
                  <p>
                    It gives me immense pride and purpose to present Vidisha Educational Society as a beacon of learning, ambition, and excellence for the youth of Vijayawada and beyond.
                  </p>
                  <p>
                    When I established this institution in 2023, my dream was simple yet powerful: to ensure that every household in our community has both an engineer and a doctor.
                  </p>
                  <p>
                    To every parent who entrusts us with their child's future and to every student who chooses Vidisha Educational Society, I promise that we will walk with you every step of the way.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-12 lg:mb-24">
          <div className="text-center mb-10 lg:mb-20">
            <span className="text-yellow-600 font-black text-xs uppercase tracking-widest mb-4 block">Academic Pathways</span>
            <h2 className="text-3xl lg:text-5xl font-black text-purple-950">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                title: "MPC Stream",
                sub: "Mathematics, Physics, Chemistry",
                icon: <GraduationCap />,
                desc: "Designed for students aspiring to become engineers, our MPC program integrates board syllabus with comprehensive IIT JEE coaching."
              },
              {
                title: "BiPC Stream",
                sub: "Biology, Physics, Chemistry",
                icon: <FlaskConical />,
                desc: "Tailored for future doctors, our BiPC program combines board preparation with rigorous NEET coaching."
              },
              {
                title: "Integrated Approach",
                sub: "Board + Competitive Coaching",
                icon: <BookOpen />,
                desc: "Vidisha offers both board and competitive exam preparation under one roof, eliminating the need for separate coaching centers."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 lg:p-12 rounded-2xl lg:rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="w-14 h-14 lg:w-20 lg:h-20 bg-purple-50 rounded-2xl lg:rounded-xl flex items-center justify-center mb-6 lg:mb-8 text-purple-700 transition-colors group-hover:bg-purple-900 group-hover:text-white">
                  {React.cloneElement(item.icon, { className: 'w-7 h-7 lg:w-10 lg:h-10' })}
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-purple-950 mb-2">{item.title}</h3>
                <p className="text-yellow-600 font-bold text-[10px] lg:text-xs uppercase tracking-widest mb-4 lg:mb-6">{item.sub}</p>
                <p className="text-slate-700 font-bold leading-relaxed text-sm lg:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="mb-12 lg:mb-24">
          <div className="text-center mb-10 lg:mb-20">
            <span className="text-yellow-600 font-black text-xs uppercase tracking-widest mb-4 block">Our Infrastructure</span>
            <h2 className="text-2xl lg:text-5xl font-black text-purple-950">Modern Facilities for Modern Learners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {[
              { icon: <Monitor />, title: "Smart Classrooms", desc: "Temperature controlled classrooms with digital teaching systems." },
              { icon: <FlaskConical />, title: "Science Labs", desc: "State of the art Physics, Chemistry, and Biology labs." },
              { icon: <BookOpen />, title: "Library", desc: "Well stocked with reference books and study materials." },
              { icon: <HomeIcon />, title: "Hostel Facilities", desc: "Separate, secure hostels for boys and girls." },
              { icon: <Bus />, title: "Transportation", desc: "Safe and reliable transport across Vijayawada." }
            ].map((item, i) => (
              <div key={i} className="p-6 lg:p-10 rounded-2xl lg:rounded-2xl border border-slate-100 bg-slate-50 transition-all">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 bg-white text-purple-700 shadow-sm">
                  {React.cloneElement(item.icon, { className: 'w-6 h-6 lg:w-8 lg:h-8' })}
                </div>
                <h3 className="text-lg lg:text-2xl font-black mb-2 lg:mb-4 text-purple-950">{item.title}</h3>
                <p className="font-bold leading-relaxed text-slate-700 text-sm lg:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty & Holistic Development */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-12 lg:mb-24">
          {/* Faculty */}
          <div className="bg-slate-50 p-6 lg:p-16 rounded-2xl lg:rounded-2xl border border-slate-100">
            <h2 className="text-2xl lg:text-4xl font-black text-purple-950 mb-4 lg:mb-8">Our Faculty</h2>
            <p className="text-sm lg:text-lg text-slate-800 font-bold leading-relaxed mb-6 lg:mb-10">
              At the heart of Vidisha is a team of highly qualified, experienced, and passionate educators.
            </p>
            <ul className="grid grid-cols-1 gap-3 lg:gap-4">
              {[
                "Identify individual strengths and address doubts",
                "Provide personalized academic support",
                "Conduct regular doubt clearing sessions",
                "Build confidence and motivation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 lg:gap-4 bg-white p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-sm border border-slate-50">
                  <Users2 className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600 shrink-0" />
                  <span className="font-black text-slate-900 text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Holistic */}
          <div className="bg-purple-900 p-6 lg:p-16 rounded-2xl lg:rounded-2xl text-white">
            <h2 className="text-2xl lg:text-4xl font-black mb-4 lg:mb-8">Holistic Development</h2>
            <p className="text-sm lg:text-lg text-purple-100 font-medium leading-relaxed mb-6 lg:mb-10">
              Beyond textbooks and exams, Vidisha focuses on preparing students for life.
            </p>
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {[
                { title: "Discipline", desc: "Time management and personal responsibility." },
                { title: "Communication", desc: "Skills and confidence for professional interactions." },
                { title: "Critical Thinking", desc: "Encouraging analytic approaches." },
                { title: "Balanced Growth", desc: "Emotional balance and stress management." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 border-b border-white/10 pb-3 lg:pb-4">
                  <span className="text-yellow-400 font-black uppercase tracking-widest text-[10px] lg:text-xs">{item.title}</span>
                  <p className="font-bold text-sm lg:text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-8 lg:py-16 bg-indigo-50/30 rounded-2xl lg:rounded-2xl relative overflow-hidden mb-12 lg:mb-20 border border-indigo-100">
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <div className="text-center mb-8 lg:mb-16">
              <span className="text-purple-600 font-bold uppercase tracking-widest text-xs mb-2 block">Got Questions?</span>
              <h2 className="text-2xl lg:text-5xl font-black text-purple-900 mb-4 lg:mb-6">Frequently Asked Questions</h2>
              <div className="h-1.5 lg:h-2 w-16 lg:w-24 bg-yellow-400 mx-auto rounded-full shadow-lg"></div>
            </div>

            <div className="space-y-3 lg:space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-xl lg:rounded-xl border transition-all duration-300 overflow-hidden ${openFaq === idx
                    ? 'border-purple-200 shadow-xl ring-2 ring-purple-100'
                    : 'border-slate-100 shadow-md hover:shadow-lg hover:border-purple-100'
                    }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-4 lg:px-8 py-4 lg:py-6 flex items-center justify-between text-left gap-3 lg:gap-4"
                  >
                    <span className={`text-sm lg:text-lg font-black transition-colors ${openFaq === idx ? 'text-purple-900' : 'text-slate-950'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === idx ? 'bg-purple-900 text-white rotate-180' : 'bg-slate-100 text-slate-500 hover:bg-purple-100 hover:text-purple-900'
                      }`}>
                      <ChevronDown size={16} className="lg:w-5 lg:h-5" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-4 lg:px-8 pb-6 lg:pb-8 pt-0">
                      <div className="h-px w-full bg-slate-100 mb-4 lg:mb-6"></div>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div> {/* End max-w-7xl */}

      {/* Parental Partnership */}
      <div className="bg-slate-900 py-16 lg:py-24 text-white relative overflow-hidden mt-12 lg:mt-24">
        <div className="absolute top-0 right-0 w-48 lg:w-96 h-48 lg:h-96 bg-purple-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-48 lg:w-96 h-48 lg:h-96 bg-yellow-400/5 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 lg:mb-16">
            <span className="text-yellow-400 font-black text-[10px] lg:text-xs uppercase tracking-widest mb-3 lg:mb-4 block">Teamwork for Success</span>
            <h2 className="text-2xl lg:text-5xl font-black mb-4 lg:mb-6">Parental Partnership</h2>
            <p className="text-sm lg:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              We honor the trust parents place in us. Transparent communication is a cornerstone of our philosophy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {[
              "Regular progress reports and performance updates",
              "Open access to teachers for discussions",
              "Monthly parent teacher meetings",
              "Attendance and academic monitoring alerts",
              "Direct involvement in their child's educational journey"
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-5 lg:p-10 rounded-xl lg:rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 lg:gap-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-xl lg:rounded-2xl flex items-center justify-center text-purple-950 shrink-0">
                    <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <span className="font-bold text-sm lg:text-lg leading-snug">{item}</span>
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
