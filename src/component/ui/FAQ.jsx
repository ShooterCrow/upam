
import mapImg from '/world_map.png';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react'

const FAQ = () => {
    const [openFaq, setOpenFaq] = React.useState(null);

    const faqs = [
        {
            q: "What is UPAM (United Pan-Africanist Movement)?",
            a: "UPAM is a Pan-African organization focused on unity, empowerment, leadership development, and sustainable progress across Africa and the diaspora."
        },
        {
            q: "Where does UPAM operate?",
            a: "UPAM operates a structured leadership system with a presence in countries including Kenya, Tanzania, Namibia, Cameroon, Nigeria, and Malawi."
        },
        {
            q: "Who can become a member of UPAM?",
            a: "Membership is open to various categories: UPAM Members, UPAM Executive, Students, and the Diaspora. We recognize all participants committed to our mission."
        },
        {
            q: "How can I join or get involved with UPAM?",
            a: "You can join by clicking 'Join Now' or 'Volunteer Now' buttons on this page to start your application process."
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
            <div className="block relative w-full aspect-square md:aspect-auto overflow-hidden">
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