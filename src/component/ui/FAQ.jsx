
import mapImg from '/world_map.png';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react'

const FAQ = () => {
    const [openFaq, setOpenFaq] = React.useState(null);

    const faqs = [
        {
            q: "Can I donate from outside Nigeria?",
            a: "Yes. UPAM welcomes support from Africans in the diaspora and global partners aligned with our mission."
        },
        {
            q: "Can I donate anonymously?",
            a: "Yes. Anonymous contributions are accepted."
        },
        {
            q: "How will I know my donation was received?",
            a: "A confirmation or receipt will be issued upon successful processing."
        },
        {
            q: "Can I direct my donation to a specific initiative?",
            a: "Where applicable, you may indicate a preferred area of support."
        },
    ];
    return (
        < section className="text-left py-10 grid md:grid-cols-2 md:gap-20 items-center" >
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
                                <div className="mt-3 text-[14px] text-[#4A4A4A] leading-relaxed">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Map Image for Desktop */}
            <div className="hidden lg:block relative w-full aspect-square md:aspect-auto overflow-hidden">
                <img
                    src={mapImg}
                    alt="Operations Map"
                    className="w-full h-auto object-contain opacity-80"
                />
            </div>
        </section >
    )
}

export default FAQ