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
    <footer className="bg-purple-950 text-slate-200 pt-10 pb-6 border-t border-purple-900 relative z-0 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-1 flex flex-col items-start text-left">
            <div className="flex flex-row items-center gap-3 mb-4 group cursor-pointer" onClick={() => onNavigate('home')}>
              <img
                src="/footer_logo.png"
                alt="Vidisha Logo"
                className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="flex flex-col items-start">
                <span className="text-2xl font-black text-white tracking-tighter block leading-none">Vidisha</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-yellow-500 font-black mt-2 block">Educational Society</span>
              </div>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-slate-200 font-medium italic">
              <p className="font-bold text-white not-italic">Vidisha Junior College</p>
              <p>Empowering tomorrow's engineers and doctors through excellence in intermediate education and integrated competitive exam coaching.</p>
              <div className="flex flex-col items-start gap-1 text-[10px] uppercase tracking-widest text-slate-300 font-black not-italic pt-3">
                <span>Founded: 2023 • Location: Vijayawada, AP</span>
                <span className="text-yellow-400/80">"Every house must have an engineer or a doctor"</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <div className="w-full md:w-fit text-left">
              <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-5">Quick Links</h3>
              <ul className="space-y-2.5 text-sm font-bold">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Courses', id: 'courses' },
                  { name: 'Campuses', id: 'gallery' },
                  { name: 'About Us', id: 'about' },
                  { name: 'Previous Papers', id: 'previous-papers' },
                  { name: 'Admissions', id: 'contact' },
                  { name: 'Careers', id: 'careers' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleLinkClick(link.id, e)}
                      className="hover:text-yellow-400 transition-colors block text-left"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <div className="w-full md:w-fit text-left">
              <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-5">Streams</h3>
              <ul className="space-y-2.5 text-sm font-bold">
                {[
                  { name: 'MPC Stream', id: 'courses-mpc' },
                  { name: 'BiPC Stream', id: 'courses-bipc' },
                  { name: 'IIT Preparation', id: 'courses-iit' },
                  { name: 'JEE Coaching', id: 'courses-jee' },
                  { name: 'NEET Coaching', id: 'courses-neet' },
                  { name: 'Long Term', id: 'courses-longterm' }
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleLinkClick(link.id, e)}
                      className="hover:text-yellow-400 transition-colors block text-left"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start text-left">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-5">Registered Office</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-5">
                <MapPin size={22} className="text-yellow-400 shrink-0 mt-1" />
                <span className="text-slate-200 leading-tight font-bold">54-14/8-68, Srinagar Colony SBI Road,<br />Bharathi Nagar, Vijayawada, AP 520008</span>
              </li>
              <li className="flex items-center space-x-5">
                <Phone size={22} className="text-yellow-400 shrink-0" />
                <a href="tel:+919346270306" className="text-slate-200 font-black tracking-widest hover:text-yellow-400 transition-colors">+91 9346270306</a>
              </li>
              <li className="flex items-center space-x-5">
                <Mail size={22} className="text-yellow-400 shrink-0" />
                <a href="mailto:admissions@vidishaedusociety.com" className="text-slate-200 font-black tracking-widest text-xs lowercase hover:text-yellow-400 transition-colors">admissions@vidishaedusociety.com</a>
              </li>
              <li className="flex items-center space-x-5">
                <Clock size={22} className="text-yellow-400 shrink-0" />
                <span className="text-slate-200 font-bold">Mon-Sun: 8 AM - 8 PM</span>
              </li>
            </ul>
            <div className="flex space-x-4 items-center mt-8 ml-1">
              {[
                { Icon: Facebook, color: 'bg-blue-600', href: '#' },
                { Icon: Instagram, color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', href: '#' },
                { Icon: Youtube, color: 'bg-red-600', href: '#' },
                { Icon: Linkedin, color: 'bg-blue-700', href: '#' }
              ].map(({ Icon, color, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${color} hover:scale-110 hover:shadow-lg group shadow-sm`}
                >
                  <Icon size={18} className="transition-transform group-hover:rotate-12" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-purple-900 text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <p className="w-full">© 2026 Vidisha Junior College. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
