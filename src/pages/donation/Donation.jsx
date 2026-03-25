import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import FAQ from '../../component/ui/FAQ';
import worldMapImg from '../../assets/world_map.png';

const mapMarkers = [
    {
        top: '30%', left: '44%', label: 'Nigeria',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    },
    {
        top: '24%', left: '52%', label: 'Kenya',
        img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face'
    },
    {
        top: '36%', left: '51%', label: 'Tanzania',
        img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=80&h=80&fit=crop&crop=face'
    },
    {
        top: '22%', left: '80%', label: 'Cameroon',
        img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=80&h=80&fit=crop&crop=face'
    },
    {
        top: '44%', left: '46%', label: 'Namibia',
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop&crop=face'
    },
    {
        top: '42%', left: '56%', label: 'Malawi',
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face'
    },
];

const WorldMapWithMarkers = () => (
    <div className="relative w-full h-full">
        <img
            src={worldMapImg}
            alt="Africa presence map"
            className="w-full h-auto object-contain"
        />
        {mapMarkers.map((marker, i) => (
            <div
                key={i}
                className="absolute flex flex-col items-center"
                style={{ top: marker.top, left: marker.left, transform: 'translate(-50%, -50%)' }}
            >
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md ring-1 ring-gray-200">
                    <img src={marker.img} alt={marker.label} className="w-full h-full object-cover" />
                </div>
                <div className="mt-1 bg-white text-[10px] font-medium text-gray-800 px-2 py-0.5 shadow-sm whitespace-nowrap">
                    {marker.label}
                </div>
            </div>
        ))}
    </div>
);

const Donation = () => {
    return (
        <div className="min-h-screen bg-[#F4F4F4] text-black font-['Inter',_sans-serif]">

            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-white">
                <div className="container mx-auto px-4 max-w-7xl pt-16 pb-12">
                    <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
                        {/* Left: Title + Subtitle + Buttons */}
                        <div className="flex flex-col gap-6">
                            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-normal text-gray-900 leading-[1.1] tracking-tight">
                                Support the Movement.<br /> Strengthen the Mission.
                            </h1>
                            <p className="text-sm text-gray-600 font-normal">
                                This is more than a contribution.<br />
                                It is participation in shaping Africa's future.
                            </p>
                            <div className="grid grid-cols-3 gap-0 mt-2">
                                <Link
                                    to="/donation/funds"
                                    className="px-4 py-3 bg-white border border-gray-900 text-gray-900 font-normal text-sm flex items-center justify-between hover:bg-gray-50 transition-all group"
                                >
                                    Donate Funds
                                    <span className="text-gray-500 group-hover:text-gray-900 transition-colors text-xs">»</span>
                                </Link>
                                <Link
                                    to="/volunteer"
                                    className="px-4 py-3 bg-white border-t border-b border-r border-gray-900 text-gray-900 font-normal text-sm flex items-center justify-between hover:bg-gray-50 transition-all group"
                                >
                                    Offer Professional Services
                                    <span className="text-gray-500 group-hover:text-gray-900 transition-colors text-xs">»</span>
                                </Link>
                                <Link
                                    to="/partnership"
                                    className="px-4 py-3 bg-white border-t border-b border-r border-gray-900 text-gray-900 font-normal text-sm flex items-center justify-between hover:bg-gray-50 transition-all group"
                                >
                                    Support with Resources
                                    <span className="text-gray-500 group-hover:text-gray-900 transition-colors text-xs">»</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right: UPAM Description + Watch Video + Image */}
                        <div className="flex flex-col justify-between h-full min-h-[260px]">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The United Pan-Africanist Movement (UPAM) is committed to building a united, empowered, and forward-thinking Africa through leadership development, digital infrastructure, youth empowerment, and continental collaboration. Your donation supports the entire movement its vision, its people, and its long-term impact.
                            </p>
                            <div className="flex items-end justify-between gap-4 mt-8">
                                <button className="flex items-center gap-2 text-gray-800 font-medium text-sm hover:text-gray-900 transition-colors">
                                    <span className="w-7 h-7 bg-[#EB010C] flex items-center justify-center shrink-0">
                                        <PlayCircle className="w-4 h-4 text-white" />
                                    </span>
                                    Watch Video
                                </button>
                                <div className="w-36 h-28 overflow-hidden shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                        alt="Community"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner Image */}
                <div className="container mx-auto px-4 max-w-7xl pb-0">
                    <div className="w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-200">
                        <img
                            src="https://api.builder.io/api/v1/image/assets/TEMP/b3564abd0e1fb1dfb19649f1092e28adc8a02548?width=1310"
                            alt="Graduation background"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </section>

            {/* Why Your Support Matters Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Why Your Support Matters</h2>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                                UPAM operates as a structured movement with multiple arms and initiatives focused on sustainable impact across Africa.
                            </p>

                            <p className="text-sm font-semibold text-gray-900 mt-2">Your support enables us to:</p>
                            <ol className="space-y-2 text-sm text-gray-600">
                                {[
                                    "Build and maintain digital platforms that connect members and coordinate activities.",
                                    "Organize strategic meetings, workshops, and Pan-African engagements.",
                                    "Support youth empowerment and leadership development programs.",
                                    "Strengthen administrative and operational systems.",
                                    "Expand our continental reach and collaborative networks.",
                                    "Support educational and scholarship initiatives through the UPAM Academy."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 leading-relaxed">
                                        <span className="shrink-0 text-gray-900 font-medium">{i + 1}.</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* World Map with Avatar Markers */}
                        <div className="relative w-full flex items-center justify-center">
                            <WorldMapWithMarkers />
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Image Blocks */}
            <section className="bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Block 1 – Speaker */}
                        <div className="h-[380px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Speaker at event"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Image Block 2 – Conference with red overlay + quote */}
                        <div className="h-[380px] overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Workshop session"
                                className="w-full h-full object-cover"
                            />
                            {/* Red colour overlay */}
                            <div className="absolute inset-0 bg-[#EB010C] opacity-60" />
                            {/* Quote text overlay */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <p className="text-white text-base md:text-lg font-normal leading-snug">
                                    UPAM is committed to accountability and responsible management of all resources entrusted to the movement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-3 gap-12 text-center border-b border-gray-100 pb-16">
                        <div className="flex flex-col items-center">
                            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">200+</h3>
                            <p className="text-lg text-gray-600 font-medium max-w-xs leading-relaxed">We are proud that our organization has impacted over 200+ lives</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">15+</h3>
                            <p className="text-lg text-gray-600 font-medium max-w-xs leading-relaxed">Our organization has made a meaningful impact on 15+ countries</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">500+</h3>
                            <p className="text-lg text-gray-600 font-medium max-w-xs leading-relaxed">Our organization thrives on the remarkable dedication of over 500+ volunteers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Information Sections */}
            <section className="pb-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="space-y-24">
                        {/* Section 1 – Pan-African Growth */}
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="h-[360px] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                                    alt="Group of inspired youths"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-5">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">Support Pan-African Growth & Youth Empowerment</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    A core focus of UPAM is empowering young Africans with leadership capacity, digital skills, and structured engagement opportunities.
                                </p>
                                <p className="text-gray-600 leading-relaxed">Through initiatives including the UPAM Academy and other programs, we:</p>
                                <ol className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-start gap-3"><span className="font-medium">1.</span> Provide access to structured training.</li>
                                    <li className="flex items-start gap-3"><span className="font-medium">2.</span> Create internship pathways.</li>
                                    <li className="flex items-start gap-3"><span className="font-medium">3.</span> Develop future leaders.</li>
                                    <li className="flex items-start gap-3"><span className="font-medium">4.</span> Encourage continental collaboration.</li>
                                </ol>
                                <p className="text-gray-600 leading-relaxed mt-1">
                                    Your donation supports the broader mission of empowering Africans to build Africa.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 – Message from Leadership */}
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="flex flex-col gap-5 order-2 md:order-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">A Message from Leadership</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    UPAM is built on the belief that Africa's progress requires organized structure, committed leadership, and collective responsibility. We are not just running programs — we are building systems. Your support strengthens our ability to operate efficiently, expand strategically, and serve responsibly. We invite you to stand with the movement as we continue building a united and empowered Africa.
                                </p>
                            </div>
                            <div className="h-[360px] overflow-hidden order-1 md:order-2">
                                <img
                                    src="https://images.unsplash.com/photo-1542385151-efd9000785a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                                    alt="Community leaders"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-[#F4F4F4] py-20 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FAQ />
                </div>
            </section>

            {/* Be Part of the Movement CTA */}
            <section className="bg-[#027969] relative overflow-hidden">
                <div className="grid lg:grid-cols-2 items-stretch min-h-[380px]">
                    {/* Left: Text */}
                    <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">Be Part of the Movement</h2>
                        <p className="text-white/90 text-base mb-2 leading-relaxed">
                            Africa's transformation requires collective responsibility.
                        </p>
                        <p className="text-white/90 text-base mb-2 leading-relaxed">
                            Your contribution today strengthens structure, empowers people,
                        </p>
                        <p className="text-white/90 text-base mb-2 leading-relaxed">
                            and advances the Pan-African vision.
                        </p>
                        <p className="text-white text-base mb-8 leading-relaxed">
                            Stand with UPAM.
                        </p>
                        <Link
                            to="/donation/funds"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white text-white text-sm font-medium hover:bg-white hover:text-[#027969] transition-colors self-start"
                        >
                            Donate Funds »
                        </Link>
                    </div>
                    {/* Right: Image with organic blob clip */}
                    <div className="relative overflow-hidden">
                        <div
                            className="absolute inset-0"
                            style={{
                                clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 8% 100%, 2% 75%, 10% 50%, 2% 25%)'
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                                alt="Smiling group"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donation;
