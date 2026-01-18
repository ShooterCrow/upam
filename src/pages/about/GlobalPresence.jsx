const GlobalPresence = () => {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
                {/* Left: Map Image */}
                <div className="w-full lg:w-auto order-2 lg:order-1">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/f122f099fc34ad51219ddd7f7cfb887e3acb9f12?width=1176"
                        alt="Global presence map"
                        className="w-full lg:w-[588px] h-auto object-contain"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col gap-7 max-w-[542px] order-1 lg:order-2">
                    <div className="flex flex-col gap-2">
                        <p className="text-base font-normal leading-[1.39] tracking-wide text-foreground">
                            Our Global Prescence
                        </p>
                        <h2 className="text-[28px] lg:text-[32px] font-semibold leading-[1.39] tracking-wide text-foreground">
                            A growing network across Africa and beyond
                        </h2>
                    </div>

                    <p className="text-sm text-neutral leading-[1.56] tracking-wide">
                        UPAM's presence spans multiple African nations and international communities, creating a global movement of Africans committed to unity and development. Through our chapters, partners, and digital platforms, we engage thousands of young leaders, professionals, activists, and volunteers worldwide.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default GlobalPresence