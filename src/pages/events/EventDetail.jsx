import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
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
        <div className="relative w-full h-64 sm:h-80 lg:h-[400px] rounded-lg overflow-hidden mb-8 lg:mb-12">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Header */}
        <header className="mb-8 lg:mb-12">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#666666] mb-4">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-upam-red" />
              {event.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-upam-red" />
              {event.location}
            </span>
          </div>
          <h1
            className="text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-[139%] tracking-[0.02em] text-black mb-4"
            style={{ fontFamily: 'Lato' }}
          >
            {event.title}
          </h1>
          <p className="text-sm sm:text-base lg:text-[16px] font-normal leading-[170%] tracking-[0.02em] text-[#666666] max-w-3xl">
            {event.fullDescription}
          </p>
        </header>

        {/* CTA */}
        <section className="pt-8 border-t border-gray-200">
          <p className="text-[#666666] text-sm mb-4">
            For registration and more details, please contact us.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB010C] text-white font-medium rounded hover:bg-[#EB010C]/90 transition-colors"
          >
            Contact us
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </section>
      </article>
    </div>
  );
};

export default EventDetail;
