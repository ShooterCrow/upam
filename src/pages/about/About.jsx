import React from 'react'

const About = () => {
    const projects = [
        {
            title: "Clean energy with the Sudan National Energy Research Center",
            description: "Powering a brighter future for Sudan! UPAM is proud to partner with the Sudan National Energy Research Center on a groundbreaking clean energy project."
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
            title: "UPAM Schools/Academy to Prepare Skilled Professionals for Today's Job Market",
            description: "Empowering the next-gen workforce, UPAM Schools/Academy is equipping students with in-demand skills to thrive in today's job market. Future-ready professionals, rising from Africa"
        }
    ];

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
        <main className="w-full">
            {/* Hero Section */}
            <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
                <div className="flex flex-col items-center gap-12 lg:gap-20">
                    {/* Header Text */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 w-full">
                        <div className="flex flex-col gap-2 flex-1 max-w-[573px]">
                            <p className="text-base text-foreground tracking-wide">About Us</p>
                            <h1 className="text-[28px] lg:text-[32px] font-semibold leading-[1.39] tracking-wide text-foreground">
                                Uniting Africa. Empowering People.
                            </h1>
                            <p className="text-sm text-neutral leading-[1.56] tracking-wide">
                                This call invites every African, at home and in the diaspora, to embrace a future where our combined strength becomes the foundation for lasting development.
                            </p>
                        </div>
                        <div className="text-sm text-neutral leading-[1.56] tracking-wide max-w-[340px]">
                            <p>
                                1. Blessed Mukonka, University of Lusaka-Zambia
                                2. Emmanuel Kpan, University of Monrovia-Liberia
                                3. Lord Malvin Harare- Zimbabwe
                            </p>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 w-full">
                        {/* Left Group */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-0">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/7fe6a4a6f31d3a5de91463aff776e511431d8ec3?width=520"
                                alt="UPAM team meeting"
                                className="w-full sm:w-[200px] lg:w-[260px] h-auto lg:h-[340px] object-cover"
                            />
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf?width=1126"
                                alt="UPAM conference"
                                className="w-full sm:w-[400px] lg:w-[563px] h-auto lg:h-[471px] object-cover"
                            />
                        </div>

                        {/* Right Group */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-0">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/0939de8e4e557c4e75f688148d4757b3f0e275bb?width=520"
                                alt="Community members"
                                className="w-full sm:w-[200px] lg:w-[260px] h-auto lg:h-[340px] object-cover"
                            />
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/65edfbd6618650ee6c39d6d3e581e169f2567595?width=714"
                                alt="Cultural celebration"
                                className="w-full sm:w-[280px] lg:w-[357px] h-auto lg:h-[422px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* First Executive */}
            <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
                    <div className="flex-1 max-w-3xl">
                        <p className="text-base text-neutral/80 leading-relaxed">
                            These young men met on Facebook right at the beginning of the COVID-19 pandemic, when Africa went on shut down leaving 90% of the African population in hunger, students stranded, and schools closed. No hope for young people and so UPAM was created on April 6th, 2020, to build a new Africa for Africans, giving hope to the people of African descent, encouraging, and strengthening bonds of solidarity between all indigenous and diasporas people of African descent. UPAM is guided by the African Union's vision of "an integrated, prosperous, and peaceful Africa, driven by its own citizens and representing a dynamic force in the global arena.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 max-w-md bg-brand/5 p-8 rounded-xl">
                        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                            First Executive
                        </h2>
                        <div className="space-y-3">
                            <p className="text-base text-neutral/80">
                                <span className="font-semibold">Global Chairman:</span> Nelson Mansare (Finland)
                            </p>
                            <p className="text-base text-neutral/80">
                                <span className="font-semibold">Global Vice Chairman:</span> Blessed Mukonka (Zambia)
                            </p>
                            <p className="text-base text-neutral/80">
                                <span className="font-semibold">Global Secretary General:</span> Emmanuel Kpan (Liberia)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
                    <div className="flex flex-col gap-10 max-w-xl">
                        <div className="space-y-4">
                            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Our Mission</h2>
                            <p className="text-base text-neutral/80 leading-relaxed">
                                To strengthen bonds of solidarity between all people of African descent, fostering unity and development in Africa; for enhanced independence, industrialization, economic self-reliance as well as promote peace, security and stability within African communities and states.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Our Vision & Values</h2>
                            <p className="text-base text-neutral/80 leading-relaxed">
                                A United Africa for sustainable development for all Africans Descent. UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full max-w-2xl h-64 md:h-80 lg:h-96 bg-gray-900 rounded-xl overflow-hidden">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/b3564abd0e1fb1dfb19649f1092e28adc8a02548?width=1310"
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                        />
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand rounded-full flex items-center justify-center hover:bg-brand/90 transition-all hover:scale-110">
                            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 3V17L16 10L4 3Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Objectives */}
            <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/494bd64452c17d8f73dc5f162ce9131d86969c3b?width=970"
                        alt="UPAM team in action"
                        className="w-full lg:w-1/2 rounded-xl shadow-lg"
                    />
                    <div className="space-y-6 max-w-xl">
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Our Objectives</h2>
                        <p className="text-base text-neutral/80 leading-relaxed">
                            UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future. To encourage and strengthen bonds of solidarity between all people of African descent, Foster the development and unity of Africa, to enhanced independence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Impacts */}
            <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    <div className="flex-1 max-w-2xl">
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10">Our Impact / Projects</h2>
                        <div className="space-y-8">
                            {projects.map((project, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-3 h-3 bg-success rounded-full"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                                        <p className="text-base text-neutral/80">{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 w-full lg:w-1/2">
                        <div className='flex flex-col gap-2'>
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/299e1480b26e20d4a93c2dae4e9560f6a5f58062?width=312"
                                alt="Project impact 1"
                                className="w-full h-35 object-cover rounded-lg"
                            />
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/32886d3aafeab31c00dd5c46ff637405d3d29ced?width=312"
                                alt="Project impact 2"
                                className="w-full h-35 object-cover rounded-lg"
                            />
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/7eea108d6e47b681fd09479390dadef157489196?width=312"
                                alt="Project impact 3"
                                className="w-full h-35 object-cover rounded-lg"
                            />
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/8e8740269f0348d2dbdac7ec20c3eca4a4b2279d?width=312"
                                alt="Project impact 4"
                                className="w-full h-35 object-cover rounded-lg"
                            />
                        </div>
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/69e8a713eff97bf06eb064b12e7f33ad52b7b61d?width=634"
                            alt="Community impact showcase"
                            className="w-full h-48 lg:h-146 object-cover rounded-lg lg:col-span-2 lg:row-span-2"
                        />
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="space-y-12">
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-base font-medium text-foreground mb-2">GALLERY</p>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Moments that inspire change</h2>
                        <p className="text-base text-neutral/80">
                            Moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            "https://api.builder.io/api/v1/image/assets/TEMP/b25f74c0c208851c995df3fe41a15ea551fbb960?width=336",
                            "https://api.builder.io/api/v1/image/assets/TEMP/0ac49176818ab6dbe13202ff503abf2227cb2069?width=560",
                            "https://api.builder.io/api/v1/image/assets/TEMP/683f693939e917cd3297ff8c6e8af8554e42eae3?width=560",
                            "https://api.builder.io/api/v1/image/assets/TEMP/1baa487a59315c54db38e9d2509b9139cca12f04?width=560",
                            "https://api.builder.io/api/v1/image/assets/TEMP/07536e0af663886d7094bb2f428fbad257f117cd?width=560",
                            "https://api.builder.io/api/v1/image/assets/TEMP/e30f23ba83e18af62762d04d97d7fb23736884ea?width=166",
                        ].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Organizational Structure */}
            <section className="w-full bg-gray-50 py-12 md:py-16">
                <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                        <div className="space-y-6 max-w-2xl">
                            <div>
                                <p className="text-base font-medium text-foreground mb-2">Organizational Structure</p>
                                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                                    Built on leadership, powered by community
                                </h2>
                            </div>
                            <div className="space-y-4">
                                <p className="text-base text-neutral/80">
                                    UPAM operates through a structured leadership system that ensures transparency, accountability, and impact. Our organization includes:
                                </p>
                                <p className="text-base text-neutral/80">
                                    This structure allows us to coordinate large-scale programs while staying connected to community needs.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8 max-w-xl">
                            {structureLevels.map((level, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-1">{level.title}</h3>
                                            <p className="text-base text-neutral/80 mb-2">{level.description}</p>
                                            <a href={level.link} className="inline-flex items-center gap-2 text-brand hover:text-brand/80 font-medium">
                                                View Here
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                                                    <path d="M8.94 12.127L13.156 7.89L8.94 3.653a.8.8 0 0 1 .22-1.305.8.8 0 0 1 .874.164l3.154 3.18h-9.67a.8.8 0 0 0-.8.8c0 .442.358.8.8.8h9.67l-3.154 3.18a.8.8 0 0 0 .005 1.131.8.8 0 0 0 1.131-.005z" fill="currentColor" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="space-y-6 max-w-2xl">
                        <div>
                            <p className="text-base font-medium text-foreground mb-2">Our Global Presence</p>
                            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                                A growing network across Africa and beyond
                            </h2>
                        </div>
                        <p className="text-base text-neutral/80 leading-relaxed">
                            UPAM's presence spans multiple African nations and international communities, creating a global movement of Africans committed to unity and development. Through our chapters, partners, and digital platforms, we engage thousands of young leaders, professionals, activists, and volunteers worldwide.
                        </p>
                    </div>
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/f122f099fc34ad51219ddd7f7cfb887e3acb9f12?width=1176"
                        alt="Global presence map"
                        className="w-full lg:w-1/2"
                    />
                </div>
            </section>

            {/* Get Involved */}
            <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="space-y-8 max-w-2xl">
                        <p className="text-base font-medium text-foreground">GET INVOLVED</p>
                        <div className="space-y-4">
                            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Be Part of The Movement</h2>
                            <p className="text-base text-neutral/80 leading-relaxed">
                                We the African People Stand United for Economically Self-sustainable, Development, Freedom, Equality, Justice, Free Trade, Open Borders, Effective Governance, One Nation and the Protection of Our motherland, one people united for Africa, Home of the Brave.
                            </p>
                        </div>
                        <a
                            href="#join"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-white rounded-lg hover:bg-brand/90 transition-all hover:gap-4 font-semibold"
                        >
                            Join Now
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div className="relative w-full lg:w-1/2 h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/743da7307db5c6f3802fcc3250631182d6dcce9b?width=1422"
                            alt="Community gathering"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About