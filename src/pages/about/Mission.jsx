const Mission = () => {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
            <div className="flex flex-col gap-12 lg:gap-20">
                {/* Mission & Vision Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
                    {/* Left: Mission & Vision */}
                    <div className="flex flex-col gap-10 max-w-[430px]">
                        {/* Mission */}
                        <div className="flex flex-col gap-2.5">
                            <h2 className="text-2xl font-semibold leading-[1.39] tracking-wide text-foreground">
                                Our Mission
                            </h2>
                            <p className="text-sm text-neutral leading-[1.69] tracking-[0.56px]">
                                To strengthen bonds of solidarity between all people of African descent, fostering unity and development in Africa; for enhanced independence, industrialization, economic self-reliance as well as promote peace, security and stability within African communities and states.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="flex flex-col gap-2.5">
                            <h2 className="text-2xl font-semibold leading-[1.39] tracking-wide text-foreground">
                                Our Vission & Values
                            </h2>
                            <p className="text-sm text-neutral leading-[1.69] tracking-[0.56px]">
                                A United Africa for sustainable development for all Africans Descent. UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future.
                            </p>
                        </div>
                    </div>

                    {/* Right: Video Player */}
                    <div className="relative w-full max-w-[655px] h-[280px] lg:h-[367px] bg-gray-900 rounded-lg overflow-hidden">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/b3564abd0e1fb1dfb19649f1092e28adc8a02548?width=1310"
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                        />
                        <button
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 lg:w-[58px] lg:h-[58px] bg-brand rounded-full flex items-center justify-center hover:bg-brand/90 transition-colors"
                            aria-label="Play video"
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 3V17L16 10L4 3Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Mission