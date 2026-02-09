
import React from 'react';
import { Clock, GraduationCap, ChevronRight, BookOpen, FlaskConical, CheckCircle2, ArrowRight } from 'lucide-react';

const mpcCourses = [
  {
    title: "Intermediate 1st Year with JEE Mains Coaching",
    learnings: [
      "Complete Intermediate 1st Year syllabus (Mathematics, Physics, Chemistry)",
      "Focused preparation for JEE Mains exam pattern",
      "Conceptual clarity and problem-solving techniques",
      "Regular tests and assessments"
    ],
    idealFor: "Students beginning intermediate education with engineering aspirations",
    duration: "1 Academic Year"
  },
  {
    title: "Intermediate 1st Year with JEE Mains & Advanced Coaching",
    learnings: [
      "Complete Intermediate 1st Year syllabus",
      "Comprehensive preparation for both JEE Mains and JEE Advanced",
      "Advanced problem-solving and analytical thinking",
      "Special modules for Olympiad-level questions",
      "In-depth coverage of all topics"
    ],
    idealFor: "High-achieving students targeting IITs and top NITs",
    duration: "1 Academic Year"
  },
  {
    title: "Intermediate 2nd Year with JEE Mains Coaching",
    learnings: [
      "Complete Intermediate 2nd Year syllabus",
      "Intensive JEE Mains preparation",
      "Revision of 1st Year concepts",
      "Full-length mock tests and time management strategies",
      "Final exam preparation"
    ],
    idealFor: "2nd Year students preparing for final board exams and JEE Mains",
    duration: "1 Academic Year"
  },
  {
    title: "Intermediate 2nd Year with JEE Mains & Advanced Coaching",
    learnings: [
      "Complete Intermediate 2nd Year syllabus",
      "Comprehensive preparation for JEE Mains and JEE Advanced",
      "Advanced-level problem-solving",
      "Comprehensive revision and doubt-clearing",
      "Complete exam readiness"
    ],
    idealFor: "Ambitious students targeting top IITs and premier engineering institutions",
    duration: "1 Academic Year"
  },
  {
    title: "Long Term JEE Mains & Advanced Coaching",
    learnings: [
      "Comprehensive Coverage of Intermediate MPC Syllabus",
      "Early Orientation Towards JEE and Other Competitive Examinations",
      "Conceptual and Problem-Solving Focused Learning Approach",
      "Regular Assessments and Long-Term Academic Progress Tracking",
      "Expert Guidance and Support for Doubt Clearing",
      "Comprehensive Revision and Final Exam Preparation"
    ],
    idealFor: "Students beginning intermediate education with engineering aspirations",
  }
];

const bipcCourses = [
  {
    title: "Intermediate 1st Year with NEET Coaching",
    learnings: [
      "Complete Intermediate 1st Year syllabus (Biology, Physics, Chemistry)",
      "NEET exam pattern and syllabus coverage",
      "Conceptual understanding of medical entrance topics",
      "Biology depth and application-based learning",
      "Regular practice tests"
    ],
    idealFor: "Students beginning intermediate education with medical aspirations",
    duration: "1 Academic Year"
  },
  {
    title: "Intermediate 2nd Year with NEET Coaching",
    learnings: [
      "Complete Intermediate 2nd Year syllabus",
      "Intensive NEET preparation with full syllabus coverage",
      "Revision of 1st Year Biology, Physics, Chemistry",
      "NEET-specific problem-solving and shortcuts",
      "Full-length mock tests in NEET pattern",
      "Final exam readiness"
    ],
    idealFor: "2nd Year students preparing for board exams and NEET",
    duration: "1 Academic Year"
  },
  {
    title: "Long Term with NEET Coaching",
    learnings: [
      "Comprehensive Coverage of Intermediate BiPC Syllabus",
      "NEET-Oriented Teaching Approach from the Foundation Level",
      "Concept-Driven and Application-Based Learning Methodology",
      "Regular Evaluation and Mock Tests",
      "Long-Term Performance Monitoring under Expert Guidance",
    ],
    idealFor: "1st Year students preparing for board exams and NEET",
    duration: "1 Academic Year"
  }
];

interface CoursesProps {
  onNavigate: (tab: string) => void;
}

const CourseCard: React.FC<{
  course: any;
  icon: React.ReactNode;
  accentColor: string;
  onNavigate: (tab: string) => void;
  isFeatured?: boolean;
  id?: string;
}> = ({ course, icon, accentColor, onNavigate, isFeatured, id }) => (
  <div id={id} className={`group bg-white rounded-xl border border-slate-100 ${isFeatured ? 'p-8 lg:p-12' : 'p-8'} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden ${isFeatured ? 'lg:flex-row lg:items-center lg:gap-12' : ''}`}>

    <div className={`mb-6 flex items-start justify-between ${isFeatured ? 'lg:flex-col lg:mb-0 lg:justify-center' : ''}`}>
      <div className={`flex items-center justify-center ${isFeatured ? 'lg:scale-125 lg:mb-6' : ''}`}>
        {icon}
      </div>
      <div className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border border-slate-100">
        {course.duration}
      </div>
    </div>

    <div className={`flex flex-col flex-grow ${isFeatured ? 'lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center' : ''}`}>
      <div>
        <h3 className={`font-black text-purple-950 mb-4 leading-tight ${isFeatured ? 'text-2xl lg:text-3xl lg:mb-6' : 'text-xl min-h-[3.5rem]'}`}>{course.title}</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-black text-slate-600 uppercase tracking-wider mb-3">What You'll Learn</h4>
            <ul className="space-y-2">
              {course.learnings.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-950 font-black leading-relaxed">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${accentColor.replace('bg-', 'text-')} mt-0.5`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full justify-between">
        <div className={`bg-slate-50 p-4 rounded-xl border border-slate-100/50 ${isFeatured ? 'lg:p-6 lg:mb-6' : 'mt-6'}`}>
          <h4 className="text-xs font-black text-slate-600 uppercase tracking-wider mb-1">Ideal For</h4>
          <p className={`font-black text-purple-900 leading-snug ${isFeatured ? 'text-base' : 'text-sm'}`}>{course.idealFor}</p>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className={`w-full mt-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all text-white shadow-lg hover:opacity-90 active:scale-95 ${accentColor}`}
        >
          Enroll Now <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </div>
);

const Courses: React.FC<CoursesProps> = ({ onNavigate }) => {
  React.useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash;
      if (hash.includes('-')) {
        const targetId = hash.split('-')[1];
        const element = document.getElementById(`target-${targetId}`);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.classList.add('golden-glow-animation');
            setTimeout(() => {
              element.classList.remove('golden-glow-animation');
            }, 3000);
          }, 500);
        }
      }
    };

    handleNavigation();
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  return (
    <div className="pt-8 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 selection:bg-yellow-200 selection:text-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-20">
          <span className="text-purple-600 font-bold uppercase tracking-[0.2em] text-xs block mb-3">Excellence in Education</span>
          <h1 className="text-5xl md:text-7xl font-black text-purple-950 mb-6 leading-tight">
            Academic Streams
          </h1>
          <p className="text-xl text-slate-900 max-w-2xl mx-auto leading-relaxed font-bold">
            Tailored programs for engineering and medical aspirants, designed to deliver exceptional results in competitive exams and board preparations.
          </p>
        </div>

        {/* MPC Section */}
        <div className="mb-32" id="target-mpc">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20">
                  <img src="/icon/mpc.png" alt="MPC Stream" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-purple-950">MPC Stream</h2>
                  <p className="text-blue-600 font-bold text-sm tracking-widest uppercase">Mathematics, Physics, Chemistry</p>
                </div>
              </div>
              <p className="text-slate-950 text-lg leading-relaxed font-bold">
                Specifically designed for students targeting admissions into premier engineering colleges through <span className="font-bold text-purple-900">IIT-JEE Mains and Advanced</span> exams, while also excelling in intermediate board examinations.
              </p>
            </div>
            <div className="bg-blue-50 px-6 py-3 rounded-full text-blue-700 font-bold text-sm uppercase tracking-wide">
              For Future Engineers
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mpcCourses.slice(0, 4).map((course, idx) => (
              <CourseCard
                key={idx}
                course={course}
                icon={<div className="w-16 h-16 flex items-center justify-center"><img src="/icon/mpc.png" alt="MPC" className="w-full h-full object-contain" /></div>}
                accentColor="bg-blue-600"
                onNavigate={onNavigate}
                id={idx === 0 ? "target-jee" : idx === 1 ? "target-iit" : undefined}
              />
            ))}
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <CourseCard
              course={mpcCourses[4]}
              icon={<div className="w-16 h-16 flex items-center justify-center"><img src="/icon/mpc.png" alt="MPC" className="w-full h-full object-contain" /></div>}
              accentColor="bg-blue-600"
              onNavigate={onNavigate}
              isFeatured={true}
              id="target-longterm"
            />
          </div>
        </div>

        {/* BiPC Section */}
        <div id="target-bipc">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20">
                  <img src="/icon/bipc.png" alt="BiPC Stream" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-purple-950">BiPC Stream</h2>
                  <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase">Biology, Physics, Chemistry</p>
                </div>
              </div>
              <p className="text-slate-950 text-lg leading-relaxed font-bold">
                Tailored for students targeting admissions into top medical colleges through <span className="font-bold text-purple-900">NEET</span>, while also ensuring excellent performance in intermediate board examinations.
              </p>
            </div>
            <div className="bg-emerald-50 px-6 py-3 rounded-full text-emerald-700 font-bold text-sm uppercase tracking-wide">
              For Future Doctors
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {bipcCourses.map((course, idx) => (
              <CourseCard
                key={idx}
                course={course}
                icon={<div className="w-16 h-16 flex items-center justify-center"><img src="/icon/bipc.png" alt="BiPC" className="w-full h-full object-contain" /></div>}
                accentColor="bg-emerald-600"
                onNavigate={onNavigate}
                id={idx === 0 ? "target-neet" : undefined}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Campus Contact Strip - Full Width */}
      <div className="mt-16 w-full bg-purple-950 py-8 lg:py-12 border-y border-yellow-400/30 relative shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-12 gap-y-8 text-xs lg:text-sm font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-white items-center">
          {[
            { name: "Novotel Branch", phone: "9885812847" },
            { name: "Benz Circle Branch", phone: "9121147747" },
            { name: "Edupugallu Branch", phone: "7675992821" },
            { name: "Bharathi Nagar Branch", phone: "6366527168" },
            { name: "Visakhapatnam Branch", phone: "9966789198" },
            { name: "Hyderabad Branch", phone: "6366527167" },
            { name: "Guntur Branch", phone: "6305086386" },
            { name: "Kakinada Branch", phone: "6304531313" }
          ].map((branch, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-yellow-400 whitespace-nowrap">{branch.name}:</span>
              <span className="text-white/90">{branch.phone}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-900 font-black mb-6">Need guidance on which stream to choose?</p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 text-purple-900 font-bold hover:text-purple-700 transition-colors border-b-2 border-yellow-400 hover:border-yellow-500 pb-1"
          >
            Schedule a Counseling Session <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
