import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, ArrowRight, Calendar, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import { useGetEventsQuery } from '../UserAdminPages/admin/calendarApiSlice';
import LoadingState from '../../component/ui/LoadingState';
import {
  formatEventDate,
  getEventImage,
  getEventPath,
  isPastEvent,
} from './eventUtils';

const EVENT_FILTERS = [
  { id: 'all', label: 'All events' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'completed', label: 'Past events' },
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const {
    data: eventsResponse,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetEventsQuery({ category: 'Event' });
  const events = eventsResponse?.data || [];
  const filteredEvents =
    activeFilter === 'all'
      ? events
      : events.filter((event) =>
          activeFilter === 'completed' ? isPastEvent(event) : !isPastEvent(event),
        );
  const featuredEvent = filteredEvents.find((event) => event.isFeatured);
  const remainingEvents = filteredEvents.filter(
    (event) => event._id !== featuredEvent?._id,
  );

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900">
      <Helmet>
        <title className='text-white'>Events &amp; Conferences | UPAM</title>
        <meta
          name="description"
          content="Discover upcoming and past UPAM events, conferences, and community programmes."
        />
      </Helmet>

      <section className="bg-[#003115] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <ScrollReveal direction="up">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
              United Pan-Africanist Movement
            </p>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
                  Events &amp; Conferences
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white md:text-base">
                  Meet, learn, and build together. Explore UPAM gatherings bringing
                  African communities and the diaspora together.
                </p>
              </div>
              <Link
                to="/events/create"
                className="inline-flex w-fit items-center gap-2 bg-[#EB010C] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c9000a]"
              >
                Submit an event
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2" aria-label="Filter events">
            {EVENT_FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-[#EB010C] text-white'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        {isLoading ? (
          <LoadingState message="Loading events..." />
        ) : isError ? (
          <div className="flex flex-col items-center border border-red-100 bg-white px-6 py-12 text-center">
            <AlertCircle className="mb-3 h-8 w-8 text-red-600" />
            <p className="font-semibold text-slate-900">
              {error?.data?.message || error?.error || 'Could not load events.'}
            </p>
            <button
              type="button"
              onClick={refetch}
              className="mt-4 font-semibold text-[#EB010C] hover:underline"
            >
              Try again
            </button>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <p className="font-semibold text-slate-800">No events to show yet.</p>
            <p className="mt-2 text-sm text-slate-500">
              Please check back soon for updates.
            </p>
          </div>
        ) : (
          <>
            {featuredEvent && (
              <section aria-labelledby="featured-event-heading" className="mb-14">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#EB010C]" />
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#EB010C]">
                    Featured event
                  </p>
                </div>
                <ScrollReveal direction="up">
                  <article className="grid overflow-hidden border border-slate-200 bg-white shadow-sm md:grid-cols-2">
                    <Link
                      to={getEventPath(featuredEvent)}
                      aria-label={`View details for ${featuredEvent.title}`}
                      className="group relative min-h-64 overflow-hidden md:min-h-[380px]"
                    >
                      <img
                        src={getEventImage(featuredEvent.image)}
                        alt={featuredEvent.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-5 top-5 bg-[#EB010C] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        {isPastEvent(featuredEvent) ? 'Past event' : 'Upcoming'}
                      </span>
                    </Link>
                    <div className="flex flex-col justify-center p-6 md:p-10">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                        UPAM event
                      </p>
                      <h2
                        id="featured-event-heading"
                        className="mt-3 text-2xl font-black leading-tight text-slate-900 md:text-3xl"
                      >
                        <Link to={getEventPath(featuredEvent)} className="hover:text-[#EB010C]">
                          {featuredEvent.title}
                        </Link>
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {featuredEvent.description}
                      </p>
                      <div className="mt-6 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:gap-6">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 shrink-0 text-[#EB010C]" />
                          {formatEventDate(featuredEvent.date)}
                        </span>
                        {featuredEvent.time && (
                          <span className="flex items-center gap-2">
                            <Clock3 className="h-4 w-4 shrink-0 text-[#EB010C]" />
                            {featuredEvent.time}
                          </span>
                        )}
                      </div>
                      <Link
                        to={getEventPath(featuredEvent)}
                        className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#EB010C] hover:underline"
                      >
                        Explore event
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              </section>
            )}

            <section aria-labelledby="all-events-heading">
              <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h2 id="all-events-heading" className="text-2xl font-black text-slate-900">
                    {activeFilter === 'completed'
                      ? 'Past events'
                      : activeFilter === 'upcoming'
                        ? 'Upcoming events'
                        : 'All events'}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Browse event details, dates, and programme information.
                  </p>
                </div>
                <span className="text-sm text-slate-500">
                  {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
                </span>
              </div>

              {remainingEvents.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {remainingEvents.map((event) => (
                    <Link
                      key={event._id}
                      to={getEventPath(event)}
                      className="group flex flex-col overflow-hidden border border-slate-200 bg-white transition-shadow hover:shadow-lg"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={getEventImage(event.image)}
                          alt={event.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span
                          className={`absolute left-4 top-4 px-2.5 py-1 text-xs font-bold text-white ${
                            isPastEvent(event) ? 'bg-slate-700' : 'bg-[#003115]'
                          }`}
                        >
                          {isPastEvent(event) ? 'Past event' : 'Upcoming'}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-[#EB010C]">
                          {event.title}
                        </h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                          {event.description}
                        </p>
                        <div className="mt-5 space-y-2 text-sm text-slate-500">
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 shrink-0 text-[#EB010C]" />
                            {formatEventDate(event.date)}
                          </span>
                          {event.time && (
                            <span className="flex items-center gap-2">
                              <Clock3 className="h-4 w-4 shrink-0 text-[#EB010C]" />
                              {event.time}
                            </span>
                          )}
                        </div>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#EB010C]">
                          View event details
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : featuredEvent ? (
                <p className="border border-slate-200 bg-white px-5 py-8 text-sm text-slate-500">
                  No other events in this category.
                </p>
              ) : null}
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
