
import React from 'react';
import { Clock, GraduationCap, ChevronRight, BookOpen, FlaskConical, HardHat, Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react';

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
  }
];

const CourseCard: React.FC<{ course: any; icon: React.ReactNode; accentColor: string }> = ({ course, icon, accentColor }) => (
  <div className="group bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">

    <div className="mb-6 flex items-start justify-between">
      <div className={`p-3 rounded-2xl ${accentColor.replace('bg-', 'bg-').replace('600', '50').replace('500', '50')} ${accentColor.replace('bg-', 'text-')}`}>
        {icon}
      </div>
      <div className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border border-slate-100">
        {course.duration}
      </div>
    </div>

    <h3 className="text-xl font-black text-purple-950 mb-4 leading-tight min-h-[3.5rem]">{course.title}</h3>

    <div className="space-y-6 flex-grow">
      <div>
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">What You'll Learn</h4>
        <ul className="space-y-2">
          {course.learnings.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 font-medium leading-relaxed">
              <CheckCircle2 className={`w-4 h-4 shrink-0 ${accentColor.replace('bg-', 'text-')} mt-0.5`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Ideal For</h4>
        <p className="text-sm font-semibold text-purple-900 leading-snug">{course.idealFor}</p>
      </div>
    </div>

    <button className={`w-full mt-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all text-white shadow-lg hover:opacity-90 active:scale-95 ${accentColor}`}>
      Enroll Now <ArrowRight size={14} />
    </button>
  </div>
);

const Courses: React.FC = () => {
  return (
    <div className="py-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 selection:bg-yellow-200 selection:text-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-20">
          <span className="text-purple-600 font-bold uppercase tracking-[0.2em] text-xs block mb-3">Excellence in Education</span>
          <h1 className="text-5xl md:text-7xl font-black text-purple-950 mb-6 leading-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Streams</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Tailored programs for engineering and medical aspirants, designed to deliver exceptional results in competitive exams and board preparations.
          </p>
        </div>

        {/* MPC Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <HardHat size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-purple-950">MPC Stream</h2>
                  <p className="text-blue-600 font-bold text-sm tracking-widest uppercase">Mathematics, Physics, Chemistry</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Specifically designed for students targeting admissions into premier engineering colleges through <span className="font-bold text-purple-900">IIT-JEE Mains and Advanced</span> exams, while also excelling in intermediate board examinations.
              </p>
            </div>
            <div className="bg-blue-50 px-6 py-3 rounded-full text-blue-700 font-bold text-sm uppercase tracking-wide">
              For Future Engineers
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mpcCourses.map((course, idx) => (
              <CourseCard key={idx} course={course} icon={<HardHat className="w-6 h-6" />} accentColor="bg-blue-600" />
            ))}
          </div>
        </div>

        {/* BiPC Section */}
        <div>
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Stethoscope size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-purple-950">BiPC Stream</h2>
                  <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase">Biology, Physics, Chemistry</p>
                </div>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Tailored for students targeting admissions into top medical colleges through <span className="font-bold text-purple-900">NEET</span>, while also ensuring excellent performance in intermediate board examinations.
              </p>
            </div>
            <div className="bg-emerald-50 px-6 py-3 rounded-full text-emerald-700 font-bold text-sm uppercase tracking-wide">
              For Future Doctors
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {bipcCourses.map((course, idx) => (
              <CourseCard key={idx} course={course} icon={<Stethoscope className="w-6 h-6" />} accentColor="bg-emerald-600" />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-slate-400 font-medium mb-6">Need guidance on which stream to choose?</p>
          <button className="inline-flex items-center gap-2 text-purple-900 font-bold hover:text-purple-700 transition-colors border-b-2 border-yellow-400 hover:border-yellow-500 pb-1">
            Schedule a Counseling Session <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Courses;
