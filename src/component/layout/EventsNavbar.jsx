import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Volume2 } from 'lucide-react';

const EVENTS_NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Create Events', path: '/events/create' },
  { name: 'Tickets', path: '/events/tickets' },
  { name: 'Help & Support', path: '/events/help' },
];

const EventsNavbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logoupam.png" alt="United Pan-Africanist Movement" className="h-10 w-auto" />
          </Link>

          {/* Center nav - desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {EVENTS_NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-[#EB010C]' : 'text-gray-800 hover:text-[#EB010C]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Language + Login */}
          <div className="flex items-center gap-4">
            <div ref={langRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Volume2 className="w-4 h-4" />
                <span>ENG</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-32 py-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <button type="button" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                    English
                  </button>
                  <button type="button" className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                    Français
                  </button>
                </div>
              )}
            </div>
            <Link
              to="/login"
              className="border border-gray-800 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-colors rounded"
            >
              Login
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col py-4 px-4 gap-1">
            {EVENTS_NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded ${
                  isActive(link.path) ? 'text-[#EB010C] bg-red-50' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default EventsNavbar;
