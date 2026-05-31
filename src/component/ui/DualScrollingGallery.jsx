import React from "react";

const GalleryRow = ({ images, reverse = false, grayscale = false }) => (
    <div className="w-full relative py-2">
        <div className="relative overflow-hidden">
            {/* Scrolling container */}
            <div className={`flex ${reverse ? 'animate-scroll-slow-reverse' : 'animate-scroll-slow'} hover:pause-animation`}>
                {[...images, ...images].map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-60 md:w-72 lg:w-80 mx-2 group">
                        <div className="relative overflow-hidden bg-slate-900 shadow-md transition-all duration-500 rounded-sm">
                            <div className={`aspect-[4/3] overflow-hidden transition-all duration-700 ${grayscale ? 'grayscale group-hover:grayscale-0' : ''}`}>
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#EB010C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const DualScrollingGallery = ({ row1, row2, grayscale = false }) => {
    return (
        <div className="w-full relative py-4 lg:py-8">
            {/* Gradient overlays for fade effect on sides */}
            <div className="absolute hidden lg:block left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute hidden lg:block right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-4">
                {/* Row 1 — scrolls left */}
                <GalleryRow images={row1} grayscale={grayscale} />

                {/* Row 2 — scrolls right */}
                {row2 && <GalleryRow images={row2} reverse grayscale={grayscale} />}
            </div>
        </div>
    );
};

export default DualScrollingGallery;
