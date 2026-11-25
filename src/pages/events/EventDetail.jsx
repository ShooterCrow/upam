import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock3, UserRound } from 'lucide-react';
import { useGetEventsQuery } from '../UserAdminPages/admin/calendarApiSlice';
import LoadingState from '../../component/ui/LoadingState';
import EventContactAdmin from './EventContactAdmin';
import {
  formatEventDate,
  getEventImage,
  isPastEvent,
} from './eventUtils';

const slugify = (value = '') =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const EventDetail = () => {
  const { slug } = useParams();
  const {
    data: eventsResponse,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetEventsQuery({ category: 'Event' });
  const events = eventsResponse?.data || [];
  const event = events.find(
    (item) => item._id === slug || slugify(item.title) === slug,
  );

  if (isLoading) {
    return <LoadingState message="Loading event details..." />;
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Unable to load event</h1>
        <p className="mt-3 text-slate-600">
          {error?.data?.message || error?.error || 'Please try again.'}
        </p>
        <button
          type="button"
          onClick={refetch}
          className="mt-5 font-semibold text-[#EB010C] hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center bg-white">
        <div className="max-w-md px-4 text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">Event not found</h1>
          <p className="mb-6 text-[#666666]">
            The event you are looking for does not exist or has been removed.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 font-medium text-upam-red hover:text-upam-red/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to events
          </Link>
        </div>
      </div>
    );
  }

  const isPast = isPastEvent(event);

  return (
    <div className="min-h-screen bg-white">
      <article className="mx-auto max-w-[1330px] px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <Link
          to="/events"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-upam-red hover:text-upam-red/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to events
        </Link>

        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl sm:h-80 lg:mb-12 lg:h-[480px]">
          <img
            src={getEventImage(event.image)}
            alt={event.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-white">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#EB010C]" />
                {formatEventDate(event.date)}
              </span>
              {event.time && (
                <span className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#EB010C]" />
                  {event.time}
                </span>
              )}
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                  isPast ? 'bg-gray-500/80' : 'bg-[#EB010C]/80'
                }`}
              >
                {isPast ? 'Completed' : 'Upcoming'}
              </span>
            </div>
            <h1 className="max-w-4xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {event.title}
            </h1>
          </div>
        </div>

        <section className="mb-10 lg:mb-14">
          <p className="max-w-4xl text-base leading-[170%] text-[#444444] lg:text-lg">
            {event.description}
          </p>
          {(event.category || event.organizer) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {event.category && (
                <span className="border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                  {event.category}
                </span>
              )}
              {event.organizer && (
                <span className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
                  <UserRound className="h-4 w-4 text-[#EB010C]" />
                  {event.organizer}
                </span>
              )}
            </div>
          )}
        </section>

        <section className="flex flex-col items-start gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="mb-1 text-sm text-[#666666]">Interested in this event?</p>
            <p className="text-sm font-medium text-[#444444]">
              Contact the event team for registration and attendance information.
            </p>
          </div>
          {!isPast && (
            <Link
              to={`/events/tickets/form?event=${event._id}`}
              className="inline-flex shrink-0 items-center gap-2 rounded bg-[#EB010C] px-6 py-3 font-medium text-white transition-colors hover:bg-[#EB010C]/90"
            >
              Get Tickets
            </Link>
          )}
        </section>
        <EventContactAdmin />
      </article>
    </div>
  );
};

export default EventDetail;
