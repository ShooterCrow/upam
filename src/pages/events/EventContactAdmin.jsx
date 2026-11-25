import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const EventContactAdmin = () => (
  <section className="mt-12 border-t border-slate-200 pt-8" aria-labelledby="event-contact-heading">
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#EB010C]">
        Need help?
      </p>
      <h2 id="event-contact-heading" className="mt-2 text-2xl font-black text-slate-900">
        Contact the event admin
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Contact our team with questions about this event, registration, or attendance.
      </p>
    </div>
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
      <a
        href="https://wa.me/264812101200"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 transition-colors hover:border-[#003115]"
      >
        <MessageCircle className="h-5 w-5 text-[#003115]" />
        WhatsApp
      </a>
      <a
        href="tel:+264812101200"
        className="flex items-center gap-3 border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 transition-colors hover:border-[#003115]"
      >
        <Phone className="h-5 w-5 text-[#003115]" />
        +264 81 210 1200
      </a>
      <a
        href="mailto:info@unitedpam.org"
        className="flex items-center gap-3 border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 transition-colors hover:border-[#003115]"
      >
        <Mail className="h-5 w-5 text-[#003115]" />
        info@unitedpam.org
      </a>
    </div>
  </section>
);

export default EventContactAdmin;
