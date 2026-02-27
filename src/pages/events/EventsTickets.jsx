import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, ArrowRight, Ticket } from 'lucide-react';
import { events } from './eventsData';

const EventsTickets = () => {
  const upcomingEvents = events.filter((e) => e.status === 'upcoming');
  const completedEvents = events.filter((e) => e.status === 'completed');

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178bf50e2f0a?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#EB010C]/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">
            UPAM Events
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Tickets &amp; Registration
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Find and register for UPAM events. Select your event and get your tickets securely.
          </p>
          <Link
            to="/events/tickets/form"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#EB010C] font-semibold rounded hover:bg-gray-100 transition-colors"
          >
            <Ticket className="w-4 h-4" />
            Get Tickets Now
          </Link>
        </div>
      </section>

      {/* ── Back nav ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#EB010C] hover:text-[#EB010C]/80"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>
      </div>

      {/* ── Upcoming Events ── */}
      {upcomingEvents.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#EB010C] mb-2">
                Available Now
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Upcoming Events
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#EB010C] hover:underline shrink-0"
            >
              All events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#EB010C] text-white text-xs font-semibold rounded-full">
                    Upcoming
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="flex flex-col gap-1.5 mb-4">
                    {event.date && (
                      <span className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 shrink-0 text-[#EB010C]" />
                        {event.date}
                      </span>
                    )}
                    {event.location && (
                      <span className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 shrink-0 text-[#EB010C]" />
                        {event.location}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <Link
                      to={`/events/${event.slug}`}
                      className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      View details
                    </Link>
                    <Link
                      to="/events/tickets/form"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#EB010C] text-white text-sm font-semibold rounded hover:bg-[#EB010C]/90 transition-colors"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      Get Tickets
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Past Events ── */}
      {completedEvents.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Past Events
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden flex flex-col opacity-80"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover grayscale"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-gray-600 text-white text-xs font-semibold rounded-full">
                    Completed
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-gray-700 mb-3 leading-snug line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="flex flex-col gap-1.5 mb-4">
                    {event.date && (
                      <span className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4 shrink-0" />
                        {event.date}
                      </span>
                    )}
                    {event.location && (
                      <span className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4 shrink-0" />
                        {event.location}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <Link
                      to={`/events/${event.slug}`}
                      className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      View details
                    </Link>
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-200 text-gray-500 text-sm font-semibold rounded cursor-not-allowed">
                      <Ticket className="w-3.5 h-3.5" />
                      Sold Out
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default EventsTickets;
