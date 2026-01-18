const Gallery = () => {
    const galleryRow1 = [
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/b25f74c0c208851c995df3fe41a15ea551fbb960?width=336", width: "w-[168px]" },
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/0ac49176818ab6dbe13202ff503abf2227cb2069?width=560", width: "w-[280px]" },
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/683f693939e917cd3297ff8c6e8af8554e42eae3?width=560", width: "w-[280px]" },
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/1baa487a59315c54db38e9d2509b9139cca12f04?width=560", width: "w-[280px]" },
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/07536e0af663886d7094bb2f428fbad257f117cd?width=560", width: "w-[280px]" },
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/e30f23ba83e18af62762d04d97d7fb23736884ea?width=166", width: "w-[83px]" },
    ];

    const galleryRow2 = [
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/abfd27d9caa30b255c52b305f32ea927babe0a7c?width=560", width: "w-[280px]" },
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/ac234c04876489cf67819ff29fd69111a0cb2551?width=560", width: "w-[280px]" },
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/b31867e5786bbf758ab14021fa312dfd60fefa4a?width=560", width: "w-[280px]" },
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/cc12aecd308e8fae3240012701bfdd6c09ff6b0d?width=560", width: "w-[280px]" },
        { src: "https://api.builder.io/api/v1/image/assets/TEMP/60e7aa2081693a1b2f14cd4094ea75358bc99a51?width=528", width: "w-[264px]" },
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
            <div className="flex flex-col items-center gap-12">
                {/* Header */}
                <div className="flex flex-col items-center gap-6 max-w-[750px] text-center">
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

                {/* Gallery Grid */}
                <div className="flex flex-col gap-3.5 w-full">
                    {/* Row 1 */}
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-3.5 w-full justify-center lg:justify-start overflow-x-auto">
                        {galleryRow1.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={`Gallery image ${index + 1}`}
                                className={`${image.width} h-[219px] object-cover flex-shrink-0`}
                            />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap lg:flex-nowrap items-center gap-3.5 w-full justify-center lg:justify-start overflow-x-auto">
                        {galleryRow2.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={`Gallery image ${index + 7}`}
                                className={`${image.width} h-[219px] object-cover flex-shrink-0`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery