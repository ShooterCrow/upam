import React from 'react';
import { Cookie, Key, MousePointer2 } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const Cookies = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 border-t border-slate-100">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-slate-50 border-b border-slate-200">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-[#003115] text-white text-[10px] font-black px-3 py-1 uppercase tracking-[0.2em] mb-6">
              Technology Notice
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">
              Cookie <span className="text-[#EB010C]">Policy</span>
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
                  <Cookie size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">What are Cookies?</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Cookies are small text files stored on your device to enhance your browsing experience. We use cookies and similar technologies (like Local Storage) to maintain secure sessions and analyze platform traffic.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#003115] flex items-center justify-center text-white">
                  <Key size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Essential Cookies (JWT)</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                We use essential security tokens (JWT) to manage your authentication state. These allow the platform to remember your login status across different pages and sessions. These are strictly necessary for the secure functioning of the member dashboard.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#003115] flex items-center justify-center text-white">
                  <MousePointer2 size={20} />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Managing Cookies</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                You can control or delete cookies through your browser settings. However, disabling essential cookies will prevent you from accessing the member-only areas of the UPAM platform.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
