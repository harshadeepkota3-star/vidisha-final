
import React, { useState } from 'react';
import { Search, ImageIcon, FlaskConical, BookOpen, GraduationCap, Users, ChevronRight, MapPin, Phone } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Labs', 'Classrooms', 'Events', 'Achievements'];

  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800', title: 'Physics Research Lab', cat: 'Labs' },
    { id: 2, url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', title: 'Interactive MPC Classroom', cat: 'Classrooms' },
    { id: 3, url: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=800', title: 'Biology Lab Session', cat: 'Labs' },
    { id: 4, url: 'https://images.unsplash.com/photo-1523580494863-6f303122469a?auto=format&fit=crop&q=80&w=800', title: 'Annual Convocation', cat: 'Events' },
    { id: 5, url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800', title: 'Chemistry Analysis', cat: 'Labs' },
    { id: 6, url: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800', title: 'Central Library', cat: 'Classrooms' },
    { id: 7, url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', title: 'Science Fair Winners', cat: 'Achievements' },
    { id: 8, url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', title: 'JEE Workshop', cat: 'Events' },
    { id: 9, url: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800', title: 'Main Campus Entrance', cat: 'Achievements' },
    { id: 10, url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800', title: 'Student Study Zone', cat: 'Classrooms' },
    { id: 11, url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', title: 'Cultural Festival', cat: 'Events' },
    { id: 12, url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800', title: 'BiPC Field Trip', cat: 'Labs' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(i => i.cat === filter);

  return (
    <div className="py-20 min-h-screen relative z-10">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-yellow-500 font-black uppercase tracking-[0.3em] text-xs block mb-6">Campus Gallery</span>
          <h1 className="text-6xl font-black text-purple-950 mb-8 leading-tight">Visualizing <span className="text-silver-400">Excellence.</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            A window into the vibrant academic life at Hardcoded Junior College, where MPC and BiPC dreams take flight.
          </p>
        </div>

        {/* Vijayawada Main Branches Section */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-black uppercase tracking-[0.3em] text-xs block mb-4">Our Presence</span>
            <h2 className="text-5xl font-black text-purple-950">Our <span className="text-silver-400">Branches</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[4px]">
            {[
              {
                id: 1,
                location: "Vijayawada",
                address: "Chaganti Mercantile, Near Nirmala Convent Signal, Benz Circle, Vijayawada, Andhra Pradesh 520010",
                title: "Benz Circle Branch",
                image: "/branch_benz_circle.png",
                phone: "9123456789"
              },
              {
                id: 2,
                location: "Vijayawada",
                address: "54-14/8-68, Srinagar Colony SBI Road, near Novotel Hotel, Bharathi Nagar, Vijayawada, Andhra Pradesh 520008",
                title: "Bharathi Nagar Principal Branch",
                image: "/branch_bharathi_nagar_1.png",
                phone: "9123456780"
              },
              {
                id: 3,
                location: "Vijayawada",
                address: "VMC Revenue, 54-1-7/2D, High Tension Line Road, Bharathi Nagar, Ward 2, Vijayawada, Andhra Pradesh 520008",
                title: "High Tension Line Branch",
                image: "/branch_bharathi_nagar_2.png",
                phone: "9123456781"
              },
              {
                id: 4,
                location: "Vijayawada",
                address: "Vijayawada Rd, beside Anjaneya Towers, Edupugallu Vijayawada, Andhra Pradesh 521151",
                title: "Edupugallu Branch",
                image: "/branch_edupugallu.png",
                phone: "9123456782"
              },
              {
                id: 5,
                location: "Visakhapatnam",
                address: "Rednam Gardens, 10-12-1/b, Jail Road Junction opp: Central Park, Ramnagar, Visakhapatnam, Andhra Pradesh 530002",
                title: "Visakhapatnam Branch",
                image: "/branch_visakhapatnam.png",
                phone: "9346270306"
              },
              {
                id: 6,
                location: "Hyderabad",
                address: "1st Floor, ATC, ATC - Anil Trading Co., Bolaram Rd, Lal Bahadur Colony, Tirumalagiri, Secunderabad, Telangana 500015",
                title: "Hyderabad Branch",
                image: "/branch_hyderabad.png",
                phone: "6366527167"
              },
              {
                id: 7,
                location: "Guntur",
                address: "YS Plaza, beside Gorantla Venkateswara Swami Temple, Gorantla, Guntur, Andhra Pradesh 522034",
                title: "Guntur Branch",
                image: "/branch_guntur.png",
                phone: "6305086386"
              },
              {
                id: 8,
                location: "Kakinada",
                address: "D.no.2-4-24, LRKS Plaza, Behind Anand theatre Opp: abhaya blood bank, Kakinada, Andhra Pradesh 533003",
                title: "Kakinada Branch",
                image: "/branch_kakinada.png",
                phone: "6304531313"
              }
            ].map((branch) => (
              <div key={branch.id} className="group flex flex-col pt-8 h-full relative">
                {/* Enhanced Professional Card */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-700 flex flex-col flex-grow relative overflow-visible">

                  {/* Floating Image Area - Further Refined Fit */}
                  <div className="absolute -top-[14px] left-0 right-0 flex justify-center pointer-events-none">
                    <img
                      src={branch.image}
                      alt={branch.title}
                      className="h-60 w-full object-cover transition-transform duration-700 rounded-2xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.visibility = 'hidden';
                      }}
                    />
                  </div>

                  {/* Body Content - Added 10px More Space */}
                  <div className="p-8 pt-60 flex flex-col h-full bg-white rounded-2xl">
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-2 bg-slate-50 text-slate-500 px-5 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-[0.2em] border border-slate-50 shadow-sm">
                        <MapPin size={14} className="text-purple-500" />
                        {branch.location}
                      </span>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-purple-950 font-black text-[1.75rem] mb-3 leading-tight group-hover:text-purple-700 transition-colors">
                        {branch.title}
                      </h3>
                      <p className="text-slate-500 text-base leading-relaxed font-semibold mb-6">
                        {branch.address}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-3">
                      <div className="bg-purple-50 p-2 rounded-lg">
                        <Phone size={14} className="text-purple-600" />
                      </div>
                      <span className="text-purple-950 font-black text-lg tracking-wider">
                        {branch.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2 ${filter === cat
                ? 'bg-purple-900 text-white border-purple-900 shadow-xl'
                : 'bg-white text-slate-400 border-slate-100 hover:border-purple-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="relative group overflow-hidden rounded-[3rem] bg-slate-50 border border-slate-100 cursor-pointer break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-yellow-400 text-xs font-black uppercase tracking-widest block mb-2">{img.cat}</span>
                    <h3 className="text-white font-bold text-2xl leading-tight">{img.title}</h3>
                  </div>
                  <button className="p-4 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-yellow-400 hover:text-purple-950 transition-all">
                    <Search size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Image Areas */}
        <div className="mt-40 border-t border-slate-100 pt-32">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg mt-12" alt="Scene 1" />
              <img src="https://images.unsplash.com/photo-1523580494863-6f303122469a?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Scene 2" />
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg" alt="Scene 3" />
              <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-lg -mt-12" alt="Scene 4" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-5xl font-black text-purple-950 mb-8 leading-tight">Beyond <span className="text-yellow-500">Academics.</span></h2>
              <p className="text-xl text-slate-500 leading-relaxed mb-10 font-medium">
                Our campus in the heart of the educational hub is designed to nurture discipline, creativity, and mental well-being for our MPC and BiPC students.
              </p>
              <div className="space-y-8">
                {[
                  { icon: <FlaskConical className="text-purple-700" />, title: "Precision Laboratories", desc: "Equipped for rigorous practical testing for both streams." },
                  { icon: <BookOpen className="text-purple-700" />, title: "Entrance Preparation Room", desc: "A quiet space dedicated to JEE and NEET mock examinations." },
                  { icon: <Users className="text-purple-700" />, title: "Student Council Hub", desc: "Where student leadership and peer support flourished." },
                  { icon: <GraduationCap className="text-purple-700" />, title: "Counseling Center", desc: "Professional guidance for college and career roadmaps." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="bg-slate-50 p-4 rounded-2xl h-fit border border-slate-100">{item.icon}</div>
                    <div>
                      <h4 className="font-black text-purple-950 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 bg-purple-950 rounded-[4rem] p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-400/5 rotate-12 -translate-y-1/2 rounded-[50%]"></div>
          <ImageIcon className="mx-auto text-yellow-400 mb-8" size={64} />
          <h2 className="text-4xl font-black mb-6">Discover Campus Life</h2>
          <p className="text-purple-200 text-lg mb-12 max-w-2xl mx-auto">Explore more about our campus facilities, our hostel blocks, and our dedicated entrance exam coaching zones.</p>
          <button className="bg-yellow-400 text-purple-950 font-black px-14 py-6 rounded-2xl hover:bg-white transition-all text-lg shadow-2xl">
            Book a Campus Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
