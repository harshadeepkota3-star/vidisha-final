import React from 'react';
import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone, MapPin, GraduationCap, Clock } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-5 mb-10 group cursor-pointer" onClick={() => onNavigate('home')}>
              <img
                src="/footer_logo.png"
                alt="Vidisha Logo"
                className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="border-l border-white/10 pl-5">
                <span className="text-2xl font-black text-white tracking-tighter block leading-none">Vidisha</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-black mt-1 block">Educational Society</span>
              </div>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-slate-400 font-medium italic">
              <p className="font-bold text-white not-italic">Vidisha Junior College</p>
              <p>Empowering tomorrow's engineers and doctors through excellence in intermediate education and integrated competitive exam coaching.</p>
              <div className="flex flex-col gap-1 text-[10px] uppercase tracking-widest text-slate-500 font-black not-italic pt-4">
                <span>Founded: 2023 • Location: Vijayawada, AP</span>
                <span className="text-yellow-400/80">"Every house must have an engineer or a doctor"</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-10">Quick Links</h3>
            <ul className="space-y-5 text-sm font-bold">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Streams', id: 'streams' },
                { name: 'Campuses', id: 'campuses' },
                { name: 'About Us', id: 'about' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Admissions', id: 'admissions' }
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
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-10">Admissions Office</h3>
            <ul className="space-y-8 text-sm">
              <li className="flex items-start space-x-5">
                <MapPin size={24} className="text-yellow-400 shrink-0 mt-1" />
                <span className="text-slate-400 leading-tight font-bold">54-14/8-68, Srinagar Colony SBI Road,<br />Bharathi Nagar, Vijayawada, AP 520008</span>
              </li>
              <li className="flex items-center space-x-5">
                <Phone size={24} className="text-yellow-400 shrink-0" />
                <span className="text-slate-400 font-black tracking-widest">+91 91211 47747</span>
              </li>
              <li className="flex items-center space-x-5">
                <Mail size={24} className="text-yellow-400 shrink-0" />
                <span className="text-slate-400 font-black tracking-widest text-xs uppercase">admissions@vidishaedusociety.com</span>
              </li>
              <li className="flex items-center space-x-5">
                <Clock size={24} className="text-yellow-400 shrink-0" />
                <span className="text-slate-400 font-bold">Mon-Sat: 9 AM - 6 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-purple-900 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <p>© 2025 Vidisha Junior College. All Rights Reserved.</p>
          <div className="flex space-x-6 items-center">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-yellow-400 transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
