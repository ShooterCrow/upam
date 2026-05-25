import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Target,
    Eye,
    Shield,
    Zap,
    Activity,
    Globe,
    ArrowRight,
    ChevronRight,
    Play,
    CheckCircle2
} from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import WorldMapWithMarkers from '../../component/ui/WorldMapWithMarkers';
import { Link } from 'react-router-dom';

const About = () => {
    const projects = [
        {
            title: "Clean energy with the Sudan National Energy Research Center",
            description: "Powering a brighter future for Sudan! UPAM is proud to partner with the Sudan National Energy Research Center on a groundbreaking clean energy project.",
            icon: <Zap className="w-6 h-6 text-[#EB010C]" />
        },
        {
            title: "UPAM Finance to Support Vulnerable Communities",
            description: "Making a difference, one community at a time. UPAM Finance is stepping up to support vulnerable communities with financial inclusion initiatives",
            icon: <Activity className="w-6 h-6 text-[#EB010C]" />
        },
        {
            title: "Health Program Across Africa",
            description: "Healthy lives, brighter futures UPAM is rolling out health programs across Africa, touching lives and building stronger communities.",
            icon: <Shield className="w-6 h-6 text-[#EB010C]" />
        },
        {
            title: "UPAM Academy to Prepare Skilled Professionals for Today's Job Market",
            description: "Empowering the next-gen workforce, UPAM Academy is equipping students with in-demand skills to thrive in today's job market. Future-ready professionals, rising from Africa",
            icon: <Users className="w-6 h-6 text-[#EB010C]" />
        }
    ];

    const structureLevels = [
        {
            title: "Board of trustees",
            description: "Provides strategic direction and oversees UPAM's global mission.",
            icon: <Shield className="w-5 h-5" />
        },
        {
            title: "Global Executives",
            description: "Focused on education, community outreach, innovation, partnerships, and media.",
            icon: <Globe className="w-5 h-5" />
        },
        {
            title: "National Executives",
            description: "Active teams across African countries driving local programs and initiatives.",
            icon: <Activity className="w-5 h-5" />
        },
        {
            title: "Members",
            description: "The heartbeat of UPAM — everyday Africans working together to build a stronger continent.",
            icon: <Users className="w-5 h-5" />
        }
    ];

    const imageRevealVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5, y: 50 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                delay: i * 0.15,
                duration: 0.8
            }
        })
    };

    return (
        <div className="bg-[#FAFAFC] text-slate-900 font-['Inter',_sans-serif] overflow-x-hidden pt-[72px] lg:pt-[75px]">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#FAFAFC] to-[#F3F4F6] pt-24 pb-20 px-4 md:px-8 border-b border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(235,1,12,0.03),transparent_50%)] pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#EB010C]/5 blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <ScrollReveal direction="up">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 w-full">
                            <div className="flex flex-col gap-4 flex-1 max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-bold w-fit uppercase tracking-widest border-l-2 border-[#EB010C]">
                                    About Us
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900 uppercase">
                                    Uniting Africa.<br /> Empowering People.
                                </h1>
                                <p className="text-base text-slate-600 leading-relaxed font-medium">
                                    This call invites every African, at home and in the diaspora, to embrace a future where our combined strength becomes the foundation for lasting development.
                                </p>
                            </div>
                            <div className="lg:max-w-xs border-l-2 border-[#EB010C]/20 pl-6 py-2">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Core Leadership</p>
                                <ul className="space-y-2 text-sm font-black text-slate-800 tracking-tight">
                                    <li>1. Blessed Mukonka, University of Lusaka-Zambia</li>
                                    <li>2. Emmanuel Kpan, University of Monrovia-Liberia</li>
                                    <li>3. Lord Malvin, Harare- Zimbabwe</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Stimulating Image Grid */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { src: "https://api.builder.io/api/v1/image/assets/TEMP/7fe6a4a6f31d3a5de91463aff776e511431d8ec3?width=520", alt: "meeting", y: 0 },
                            { src: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png", alt: "conference", y: 20 },
                            { src: "https://api.builder.io/api/v1/image/assets/TEMP/0939de8e4e557c4e75f688148d4757b3f0e275bb?width=520", alt: "community", y: -20 },
                            { src: "https://api.builder.io/api/v1/image/assets/TEMP/65edfbd6618650ee6c39d6d3e581e169f2567595?width=714", alt: "celebration", y: 10 }
                        ].map((img, idx) => (
                            <motion.div
                                key={idx}
                                custom={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={imageRevealVariants}
                                style={{ translateY: img.y }}
                                className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Executives Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
                    <ScrollReveal direction="left" className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
                                Our Foundation & Purpose
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed font-normal">
                                These young men met on Facebook right at the beginning of the COVID-19 pandemic, when Africa went on shut down leaving a significant amount of the African population in hunger, students stranded, and schools closed. No hope for young people and so UPAM was created on April 6th, 2020, to build a new Africa for Africans, giving hope to the people of African descent, encouraging, and strengthening bonds of solidarity between all indigenous and diasporas people of African descent. UPAM is guided by the African Union's vision of "an integrated, prosperous, and peaceful Africa, driven by its own citizens and representing a dynamic force in the global arena.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" className="space-y-6">
                        <div className="bg-[#EB010C]/5 p-8 border border-[#EB010C]/10 space-y-6">
                            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">First Executive</h3>
                            <div className="space-y-4">
                                {[
                                    { rank: "Global Chairman", name: "Nelson Mansare", loc: "Finland" },
                                    { rank: "Global Vice Chairman", name: "Blessed Mukonka", loc: "Zambia" },
                                    { rank: "Global Sec. General", name: "Emmanuel Kpan", loc: "Liberia" }
                                ].map((leader, i) => (
                                    <div key={i} className="flex gap-4 items-start pb-4 border-b border-[#EB010C]/10 last:border-0 last:pb-0">
                                        <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-white text-[#EB010C] font-black text-xs border border-red-50">
                                            0{i + 1}
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[10px] font-bold text-[#EB010C] uppercase tracking-widest">{leader.rank}</p>
                                            <p className="text-base font-black text-slate-900 tracking-tight">{leader.name}</p>
                                            <p className="text-[11px] text-slate-500 font-medium">({leader.loc})</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 bg-[#F8F9FB] border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal direction="left" className="space-y-12">
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 bg-[#EB010C] flex items-center justify-center text-white">
                                <Target size={24} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Our Mission</h3>
                                <p className="text-base text-slate-600 leading-relaxed font-normal">
                                    To strengthen bonds of solidarity between all people of African descent, fostering unity and development in Africa; for enhanced independence, industrialization, economic self-reliance as well as promote peace, security and stability within African communities and states.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="shrink-0 w-12 h-12 bg-white flex items-center justify-center text-[#EB010C] border border-slate-100">
                                <Eye size={24} />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Our Vision & Values</h3>
                                <p className="text-base text-slate-600 leading-relaxed font-normal">
                                    A United Africa for sustainable development for all Africans Descent. UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" className="relative group cursor-pointer">
                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288157/dbccf0c78cdb3ba4ed57fe9088f1f7582b761665_sucuow.jpg"
                                alt="Manifesto"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition-all duration-300" />
                            {/* <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white flex items-center justify-center text-[#EB010C] shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                    <Play size={28} className="fill-[#EB010C] ml-1" />
                                </div>
                            </div> */}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Objectives Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
                    <ScrollReveal direction="right" className="lg:w-1/2">
                        <img
                            src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779444587/b39e14ad312073a43c669522ff40f459de6562d7_kj94sw.jpg"
                            alt="Children"
                            className="w-full"
                        />
                    </ScrollReveal>
                    <ScrollReveal direction="left" className="lg:w-1/2 space-y-6">
                        <div className="inline-block px-3 py-1 bg-red-50 text-[#EB010C] text-[10px] font-bold uppercase tracking-widest border-l-2 border-[#EB010C]">
                            Continental Evolution
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">Our Objectives</h2>
                        <p className="text-lg text-slate-600 leading-relaxed font-normal">
                            UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future. To encourage and strengthen bonds of solidarity between all people of African descent, Foster the development and unity of Africa, to enhanced independence.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="space-y-2">
                                <CheckCircle2 className="text-[#EB010C]" size={20} />
                                <p className="text-xs font-bold text-slate-800 uppercase tracking-tight leading-snug">Strengthen Continental Bonds</p>
                            </div>
                            <div className="space-y-2">
                                <CheckCircle2 className="text-[#EB010C]" size={20} />
                                <p className="text-xs font-bold text-slate-800 uppercase tracking-tight leading-snug">Foster Sustainable Development</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Impacts Section */}
            <section className="py-24 px-4 md:px-8 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/2 space-y-10">
                        <ScrollReveal direction="up" className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
                                Our Impact / Projects
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                Transforming vision into reality through localized initiatives.
                            </p>
                        </ScrollReveal>

                        <div className="space-y-6">
                            {projects.map((project, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1} direction="left">
                                    <div className="group p-6 bg-[#FAFAFC] border border-slate-100 hover:border-[#EB010C]/30 transition-all duration-300">
                                        <div className="flex gap-6">
                                            <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-slate-50 group-hover:scale-110 transition-transform duration-300">
                                                {project.icon}
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-lg font-black text-slate-900 tracking-tight">{project.title}</h3>
                                                <p className="text-sm text-slate-500 leading-relaxed font-normal">{project.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <ScrollReveal direction="right" className="grid grid-cols-2 gap-2">
                            <div className="space-y-2">
                                <img src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779444118/a86b14415310e14f4ed5a4cb89951ad0db7ae864_fyhfr1.jpg" className="w-full h-40 object-cover shadow-sm" />
                                <img src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779444118/70dd0b520993a5333ae91ad3aea4a5c1f9c28bda_jof0bx.jpg" className="w-full h-60 object-cover shadow-sm" />
                                <img src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288535/c5dbbb8bc42b46092812e5f987dc66eaf6cb2b68_urieei.jpg" className="w-full h-40 object-cover shadow-sm" />
                                <img src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779444118/01074a347ad2a5893730f4eb52ea1f748655c398_dfon1e.jpg" className="w-full h-40 object-cover shadow-sm" />
                            </div>
                            <div className="h-full">
                                <img src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779444119/eaf2f006b2f7aa3519db89bfdf88db9c4fb75418_o3onl3.jpg" className="w-full h-full object-cover shadow-sm" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <ScrollReveal direction="up">
                <section className="py-0">
                    <div className="bg-[#003115] py-16 px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x divide-white/10">
                            {[
                                { value: "50+", label: "Countries & Chapters", desc: "A growing global network across Africa and the diaspora" },
                                { value: "200+", label: "Lives Impacted", desc: "Lives impacted by UPAM programs and initiatives" },
                                { value: "10+", label: "Countries Reached", desc: "Countries impacted meaningfully by UPAM" },
                                { value: "800+", label: "Volunteers", desc: "The organisation thrived on the remarkable dedication of over 800 volunteers" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center px-6 py-8 lg:py-4">
                                    <p className="text-4xl md:text-5xl lg:text-6xl font-black text-[#EB010C] mb-2">{stat.value}</p>
                                    <p className="text-white font-black text-xs uppercase tracking-widest mb-2">{stat.label}</p>
                                    <p className="text-white/60 text-xs leading-relaxed max-w-[180px] mx-auto">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Gallery Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
                <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-4">
                    <p className="text-[#EB010C] font-black text-xs uppercase tracking-widest">GALLERY</p>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">Moments that Inspire Change</h2>
                    <p className="text-base text-slate-500 font-medium leading-relaxed">
                        Moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora.
                    </p>
                </ScrollReveal>

                <div className="w-full -mx-4 md:-mx-8">
                    {/* Row 1 — scrolls left */}
                    <div className="relative overflow-hidden py-1">
                        <div className="absolute hidden lg:block left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute hidden lg:block right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                        <div className="flex animate-scroll-slow">
                            {[
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288418/384bf4174dffb9995e47ecfadad2844a1c7d067a_brppyj.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779214104/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288157/dbccf0c78cdb3ba4ed57fe9088f1f7582b761665_sucuow.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288775/bd04a7a4ac0a5ecdb4216d379daccc9797a90c12_ztqcqh.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779443390/4295b57ab6d99005f92560cffef9c5e1d2acc0f4_unr3mf.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779443386/9ab71b884c373f83d32fabdda6f6590c98490278_jprsen.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288418/384bf4174dffb9995e47ecfadad2844a1c7d067a_brppyj.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779214104/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288157/dbccf0c78cdb3ba4ed57fe9088f1f7582b761665_sucuow.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288775/bd04a7a4ac0a5ecdb4216d379daccc9797a90c12_ztqcqh.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779443390/4295b57ab6d99005f92560cffef9c5e1d2acc0f4_unr3mf.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779443386/9ab71b884c373f83d32fabdda6f6590c98490278_jprsen.jpg",
                            ].map((src, idx) => (
                                <div key={idx} className="flex-shrink-0 w-60 md:w-72 lg:w-80 mx-2 group">
                                    <div className="relative overflow-hidden bg-black shadow-md">
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img src={src} alt={`gallery-${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#EB010C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 — scrolls right */}
                    <div className="relative overflow-hidden py-1 mt-3">
                        <div className="absolute hidden lg:block left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                        <div className="absolute hidden lg:block right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                        <div className="flex animate-scroll-slow-reverse">
                            {[
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288775/bd04a7a4ac0a5ecdb4216d379daccc9797a90c12_ztqcqh.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779443386/9ab71b884c373f83d32fabdda6f6590c98490278_jprsen.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288157/dbccf0c78cdb3ba4ed57fe9088f1f7582b761665_sucuow.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779443390/4295b57ab6d99005f92560cffef9c5e1d2acc0f4_unr3mf.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779214104/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288418/384bf4174dffb9995e47ecfadad2844a1c7d067a_brppyj.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288775/bd04a7a4ac0a5ecdb4216d379daccc9797a90c12_ztqcqh.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779443386/9ab71b884c373f83d32fabdda6f6590c98490278_jprsen.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288157/dbccf0c78cdb3ba4ed57fe9088f1f7582b761665_sucuow.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779443390/4295b57ab6d99005f92560cffef9c5e1d2acc0f4_unr3mf.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779214104/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288418/384bf4174dffb9995e47ecfadad2844a1c7d067a_brppyj.jpg",
                            ].map((src, idx) => (
                                <div key={idx} className="flex-shrink-0 w-60 md:w-72 lg:w-80 mx-2 group">
                                    <div className="relative overflow-hidden bg-black shadow-md">
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img src={src} alt={`gallery-${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#EB010C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Structure Section */}
            <section className="py-24 bg-[#003115] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003115] via-[#004a1f] to-[#EB010C]/20 opacity-50" />
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal direction="left" className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-[#EB010C] font-black text-xs uppercase tracking-widest">Organizational Structure</p>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight uppercase">
                                Built on Leadership,<br /> Powered by Community.
                            </h2>
                            <p className="text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                                UPAM operates through a structured leadership system that ensures transparency, accountability, and impact. Our organization includes:
                            </p>
                            <p className="text-sm text-slate-400 font-medium italic">
                                This structure allows us to coordinate large-scale programs while staying connected to community needs.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white/5 border border-white/10">
                                <p className="text-3xl font-black text-[#EB010C]">50+</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Country Chapters</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10">
                                <p className="text-3xl font-black text-[#EB010C]">250+</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Active Members</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" className="space-y-4">
                        {structureLevels.map((level, idx) => (
                            <div key={idx} className="group p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 border-l-4 hover:border-l-[#EB010C] border-l-transparent">
                                <div className="flex gap-5 items-center">
                                    <div className="shrink-0 p-3 bg-white/10 text-[#EB010C]">
                                        {level.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-black tracking-tight uppercase">{level.title}</h3>
                                        <p className="text-sm text-slate-400 font-normal leading-relaxed">{level.description}</p>
                                    </div>
                                    <ChevronRight className="ml-auto text-slate-600 group-hover:text-white transition-colors" size={20} />
                                </div>
                            </div>
                        ))}
                    </ScrollReveal>
                </div>
            </section>

            {/* Global Presence Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    <ScrollReveal direction="left" className="space-y-8 max-w-2xl">
                        <div className="space-y-4">
                            <p className="text-[#EB010C] font-black text-xs uppercase tracking-widest">Our Global Presence</p>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
                                A growing network across Africa and beyond
                            </h2>
                        </div>
                        <p className="text-base text-slate-600 leading-relaxed font-normal">
                            UPAM's presence spans multiple African nations and international communities, creating a global movement of Africans committed to unity and development. Through our chapters, partners, and digital platforms, we engage thousands of young leaders, professionals, activists, and volunteers worldwide.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal direction="right" className="lg:w-1/2">
                        <WorldMapWithMarkers />
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 md:px-8 bg-[#FAFAFC] border-t border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
                    <ScrollReveal direction="left" className="space-y-8 max-w-2xl">
                        <p className="text-[#EB010C] font-black text-xs uppercase tracking-widest">GET INVOLVED</p>
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">Be Part of The Movement</h2>
                            <p className="text-base text-slate-600 leading-relaxed font-normal">
                                We the African People Stand United for Economically Self-sustainable, Development, Freedom, Equality, Justice, Free Trade, Open Borders, Effective Governance, One Nation and the Protection of Our motherland, one people united for Africa, Home of the Brave.
                            </p>
                        </div>
                        <motion.a
                            whileHover={{ x: 10 }}
                            className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 font-black text-xs uppercase tracking-widest group"
                        >
                            <Link to={"/register"}>Join The Movement Now</Link>

                            <ArrowRight size={18} className="text-[#EB010C]" />
                        </motion.a>
                    </ScrollReveal>
                    <ScrollReveal direction="right" className="relative lg:w-1/2 aspect-video overflow-hidden">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/743da7307db5c6f3802fcc3250631182d6dcce9b?width=1422"
                            alt="Community gathering"
                            className="w-full h-full object-cover"
                        />
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default About;
