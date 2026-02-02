
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

const BackgroundDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* 3D Popped Squares - Layered for depth */}
      <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-purple-900/5 rounded-3xl rotate-12 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] blur-[1px]"></div>
      <div className="absolute top-[40%] right-[2%] w-48 h-48 bg-yellow-400/5 rounded-[2.5rem] -rotate-12 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"></div>
      <div className="absolute bottom-[15%] left-[8%] w-56 h-56 bg-slate-200/20 rounded-[3rem] rotate-45 shadow-[25px_25px_70px_#d1d1d1,-25px_-25px_70px_#ffffff] blur-[2px]"></div>
      <div className="absolute top-[70%] right-[10%] w-24 h-24 bg-purple-900/5 rounded-2xl rotate-6 shadow-[15px_15px_40px_#bebebe,-15px_-15px_40px_#ffffff]"></div>
      <div className="absolute top-[15%] right-[20%] w-16 h-16 bg-yellow-400/10 rounded-xl -rotate-45 shadow-[10px_10px_30px_#bebebe,-10px_-10px_30px_#ffffff]"></div>
      <div className="absolute bottom-[40%] left-[25%] w-40 h-40 bg-purple-900/5 rounded-[2rem] rotate-12 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] opacity-40"></div>
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const navigateTo = useCallback((tab: string) => {
    setActiveTab(tab);
    if (window.location.hash !== `#${tab}`) {
      window.location.hash = tab;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (['home', 'courses', 'gallery', 'about', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'courses': return <Courses />;
      case 'gallery': return <Gallery />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-200 selection:text-purple-900 relative">
      <BackgroundDecor />
      <Navbar activeTab={activeTab} onNavigate={navigateTo} />
      <main className="flex-grow pt-24 overflow-x-hidden relative z-10">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {renderContent()}
        </div>
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
