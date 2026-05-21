import React, { useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288418/384bf4174dffb9995e47ecfadad2844a1c7d067a_brppyj.jpg", alt: "Get High on Ambitions not Drugs by VMF & UPAM" },
    { id: 2, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779214104/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png", alt: "Leaders Meeting" },
    { id: 3, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288157/dbccf0c78cdb3ba4ed57fe9088f1f7582b761665_sucuow.jpg", alt: "Solar Project by UPAM" },
    { id: 4, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288535/c5dbbb8bc42b46092812e5f987dc66eaf6cb2b68_urieei.jpg", alt: "Community Sanitation by The Team" },
    { id: 5, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288775/bd04a7a4ac0a5ecdb4216d379daccc9797a90c12_ztqcqh.jpg", alt: "School Outreach | VMF & UPAM" },
    { id: 6, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288902/c78f0671096d20f62827357b9a362ac828bdbbf9_kzt0tj.jpg", alt: "Advocacy | UPAM Team Nigeria" },
    { id: 7, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288971/e4f08dd2f9052c23931f4dc05204bf77ec2f38df_ildtog.jpg", alt: "VMF Outreach to Suleja Prison | VMF & UPAM" },
    { id: 8, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779289067/13fcb39e74661c7a9c2b958ca967f5f9bdb3d4d2_htywqy.jpg", alt: "Sanitation UPAM Team" },
    { id: 9, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779289158/86de539d2a97e136c3c2d19e422562df9c06e468_n8r0xw.jpg", alt: "UPAM Community Development" },
  ];

  return (
    <div className="bg-white min-h-screen pb-24 overflow-hidden selection:bg-[#EB010C] selection:text-white relative">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <ScrollReveal direction="up">
          <header className="max-w-7xl mb-10 md:mb-20 text-center mx-auto">
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-bold w-fit uppercase tracking-widest border-l-2 border-[#EB010C]">
                Moments That Inspire
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase mb-10">
              Welcome to our <span className="text-[#EB010C]">Gallery</span> curated with images and video coverage of moments that inspire change
            </h1>
            <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-medium max-w-7xl">
              Moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora.
            </p>
          </header>
        </ScrollReveal>

        {/* Normal Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <ScrollReveal key={img.id} direction="up" delay={Math.min(idx * 0.1, 0.5)}>
              <div
                className="relative group overflow-hidden bg-slate-100 shadow-xl shadow-slate-200/40 cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                    <div className="w-12 h-[2px] bg-[#EB010C] mb-4" />
                    <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">{img.alt}</h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-8 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} strokeWidth={1.5} />
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-18 left-0 w-full text-center pointer-events-none">
            <p className="text-white text-2xl font-black uppercase tracking-widest leading-none drop-shadow-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
