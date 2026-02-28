import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft, CheckCircle } from 'lucide-react';
import { events } from './eventsData';

const EventDetail = () => {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Event not found</h1>
          <p className="text-[#666666] mb-6">The event you are looking for does not exist or has been removed.</p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-upam-red font-medium hover:text-upam-red/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Back link */}
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-upam-red hover:text-upam-red/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to events
        </Link>

        {/* Hero image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-[480px] rounded-xl overflow-hidden mb-8 lg:mb-12">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          {/* Title overlay on hero */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80 mb-3">
              {event.date && (
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#EB010C]" />
                  {event.date}
                </span>
              )}
              {event.location && (
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#EB010C]" />
                  {event.location}
                </span>
              )}
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${event.status === 'completed' ? 'bg-gray-500/80' : 'bg-[#EB010C]/80'} text-white`}>
                {event.status === 'completed' ? 'Completed' : 'Upcoming'}
              </span>
            </div>
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-4xl"
              style={{ fontFamily: 'Lato' }}
            >
              {event.title}
            </h1>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-10 lg:mb-14">
          <p className="text-base lg:text-lg font-normal leading-[170%] text-[#444444] max-w-4xl">
            {event.overview || event.fullDescription}
          </p>
        </section>

        {/* Theme / Purpose / Subtheme badges */}
        {(event.theme || event.purpose || event.subtheme) && (
          <section className="mb-10 lg:mb-14 flex flex-wrap gap-4">
            {event.purpose && (
              <div className="bg-[#FFF5F5] border border-[#EB010C]/20 rounded-lg px-5 py-3">
                <p className="text-xs font-semibold text-[#EB010C] uppercase tracking-wider mb-1">Purpose</p>
                <p className="text-sm text-gray-800 font-medium">{event.purpose}</p>
              </div>
            )}
            {event.theme && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Theme</p>
                <p className="text-sm text-gray-800 font-medium">{event.theme}</p>
              </div>
            )}
            {event.subtheme && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-5 py-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Sub-theme</p>
                <p className="text-sm text-gray-800 font-medium">{event.subtheme}</p>
              </div>
            )}
          </section>
        )}

        {/* Programme Highlights */}
        {event.highlights && event.highlights.length > 0 && (
          <section className="mb-10 lg:mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Programme Highlights
            </h2>
            <div className="flex flex-col gap-6">
              {event.highlights.map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-[#666666] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Objectives */}
        {event.objectives && event.objectives.length > 0 && (
          <section className="mb-10 lg:mb-14">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Programme Objectives
            </h2>
            <ul className="flex flex-col gap-3">
              {event.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#EB010C] shrink-0 mt-0.5" />
                  <span className="text-sm lg:text-base text-[#444444] leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Full description fallback (for events without extra fields) */}
        {!event.overview && !event.highlights && (
          <section className="mb-10 lg:mb-14">
            <p className="text-sm sm:text-base lg:text-[16px] font-normal leading-[170%] tracking-[0.02em] text-[#666666] max-w-3xl">
              {event.fullDescription}
            </p>
          </section>
        )}

        {/* CTA */}
        <section className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div>
            <p className="text-[#666666] text-sm mb-1">
              Interested in this event?
            </p>
            <p className="text-[#444444] text-sm font-medium">
              Register or get in touch with us for more details and updates.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              to="/events/tickets"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB010C] text-white font-medium rounded hover:bg-[#EB010C]/90 transition-colors"
            >
              Get Tickets
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-medium border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default EventDetail;
