import React from 'react';
import { Shield, FileText, Gavel, Scale } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 border-t border-slate-100">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-slate-50 border-b border-slate-200">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-[#003115] text-white text-[10px] font-black px-3 py-1 uppercase tracking-[0.2em] mb-6">
              Legal Framework
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">
              Terms of <span className="text-[#EB010C]">Service</span>
            </h1>
            <p className="text-slate-500 font-medium">Last Updated: May 2024</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-24">
        <div className="space-y-16">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#003115] flex items-center justify-center text-white">
                  <Gavel size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Agreement to Terms</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                By accessing the United Pan-Africanist Movement (UPAM) platform, you agree to be bound by these Terms of Service, all applicable laws and regulations, and the UPAM Constitution. These terms govern your membership application, platform usage, and participation in UPAM initiatives.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#003115] flex items-center justify-center text-white">
                  <Shield size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Membership & Conduct</h2>
              </div>
              <div className="space-y-4 text-slate-600 font-medium">
                <p>
                  UPAM membership is a privilege governed by Article 8 of the UPAM Constitution. Members are expected to:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Uphold the values of Pan-African unity and dignity.</li>
                  <li>Fulfill financial obligations including registration fees and annual dues.</li>
                  <li>Adhere to a zero-tolerance policy against discrimination or harassment.</li>
                  <li>Respect the Non-Disclosure requirements regarding internal strategies.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#003115] flex items-center justify-center text-white">
                  <Scale size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Platform Usage</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Our platform provides access to member directories, department assignments, and financial tracking for dues. Unauthorized use, data scraping, or attempts to circumvent member privacy protections (including masked data for guests) are strictly prohibited and may result in legal action or termination of membership.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="p-8 bg-[#EB010C]/5 border-l-4 border-[#EB010C]">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4">Contact Legal</h3>
              <p className="text-slate-600 text-sm font-medium mb-6">
                For questions regarding these terms or the UPAM Constitution, please contact our Department of Legal Affairs.
              </p>
              <a href="mailto:legal@unitedpam.org" className="text-[#EB010C] font-black uppercase text-[10px] tracking-widest hover:underline">
                legal@unitedpam.org
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
