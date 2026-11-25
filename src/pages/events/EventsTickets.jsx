import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, ArrowRight, Calendar, Ticket } from 'lucide-react';
import { useGetEventsQuery } from '../UserAdminPages/admin/calendarApiSlice';
import LoadingState from '../../component/ui/LoadingState';
import {
  formatEventDate,
  getEventImage,
  getEventPath,
  isPastEvent,
} from './eventUtils';

const EventsTickets = () => {
  const { data, isLoading, isError, error, refetch } = useGetEventsQuery({
    category: 'Event',
  });
  const events = data?.data || [];
  const upcomingEvents = events.filter((event) => !isPastEvent(event));
  const completedEvents = events.filter(isPastEvent);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178bf50e2f0a?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#EB010C]/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-white">
            UPAM
          </span>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Tickets &amp; Registration
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-base text-white md:text-lg">
            Select an upcoming event and register to attend.
          </p>
          <Link
            to="/events/tickets/form"
            className="inline-flex items-center justify-center gap-2 rounded bg-white px-8 py-3 font-semibold text-[#EB010C] transition-colors hover:bg-gray-100"
          >
            <Ticket className="h-4 w-4" />
            Get Tickets Now
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#EB010C] hover:text-[#EB010C]/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {isLoading ? (
          <LoadingState message="Loading events..." />
        ) : isError ? (
          <div className="flex flex-col items-center py-12 text-center">
            <AlertCircle className="mb-3 h-8 w-8 text-red-600" />
            <p className="text-slate-700">
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
        ) : (
          <>
            {upcomingEvents.length > 0 && (
              <section className="mb-12">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#EB010C]">
                      Available now
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                      Upcoming Events
                    </h2>
                  </div>
                  <Link
                    to="/events"
                    className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-[#EB010C] hover:underline"
                  >
                    All events
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {upcomingEvents.map((event) => (
                    <article
                      key={event._id}
                      className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      <Link
                        to={getEventPath(event)}
                        aria-label={`View details for ${event.title}`}
                        className="relative h-44 overflow-hidden"
                      >
                        <img
                          src={getEventImage(event.image)}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-[#EB010C] px-2.5 py-1 text-xs font-semibold text-white">
                          Upcoming
                        </span>
                      </Link>
                      <div className="flex flex-grow flex-col p-5">
                        <Link to={getEventPath(event)}>
                          <h3 className="mb-3 line-clamp-2 text-base font-bold leading-snug text-gray-900 hover:text-[#EB010C]">
                            {event.title}
                          </h3>
                        </Link>
                        <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                          {event.description}
                        </p>
                        <span className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4 shrink-0 text-[#EB010C]" />
                          {formatEventDate(event.date)}
                        </span>
                        <div className="mt-auto flex items-center justify-between gap-3">
                          <Link
                            to={getEventPath(event)}
                            className="text-sm text-gray-500 transition-colors hover:text-gray-700"
                          >
                            View details
                          </Link>
                          <Link
                            to={`/events/tickets/form?event=${event._id}`}
                            className="inline-flex items-center gap-1.5 rounded bg-[#EB010C] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#EB010C]/90"
                          >
                            <Ticket className="h-3.5 w-3.5" />
                            Get Tickets
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {completedEvents.length > 0 && (
              <section>
                <h2 className="mb-6 text-xl font-bold text-gray-900">Past Events</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {completedEvents.map((event) => (
                    <Link
                      key={event._id}
                      to={getEventPath(event)}
                      className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-gray-50 opacity-90 transition-opacity hover:opacity-100"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={getEventImage(event.image)}
                          alt={event.title}
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-gray-700 px-2.5 py-1 text-xs font-semibold text-white">
                          Completed
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="mb-3 line-clamp-2 text-base font-bold leading-snug text-gray-800">
                          {event.title}
                        </h3>
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4 shrink-0" />
                          {formatEventDate(event.date)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {events.length === 0 && (
              <p className="py-12 text-center text-slate-600">No events are available right now.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EventsTickets;
