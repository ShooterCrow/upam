const GetInvolved = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
                {/* Left: Content */}
                <div className="flex flex-col gap-8 max-w-[525px] order-2 lg:order-1">
                    <p className="text-base font-normal leading-[1.39] tracking-wide text-foreground">
                        GET INVOLVED
                    </p>

                    <div className="flex flex-col items-end gap-2">
                        <div className="flex flex-col gap-3 w-full">
                            <h2 className="text-[28px] lg:text-[32px] font-semibold leading-[1.39] tracking-wide text-foreground">
                                Be Part of The Movement
                            </h2>
                            <p className="text-sm text-neutral leading-[1.69] tracking-[0.56px]">
                                We the African People Stand United for Economically Self-sustainable, Development, Freedom, Equality, Justice, Free Trade, Open Boarders, Effective Governance, One Nation and the Protection of Our motherland, one people united for Africa, Home of the Brave.
                            </p>
                        </div>

                        <a
                            href="#join"
                            className="flex items-center gap-1 mt-2 text-foreground hover:text-brand transition-colors group"
                        >
                            <span className="text-sm font-normal leading-[1.69] tracking-[0.56px]">Join Now</span>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                                <path d="M14.6849 8.76171L6.89062 13.2617" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.5078 14.061C13.5078 14.061 15.4989 9.50976 14.9719 8.59691C14.4448 7.68401 9.50781 7.13281 9.50781 7.13281" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right: Image with overlays */}
                <div className="relative w-full lg:w-[711px] h-[280px] lg:h-[350px] overflow-hidden order-1 lg:order-2">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/743da7307db5c6f3802fcc3250631182d6dcce9b?width=1422"
                        alt="Community gathering"
                        className="w-full h-full object-cover"
                    />
                    {/* Green overlay */}
                    <div className="absolute bottom-0 left-0 w-[261px] h-[163px] bg-success/70"></div>
                    {/* Red overlay */}
                    <div className="absolute top-0 right-0 w-[122px] h-[84px] bg-brand/70"></div>
                </div>
            </div>
        </section>
    );
}

export default GetInvolved