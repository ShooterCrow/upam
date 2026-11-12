import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, ArrowRight, FileDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';

export default function Publications() {
    const [activeTab, setActiveTab] = useState('articles');
    const [selectedDocument, setSelectedDocument] = useState(null);

    const documents = [
        {
            title: "Networking",
            url: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1794469184/Networking_k6mjsy.pdf"
        },
        {
            title: "Pension & Retirement",
            url: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1794469185/Pension_Retirement_emoyoo.pdf"
        },
        {
            title: "Travel Conference Discount",
            url: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1794469185/Travel_Conference_Discount_wtbg2f.pdf"
        },
        {
            title: "School Network Discount",
            url: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1794469186/School_Network_Discount_r5fru1.pdf"
        },
        {
            title: "Business Startup Financing",
            url: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1794469185/Business_Startup_Financing_lfcob4.pdf"
        },
        {
            title: "Digital Empowerment",
            url: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1794469184/Digital_Empowerment_cyupr4.pdf"
        },
        {
            title: "Education Scholarship",
            url: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1794469184/Education_Scholarship_efl9mb.pdf"
        },
        {
            title: "Business Advertising & Promotion",
            url: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1794469184/Business_Advertising_Promotion_jvu36o.pdf"
        },
        {
            title: "Business Consulting",
            url: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1794469184/Business_Consulting_ewsbbx.pdf"
        },
        {
            title: "Legal Policy Support",
            url: "https://res.cloudinary.com/dyy6gisnk/image/upload/v1794469184/Legal_Policy_Support_u7tbgo.pdf"
        }
    ];

    const articles = [
        {
            image: "https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/c645d8992aef0ef8111a956b8c6c5ab794d951f5_l3dnts.jpg",
            slug: "panafrican-unity",
            title: "Pan-African Unity in the 21st Century: From Ideology to Institutional Action",
            description: "Pan-Africanism has historically served as both an ideological framework and a political movement aimed at the liberation, unity, and advancement of African peoples globally."
        },
        {
            image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
            slug: "digital-literacy",
            title: "Digital Literacy and Innovation as Tools for African Self-Sufficiency",
            description: "In the 21st century, digital literacy and technological innovation have become decisive factors in national development and global competitiveness. For Africa, expanding access to digital skills is not merely a technological goal but a strategic pathway toward self-sufficiency."
        },
        {
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
            slug: "african-economic-ecosystem",
            title: "Building an African Economic Ecosystem Owned by Africans",
            description: "Africa's economic structure have long been shaped by external ownership and extractive models that limit local value creation. Building an African-owned economic ecosystem requires reimagining production, trade, finance, and entrepreneurship in ways that prioritize African control and benefit."
        },
        {
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80",
            slug: "colonial-boundaries",
            title: "One People, Many Borders: How Colonial Boundaries Continue to Shape African Disunity",
            description: "The artificial borders imposed during colonial rule fragmented African societies, cultures, and economies, creating divisions that persist today. These boundaries disrupted pre-existing systems of cooperation and continue to influence political instability, ethnic tension, and weak regional integration."
        },
        {
            image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
            slug: "african-self-reliance",
            title: "African Self-Reliance: Moving Beyond Aid to Sustainable Development",
            description: "Foreign aid has played a role in addressing humanitarian crises in Africa, but long-term reliance on aid has often undermined local capacity, accountability, and innovation. African self-reliance emphasizes development strategies driven by local knowledge, resources, and institutions."
        },
        {
            image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&q=80",
            slug: "healing-historical-divides",
            title: "Healing Historical Divides: Slavery, Colonialism, and the Path to Collective Renewal",
            description: "The legacies of slavery and colonialism have left deep psychological, social, and economic scars across Africa and the African diaspora. These histories foster mistrust, fragmentation, and internalized narratives that weaken collective progress."
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-24 overflow-hidden selection:bg-[#EB010C] selection:text-white">
            <Helmet>
                <title>Publications & Articles | UPAM - United Pan-Africanist Movement</title>
                <meta name="description" content="Read UPAM articles, policy papers, and annual reports. Discover knowledge that strengthens African unity, informs policy, and drives sustainable development." />
                <meta property="og:title" content="Publications & Articles | UPAM" />
                <meta property="og:description" content="Read UPAM articles, policy papers, and annual reports. Discover knowledge that strengthens African unity, informs policy, and drives sustainable development." />
            </Helmet>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-3">
                    <ScrollReveal direction="right">
                        <header className="max-w-4xl mb-5 md:mb-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-bold w-fit uppercase tracking-widest border-l-2 border-[#EB010C]">
                                    Resources & Perspectives
                                </div>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 uppercase leading-[1.2] mb-10">
                                Knowledge that strengthens African unity, <br className="hidden md:block" />
                                informs policy, and drives sustainable development.
                            </h1>
                            <p className="text-base max-w-xl text-slate-600 leading-relaxed font-medium">
                                UPAM publications reflect our commitment to research, advocacy, and evidence-based action.
                                From policy papers to research documents, these resources support informed decision-making.
                            </p>
                        </header>
                    </ScrollReveal>
                    <ScrollReveal direction="left">
                        <img className='mb-10' width={500} src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779283260/photo-1488521787991-ed7bbaae773c_ovjeaw.jpg" alt="" />
                    </ScrollReveal>

                </div>

                {/* Tab Switcher */}
                <ScrollReveal direction="up" delay={0.1}>
                    <div className="flex flex-wrap gap-0 mb-10 border-b border-slate-100">
                        <button
                            onClick={() => setActiveTab('articles')}
                            className={`px-2 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative group ${activeTab === 'articles' ? 'text-[#EB010C]' : 'text-slate-400 hover:text-slate-900'}`}
                        >
                            Articles & Research
                            {activeTab === 'articles' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EB010C]" />}
                            <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#EB010C] transition-all duration-500 group-hover:w-full ${activeTab === 'articles' ? 'hidden' : ''}`} />
                        </button>
                        <button
                            onClick={() => setActiveTab('reports')}
                            className={`px-2 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative group ${activeTab === 'reports' ? 'text-[#EB010C]' : 'text-slate-400 hover:text-slate-900'}`}
                        >
                            Reports & Policy
                            {activeTab === 'reports' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EB010C]" />}
                            <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#EB010C] transition-all duration-500 group-hover:w-full ${activeTab === 'reports' ? 'hidden' : ''}`} />
                        </button>
                    </div>
                </ScrollReveal>

                {/* Content Area */}
                <div className="min-h-[600px]">
                    {activeTab === 'articles' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
                            {articles.map((article, index) => (
                                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                                    <div className="group relative bg-white border-r border-b border-slate-100 flex flex-col h-full transition-all duration-700 hover:bg-slate-50">
                                        <div className="relative aspect-[16/10] overflow-hidden grayscale-0">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        <div className="p-10 flex flex-col flex-grow">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-6 h-[1px] bg-[#EB010C]" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#EB010C]">RESEARCH</span>
                                            </div>

                                            <Link to={`/publications/${article.slug}`} className="block mb-4">
                                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-[1.1] transition-colors duration-300 group-hover:text-[#EB010C]">
                                                    {article.title}
                                                </h3>
                                            </Link>

                                            <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8 flex-grow">
                                                {article.description}
                                            </p>

                                            <Link
                                                to={`/publications/${article.slug}`}
                                                className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 transition-all duration-300 hover:gap-6"
                                            >
                                                Read Analysis
                                                <ArrowRight size={14} className="text-[#EB010C]" />
                                            </Link>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <div>
                                <ScrollReveal direction="left">
                                    <div className="flex items-center gap-4 mb-16 px-2">
                                        <h2 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Reports & Policy Documents</h2>
                                        <div className="h-[1px] flex-1 bg-slate-100" />
                                    </div>
                                </ScrollReveal>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-100">
                                    {documents.map((document, index) => (
                                        <ScrollReveal key={document.url} direction="up" delay={index * 0.1}>
                                            <div className="group relative p-8 md:p-10 min-h-[320px] bg-white border-r border-b border-slate-100 flex flex-col justify-between transition-all duration-700 hover:bg-slate-50">
                                                <div>
                                                    <div className="mb-8">
                                                        <FileDown className="w-8 h-8 text-slate-200 group-hover:text-[#EB010C] transition-colors duration-500" />
                                                    </div>
                                                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-6 transition-colors duration-300 group-hover:text-[#EB010C]">
                                                        {document.title}
                                                    </h3>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedDocument(document)}
                                                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700 transition-colors hover:text-[#EB010C]"
                                                    >
                                                        View PDF
                                                        <ArrowRight size={14} />
                                                    </button>
                                                    <a
                                                        href={document.url.replace('/upload/', '/upload/fl_attachment/')}
                                                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#EB010C] transition-colors hover:text-[#c9000a]"
                                                    >
                                                        Download PDF
                                                        <Download size={14} />
                                                    </a>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {selectedDocument && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="pdf-viewer-title"
                    onClick={() => setSelectedDocument(null)}
                >
                    <div
                        className="flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden bg-white shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-4 py-3">
                            <h2 id="pdf-viewer-title" className="truncate text-sm font-bold text-slate-800">
                                {selectedDocument.title}
                            </h2>
                            <div className="flex shrink-0 items-center gap-4">
                                <a
                                    href={selectedDocument.url.replace('/upload/', '/upload/fl_attachment/')}
                                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#EB010C] hover:text-[#c9000a]"
                                >
                                    Download
                                    <Download size={14} />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setSelectedDocument(null)}
                                    aria-label="Close PDF viewer"
                                    className="p-1 text-slate-500 transition-colors hover:text-slate-900"
                                >
                                    <X size={22} />
                                </button>
                            </div>
                        </div>
                        <iframe
                            src={selectedDocument.url}
                            title={selectedDocument.title}
                            className="min-h-0 flex-1"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
