
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import WorldMapWithMarkers from './WorldMapWithMarkers';

const FAQ = () => {
    const [openFaq, setOpenFaq] = React.useState(null);

    const faqs = [
        {
            q: "What is UPAM (United Pan-African Movement)?",
            a: "UPAM is a Pan-African organization focused on unity, empowerment, leadership development, and sustainable progress across Africa and the diaspora."
        },
        {
            q: "Can I join UPAM as an individual?",
            a: "Yes, every descendant of Africa and beyond can join the movement. We welcome you to join us in building a united and prosperous Africa."
        },
        {
            q: "How can I join or get involved with UPAM?",
            a: "Visit our website to learn more about membership and partnership opportunities. We look forward to having you on board!"
        },
        {
            q: "How is UPAM funded?",
            a: "Donations are welcomed from individuals, corporate bodies, and international partners who believe in our vision for a united Africa."
        },
    ];

    return (
        <section className="text-left py-10 grid md:grid-cols-2 md:gap-20 items-center">
            <ScrollReveal direction="left">
                <div>
                    <h2 className="text-[31px] font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-[14px] text-gray-500 mb-8">
                        Welcome to our FAQ section! Here, you'll find answers to common questions about joining with us.
                        If you need further assistance, feel free to reach out to our customer support team.
                    </p>
                    <div className="space-y-4 border-t border-gray-100">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-gray-100 py-4">
                                <button
                                    className="w-full flex justify-between items-center text-left gap-4 transition-colors hover:text-gray-600"
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                >
                                    <span className="text-[15px] font-semibold">{faq.q}</span>
                                    {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openFaq === idx && (
                                    <ScrollReveal direction="up" distance={10}>
                                        <div className="mt-3 text-[14px] text-[#4A4A4A] leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </ScrollReveal>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* Map Image for Desktop */}
            <ScrollReveal direction="right">
                <div className="hidden lg:block relative w-full aspect-square md:aspect-auto overflow-hidden">
                    <WorldMapWithMarkers />
                </div>
            </ScrollReveal>
        </section>
    );
}

export default FAQ;
