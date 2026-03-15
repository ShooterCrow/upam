import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import FAQ from '../../component/ui/FAQ';
import worldMapImg from '../../assets/world_map.png';

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
                                    Offer Proffessional Services
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
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Why Your Support Matters</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-4 font-medium max-w-xl">
                                UPAM operates as a structured movement with multiple arms and initiatives focused on sustainable impact across Africa.
                            </p>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Your support enables us to:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Build and maintain digital platforms that connect members and coordinate activities.",
                                    "Organize strategic meetings, workshops, and Pan-African engagements.",
                                    "Support youth empowerment and leadership development programs.",
                                    "Strengthen administrative and operational systems.",
                                    "Expand our continental reach and collaborative networks.",
                                    "Support educational and scholarship initiatives through the UPAM Academy."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-gray-600 leading-relaxed">
                                        <span className="text-[#2E7D32] font-semibold">{i + 1}.</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Graphic Map */}
                        <div className="relative w-full aspect-square overflow-hidden bg-[#F8F9FA] rounded-3xl flex items-center justify-center p-8 border border-gray-100">
                            <img
                                src={worldMapImg}
                                alt="Global reach"
                                className="w-full h-auto object-contain opacity-70 mix-blend-multiply"
                            />
                            {/* Abstract connection nodes */}
                            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#E50914] rounded-full shadow-[0_0_0_6px_rgba(229,9,20,0.2)]"></div>
                            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#2E7D32] rounded-full shadow-[0_0_0_8px_rgba(46,125,50,0.2)]"></div>
                            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#E50914] rounded-full shadow-[0_0_0_6px_rgba(229,9,20,0.2)]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternating Blocks & Stats Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-24">
                        {/* Image Block 1 */}
                        <div className="h-[400px] overflow-hidden group">
                           <img
                                src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                                alt="Volunteers working"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                           />
                        </div>
                        {/* Content Block 1 */}
                        <div className="bg-[#EB010C] text-white p-12 md:p-16 flex flex-col justify-center">
                            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                                'UPAM is committed to accountability and responsible management of all resources entrusted to the movement.'
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-3 gap-12 text-center mb-32 border-b border-gray-100 pb-24">
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

                    {/* Information Sections */}
                    <div className="space-y-32">
                        {/* Section 1 */}
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="h-[400px] overflow-hidden rounded-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                                    alt="Group of inspired youths"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-6">
                                <h3 className="text-3xl font-bold text-gray-900 leading-snug">Support Pan-African Growth & Youth Empowerment</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    A core focus of UPAM is empowering young Africans with leadership capacity, digital skills, and structured engagement opportunities.
                                </p>
                                <p className="text-gray-600 leading-relaxed">Through initiatives including the UPAM Academy and other programs, we:</p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3"><span className="text-[#2E7D32] font-semibold">1.</span> Provide access to structured training.</li>
                                    <li className="flex items-start gap-3"><span className="text-[#2E7D32] font-semibold">2.</span> Create internship pathways.</li>
                                    <li className="flex items-start gap-3"><span className="text-[#2E7D32] font-semibold">3.</span> Develop future leaders.</li>
                                    <li className="flex items-start gap-3"><span className="text-[#2E7D32] font-semibold">4.</span> Encourage continental collaboration.</li>
                                </ul>
                                <p className="text-gray-600 leading-relaxed mt-2 text-lg">
                                    Your donation supports the broader mission of empowering Africans to build Africa.
                                </p>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="flex flex-col gap-6 order-2 md:order-1">
                                <h3 className="text-3xl font-bold text-gray-900 leading-snug">A Message from Leadership</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    UPAM is built on the belief that Africa's progress requires organized structure, committed leadership, and collective responsibility. We are not just running programs — we are building systems. Your support strengthens our ability to operate efficiently, expand strategically, and serve responsibly. We invite you to stand with the movement as we continue building a united and empowered Africa.
                                </p>
                            </div>
                            <div className="h-[400px] overflow-hidden rounded-sm order-1 md:order-2 bg-gray-100 flex items-center justify-center p-8">
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
            <div className="bg-[#F8F9FA] py-24 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">
                            Welcome to our FAQ section! Here, you'll find answers to common questions about donating. If you need further assistance, feel free to send us an email.
                        </p>
                    </div>
                    <FAQ />
                </div>
            </div>

            {/* Be Part of the Movement CTA Footer */}
            <section className="bg-[#003B2A] relative overflow-hidden py-24 lg:py-32">
                <div className="absolute right-0 top-0 h-full w-1/2 opacity-30 mix-blend-overlay">
                     <img
                         src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                         alt="Smiling group"
                         className="w-full h-full object-cover"
                     />
                </div>
                
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Be Part of the Movement</h2>
                        <p className="text-white/80 text-lg mb-10 leading-relaxed font-light">
                            Africa's transformation requires collective responsibility.<br />
                            Your contribution today strengthens structure, empowers people, and advances the Pan-African vision.<br />
                            <span className="text-white font-semibold">Stand with UPAM.</span>
                        </p>
                        
                        <Link 
                            to="/donation/funds"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-[#003B2A] transition-colors rounded-sm"
                        >
                            Donate Funds <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donation;
