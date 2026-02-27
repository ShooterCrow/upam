import React, { useState } from 'react';
import { Search, User, Calendar, IdCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const TABS = [
  { id: 'name', label: 'By Name', icon: User },
  { id: 'id', label: 'By Member ID', icon: IdCard },
  { id: 'dob', label: 'By Date of Birth', icon: Calendar },
];

const SearchMembers = () => {
  const [activeTab, setActiveTab] = useState('name');
  const [nameQuery, setNameQuery] = useState('');
  const [idQuery, setIdQuery] = useState('');
  const [dob, setDob] = useState('');

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EB010C] focus:border-transparent outline-none text-gray-800 bg-white';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#EB010C] mb-2">
            Members Directory
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Search Members
          </h1>
          <p className="text-gray-600 max-w-xl">
            Find and connect with UPAM members across Africa and the diaspora.
            Search by name, unique member ID, or date of birth.
          </p>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-8 bg-white rounded-xl border border-gray-200 p-1.5 w-fit">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === id
                  ? 'bg-[#EB010C] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Search Panel */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 mb-6">

          {/* Search by Name */}
          {activeTab === 'name' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name or Chapter
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, location, or chapter..."
                  value={nameQuery}
                  onChange={(e) => setNameQuery(e.target.value)}
                  className={`${inputClass} pl-12`}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Enter at least 3 characters to search.
              </p>
            </div>
          )}

          {/* Search by Member ID */}
          {activeTab === 'id' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Member ID Number
              </label>
              <div className="relative">
                <IdCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g. UPAM-2024-00123"
                  value={idQuery}
                  onChange={(e) => setIdQuery(e.target.value)}
                  className={`${inputClass} pl-12`}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Enter your unique UPAM Member ID (found on your membership card or welcome email).
              </p>
            </div>
          )}

          {/* Search by Date of Birth */}
          {activeTab === 'dob' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date of Birth
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className={`${inputClass} pl-12`}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Select your date of birth to locate your member profile.
              </p>
            </div>
          )}

          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-[#EB010C] text-white font-medium rounded-lg hover:bg-[#EB010C]/90 transition-colors"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>

        {/* Auth notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-amber-800 mb-1">
              Members-only directory
            </p>
            <p className="text-sm text-amber-700">
              Full search results are available to registered members.{' '}
              <Link to="/login" className="text-[#EB010C] font-medium hover:underline">
                Log in
              </Link>{' '}
              or{' '}
              <Link to="/register" className="text-[#EB010C] font-medium hover:underline">
                register
              </Link>{' '}
              to access the complete member directory.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default SearchMembers;
