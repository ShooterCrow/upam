import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Check,
  Calendar,
  MapPin,
  Image as ImageIcon,
  Play,
} from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

/* -------------------------------------------------------------------------- */
/*  Brand colours (applied via Tailwind arbitrary classes, matching the rest  */
/*  of the codebase): Green bg-[#003115] · Black bg-black · Red bg-[#EB010C]   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  Reusable image placeholder. Swap each <Placeholder /> for a real <img />   */
/*  once the event photography is available.                                   */
/* -------------------------------------------------------------------------- */
const Placeholder = ({ className = '', tone = 'light' }) => {
  const tones = {
    light: 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-400',
    dark: 'bg-gradient-to-br from-neutral-600 to-neutral-500 text-neutral-300',
  };
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${tones[tone]} ${className}`}
      aria-hidden="true"
    >
      <ImageIcon className="w-7 h-7 opacity-70" />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  Content data                                                              */
/* -------------------------------------------------------------------------- */
const objectives = [
  'To mobilize global African collaboration for sustainable development',
  'To attract global investment to Malawi and to the African continent',
  'To create jobs and entrepreneurship opportunities for pivotal transition in Africa',
  'To strengthen African economic independence and self-reliance',
  'To translate Pan-African ideals into measurable actions.',
];

const eventDetails = [
  { label: 'Location', value: 'PEARL Convention Centre, Lilongwe, Malawi' },
  { label: 'Dates', value: '15th and 16th May, 2026' },
  { label: 'Time', value: 'Main Conference (15th May, 2026): 8:00 - 16:20' },
  { label: 'Gala Night / Cocktail Party', value: '16th May, 2026: 16:40 - 22:30' },
  { label: 'Mode', value: 'Physical and Virtual' },
  { label: 'Registration type', value: 'Free' },
];

const agendaDays = [
  {
    label: 'Day 1',
    title: 'Arrival & Accreditation',
    text: 'This day marks the official arrival of delegates and the beginning of the conference experience. Participants will be received, registered, and fully accredited while settling into their accommodations in preparation for the days ahead.',
  },
  {
    label: 'Day 2',
    title: 'Visitation',
    text: 'Day two focuses on strategic visits and engagements with selected delegates, traditional leaders, and key officials, fostering relationships and strengthening collaboration at high levels.',
  },
  {
    label: 'Day 3',
    title: 'Collaboration',
    text: 'This day is dedicated to partnership and shared growth, featuring interactive workshops with partners aimed at exchanging ideas, building capacity, and aligning on impactful initiatives.',
  },
  {
    label: 'Day 4',
    title: 'Conference Day',
    text: "The core of the event, this day brings together thought leaders, innovators, and stakeholders for a comprehensive conference experience filled with keynote sessions, panel discussions, workshops, exhibitions, and forward-looking dialogues shaping Africa's future.",
  },
  {
    label: 'Day 5',
    title: 'Gala Night / Cocktail Program',
    text: "An evening of elegance and celebration, the gala night provides a relaxed atmosphere for networking, entertainment, recognition, and reflection on the conference's impact and achievements.",
  },
  {
    label: 'Day 6',
    title: 'Departure',
    text: 'The final day offers an opportunity for brief evaluation and reflection before delegates depart, marking the close of a successful and impactful conference.',
  },
];

const guests = [
  { name: 'H.E Enock Chihana', role: 'Vice President' },
  { name: 'Dr. Michael Usi', role: 'Former Vice President' },
  { name: 'Hon. Vera Kamtukule', role: 'Minister of Tourism' },
  { name: 'Hon. Victoria Kingstone', role: 'PM at the Pan African Parliament' },
  { name: 'Dr. Napoleon Dzombe', role: 'Businessman' },
  { name: 'Prophet Shephard Bushiri', role: 'Founder of Jesus Nation Church' },
  { name: 'Mr. Bone Kalindo', role: 'Human Rights Activist' },
  { name: 'Mr. Robert Mwaalalambo', role: 'Human Rights Activist' },
  {
    name: 'Ms. Debora Matope',
    role: 'Program Manager of Guidance Counseling and Youth Development for Africans',
  },
  { name: 'Mr. Kelvin Kamchacha', role: 'Businessman' },
  { name: 'Miti Chikakula', role: 'COMESA Federation of Women in Business' },
  { name: 'Mary Banda', role: 'COMESA Federation of Women in Business' },
];

const travelItems = [
  {
    num: '01',
    title: 'Nearest Airport',
    heading: 'Nearest Airport',
    text: 'Kamuzu International Airport: The primary international gateway to Malawi, located in Lilongwe, the capital city.',
  },
  {
    num: '02',
    title: 'Visa Information',
    heading: 'Visa Information',
    text: 'Visa requirements and application guidance for international delegates will be published here soon. [Placeholder content — to be provided.]',
  },
  {
    num: '03',
    title: 'Transport Guidance',
    heading: 'Transport Guidance',
    text: 'Airport transfers, local transport options, and shuttle arrangements for delegates will be detailed here soon. [Placeholder content — to be provided.]',
  },
];

const outcomes = [
  'Development of actionable policy recommendations',
  'Strengthened cross-country partnerships and collaborations',
  'Identification of innovative solutions to key African challenges',
  'Creation of implementation frameworks for discussed ideas',
  'Increased visibility and positioning of UPAM as a continental change driver',
];

const networking = [
  'Engage with leaders, professionals, and young change makers across Africa',
  'Connect with organizations, investors, and development stakeholders',
  'Exchange ideas in structured and informal networking sessions',
  'Join a growing network of individuals committed to Pan-African development',
];

const volunteerBenefits = [
  'Hands-on experience in event management and coordination',
  'Work closely with leaders and organizers',
  'Build your professional network and leadership skills',
  'Play a direct role in driving continental impact',
];

/* Small check-list row used across light sections */
const CheckItem = ({ children, dark = false }) => (
  <li className="flex items-start gap-3">
    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${dark ? 'text-white' : 'text-[#003115]'}`} />
    <span className={`text-sm leading-relaxed ${dark ? 'text-white/80' : 'text-gray-600'}`}>{children}</span>
  </li>
);

/* Circular arrow button used as a decorative accent in several frames */
const CircleArrow = ({ className = '', dark = false }) => (
  <span
    className={`inline-flex items-center justify-center w-12 h-12 rounded-full border ${
      dark ? 'border-white/40 text-white' : 'border-gray-300 text-gray-700'
    } ${className}`}
  >
    <ArrowUpRight className="w-5 h-5" />
  </span>
);

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */
const MalawiSummit = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTravel, setActiveTravel] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);
  const totalMedia = 10;

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    country: '',
    phone: '',
    organization: '',
    role: '',
    attendeeType: '',
    reasons: '',
    accommodation: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to a real submission endpoint / API.
    setSubmitted(true);
  };

  const day = agendaDays[activeDay];
  const travel = travelItems[activeTravel];

  const inputClass =
    'w-full bg-gray-100 border border-gray-300 rounded px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#EB010C] focus:ring-1 focus:ring-[#EB010C] transition-colors';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-2';

  return (
    <div className="bg-white overflow-x-hidden">
      {/* ================= FRAME 1 — HERO ================= */}
      <section className="bg-[#003115] text-white">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to events
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <ScrollReveal direction="up" className="max-w-3xl">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white"
               
              >
                Global African Renaissance Summit 2026 (Malawi)
              </h1>
              <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl">
                <span className="font-semibold text-white">Theme: </span>
                From Vision to Action: Building Africa&apos;s Prosperous Future Together
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white/10 border border-white/15 px-6 py-5 space-y-3 lg:min-w-[280px]">
                <p className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 text-[#EB010C]" />
                  <span className="font-semibold">Location:</span> Lilongwe, Malawi
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 shrink-0 text-[#EB010C]" />
                  <span className="font-semibold">Date:</span> 12th - 17th May, 2026
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Thumbnail strip — seamless infinite marquee (set duplicated for the loop) */}
          <div className="relative left-1/2 -ml-[50vw] w-screen overflow-hidden mt-12">
            <div className="flex animate-scroll-slow">
              {Array.from({ length: 20 }).map((_, i) => (
                <Placeholder
                  key={i}
                  tone="light"
                  className="flex-shrink-0 w-40 sm:w-48 lg:w-56 aspect-[3/4] mx-2"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FRAME 2 — ABOUT ================= */}
      <section className="bg-black text-white">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="flex items-start justify-between gap-6">
            <ScrollReveal direction="up" className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                About the Conference (Malawi)
              </h2>
              <p className="text-sm lg:text-base text-white/70 leading-relaxed">
                The Global African Renaissance Summit is a platform where policy, investment,
                culture, and people converge to build a prosperous and united Africa expanding
                across the continent. Africa has long been discussed, it is time for Africa to
                define itself (From Vision to Action). The Summit will ignite a new generation of
                Pan-African leadership and economic collaboration.
              </p>
            </ScrollReveal>
            
          </div>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-0">
              {Array.from({ length: 3 }).map((_, i) => (
                <Placeholder key={i} tone="dark" className="aspect-[4/3]" />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= FRAME 3 — OBJECTIVES ================= */}
      <section className="bg-white">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="right">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Conference Objectives
              </h2>
              <ul className="space-y-4">
                {objectives.map((o) => (
                  <CheckItem key={o}>{o}</CheckItem>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
              <Placeholder tone="light" className="w-full aspect-[4/3]" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= FRAME 4 — EVENT DETAILS ================= */}
      {/* 50/50 split: left content aligns to the site gutter, right two-image
          frame is full-bleed to the right edge of the screen. */}
      <section className="bg-[#003115] text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left — content */}
          <div className="flex items-center px-4 sm:px-6 lg:pl-[calc(max((100vw_-_1330px)/2,0px)_+_2rem)] lg:pr-12 py-14 lg:py-20">
            <ScrollReveal direction="right" className="w-full">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-white">
                Event Details
              </h2>
              <dl className="space-y-4">
                {eventDetails.map((d) => (
                  <div key={d.label} className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="text-sm font-semibold text-white shrink-0">{d.label}:</dt>
                    <dd className="text-sm text-white/75">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>

          {/* Right — two-image frame, full-bleed to the right edge */}
          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <div className="absolute inset-0 grid grid-cols-2 gap-3 p-3 lg:p-4">
              <Placeholder tone="dark" className="w-full h-1/2 self-end" />
              <Placeholder tone="dark" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FRAME 5/6 — PROGRAMS & AGENDA (interactive) ====== */}
      <section className="bg-black text-white">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: intro + standing image */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Programs And Agenda
              </h2>
              <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-md">
                This program and agenda provide a comprehensive overview of the event, outlining the
                sequence of activities, sessions, and engagements planned for each day. Carefully
                structured to ensure a seamless flow, it highlights key moments, speakers, and
                experiences designed to foster learning, collaboration, networking, and impactful
                dialogue throughout the event.
              </p>
              <Placeholder tone="dark" className="w-full aspect-[16/10]" />
            </div>

            {/* Right: day tabs + content */}
            <div>
              <div
                role="tablist"
                aria-label="Programme days"
                className="flex items-center justify-between gap-2 border-b border-white/15 pb-4 mb-8"
              >
                {agendaDays.map((d, i) => {
                  const active = i === activeDay;
                  return (
                    <button
                      key={d.label}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveDay(i)}
                      className={`relative text-sm font-medium pb-2 transition-colors ${
                        active ? 'text-white' : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      {d.label}
                      {active && (
                        <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-white rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* key on activeDay re-triggers the reveal animation per tab */}
              <ScrollReveal key={activeDay} direction="up" duration={0.5}>
                <h3 className="text-xl font-semibold mb-3">{day.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-lg">{day.text}</p>
                <Placeholder tone="dark" className="w-full aspect-[16/9]" />
              </ScrollReveal>

              <div className="flex justify-end mt-6">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FRAME 7 — SPECIAL GUESTS ================= */}
      <section className="bg-white">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <ScrollReveal direction="up">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Special Guests
            </h2>
            <p className="text-sm text-gray-500 mb-10">
              This is a list of our prestigious and special guests of honour
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-8">
            {guests.map((g, i) => (
              <ScrollReveal key={`${g.name}-${i}`} direction="up" delay={(i % 6) * 0.05}>
                <Placeholder tone="light" className="w-full aspect-square mb-3" />
                <p className="text-sm font-semibold text-gray-900 leading-snug">{g.name}</p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">{g.role}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FRAME 8 — EVENT REGISTRATION ================= */}
      <section id="event-registration" className="bg-gray-100 scroll-mt-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-10">
            Event Registration
          </h2>

          {submitted ? (
            <div className="max-w-xl mx-auto text-center bg-white border border-gray-200 rounded-xl p-10">
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#003115]">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Registration received</h3>
              <p className="text-sm text-gray-600">
                Thank you for registering for the Global African Renaissance Summit 2026. A
                confirmation will be sent to your email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label htmlFor="fullName" className={labelClass}>Full Name</label>
                <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label htmlFor="country" className={labelClass}>Country</label>
                <input id="country" name="country" value={form.country} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone no</label>
                <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="organization" className={labelClass}>Organization <span className="text-gray-400">(Optional)</span></label>
                <input id="organization" name="organization" value={form.organization} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="role" className={labelClass}>Role / Profession</label>
                <input id="role" name="role" value={form.role} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="attendeeType" className={labelClass}>Attendee Type (Physical / Virtual)</label>
                <select id="attendeeType" name="attendeeType" value={form.attendeeType} onChange={handleChange} required className={inputClass}>
                  <option value="" disabled>Select an option</option>
                  <option value="Physical">Physical</option>
                  <option value="Virtual">Virtual</option>
                </select>
              </div>
              <div>
                <label htmlFor="reasons" className={labelClass}>Reasons for Attending</label>
                <input id="reasons" name="reasons" value={form.reasons} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="accommodation" className={labelClass}>Accommodation Needed (Yes / No)</label>
                <select id="accommodation" name="accommodation" value={form.accommodation} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="px-10 py-3 bg-[#EB010C] text-white font-medium rounded transition-opacity hover:opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ================= FRAME 9 — TRAVEL & ACCOMMODATION (interactive) === */}
      <section className="bg-[#EB010C] text-white">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: numbered selector */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-10 leading-tight">
                Travel & Accommodation Information
              </h2>
              <ul className="space-y-3">
                {travelItems.map((t, i) => {
                  const active = i === activeTravel;
                  return (
                    <li key={t.num}>
                      <button
                        onClick={() => setActiveTravel(i)}
                        aria-pressed={active}
                        className={`w-full flex items-center gap-8 text-left py-7 px-4 border-b border-white/25 transition-colors ${
                          active ? 'bg-white/10' : 'hover:bg-white/5'
                        }`}
                      >
                        <span className="text-base font-semibold w-8 shrink-0">{t.num}</span>
                        <span className="text-base font-medium">{t.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: detail panel */}
            <ScrollReveal key={activeTravel} direction="up" duration={0.5}>
              <h3 className="text-xl font-semibold mb-3">{travel.heading}</h3>
              <p className="text-sm text-white/85 leading-relaxed mb-6 max-w-md">{travel.text}</p>
              <Placeholder tone="light" className="w-full aspect-[16/10]" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= FRAME 10 — OUTCOMES + NETWORKING ================= */}
      <section className="bg-white">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          {/* Expected Outcomes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="right">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                Expected Outcomes
              </h2>
              <p className="text-sm text-gray-500 mb-8">What Will Come Out of This Conference?</p>
              <ul className="space-y-4">
                {outcomes.map((o) => (
                  <CheckItem key={o}>{o}</CheckItem>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
              <Placeholder tone="light" className="w-full aspect-[4/3]" />
            </ScrollReveal>
          </div>

          {/* Networking Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-16 lg:mt-24">
            <ScrollReveal direction="right">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                Networking Opportunities
              </h2>
              <p className="text-sm text-gray-500 mb-8">Connect, Collaborate and Grow</p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
              <ul className="space-y-4">
                {networking.map((n) => (
                  <CheckItem key={n}>{n}</CheckItem>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= FRAME 11 — MEDIA & COVERAGE (carousel) ========== */}
      <section className="bg-black text-white">
        {/* Full-bleed top image — spans the entire screen width */}
        <Placeholder tone="dark" className="w-full aspect-[21/9]" />

        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              Media & Coverage
            </h2>
            <p className="text-sm text-white/50">
              The event will be fully documented through photography and videography
            </p>
          </div>

          {/* Carousel slide */}
          <ScrollReveal key={mediaIndex} direction="scale" duration={0.5}>
            <div className="relative max-w-5xl mx-auto">
              <Placeholder tone="dark" className="w-full aspect-video" />
              <button
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 text-black fill-black ml-1" />
                </span>
              </button>
            </div>
          </ScrollReveal>

          {/* Controls */}
          <div className="flex items-center justify-between max-w-5xl mx-auto mt-8">
            <button
              aria-label="Previous"
              onClick={() => setMediaIndex((p) => (p - 1 + totalMedia) % totalMedia)}
              className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <p className="text-sm font-medium">
              {String(mediaIndex + 1).padStart(2, '0')}{' '}
              <span className="text-white/40">/ {totalMedia}</span>
            </p>
            <button
              aria-label="Next"
              onClick={() => setMediaIndex((p) => (p + 1) % totalMedia)}
              className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= FRAME 12 — VOLUNTEER ================= */}
      <section className="bg-white">
        <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="right">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                Volunteer for the Conference
              </h2>
              <p className="text-sm text-gray-500 mb-8">
                Be part of the team making this conference a success and gain:
              </p>
              <ul className="space-y-4 mb-10">
                {volunteerBenefits.map((b) => (
                  <CheckItem key={b}>{b}</CheckItem>
                ))}
              </ul>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('event-registration')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-4 text-gray-900 hover:opacity-70 transition-opacity"
              >
                <span className="text-lg font-medium">Volunteer now</span>
                <CircleArrow />
              </button>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="grid grid-cols-1 gap-5">
                <Placeholder tone="light" className="w-full aspect-[16/9]" />
                <Placeholder tone="light" className="w-full aspect-[16/9]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MalawiSummit;
