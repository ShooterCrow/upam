import React, { useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Users, Shield, Check, ChevronDown, Play, Calendar, ChevronLeft, ChevronRight, Zap, Wallet, HeartPulse, GraduationCap } from 'lucide-react';
import Curved3DCarousel from '../../component/ui/Curved3DCarousel';
import Button from '../../component/button/Button';
import Header from '../../component/layout/Header';
import Newsletter from '../../component/ui/NewsLetter';
import FAQ from '../../component/ui/FAQ';
import { Link } from 'react-router-dom';
import WorldMapWithMarkers from '../../component/ui/WorldMapWithMarkers';
import { globalExecutive } from '../../constants/leaders';
import ScrollReveal from '../../components/ScrollReveal';
import { useGetEventsQuery } from '../UserAdminPages/admin/calendarApiSlice';

const FallingStars = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-slate-900 rounded-full opacity-60"
                    initial={{
                        top: "-5%",
                        left: `${Math.random() * 100}%`,
                        width: "1px",
                        height: "1px",
                        scale: 0
                    }}
                    animate={{
                        top: "105%",
                        left: `${(Math.random() * 100) - 10}%`,
                        scale: [0, 1, 0],
                        height: ["1px", "40px", "1px"]
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

const ReadMore = ({ text, newTab, link }) => {
    return (
        <>
            {newTab ? <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center gap-2 text-sm font-medium text-upam-red hover:text-upam-red/80 transition-colors group">
                {text}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a> : <Link to={link} className="cursor-pointer flex items-center gap-2 text-sm font-medium text-upam-red hover:text-upam-red/80 transition-colors group">
                {text}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>}
        </>
    )
}

const UnitedAfricaHero = () => {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["Vision", "Purpose", "Future", "Mission", "Unity"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="relative overflow-hidden flex flex-col items-center justify-center pt-12 ">

            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(235,1,12,0.02),transparent_50%)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full lg:w-64 h-full opacity-10 pointer-events-none">
                <img alt="Countries" src="/world_map.png" className="w-full h-full object-contain" />
            </div>

            <div className="absolute top-0 right-0 w-64 h-full opacity-10 hidden lg:block pointer-events-none">
                <img alt="Countries" src="/world_map.png" className="w-full h-full object-contain" />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <ScrollReveal direction="up">
                    <div className="space-y-8">

                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight uppercase">
                            A United Africa, Rising Together
                            <div className="flex flex-wrap justify-center items-center gap-x-4 mt-2">
                                <span>With One</span>
                                <span className="relative inline-flex overflow-hidden h-[1.1em] min-w-[140px] md:min-w-[200px] lg:min-w-[260px] justify-center items-center text-[#EB010C]">
                                    {titles.map((title, index) => (
                                        <motion.span
                                            key={index}
                                            className="absolute font-black"
                                            initial={{ opacity: 0, y: "100%" }}
                                            animate={
                                                titleNumber === index
                                                    ? { y: 0, opacity: 1 }
                                                    : { y: titleNumber > index ? "-100%" : "100%", opacity: 0 }
                                            }
                                            transition={{ type: "spring", damping: 15, stiffness: 100 }}
                                        >
                                            {title}.
                                        </motion.span>
                                    ))}
                                </span>
                            </div>
                        </h1>

                        <p className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                            This call invites every African, at home and in the diaspora, to embrace a future where
                            our combined strength becomes the foundation for lasting development.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                            <Link to="/donation">
                                <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
                                    <button className="px-10 py-5 bg-[#EB010C] text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-red-500/10 flex items-center gap-3">
                                        Support The Vision
                                        <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            </Link>
                            <Link to="/register">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <button className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest flex items-center gap-3">
                                        Join The Movement
                                        <ArrowRight size={16} className="text-[#EB010C]" />
                                    </button>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};


const Index = () => {
    const { data: eventsData, isLoading: eventsLoading } = useGetEventsQuery({ limit: 3, category: 'Event' });
    const events = eventsData?.data || [];
    const [openFaq, setOpenFaq] = useState(0);
    const [activeFocus, setActiveFocus] = useState(0);

    const focusAreas = [
        {
            title: "Africa's Unity & Development",
            description: "Fostering collaboration and shared growth across the continent to build a stronger, more integrated Africa.",
            image: "/africa_unity.png"
        },
        {
            title: "Africa's Independence",
            description: "Promoting economic self-reliance and political sovereignty for all African nations.",
            image: "/africa_independence.png"
        },
        {
            title: "Education & Leadership",
            description: "Investing in the next generation of African leaders through quality education and mentorship.",
            image: "/education_leadership.png"
        },
        {
            title: "Security & Stability",
            description: "Ensuring peace and safety within African communities and states for sustainable development.",
            image: "/security_stability.png"
        }
    ];

    const [videos] = useState([
        {
            id: '1',
            youtubeId: 'VAzYk13W_QA?si=coCHG9XQe28tLUK8'
        },
        {
            id: '2',
            youtubeId: '0ReBuPaAC5s?si=_A3k7xMSnOYi67Tq'
        }
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
            {/* Main Content Container */}
            <div className="flex flex-col items-center gap-16 lg:gap-24 pb-12 lg:py-24 px-4 lg:px-8">
                <div className="w-full max-w-7xl">
                    <ScrollReveal direction="up" delay={0.2}>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-10 lg:mb-24">
                            {/* Left Column - Mission & Vision */}
                            <div className="flex flex-col gap-10 lg:gap-12">
                                <div className="flex flex-col gap-4 lg:gap-6">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                        Our Mission
                                    </h2>
                                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed tracking-wide">
                                        To strengthen bonds of solidarity between all people of African descent, fostering unity and development in Africa; enhanced independence, industrialization, economic self-reliance as well as promote peace, security and stability within African communities and states.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 lg:gap-6">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                        Our Vision
                                    </h2>
                                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed tracking-wide">
                                        A United Africa for sustainable development for all Africans Descent
                                    </p>
                                </div>
                            </div>

                            {/* Right Column - Video */}
                            <div className="relative w-full max-h-[400px] aspect-video lg:aspect-[655/367] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
                                <img
                                    src="https://api.builder.io/api/v1/image/assets/TEMP/b3564abd0e1fb1dfb19649f1092e28adc8a02548?width=1310"
                                    alt="UPAM Mission Video"
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-95 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#EB010C] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:">
                                        <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white fill-white ml-1" />
                                    </div> */}
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal direction="left">
                        {/* The Movement Section */}
                        <section className="mb-10 lg:mb-24">
                            {/* Mobile Layout (hidden on desktop) */}
                            <div className="flex flex-col gap-8 lg:hidden">
                                <div className="flex flex-col gap-3">
                                    <p className="text-xs font-medium text-upam-red tracking-wider uppercase">THE MOVEMENT</p>
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                        The Spirit of Pan-Africanism Lives On
                                    </h2>
                                </div>

                                <div className="relative w-full max-h-[350px] aspect-[431/248] rounded-xl overflow-hidden">
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/3aff55db95a13f272ccc48de58a70673598f80db?width=862"
                                        alt="Pan-African Unity"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        This call invites every African, at home and in the diaspora, to embrace a future where our combined strength becomes the foundation for lasting development.
                                    </p>
                                    {/* <button className="flex items-center gap-2 text-sm font-medium text-upam-red hover:text-upam-red/80 transition-colors self-start group">
                                        Read more
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button> */}
                                </div>
                            </div>

                            {/* Desktop & Tablet Layout (hidden on mobile) */}
                            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
                                <div className="flex flex-col gap-8 lg:gap-10">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-xs font-medium text-upam-red tracking-wider uppercase">THE MOVEMENT</p>
                                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                            The Spirit of Pan-Africanism Lives On
                                        </h2>
                                    </div>
                                    <div className="relative rounded-xl overflow-hidden">
                                        <WorldMapWithMarkers />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 justify-end">
                                    <div className="relative w-full aspect-[431/248] rounded-xl overflow-hidden">
                                        <img
                                            src="https://api.builder.io/api/v1/image/assets/TEMP/3aff55db95a13f272ccc48de58a70673598f80db?width=862"
                                            alt="Pan-African Unity"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                            This call invites every African, at home and in the diaspora, to embrace a future where our combined strength becomes the foundation for lasting development.
                                        </p>
                                        {/* <button className="flex items-center gap-2 text-sm font-medium text-upam-red hover:text-upam-red/80 transition-colors self-start group">
                                            Read more
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        {/* Who We Are Section */}
                        <section className="mb-10 lg:mb-24">
                            {/* Mobile Layout (hidden on desktop) */}
                            <div className="flex flex-col gap-8 lg:hidden">
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                    Who We Are
                                </h2>

                                <div className="relative w-full max-h-[350px] aspect-[543/293] rounded-xl overflow-hidden">
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/45370172fe42ffd55b6009588f5603c9aeb8c1b3?width=1086"
                                        alt="UPAM Community"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-6 left-6 w-16 h-16 rounded-full bg-upam-green/80 backdrop-blur-sm border-4 border-white/30"></div>
                                    <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-upam-green/80 backdrop-blur-sm border-4 border-white/30"></div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future. To encourage and strengthen bonds of solidarity between all people of African descent, Foster the development and unity of Africa, to enhanced independence.
                                    </p>
                                    <ReadMore link={"/about"} text={"Read More"} />
                                </div>
                            </div>

                            {/* Desktop & Tablet Layout (hidden on mobile) */}
                            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className="relative">
                                    <div className="relative max-h-[350px] w-full aspect-[543/293] rounded-xl overflow-hidden">
                                        <img
                                            src="https://api.builder.io/api/v1/image/assets/TEMP/45370172fe42ffd55b6009588f5603c9aeb8c1b3?width=1086"
                                            alt="UPAM Community"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-6 left-6 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-upam-green/80 backdrop-blur-sm border-4 border-white/30"></div>
                                        <div className="absolute top-6 right-6 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-upam-green/80 backdrop-blur-sm border-4 border-white/30"></div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 justify-end">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                        Who We Are
                                    </h2>
                                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                        UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future. To encourage and strengthen bonds of solidarity between all people of African descent, Foster the development and unity of Africa, to enhanced independence.
                                    </p>
                                    <ReadMore link={"/about"} text={"Read More"} />
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* What We Stand For Section */}
                    <section className="mb-10 lg:mb-24">
                        {/* Mobile Layout - Stacked with image visible */}
                        <div className="flex flex-col gap-8 lg:hidden">
                            <div>
                                <span className="text-xs font-medium text-upam-red tracking-wider uppercase">
                                    ABOUT US
                                </span>
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                    What We Stand For
                                </h2>
                            </div>

                            {/* Image Section - Visible on Mobile */}
                            <div className="relative rounded-2xl overflow-hidden h-[300px]">
                                {focusAreas.map((area, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeFocus === index
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-105 pointer-events-none'
                                            }`}
                                    >
                                        <img
                                            src={area.image}
                                            alt={area.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                        <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${activeFocus === index
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8'
                                            }`}>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-8 h-1 bg-[#EB010C] rounded-full"></div>
                                                <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                                                    Focus Area {index + 1}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">
                                                {area.title}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                                <div className="absolute top-6 right-6 flex gap-2 z-10">
                                    {focusAreas.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveFocus(index)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeFocus === index
                                                ? 'bg-white scale-125'
                                                : 'bg-white/50 hover:bg-white/80'
                                                }`}
                                            aria-label={`View focus area ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="bg-white rounded-2xl lg:p-2 ">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 pt-4">
                                        <div className="w-2 h-8 bg-[#EB010C] rounded-full"></div>
                                        <span className="text-sm font-semibold text-upam-red uppercase tracking-wider">
                                            OUR FOCUS AREAS
                                        </span>
                                    </div>

                                    <p className="text-gray-700 leading-relaxed">
                                        {focusAreas[activeFocus].description}
                                    </p>
                                </div>

                                <div className="mt-8 space-y-2.5">
                                    {focusAreas.map((area, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveFocus(index)}
                                            className={`flex items-center justify-between w-full px-5 py-4 rounded-xl transition-all duration-300 ease-out ${activeFocus === index
                                                ? 'text-gray-900'
                                                : 'text-gray-700 hover:text-upam-red'
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${activeFocus === index
                                                    ? 'bg-[#EB010C] text-white'
                                                    : 'bg-gray-100 text-gray-500 hover:bg-[#EB010C]/10 hover:text-upam-red'
                                                    }`}>
                                                    <span className="text-sm font-semibold">
                                                        {index + 1}
                                                    </span>
                                                </div>
                                                <span className={`text-base text-left transition-colors ${activeFocus === index
                                                    ? 'font-bold'
                                                    : 'font-semibold'
                                                    }`}>
                                                    {area.title}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <div className={`w-6 h-[2px] rounded-full transition-all duration-300 ${activeFocus === index
                                                    ? 'bg-[#EB010C]'
                                                    : 'bg-gray-300 hover:bg-[#EB010C]/40'
                                                    }`}></div>
                                                <div className={`w-6 h-[2px] rounded-full transition-all duration-300 ${activeFocus === index
                                                    ? 'bg-[#EB010C]'
                                                    : 'bg-gray-400 hover:bg-[#EB010C]/60'
                                                    }`}></div>
                                                <div className={`w-6 h-[2px] rounded-full transition-all duration-300 ${activeFocus === index
                                                    ? 'bg-[#EB010C]'
                                                    : 'bg-gray-500 hover:bg-[#EB010C]'
                                                    }`}></div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Desktop Layout - Hidden on Mobile */}
                        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                            <div className="flex flex-col gap-2">
                                <div>
                                    <span className="text-xs font-medium text-upam-red tracking-wider uppercase">
                                        ABOUT US
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                        What We Stand For
                                    </h2>
                                </div>

                                <div className="bg-white">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3 pt-4">
                                            <div className="w-2 h-8 bg-[#EB010C] rounded-full"></div>
                                            <span className="text-sm font-semibold text-upam-red uppercase tracking-wider">
                                                OUR FOCUS AREAS
                                            </span>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed">
                                            {focusAreas[activeFocus].description}
                                        </p>
                                    </div>

                                    <div className="mt-8 space-y-2.5">
                                        {focusAreas.map((area, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveFocus(index)}
                                                className={`flex items-center justify-between w-full px-5 py-4 rounded-xl transition-all duration-300 ease-out ${activeFocus === index
                                                    ? 'text-gray-900'
                                                    : 'text-gray-700 hover:text-upam-red'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${activeFocus === index
                                                        ? 'bg-[#EB010C] text-white'
                                                        : 'bg-gray-100 text-gray-500 hover:bg-[#EB010C]/10 hover:text-upam-red'
                                                        }`}>
                                                        <span className="text-sm font-semibold">
                                                            {index + 1}
                                                        </span>
                                                    </div>
                                                    <span className={`text-base text-left transition-colors ${activeFocus === index
                                                        ? 'font-bold'
                                                        : 'font-semibold'
                                                        }`}>
                                                        {area.title}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <div className={`w-6 h-[2px] rounded-full transition-all duration-300 ${activeFocus === index
                                                        ? 'bg-[#EB010C]'
                                                        : 'bg-gray-300 hover:bg-[#EB010C]/40'
                                                        }`}></div>
                                                    <div className={`w-6 h-[2px] rounded-full transition-all duration-300 ${activeFocus === index
                                                        ? 'bg-[#EB010C]'
                                                        : 'bg-gray-400 hover:bg-[#EB010C]/60'
                                                        }`}></div>
                                                    <div className={`w-6 h-[2px] rounded-full transition-all duration-300 ${activeFocus === index
                                                        ? 'bg-[#EB010C]'
                                                        : 'bg-gray-500 hover:bg-[#EB010C]'
                                                        }`}></div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative rounded-2xl overflow-hidden group">
                                {focusAreas.map((area, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeFocus === index
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-105 pointer-events-none'
                                            }`}
                                    >
                                        <img
                                            src={area.image}
                                            alt={area.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                                        <div className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 ${activeFocus === index
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8'
                                            }`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-1 bg-[#EB010C] rounded-full"></div>
                                                <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
                                                    Focus Area {index + 1}
                                                </span>
                                            </div>

                                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                                                {area.title}
                                            </h3>

                                            <p className="text-white/90 leading-relaxed max-w-2xl">
                                                {area.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                <div className="absolute top-8 right-8 flex gap-2 z-10">
                                    {focusAreas.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveFocus(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeFocus === index
                                                ? 'bg-white scale-125'
                                                : 'bg-white/50 hover:bg-white/80'
                                                }`}
                                            aria-label={`View focus area ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    {/* Gallery Section - Horizontal Scrolling Carousel */}
                    <section className="flex flex-col items-center gap-10 lg:gap-12 mb-10 lg:mb-24">
                        <div className="flex flex-col items-center gap-4 max-w-3xl text-center">
                            <p className="text-xs font-medium text-upam-red tracking-wider uppercase">GALLERY</p>
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                Moments that inspire change
                            </h2>
                            <p className="text-base text-gray-600">
                                Moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora.
                            </p>
                        </div>

                        {/* Horizontal Scrolling Carousel */}
                        <div className="w-full max-w-7xl mx-auto">
                            <div className="relative overflow-hidden py-4">
                                {/* Gradient overlays for fade effect on sides */}
                                <div className="absolute hidden lg:block left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute hidden lg:block right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                                {/* Scrolling container with slow animation */}
                                <div className="flex animate-scroll-slow hover:pause-animation">
                                    {/* First set of images */}
                                    {[
                                        "https://api.builder.io/api/v1/image/assets/TEMP/b25f74c0c208851c995df3fe41a15ea551fbb960?width=400",
                                        "https://res.cloudinary.com/dyy6gisnk/image/upload/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/683f693939e917cd3297ff8c6e8af8554e42eae3?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/1baa487a59315c54db38e9d2509b9139cca12f04?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/07536e0af663886d7094bb2f428fbad257f117cd?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/e30f23ba83e18af62762d04d97d7fb23736884ea?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/abfd27d9caa30b255c52b305f32ea927babe0a7c?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/ac234c04876489cf67819ff29fd69111a0cb2551?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/b31867e5786bbf758ab14021fa312dfd60fefa4a?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/cc12aecd308e8fae3240012701bfdd6c09ff6b0d?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/60e7aa2081693a1b2f14cd4094ea75358bc99a51?width=400"
                                    ].map((src, index) => (
                                        <div key={`first-${index}`} className="flex-shrink-0 w-64 md:w-80 lg:w-96 mx-2 group">
                                            <div className="relative overflow-hidden rounded-xl transition-all duration-500">
                                                <div className="aspect-[4/3] overflow-hidden">
                                                    <img
                                                        src={src}
                                                        alt={`Gallery ${index + 1}`}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Duplicate set for seamless scrolling */}
                                    {[
                                        "https://api.builder.io/api/v1/image/assets/TEMP/b25f74c0c208851c995df3fe41a15ea551fbb960?width=400",
                                        "https://res.cloudinary.com/dyy6gisnk/image/upload/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/683f693939e917cd3297ff8c6e8af8554e42eae3?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/1baa487a59315c54db38e9d2509b9139cca12f04?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/07536e0af663886d7094bb2f428fbad257f117cd?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/e30f23ba83e18af62762d04d97d7fb23736884ea?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/abfd27d9caa30b255c52b305f32ea927babe0a7c?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/ac234c04876489cf67819ff29fd69111a0cb2551?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/b31867e5786bbf758ab14021fa312dfd60fefa4a?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/cc12aecd308e8fae3240012701bfdd6c09ff6b0d?width=400",
                                        "https://api.builder.io/api/v1/image/assets/TEMP/60e7aa2081693a1b2f14cd4094ea75358bc99a51?width=400"
                                    ].map((src, index) => (
                                        <div key={`second-${index}`} className="flex-shrink-0 w-64 md:w-80 lg:w-96 mx-2 group">
                                            <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                                                <div className="aspect-[4/3] overflow-hidden">
                                                    <img
                                                        src={src}
                                                        alt={`Gallery ${index + 1}`}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-4 left-4">
                                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                                                            <div className="w-2 h-2 rounded-full bg-upam-green animate-pulse"></div>
                                                            <span className="text-xs font-medium text-white">View</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <ScrollReveal direction="up">
                        {/* Our Impacts Section */}
                        <section className="mb-10 lg:mb-24">
                            <div className="flex flex-col gap-10 lg:gap-12 mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight text-center">
                                    Our Impacts / Projects
                                </h2>
                                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                                    Transforming lives across the continent through sustainable development, financial inclusion, and educational excellence.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {[
                                    {
                                        title: "Clean Energy",
                                        desc: "Powering a brighter future for Sudan with the Sudan National Energy Research Center on a groundbreaking clean energy project.",
                                        icon: <Zap className="w-6 h-6 text-yellow-500" />,
                                        bg: "bg-yellow-50",
                                        delay: 0.1
                                    },
                                    {
                                        title: "Financial Support",
                                        desc: "UPAM Finance is stepping up to support vulnerable communities with financial inclusion initiatives and economic empowerment.",
                                        icon: <Wallet className="w-6 h-6 text-green-500" />,
                                        bg: "bg-green-50",
                                        delay: 0.2
                                    },
                                    {
                                        title: "Health Program",
                                        desc: "Healthy lives, brighter futures. UPAM is rolling out health programs across Africa, touching lives and building stronger communities.",
                                        icon: <HeartPulse className="w-6 h-6 text-red-500" />,
                                        bg: "bg-red-50",
                                        delay: 0.3
                                    },
                                    {
                                        title: "UPAM Schools",
                                        desc: "Equipping the next-gen workforce with in-demand skills to thrive in today's job market. Future-ready professionals, rising from Africa.",
                                        icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
                                        bg: "bg-blue-50",
                                        delay: 0.4
                                    }
                                ].map((item, index) => (
                                    <ScrollReveal key={index} direction="up" delay={item.delay}>
                                        <div className="group bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-6 h-full border-b-4 hover:border-b-upam-red">
                                            <div className={`${item.bg} w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                {item.icon}
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-upam-red transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal direction="scale">
                        {/* Be Part of The Movement Section */}
                        <section className="mb-10 lg:mb-24">
                            {/* Mobile Layout (hidden on desktop) */}
                            <div className="flex flex-col lg:hidden">
                                <span className="text-xs font-medium mb-2 text-upam-red tracking-wider uppercase text-center">GET INVOLVED</span>
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight text-center">
                                    Be Part of The Movement
                                </h2>

                                <div className="relative aspect-[711/350] my-6 max-h-[350px] rounded-xl overflow-hidden group">
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/743da7307db5c6f3802fcc3250631182d6dcce9b?width=1422"
                                        alt="Join Movement"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-upam-green/20 via-transparent to-upam-red/20"></div>
                                </div>

                                <div className="flex flex-col gap-6 items-center">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        We the African People Stand United for Economically Self-sustainable, Development, Freedom, Equality, Justice, Free Trade, Open Borders, Effective Governance, One Nation and the Protection of Our motherland, one people united for Africa, Home of the Brave.
                                    </p>
                                    <Link to="/get-involved" className="flex items-center gap-2 px-6 py-3 bg-[#EB010C] text-white rounded-lg hover:bg-[#EB010C]/90 transition-all duration-300 hover:shadow-lg w-fit group">
                                        Join Now
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Desktop Layout (hidden on mobile) */}
                            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                                <div className="relative rounded-xl overflow-hidden group flex-1">
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/743da7307db5c6f3802fcc3250631182d6dcce9b?width=1422"
                                        alt="Join Movement"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-upam-green/20 via-transparent to-upam-red/20"></div>
                                </div>

                                <div className="flex flex-col justify-center flex-1">
                                    <p className="text-xs mb-2 font-medium text-upam-red tracking-wider uppercase">GET INVOLVED</p>
                                    <div className="flex flex-col gap-6">
                                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                            Be Part of The Movement
                                        </h2>
                                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                            We the African People Stand United for Economically Self-sustainable, Development, Freedom, Equality, Justice, Free Trade, Open Borders, Effective Governance, One Nation and the Protection of Our motherland, one people united for Africa, Home of the Brave.
                                        </p>
                                        <Link to="/get-involved" className="flex items-center gap-2 px-6 py-3 bg-[#EB010C] text-white rounded-lg hover:bg-[#EB010C]/90 transition-all duration-300 hover:shadow-lg self-start group">
                                            Join Now
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal direction="up">
                        {/* Leadership Section */}
                        <section className="mb-10 lg:mb-24 w-full overflow-hidden">
                            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 mb-8">
                                <div>
                                    <p className="text-xs font-medium text-upam-red tracking-wider uppercase mb-2">OUR TEAM</p>
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                        Meet Our Leadership
                                    </h2>
                                </div>
                                <Link to="/leadership" className="cursor-pointer flex items-center gap-2 text-sm font-medium text-upam-red hover:text-upam-red/80 transition-colors group">
                                    View All Leaders
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            {/* Infinite Horizontal Scrolling Carousel */}
                            <div className="w-full relative">
                                {/* Gradient overlays for fade effect on sides */}
                                <div className="absolute hidden lg:block left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute hidden lg:block right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                                <div className="relative overflow-hidden py-4 w-full">
                                    {/* Scrolling track (flex animate-scroll-slow hover:pause-animation) */}
                                    <div
                                        className="flex animate-scroll-slow hover:pause-animation"
                                        style={{ animationDuration: '22s' }} /* 🚀 SPEED CONTROL: Change '22s' to make it faster (e.g. '15s') or slower (e.g. '40s') */
                                    >
                                        {/* First full set of leaders */}
                                        {globalExecutive.map((leader, index) => (
                                            <div
                                                key={`leader-first-${leader.id}-${index}`}
                                                className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] mx-3 group flex flex-col gap-3"
                                            >
                                                <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100/50 aspect-[4/5] w-full transition-all duration-350 group-hover:shadow-md">
                                                    <img
                                                        src={leader.image}
                                                        alt={leader.name}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = "/images/default-avatar.jpg";
                                                        }}
                                                    />
                                                </div>

                                                <div className="flex flex-col text-left px-1">
                                                    <h4 className="text-gray-900 font-bold text-sm sm:text-base leading-snug group-hover:text-[#EB010C] transition-colors duration-200" translate="no">
                                                        {leader.name}
                                                    </h4>
                                                    <p className="text-gray-500 text-xs sm:text-sm font-medium leading-snug mt-0.5">
                                                        {leader.title || leader.role}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Second full duplicate set for seamless scrolling */}
                                        {globalExecutive.map((leader, index) => (
                                            <div
                                                key={`leader-duplicate-${leader.id}-${index}`}
                                                className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] mx-3 group flex flex-col gap-3"
                                            >
                                                <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100/50 aspect-[4/5] w-full transition-all duration-350 group-hover:shadow-md">
                                                    <img
                                                        src={leader.image}
                                                        alt={leader.name}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = "/images/default-avatar.jpg";
                                                        }}
                                                    />
                                                </div>

                                                <div className="flex flex-col text-left px-1">
                                                    <h4 className="text-gray-900 font-bold text-sm sm:text-base leading-snug group-hover:text-[#EB010C] transition-colors duration-200" translate="no">
                                                        {leader.name}
                                                    </h4>
                                                    <p className="text-gray-500 text-xs sm:text-sm font-medium leading-snug mt-0.5">
                                                        {leader.title || leader.role}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* Activities Section */}
                    <section className="my-10 lg:my-24">
                        <div className="flex flex-col gap-6">
                            {/* Header Section */}
                            <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
                                <div className="flex flex-col gap-2 max-w-2xl">
                                    <div className="text-center lg:text-left">
                                        <p className="text-xs font-medium mb-2 text-upam-red tracking-wider uppercase">
                                            Activities & Events
                                        </p>
                                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                            Activities Lined Up for 2026
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-gray-600 leading-relaxed">
                                            Stay updated with UPAM activities, announcements, and Pan-African happenings throughout the year.
                                        </p>
                                    </div>
                                </div>
                                <ReadMore text={"View All Events"} link={"/events"} />
                            </div>

                            {/* Main Content Grid - Fixed Height Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[500px]">
                                {eventsLoading ? (
                                    <div className="lg:col-span-3 flex items-center justify-center py-20">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-upam-red"></div>
                                    </div>
                                ) : events.length === 0 ? (
                                    <div className="lg:col-span-3 text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                                        <p className="text-gray-500 font-medium">No recent activities or events found.</p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Featured Event - Left Column (Full height) */}
                                        <div className="lg:col-span-2">
                                            {events[0] && (
                                                <Link to={`/events/${events[0]._id}`} className="relative h-[530px] rounded-2xl overflow-hidden group cursor-pointer block">
                                                    <img
                                                        src={events[0].image ? (events[0].image.startsWith('http') ? events[0].image : `http://localhost:5000/${events[0].image}`) : "/academy_logo.png"}
                                                        alt={events[0].title}
                                                        className="w-full h-full object-cover group-hover:scale-105 bg-black-900 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                                                                <Calendar className="w-4 h-4" />
                                                                <span className="text-sm font-medium">
                                                                    {new Date(events[0].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col gap-4">
                                                            <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">
                                                                {events[0].title}
                                                            </h3>
                                                            <div
                                                                className="text-white/90 leading-relaxed text-lg max-w-3xl line-clamp-2"
                                                                dangerouslySetInnerHTML={{ __html: events[0].description }}
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>
                                            )}
                                        </div>

                                        {/* Side Events - Right Column (Two images split height) */}
                                        <div className="flex flex-col md:flex-row lg:flex-col gap-6 h-[350px] md:h-[250px] lg:h-[530px]">
                                            {[events[1], events[2]].filter(Boolean).map((event, idx) => (
                                                <div key={event._id} className="group cursor-pointer h-1/2 md:h-full lg:h-1/2 md:flex-1">
                                                    <div className="relative h-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                                        <img
                                                            src={event.image ? (event.image.startsWith('http') ? event.image : `http://localhost:5000/${event.image}`) : "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                                            alt={event.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                            <div className="flex items-center justify-between mb-3">
                                                                <div className="flex items-center gap-2">
                                                                    <Calendar className="w-4 h-4" />
                                                                    <span className="text-sm font-medium">
                                                                        {new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}
                                                                    </span>
                                                                </div>
                                                                <div className="px-3 py-1 bg-[#EB010C]/20 backdrop-blur-sm rounded-full">
                                                                    <span className="text-xs font-semibold text-white">{event.category}</span>
                                                                </div>
                                                            </div>

                                                            <h3 className="text-xl font-bold mb-2 group-hover:text-upam-red transition-colors duration-300 line-clamp-1">
                                                                {event.title}
                                                            </h3>

                                                            <Link to={`/events/${event._id}`} className="inline-flex items-center gap-2 text-white font-semibold text-sm mt-3 group-hover:gap-3 transition-all duration-300">
                                                                View Details
                                                                <ArrowRight className="w-4 h-4" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Upcoming Events Row */}
                            {/* <div className="mt-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">More Upcoming Events</h3>
                                    <button className="text-upam-red font-semibold text-sm hover:underline">
                                        See all upcoming events →
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="bg-white rounded-xl p-5 shadow-lg hover: transition-shadow duration-300 group cursor-pointer">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 flex items-center justify-center bg-[#EB010C]/10 rounded-lg">
                                                    <Calendar className="w-6 h-6 text-upam-red" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-600">July {item * 10} 2025</p>
                                                    <p className="text-xs text-gray-500">2:00 PM - 5:00 PM</p>
                                                </div>
                                            </div>

                                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-upam-red transition-colors duration-300">
                                                Pan-African Workshop #{item}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                Interactive workshop focusing on key development areas for African communities.
                                            </p>

                                            <div className="flex items-center gap-2 mt-4">
                                                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Workshop</span>
                                                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Free</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                    </section>

                    {/* News Section */}
                    <section className="flex flex-col gap-10 lg:gap-12 my-10 lg:my-24 pt-10 lg:pt-0">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                            <div className="flex flex-col gap-5">

                                <div>
                                    <span className="text-xs font-medium text-upam-red tracking-wider uppercase">
                                        NEWS
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                        Wakanda Network News
                                    </h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className="text-gray-600">
                                        Trusted Pan-African news curated for an informed and empowered continent.
                                    </p>
                                </div>
                            </div>
                            <ReadMore link={"http://wnn.africa/"} newTab={true} text={"Read WNN Africa News"} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    title: "Nigeria Defence Minister Resigns, Ex-Military Chief Musa Poised to Succeed",
                                    desc: "ABUJA: Nigeria's Defence Minister, Alhaji Mohammed Badaru Abubakar, has officially resigned from his position, citing health reasons...",
                                    image: "https://wnn.africa/wp-content/uploads/2025/12/Mohammed-Badaru-Abubakar-Nigeria-Defence-Minister.jpeg",
                                    link: "https://wnn.africa/2025/12/01/nigeria-defence-minister-badaru-abubakar-resigns-musa-successor-2025/"
                                },
                                {
                                    title: "Africa's Top Climate Negotiator Says 'No Reverse Gear' on Commitments",
                                    desc: "NAIROBI: The world has no choice but to press on with climate commitments despite the United States pulling out of a key international accord...",
                                    image: "https://wnn.africa/wp-content/uploads/2025/04/Africa-Climate.jpeg",
                                    link: "https://wnn.africa/2025/04/05/africas-top-climate-negotiator-says-no-reverse-gear-on-commitments/"
                                },
                                {
                                    title: "Ukraine, US Sign Minerals Deal Sought by Trump",
                                    desc: "KYIV/WASHINGTON: Ukraine and the U.S. on Wednesday signed a deal heavily promoted by U.S. President Donald Trump that will give the United States...",
                                    image: "https://wnn.africa/wp-content/uploads/2025/05/Ukraine-US-.jpeg",
                                    link: "https://wnn.africa/2025/05/01/ukraine-us-sign-minerals-deal-sought-by-trump/"
                                }
                            ].map((news, index) => (
                                <a href={news.link} target='_blank' key={index} className="flex flex-col gap-6 group cursor-pointer">
                                    <div className="relative h-[250px] lg:h-[300px] rounded-xl overflow-hidden hover: transition-shadow duration-300">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-xl font-semibold text-gray-900 tracking-tight group-hover:text-upam-red transition-colors">
                                            {news.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {news.desc}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Video Section */}
                    <section className='w-full' >
                        <div className="text-center mb-6">
                            <p className="text-xs font-medium mb-2 text-upam-red tracking-wider uppercase">
                                Media
                            </p>
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                                Media Highlights
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr] gap-8 lg:gap-12 mb-10 lg:mb-24">
                            {/* Main Video */}
                            <div className="flex flex-col">
                                <div className="relative w-full aspect-[542/356] rounded-xl overflow-hidden ">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${videos[0].youtubeId}`}
                                        title="YouTube video player 1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Side Video */}
                            <div className="flex flex-col">
                                <div className="relative w-full aspect-[542/356] rounded-xl overflow-hidden ">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${videos[1].youtubeId}`}
                                        title="YouTube video player 2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <FAQ />
                </div>
            </div>
        </div>
    );
}


const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="relative">
                <FallingStars />
                <UnitedAfricaHero />
                {/* Hero Section with Curved 3D Slider */}
                <section className="relative">
                    <Curved3DCarousel />
                </section>
            </div>
            <Index />
            <Newsletter />

        </div>
    );
};

export default Home;