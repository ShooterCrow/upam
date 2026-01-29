import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, ChevronDown, ChevronUp, Facebook, Twitter, Instagram } from 'lucide-react';
import worldMap from '../../assets/world_map.png';
import benefitsImg from '../../assets/benefits.png';

const ContactUs = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const faqs = [
        {
            q: "What is UPAM (United Pan-Africanist Movement)?",
            a: "UPAM is a Pan-African organization focused on unity, empowerment, leadership development, and sustainable progress across Africa and the diaspora."
        },
        {
            q: "Who can become a member of UPAM?",
            a: "Membership is open to various categories: UPAM Members, UPAM Executive, Students, and the Diaspora. We recognize all participants committed to our mission."
        },
        {
            q: "How can I join or get involved with UPAM?",
            a: "You can join by clicking 'Join Now' or 'Volunteer Now' buttons on our Get Involved page to start your application process."
        },
        {
            q: "Where does UPAM operate?",
            a: "UPAM operates a structured leadership system with a presence in countries including Kenya, Tanzania, Namibia, Cameroon, Nigeria, and Malawi."
        },
        {
            q: "What kind of programs and initiatives does UPAM run?",
            a: "UPAM runs various programs including leadership development, community empowerment, and sustainable development projects."
        },
        {
            q: "How is UPAM funded?",
            a: "UPAM is funded through membership contributions, partnerships, and donations from supporters of the Pan-African movement."
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white min-h-screen font-['Lato',_sans-serif] text-black">
            {/* Hero & Form Section */}
            <div className="max-w-7xl mx-auto container mx-auto px-4 md:px-8 pb-16 md:pb-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Heading and Form */}
                    <div className="max-w-xl">
                        <h1 className="text-[32px] md:text-[48px] font-semibold leading-[1.2] mb-12">
                            Get in touch with us. We're here to assist you.
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-100 focus:outline-none focus:border-red-600 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-100 focus:outline-none focus:border-red-600 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Phone Number (optional)</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-100 focus:outline-none focus:border-red-600 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here"
                                    rows="5"
                                    className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-100 focus:outline-none focus:border-red-600 transition-colors resize-none"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-red-600 text-white px-10 py-4 uppercase font-bold tracking-wider hover:bg-red-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right: Map Image */}
                    <div className="relative">
                        <img src={worldMap} alt="World Map" className="w-full h-auto opacity-80" />
                        {/* Markers could be added here overlaying the map if desired */}
                    </div>
                </div>
            </div>

            {/* Contact Details Section */}
            <div className="bg-[#F9F9F9] py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-[28px] md:text-[36px] font-semibold mb-12">We are always happy to assist you</h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Office Locations */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="flex items-center gap-2 font-bold mb-4">
                                    <MapPin size={20} className="text-red-600" />
                                    Operation Office
                                </h3>
                                <p className="text-[#4A4A4A] leading-relaxed">
                                    14141 E 102nd Ave, Commerce City<br />
                                    Colorado 80022 United States
                                </p>
                            </div>
                            <div>
                                <h3 className="flex items-center gap-2 font-bold mb-4">
                                    <MapPin size={20} className="text-red-600" />
                                    Global Head Quarter
                                </h3>
                                <p className="text-[#4A4A4A] leading-relaxed">
                                    P.O. Box 21336,<br />
                                    Windhoek Namibia
                                </p>
                            </div>
                        </div>

                        {/* Contact Numbers & Email */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="flex items-center gap-2 font-bold mb-4">
                                    <Phone size={20} className="text-red-600" />
                                    Phone Number
                                </h3>
                                <p className="text-[#4A4A4A]">Global Operation: +1-720-717-9288</p>
                                <p className="text-[#4A4A4A]">Global Head Quarter: +264-81-210-1200</p>
                            </div>
                            <div>
                                <h3 className="flex items-center gap-2 font-bold mb-4">
                                    <Mail size={20} className="text-red-600" />
                                    Email
                                </h3>
                                <p className="text-[#4A4A4A]">info@unitedpam.org</p>
                            </div>
                        </div>

                        {/* Social Media links */}
                        <div>
                            <h3 className="font-bold mb-6">Follow our updates</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-white border border-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="p-3 bg-white border border-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="p-3 bg-white border border-gray-100 rounded-full hover:bg-red-600 hover:text-white transition-all">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-7xl mx-auto container mx-auto px-4 md:px-8 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-[32px] md:text-[40px] font-bold mb-6">Frequently Asked Questions</h2>
                        <p className="text-[#666666] leading-relaxed mb-8 max-w-md">
                            Welcome to our FAQ section! Here, you'll find answers to common questions about joining with us.
                            If you need further assistance, feel free to reach out to our customer support team.
                        </p>
                    </div>

                    <div className="space-y-4 border-t border-gray-100 pt-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-100 py-4">
                                <button
                                    className={`w-full flex justify-between items-center text-left py-2 transition-colors ${openFaq === idx ? 'text-red-600' : 'text-black'}`}
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                >
                                    <span className="text-[16px] font-semibold">{faq.q}</span>
                                    {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openFaq === idx && (
                                    <div className="mt-4 text-[#4A4A4A] leading-relaxed text-[15px]">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="mt-16">
                {/* Full-width top image */}
                <img
                    src={benefitsImg}
                    alt="Newsletter Benefits"
                    className="w-full h-auto object-cover max-h-[400px]"
                />

                {/* Content Block */}
                <div className="bg-red-600 text-white py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            {/* Text Content */}
                            <div>
                                <h2 className="text-[32px] md:text-[40px] font-bold mb-4">Subscribe to our Newsletter</h2>
                                <p className="text-white/90 text-lg leading-relaxed max-w-xl">
                                    Subscribe for Updates: Stay informed about the latest investor updates, financial results, and announcements by subscribing to our newsletter.
                                </p>
                            </div>

                            {/* Form */}
                            <div>
                                <form className="flex flex-col sm:flex-row gap-0 overflow-hidden rounded-sm">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="flex-1 px-6 py-4 bg-transparent border border-white text-white placeholder:text-white/60 focus:outline-none"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-white text-red-600 px-10 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors whitespace-nowrap"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
