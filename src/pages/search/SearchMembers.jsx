import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchMembers = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Search Members
        </h1>
        <p className="text-gray-600 mb-8">
          Find and connect with UPAM members across Africa and the diaspora.
        </p>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, location, or chapter..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB010C] focus:border-transparent"
          />
        </div>

        <p className="text-gray-500 text-sm">
          Member search is available to registered members. <Link to="/login" className="text-[#EB010C] hover:underline">Log in</Link> or <Link to="/register" className="text-[#EB010C] hover:underline">register</Link> to access the member directory.
        </p>
      </section>
    </div>
  );
};

export default SearchMembers;
