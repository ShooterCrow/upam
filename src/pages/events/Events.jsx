import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  events,
  heroThumbnails,
  howItWorksSteps,
} from './eventsData';
import FAQ from '../../component/ui/FAQ';

const TAB_ALL = 'all';
const TAB_COMPLETED = 'completed';
const TAB_UPCOMING = 'upcoming';

const Events = () => {
  const [activeTab, setActiveTab] = useState(TAB_ALL);

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
      <section className="relative py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
            {heroThumbnails.map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Events that Unite, Inspire and Empower
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              UPAM Events is a Pan-African platform where organizers promote events, audiences discover experiences, and communities come together from conferences and workshops to culture, music, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#all-events"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EB010C] text-white font-medium rounded hover:bg-[#EB010C]/90 transition-colors"
              >
                Explore Events
                <span className="font-mono">&gt;&gt;</span>
              </Link>
              <Link
                to="/events/create"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 font-medium border-2 border-gray-900 rounded hover:bg-gray-50 transition-colors"
              >
                Create Event
                <span className="font-mono">&gt;&gt;</span>
              </Link>
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
                UPAM Events is a digital event platform created to support Pan-African connection, knowledge sharing, and cultural exchange. It allows individuals, organizations, and communities to promote events, reach wider audiences, and sell tickets seamlessly. Whether it's a leadership summit, cultural festival, training, concert, or virtual event — UPAM Events provides the space to make it visible and accessible.
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
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={() => setActiveTab(TAB_ALL)}
              className={`px-4 py-2.5 rounded font-medium transition-colors ${
                activeTab === TAB_ALL
                  ? 'bg-[#EB010C] text-white'
                  : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Events & Conference
            </button>
            <button
              type="button"
              onClick={() => setActiveTab(TAB_COMPLETED)}
              className={`px-4 py-2.5 rounded font-medium transition-colors ${
                activeTab === TAB_COMPLETED
                  ? 'bg-[#EB010C] text-white'
                  : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Completed Events & Conference
            </button>
            <button
              type="button"
              onClick={() => setActiveTab(TAB_UPCOMING)}
              className={`px-4 py-2.5 rounded font-medium transition-colors ${
                activeTab === TAB_UPCOMING
                  ? 'bg-[#EB010C] text-white'
                  : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Upcoming Events & Conference
            </button>
          </div>
        </div>
      </section>

      {/* ========== ALL EVENTS (heading + view all + grid) ========== */}
      <section id="all-events" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                All Events
              </h2>
              <p className="text-gray-600 max-w-2xl">
                UPAM Events is a Pan-African event platform where conferences, cultural festivals, workshops, and community gatherings are discovered, promoted, and experienced across Africa and the diaspora.
              </p>
            </div>
            <Link
              to="#event-cards"
              className="inline-flex items-center gap-1 text-[#EB010C] font-medium hover:underline shrink-0"
            >
              View all events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Event image grid / featured cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 flex-1">
                      {event.title}
                    </h3>
                    {event.date && (
                      <span className="text-sm text-gray-500 shrink-0">
                        {event.date}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {event.location}
                    </span>
                    <Link
                      to={`/events/${event.slug}`}
                      className="inline-flex items-center gap-1 text-[#EB010C] font-medium text-sm hover:underline"
                    >
                      View
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Three event cards: image, date below, title, purpose/theme */}
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
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      {event.dateShort}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  {event.purpose && (
                    <p className="text-sm text-gray-600 mb-1">
                      Purpose: {event.purpose}
                    </p>
                  )}
                  {event.theme && (
                    <>
                      <p className="text-sm text-gray-600">
                        Theme: {event.theme}
                      </p>
                      {event.subtheme && (
                        <p className="text-sm text-gray-600">
                          Sub-theme: {event.subtheme}
                        </p>
                      )}
                    </>
                  )}
                  {event.description && !event.purpose && !event.theme && (
                    <p className="text-sm text-gray-600 flex-grow">
                      {event.description}
                    </p>
                  )}
                  <Link
                    to={`/events/${event.slug}`}
                    className="inline-flex items-center gap-1 text-[#EB010C] font-medium text-sm mt-3 hover:underline"
                  >
                    View
                    <ArrowRight className="w-4 h-4" />
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
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-gray-900 block mb-2">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
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

      {/* ========== FAQ (project FAQ) ========== */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bring Your Event to Life
            </h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Whether you're organizing a conference, workshop, festival, or community gathering. UPAM Events gives you the tools to reach your audience and sell tickets with ease.
            </p>
            <Link
              to="/events/create"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB010C] text-white font-medium rounded hover:bg-[#EB010C]/90 transition-colors"
            >
              Create Events
              <span className="font-mono">&gt;&gt;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
