import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// TikTok Icon Component (since Lucide doesn't have it)
const TikTokIcon = ({ size = 18 }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.44-.3 6.88-.45 10.32-.08 1.4-.64 2.82-1.72 3.79-1.39 1.25-3.41 1.76-5.23 1.42-1.82-.34-3.46-1.55-4.24-3.21-.77-1.63-.64-3.66.39-5.18.9-1.35 2.45-2.26 4.1-2.31v4.02c-.75.05-1.5.42-2.01 1.01-.51.6-.7 1.43-.5 2.19.2.76.77 1.4 1.48 1.69a2.38 2.38 0 0 0 1.93-.16c.64-.37 1.05-1.02 1.11-1.74.1-3.65.2-7.3.3-10.96.01-2.1.01-4.2.01-6.3Z" />
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Quick Links",
            links: [
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact-us" },
                { label: "Leadership", path: "/leadership" },
                { label: "Initiatives", path: "/platforms" },
            ]
        },
        {
            title: "Community",
            links: [
                { label: "Join Movement", path: "/register" },
                { label: "Gallery", path: "/gallery" },
                { label: "Events", path: "/events" },
                { label: "Chapters", path: "/chapters" },
            ]
        }
    ];

    const socials = [
        { name: "TikTok", url: "https://www.tiktok.com/@upam56", icon: <TikTokIcon size={18} /> },
        { name: "LinkedIn", url: "https://www.linkedin.com/company/upamacademy", icon: <Linkedin size={18} /> },
        { name: "Facebook", url: "https://www.facebook.com/unitedpam", icon: <Facebook size={18} /> },
        { name: "Instagram", url: "https://www.instagram.com/unitedpam", icon: <Instagram size={18} /> },
        { name: "X", url: "https://x.com/UPAM_Official", icon: <Twitter size={18} /> },
    ];

    return (
        <footer className="bg-[#003115] text-white border-t border-white/5 relative overflow-hidden">
            {/* Subtle Gradient Background Element */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <Link to="/" translate="no" className="hover:opacity-80 transition-opacity">
                                <img src="/logoupam.png" alt="UPAM Logo" className="h-10" />
                            </Link>
                            <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm mt-2">
                                The United Pan-Africanist Movement is dedicated to the total liberation, unity, and prosperity of African people worldwide.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#EB010C] hover:border-[#EB010C] transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <div className="flex items-center justify-center text-white">
                                        {React.cloneElement(social.icon, { size: 18, strokeWidth: 2.5 })}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        {footerLinks.map((group) => (
                            <div key={group.title} className="space-y-6">
                                <h4 className="headerWhite text-[10px] font-black uppercase tracking-[0.2em] text-[#EB010C]">
                                    {group.title}
                                </h4>
                                <ul className="space-y-4">
                                    {group.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.path}
                                                className="text-white/60 text-sm font-bold uppercase tracking-tight hover:text-white transition-colors flex items-center gap-2 group"
                                            >
                                                <span>{link.label}</span>
                                                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="space-y-6">
                            <h4 className="headerWhite text-[10px] font-black uppercase tracking-[0.2em] text-[#EB010C]">
                                Operations
                            </h4>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <MapPin size={18} className="text-[#EB010C] shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-black text-white/40 uppercase mb-1">USA Office</p>
                                        <p className="text-white/80 text-xs font-bold leading-relaxed uppercase">
                                            14141 E 102ND AVE commerce CITY, CO 80022
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <MapPin size={18} className="text-[#EB010C] shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-black text-white/40 uppercase mb-1">Nigeria Office</p>
                                        <p className="text-white/80 text-xs font-bold leading-relaxed uppercase">
                                            Salmon Plaza, NYSC Junction, Kubwa, Abuja

                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <MapPin size={18} className="text-[#EB010C] shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-black text-white/40 uppercase mb-1">Namibia Office</p>
                                        <p className="text-white/80 text-xs font-bold leading-relaxed uppercase">
                                            P.O BOX 21336 WINDHOEK, NAMIBIA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] font-black uppercase tracking-widest text-white/30">
                        &copy; {currentYear} UNITED PAN-AFRICANIST MOVEMENT. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex gap-8">
                        {[
                            { label: "Terms", path: "/terms" },
                            { label: "Privacy", path: "/privacy" },
                            { label: "Cookies", path: "/cookies" },
                        ].map((link) => (
                            <Link
                                key={link.label}
                                to={link.path}
                                className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-[#EB010C] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;