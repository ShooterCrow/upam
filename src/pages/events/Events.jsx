import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Play, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  events,
  heroThumbnails,
  howItWorksSteps,
} from './eventsData';

const TAB_ALL = 'all';
const TAB_COMPLETED = 'completed';
const TAB_UPCOMING = 'upcoming';

const eventFaqs = [
  {
    q: 'How do I create an event?',
    a: 'To create an event, click on "Create Events" from the navigation menu. Fill in your event details such as title, date, location (physical or virtual), description, and ticket information. Once submitted, your event will be reviewed and published on the platform.',
  },
  {
    q: 'Can anyone list an event?',
    a: 'Yes — individuals, organizations, and communities can list events on the UPAM Events platform. All events are subject to a brief review to ensure they align with our community guidelines.',
  },
  {
    q: 'Are virtual events supported?',
    a: 'Absolutely. UPAM Events supports physical, virtual, and hybrid event formats. You can specify an online platform (Zoom, Google Meet, Microsoft Teams) when creating your event.',
  },
  {
    q: 'How do attendees receive tickets?',
    a: 'Once attendees complete the ticket registration form, confirmation details are sent to their email address. For paid events, payment is processed securely before the ticket is issued.',
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState(TAB_ALL);
  const [openFaq, setOpenFaq] = useState(null);

  const filteredEvents =
    activeTab === TAB_COMPLETED
      ? events.filter((e) => e.status === 'completed')
      : activeTab === TAB_UPCOMING
        ? events.filter((e) => e.status === 'upcoming')
        : events;

  const featuredEvents = filteredEvents.slice(0, 2);
  const cardEvents = filteredEvents.slice(2, 5);

  return (
    <div className="min-h-screen bg-white">

      {/* ========== HERO ========== */}
      <section className="bg-white py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr_1fr] gap-6 items-center">

            {/* Left photo column */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="h-48 overflow-hidden rounded-lg">
                <img
                  src={heroThumbnails[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 overflow-hidden rounded-lg">
                <img
                  src={heroThumbnails[1]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center text */}
            <div className="text-center px-0 lg:px-6">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#EB010C] mb-4">
                UPAM Events Platform
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                Discover Events that Unite, Inspire and Empower
              </h1>
              <p className="text-gray-500 text-base mb-8 leading-relaxed max-w-lg mx-auto">
                UPAM Events is a Pan-African platform where organizers promote events, audiences
                discover experiences, and communities come together — from conferences and
                workshops to culture, music, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="#all-events"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#EB010C] text-white font-semibold rounded hover:bg-[#EB010C]/90 transition-colors"
                >
                  Explore Events
                  <span className="font-mono text-sm">&gt;&gt;</span>
                </Link>
                <Link
                  to="/events/create"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-gray-900 font-semibold border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                >
                  Create Event
                  <span className="font-mono text-sm">&gt;&gt;</span>
                </Link>
              </div>
            </div>

            {/* Right photo column */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="h-48 overflow-hidden rounded-lg">
                <img
                  src={heroThumbnails[2]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 overflow-hidden rounded-lg">
                <img
                  src={heroThumbnails[3]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT UPAM EVENTS ========== */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                About UPAM Events
              </h2>
              <p className="text-gray-600 leading-relaxed">
                UPAM Events is a digital event platform created to support Pan-African connection,
                knowledge sharing, and cultural exchange. It allows individuals, organizations, and
                communities to promote events, reach wider audiences, and sell tickets seamlessly.
                Whether it's a leadership summit, cultural festival, training, concert, or virtual
                event — UPAM Events provides the space to make it visible and accessible.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="UPAM Events"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                aria-label="Play video"
              >
                <div className="w-16 h-16 rounded-full bg-[#EB010C] flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TABS ========== */}
      <section className="py-6 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              { id: TAB_ALL, label: 'All Events & Conference' },
              { id: TAB_COMPLETED, label: 'Completed Events & Conference' },
              { id: TAB_UPCOMING, label: 'Upcoming Events & Conference' },
            ].map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                  activeTab === id
                    ? 'bg-[#EB010C] text-white'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ALL EVENTS ========== */}
      <section id="all-events" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                All Events
              </h2>
              <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
                UPAM Events is a Pan-African event platform where conferences, cultural festivals,
                workshops, and community gatherings are discovered, promoted, and experienced
                across Africa and the diaspora.
              </p>
            </div>
            <Link
              to="#event-cards"
              className="inline-flex items-center gap-1 text-[#EB010C] font-medium text-sm hover:underline shrink-0"
            >
              View all events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2 featured event cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-52">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-base font-bold text-gray-900 flex-1 leading-snug">
                      {event.title}
                    </h3>
                    {event.dateShort && (
                      <span className="text-xs text-gray-400 shrink-0">{event.dateShort}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                    {event.description || event.fullDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {event.location}
                    </span>
                    <Link
                      to={`/events/${event.slug}`}
                      className="inline-flex items-center gap-1 text-[#EB010C] font-medium text-sm hover:underline"
                    >
                      View
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3 smaller event cards */}
          <div id="event-cards" className="grid md:grid-cols-3 gap-6">
            {cardEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  {event.dateShort && (
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.dateShort}
                    </div>
                  )}
                  <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug">
                    {event.title}
                  </h3>
                  {event.purpose && (
                    <p className="text-xs text-gray-500 mb-1">
                      <span className="font-medium">Purpose:</span> {event.purpose}
                    </p>
                  )}
                  {event.theme && (
                    <p className="text-xs text-gray-500 mb-1">
                      <span className="font-medium">Theme:</span> {event.theme}
                    </p>
                  )}
                  {!event.purpose && !event.theme && event.description && (
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2 flex-grow">
                      {event.description}
                    </p>
                  )}
                  <Link
                    to={`/events/${event.slug}`}
                    className="inline-flex items-center gap-1 text-[#EB010C] font-medium text-xs mt-3 hover:underline"
                  >
                    View
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW UPAM EVENTS WORKS ========== */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            How UPAM Events Works
          </h2>

          {/* 4 steps in a horizontal row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-2xl font-bold text-gray-900 block mb-2">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Large video section */}
          <div className="relative aspect-video md:aspect-[21/9] rounded-lg overflow-hidden bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178bf50e2f0a?w=1200&q=80"
              alt="UPAM Events"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
              aria-label="Play video"
            >
              <div className="w-20 h-20 rounded-full bg-[#EB010C] flex items-center justify-center shadow-xl">
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ========== FAQ + MAP ========== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* FAQ accordion */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                Welcome to our FAQ section! Here, you'll find answers to common questions about
                UPAM Events. If you need further assistance, feel free to reach out to us.
              </p>
              <div className="border-t border-gray-100">
                {eventFaqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100">
                    <button
                      type="button"
                      className="w-full flex justify-between items-center text-left gap-4 py-4 hover:text-gray-600 transition-colors"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <span className="text-sm font-semibold text-gray-900">{faq.q}</span>
                      {openFaq === idx
                        ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                        : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                    </button>
                    {openFaq === idx && (
                      <p className="text-sm text-gray-500 leading-relaxed pb-4">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* World map */}
            <div className="hidden lg:block">
              <img
                src="/world_map.png"
                alt="UPAM Events worldwide"
                className="w-full h-auto object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178bf50e2f0a?w=1400&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bring Your Event to Life
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed text-sm md:text-base">
              Whether you're organizing a conference, workshop, festival, or community gathering.
              UPAM Events gives you the tools to reach your audience and sell tickets with ease.
            </p>
            <Link
              to="/events/create"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB010C] text-white font-medium rounded hover:bg-[#EB010C]/90 transition-colors"
            >
              Create Events
              <span className="font-mono text-sm">&gt;&gt;</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Events;
