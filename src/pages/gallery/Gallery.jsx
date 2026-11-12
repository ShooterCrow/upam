import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../../components/ScrollReveal';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288418/384bf4174dffb9995e47ecfadad2844a1c7d067a_brppyj.jpg", alt: "Get High on Ambitions not Drugs by VMF & UPAM" },
  { id: 2, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779214104/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png", alt: "Leaders Meeting" },
  { id: 3, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288157/dbccf0c78cdb3ba4ed57fe9088f1f7582b761665_sucuow.jpg", alt: "Solar Project by UPAM" },
  { id: 4, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288535/c5dbbb8bc42b46092812e5f987dc66eaf6cb2b68_urieei.jpg", alt: "Community Sanitation by The Team" },
  { id: 5, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1782491358/bd04a7a4ac0a5ecdb4216d379daccc9797a90c12_ztqcqh_hbw7fd.jpg", alt: "School Outreach | VMF & UPAM" },
  { id: 6, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288902/c78f0671096d20f62827357b9a362ac828bdbbf9_kzt0tj.jpg", alt: "Youth Together, Work Together" },
  { id: 7, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288971/e4f08dd2f9052c23931f4dc05204bf77ec2f38df_ildtog.jpg", alt: "VMF Outreach to Suleja Prison | VMF & UPAM" },
  { id: 8, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779289067/13fcb39e74661c7a9c2b958ca967f5f9bdb3d4d2_htywqy.jpg", alt: "Sanitation UPAM Team" },
  { id: 9, src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779289158/86de539d2a97e136c3c2d19e422562df9c06e468_n8r0xw.jpg", alt: "UPAM Community Development" },
];

const GalleryGrid = ({ images, onSelect }) => (
  <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
    {images.map((img) => (
      <div key={img.id} className="mb-4 break-inside-avoid">
        <button
          type="button"
          className="group relative block w-full cursor-pointer overflow-hidden bg-black text-left shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EB010C]"
          onClick={() => onSelect(img)}
          aria-label={`Expand image: ${img.alt}`}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <div className="w-8 h-[2px] bg-[#EB010C] mb-3" />
            <p className="text-white text-sm font-black uppercase tracking-tight leading-tight">{img.alt}</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#EB010C] transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
        </button>
      </div>
    ))}
  </div>
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white min-h-screen pb-24 overflow-hidden selection:bg-[#EB010C] selection:text-white">
      <Helmet>
        <title>Gallery & Moments | UPAM - United Pan-Africanist Movement</title>
        <meta name="description" content="View the Gallery showcasing moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora." />
        <meta property="og:title" content="Gallery & Moments | UPAM" />
        <meta property="og:description" content="View the Gallery showcasing moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora." />
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <header className="mb-10 md:mb-16 text-center mx-auto">
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-bold w-fit uppercase tracking-widest border-l-2 border-[#EB010C]">
                Moments That Inspire
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-white uppercase mb-6">
              Welcome to our <span className="text-[#EB010C]">Gallery</span> curated with images and video coverage of moments that inspire change
            </h1>
            <p className="text-base lg:text-lg text-[#555555] leading-relaxed font-medium max-w-3xl mx-auto">
              Moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora.
            </p>
          </header>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryGrid images={galleryImages} onSelect={setSelectedImage} />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm"
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

          <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
            <p className="text-white text-xl font-black uppercase tracking-widest drop-shadow-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
