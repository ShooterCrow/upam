import React, { useState, useEffect } from 'react';
import { Search, User, Calendar, IdCard, Users, ArrowRight, Shield, Globe, MapPin, Eye, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSearchMembersQuery } from './searchApiSlice';
import useAuth from '../../hooks/useAuth';
import ScrollReveal from '../../components/ScrollReveal';

const TABS = [
  { id: 'name', label: 'By Name', icon: User },
  { id: 'id', label: 'By Member ID', icon: IdCard },
];

const SearchMembers = () => {
  const { isLoggedIn } = useAuth();
  const [activeTab, setActiveTab] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [showCTAModal, setShowCTAModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);


  // Fetch members based on search criteria
  const { data: results, isLoading, isError, error } = useSearchMembersQuery(
    debouncedTerm.length >= (activeTab === 'name' ? 3 : 1)
      ? { [activeTab === 'name' ? 'searchTerm' : 'memberId']: debouncedTerm }
      : { skip: true },
    { skip: debouncedTerm.length < (activeTab === 'name' ? 3 : 1) }
  );

  const members = results?.data || [];


  // Trigger CTA Modal for guests when results are found
  useEffect(() => {
    if (!isLoggedIn && members?.length > 0 && !hasShownModal) {
      const timer = setTimeout(() => {
        setShowCTAModal(true);
        setHasShownModal(true);
      }, 1500); // Wait a bit so they see the results first
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn, members?.length, hasShownModal]);

  const inputClass = "w-full bg-[#F9F9F9] border-b-2 border-slate-200 focus:border-[#EB010C] px-2 py-4 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors font-medium";
  const labelClass = "block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1";

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#FAFAFC] to-[#F3F4F6] pt-32 pb-20 px-4 md:px-8 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(235,1,12,0.03),transparent_50%)] pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#EB010C]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] w-fit mb-6">
              <Users size={13} />
              Members Directory
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06] text-slate-900 mb-4">
              Connect with<br />the Movement.
            </h1>
            <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
              Search and find UPAM members across Africa and the diaspora.
              Our directory is built for unity, transparency, and collective growth.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Search Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 items-start">

          {/* Search Controls */}
          <ScrollReveal direction="right" className="lg:col-span-1 border border-slate-100 bg-white p-8 md:p-10">
            <h2 className="text-xl font-black text-slate-900 tracking-tight mb-8">Search Filters</h2>

            {/* Tab Switcher */}
            <div className="flex gap-px bg-slate-100 border border-slate-100 mb-10 overflow-hidden">
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveTab(id);
                    setSearchTerm('');
                    setDebouncedTerm('');
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === id
                    ? 'bg-[#003115] text-white'
                    : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                >
                  <Icon size={14} />
                  {label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="space-y-6">
              <div>
                <label className={labelClass}>
                  {activeTab === 'name' ? 'Full Name or Region' : 'Search Member Number'}
                </label>
                <div className="relative flex items-center gap-1">
                  {activeTab === 'id' && (
                    <span className="text-base font-black text-slate-900 border-b-2 border-slate-200 py-4 h-full flex items-center">20-</span>
                  )}
                  <input
                    type="text"
                    placeholder={activeTab === 'name' ? "e.g. John Doe" : "e.g. 1045"}
                    value={searchTerm}
                    onChange={(e) => {
                      let val = e.target.value;
                      if (activeTab === 'id') {
                        // Strip '20-' or anything leading up to '-' if user paste full ID
                        if (val.includes('-')) {
                          val = val.split('-').pop();
                        }
                      }
                      setSearchTerm(val);
                    }}
                    className={inputClass}
                  />
                  <Search size={18} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-3">
                  {searchTerm.length < (activeTab === 'name' ? 3 : 1) ? 'Start typing to search...' : 'Searching...'}
                </p>
              </div>
            </div>

            {/* Privacy Shield Notice */}
            <div className="mt-12 p-6 bg-[#FAFAFC] border-l-4 border-[#EB010C]">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={16} className="text-[#EB010C]" />
                <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Privacy Protected</h3>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                We protect our members' data. Contact details are never shared publicly.
                Guests see restricted profiles.
              </p>
            </div>
          </ScrollReveal>

          {/* Results Area */}
          <div className="lg:col-span-2">
            {isLoading && (
              <div className="grid sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white p-8 h-48 animate-pulse shadow-sm" />
                ))}
              </div>
            )}

            {!isLoading && debouncedTerm.length >= 3 && members.length === 0 && (
              <ScrollReveal direction="up">
                <div className="text-center py-20 bg-white border border-slate-100">
                  <Globe size={48} className="mx-auto text-slate-200 mb-4" />
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">No Results Found</h3>
                  <p className="text-sm text-slate-400 mt-2">Try adjusting your search terms or filters.</p>
                </div>
              </ScrollReveal>
            )}

            {!isLoading && debouncedTerm.length < 3 && (
              <div className="text-center py-32 opacity-50">
                <Search size={48} className="mx-auto text-slate-100 mb-4" />
                <h3 className="text-base font-black text-slate-300 uppercase tracking-[0.2em]">Start Typing to Search</h3>
              </div>
            )}

            {!isLoading && members.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
                {members.map((member, index) => (
                  <ScrollReveal key={member._id} direction="up" delay={index * 0.05}>
                    <div className="group bg-white p-8 h-full flex flex-col justify-between hover:bg-slate-50 transition-colors duration-300 relative overflow-hidden">
                      {/* Decorative Background ID Number for Guests */}
                      {!isLoggedIn && (
                        <div className="absolute -right-4 -bottom-4 opacity-[0.03] select-none pointer-events-none">
                          <span className="text-8xl font-black italic">HIDDEN</span>
                        </div>
                      )}

                      <div>
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-16 h-16 bg-[#EB010C]/5 border border-[#EB010C]/10 flex items-center justify-center text-[#EB010C]">
                            {member.profilePicture ? (
                              <img src={member.profilePicture} alt={member.firstName} className="w-full h-full object-cover" />
                            ) : (
                              <User size={32} />
                            )}
                          </div>
                          <div className="text-right">
                            <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 ${isLoggedIn ? 'bg-[#003115] text-white' : 'bg-slate-100 text-slate-500'}`}>
                              {isLoggedIn ? 'Verified Member' : 'Protected'}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-black text-slate-900 group-hover:text-[#EB010C] transition-colors leading-tight mb-2 uppercase">
                          {member.firstName} {isLoggedIn ? member.lastName : member.lastName?.charAt(0) + '.'}
                        </h3>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                            <MapPin size={12} className="text-[#EB010C]" />
                            {isLoggedIn ? (member.region || 'Chapter Member') : 'Regional Info Restricted'}
                          </div>
                          {isLoggedIn && member.memberId && (
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                              <IdCard size={12} className="text-[#EB010C]" />
                              {member.memberId}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action / Notice */}
                      <div className="mt-8 pt-6 border-t border-slate-50">
                        {!isLoggedIn ? (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                              <Shield size={12} />
                              Private Account
                            </div>
                            <Link to="/login" className="text-[10px] font-black text-[#EB010C] uppercase tracking-widest hover:underline flex items-center gap-1 group/btn">
                              Log In
                              <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        ) : (
                          <button className="flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-widest hover:text-[#EB010C] transition-colors">
                            <Eye size={14} />
                            View Brief Profile
                          </button>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

            {/* CTA for Guests */}
            {!isLoggedIn && !isLoading && (
              <ScrollReveal direction="up" className="mt-16 bg-[#003115] p-10 md:p-12 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                  <Users size={200} className="text-white" />
                </div>
                <div className="relative z-10 max-w-md">
                  <h3 className="headerWhite text-2xl font-black text-white tracking-tight leading-tight mb-4">
                    Access the Full<br />Pan-African Directory.
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-8">
                    Verified members can search by name or exact ID, and see more information.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/register" className="px-6 py-3 bg-[#EB010C] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#c9000a] transition-colors">
                      Register Member
                    </Link>
                    <Link to="/login" className="px-6 py-3 border border-white/30 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                      Sign In
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* CTA Modal for Guest Users */}
      <CTAModal
        isOpen={showCTAModal}
        onClose={() => setShowCTAModal(false)}
      />
    </div>
  );
};

const CTAModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-lg overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-300 shadow-2xl">
        {/* Top Accent Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#EB010C] via-[#003115] to-[#EB010C]" />

        <button
          onClick={onClose}
          className="absolute right-4 top-6 text-slate-400 hover:text-slate-900 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-[#EB010C]/10 rounded-full flex items-center justify-center mx-auto mb-8 text-[#EB010C]">
            <Users size={32} />
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4 uppercase">
            Join the Movement.
          </h2>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 font-medium">
            You've found some members! Create an account to unlock full profiles,
            see exact member IDs, and connect with the Pan-African community.
          </p>

          <div className="flex flex-col gap-4">
            <Link
              to="/register"
              className="w-full py-4 bg-[#EB010C] text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#c9000a] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-red-100 flex items-center justify-center gap-2 group"
            >
              Become a Member
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/login"
              className="w-full py-4 border-2 border-slate-900 text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              Sign In
            </Link>
          </div>

          <p className="mt-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Registration is free and only takes 2 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchMembers;
