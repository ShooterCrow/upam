const Impacts = () => {
    const projects = [
        {
            title: "Clean energy with the Sudan National Energy Research Center",
            description: "Powering a brighter future for Sudan!  Upam is proud to partner with the Sudan National Energy Research Center on a groundbreaking clean energy project."
        },
        {
            title: "UPAM Finance to Support Vulnerable Communities",
            description: "Making a difference, one community at a time. UPAM Finance is stepping up to support vulnerable communities with financial inclusion initiatives"
        },
        {
            title: "Health Program Across Africa",
            description: "Healthy lives, brighter futures UPAM is rolling out health programs across Africa, touching lives and building stronger communities."
        },
        {
            title: "UPAM Schools/Academy to Prepare Skilled Professionals for Todays Job Market",
            description: "Empowering the next-gen workforce, UPAM Schools/Academy is equipping students with in-demand skills to thrive in today's job market. Future-ready professionals, rising from Africa"
        }
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
                {/* Left: Projects List */}
                <div className="flex flex-col gap-11 flex-1">
                    <h2 className="text-2xl font-semibold leading-[1.39] tracking-wide text-foreground">
                        Our Impacts /Projects
                    </h2>

                    <div className="flex flex-col gap-7">
                        {projects.map((project, index) => (
                            <div key={index} className="flex gap-8">
                                {/* Green Dot */}
                                <div className="flex-shrink-0 mt-3">
                                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4.5" cy="4.5" r="4.5" fill="#40D300" />
                                    </svg>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-base font-normal leading-[1.39] tracking-wide text-foreground">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-neutral leading-[1.56] tracking-wide">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Images Stack */}
                <div className="flex items-center gap-5">
                    {/* Small Images Column */}
                    <div className="flex flex-col gap-8">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/299e1480b26e20d4a93c2dae4e9560f6a5f58062?width=312"
                            alt="Project impact 1"
                            className="w-full max-w-[156px] h-[104px] object-cover"
                        />
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/32886d3aafeab31c00dd5c46ff637405d3d29ced?width=312"
                            alt="Project impact 2"
                            className="w-full max-w-[156px] h-[104px] object-cover"
                        />
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/7eea108d6e47b681fd09479390dadef157489196?width=312"
                            alt="Project impact 3"
                            className="w-full max-w-[156px] h-[104px] object-cover"
                        />
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/8e8740269f0348d2dbdac7ec20c3eca4a4b2279d?width=312"
                            alt="Project impact 4"
                            className="w-full max-w-[156px] h-[104px] object-cover"
                        />
                    </div>

                    {/* Large Image */}
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/69e8a713eff97bf06eb064b12e7f33ad52b7b61d?width=634"
                        alt="Community impact showcase"
                        className="w-full max-w-[317px] h-auto lg:h-[512px] object-cover hidden lg:block"
                    />
                </div>
            </div>
        </section>
    );
}

export default Impacts
