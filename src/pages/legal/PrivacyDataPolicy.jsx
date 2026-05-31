import React from 'react';
import { Eye, Lock, Database, UserCheck } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const PrivacyDataPolicy = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 border-t border-slate-100">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-slate-50 border-b border-slate-200">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-[#003115] text-white text-[10px] font-black px-3 py-1 uppercase tracking-[0.2em] mb-6">
              Data Governance
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">
              Privacy & <span className="text-[#EB010C]">Data Policy</span>
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
                  <Database size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                <p>To facilitate UPAM membership and organizational operations, we collect several categories of private data:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Identity Data:</strong> Full name, date of birth, gender, and government-issued identification documents.</li>
                  <li><strong>Contact Data:</strong> Residential address, phone numbers, and email address.</li>
                  <li><strong>Residency Data:</strong> Proof of residency (Tier A/Tier B classification).</li>
                  <li><strong>Emergency Contacts:</strong> Names and contact details for next-of-kin and emergency representatives.</li>
                  <li><strong>Administrative Data:</strong> Membership ID, payment history for dues, and department service logs.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#003115] flex items-center justify-center text-white">
                  <Eye size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">How We Share Information</h2>
              </div>
              <div className="space-y-4 text-slate-600 font-medium">
                <p>
                  Your data is used primarily for internal governance and member verification.
                </p>
                <div className="p-6 bg-slate-50 border-r-4 border-[#003115]">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#003115] mb-2">Member Search Transparency</h4>
                  <p className="text-sm">
                    Public visitors (guests) may see masked search results (truncated names, hidden IDs). Full profiles, including location and contact points, are only accessible to verified UPAM members and leadership.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#003115] flex items-center justify-center text-white">
                  <Lock size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Security Standards</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                We implement industry-standard encryption and security protocols (including JWT-based authentication) to protect your sensitive data. Personal identity documents are handled with extreme confidentiality and are only used for the verification of member status.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PrivacyDataPolicy;
