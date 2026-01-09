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
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Gallery Header */}
        <div className="flex flex-col items-center mb-16">
          {/* GALLERY text with specified properties */}
          <div
            className="w-[339px] h-[22px] flex items-center justify-center mb-6"
            style={{
              fontFamily: 'Lato',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '139%',
              letterSpacing: '2%',
              color: 'black'
            }}
          >
            GALLERY
          </div>
          {/* Welcome text with specified properties */}
          <div
            className="w-[339px] h-[132px] flex items-center justify-center mb-6 px-4"
            style={{
              fontFamily: 'Lato',
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '139%',
              letterSpacing: '2%',
              color: 'black',
              textAlign: 'center'
            }}
          >
            Welcome to our Gallery curated with images and video coverage of moments that inspire change
          </div>

          <div
            className="w-[327px] h-[112px] flex items-center justify-center mb-6 px-4"
            style={{
              fontFamily: 'Lato',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '139%',
              letterSpacing: '2%',
              textAlign: 'center',
              color: '#666666',
              opacity: 1
            }}
          >
            Moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora.
          </div>
        </div>

        {/* Gallery Grid - Mobile first layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
          {/* Left column - 2 images stacked vertically */}
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-medium text-lg">{galleryImages[0].alt}</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-medium text-lg">{galleryImages[1].alt}</p>
              </div>
            </div>
          </div>

          {/* Middle column - Single large image */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <p className="text-white font-medium text-lg">{galleryImages[2].alt}</p>
            </div>
          </div>

          {/* Right column - 3 images stacked vertically */}
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-medium text-lg">{galleryImages[3].alt}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
                <img
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white font-medium text-sm">{galleryImages[4].alt}</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg aspect-square">
                <img
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white font-medium text-sm">{galleryImages[5].alt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;