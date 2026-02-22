import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

const EVENTS_FAQS = [
  {
    q: 'How do I create an event?',
    a: 'To create an event, click on "Create Event" from the navigation menu. Fill in your event details such as title, date, location (physical or virtual), description, and ticket information. Once submitted, your event will be reviewed and published on the platform.',
  },
  {
    q: 'Can anyone list an event?',
    a: 'Yes. UPAM Events is open to individuals, organizations, and communities who want to promote Pan-African events. Your event will be reviewed to ensure it aligns with our community guidelines before publication.',
  },
  {
    q: 'Are virtual events supported?',
    a: 'Yes. You can create both physical and virtual events. For virtual events, you can add a link to your preferred video or meeting platform.',
  },
  {
    q: 'How do attendees receive tickets?',
    a: 'After purchase, attendees receive their tickets by email. They can also access them from their account on the platform.',
  },
];

const MAP_COUNTRIES = [
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'Namibia', flag: '🇳🇦' },
  { name: 'Cameroon', flag: '🇨🇲' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'Tanzania', flag: '🇹🇿' },
  { name: 'Malawi', flag: '🇲🇼' },
];

const EventsHelpSupport = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    request: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    console.log('Support request:', formData);
    setFormData({ fullName: '', email: '', request: '' });
  };

  const inputClass =
    'w-full px-4 py-3 bg-[#F4F4F4] border border-gray-200 rounded-lg focus:border-[#EB010C] focus:bg-white focus:outline-none transition-all';
  const labelClass = 'block text-sm font-semibold text-gray-800 mb-2';

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#EB010C] hover:text-[#EB010C]/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Support & Help
        </h1>

        {/* FAQ + Map row */}
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-14">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Welcome to our FAQ section! Here, you'll find answers to common questions about UPAM Events. If you need further assistance, feel free to send us an email.
            </p>
            <div className="space-y-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
              {EVENTS_FAQS.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center gap-4 text-left px-4 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <span
                      className={`text-sm font-semibold ${
                        openFaq === idx ? 'text-[#EB010C]' : 'text-gray-900'
                      }`}
                    >
                      {faq.q}
                    </span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 shrink-0 text-[#EB010C]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 shrink-0 text-gray-400" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 pt-0">
                      <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden lg:block bg-white rounded-lg border border-gray-200 p-6 min-h-[320px]">
            <img
              src="/world_map.png"
              alt=""
              className="w-full h-auto object-contain opacity-80 max-h-[280px]"
            />
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {MAP_COUNTRIES.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg shadow border border-gray-100 text-sm font-medium text-gray-800"
                >
                  <span>{c.flag}</span>
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Support Request Form + Illustration row */}
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Support Request Form / Report an Issue
            </h2>
            <form onSubmit={handleSubmitRequest} className="space-y-5">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John..."
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="John555@gmail.com"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="request" className={labelClass}>
                  Request / Report Issue
                </label>
                <textarea
                  id="request"
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Issue...."
                  className={`${inputClass} resize-none`}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#EB010C] text-white py-3 font-semibold rounded-lg hover:bg-[#EB010C]/90 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
          <div className="hidden lg:block rounded-lg overflow-hidden bg-white border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="Support team"
              className="w-full h-[320px] object-cover object-center"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventsHelpSupport;
