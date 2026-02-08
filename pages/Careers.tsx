
import React, { useState, useEffect } from 'react';
import {
    User,
    BookOpen,
    Target,
    Phone,
    Clock,
    GraduationCap,
    Briefcase,
    Upload,
    CheckCircle2,
    Send,
    MessageCircle,
    FileText,
    ChevronRight,
    Info
} from 'lucide-react';

const HybridDropdown: React.FC<{
    name: string;
    value: string;
    placeholder: string;
    options: string[];
    onChange: (e: any) => void;
    required?: boolean;
}> = ({ name, value, placeholder, options, onChange, required }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="relative">
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsOpen(true)}
                    placeholder={placeholder}
                    required={required}
                    autoComplete="off"
                    className={`form-input-custom pr-12 transition-all ${isOpen ? 'border-purple-900 ring-4 ring-purple-900/10' : ''}`}
                />
                <div
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer p-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <ChevronRight size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-100 rounded-3xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="max-h-60 overflow-y-auto custom-scrollbar">
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    onChange({ target: { name, value: option } });
                                    setIsOpen(false);
                                }}
                                className="w-full text-left px-8 py-4 hover:bg-purple-50 hover:text-purple-950 font-bold text-slate-600 transition-colors border-b border-slate-50 last:border-0"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const Careers: React.FC = () => {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState<number | string>('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // File states
    const [photoFile, setPhotoFile] = useState<string | null>(null);
    const [resumeFile, setResumeFile] = useState<string | null>(null);
    const [certFile, setCertFile] = useState<string | null>(null);
    const [idFile, setIdFile] = useState<string | null>(null);
    const [marksFile, setMarksFile] = useState<string | null>(null);

    const [formData, setFormData] = useState<any>({
        applicantType: 'Teacher', // Default to Teacher
        fullName: '',
        gender: '',
        mobile: '',
        email: '',
        city: '',
        state: 'Andhra Pradesh',

        // Teaching Staff fields
        positionApplyingFor: '',
        subjectSpecialization: '',
        streamExpertise: '',
        highestQualification: '',
        subjectDegree: '',
        universityName: '',
        passingYear: '',
        percentageCGPA: '',
        totalExperience: '',
        jrCollegeExp: 'No',
        prevInstitutions: '',
        employmentType: 'Full-Time',
        workHours: 'Both',
        weekendClasses: 'No',

        // Student fields
        currentClass: '',
        studentStream: '',
        schoolCollegeName: '',
        boardOfEducation: '',
        previousPercentage: '',
        medium: 'English',
        applyingContext: '', // Scholarship, Internship etc
        areaOfInterest: '',
        achievements: '',
        careerGoals: '',

        whyApply: '',
        declaration: false
    });

    useEffect(() => {
        if (dob) {
            const birthDate = new Date(dob);
            const today = new Date();
            let ageCalculated = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                ageCalculated--;
            }
            setAge(ageCalculated >= 0 ? ageCalculated : '');
        }
    }, [dob]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as any;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev: any) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev: any) => ({ ...prev, [name]: value }));
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/academic_brochure.pdf';
        link.download = 'Vidisha_Prospectus_2026.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleCounselling = () => {
        const message = encodeURIComponent("Hello! I'm interested in career opportunities at Vidisha Junior College. Could you please guide me?");
        window.open(`https://wa.me/919346270306?text=${message}`, '_blank');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.declaration) {
            alert("Please agree to the declaration to proceed.");
            return;
        }
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isSubmitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center py-20 animate-in fade-in zoom-in duration-700">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="w-28 h-28 bg-green-100/50 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                        <CheckCircle2 className="w-14 h-14 text-green-600 animate-bounce" />
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-purple-950 mb-8 tracking-tight">Application Received!</h1>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                        Your career aspirations have been successfully recorded. Our senior admission counselors will review your profile and reach out within <span className="text-purple-700 font-bold">24-48 hours</span> to guide you forward.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="w-full sm:w-auto bg-purple-950 text-white font-black px-12 py-5 rounded-2xl hover:bg-yellow-400 hover:text-purple-950 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
                        >
                            Return to Portal
                        </button>
                        <button
                            onClick={handleCounselling}
                            className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 font-bold px-10 py-5 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                        >
                            WhatsApp Support <MessageCircle size={20} className="text-green-500" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-10 lg:py-20 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="mb-16 lg:mb-24 text-center">
                    <span className="text-yellow-500 font-black text-xs uppercase tracking-[0.3em] block mb-4">Admissions Open 2026-27</span>
                    <h1 className="text-4xl lg:text-7xl font-black text-purple-950 mb-6 leading-tight">
                        Career Portal & <br /> Admissons <span className="text-purple-700">Enquiry</span>
                    </h1>
                    <p className="text-lg lg:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed italic">
                        "Your journey towards becoming an Engineer or Doctor starts here. Let us guide you to the right path."
                    </p>
                </div>

                <div className="space-y-12 lg:space-y-20">
                    {/* Top Info Cards - Horizontal */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                        {/* 1. Admission Guide */}
                        <div className="bg-purple-950 text-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-black mb-6 flex items-center gap-3">
                                    <Info className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8" />
                                    Admission Guide
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { s: 'Step 1', t: 'Application', c: 'bg-yellow-400' },
                                        { s: 'Step 2', t: 'Counseling', c: 'bg-purple-400' },
                                        { s: 'Step 3', t: 'Verification', c: 'bg-purple-400' },
                                        { s: 'Step 4', t: 'Admission', c: 'bg-purple-400' }
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${step.c}`}></div>
                                            <p className="text-xs lg:text-sm font-bold tracking-wide uppercase text-purple-100/80">{step.s}: <span className="text-white">{step.t}</span></p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-purple-200/60 text-[10px] font-black uppercase tracking-widest mt-8">Simple 4-Step Process</p>
                        </div>

                        {/* 2. Coaching Features */}
                        <div className="p-8 lg:p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 bg-yellow-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                                    <GraduationCap className="text-yellow-600 w-7 h-7" />
                                </div>
                                <h4 className="text-xl lg:text-2xl font-black text-purple-950 mb-3 tracking-tight leading-tight">MPC & BiPC Integrated Coaching</h4>
                                <p className="text-slate-500 text-sm lg:text-base font-medium leading-relaxed">
                                    Strategic preparation for JEE, NEET, and EAMCET integrated with regular intermediate.
                                </p>
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-3 text-purple-700 font-extrabold text-[10px] lg:text-xs uppercase tracking-[0.2em]">
                                <CheckCircle2 className="w-4 h-4" /> Results Driven Approach
                            </div>
                        </div>

                        {/* 3. Helpdesk */}
                        <div className="p-8 lg:p-10 bg-purple-50 rounded-[2.5rem] border border-purple-100 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-lg flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 bg-white rounded-2xl mb-6 flex items-center justify-center shadow-sm">
                                    <Phone className="w-7 h-7 text-purple-700" />
                                </div>
                                <h4 className="font-black text-xl lg:text-2xl text-purple-950 mb-3">Admission Helpdesk</h4>
                                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">
                                    Need assistance? Our counselors are here to help you.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <a href="tel:+919346270306" className="text-purple-900 font-black text-xl lg:text-2xl hover:text-purple-700 transition-colors block">
                                    +91 9346270306
                                </a>
                                <a href="mailto:admissions@vidishaedusociety.com" className="text-purple-700 font-bold text-xs lg:text-sm hover:text-purple-900 transition-colors break-all">
                                    admissions@vidishaedusociety.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Careers Portal Form - Centered and Wider */}
                    <div className="max-w-5xl mx-auto w-full">
                        <div className="bg-slate-50 rounded-[3rem] lg:rounded-[5rem] p-6 lg:p-20 border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/5 blob-shape"></div>

                            <form onSubmit={handleSubmit} className="space-y-16 lg:space-y-24 relative z-10">

                                {/* 1. Applicant Category & Basic Information */}
                                <section>
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                            <User size={24} />
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl font-black text-purple-950">Basic Information</h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                        <div className="space-y-3 md:col-span-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Applicant Type*</label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <label className={`flex items-center justify-center gap-3 cursor-pointer px-6 py-4 rounded-2xl border-2 transition-all ${formData.applicantType === 'Teacher' ? 'bg-purple-950 text-white border-purple-950 shadow-lg' : 'bg-white text-slate-600 border-slate-100 hover:border-purple-200'}`}>
                                                    <input type="radio" name="applicantType" value="Teacher" checked={formData.applicantType === 'Teacher'} onChange={handleInputChange} className="hidden" />
                                                    <Briefcase size={20} />
                                                    <span className="font-bold">Teaching Staff</span>
                                                </label>
                                                <label className={`flex items-center justify-center gap-3 cursor-pointer px-6 py-4 rounded-2xl border-2 transition-all ${formData.applicantType === 'Student' ? 'bg-purple-950 text-white border-purple-950 shadow-lg' : 'bg-white text-slate-600 border-slate-100 hover:border-purple-200'}`}>
                                                    <input type="radio" name="applicantType" value="Student" checked={formData.applicantType === 'Student'} onChange={handleInputChange} className="hidden" />
                                                    <GraduationCap size={20} />
                                                    <span className="font-bold">Student Applicant</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="space-y-3 md:col-span-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Full Name (as per certificates)*</label>
                                            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter Full Name" required className="form-input-custom" />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Gender*</label>
                                            <HybridDropdown
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleInputChange}
                                                placeholder="Select or Type Gender"
                                                options={["Male", "Female", "Other"]}
                                                required
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Date of Birth*</label>
                                            <input type="date" required value={dob} onChange={(e) => setDob(e.target.value)} className="form-input-custom" />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Mobile Number (Primary)*</label>
                                            <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" required className="form-input-custom" />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Email Address*</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="example@email.com" required className="form-input-custom" />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Current City / Town*</label>
                                            <HybridDropdown
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                placeholder="Select or Type City"
                                                options={["Vijayawada", "Visakhapatnam", "Guntur", "Kakinada", "Hyderabad"]}
                                                required
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">State*</label>
                                            <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="Andhra Pradesh" required className="form-input-custom" />
                                        </div>

                                        <div className="space-y-4 md:col-span-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Passport Size Photograph*</label>
                                            <div className="relative border-2 border-dashed border-slate-200 rounded-[2rem] p-8 text-center hover:border-purple-300 transition-all group cursor-pointer bg-white/50">
                                                {photoFile ? (
                                                    <div className="flex flex-col items-center">
                                                        <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                                                        <p className="text-purple-900 font-bold text-sm truncate max-w-full px-4">{photoFile}</p>
                                                        <button type="button" onClick={(e) => { e.stopPropagation(); setPhotoFile(null); }} className="text-red-500 text-[10px] font-black uppercase mt-2 hover:underline">Remove</button>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Upload className="w-8 h-8 text-slate-300 mx-auto mb-4 group-hover:text-purple-400 group-hover:-translate-y-1 transition-all" />
                                                        <p className="text-slate-400 text-sm font-bold">Upload Photograph (JPG/PNG)</p>
                                                    </>
                                                )}
                                                <input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files?.[0]?.name || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {formData.applicantType === 'Teacher' && (
                                    <>
                                        {/* 2. Position & Expertise */}
                                        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                                    <Target size={24} />
                                                </div>
                                                <h2 className="text-2xl lg:text-3xl font-black text-purple-950">Position Details</h2>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Applying For*</label>
                                                    <HybridDropdown
                                                        name="positionApplyingFor"
                                                        value={formData.positionApplyingFor}
                                                        onChange={handleInputChange}
                                                        placeholder="Select or Type Position"
                                                        options={["Lecturer", "Junior Lecturer", "Guest Faculty", "Senior Faculty", "Lab Assistant"]}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Subject Specialization*</label>
                                                    <input type="text" name="subjectSpecialization" value={formData.subjectSpecialization} onChange={handleInputChange} placeholder="e.g. Maths, Physics, English" required className="form-input-custom" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Stream Expertise*</label>
                                                    <HybridDropdown
                                                        name="streamExpertise"
                                                        value={formData.streamExpertise}
                                                        onChange={handleInputChange}
                                                        placeholder="Select or Type Stream"
                                                        options={["MPC", "BiPC", "Both", "CEC", "MEC"]}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Employment Type*</label>
                                                    <HybridDropdown
                                                        name="employmentType"
                                                        value={formData.employmentType}
                                                        onChange={handleInputChange}
                                                        placeholder="Select or Type Type"
                                                        options={["Full-Time", "Part-Time", "Guest Faculty", "Contract"]}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </section>

                                        {/* 3. Educational Qualifications */}
                                        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                                    <GraduationCap size={24} />
                                                </div>
                                                <h2 className="text-2xl lg:text-3xl font-black text-purple-950">Educational Qualifications</h2>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Highest Qualification*</label>
                                                    <HybridDropdown
                                                        name="highestQualification"
                                                        value={formData.highestQualification}
                                                        onChange={handleInputChange}
                                                        placeholder="Select or Type Qualification"
                                                        options={["B.Sc", "M.Sc", "B.Ed", "M.Ed", "Ph.D", "M.Phil", "PG"]}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Subject of Degree*</label>
                                                    <input type="text" name="subjectDegree" value={formData.subjectDegree} onChange={handleInputChange} required className="form-input-custom" />
                                                </div>
                                                <div className="space-y-3 md:col-span-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">University / College Name*</label>
                                                    <input type="text" name="universityName" value={formData.universityName} onChange={handleInputChange} required className="form-input-custom" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Year of Passing*</label>
                                                    <input type="number" name="passingYear" value={formData.passingYear} onChange={handleInputChange} required className="form-input-custom" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Percentage / CGPA*</label>
                                                    <input type="text" name="percentageCGPA" value={formData.percentageCGPA} onChange={handleInputChange} required className="form-input-custom" />
                                                </div>
                                            </div>
                                        </section>

                                        {/* 4. Teaching Experience */}
                                        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                                    <BookOpen size={24} />
                                                </div>
                                                <h2 className="text-2xl lg:text-3xl font-black text-purple-950">Teaching Experience</h2>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Total Years of Experience*</label>
                                                    <input type="text" name="totalExperience" value={formData.totalExperience} onChange={handleInputChange} placeholder="e.g. 5 Years" required className="form-input-custom" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Experience at Junior College Level?*</label>
                                                    <div className="flex gap-6 pt-2">
                                                        {['Yes', 'No'].map(val => (
                                                            <label key={val} className="flex items-center gap-3 cursor-pointer group">
                                                                <input type="radio" name="jrCollegeExp" value={val} checked={formData.jrCollegeExp === val} onChange={handleInputChange} className="w-5 h-5 accent-purple-900" />
                                                                <span className="font-bold text-slate-950">{val}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="space-y-3 md:col-span-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Previous Institution(s) Name</label>
                                                    <textarea name="prevInstitutions" value={formData.prevInstitutions} onChange={handleInputChange} rows={2} className="form-input-custom resize-none" />
                                                </div>
                                            </div>
                                        </section>

                                        {/* 5. Preferences & Uploads */}
                                        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                                    <Clock size={24} />
                                                </div>
                                                <h2 className="text-2xl lg:text-3xl font-black text-purple-950">Work Preferences & Uploads</h2>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Preferred Working Hours*</label>
                                                    <HybridDropdown
                                                        name="workHours"
                                                        value={formData.workHours}
                                                        onChange={handleInputChange}
                                                        placeholder="Select or Type Hours"
                                                        options={["Morning", "Evening", "Both", "Any"]}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Willingness for Weekend Classes?*</label>
                                                    <div className="flex gap-6 pt-2">
                                                        {['Yes', 'No'].map(val => (
                                                            <label key={val} className="flex items-center gap-3 cursor-pointer group">
                                                                <input type="radio" name="weekendClasses" value={val} checked={formData.weekendClasses === val} onChange={handleInputChange} className="w-5 h-5 accent-purple-900" />
                                                                <span className="font-bold text-slate-950">{val}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Resume / CV (PDF)*</label>
                                                    <div className="relative border-2 border-dashed border-slate-200 rounded-[2rem] p-8 text-center hover:border-purple-300 transition-all group cursor-pointer bg-white/50">
                                                        {resumeFile ? (
                                                            <div className="flex flex-col items-center">
                                                                <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                                                                <p className="text-purple-900 font-bold text-sm truncate max-w-full px-4">{resumeFile}</p>
                                                                <button type="button" onClick={(e) => { e.stopPropagation(); setResumeFile(null); }} className="text-red-500 text-[10px] font-black uppercase mt-2 hover:underline">Remove</button>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <Upload className="w-8 h-8 text-slate-300 mx-auto mb-4 group-hover:text-purple-400 group-hover:-translate-y-1 transition-all" />
                                                                <p className="text-slate-400 text-sm font-bold">Upload Resume (PDF)</p>
                                                            </>
                                                        )}
                                                        <input type="file" accept=".pdf" onChange={(e) => setResumeFile(e.target.files?.[0]?.name || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Educational Certificates (Optional)</label>
                                                    <div className="relative border-2 border-dashed border-slate-200 rounded-[2rem] p-8 text-center hover:border-purple-300 transition-all group cursor-pointer bg-white/50">
                                                        {certFile ? (
                                                            <div className="flex flex-col items-center">
                                                                <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                                                                <p className="text-purple-900 font-bold text-sm truncate max-w-full px-4">{certFile}</p>
                                                                <button type="button" onClick={(e) => { e.stopPropagation(); setCertFile(null); }} className="text-red-500 text-[10px] font-black uppercase mt-2 hover:underline">Remove</button>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <Upload className="w-8 h-8 text-slate-300 mx-auto mb-4 group-hover:text-purple-400 group-hover:-translate-y-1 transition-all" />
                                                                <p className="text-slate-400 text-sm font-bold">Upload Certificates (PDF/JPG)</p>
                                                            </>
                                                        )}
                                                        <input type="file" multiple onChange={(e) => setCertFile(e.target.files?.[0]?.name || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                )}

                                {formData.applicantType === 'Student' && (
                                    <>
                                        {/* 2. Academic Information */}
                                        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                                    <BookOpen size={24} />
                                                </div>
                                                <h2 className="text-2xl lg:text-3xl font-black text-purple-950">Academic Information</h2>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Current Class*</label>
                                                    <HybridDropdown
                                                        name="currentClass"
                                                        value={formData.currentClass}
                                                        onChange={handleInputChange}
                                                        placeholder="Select or Type Class"
                                                        options={["Inter 1st Year", "Inter 2nd Year", "10th Class", "Other"]}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Stream*</label>
                                                    <HybridDropdown
                                                        name="studentStream"
                                                        value={formData.studentStream}
                                                        onChange={handleInputChange}
                                                        placeholder="Select or Type Stream"
                                                        options={["MPC", "BiPC", "CEC", "MEC"]}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3 md:col-span-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">College / School Name*</label>
                                                    <input type="text" name="schoolCollegeName" value={formData.schoolCollegeName} onChange={handleInputChange} required className="form-input-custom" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Board of Education*</label>
                                                    <input type="text" name="boardOfEducation" value={formData.boardOfEducation} onChange={handleInputChange} placeholder="e.g. State Board, CBSE" required className="form-input-custom" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">SSC / Previous Class Percentage*</label>
                                                    <input type="text" name="previousPercentage" value={formData.previousPercentage} onChange={handleInputChange} required className="form-input-custom" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Medium of Instruction*</label>
                                                    <HybridDropdown
                                                        name="medium"
                                                        value={formData.medium}
                                                        onChange={handleInputChange}
                                                        placeholder="Select or Type Medium"
                                                        options={["English", "Telugu", "Hindi"]}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </section>

                                        {/* 3. Interest & Goals */}
                                        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                                    <Target size={24} />
                                                </div>
                                                <h2 className="text-2xl lg:text-3xl font-black text-purple-950">Career Interest</h2>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Applying For*</label>
                                                    <HybridDropdown
                                                        name="applyingContext"
                                                        value={formData.applyingContext}
                                                        onChange={handleInputChange}
                                                        placeholder="Select or Type Opportunity"
                                                        options={["Scholarship", "Internship", "Campus Program", "Academic Support Role", "Volunteer"]}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Area of Interest*</label>
                                                    <input type="text" name="areaOfInterest" value={formData.areaOfInterest} onChange={handleInputChange} placeholder="e.g. Teaching Assistance, Lab Support" required className="form-input-custom" />
                                                </div>
                                                <div className="space-y-3 md:col-span-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Achievements / Olympiads (Optional)</label>
                                                    <textarea name="achievements" value={formData.achievements} onChange={handleInputChange} rows={2} className="form-input-custom resize-none" />
                                                </div>
                                                <div className="space-y-3 md:col-span-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Career Goals*</label>
                                                    <input type="text" name="careerGoals" value={formData.careerGoals} onChange={handleInputChange} required className="form-input-custom" />
                                                </div>
                                            </div>
                                        </section>

                                        {/* 4. Student Uploads */}
                                        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-12 h-12 bg-purple-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                                    <Upload size={24} />
                                                </div>
                                                <h2 className="text-2xl lg:text-3xl font-black text-purple-950">Upload Documents</h2>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Bonafide Certificate or ID Proof*</label>
                                                    <div className="relative border-2 border-dashed border-slate-200 rounded-[2rem] p-8 text-center hover:border-purple-300 transition-all group cursor-pointer bg-white/50">
                                                        {idFile ? (
                                                            <div className="flex flex-col items-center">
                                                                <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                                                                <p className="text-purple-900 font-bold text-sm truncate max-w-full px-4">{idFile}</p>
                                                                <button type="button" onClick={(e) => { e.stopPropagation(); setIdFile(null); }} className="text-red-500 text-[10px] font-black uppercase mt-2 hover:underline">Remove</button>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <FileText className="w-8 h-8 text-slate-300 mx-auto mb-4 group-hover:text-purple-400 group-hover:-translate-y-1 transition-all" />
                                                                <p className="text-slate-400 text-sm font-bold">Upload ID/Bonafide (PDF/Image)</p>
                                                            </>
                                                        )}
                                                        <input type="file" onChange={(e) => setIdFile(e.target.files?.[0]?.name || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Marks Memo (Optional)</label>
                                                    <div className="relative border-2 border-dashed border-slate-200 rounded-[2rem] p-8 text-center hover:border-purple-300 transition-all group cursor-pointer bg-white/50">
                                                        {marksFile ? (
                                                            <div className="flex flex-col items-center">
                                                                <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                                                                <p className="text-purple-900 font-bold text-sm truncate max-w-full px-4">{marksFile}</p>
                                                                <button type="button" onClick={(e) => { e.stopPropagation(); setMarksFile(null); }} className="text-red-500 text-[10px] font-black uppercase mt-2 hover:underline">Remove</button>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <Upload className="w-8 h-8 text-slate-300 mx-auto mb-4 group-hover:text-purple-400 group-hover:-translate-y-1 transition-all" />
                                                                <p className="text-slate-400 text-sm font-bold">Upload Marks Memo (PDF/Image)</p>
                                                            </>
                                                        )}
                                                        <input type="file" onChange={(e) => setMarksFile(e.target.files?.[0]?.name || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                )}

                                {/* 10. Consent & CTAs */}
                                {/* Final Section */}
                                <section className="pt-10 border-t border-slate-200">
                                    <div className="space-y-8 mb-12">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 ml-1">Why do you want to apply?*</label>
                                            <textarea name="whyApply" value={formData.whyApply} onChange={handleInputChange} rows={3} placeholder="Tell us about your motivation..." required className="form-input-custom resize-none" />
                                        </div>

                                        <label className="flex items-start gap-4 cursor-pointer group pt-4">
                                            <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleInputChange} required className="w-6 h-6 mt-1 accent-purple-900 rounded" />
                                            <span className="font-bold text-slate-800 group-hover:text-slate-950 transition-colors text-sm lg:text-base leading-relaxed">
                                                I hereby declare that the information provided in this application is true and accurate to the best of my knowledge.
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <button type="submit" className="flex-1 bg-purple-950 text-white font-black px-8 py-6 rounded-3xl hover:bg-yellow-400 hover:text-purple-950 transition-all shadow-2xl flex items-center justify-center gap-4 group text-lg lg:text-xl">
                                            Submit Application <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                        <button type="button" onClick={handleCounselling} className="flex-1 bg-white border-4 border-purple-950 text-purple-950 font-black px-8 py-6 rounded-3xl hover:bg-purple-950 hover:text-white transition-all shadow-xl flex items-center justify-center gap-4 text-lg lg:text-xl">
                                            WhatsApp Support <MessageCircle size={24} />
                                        </button>
                                    </div>

                                    <div className="mt-8 text-center">
                                        <button type="button" onClick={handleDownload} className="text-slate-400 font-black uppercase tracking-widest text-xs hover:text-purple-700 transition-colors">
                                            Download Prospectus 2026 (PDF)
                                        </button>
                                    </div>
                                </section>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .form-input-custom {
          width: 100%;
          background-color: white;
          border: 2px solid #e2e8f0;
          border-radius: 1.25rem;
          padding: 1rem 1.25rem;
          font-weight: 700;
          color: #0f172a;
          outline: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          font-size: 0.95rem;
        }

        .form-input-custom::placeholder {
          color: #64748b;
          font-weight: 500;
        }
        
        @media (min-width: 1024px) {
          .form-input-custom {
            border-radius: 1.5rem;
            padding: 1.25rem 1.75rem;
            font-size: 1rem;
          }
        }

        .form-input-custom:focus {
          border-color: #581c87;
          background-color: #fff;
          box-shadow: 0 0 0 4px rgba(88, 28, 135, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transform: translateY(-1px);
        }

        .form-input-custom:hover:not(:focus) {
          border-color: #cbd5e1;
          background-color: #fcfdfe;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        .blob-shape {
          clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
          border-bottom-left-radius: 50%;
        }
      `}</style>
        </div>
    );
};

export default Careers;
