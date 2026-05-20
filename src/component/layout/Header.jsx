import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, LogOut, ExternalLink } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../pages/authenticationPages/authApiSlice';
import useAuth from '../../hooks/useAuth';
import ProfileBox from '../ui/ProfileBox';
import GoogleTranslate from '../common/GoogleTranslate';
import useMediaQuery from '../../hooks/useMediaQuery';
import { PUBLIC_LINKS, USER_LINKS, USER_BOTTOM_LINKS } from '../../constants/navigation';
import { useGetMeQuery } from '../../pages/platform/usersApiSlice';


import { motion } from 'framer-motion';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const headerRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();
    const { isLoggedIn, user, roles } = useAuth();
    const isOnDashboard = location.pathname.startsWith('/user') || location.pathname.startsWith('/admin');
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const { data: profileData, isLoading: isProfileLoading, isError: isProfileError, error: profileFetchError, refetch } = useGetMeQuery();


    const navigationLinks = PUBLIC_LINKS;

    const dashboardLinks = USER_LINKS.concat(USER_BOTTOM_LINKS.filter(l => l.name !== 'Log out'));

    // Helper to check if a link is active
    const isActiveLink = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    // Helper to check if any child of a dropdown is active
    const isDropdownActive = (children) => {
        return children?.some(child => isActiveLink(child.path));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            setIsMobileMenuOpen(false);
            navigate('/login');
        } catch (err) {
            console.error('Failed to logout:', err);
        }
    };

    return (
        <div ref={headerRef} className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
            {/* Background Colorful Blur Blobs */}
            <div className="absolute inset-x-0 top-0 h-18 lg:h-24 overflow-hidden pointer-events-none z-[-1]">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [-10, 10, -10],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -left-10 -top-10 w-64 h-64 bg-[#EB010C]/10 blur-[80px] rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [10, -10, 10],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute right-0 -top-20 w-80 h-80 bg-blue-400/5 blur-[100px] rounded-full"
                />
            </div>

            {/* Desktop Header */}
            <header className="hidden lg:block bg-white/70 backdrop-blur-xl border-b border-gray-100/50 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/" translate="no" className="hover:opacity-80 transition-opacity">
                                <img src="/logoupam.png" alt="UPAM Logo" className="h-10 w-auto" />
                            </Link>
                        </div>


                        {/* Right side actions */}
                        <div className="flex items-center gap-10">
                            {isDesktop && <GoogleTranslate />}
                            {
                                isLoggedIn ? <ProfileBox show={true} profilePicture={profileData?.data?.image?.url} /> :
                                    <div className="relative">
                                        <button
                                            onClick={() => toggleDropdown('auth')}
                                            className="px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-3 group"
                                        >
                                            Register/Login
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === 'auth' ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Auth Dropdown */}
                                        <div
                                            className={`absolute top-full right-0 mt-3 w-48 bg-white/90 backdrop-blur-md border border-gray-100 shadow-2xl py-2 z-[110] transition-all duration-300 ease-out transform origin-top-right ${openDropdown === 'auth'
                                                ? 'opacity-100 translate-y-0 scale-100'
                                                : 'opacity-0 -translate-y-4 scale-95 invisible'
                                                }`}
                                        >
                                            <Link
                                                to="/login"
                                                className="block px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#EB010C] transition-all"
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to="/register"
                                                className="block px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#EB010C] transition-all"
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                Register
                                            </Link>
                                        </div>
                                    </div>
                            }
                        </div>

                    </div>

                    {/* Desktop Navigation */}
                    <nav className="flex items-center space-x-10 pt-5 w-full justify-center">
                        {navigationLinks.map((link) => {
                            const active = link.hasDropdown ? isDropdownActive(link.children) : isActiveLink(link.path);

                            return (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
                                    onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
                                >
                                    {link.hasDropdown ? (
                                        <>
                                            <button
                                                className={`transition-all text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-1.5 focus:outline-none ${active || openDropdown === link.name ? 'text-[#EB010C]' : 'text-slate-500 hover:text-slate-900'}`}
                                            >
                                                {link.name}
                                                <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            {/* Dropdown Menu */}
                                            <div
                                                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl py-3 z-50 transition-all duration-300 ease-out transform origin-top ${openDropdown === link.name
                                                    ? 'opacity-100 translate-y-0 scale-100 visible'
                                                    : 'opacity-0 -translate-y-4 scale-95 invisible'
                                                    }`}
                                            >
                                                <div className="absolute top-0 left-0 w-full h-1 bg-[#EB010C]" />
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        to={child.path}
                                                        className={`block px-6 py-3 text-[10px] font-black uppercase tracking-[0.1em] transition-all ${isActiveLink(child.path) ? 'text-[#EB010C] bg-slate-50' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                                                        onClick={() => setOpenDropdown(null)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            target={link.isExternal ? "_blank" : undefined}
                                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                                            className={`transition-all text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-1.5 ${active ? 'text-[#EB010C]' : 'text-slate-500 hover:text-slate-900 group'}`}
                                        >
                                            {link.name}
                                            {link.isExternal && <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                </div>
            </header>


            {/* Mobile Header */}
            <header className="lg:hidden bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm relative overflow-hidden">
                {/* Mobile Background Blob */}
                <div className="absolute inset-0 pointer-events-none z-[-1]">
                    <div className="absolute -left-10 -top-10 w-32 h-32 bg-[#EB010C]/5 blur-2xl rounded-full" />
                </div>

                <div className="flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-2">
                        <div>
                            <Link to="/" translate="no" className="hover:opacity-80 transition-opacity">
                                <img src="/logoupam.png" alt="UPAM Logo" className="h-8 w-auto" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {!isDesktop && <GoogleTranslate />}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-900 hover:text-[#EB010C] transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-[150] overflow-y-auto animate-in fade-in duration-300">
                    <div className="flex items-center justify-between px-4 py-4 bg-white/50 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                            <div>
                                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} translate="no">
                                    <img src="/logoupam.png" alt="UPAM Logo" className="h-8 w-auto" />
                                </Link>
                            </div>
                        </div>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-900">
                            <X size={24} />
                        </button>
                    </div>


                    <div className="px-4 py-6">
                        {/* User Profile Section - Only show if logged in */}
                        {isLoggedIn && (
                            <div className="mb-6 pb-6 border-b">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">

                                        <img src={profileData?.data?.image?.url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.firstName}`} alt={user?.name} className="w-full h-full rounded-full object-cover" />

                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{user?.firstName} {user?.lastName}</div>
                                        <div className="text-sm text-gray-600">Email: {user.email}</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Links */}
                        <nav className="space-y-1">
                            {isLoggedIn && isOnDashboard ? (
                                // Dashboard Menu
                                <>
                                    {dashboardLinks.map((link) => {
                                        const IconComponent = link.icon;
                                        const active = isActiveLink(link.path);
                                        return (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                className={`flex items-center gap-3 px-4 py-3 rounded transition-colors ${active
                                                    ? 'bg-red-600 text-white'
                                                    : 'text-gray-800 hover:bg-gray-100'
                                                    }`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <IconComponent size={20} />
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gray-100 w-full rounded transition-colors"
                                    >
                                        <LogOut size={20} />
                                        Log out
                                    </button>
                                    <Link to="/" className="block text-center text-red-600 font-semibold mt-6" onClick={() => setIsMobileMenuOpen(false)}>
                                        Go to homepage
                                    </Link>
                                </>
                            ) : isLoggedIn ? (
                                // Logged in, on homepage
                                <>
                                    {navigationLinks.map((link) => {
                                        const active = link.hasDropdown ? isDropdownActive(link.children) : isActiveLink(link.path);
                                        return (
                                            <div key={link.name}>
                                                <Link
                                                    to={link.hasDropdown ? '#' : link.path}
                                                    target={!link.hasDropdown && link.isExternal ? "_blank" : undefined}
                                                    rel={!link.hasDropdown && link.isExternal ? "noopener noreferrer" : undefined}
                                                    className={`flex items-center justify-between px-4 py-3 rounded transition-colors ${active ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-800 hover:bg-gray-100'}`}
                                                    onClick={(e) => {
                                                        if (link.hasDropdown) {
                                                            e.preventDefault();
                                                            toggleDropdown(link.name);
                                                        } else {
                                                            setIsMobileMenuOpen(false);
                                                        }
                                                    }}
                                                >
                                                    <span className="flex items-center gap-2">
                                                        {link.name}
                                                        {!link.hasDropdown && link.isExternal && <ExternalLink size={16} />}
                                                    </span>
                                                    {link.hasDropdown && <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />}
                                                </Link>
                                                {/* Mobile Dropdown */}
                                                {link.hasDropdown && openDropdown === link.name && (
                                                    <div className="bg-gray-50 py-1 pl-4">
                                                        {link.children.map((child) => (
                                                            <Link
                                                                key={child.name}
                                                                to={child.path}
                                                                className={`block px-4 py-3 text-sm transition-colors ${isActiveLink(child.path) ? 'text-red-600 font-medium' : 'text-gray-600 hover:text-red-600'}`}
                                                                onClick={() => {
                                                                    setIsMobileMenuOpen(false);
                                                                    setOpenDropdown(null);
                                                                }}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                    <Link to={`/${roles[0]}`} className="block text-center text-red-600 font-semibold mt-6" onClick={() => setIsMobileMenuOpen(false)}>
                                        Go back to Dashboard
                                    </Link>
                                </>
                            ) : (
                                // Not logged in
                                <>
                                    {navigationLinks.map((link) => {
                                        const active = link.hasDropdown ? isDropdownActive(link.children) : isActiveLink(link.path);
                                        return (
                                            <div key={link.name}>
                                                {link.hasDropdown ? (
                                                    <>
                                                        <button
                                                            onClick={() => toggleDropdown(link.name)}
                                                            className={`flex items-center justify-between w-full px-4 py-3 rounded transition-colors ${active || openDropdown === link.name ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-800 hover:bg-gray-100'}`}
                                                        >
                                                            <span>{link.name}</span>
                                                            <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                                        </button>
                                                        {/* Mobile Dropdown */}
                                                        {openDropdown === link.name && (
                                                            <div className="bg-gray-50 py-1 pl-4 animate-in slide-in-from-top-1 duration-200">
                                                                {link.children.map((child) => (
                                                                    <Link
                                                                        key={child.name}
                                                                        to={child.path}
                                                                        className={`block px-4 py-3 text-sm transition-colors ${isActiveLink(child.path) ? 'text-red-600 font-medium' : 'text-gray-600 hover:text-red-600'}`}
                                                                        onClick={() => {
                                                                            setIsMobileMenuOpen(false);
                                                                            setOpenDropdown(null);
                                                                        }}
                                                                    >
                                                                        {child.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        to={link.path}
                                                        target={link.isExternal ? "_blank" : undefined}
                                                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                                                        className={`flex items-center justify-between px-4 py-3 rounded transition-colors ${active ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-800 hover:bg-gray-100'}`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <span className="flex items-center gap-2">
                                                            {link.name}
                                                            {link.isExternal && <ExternalLink size={16} />}
                                                        </span>
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                    <div className="px-4 mt-6 space-y-3">
                                        <button
                                            onClick={() => toggleDropdown('auth-mobile')}
                                            className="w-full text-center border-2 border-gray-800 px-6 py-3 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors flex items-center justify-center gap-2"
                                        >
                                            Register / Login
                                            <ChevronDown size={18} className={`transition-transform duration-200 ${openDropdown === 'auth-mobile' ? 'rotate-180' : ''}`} />
                                        </button>

                                        {openDropdown === 'auth-mobile' && (
                                            <div className="space-y-2 animate-in slide-in-from-top-1 duration-200">
                                                <Link to="/login" className="block w-full text-center bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-800 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                                                    Login
                                                </Link>
                                                <Link to="/register" className="block w-full text-center bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-800 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                                                    Register
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;