import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, ExternalLink, Users, Search } from 'lucide-react';
import { useGetChaptersQuery } from '../UserAdminPages/admin/chapters/chaptersApiSlice';
import ScrollReveal from '../../components/ScrollReveal';

const Chapters = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: chapters, isLoading, isError, refetch } = useGetChaptersQuery();

    const filtered = (chapters || []).filter(ch =>
        ch.chapter_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.chapter_note?.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort();

    return (
        <div className="min-h-screen bg-[#FAFAFC] text-slate-900 overflow-x-hidden">

            {/* Hero */}
            <div className="relative bg-gradient-to-br from-[#FAFAFC] to-[#F3F4F6] pt-32 pb-20 px-4 md:px-8 border-b border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(235,1,12,0.03),transparent_50%)] pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#EB010C]/5 blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <ScrollReveal direction="up" delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-6">
                            <Users size={13} />
                            UPAM Global Network
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06] text-slate-900 mb-4">
                            Our Chapters
                        </h1>
                        <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
                            The United Pan-Africanist Movement spans the globe. Each chapter is a hub of action, culture, and leadership within their community.
                        </p>
                    </ScrollReveal>

                    {/* Search Bar */}
                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="mt-8 relative max-w-md">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search chapters by name or region..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 text-sm font-medium text-slate-700 focus:outline-none focus:border-[#EB010C] transition-colors"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Chapters Grid */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">

                {isLoading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="animate-pulse bg-white border border-slate-100 p-6 h-40">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-9 bg-slate-200 rounded" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-slate-200 rounded w-3/4" />
                                        <div className="h-3 bg-slate-100 rounded w-1/2" />
                                    </div>
                                </div>
                                <div className="h-3 bg-slate-100 rounded w-full" />
                                <div className="h-3 bg-slate-100 rounded w-2/3 mt-2" />
                            </div>
                        ))}
                    </div>
                )}

                {isError && (
                    <div className="py-24 text-center">
                        <Globe size={48} className="mx-auto text-slate-200 mb-4" />
                        <h3 className="text-lg font-black text-slate-800 mb-2">Could not load chapters</h3>
                        <p className="text-sm text-slate-400 mb-6">There was an error fetching the chapter data.</p>
                        <button
                            onClick={refetch}
                            className="px-6 py-2 bg-[#EB010C] text-white text-xs font-black uppercase tracking-widest hover:bg-[#c9000a] transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}

                {!isLoading && !isError && filtered.length === 0 && (
                    <div className="py-24 text-center">
                        <Globe size={48} className="mx-auto text-slate-200 mb-4" />
                        <h3 className="text-lg font-black text-slate-800">
                            {searchQuery ? 'No chapters match your search' : 'No chapters yet'}
                        </h3>
                        <p className="text-sm text-slate-400 mt-2">Check back soon as our network continues to grow.</p>
                    </div>
                )}

                {!isLoading && !isError && filtered.length > 0 && (
                    <>
                        <div className="flex items-center justify-between mb-8">
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                                {filtered.length} {filtered.length === 1 ? 'Chapter' : 'Chapters'} {searchQuery ? 'Found' : 'Worldwide'}
                            </p>
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="text-[10px] font-black text-[#EB010C] uppercase tracking-widest hover:underline">
                                    Clear Search
                                </button>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">
                            {filtered.sort().map((chapter, index) => (
                                <ScrollReveal key={chapter._id} direction="up" delay={Math.min(index * 0.05, 0.3)}>
                                    <div className="group bg-white p-8 flex flex-col justify-between hover:bg-slate-50 transition-colors duration-300 h-full min-h-[100px]">
                                        <div>
                                            {/* Flag + Name */}
                                            <div className="flex items-center gap-4 mb-4">
                                                {chapter.chapter_flag ? (
                                                    <img
                                                        src={chapter.chapter_flag}
                                                        alt={`${chapter.chapter_name} flag`}
                                                        className="w-14 h-9 object-cover border border-slate-200 flex-shrink-0"
                                                        onError={(e) => { e.target.style.display = 'none'; }}
                                                    />
                                                ) : (
                                                    <div className="w-14 h-9 bg-[#EB010C]/10 border border-[#EB010C]/20 flex items-center justify-center flex-shrink-0">
                                                        <Globe size={18} className="text-[#EB010C]" />
                                                    </div>
                                                )}
                                                <div>
                                                    <h3 className="text-sm font-black text-slate-900 leading-snug group-hover:text-[#EB010C] transition-colors">
                                                        {chapter.chapter_name}
                                                    </h3>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                                                        ID: {chapter.chapter_id}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Note */}
                                            {chapter.chapter_note && (
                                                <p className="text-xs text-slate-500 leading-relaxed uppercase line-clamp-2">
                                                    {chapter.chapter_note} {chapter.chapter_name}
                                                </p>
                                            )}
                                        </div>

                                        {/* URL Link */}
                                        {/* {chapter.chapter_url && (
                                            <div className="mt-5 pt-4 border-t border-slate-100">
                                                <a
                                                    href={chapter.chapter_url.startsWith('http') ? chapter.chapter_url : `https://${chapter.chapter_url}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-[10px] font-black text-[#EB010C] uppercase tracking-widest hover:gap-3 transition-all"
                                                >
                                                    <ExternalLink size={12} />
                                                    Visit Chapter
                                                </a>
                                            </div>
                                        )} */}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </>
                )}
            </section>

            {/* Bottom CTA Banner */}
            <section className="bg-[#003115] py-20 px-4 md:px-8 text-center">
                <div className="max-w-2xl mx-auto">
                    <ScrollReveal direction="up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/20 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-6 mx-auto">
                            <MapPin size={13} />
                            Start a Chapter
                        </div>
                        <h2 className="headerWhite text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                            Don't see your region?
                        </h2>
                        <p className="text-sm text-slate-400 leading-relaxed mb-8">
                            Bring the Pan-African movement to your community. We are always looking to expand our reach and connect leaders across new territories.
                        </p>
                        <Link
                            to="/contact-us"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#EB010C] hover:bg-[#c9000a] text-white font-black text-xs uppercase tracking-widest transition-colors"
                        >
                            Contact Us to Start One
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Chapters;
