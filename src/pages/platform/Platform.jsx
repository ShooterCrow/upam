import React from 'react';
import { ArrowUpRight, ArrowRight, Grid, Layout, Orbit } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../component/ScrollReveal';
import jumuiyaLogo from '../../assets/jumuiya_logo.png';
import upamEventsLogo from '../../assets/upam_events_logo.png';
import academyLogo from '../../assets/academy_logo.png';
import miaLogo from '../../assets/mia_logo.png';
import holdingsLogo from '../../assets/holdings_logo.png';

const Platform = () => {
    const activePlatforms = [
        {
            name: "WNN Africa",
            description: "Global media network and radio services covering Pan-African news, politics, culture, and more.",
            link: "https://wnn.africa/",
            external: true,
            logo: 'https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779280898/images_c5qqg3.png'
        },
        {
            name: "Jumuiya Forum",
            description: "Vibrant social networking and knowledge hub for the Pan-African community.",
            link: "https://jumuiya.upam.org/",
            external: true,
            // isActive: true,
            logo: jumuiyaLogo
        },
        {
            name: "UPAM",
            description: "Discover, promote, and participate in upcoming Pan-African events and conferences.",
            link: "https://upamevents.com/",
            external: true,
            logo: upamEventsLogo
        },
        {
            name: "UPAM Academy",
            description: "Educational resources, leadership training, and skill development for Africans.",
            link: "https://www.upamschools.africa/",
            external: true,
            logo: academyLogo
        }
    ];

    const developmentPlatforms = [
        {
            name: "MIA",
            tagline: "Made In Africa",
            description: "A dedicated marketplace for African products.",
            logo: miaLogo
        },
        {
            name: "UPAM Holdings",
            tagline: "Investment opportunities and economic development.",
            description: "Investment opportunities and economic development.",
            logo: holdingsLogo
        }
    ];

    return (
        <div className="bg-white min-h-screen overflow-hidden selection:bg-[#EB010C] selection:text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Hero Section */}
                <ScrollReveal direction="up">
                    <header className="max-w-4xl mb-12 md:mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-bold w-fit uppercase tracking-widest border-l-2 border-[#EB010C]">
                                Our Ecosystem
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-semibold text-slate-900 uppercase leading-[1.2]">
                            {/* Digital <br />
                            <span className="text-[#EB010C] inline-flex items-center gap-4">
                                Platforms
                                <Orbit className="w-12 h-12 md:w-16 md:h-16 stroke-[1.5]" />
                            </span> */}
                            Welcome to <span className='text-[#EB010C]'>upam platforms</span>, here you have various platforms that are operated by the organization
                        </h1>
                        {/* <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-2xl">
                            Driving Pan-African unity and economic growth through a
                            modern, interconnected network of specialized digital services.
                        </p> */}
                    </header>
                </ScrollReveal>

                {/* Active Platforms Section */}
                <section className="mb-32 lg:mb-48">
                    <ScrollReveal direction="left">
                        <div className="flex items-center justify-between mb-16 px-2">
                            <h2 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Active Ecosystem</h2>
                            <div className="h-[1px] flex-1 mx-8 bg-slate-100 hidden md:block" />
                            <span className="text-[10px] font-black text-[#EB010C] uppercase tracking-widest">{activePlatforms.length} Platforms Live</span>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-100">
                        {activePlatforms.map((platform, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                                <div className={`group relative p-12 min-h-[350px] flex flex-col justify-between transition-all duration-700 hover:z-10 border-r border-b border-slate-200 overflow-hidden ${platform.isActive ? 'bg-[#EB010C] text-white' : 'bg-white hover:bg-slate-50'}`}>
                                    {/* Abstract BG Decor */}
                                    <div className={`absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-20 rounded-full transition-transform duration-700 group-hover:scale-150 ${platform.isActive ? 'bg-white' : 'bg-[#EB010C]'}`} />

                                    <div className="relative z-10">
                                        {platform.logo && (
                                            <div className="mb-10 h-12 w-auto transition-transform duration-500 group-hover:-translate-y-1">
                                                <img
                                                    src={platform.logo}
                                                    alt={platform.name}
                                                    className={`h-full object-contain ${platform.isActive ? 'brightness-0 invert' : ''}`}
                                                />
                                            </div>
                                        )}
                                        <h3 className={`text-2xl font-black uppercase tracking-tighter mb-4 ${platform.isActive ? 'text-white' : 'text-slate-900'}`}>
                                            {platform.name}
                                        </h3>
                                        <p className={`text-sm leading-relaxed font-medium transition-colors duration-300 ${platform.isActive ? 'text-white/80' : 'text-slate-500 group-hover:text-slate-900'}`}>
                                            {platform.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 pt-10">
                                        <a
                                            href={platform.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${platform.isActive ? 'text-white hover:gap-6' : 'text-[#EB010C] hover:gap-6'}`}
                                        >
                                            Explore Platform
                                            <ArrowRight size={16} className={platform.isActive ? 'text-white' : 'text-[#EB010C]'} />
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Under Development Section */}
                <section>
                    <ScrollReveal direction="right">
                        <div className="flex items-center justify-between mb-16 px-2">
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">In Development</h2>
                            <div className="h-[1px] flex-1 mx-8 bg-slate-100 hidden md:block" />
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">Upcoming Innovations</span>
                        </div>
                    </ScrollReveal>

                    <div className="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-100">
                        {developmentPlatforms.map((platform, index) => (
                            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                                <div className="group relative p-12 min-h-[350px] flex flex-col justify-between bg-white border-r border-b border-slate-100 transition-all duration-700">
                                    <div className="relative z-10">
                                        {platform.logo && (
                                            <div className="mb-10 h-10 w-auto opacity-40">
                                                <img
                                                    src={platform.logo}
                                                    alt={platform.name}
                                                    className="h-full object-contain"
                                                />
                                            </div>
                                        )}
                                        <div className="flex flex-col gap-1 mb-6">
                                            <h3 className="text-2xl font-black text-slate-300 uppercase tracking-tighter">
                                                {platform.name}
                                            </h3>
                                            <span className="text-[9px] font-black text-[#EB010C] uppercase tracking-[0.2em]">
                                                {platform.tagline}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed font-medium italic">
                                            {platform.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 pt-10">
                                        <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">
                                            Coming Soon
                                            <div className="flex gap-1">
                                                <div className="w-1 h-3 bg-[#EB010C]/20" />
                                                <div className="w-1 h-3 bg-[#EB010C]/40" />
                                                <div className="w-1 h-3 bg-[#EB010C]/60 transition-all duration-700 animate-pulse" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Platform;
