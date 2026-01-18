const OrgStructure = () => {
    const structureLevels = [
        {
            title: "Board of trustees",
            description: "Provides strategic direction and oversees UPAM's global mission.",
            link: "#"
        },
        {
            title: "Global Executives",
            description: "Focused on education, community outreach, innovation, partnerships, and media.",
            link: "#"
        },
        {
            title: "National Executives",
            description: "Active teams across African countries driving local programs and initiatives.",
            link: "#"
        },
        {
            title: "Members",
            description: "The heartbeat of UPAM — everyday Africans working together to build a stronger continent.",
            link: "#"
        }
    ];

    return (
        <section className="w-full bg-gray-50 py-12 lg:py-20">
            <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[245px]">
                    {/* Left: Intro */}
                    <div className="flex flex-col gap-4 max-w-[544px]">
                        <div className="flex flex-col gap-2">
                            <p className="text-base font-normal leading-[1.39] tracking-wide text-foreground">
                                Organizational Structure
                            </p>
                            <h2 className="text-[28px] lg:text-[32px] font-semibold leading-[1.39] tracking-wide text-foreground">
                                Built on leadership, powered by community
                            </h2>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            <p className="text-sm text-neutral leading-[1.56] tracking-wide">
                                UPAM operates through a structured leadership system that ensures transparency, accountability, and impact. Our organization includes:
                            </p>
                            <p className="text-sm text-neutral leading-[1.56] tracking-wide">
                                This structure allows us to coordinate large-scale programs while staying connected to community needs.
                            </p>
                        </div>
                    </div>

                    {/* Right: Structure Levels */}
                    <div className="flex flex-col gap-8 max-w-[468px]">
                        {structureLevels.map((level, index) => (
                            <div key={index} className="flex flex-col items-end gap-0">
                                <p className="text-sm text-neutral leading-[1.76] tracking-wide text-left w-full">
                                    <span className="font-semibold text-base text-[#222]">{level.title}</span>
                                    <span className="text-[#222]">:</span> {level.description}
                                </p>
                                <a
                                    href={level.link}
                                    className="flex items-center gap-2 mt-1 text-brand hover:text-brand/80 transition-colors"
                                >
                                    <span className="text-[13px] font-normal">View Here</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.94186 12.1271L13.1568 7.89023L8.94186 3.65335C8.90379 3.60336 8.85543 3.56213 8.80005 3.53246C8.74466 3.50279 8.68355 3.48536 8.62084 3.48136C8.55814 3.47736 8.4953 3.48688 8.4366 3.50927C8.37789 3.53166 8.32468 3.56641 8.28057 3.61116C8.23646 3.6559 8.20248 3.7096 8.18092 3.76862C8.15937 3.82764 8.15075 3.89061 8.15565 3.95325C8.16054 4.01589 8.17884 4.07675 8.2093 4.1317C8.23976 4.18666 8.28168 4.23443 8.33221 4.27177L11.4857 7.45163L3.09531 7.45163C2.97899 7.45163 2.86743 7.49784 2.78518 7.58009C2.70292 7.66235 2.65671 7.77391 2.65671 7.89023C2.65671 8.00655 2.70292 8.11811 2.78518 8.20037C2.86743 8.28262 2.97899 8.32883 3.09531 8.32883L11.4857 8.32883L8.3322 11.5087C8.2502 11.5913 8.20436 11.7031 8.20477 11.8195C8.20518 11.9358 8.25181 12.0473 8.3344 12.1293C8.41699 12.2113 8.52877 12.2572 8.64516 12.2567C8.76155 12.2563 8.87301 12.2097 8.95502 12.1271L8.94186 12.1271Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OrgStructure