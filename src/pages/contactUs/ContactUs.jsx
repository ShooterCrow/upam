import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, ArrowRight } from 'lucide-react';
import worldMap from '../../assets/world_map.png';
import { useCreateContactMutation } from './contactsApiSlice';
import ScrollReveal from '../../components/ScrollReveal';
import FAQ from '../../component/ui/FAQ';

const TikTokIcon = () => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6667 0H8.33333V13.3333C8.33333 14.2538 7.58714 15 6.66667 15C5.74619 15 5 14.2538 5 13.3333C5 12.4129 5.74619 11.6667 6.66667 11.6667V8.33333C3.916 8.33333 1.66667 10.5827 1.66667 13.3333C1.66667 16.084 3.916 18.3333 6.66667 18.3333C9.41733 18.3333 11.6667 16.084 11.6667 13.3333V5C13.5047 6.324 15.7533 7.08333 18.3333 7.08333V3.75C16.0333 3.75 13.9167 2.75 12.5 1.16667C12.1667 0.75 11.9167 0.333333 11.6667 0Z" />
    </svg>
);

const socials = [
    { label: 'Facebook', href: 'https://www.facebook.com/unitedpam', icon: Facebook },
    { label: 'X (Twitter)', href: 'https://x.com/UPAM_Official', icon: Twitter },
    { label: 'Instagram', href: 'https://www.instagram.com/unitedpam', icon: Instagram },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/upamacademy', icon: Linkedin },
    { label: 'TikTok', href: 'https://www.tiktok.com/@upam56', icon: TikTokIcon },
];

const ContactUs = () => {
    const [createContact, { isLoading, isSuccess, reset }] = useCreateContactMutation();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitError, setSubmitError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null);
        try {
            await createContact(formData).unwrap();
        } catch (err) {
            setSubmitError(err?.data?.message || 'Failed to send message. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const inputClass = "w-full bg-[#F9F9F9] border-b-2 border-slate-200 focus:border-[#EB010C] px-0 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors font-medium";
    const labelClass = "block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1";

    return (
        <div className="min-h-screen bg-[#FAFAFC] text-slate-900 overflow-x-hidden">

            {/* Hero */}
            <div className="relative pt-32 px-4 md:px-8 border-b border-gray-100 overflow-hidden">
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(235,1,12,0.03),transparent_50%)] pointer-events-none" /> */}
                <div className="max-w-7xl mx-auto relative z-10">
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-6">
                            <Mail size={13} />
                            Reach Out
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06] text-slate-900">
                            Get in Touch.
                            <span className="text-[#EB010C]"> We're Here.</span>
                        </h1>
                        <p className="text-sm text-slate-500 max-w-md leading-relaxed mt-4">
                            Have a question, partnership idea, or want to learn more about the movement? We'd love to hear from you.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* Form + Map */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Form */}
                    <ScrollReveal direction="right">
                        <div className="p-8 md:p-12">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1">Send Us a Message</h2>
                            <p className="text-xs text-slate-400 mb-8 font-medium">We typically reply within 24–48 hours.</p>

                            {isSuccess ? (
                                <div className="py-12 text-center">
                                    <div className="w-14 h-14 bg-[#EB010C]/10 text-[#EB010C] flex items-center justify-center mx-auto mb-4">
                                        <Send size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-sm text-slate-500 mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
                                    <button
                                        onClick={() => { reset(); setFormData({ name: '', email: '', phone: '', message: '' }); }}
                                        className="text-xs font-black text-[#EB010C] uppercase tracking-widest hover:underline"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-7">
                                    {submitError && (
                                        <div className="p-3 bg-red-50 border-l-2 border-[#EB010C] text-xs text-red-700 font-bold">
                                            {submitError}
                                        </div>
                                    )}
                                    <div>
                                        <label className={labelClass}>Your Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" className={inputClass} required disabled={isLoading} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Email Address</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} required disabled={isLoading} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Phone <span className="normal-case font-normal text-slate-400">(optional)</span></label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" className={inputClass} disabled={isLoading} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Message</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message here..." rows="5" className={`${inputClass} resize-none`} required disabled={isLoading} />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex items-center gap-2 px-8 py-4 bg-[#EB010C] text-white text-xs font-black uppercase tracking-widest hover:bg-[#c9000a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Sending...' : 'Send Message'}
                                        <ArrowRight size={14} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </ScrollReveal>

                    {/* Map + Contact Info */}
                    <ScrollReveal direction="left">
                        <div className="space-y-8">

                            {/* Contact Info */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white border border-slate-100 p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="p-1.5 bg-[#EB010C]/10 text-[#EB010C]"><MapPin size={16} /></div>
                                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">USA Office</h3>
                                    </div>
                                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                        14141 E 102nd Ave,<br />Commerce City,<br />Colorado 80022, USA
                                    </p>
                                </div>

                                <div className="bg-white border border-slate-100 p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="p-1.5 bg-[#EB010C]/10 text-[#EB010C]"><MapPin size={16} /></div>
                                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Namibia Office</h3>
                                    </div>
                                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                                        P.O. Box 21336,<br />Windhoek,<br />Namibia
                                    </p>
                                </div>

                                <div className="bg-white border border-slate-100 p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="p-1.5 bg-[#EB010C]/10 text-[#EB010C]"><Phone size={16} /></div>
                                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Phone</h3>
                                    </div>
                                    <a href="tel:+264812101200" className="text-sm text-slate-700 font-medium hover:text-[#EB010C] transition-colors block">+264 81 210 1200</a>
                                </div>

                                <div className="bg-white border border-slate-100 p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="p-1.5 bg-[#EB010C]/10 text-[#EB010C]"><Mail size={16} /></div>
                                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email</h3>
                                    </div>
                                    <a href="mailto:info@unitedpam.org" className="text-sm text-slate-700 font-medium hover:text-[#EB010C] transition-colors block">info@unitedpam.org</a>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="bg-white border border-slate-100 p-6">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Follow Our Updates</h3>
                                <div className="flex flex-wrap gap-3">
                                    {socials.map(({ label, href, icon: Icon }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="p-3 border border-slate-100 text-slate-500 hover:bg-[#EB010C] hover:text-white hover:border-[#EB010C] transition-all"
                                        >
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white border-t border-slate-100 py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal direction="up">
                        <div className="">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-5">
                                Common Questions
                            </div>
                        </div>
                    </ScrollReveal>
                    <FAQ />
                </div>
            </section>

            {/* Newsletter Banner */}
            <section className="bg-slate-900 py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal direction="right">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/20 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-5">
                                Newsletter
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                                Stay in the Loop
                            </h2>
                            <p className="text-sm text-slate-400 leading-relaxed mt-4 max-w-md">
                                Subscribe for updates on events, programs, and announcements from the Pan-African movement.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="left">
                        <form className="flex flex-col sm:flex-row gap-0">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#EB010C] text-sm transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-[#EB010C] text-white text-xs font-black uppercase tracking-widest hover:bg-[#c9000a] transition-colors whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
