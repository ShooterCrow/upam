import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import becomeMemberImg from '../../assets/become_member.png';
import volunteerImg from '../../assets/volunteer.png';
import partnerImg from '../../assets/partner.png';
import benefitsImg from '../../assets/benefits.png';
import mapImg from '../../assets/world_map.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

const GetInvolve = () => {
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
    <div className="max-w-7xl mx-auto bg-white min-h-screen font-['Inter',_sans-serif] text-black">
      {/* Container: Mobile fixed width, Desktop fluid container */}
      <div className="px-4 max-w-[393px] md:max-w-none md:container md:mx-auto md:px-8 pb-20">

        {/* Top Section Layout: MD Grid */}
        <div className="md:grid md:grid-cols-2 md:gap-x-20 md:items-start pt-16 md:pt-24 mb-12">
          {/* Intro Section - Left on Desktop */}
          <section className="text-center md:text-left">
            <p className="font-['Lato'] font-normal text-[14px] leading-[139%] tracking-[0.02em] uppercase mb-4">
              Get Involved
            </p>
            <h1 className="font-['Lato'] font-semibold text-[24px] leading-[133%] tracking-[0.02em] mb-4 px-2 md:px-0 md:text-[40px] md:leading-[1.2]">
              Together<br />
              We Make Change Happen
            </h1>
          </section>

          {/* Become a Member Text Content - Right on Desktop */}
          <section className="text-center md:text-left mt-8 md:mt-0">
            <h2 className="font-['Lato'] font-semibold text-[24px] leading-[139%] tracking-[0.02em] mb-4">Become a Member</h2>
            <p className="font-['Lato'] font-normal text-[16px] leading-[169%] tracking-[0.04em] text-[#4A4A4A] mb-6">
              Join a growing Pan-African movement committed to unity, development, and collective progress.
              As a member, you become part of a network shaping conversations, supporting initiatives,
              and driving change across Africa and the diaspora.
            </p>
            <div className="flex justify-end pr-2 md:justify-start">
              <a href="#" className="flex items-center gap-1 font-['Lato'] font-normal text-[16px] leading-[169%] tracking-[0.04em] group transition-colors">
                Join Now <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </section>
        </div>

        {/* Member Image - Full Width Below Top Section */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] mb-16 overflow-hidden rounded-sm">
          <img
            src={becomeMemberImg}
            alt="Become a Member"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sections Wrapper */}
        <div className="flex flex-col gap-[70px] md:gap-[120px]">

          {/* Volunteer With Us Section */}
          <section className="text-left grid md:grid-cols-2 md:gap-20 md:items-center">
            {/* Mobile: Text then Image. Desktop: Text Left, Image Right */}
            <div className="order-1 md:order-1">
              <h2 className="font-['Lato'] font-semibold text-[24px] leading-[139%] tracking-[0.02em] mb-4">Volunteer With Us</h2>
              <p className="font-['Lato'] font-normal text-[16px] leading-[169%] tracking-[0.04em] text-[#4A4A4A] mb-6">
                Lend your time, skills, and passion to causes that matter. Volunteers support UPAM's
                projects, events, and community initiatives while gaining meaningful experience and
                contributing to real impact.
              </p>
              <div className="flex justify-end pr-2 md:justify-start">
                <a href="#" className="flex items-center gap-1 font-['Lato'] font-normal text-[16px] leading-[169%] tracking-[0.04em] group transition-colors">
                  Volunteer Now <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative w-full mt-4 md:mt-0 overflow-hidden rounded-sm order-2 md:order-2">
              <img
                src={volunteerImg}
                alt="Volunteer With Us"
                className="w-full max-h-[300px] object-cover"
              />
            </div>
          </section>

          {/* Partner With UPAM Section */}
          <section className="text-center md:text-left grid md:grid-cols-2 md:gap-20 md:items-center">
            {/* Mobile: Text then Image. Desktop: Image Left, Text Right */}
            <div className="relative w-full mb-4 md:mb-0 overflow-hidden rounded-sm order-2 md:order-1">
              <img
                src={partnerImg}
                alt="Partner With UPAM"
                className="w-full max-h-[300px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2 md:pl-10">
              <h2 className="font-['Lato'] font-semibold text-[24px] leading-[139%] tracking-[0.02em] mb-4">Partner With UPAM</h2>
              <p className="font-['Lato'] font-normal text-[16px] leading-[169%] tracking-[0.04em] text-[#4A4A4A] mb-6">
                Collaborate with us to create sustainable growth and impactful solutions.
                We partner with organizations, governments, and individuals to drive
                socio-economic transformation across the continent.
              </p>
              <div className="flex justify-end pr-2 md:justify-start">
                <a href="#" className="flex items-center gap-1 font-['Lato'] font-normal text-[16px] leading-[169%] tracking-[0.04em] group transition-colors">
                  Partner with us <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="text-left grid md:grid-cols-2 md:gap-20 md:items-center">
            {/* Mobile: Image then Content. Desktop: Text Left, Image Right */}
            <div className="order-2 md:order-1">
              <h3 className="text-[20px] font-bold mb-4">Some benefits of becoming a UPAM member</h3>
              <ul className="space-y-3">
                {[
                  "Education & Scholarships",
                  "Business & Entrepreneurship Support",
                  "Life-Care & Wellness Program",
                  "Pension & Financial Security",
                  "Professional & Networking Services"
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-[#4A4A4A]">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full mb-6 md:mb-0 overflow-hidden rounded-sm order-1 md:order-2">
              <img
                src={benefitsImg}
                alt="Benefits of membership"
                className="w-full max-h-[300px] object-cover"
              />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="text-left py-10 grid md:grid-cols-2 md:gap-20 md:items-start">
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
            <div className="block relative w-full aspect-square md:aspect-auto h-full overflow-hidden">
              <img
                src={mapImg}
                alt="Operations Map"
                className="w-full h-auto object-contain opacity-80"
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default GetInvolve;
