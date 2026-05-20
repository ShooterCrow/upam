import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Heart,
    Lock,
    Shield,
    Globe,
    Award,
    TrendingUp,
    ChevronRight,
    Users,
    CheckCircle2,
    PlayCircle,
    Sparkles,
    ArrowUpRight,
    ArrowRight,
    Calendar,
    MapPin
} from 'lucide-react';
import FAQ from '../../component/ui/FAQ';
import DonationPaymentModal from './DonationPaymentModal';
import WorldMapWithMarkers from '../../component/ui/WorldMapWithMarkers';
import { useGetEventsQuery } from '../../pages/UserAdminPages/admin/calendarApiSlice';

const Donation = () => {
    const formRef = useRef(null);
    const [donationType, setDonationType] = useState('one-time'); // 'one-time', 'monthly'
    const [selectedAmount, setSelectedAmount] = useState('25');
    const [customAmount, setCustomAmount] = useState('');
    const [preferredArea, setPreferredArea] = useState('general');
    const [anonymous, setAnonymous] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNo: '',
        country: '',
    });

    // Fetch Events Data
    const { data: eventsData, isLoading: eventsLoading } = useGetEventsQuery({ category: 'Event' });
    const events = eventsData?.data || [];
    const featuredEvent = events.find(e => e.isFeatured) || events[0];

    const presetAmounts = ['10', '25', '50', '100'];

    const getImpactText = (amount) => {
        const amt = parseFloat(amount);
        if (isNaN(amt) || amt <= 0) return "Sponsor our critical, community-led initiatives across Africa.";
        if (amt < 20) return "Feeds educational materials to 1 student in the UPAM Academy program.";
        if (amt < 50) return "Powers remote internet connectivity & hub access for a youth chapter.";
        if (amt < 100) return "Funds technology tools and digital training materials for emerging innovators.";
        return "Sponsors a full course scholarship, mentoring, and support for a future leader.";
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleQuickSponsor = (cause, defaultAmount) => {
        setPreferredArea(cause);
        setSelectedAmount(defaultAmount);
        setCustomAmount('');
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email) {
            alert('Please fill out your Full Name and Email to continue.');
            return;
        }
        setIsPaymentModalOpen(true);
    };

    const displayAmount = selectedAmount === 'custom' ? (customAmount || '0') : selectedAmount;

    const activeImpactText = getImpactText(displayAmount);

    return (
        <div className="min-h-screen bg-[#FAFAFC] text-slate-900 font-['Inter',_sans-serif] overflow-x-hidden">
            {/* Header Hero Area */}
            <div className="relative bg-gradient-to-br from-[#FAFAFC] to-[#F3F4F6] text-slate-900 pt-24 pb-20 px-4 md:px-8 border-b border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(235,1,12,0.03),transparent_50%)] pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#EB010C]/5 blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center relative z-10">

                    {/* Left Hero Story */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit">
                            <Sparkles size={14} />
                            Empower Africa's Next Generation
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
                            Fuel the Pan-African Dream.
                        </h1>

                        {/* Latest Event Card */}
                        <div className="bg-white border border-gray-200 p-6 max-w-xl transition-all">
                            {eventsLoading ? (
                                <div className="animate-pulse space-y-4">
                                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                                    <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                                </div>
                            ) : featuredEvent ? (
                                <>
                                    <div className="flex items-center gap-2 text-xs font-bold text-[#EB010C] uppercase tracking-wider mb-3">
                                        <Calendar size={14} />
                                        Featured Event
                                    </div>
                                    <h3 className="text-lg md:text-xl font-extrabold text-slate-900 leading-snug">
                                        {featuredEvent.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                                        {featuredEvent.description || "Support this critical upcoming initiative."}
                                    </p>

                                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-bold text-slate-700">
                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={14} className="text-[#EB010C]" />
                                            {featuredEvent.location || "Virtual / Multiple Locations"}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Users size={14} className="text-[#EB010C]" />
                                            {new Date(featuredEvent.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        {/* Interactive Trust Badges */}
                        <div className="hidden lg:grid grid-cols-3 gap-4 max-w-xl pt-4 border-t border-slate-200">
                            <div className="flex gap-2.5 items-start">
                                <div className="p-1 rounded bg-[#EB010C]/5 border border-[#EB010C]/10 text-[#EB010C]">
                                    <Lock size={16} />
                                </div>
                                <div className="text-xs">
                                    <p className="font-bold text-slate-900">100% Secure</p>
                                    <p className="text-slate-500">Encrypted checkout</p>
                                </div>
                            </div>
                            <div className="flex gap-2.5 items-start">
                                <div className="p-1 rounded bg-[#EB010C]/5 border border-[#EB010C]/10 text-[#EB010C]">
                                    <Shield size={16} />
                                </div>
                                <div className="text-xs">
                                    <p className="font-bold text-slate-900">Accountability</p>
                                    <p className="text-slate-500">Verifiable initiatives</p>
                                </div>
                            </div>
                            <div className="flex gap-2.5 items-start">
                                <div className="p-1 rounded bg-[#EB010C]/5 border border-[#EB010C]/10 text-[#EB010C]">
                                    <Award size={16} />
                                </div>
                                <div className="text-xs">
                                    <p className="font-bold text-slate-900">Direct Impact</p>
                                    <p className="text-slate-500">To verified causes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Interactive Donation Form Card */}
                    <div ref={formRef} className="bg-white p-6 md:p-8 text-slate-900  relative">
                        <div className="absolute top-4 right-4 animate-pulse">
                            <Heart className="text-[#EB010C] fill-[#EB010C]" size={24} />
                        </div>

                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Make an Impact</h3>
                        <p className="text-xs text-slate-500 mt-1 mb-6">Choose a custom amount or select a preset to support the movement.</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Donation Type tabs */}
                            <div className="grid grid-cols-2 p-1 bg-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setDonationType('one-time')}
                                    className={`py-2 text-xs font-bold transition-all ${donationType === 'one-time' ? 'bg-white text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    One-Time Gift
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setDonationType('monthly')}
                                    className={`py-2 text-xs font-bold transition-all ${donationType === 'monthly' ? 'bg-white text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    💝 Monthly Support
                                </button>
                            </div>

                            {/* Preset Amount buttons */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Select Donation Amount</label>
                                <div className="grid grid-cols-4 gap-3">
                                    {presetAmounts.map((amount) => (
                                        <button
                                            key={amount}
                                            type="button"
                                            onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                                            className={`py-3.5 text-sm font-extrabold rounded-xl border transition-all ${selectedAmount === amount ? 'bg-[#EB010C] text-white border-[#EB010C] scale-105' : 'bg-white text-slate-700 border-slate-200 hover:border-[#EB010C]'}`}
                                        >
                                            ${amount}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-3">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedAmount('custom')}
                                        className={`w-full py-2.5 text-xs font-bold rounded-xl border text-center transition-all ${selectedAmount === 'custom' ? 'bg-[#EB010C] text-white border-[#EB010C]' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                                    >
                                        Custom Amount
                                    </button>
                                    {selectedAmount === 'custom' && (
                                        <div className="relative mt-2 animate-in slide-in-from-top-1 duration-150">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                                            <input
                                                type="number"
                                                min="1"
                                                value={customAmount}
                                                onChange={(e) => setCustomAmount(e.target.value)}
                                                placeholder="Enter customized amount"
                                                className="w-full bg-slate-50 border border-slate-200 py-3.5 pl-8 pr-4 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EB010C] focus:border-[#EB010C] font-bold transition-all"
                                                autoFocus
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Dynamic Impact Indicator */}
                            <div className="p-4 bg-red-50/50 border border-red-100/50 rounded-2xl flex gap-3 items-start animate-in fade-in duration-300">
                                <CheckCircle2 className="text-[#EB010C] shrink-0 mt-0.5" size={16} />
                                <div className="text-xs text-red-800 leading-relaxed font-semibold">
                                    <span className="text-red-950 font-bold uppercase tracking-wider block mb-0.5">Your Impact:</span>
                                    {activeImpactText}
                                </div>
                            </div>

                            {/* Destination Dropdown */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Direct My Funds To</label>
                                <select
                                    value={preferredArea}
                                    onChange={(e) => setPreferredArea(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 py-3 px-4 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EB010C] focus:border-[#EB010C] font-bold transition-all appearance-none"
                                >
                                    <option value="general">General Support (Allocated where needed)</option>
                                    <option value="education">UPAM Academy & Scholarships</option>
                                    <option value="digital">Digital Infrastructure & Connectivity</option>
                                    <option value="youth">Youth Leadership Initiatives</option>
                                </select>
                            </div>

                            {/* Donor Details */}
                            <div className="space-y-3 pt-2 border-t border-slate-100">
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Your Information</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleFormChange}
                                    placeholder="Full Name"
                                    className="w-full bg-slate-50 border border-slate-200 py-3 px-4 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EB010C] focus:border-[#EB010C] transition-all font-medium"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    placeholder="Email Address"
                                    className="w-full bg-slate-50 border border-slate-200 py-3 px-4 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EB010C] focus:border-[#EB010C] transition-all font-medium"
                                    required
                                />
                                <div className="flex items-center gap-2 pt-1">
                                    <input
                                        type="checkbox"
                                        id="anonymous-check"
                                        checked={anonymous}
                                        onChange={(e) => setAnonymous(e.target.checked)}
                                        className="rounded border-slate-300 text-[#EB010C] focus:ring-[#EB010C] cursor-pointer w-4 h-4"
                                    />
                                    <label htmlFor="anonymous-check" className="text-xs text-slate-500 font-bold cursor-pointer select-none">
                                        Make this donation anonymous
                                    </label>
                                </div>
                            </div>

                            {/* Submit and Pay */}
                            <button
                                type="submit"
                                className="w-full py-4 bg-[#EB010C] hover:bg-[#c9000a] active:scale-[0.99] text-white font-black text-sm tracking-wide transition-all flex items-center justify-center gap-2 mt-4"
                            >
                                <Heart size={16} className="fill-white" />
                                Proceed to Secure Gift (${displayAmount})
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {/* Campaign Initiatives Grid */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">UPAM Initiatives Supported by Your Donations</h2>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Learn how your contributions directly drive real developmental arms, digital forums, and critical energy projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Initiative 1 */}
                    <div className="bg-[#FAFAFC] border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
                        <div className="space-y-4">
                            <div className="h-48 rounded-2xl overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&fit=crop"
                                    alt="UPAM Academy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 px-3 py-1 bg-[#EB010C] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Education
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900">UPAM Academy & Schools</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Prepares skilled professionals for today's market. Your donations support the creation of digital tech courses, purchasing laptops, sponsoring tuition, and organizing strategic leadership training modules.
                            </p>

                            <ul className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-200/60">
                                <li className="flex items-center gap-1.5">⚡ Sponsor courses for underprivileged leaders</li>
                                <li className="flex items-center gap-1.5">⚡ Provide digital learning resources</li>
                                <li className="flex items-center gap-1.5">⚡ Expand vocational internships</li>
                            </ul>
                        </div>
                        <div className="mt-6 pt-4">
                            <button
                                onClick={() => handleQuickSponsor('education', '50')}
                                className="w-full py-2.5 bg-white hover:bg-slate-900 border border-slate-200 text-slate-800 hover:text-white rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 group-hover:bg-[#EB010C] group-hover:text-white group-hover:border-[#EB010C]"
                            >
                                Support Academy
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Initiative 2 */}
                    <div className="bg-[#FAFAFC] border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
                        <div className="space-y-4">
                            <div className="h-48 rounded-2xl overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&fit=crop"
                                    alt="Jumuiya Forum & Media"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 px-3 py-1 bg-[#EB010C] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Digital Forums
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900">Jumuiya Forum & WNN Africa</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Promotes digital integration and unified media across the continent. Donations fund server support, development of safe collaborative forums, and public media broadcasts.
                            </p>

                            <ul className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-200/60">
                                <li className="flex items-center gap-1.5">⚡ Keep community servers secure and fast</li>
                                <li className="flex items-center gap-1.5">⚡ Build out multi-lingual forums</li>
                                <li className="flex items-center gap-1.5">⚡ Broadcast Pan-African events worldwide</li>
                            </ul>
                        </div>
                        <div className="mt-6 pt-4">
                            <button
                                onClick={() => handleQuickSponsor('digital', '25')}
                                className="w-full py-2.5 bg-white hover:bg-slate-900 border border-slate-200 text-slate-800 hover:text-white rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 group-hover:bg-[#EB010C] group-hover:text-white group-hover:border-[#EB010C]"
                            >
                                Support Media & Forums
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Initiative 3 */}
                    <div className="bg-[#FAFAFC] border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
                        <div className="space-y-4">
                            <div className="h-48 rounded-2xl overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1542385151-efd9000785a0?w=600&fit=crop"
                                    alt="Sudan Clean Energy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 px-3 py-1 bg-[#EB010C] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Energy & Health
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900">Sudan Energy & Health Programs</h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Supporting Sudan National Energy Research Center with clean energy systems, while conducting healthcare programs and humanitarian support cross-continentally.
                            </p>

                            <ul className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-200/60">
                                <li className="flex items-center gap-1.5">⚡ Fund research on solar off-grids</li>
                                <li className="flex items-center gap-1.5">⚡ Ship medical and first aid resources</li>
                                <li className="flex items-center gap-1.5">⚡ Empower local healthcare facilitators</li>
                            </ul>
                        </div>
                        <div className="mt-6 pt-4">
                            <button
                                onClick={() => handleQuickSponsor('youth', '100')}
                                className="w-full py-2.5 bg-white hover:bg-slate-900 border border-slate-200 text-slate-800 hover:text-white rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1 group-hover:bg-[#EB010C] group-hover:text-white group-hover:border-[#EB010C]"
                            >
                                Support Energy & Health
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Your Support Matters Section */}
            <section className="bg-white border-y border-slate-200 py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit">
                            Transparency & Accountability
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                            Where Your Resources Go
                        </h2>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                            We pride ourselves on 100% financial accountability. Your donations to the United Pan-Africanist Movement are routed strictly to strategic operational programs.
                        </p>

                        <div className="space-y-4 pt-4">
                            {[
                                { title: "Building proprietary software forums (Jumuiya)", desc: "Enables active communication across multiple local and international committees." },
                                { title: "Equipping remote learning digital hubs", desc: "Provides high-speed local internet routers, electrical units, and training laptops." },
                                { title: "Funding student tuition support", desc: "Covers standard learning tracks within our accredited partners and the UPAM Academy." },
                                { title: "Logistics for leadership gatherings", desc: "Funds physical meeting tables, resources, materials, and digital hosting servers." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-red-50 text-[#EB010C] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-950">{item.title}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* World Map presence */}
                    <div className="p-6 relative flex flex-col justify-between">
                        <div className="text-center mb-6">
                            <h4 className="text-sm font-black tracking-wide uppercase text-slate-800">Our Continental Footprint</h4>
                            <p className="text-[11px] text-slate-400 mt-0.5">Real impact happening in real communities across Africa.</p>
                        </div>
                        <WorldMapWithMarkers />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-12 bg-[#FAFAFC]">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Stories of Transformation</h2>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Hear from real beneficiaries whose leadership potential has been realized through the UPAM support ecosystem.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-slate-200 text-slate-800 p-8 shadow-sm flex flex-col justify-between relative">
                        <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed italic mb-8">
                            "Receiving the UPAM Academy scholarship completely reshaped my future. I received training in cloud databases, and now I manage servers for African business start-ups. I'm active in coordinating local youth assemblies."
                        </p>
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#EB010C]">
                                <img
                                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face"
                                    alt="Amina"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-slate-900">Amina K.</h4>
                                <p className="text-[10px] text-[#EB010C] font-bold uppercase tracking-wider">Scholarship Beneficiary, Kenya Chapter</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 text-slate-800 p-8 shadow-sm flex flex-col justify-between relative">
                        <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed italic mb-8">
                            "Strategic workshops run by local UPAM infrastructure helped our small agricultural cooperative sync with modern supply routes. Pan-African unity isn't just an abstract theory, it has very real practical utility here."
                        </p>
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#EB010C]">
                                <img
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
                                    alt="Kofi"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-slate-900">Kofi B.</h4>
                                <p className="text-[10px] text-[#EB010C] font-bold uppercase tracking-wider">Chapter Leader, Ghana</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-24 px-4 md:px-8 border-t border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <FAQ />
                </div>
            </section>

            {/* Bottom secure banner CTA */}
            <section className="bg-slate-100 py-20 px-4 md:px-8 text-center text-slate-900 relative overflow-hidden border-t border-slate-200">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(235,1,12,0.02),transparent_50%)] pointer-events-none" />
                <div className="max-w-2xl mx-auto space-y-6 relative z-10">
                    <Heart size={44} className="text-[#EB010C] mx-auto animate-pulse fill-red-500/10" />
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Support the Pan-African Mission</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal">
                        Every single gift fuels direct local organizing, academy scholarships, and open tech frameworks. Thank you for standing with UPAM to manifest continental progress.
                    </p>
                    <button
                        onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#EB010C] hover:bg-[#c9000a] active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-red-500/10 transition-all"
                    >
                        Make Your Secure Gift Now
                        <ArrowUpRight size={16} />
                    </button>
                </div>
            </section>

            {/* Secure Payment Modal wrapper */}
            <DonationPaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                amount={displayAmount}
                donorInfo={{ firstName: formData.fullName, email: formData.email }}
                onSuccess={() => {
                    setIsSubmittedSuccessfully(true);
                    setIsPaymentModalOpen(false);
                    setFormData({ fullName: '', email: '', phoneNo: '', country: '' });
                    setSelectedAmount('25');
                    setCustomAmount('');
                }}
            />

            {/* Beautiful Success Modal Overlay */}
            {isSubmittedSuccessfully && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center border border-slate-100 animate-in zoom-in-95 duration-200">
                        <div className="w-16 h-16 bg-red-100 text-[#EB010C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                            <Heart size={32} className="fill-red-650/10" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Thank You for Supporting UPAM!</h3>
                        <p className="text-sm text-slate-500 leading-relaxed mt-3 mb-8">
                            Your secure donation has been successfully processed. An official receipt will be sent to your email shortly. Thank you for empowering African youth and accelerating the movement!
                        </p>
                        <button
                            onClick={() => setIsSubmittedSuccessfully(false)}
                            className="w-full py-4 bg-slate-950 hover:bg-slate-900 active:scale-95 text-white rounded-2xl font-black text-sm tracking-wider shadow-md transition-all"
                        >
                            Return to Donation Page
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;
