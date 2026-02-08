
import React, { useState } from 'react';
import { Menu, X, GraduationCap, Globe, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Streams', id: 'courses' },
    { label: 'Campuses', id: 'gallery' },
    { label: 'About Us', id: 'about' },
    { label: 'Admissions', id: 'contact' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-[100] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Vidisha Logo"
                className="h-20 w-auto object-contain transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <span className="text-3xl font-black tracking-tighter text-purple-950 block leading-none">Vidisha</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-yellow-600 font-black">Educational Society</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeTab === item.id
                  ? 'text-purple-950 bg-yellow-400 shadow-lg shadow-yellow-400/20'
                  : 'text-slate-900 hover:text-purple-700 hover:bg-slate-50'
                  }`}
              >
                {item.label}
              </a>
            ))}
            <div className="h-8 w-px bg-slate-100 mx-6"></div>
            {/* <button className="bg-purple-950 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-purple-950 transition-all shadow-md">
              Portal Login
            </button> */}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-purple-950 hover:bg-slate-100 rounded-2xl transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}>
        <div className="px-4 pt-6 pb-12 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(item.id, e)}
              className={`flex items-center justify-between px-8 py-6 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${activeTab === item.id
                ? 'text-purple-950 bg-yellow-400'
                : 'text-slate-900 hover:bg-slate-50'
                }`}
            >
              {item.label}
              <ChevronRight size={20} className={activeTab === item.id ? 'opacity-100' : 'opacity-0'} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
