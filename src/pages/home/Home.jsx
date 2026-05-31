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
import DualScrollingGallery from '../../component/ui/DualScrollingGallery';
import SingleSlider from '../../components/SingleSlider';


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
// const FallingStars = () => {
//     return (
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//             {[...Array(15)].map((_, i) => (
//                 <motion.div
//                     key={i}
//                     className="absolute w-[1px] h-[40px] bg-gradient-to-t from-[#EB010C] to-transparent opacity-20"
//                     initial={{
//                         x: Math.random() * 100 + "%",
//                         y: -100,
//                         rotate: 35,
//                         scale: Math.random() * 0.5 + 0.5
//                     }}
//                     animate={{
//                         y: ["-10vh", "110vh"],
//                         x: ["100%", "0%"]
//                     }}
//                     transition={{
//                         duration: Math.random() * 3 + 2,
//                         repeat: Infinity,
//                         delay: Math.random() * 5,
//                         ease: "linear"
//                     }}
//                 />
//             ))}
//             {[...Array(20)].map((_, i) => (
//                 <motion.div
//                     key={`star-${i}`}
//                     className="absolute w-1 h-1 bg-[#EB010C]/20 rounded-full"
//                     initial={{
//                         x: Math.random() * 100 + "%",
//                         y: Math.random() * 100 + "%",
//                         scale: 0
//                     }}
//                     animate={{
//                         scale: [0, 1.2, 0],
//                         opacity: [0, 0.4, 0]
//                     }}
//                     transition={{
//                         duration: Math.random() * 2 + 1,
//                         repeat: Infinity,
//                         delay: Math.random() * 5,
//                         ease: "easeInOut"
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };

const FallingStars = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-black rounded-full opacity-60"
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
        <div className="relative overflow-hidden flex flex-col items-center justify-center pt-4 lg:pt-8 pb-8 lg:pb-14">

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
                    <div className="space-y-6 lg:space-y-8">

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#555555] leading-tight md:leading-[1.05] tracking-tight uppercase">
                            A United Africa, Rising Together
                            <div className="flex flex-wrap justify-center items-center gap-x-4 mt-1">
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

                        <p className="text-[#555555] text-base md:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                            This call invites every African, at home and in the diaspora, to embrace a future where
                            our combined strength becomes the foundation for lasting development.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center pt-2 lg:pt-4">
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
                                    <button className="px-10 py-5 bg-black text-white font-black text-xs uppercase tracking-widest flex items-center gap-3">
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
    const locations = []; // Markers are hardcoded in WorldMapWithMarkers
    const images = [
        "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779449532/ae109f1f9e9b12a967427c8a6e5f7c76190fb577_ncxlu7.jpg",
        "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288775/bd04a7a4ac0a5ecdb4216d379daccc9797a90c12_ztqcqh.jpg",
        "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779214104/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png",
        "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288535/c5dbbb8bc42b46092812e5f987dc66eaf6cb2b68_urieei.jpg",
        "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288157/dbccf0c78cdb3ba4ed57fe9088f1f7582b761665_sucuow.jpg",
    ]

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
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30 overflow-x-hidden">
            {/* Main Content Container */}
            <div className="flex flex-col items-center gap-16 lg:gap-24 pb-12 lg:py-24 px-4 lg:px-8">
                <div className="w-full max-w-7xl">
                    <ScrollReveal direction="up" delay={0.2}>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">
                            {/* Left Column - Mission & Vision */}
                            <div className="flex flex-col gap-12">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C]">
                                            Mission
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
                                            Building Shared Growth Together.
                                        </h2>
                                        <p className="text-base text-[#555555] leading-relaxed font-medium">
                                            To strengthen bonds of solidarity between all people of African descent, fostering unity and development in Africa; for enhanced independence, industrialization, economic self- reliance as well as promote peace, security and stability within African communities and states.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C]">
                                            Vision
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
                                            A United Africa For All.
                                        </h2>
                                        <p className="text-base text-[#555555] leading-relaxed font-medium">
                                            A United Africa for sustainable development for all Africans Descent. UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Video / Image */}
                            <div className="relative group overflow-hidden bg-black">
                                <img
                                    src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288157/dbccf0c78cdb3ba4ed57fe9088f1f7582b761665_sucuow.jpg"
                                    alt="UPAM Mission"
                                    className="w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal direction="left">
                        {/* The Movement Section */}
                        <section className="mb-24 lg:mb-32">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                <div className="order-2 lg:order-1 flex flex-col gap-8">
                                    <div className="flex flex-col gap-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit">
                                            The Movement
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
                                            The Spirit Of <br />Pan-Africanism.
                                        </h2>
                                        <p className="text-base text-[#555555] leading-relaxed font-medium">
                                            This call invites every African, at home and in the diaspora, to embrace a future where our combined strength becomes the foundation for lasting development.
                                        </p>
                                    </div>
                                    <div >
                                        <WorldMapWithMarkers />
                                    </div>
                                </div>

                                <div className="hidden lg:block order-1 lg:order-2 relative group overflow-hidden">
                                    <SingleSlider slides={images} />
                                </div>

                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        {/* Who We Are Section */}
                        <section className="mb-24 lg:mb-32">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                <div className="relative group overflow-hidden">
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/45370172fe42ffd55b6009588f5603c9aeb8c1b3?width=1086"
                                        alt="UPAM Community"
                                        className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#EB010C]/10 backdrop-blur-sm border-l border-b border-white/20" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 backdrop-blur-sm border-r border-t border-white/20" />
                                </div>

                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit">
                                            Who We Are
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
                                            A Continental <br />Evolution.
                                        </h2>
                                        <p className="text-base text-[#555555] leading-relaxed font-medium">
                                            UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future.
                                        </p>
                                        <p className="text-base text-[#555555] leading-relaxed font-medium mb-4">
                                            To encourage and strengthen bonds of solidarity between all people of African descent, Foster the development and unity of Africa, to enhanced independence.
                                        </p>
                                        <div className="w-fit">
                                            <ReadMore link={"/about"} text={"Discover Our Story"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* Metrics Section */}
                    <ScrollReveal direction="up">
                        <section className="mb-24 lg:mb-32">
                            <div className="bg-[#003115] py-16 px-8">
                                <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x divide-white/10">
                                    {[
                                        { value: "50+", label: "Countries & Chapters", desc: "A growing global network across Africa and the diaspora" },
                                        { value: "200+", label: "Lives Impacted", desc: "Lives impacted by UPAM programs and initiatives" },
                                        { value: "10+", label: "Countries Reached", desc: "Countries impacted meaningfully by UPAM" },
                                        { value: "800+", label: "Volunteers", desc: "The organisation thrived on the remarkable dedication of over 800 volunteers" },
                                    ].map((stat, i) => (
                                        <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                            <div className="text-center px-6 py-8 lg:py-4">
                                                <p className="text-4xl md:text-5xl lg:text-6xl font-black text-[#EB010C] mb-2">{stat.value}</p>
                                                <p className="text-white font-black text-xs uppercase tracking-widest mb-2">{stat.label}</p>
                                                <p className="text-white/60 text-xs leading-relaxed max-w-[180px] mx-auto">{stat.desc}</p>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* What We Stand For Section */}
                    <section className="mb-24 lg:mb-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className="flex flex-col gap-8">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit">
                                        Values & Focus
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
                                        What We Stand For.
                                    </h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-6">
                                        <p className="text-lg text-[#555555] font-medium leading-relaxed italic border-l-4 border-[#EB010C] pl-6">
                                            "{focusAreas[activeFocus].description}"
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {focusAreas.map((area, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setActiveFocus(index)}
                                                    className={`group relative flex items-center justify-between p-5 transition-all duration-300 border ${activeFocus === index
                                                        ? 'bg-[#003115] border-[#003115] text-white'
                                                        : 'bg-white border-slate-100 text-[#555555] hover:border-[#EB010C]/30'
                                                        }`}
                                                >
                                                    <span className={`text-[10px] font-black uppercase tracking-widest ${activeFocus === index ? 'text-[#EB010C]' : 'text-[#555555]'}`}>
                                                        0{index + 1}
                                                    </span>
                                                    <span className={`text-sm font-black uppercase tracking-tight flex-1 px-4 text-left`}>
                                                        {area.title}
                                                    </span>
                                                    <div className={`w-2 h-2 ${activeFocus === index ? 'bg-[#EB010C] animate-pulse' : 'bg-slate-200'}`} />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden aspect-[16/9] bg-[#003115]">
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
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-8">
                                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                                                {area.title}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section className="flex flex-col items-center gap-16 lg:gap-24 mb-24 lg:mb-32">
                        <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C]">
                                Visual Impact
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
                                Moments That Inspire Change.
                            </h2>
                            <p className="text-lg text-[#555555] font-medium max-w-2xl px-6">
                                Moments of unity, culture, advocacy, and community impact captured across Africa and the diaspora.
                            </p>
                        </div>

                        {/* Horizontal Scrolling Carousel */}
                        {/* Bi-directional Scrolling Gallery */}
                        <DualScrollingGallery
                            row1={[
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288418/384bf4174dffb9995e47ecfadad2844a1c7d067a_brppyj.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779214104/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288157/dbccf0c78cdb3ba4ed57fe9088f1f7582b761665_sucuow.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288775/bd04a7a4ac0a5ecdb4216d379daccc9797a90c12_ztqcqh.jpg",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288535/c5dbbb8bc42b46092812e5f987dc66eaf6cb2b68_urieei.jpg"
                            ]}
                            row2={[
                                "https://api.builder.io/api/v1/image/assets/TEMP/e30f23ba83e18af62762d04d97d7fb23736884ea?width=400",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779288902/c78f0671096d20f62827357b9a362ac828bdbbf9_kzt0tj.jpg",
                                "https://api.builder.io/api/v1/image/assets/TEMP/b25f74c0c208851c995df3fe41a15ea551fbb960?width=400",
                                "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/39167ef588ea05d0dbf7a9b1527a68952ea3b2cf_ksjhwg.png"
                            ]}
                        />
                    </section>

                    <ScrollReveal direction="up">
                        {/* Our Impacts Section */}
                        <section className="mb-24 lg:mb-32">
                            <div className="flex flex-col gap-6 mb-16 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mx-auto lg:mx-0">
                                    Impact & Projects
                                </div>
                                <h2 className="text-2xl md:text-4xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
                                    Transforming Lives <br />Across Africa.
                                </h2>
                                <p className="text-lg text-[#555555] font-medium max-w-2xl">
                                    Transforming lives across the continent through sustainable development, financial inclusion, and educational excellence.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                                {[
                                    {
                                        title: "Clean Energy",
                                        desc: "Powering a brighter future for Sudan with the Sudan National Energy Research Center.",
                                        icon: <Zap className="w-6 h-6" />,
                                        delay: 0.1
                                    },
                                    {
                                        title: "Financial Support",
                                        desc: "Financial inclusion initiatives and economic empowerment for vulnerable communities.",
                                        icon: <Wallet className="w-6 h-6" />,
                                        delay: 0.2
                                    },
                                    {
                                        title: "Health Program",
                                        desc: "Rolling out health programs across Africa, building stronger and healthier communities.",
                                        icon: <HeartPulse className="w-6 h-6" />,
                                        delay: 0.3
                                    },
                                    {
                                        title: "UPAM Schools",
                                        desc: "Equipping the next-gen workforce with in-demand skills to thrive in the global market.",
                                        icon: <GraduationCap className="w-6 h-6" />,
                                        delay: 0.4
                                    }
                                ].map((item, index) => (
                                    <ScrollReveal key={index} direction="up" delay={item.delay}>
                                        <div className="group bg-white p-8 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#EB010C]/30 flex flex-col gap-8 h-full border-b-4 border-b-slate-200 hover:border-b-[#EB010C] relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 translate-x-12 -translate-y-12 rotate-45 group-hover:bg-[#EB010C]/5 transition-colors" />
                                            <div className="w-16 h-16 bg-[#003115] text-white flex items-center justify-center group-hover:bg-[#EB010C] transition-colors duration-500">
                                                {item.icon}
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-xl font-black text-[#555555] uppercase tracking-tight group-hover:text-[#EB010C] transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-[#555555] leading-relaxed font-medium">
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
                        {/* Be Part of The Movement Section (CTA) */}
                        <section className="mb-24 lg:mb-32">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
                                <div className="relative group overflow-hidden h-[400px] lg:h-auto">
                                    <img
                                        src="https://api.builder.io/api/v1/image/assets/TEMP/743da7307db5c6f3802fcc3250631182d6dcce9b?width=1422"
                                        alt="Join Movement"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>

                                <div className="bg-[#003115] p-12 lg:p-20 flex flex-col justify-center gap-8 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#EB010C]/20 -translate-y-16 translate-x-16 rotate-45" />
                                    <div className="space-y-4 relative z-10">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/20 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C]">
                                            Get Involved
                                        </div>
                                        <h2 className="headerWhite text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-[1.1]">
                                            Be Part Of <br />The Movement.
                                        </h2>
                                        <p className="text-base text-white/70 leading-relaxed font-medium">
                                            We the African People Stand United for Economically Self-sustainable Development, Freedom, Equality, Justice, Free Trade, Open Borders, and the Protection of Our motherland.
                                        </p>
                                    </div>
                                    <div className="pt-4 relative z-10">
                                        <Link to="/get-involved">
                                            <button className="px-10 py-5 bg-[#EB010C] text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#555555] transition-all duration-300 flex items-center gap-4">
                                                Join Now
                                                <ArrowRight size={16} />
                                            </button>
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
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit">
                                        Our Team
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
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
                                                    <h4 className="text-[#555555] font-bold text-sm sm:text-base leading-snug group-hover:text-[#EB010C] transition-colors duration-200" translate="no">
                                                        {leader.name}
                                                    </h4>
                                                    <p className="text-[#555555] text-xs sm:text-sm font-medium leading-snug mt-0.5">
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
                                                    <h4 className="text-[#555555] font-bold text-sm sm:text-base leading-snug group-hover:text-[#EB010C] transition-colors duration-200" translate="no">
                                                        {leader.name}
                                                    </h4>
                                                    <p className="text-[#555555] text-xs sm:text-sm font-medium leading-snug mt-0.5">
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
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit">
                                            Activities & Events
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
                                            Activities Lined Up for {new Date().getFullYear()}
                                        </h2>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-[#555555] leading-relaxed">
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
                                        <p className="text-[#555555] font-medium">No recent activities or events found.</p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Featured Event - Left Column (Full height) */}
                                        <div className="lg:col-span-2">
                                            {events[0] && (
                                                <Link to={`/events/${events[0]._id}`} className="relative h-[530px] border border-slate-100 overflow-hidden group cursor-pointer block bg-black">
                                                    <img
                                                        src={events[0].image ? (events[0].image.startsWith('http') ? events[0].image : `http://localhost:5000/${events[0].image}`) : "/academy_logo.png"}
                                                        alt={events[0].title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 grayscale group-hover:grayscale-0"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                                                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                                            <span className="px-3 py-1 bg-[#EB010C] text-[10px] font-black uppercase tracking-widest">
                                                                Featured Event
                                                            </span>
                                                            {events[0].date && (
                                                                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/80">
                                                                    <Calendar className="w-3 h-3" />
                                                                    {new Date(events[0].date).toLocaleDateString()}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-[#EB010C] transition-colors">
                                                            {events[0].title}
                                                        </h3>
                                                        <div className="flex items-center gap-2 text-[#EB010C] font-black uppercase tracking-widest text-xs">
                                                            Read More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            )}
                                        </div>

                                        {/* Other Events - Right Column (Stacked cards) */}
                                        <div className="flex flex-col gap-6">
                                            {events.slice(1, 3).map((event) => (
                                                <Link key={event._id} to={`/events/${event._id}`} className="flex-1 bg-white border border-slate-100 flex flex-col group transition-all duration-500 hover:shadow-xl hover:border-[#EB010C]/30">
                                                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                                                        <img
                                                            src={event.image ? (event.image.startsWith('http') ? event.image : `http://localhost:5000/${event.image}`) : "/academy_logo.png"}
                                                            alt={event.title}
                                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                                        />
                                                        <div className="absolute top-0 left-0 p-4">
                                                            <div className="bg-[#EB010C] text-white p-2">
                                                                <Calendar className="w-4 h-4" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="p-6 space-y-3">
                                                        <h4 className="font-black text-[#555555] uppercase tracking-tight group-hover:text-[#EB010C] transition-colors line-clamp-2">
                                                            {event.title}
                                                        </h4>
                                                        <div className="flex items-center gap-2 text-[10px] font-black text-[#555555] uppercase tracking-widest">
                                                            Learn More <ArrowRight className="w-3 h-3" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* News Section */}
                    <section className="mb-24 lg:mb-32">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C]">
                                    Announcements
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
                                    Wakanda <br />Network News.
                                </h2>
                                <p className="text-lg text-[#555555] font-medium max-w-xl">
                                    Trusted Pan-African news curated for an informed and empowered continent.
                                </p>
                            </div>
                            <div className="pb-2">
                                <ReadMore link={"http://wnn.africa/"} newTab={true} text={"Visit WNN Africa"} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Nigeria Defence Minister Resigns, Ex-Military Chief Musa Poised to Succeed",
                                    desc: "ABUJA: Nigeria's Defence Minister, Alhaji Mohammed Badaru Abubakar, has officially resigned from his position...",
                                    image: "https://wnn.africa/wp-content/uploads/2025/12/Mohammed-Badaru-Abubakar-Nigeria-Defence-Minister.jpeg",
                                    link: "https://wnn.africa/2025/12/01/nigeria-defence-minister-badaru-abubakar-resigns-musa-successor-2025/"
                                },
                                {
                                    title: "Africa's Top Climate Negotiator Says 'No Reverse Gear' on Commitments",
                                    desc: "NAIROBI: The world has no choice but to press on with climate commitments despite the United States pulling out...",
                                    image: "https://wnn.africa/wp-content/uploads/2025/04/Africa-Climate.jpeg",
                                    link: "https://wnn.africa/2025/04/05/africas-top-climate-negotiator-says-no-reverse-gear-on-commitments/"
                                },
                                {
                                    title: "Ukraine, US Sign Minerals Deal Sought by Trump",
                                    desc: "KYIV/WASHINGTON: Ukraine and the U.S. on Wednesday signed a deal heavily promoted by U.S. President Donald Trump...",
                                    image: "https://wnn.africa/wp-content/uploads/2025/05/Ukraine-US-.jpeg",
                                    link: "https://wnn.africa/2025/05/01/ukraine-us-sign-minerals-deal-sought-by-trump/"
                                }
                            ].map((news, index) => (
                                <a href={news.link} target='_blank' rel="noreferrer" key={index} className="group flex flex-col gap-8 bg-white border border-transparent hover:border-slate-100 transition-all duration-500">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute top-0 left-0 p-4">
                                            <div className="w-8 h-8 bg-[#EB010C] flex items-center justify-center text-white font-black text-xs">
                                                0{index + 1}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-black text-[#555555] uppercase tracking-tight group-hover:text-[#EB010C] transition-colors leading-tight">
                                            {news.title}
                                        </h3>
                                        <p className="text-sm text-[#555555] leading-relaxed font-medium">
                                            {news.desc}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Media Section */}
                    <section className="">
                        <div className="flex flex-col gap-6 mb-10 text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mx-auto">
                                Multimedia
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-[#555555] tracking-tight uppercase leading-[1.1]">
                                Media Highlights.
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {videos.slice(0, 2).map((video, index) => (
                                <div key={index} className="relative aspect-video group">
                                    <iframe
                                        className="w-full h-full transition-all duration-700"
                                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                        title={`Video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <div className="absolute inset-0 pointer-events-none border-4 border-black/10 group-hover:border-[#EB010C]/20 transition-colors" />
                                </div>
                            ))}
                        </div>
                        <FAQ />
                    </section>
                </div>
            </div>
        </div>
    );
};


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