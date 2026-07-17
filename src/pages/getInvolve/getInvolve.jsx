import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Handshake, Heart, CheckCircle2, GraduationCap, Briefcase, Shield, Coins, Network } from 'lucide-react';
import becomeMemberImg from '../../assets/become_member.png';
import volunteerImg from '../../assets/volunteer.png';
import partnerImg from '../../assets/partner.png';
import benefitsImg from '../../assets/benefits.png';
import FAQ from '../../component/ui/FAQ';
import ScrollReveal from '../../component/ScrollReveal';

const benefits = [
  { icon: GraduationCap, label: "Education & Scholarships", desc: "Access to sponsored education tracks and UPAM Academy programs." },
  { icon: Briefcase, label: "Business & Entrepreneurship", desc: "Support networks for African-led ventures and startups." },
  { icon: Heart, label: "Life-Care & Wellness", desc: "Wellness programs and life-care support for members and families." },
  // { icon: Coins, label: "Pension & Financial Security", desc: "Long-term financial planning and pension access for members." },
  { icon: Network, label: "Professional Networking", desc: "Connect with leaders, innovators, and changemakers across Africa." },
];

const GetInvolve = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 overflow-x-hidden">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#FAFAFC] to-[#F3F4F6] pt-32 pb-20 px-4 md:px-8 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(235,1,12,0.03),transparent_50%)] pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#EB010C]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-6">
              <Users size={13} />
              Join the Movement
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06] text-slate-900 mb-4">
              Together, We<br />Make Change Happen.
            </h1>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed">
              From membership to volunteering and partnerships, there are many ways to contribute to the Pan-African movement. Choose your path below.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative w-full aspect-video overflow-hidden">
              <img
                src={becomeMemberImg}
                alt="Get Involved with UPAM"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Ways to Get Involved */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-5 mx-auto">
              How to Join
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Three Paths to Impact
            </h2>
          </div>
        </ScrollReveal>

        {/* Become a Member */}
        <div className="grid lg:grid-cols-2 gap-0 border border-slate-100 mb-0">
          <ScrollReveal direction="right">
            <div className="relative overflow-hidden h-full min-h-[320px]">
              <img
                src={becomeMemberImg}
                alt="Become a Member"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="p-10 md:p-14 flex flex-col justify-center bg-white h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-5">
                <Users size={12} />
                Membership
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                Become a Member
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Join a growing Pan-African movement committed to unity, development, and collective progress.
                As a member, you become part of a network shaping conversations, supporting initiatives,
                and driving change across Africa and the diaspora.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#EB010C] text-white text-xs font-black uppercase tracking-widest hover:bg-[#c9000a] transition-colors w-fit"
              >
                Join Now
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Donate */}
        <div className="grid lg:grid-cols-2 gap-0 border border-slate-100 border-t-0">
          <ScrollReveal direction="right">
            <div className="p-10 md:p-14 flex flex-col justify-center bg-[#FAFAFC] h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-5">
                <Heart size={12} />
                Donate
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                Donate to UPAM
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Fuel lasting change with a one-time gift, or sustain our mission month after month. Your donations directly fund UPAM's projects, events, and community initiatives, driving real impact where it is needed most.
              </p>
              <Link
                to="/donation"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-slate-900 text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-[#003115] hover:text-white transition-colors w-fit"
              >
                Donate Now
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden h-full min-h-[320px]">
              <img
                src={volunteerImg}
                alt="Donate to Us"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Partner */}
        <div className="grid lg:grid-cols-2 gap-0 border border-slate-100 border-t-0">
          <ScrollReveal direction="right">
            <div className="relative overflow-hidden h-full min-h-[320px]">
              <img
                src={partnerImg}
                alt="Partner With UPAM"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="p-10 md:p-14 flex flex-col justify-center bg-white h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-5">
                <Handshake size={12} />
                Partnership
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                Partner With UPAM
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Collaborate with us to create sustainable growth and impactful solutions.
                We partner with organizations, governments, and individuals to drive
                socio-economic transformation across the continent.
              </p>
              <Link
                to="/partnership"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#EB010C] text-white text-xs font-black uppercase tracking-widest hover:bg-[#c9000a] transition-colors w-fit"
              >
                Partner with Us
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white border-y border-slate-100 py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative overflow-hidden">
              <img
                src={benefitsImg}
                alt="Benefits of UPAM Membership"
                className="w-full h-full max-h-[480px] object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-6">
                Member Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-10">
                What You Gain as a Member
              </h2>
              <div className="space-y-6">
                {benefits.map(({ icon: Icon, label, desc }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-2 bg-[#EB010C]/10 text-[#EB010C] flex-shrink-0 mt-0.5">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">{label}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/membership-policy"
                className="inline-flex items-center gap-2 mt-10 px-6 py-3.5 border-2 border-slate-900 text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-[#003115] hover:text-white transition-colors"
              >
                View Membership Policy
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <FAQ />
      </section>

      {/* CTA Banner */}
      <section className="bg-[#003115] py-20 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="headerWhite text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
              Ready to be part of something greater?
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Every member, volunteer, and partner brings us one step closer to a truly united Africa. Take the first step today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#EB010C] hover:bg-[#c9000a] text-white font-black text-xs uppercase tracking-widest transition-colors"
              >
                Join Now
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Donate
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default GetInvolve;
