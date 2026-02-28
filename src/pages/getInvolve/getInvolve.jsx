import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import becomeMemberImg from '../../assets/become_member.png';
import volunteerImg from '../../assets/volunteer.png';
import partnerImg from '../../assets/partner.png';
import benefitsImg from '../../assets/benefits.png';
import FAQ from '../../component/ui/FAQ';

const GetInvolve = () => {

  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen text-black">
      {/* Container: Mobile fixed width, Desktop fluid container */}
      <div className="px-4 max-w-[393px] md:max-w-none md:container md:mx-auto md:px-8 pb-20">

        {/* Top Section Layout: MD Grid */}
        <div className="md:grid md:grid-cols-2 md:gap-x-20 md:items-start mb-12">
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
              <Link to="/register" className="flex items-center gap-1 font-['Lato'] font-normal text-[16px] leading-[169%] tracking-[0.04em] group transition-colors">
                Join Now <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
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
                <Link to="/volunteer" className="flex items-center gap-1 font-['Lato'] font-normal text-[16px] leading-[169%] tracking-[0.04em] group transition-colors">
                  Volunteer Now <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
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
                <Link to="/partnership" className="flex items-center gap-1 font-['Lato'] font-normal text-[16px] leading-[169%] tracking-[0.04em] group transition-colors">
                  Partner with us <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
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

          <FAQ />

        </div>
      </div>
    </div>
  );
};

export default GetInvolve;
