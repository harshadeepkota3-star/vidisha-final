
import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

interface PreviousPapersProps {
    onNavigate: (tab: string) => void;
}

const paperCategories = [
    {
        title: "JEE PYQ's & Solutions",
        description: 'Access previous year JEE Main question papers with solutions. Practice with authentic exam papers to strengthen your preparation for engineering entrance exams.',
        icon: <img src="/icon/mpc.png" alt="JEE" className="w-8 h-8 object-contain" />,
        accentColor: 'blue',
        bgGradient: 'from-blue-50 to-blue-100/50',
        borderColor: 'border-blue-100',
        buttonBg: 'bg-blue-600 hover:bg-blue-700',
        tagBg: 'bg-blue-50 text-blue-700 border-blue-100',
        navigateTo: 'jee-papers',
        paperCount: 10,
        examType: 'Engineering Entrance',
    },
    {
        title: "NEET PYQ's & Solutions",
        description: 'Access previous year NEET UG question papers with solutions. Prepare effectively for the medical entrance exam with real exam papers and detailed solutions.',
        icon: <img src="/icon/bipc.png" alt="NEET" className="w-8 h-8 object-contain" />,
        accentColor: 'emerald',
        bgGradient: 'from-emerald-50 to-emerald-100/50',
        borderColor: 'border-emerald-100',
        buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
        tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
        navigateTo: 'neet-papers',
        paperCount: 1,
        examType: 'Medical Entrance',
    },
];

const PreviousPapers: React.FC<PreviousPapersProps> = ({ onNavigate }) => {
    return (
        <div className="pt-8 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 selection:bg-yellow-200 selection:text-purple-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="text-center mb-20">
                    <span className="text-purple-600 font-bold uppercase tracking-[0.2em] text-xs block mb-3">Study Resources</span>
                    <h1 className="text-5xl md:text-7xl font-black text-purple-950 mb-6 leading-tight">
                        Previous Papers
                    </h1>
                    <p className="text-xl text-slate-900 max-w-2xl mx-auto leading-relaxed font-bold">
                        Practice with authentic previous year question papers to sharpen your skills and boost your confidence for competitive exams.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {paperCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                        >



                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon & Tag Row */}
                                <div className="mb-6 flex items-start justify-between">
                                    <div className="flex items-center justify-center w-14 h-14 group-hover:scale-110 transition-transform duration-300">
                                        {React.cloneElement(category.icon as React.ReactElement, { className: 'w-14 h-14 object-contain' })}
                                    </div>
                                    <div className={`text-[10px] font-black uppercase tracking-widest ${category.accentColor === 'blue' ? 'text-blue-700' : 'text-emerald-700'}`}>
                                        {category.examType}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-black text-purple-950 text-2xl mb-4 leading-tight">{category.title}</h3>

                                {/* Description */}
                                <p className="text-slate-700 font-semibold text-sm leading-relaxed mb-6 flex-grow">{category.description}</p>

                                {/* Paper Count Info */}
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 mb-6">
                                    <div className="flex items-center gap-3">
                                        <FileText size={18} className="text-purple-600" />
                                        <div>
                                            <h4 className="text-xs font-black text-slate-600 uppercase tracking-wider">Available Papers</h4>
                                            <p className="font-black text-purple-900 text-sm">{category.paperCount} Question {category.paperCount === 1 ? 'Paper' : 'Papers'} with Solutions</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Open Button */}
                                <button
                                    onClick={() => onNavigate(category.navigateTo)}
                                    className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all text-white shadow-lg active:scale-95 ${category.buttonBg}`}
                                >
                                    Open <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                <div className="mt-16 text-center">
                    <p className="text-slate-900 font-black mb-2">New papers are added regularly after each exam session.</p>
                    <p className="text-slate-500 font-semibold text-sm">Practice consistently for the best results!</p>
                </div>

            </div>
        </div>
    );
};

export default PreviousPapers;
