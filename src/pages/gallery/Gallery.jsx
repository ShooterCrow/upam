import React from 'react';

const Gallery = () => {
  // Gallery images from the Home.jsx page
  const galleryImages = [
    { id: 1, src: "https://api.builder.io/api/v1/image/assets/TEMP/b25f74c0c208851c995df3fe41a15ea551fbb960?width=336", alt: "Gallery 1" },
    { id: 2, src: "https://api.builder.io/api/v1/image/assets/TEMP/0ac49176818ab6dbe13202ff503abf2227cb2069?width=560", alt: "Gallery 2" },
    { id: 3, src: "https://api.builder.io/api/v1/image/assets/TEMP/683f693939e917cd3297ff8c6e8af8554e42eae3?width=560", alt: "Gallery 3" },
    { id: 4, src: "https://api.builder.io/api/v1/image/assets/TEMP/1baa487a59315c54db38e9d2509b9139cca12f04?width=560", alt: "Gallery 4" },
    { id: 5, src: "https://api.builder.io/api/v1/image/assets/TEMP/07536e0af663886d7094bb2f428fbad257f117cd?width=560", alt: "Gallery 5" },
    { id: 6, src: "https://api.builder.io/api/v1/image/assets/TEMP/e30f23ba83e18af62762d04d97d7fb23736884ea?width=166", alt: "Gallery 6" },
    { id: 7, src: "https://api.builder.io/api/v1/image/assets/TEMP/abfd27d9caa30b255c52b305f32ea927babe0a7c?width=560", alt: "Gallery 7" },
    { id: 8, src: "https://api.builder.io/api/v1/image/assets/TEMP/ac234c04876489cf67819ff29fd69111a0cb2551?width=560", alt: "Gallery 8" },
    { id: 9, src: "https://api.builder.io/api/v1/image/assets/TEMP/b31867e5786bbf758ab14021fa312dfd60fefa4a?width=560", alt: "Gallery 9" },
    { id: 10, src: "https://api.builder.io/api/v1/image/assets/TEMP/cc12aecd308e8fae3240012701bfdd6c09ff6b0d?width=560", alt: "Gallery 10" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Gallery Header */}
        <div className="flex flex-col items-center mb-8 md:mb-12 lg:mb-16">
          {/* GALLERY text with specified properties */}
          <div
            className="w-full max-w-[339px] md:max-w-[400px] lg:max-w-[450px] h-[22px] flex items-center justify-center mb-6 text-base md:text-lg lg:text-xl font-normal leading-[139%] tracking-[0.02em] text-black"
            style={{ fontFamily: 'Lato' }}
          >
            GALLERY
          </div>
          {/* Welcome text with specified properties */}
          <div
            className="w-full max-w-[339px] md:max-w-[992px] h-auto md:h-[78px] flex items-center justify-center mb-6 px-4 text-2xl md:text-[32px] font-semibold leading-[139%] tracking-[0.02em] text-black text-center"
            style={{ fontFamily: 'Lato' }}
          >
            Welcome to our Gallery curated with images and video coverage of moments that inspire change
          </div>

          <div
            className="w-full max-w-[327px] md:max-w-[534px] h-auto md:h-[44px] flex items-center justify-center mb-6 px-4 text-lg md:text-base font-normal leading-[139%] tracking-[0.02em] text-center text-[#666666]"
            style={{ fontFamily: 'Lato' }}
          >
            Moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora.
          </div>
        </div>

        {/* Gallery Grid - Mobile first layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4">
          {/* Row 1 */}
          {[0, 1, 2].map((idx) => (
            <div key={galleryImages[idx].id} className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
              <img
                src={galleryImages[idx].src}
                alt={galleryImages[idx].alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-medium text-base">{galleryImages[idx].alt}</p>
              </div>
            </div>
          ))}

          {/* Row 2 & 3 - The Asymmetric Middle */}
          {/* Image 3 - Tall Portrait */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square md:aspect-auto md:row-span-2">
            <img
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-white font-medium text-base">{galleryImages[3].alt}</p>
            </div>
          </div>

          {/* Image 4 - Middle stacked top */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
            <img
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-white font-medium text-base">{galleryImages[4].alt}</p>
            </div>
          </div>

          {/* Image 6 - Tall Portrait Right */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square md:aspect-auto md:row-span-2">
            <img
              src={galleryImages[6].src}
              alt={galleryImages[6].alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-white font-medium text-base">{galleryImages[6].alt}</p>
            </div>
          </div>

          {/* Image 5 - Middle stacked bottom */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
            <img
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-white font-medium text-base">{galleryImages[5].alt}</p>
            </div>
          </div>

          {/* Row 4 */}
          {[7, 8, 9].map((idx) => (
            <div key={galleryImages[idx].id} className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
              <img
                src={galleryImages[idx].src}
                alt={galleryImages[idx].alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white font-medium text-base">{galleryImages[idx].alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;