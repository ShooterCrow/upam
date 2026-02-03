import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Home, Info, Users, Grid, Calendar, FileText, UserPlus, Mail, LogOut, Bell, HelpCircle, User, CreditCard, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ProfileBox from '../ui/ProfileBox';

// Mock user data - in real app, this would come from your auth context/store
const mockUser = {
    name: "Victor Onyekwere",
    id: "20-1175",
    avatar: null // Could be an image URL
};

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const headerRef = useRef(null);
    const location = useLocation();
    const { isLoggedIn, user, roles } = useAuth();
    const isOnDashboard = location.pathname.startsWith('/user') || location.pathname.startsWith('/admin');

    const navigationLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: '/about', icon: Info },
        { name: 'Leadership', path: '/leadership', icon: Users },
        { name: 'Platforms & Initiatives', path: '/platforms', icon: Grid },
        // { name: 'Events & Conferences', path: '/events', icon: Calendar }, // Route does not exist yet
        {
            name: 'Resources & Media',
            path: '/resources', // Parent path
            icon: FileText,
            hasDropdown: true,
            children: [
                { name: 'Publications', path: '/publications' },
                { name: 'Gallery', path: '/gallery' },
            ]
        },
        {
            name: 'Membership',
            path: '/membership',
            icon: UserPlus,
            hasDropdown: true,
            children: [
                { name: 'Membership Policy', path: '/membership-policy' },
                { name: 'Registration', path: '/register' },
                // { name: 'Search Members', path: '#' },
            ]
        },
        { name: 'Get Involved', path: '/get-involved', icon: UserPlus },
        { name: 'Contact Us', path: '/contact-us', icon: Mail },
    ];

    const dashboardLinks = [
        { name: 'Dashboard', path: '/user', icon: Home },
        { name: 'Member Verification', path: '/user/verification', icon: User },
        { name: 'Membership Payment', path: '/user/payment', icon: CreditCard },
        { name: 'Emergency Contact', path: '/user/emergency', icon: Phone },
        { name: 'Notification', path: '/user/notifications', icon: Bell },
        { name: 'Support & Help', path: '/user/support', icon: HelpCircle },
        { name: 'Account', path: '/user/account', icon: User },
    ];

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

    return (
        <div ref={headerRef}>
            {/* Desktop Header */}
            <header className="hidden lg:block bg-gray-200 shadow-sm mb-0">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/">
                                <img src="/logoupam.png" alt="UPAM Logo" />
                            </Link>
                        </div>


                        {/* Right side actions */}
                        <div className="flex items-center gap-4">
                            {
                                isLoggedIn ? <ProfileBox show={true} /> :
                                    <Link to="/register" className="border-2 border-gray-800 px-4 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                                        Register/Login
                                    </Link>
                            }
                        </div>

                    </div>

                    {/* Desktop Navigation */}
                    <nav className="flex items-center space-x-8 pt-5 w-full justify-center">
                        {navigationLinks.map((link) => {
                            const active = link.hasDropdown ? isDropdownActive(link.children) : isActiveLink(link.path);

                            return (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
                                    onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
                                >
                                    {link.hasDropdown ? (
                                        <>
                                            <button
                                                className={`transition-colors text-sm font-medium flex items-center gap-1 ${active || openDropdown === link.name ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                                            >
                                                {link.name}
                                                <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            {/* Dropdown Menu */}
                                            <div
                                                className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg rounded-md py-2 z-50 transition-all duration-300 ease-in-out transform origin-top ${openDropdown === link.name
                                                    ? 'opacity-100 translate-y-0 visible'
                                                    : 'opacity-0 -translate-y-2 invisible'
                                                    }`}
                                            >
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        to={child.path}
                                                        className={`block px-4 py-2 text-sm transition-colors ${isActiveLink(child.path) ? 'text-red-600 bg-gray-50' : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'}`}
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
                                            className={`transition-colors text-sm font-medium flex items-center gap-1 ${active ? 'text-red-600' : 'text-gray-800 hover:text-red-600'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="lg:hidden bg-gray-200 shadow-sm">
                <div className="flex items-center justify-between px-4 py-4">
                    <div className="flex items-center gap-2">
                        <div>
                            <Link to="/">
                                <img src="/logoupam.png" alt="UPAM Logo" />
                            </Link>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
                    <div className="flex items-center justify-between px-4 py-4 bg-gray-200">
                        <div className="flex items-center gap-2">
                            <div>
                                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                                    <img src="/logoupam.png" alt="UPAM Logo" className="h-8 w-auto" />
                                </Link>
                            </div>
                        </div>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="px-4 py-6">
                        {/* User Profile Section - Only show if logged in */}
                        {isLoggedIn && (
                            <div className="mb-6 pb-6 border-b">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">

                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`} alt={user?.name} className="w-full h-full rounded-full" />

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
                                    <button className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gray-100 w-full rounded transition-colors">
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
                                                    <span>{link.name}</span>
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
                                                        className={`block px-4 py-3 rounded transition-colors ${active ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-800 hover:bg-gray-100'}`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                    <div className="px-4 mt-6">
                                        <Link to="/register" className="block w-full text-center border-2 border-gray-800 px-6 py-3 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                            Register / Login
                                        </Link>
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