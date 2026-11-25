const backendOrigin = (import.meta.env.VITE_API_URL || '')
  .replace(/\/api\/?$/, '')
  .replace(/\/$/, '');

export const getEventPath = (event) => {
  if (event?._id) return `/events/${event._id}`;
  if (event?.slug) return `/events/${event.slug}`;
  return '/events';
};

export const getEventImage = (image) => {
  if (!image) return '/academy_logo.png';
  if (/^(https?:)?\/\//i.test(image) || image.startsWith('data:')) return image;
  return `${backendOrigin}/${image.replace(/^\/+/, '')}`;
};

export const formatEventDate = (date) => {
  if (!date) return 'Date to be announced';
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return date;
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(parsedDate);
};

export const isPastEvent = (event) => {
  if (!event?.date) return false;
  const eventDate = new Date(event.date);
  if (Number.isNaN(eventDate.getTime())) return false;
  eventDate.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return eventDate < today;
};
