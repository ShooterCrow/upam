import React from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Cookie Policy
        </h1>
        <p className="text-gray-600 mb-8">
          This page is under development. Please check back later for our full Cookie Policy.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-[#EB010C] text-white font-medium hover:bg-[#d00109] transition-colors"
        >
          Return to Home
        </Link>
      </section>
    </div>
  );
};

export default Cookies;
