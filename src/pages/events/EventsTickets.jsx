import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EventsTickets = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178bf50e2f0a?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#EB010C]/60" aria-hidden />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tickets & Registration
          </h1>
          <p className="text-white/95 text-base md:text-lg mb-8">
            Find and register for UPAM events. Select your event and get your tickets securely.
          </p>
          <Link
            to="/events/tickets/form"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#EB010C] font-semibold border-2 border-[#EB010C] rounded-lg hover:bg-[#EB010C] hover:text-white transition-colors"
          >
            Get Tickets Now
            <span className="font-mono">&gt;&gt;</span>
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#EB010C] hover:text-[#EB010C]/80"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>
      </div>
    </div>
  );
};

export default EventsTickets;
