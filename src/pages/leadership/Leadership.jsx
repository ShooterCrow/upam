import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { globalExecutive, nationalRepresentatives, directors, members } from '../../constants/leaders';
import ScrollReveal from '../../components/ScrollReveal';
import { Users, Globe, Building2, ArrowRight } from 'lucide-react';

const imageRevealVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: [0.21, 1.11, 0.81, 0.99]
        }
    })
};

function ProfileCard({ profile }) {
    return (
        <ScrollReveal direction="up">
            <div className="group flex flex-col gap-4">
                <div className="relative w-full aspect-[3/4] bg-slate-100 overflow-hidden shadow-sm">
                    <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/default-avatar.jpg";
                        }}
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
                    <div className="absolute bottom-0 left-0 w-1 h-0 bg-[#EB010C] group-hover:h-full transition-all duration-500" />
                </div>
                <div className="space-y-1">
                    <h3 className="text-slate-900 font-black text-sm uppercase tracking-tight" translate="no">
                        {profile.name}
                    </h3>
                    <p className="text-[#EB010C] font-bold text-[10px] uppercase tracking-widest">
                        {profile.title}
                    </p>
                </div>
            </div>
        </ScrollReveal>
    );
}

function Section({ title, subtitle, profiles, description, icon: Icon }) {
    return (
        <>
            {profiles.length > 0 && (
                <section className="mb-24 md:mb-32">
                    <ScrollReveal direction="left">
                        <div className="mb-12 md:mb-16 max-w-3xl">
                            <div className="flex items-center gap-3 mb-4">
                                {Icon && <Icon className="w-5 h-5 text-[#EB010C]" />}
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#EB010C]/60 italic">
                                    {subtitle || "Administrative"}
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                                {title}
                            </h2>
                            {description && (
                                <p className="text-base text-slate-600 leading-relaxed font-medium border-l-2 border-slate-100 pl-6">
                                    {description}
                                </p>
                            )}
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
                        {profiles.map((profile, index) => (
                            <ProfileCard key={`${title}-${index}`} profile={profile} />
                        ))}
                    </div>
                </section>)}
        </>
    );
}

const Leadership = () => {
    // Get a subset of images for the hero grid
    const heroImages = [...globalExecutive].slice(0, 4).map(p => p.image);

    return (
        <div className="bg-[#FAFAFC] text-slate-900 font-['Inter',_sans-serif] pt-[90px] lg:pt-[110px] overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-[#FAFAFC] to-[#F3F4F6] pt-10 pb-10 px-4 md:px-8 border-b border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(235,1,12,0.03),transparent_50%)] pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#EB010C]/5 blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <ScrollReveal direction="up">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 w-full">
                            <div className="flex flex-col gap-4 flex-1 max-w-7xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-bold w-fit uppercase tracking-widest border-l-2 border-[#EB010C]">
                                    Leadership
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] text-slate-900 uppercase">
                                    Our Leadership Team.
                                </h1>
                                <p className="text-base text-slate-600 leading-relaxed font-medium">
                                    Meet the dedicated leaders who guide UPAM's vision and drive our mission forward through their expertise and commitment.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-6">
                {/* Global Executive Section */}
                <Section
                    title="Global Executives"
                    subtitle="Visionary Board"
                    icon={Globe}
                    profiles={globalExecutive}
                    description="Our Global Executive team brings together experts from across the continent to spearhead initiatives in education, health, and economic sovereignty."
                />

                {/* National Representatives Section */}
                <Section
                    title="National Representatives"
                    subtitle="Regional Impact"
                    icon={Users}
                    profiles={nationalRepresentatives}
                    description="Bridging the gap between continental vision and local action, our representatives ensure every program is tailored to the needs of individual nations."
                />

                {/* Directors Section */}
                <Section
                    title="Directors"
                    subtitle="Strategic Oversight"
                    icon={Building2}
                    profiles={directors}
                    description="Oversight and financial governance to ensure long-term stability and impact."
                />

                {/* Members Section */}
                <Section
                    title="Members"
                    subtitle="Dedicated Contributors"
                    icon={Users}
                    profiles={members}
                    description="Members dedicated to ensure the continuos progress and growth of the movement."
                />
            </div>
        </div>
    );
}

export default Leadership;