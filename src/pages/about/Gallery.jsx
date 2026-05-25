const row1 = [
    "https://api.builder.io/api/v1/image/assets/TEMP/b25f74c0c208851c995df3fe41a15ea551fbb960?width=400",
    "https://api.builder.io/api/v1/image/assets/TEMP/0ac49176818ab6dbe13202ff503abf2227cb2069?width=400",
    "https://api.builder.io/api/v1/image/assets/TEMP/683f693939e917cd3297ff8c6e8af8554e42eae3?width=400",
    "https://api.builder.io/api/v1/image/assets/TEMP/1baa487a59315c54db38e9d2509b9139cca12f04?width=400",
    "https://api.builder.io/api/v1/image/assets/TEMP/07536e0af663886d7094bb2f428fbad257f117cd?width=400",
    "https://api.builder.io/api/v1/image/assets/TEMP/e30f23ba83e18af62762d04d97d7fb23736884ea?width=400",
];

const row2 = [
    "https://api.builder.io/api/v1/image/assets/TEMP/abfd27d9caa30b255c52b305f32ea927babe0a7c?width=400",
    "https://api.builder.io/api/v1/image/assets/TEMP/ac234c04876489cf67819ff29fd69111a0cb2551?width=400",
    "https://api.builder.io/api/v1/image/assets/TEMP/b31867e5786bbf758ab14021fa312dfd60fefa4a?width=400",
    "https://api.builder.io/api/v1/image/assets/TEMP/cc12aecd308e8fae3240012701bfdd6c09ff6b0d?width=400",
    "https://api.builder.io/api/v1/image/assets/TEMP/60e7aa2081693a1b2f14cd4094ea75358bc99a51?width=400",
];

const GalleryRow = ({ images, reverse = false }) => (
    <div className="w-full relative py-1">
        <div className="relative overflow-hidden">
            <div className="absolute hidden lg:block left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute hidden lg:block right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className={`flex ${reverse ? 'animate-scroll-slow-reverse' : 'animate-scroll-slow'}`}>
                {[...images, ...images].map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-60 md:w-72 lg:w-80 mx-2 group">
                        <div className="relative overflow-hidden bg-black shadow-md transition-all duration-500">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={src}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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

const Gallery = () => {
    return (
        <section className="w-full py-12 lg:py-20 overflow-hidden">
            <div className="flex flex-col items-center gap-10">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 max-w-[750px] text-center px-6">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-base font-normal leading-[1.39] tracking-wide text-foreground">
                            GALLERY
                        </p>
                        <h2 className="text-2xl font-semibold leading-[1.39] tracking-wide text-foreground">
                            Moments that inspire change
                        </h2>
                    </div>
                    <p className="text-base text-neutral leading-[1.39] tracking-wide">
                        Moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora.
                    </p>
                </div>

                {/* Row 1 — scrolls left */}
                <GalleryRow images={row1} />

                {/* Row 2 — scrolls right */}
                <GalleryRow images={row2} reverse />
            </div>
        </section>
    );
};

export default Gallery;
