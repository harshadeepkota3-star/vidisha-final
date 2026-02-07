
import React, { useState } from 'react';
import { Search, ImageIcon, FlaskConical, BookOpen, GraduationCap, Users, ChevronRight, MapPin, Phone, X, Download } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Events');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = ['Events', 'Labs', 'Classrooms', 'Achievements'];

  const images = [
    // Events - 11 slots
    { id: 1, url: '/events0.JPG', title: 'Event 0', cat: 'Events' },
    { id: 2, url: '/events1.JPG', title: 'Event 1', cat: 'Events' },
    { id: 3, url: '/events2.JPG', title: 'Event 2', cat: 'Events' },
    { id: 4, url: '/events3.JPG', title: 'Event 3', cat: 'Events' },
    { id: 5, url: '/events4.JPG', title: 'Event 4', cat: 'Events' },
    { id: 6, url: '/events5.JPG', title: 'Event 5', cat: 'Events' },
    { id: 7, url: '/events6.JPG', title: 'Event 6', cat: 'Events' },
    { id: 8, url: '/events7.JPG', title: 'Event 7', cat: 'Events' },
    { id: 9, url: '/events8.JPG', title: 'Event 8', cat: 'Events' },
    { id: 10, url: '/events9.JPG', title: 'Event 9', cat: 'Events' },
    { id: 11, url: '/events10.JPG', title: 'Event 10', cat: 'Events' },

    // Labs
    { id: 12, url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800', title: 'Physics Research Lab', cat: 'Labs' },
    { id: 13, url: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=800', title: 'Biology Lab Session', cat: 'Labs' },

    // Classrooms - 7 slots
    { id: 14, url: '/classrooms0.jpg', title: 'Classroom 0', cat: 'Classrooms' },
    { id: 15, url: '/classrooms1.jpg', title: 'Classroom 1', cat: 'Classrooms' },
    { id: 16, url: '/classrooms2.jpeg', title: 'Classroom 2', cat: 'Classrooms' },
    { id: 17, url: '/classrooms3.jpeg', title: 'Classroom 3', cat: 'Classrooms' },
    { id: 18, url: '/classrooms4.jpeg', title: 'Classroom 4', cat: 'Classrooms' },
    { id: 19, url: '/classrooms5.jpg', title: 'Classroom 5', cat: 'Classrooms' },
    { id: 20, url: '/classrooms6.jpg', title: 'Classroom 6', cat: 'Classrooms' },
    { id: 21, url: '/classrooms7.jpg', title: 'Classroom 7', cat: 'Classrooms' },
    // Achievements - 11 slots
    { id: 22, url: '/achievement0.jpg', title: 'Achievement 0', cat: 'Achievements' },
    { id: 23, url: '/achievement1.jpg', title: 'Achievement 1', cat: 'Achievements' },
    { id: 24, url: '/achievement2.jpg', title: 'Achievement 2', cat: 'Achievements' },
    { id: 25, url: '/achievement3.jpg', title: 'Achievement 3', cat: 'Achievements' },
    { id: 26, url: '/achievement4.jpg', title: 'Achievement 4', cat: 'Achievements' },
    { id: 27, url: '/achievement5.jpg', title: 'Achievement 5', cat: 'Achievements' },
    { id: 28, url: '/achievement6.jpg', title: 'Achievement 6', cat: 'Achievements' },
    { id: 29, url: '/achievement7.jpg', title: 'Achievement 7', cat: 'Achievements' },
    { id: 30, url: '/achievement8.jpg', title: 'Achievement 8', cat: 'Achievements' },
  ];

  const filteredImages = images.filter(i => i.cat === filter);


  return (
    <div className="py-10 min-h-screen relative z-10">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-yellow-500 font-black uppercase tracking-[0.3em] text-xs block mb-6">Campus Gallery</span>
          <h1 className="text-6xl font-black text-purple-950 mb-8 leading-tight">Visualizing <span className="text-silver-400">Excellence.</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            A window into the vibrant academic life at Hardcoded Junior College, where MPC and BiPC dreams take flight.
          </p>
        </div>

        {/* Vijayawada Main Branches Section */}
        <div className="mb-20">
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
                image: "/branch_hyderabad.jpeg",
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


        {/* Gallery Section Header */}
        <div className="text-center mb-10">
          <span className="text-yellow-500 font-black uppercase tracking-[0.3em] text-[10px] block mb-2">Visual Journey</span>
          <h2 className="text-5xl font-black text-purple-950">Campus <span className="text-silver-400">Gallery</span></h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border-b-2 ${filter === cat
                ? 'text-purple-950 border-purple-950'
                : 'text-slate-400 border-transparent hover:text-purple-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Masonry Grid */}
        <div className="relative">

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-[2px] space-y-[2px]">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="relative group cursor-pointer break-inside-avoid overflow-hidden bg-white"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-auto transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                {/* Subtle Hover Overlay for Download */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500">
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={img.url}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest text-purple-950 shadow-2xl hover:bg-purple-950 hover:text-white transition-all"
                    >
                      <Download size={14} />
                      Save
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              />
              <div className="absolute -bottom-12 left-0 right-0 flex justify-between items-center text-white/70">
                <span className="text-xs font-bold uppercase tracking-widest">{selectedImage.cat} — {selectedImage.title}</span>
                <a
                  href={selectedImage.url}
                  download
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Download size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Download Original</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Additional Image Areas */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <img src="events5.JPG" className="rounded-3xl shadow-lg mt-12" alt="Scene 1" />
              <img src="classrooms5.jpg" className="rounded-3xl shadow-lg" alt="Scene 2" />
              <img src="events7.JPG" className="rounded-3xl shadow-lg" alt="Scene 3" />
              <img src="classrooms4.jpeg" className="rounded-3xl shadow-lg -mt-12" alt="Scene 4" />
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

      </div>
    </div>
  );
};

export default Gallery;
