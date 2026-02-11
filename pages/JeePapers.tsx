
import React, { useState } from 'react';
import { Download, ArrowLeft, Search, Calendar, Clock, CheckCircle } from 'lucide-react';

interface JeePapersProps {
    onNavigate: (tab: string) => void;
}

const jeePapers = [
    {
        name: 'JEE Main - 21 Jan 2026 (Shift 2)',
        fileName: 'JEE Main_Question Paper_21-01-2026 (Shift-2).pdf',
        date: '21 January 2026',
        shift: 'Evening Shift',
        phase: 'Phase 1',
    },
    {
        name: 'JEE Main - 22 Jan 2026 (Shift 1)',
        fileName: 'JEE Main_Question Paper_22-01-2026 (Shift-1).pdf',
        date: '22 January 2026',
        shift: 'Morning Shift',
        phase: 'Phase 1',
    },
    {
        name: 'JEE Main - 23 Jan 2026 (Morning)',
        fileName: 'JEE Main_Mathematics_23-01-2026 (Shift(.pdf',
        date: '23 January 2026',
        shift: 'Morning Shift',
        phase: 'Phase 1',
    },
    {
        name: 'JEE Main - 23 Jan 2026 (Evening)',
        fileName: 'JEE (Main)-2026  Phase-1 (23-01-2026)-Evening...pdf',
        date: '23 January 2026',
        shift: 'Evening Shift',
        phase: 'Phase 1',
    },
    {
        name: 'JEE Main - 24 Jan 2026 (Morning)',
        fileName: 'JEE(Main)-2026_Phase-1_(24-01-2026)_Shift 01_fc_VIDISHA.pdf',
        date: '24 January 2026',
        shift: 'Morning Shift',
        phase: 'Phase 1',
    },
    {
        name: 'JEE Main - 24 Jan 2026 (Evening)',
        fileName: 'JEE (Main)-2026  Phase-1 (24-01-2026)-Evening...pdf',
        date: '24 January 2026',
        shift: 'Evening Shift',
        phase: 'Phase 1',
    },
    {
        name: 'JEE Main - 28 Jan 2026 (Morning)',
        fileName: 'JEE (Main)-2026  Phase-1 (28-01-2026)-Shift-01...pdf',
        date: '28 January 2026',
        shift: 'Morning Shift',
        phase: 'Phase 1',
    },
    {
        name: 'JEE Main - 28 Jan 2026 (Evening)',
        fileName: 'JEE MAIN EXAMINATION - 28 - 01 - 2026 (Evening shift)1.pdf',
        date: '28 January 2026',
        shift: 'Evening Shift',
        phase: 'Phase 1',
    },
];

const JeePapers: React.FC<JeePapersProps> = ({ onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPapers = jeePapers.filter((paper) =>
        paper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.shift.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDownload = (fileName: string) => {
        const link = document.createElement('a');
        link.href = `/question_papers/${encodeURIComponent(fileName)}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="pt-8 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 selection:bg-yellow-200 selection:text-purple-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <button
                    onClick={() => onNavigate('previous-papers')}
                    className="flex items-center gap-2 text-sm font-black text-purple-900 hover:text-purple-700 transition-colors mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Previous Papers
                </button>

                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-full px-6 py-2 mb-6">
                        <img src="/icon/mpc.png" alt="JEE" className="w-5 h-5 object-contain" />
                        <span className="text-blue-700 font-black uppercase tracking-[0.2em] text-[10px]">Engineering Entrance</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-purple-950 mb-4 leading-tight">
                        JEE Question Papers
                    </h1>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-semibold">
                        Download JEE Main 2026 question papers for practice. All papers include complete question sets from Phase-1 sessions.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-md mx-auto mb-12">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search papers by date or shift..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all shadow-sm"
                    />
                </div>

                {/* Stats Bar */}
                <div className="flex items-center justify-center gap-8 mb-10 text-xs font-black uppercase tracking-widest text-slate-500">
                    <div className="flex items-center gap-2">
                        <img src="/icon/mpc.png" alt="JEE" className="w-4 h-4 object-contain" />
                        <span>{filteredPapers.length} Papers</span>
                    </div>
                    <div className="w-px h-4 bg-slate-200"></div>
                    <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-blue-600" />
                        <span>2026 Phase 1</span>
                    </div>
                </div>

                {/* Papers List */}
                <div className="space-y-4">
                    {filteredPapers.map((paper, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                        >
                            <div className="flex items-start gap-4 flex-grow">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                    <img src="/icon/mpc.png" alt="JEE" className="w-10 h-10 object-contain" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="font-black text-purple-950 text-base mb-1.5 leading-snug">{paper.name}</h3>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                            <Calendar size={12} /> {paper.date}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                            <Clock size={12} /> {paper.shift}
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest border border-blue-100">
                                            {paper.phase}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => handleDownload(paper.fileName)}
                                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-[0.15em] transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto justify-center"
                            >
                                <Download size={14} />
                                Download
                            </button>
                        </div>
                    ))}
                </div>

                {filteredPapers.length === 0 && (
                    <div className="text-center py-16">
                        <img src="/icon/mpc.png" alt="JEE" className="w-12 h-12 object-contain mx-auto mb-4 opacity-30" />
                        <p className="text-slate-500 font-bold text-lg">No papers match your search.</p>
                        <p className="text-slate-400 font-semibold text-sm mt-1">Try a different search term.</p>
                    </div>
                )}

                {/* Bottom Note */}
                <div className="mt-16 text-center bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <CheckCircle size={16} className="text-blue-600" />
                        <p className="text-blue-900 font-black text-sm">All papers are sourced from official JEE Main examination sessions.</p>
                    </div>
                    <p className="text-blue-700 font-semibold text-xs">Regular practice with previous papers is the most effective method to crack JEE.</p>
                </div>
            </div>
        </div>
    );
};

export default JeePapers;
