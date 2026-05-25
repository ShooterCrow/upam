import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal';

const PanAfricanUnity = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Main Content Container */}
            <article className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back navigation link */}
                <div className="mb-12">
                    <Link to="/publications" className="inline-flex items-center gap-2 text-sm font-black text-[#EB010C] hover:text-[#EB010C]/80 uppercase tracking-widest group">
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Back to Publications
                    </Link>
                </div>

                {/* Header Section */}
                <ScrollReveal direction="up"><header className="mb-12 lg:mb-16">
                    <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-black leading-[130%] tracking-tight text-slate-900 mb-6 uppercase">
                        Pan-African Unity in the 21st Century: From Ideology to Action
                    </h1>
                    <p className="text-base leading-[170%] text-slate-600">
                        Pan-Africanism has long stood as one of the most powerful ideological movements to emerge from the African experience, rooted in resistance to slavery, colonialism, and racial oppression. While the ideology has inspired generations of leaders, activists, and intellectuals, its practical realization remains incomplete. In the 21st century, Africa faces both unprecedented challenges and new opportunities: globalization, digital transformation, demographic growth, climate change, and shifting geopolitical power. This paper examines Pan-African unity beyond ideology, focusing on actionable pathways toward political cooperation, economic integration, cultural solidarity, and people-centered institutions. It argues that Pan-Africanism must evolve from a symbolic ideal into a lived, functional system that shapes governance, trade, education, and collective identity across Africa and the diaspora.
                    </p>
                </header></ScrollReveal>

                {/* Introduction Section */}
                <section className="mb-12 lg:mb-16">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        <div className="flex-1">
                            <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
                                Introduction: The Enduring Promise of Pan-Africanism
                            </h2>
                            <p className="text-base text-slate-600 leading-relaxed mb-4">
                                Pan-Africanism emerged as both a response and a vision—a response to centuries of exploitation and fragmentation, and a vision of unity, dignity, and self-determination for African people worldwide. From early thinkers such as Henry Sylvester-Williams and W.E.B. Du Bois to continental leaders like Kwame Nkrumah, Julius Nyerere, and Patrice Lumumba, Pan-Africanism has consistently called for African unity as the foundation for freedom and progress.
                            </p>
                            <p className="text-base text-slate-600 leading-relaxed">
                                Yet, more than half a century after the political independence of most African states, the continent remains divided economically, politically, and psychologically. Borders imposed by colonial powers persist, intra-African trade remains low, and African voices are often fragmented. This gap between ideology and practical unity raises a central question: How can Pan-Africanism be translated into concrete action in the 21st century?
                            </p>
                        </div>
                        <div className="w-full lg:w-[430px] shrink-0">
                            <img
                                src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/c645d8992aef0ef8111a956b8c6c5ab794d951f5_l3dnts.jpg"
                                alt="Pan-African community"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Context Section */}
                <section className="mb-12 lg:mb-16 max-w-4xl">
                    <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
                        From Historical Ideology to Contemporary Context
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed mb-6">
                        Historically, Pan-Africanism was shaped by the shared experience of oppression. Early congresses focused on racial justice and anti-colonial resistance. The transition from the OAU to the African Union (AU) in 2002 signaled a renewed commitment to integration. Today, Pan-Africanism operates within a complex global environment—deeply entangled in international trade, digital networks, and migration flows. This demands a more pragmatic, results-oriented Pan-Africanism that balances idealism with institutional effectiveness.
                    </p>
                </section>

                {/* Political Unity Block */}
                <section className="mb-12 lg:mb-16 p-8 bg-slate-50 border-l-4 border-[#EB010C]">
                    <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
                        Political Unity: Cooperation Without Erasing Diversity
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                        Political unity in the 21st century does not require uniform governance but rather coordinated action and shared standards. Regional bodies demonstrate that cooperation is possible when states align around common interests. A stronger Pan-African framework would harmonize these regional efforts, enabling Africa to speak with a unified voice on global issues like climate change and trade. Unity must also be people-centered, involving civil society and youth movements in inclusive participation.
                    </p>
                </section>

                {/* Economic & Cultural Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12 lg:mb-16">
                    <section>
                        <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Economic Integration</h2>
                        <p className="text-base text-slate-600 leading-relaxed">
                            Economic disunity is a massive barrier. The AfCFTA is a promising step, but policy must be supported by infrastructure, finance, and skilled labor. Investment in transport, energy, and digital connectivity is essential to empower African entrepreneurs and ensure benefits reach the grassroots level.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Cultural & Psychological Unity</h2>
                        <p className="text-base text-slate-600 leading-relaxed">
                            Colonialism fragmented identities and devalued cultures. Cultural unity emphasizes mutual respect and shared heritage. Education curricula that prioritize African history and contributions are central to fostering pride. Media and digital platforms now offer new opportunities to transcend physical boundaries.
                        </p>
                    </section>
                </div>

                {/* Youth Section */}
                <section className="mb-12 lg:mb-16">
                    <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
                        Youth and the Future of Pan-African Action
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                        With a majority of the population under 30, the future of Pan-Africanism depends on today's youth. They are redefining the movement through entrepreneurship, technology, and activism. Supporting youth-led initiatives and cross-border collaboration transforms Pan-Africanism from a historical ideology into a living movement. Organizations like UPAM provide the platforms for this essential collective action.
                    </p>
                </section>

                {/* Practical Pathways List */}
                <section className="mb-12 lg:mb-16 bg-slate-900 text-white p-8 lg:p-12">
                    <h2 className="text-xl lg:text-2xl font-black mb-8 uppercase">
                        Practical Pathways Forward
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Strengthening Institutions", body: "Building transparent, accountable continental systems responsive to African people." },
                            { title: "Cross-Border Collaboration", body: "Facilitating exchange in education, business, and culture to build shared purpose." },
                            { title: "Economic Self-Reliance", body: "Developing African-owned industries, finance systems, and trade networks." },
                            { title: "Centering People", body: "Ensuring unity is experienced by citizens, not just negotiated by governments." }
                        ].map((path, i) => (
                            <div key={i} className="flex gap-4 border-l border-red-600 pl-6">
                                <div>
                                    <h3 className="font-black uppercase text-sm mb-2">{path.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{path.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Conclusion Section */}
                <footer className="pt-8 border-t border-slate-100 max-w-7xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 uppercase text-center">Reimagining Pan-African Unity</h2>
                    <div className="text-base lg:text-lg text-slate-600 leading-relaxed space-y-6">
                        <p>
                            Pan-Africanism in the 21st century stands at a crossroads. Its future relevance depends on producing real outcomes—improving livelihoods, strengthening identity, and amplifying Africa's collective voice.
                        </p>
                        <p>
                            By grounding the movement in action—political coordination, economic integration, cultural renewal, and youth leadership—Africa can transform this historic vision into a functional reality. The task before this generation is not merely to inherit Pan-Africanism but to build it.
                        </p>
                        <div className="text-slate-900 font-black text-center pt-8 border-b-2 border-[#EB010C] w-fit mx-auto pb-2 uppercase text-xl">
                            BUILDING THE VISION. LIVING THE UNITY.
                        </div>
                    </div>
                </footer>

                {/* Bottom navigation */}
                <div className="py-16 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link to="/publications" className="inline-flex items-center gap-2 text-sm font-black text-[#EB010C] hover:text-[#EB010C]/80 uppercase tracking-widest group">
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Back to Publications
                    </Link>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">United Pan-African Movement</p>
                </div>
            </article>
        </div>
    );
};

export default PanAfricanUnity;