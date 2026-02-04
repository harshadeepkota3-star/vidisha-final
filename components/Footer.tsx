
import React from 'react';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (tab: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(tab);
  };

  return (
    <footer className="bg-purple-950 text-slate-300 pt-24 pb-12 border-t border-purple-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-10">
              <div className="bg-yellow-400 p-2 rounded-xl">
                <GraduationCap className="text-purple-950 w-7 h-7" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">Hardcoded JC</span>
            </div>
            <p className="text-sm leading-relaxed mb-10 text-slate-400 font-medium">
              A premier intermediate education hub dedicated to excellence in MPC and BiPC streams. Empowering future leaders since 1997.
            </p>
            <div className="flex space-x-6">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-purple-900/50 flex items-center justify-center hover:bg-yellow-400 hover:text-purple-950 transition-all border border-purple-800 shadow-lg shadow-black/20">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-10">Academic Hub</h3>
            <ul className="space-y-5 text-sm font-bold">
              {[
                { name: 'MPC Curriculum', id: 'courses' },
                { name: 'BiPC Pathways', id: 'courses' },
                { name: 'JEE Excellence', id: 'home' },
                { name: 'NEET Preparation', id: 'home' },
                { name: 'Academic Calendar', id: 'about' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => handleLinkClick(link.id, e)}
                    className="hover:text-yellow-400 transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-700 group-hover:bg-yellow-400 transition-colors shadow-sm shadow-black/20"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-10">Campus Links</h3>
            <ul className="space-y-5 text-sm font-bold text-slate-400">
              <li><a href="#gallery" onClick={(e) => handleLinkClick('gallery', e)} className="hover:text-white transition-colors">Physics Laboratory</a></li>
              <li><a href="#gallery" onClick={(e) => handleLinkClick('gallery', e)} className="hover:text-white transition-colors">Chemistry Wing</a></li>
              <li><a href="#gallery" onClick={(e) => handleLinkClick('gallery', e)} className="hover:text-white transition-colors">Botany & Zoology Lab</a></li>
              <li><a href="#gallery" onClick={(e) => handleLinkClick('gallery', e)} className="hover:text-white transition-colors">Digital Library</a></li>
              <li><a href="#gallery" onClick={(e) => handleLinkClick('gallery', e)} className="hover:text-white transition-colors">Residential Block</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-10">Admissions Office</h3>
            <ul className="space-y-8 text-sm">
              <li className="flex items-start space-x-5">
                <MapPin size={24} className="text-yellow-400 shrink-0 mt-1" />
                <span className="text-slate-400 leading-tight font-bold">Road No. 45, Jubilee Hills,<br/>Hyderabad, Telangana 500033</span>
              </li>
              <li className="flex items-center space-x-5">
                <Phone size={24} className="text-yellow-400 shrink-0" />
                <span className="text-slate-400 font-black tracking-widest">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-5">
                <Mail size={24} className="text-yellow-400 shrink-0" />
                <span className="text-slate-400 font-black tracking-widest text-xs uppercase">hq@hardcoded-jc.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-purple-900 flex flex-col md:row items-center justify-between space-y-6 md:space-y-0 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <p>© 2023 Vidisha Educational Society. Academic Precision. Student Success.</p>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-white transition-colors">Accreditation</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
