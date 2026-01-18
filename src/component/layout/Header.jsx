import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Home, Info, Users, Grid, Calendar, FileText, UserPlus, Mail, LogOut, Bell, HelpCircle, User, CreditCard, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock user data - in real app, this would come from your auth context/store
const mockUser = {
    name: "Victor Onyekwere",
    id: "20-1175",
    avatar: null // Could be an image URL
};

const Header = ({ isLoggedIn = false, isOnDashboard = false }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const headerRef = useRef(null);

    const navigationLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About Us', path: 'about', icon: Info },
        { name: 'Leadership', path: '#', icon: Users },
        { name: 'Platforms & Initiatives', path: '#', icon: Grid },
        { name: 'Events & Conferences', path: '#', icon: Calendar },
        {
            name: 'Resources & Media',
            path: '#',
            icon: FileText,
            hasDropdown: true,
            children: [
                { name: 'Publications', path: '/publications' },
                { name: 'Gallery', path: '/gallery' },
            ]
        },
        {
            name: 'Membership',
            path: '#',
            icon: UserPlus,
            hasDropdown: true,
            children: [
                { name: 'Join Us', path: '/get-involved' },
                { name: 'Member Benefits', path: '#' },
                { name: 'Login', path: '#' },
            ]
        },
        { name: 'Get Involved', path: '/get-involved', icon: UserPlus },
        { name: 'Contact Us', path: '#', icon: Mail },
    ];

    const dashboardLinks = [
        { name: 'Dashboard', path: '#', icon: Home, isActive: true },
        { name: 'Member Verification', path: '#', icon: User },
        { name: 'Membership Payment', path: '#', icon: CreditCard },
        { name: 'Emergency Contact', path: '#', icon: Phone },
        { name: 'Notification', path: '#', icon: Bell },
        { name: 'Support & Help', path: '#', icon: HelpCircle },
        { name: 'Account', path: '#', icon: User },
    ];

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
            <header className="hidden lg:block bg-gray-200 shadow-sm mb-20">
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
                            {/* Language Selector */}
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-800">
                                <span className="flex items-center gap-1">
                                    <span className="text-green-600">●</span>
                                    <span className="text-yellow-500">●</span>
                                    <span className="text-red-600">●</span>
                                </span>
                                ENG
                                <ChevronDown size={16} />
                            </button>

                            {/* Register/Login Button */}
                            <button className="border-2 border-gray-800 px-6 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                                Register/Login
                            </button>
                        </div>

                    </div>

                    {/* Desktop Navigation */}
                    <nav className="flex items-center space-x-8 pt-5 w-full justify-center">
                        {navigationLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
                                onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
                            >
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            className={`text-gray-800 hover:text-red-600 transition-colors text-sm font-medium flex items-center gap-1 ${openDropdown === link.name ? 'text-red-600' : ''}`}
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
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
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
                                        className="text-gray-800 hover:text-red-600 transition-colors text-sm font-medium flex items-center gap-1"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="lg:hidden bg-gray-200 shadow-sm mb-10">
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
                                        {mockUser.avatar ? (
                                            <img src={mockUser.avatar} alt={mockUser.name} className="w-full h-full rounded-full" />
                                        ) : (
                                            <User size={24} className="text-white" />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{mockUser.name}</div>
                                        <div className="text-sm text-gray-600">ID No.: {mockUser.id}</div>
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
                                        return (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                className={`flex items-center gap-3 px-4 py-3 rounded transition-colors ${link.isActive
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
                                    {navigationLinks.map((link) => (
                                        <div key={link.name}>
                                            <Link
                                                to={link.path}
                                                className={`flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-100 rounded transition-colors ${link.path === '/' ? 'bg-gray-100' : ''
                                                    }`}
                                                onClick={() => {
                                                    if (!link.hasDropdown) setIsMobileMenuOpen(false);
                                                    else toggleDropdown(link.name);
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
                                                            className="block px-4 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
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
                                    ))}
                                    <Link to="/dashboard" className="block text-center text-red-600 font-semibold mt-6" onClick={() => setIsMobileMenuOpen(false)}>
                                        Go back to Dashboard
                                    </Link>
                                </>
                            ) : (
                                // Not logged in
                                <>
                                    {navigationLinks.map((link) => (
                                        <div key={link.name}>
                                            {link.hasDropdown ? (
                                                <>
                                                    <button
                                                        onClick={() => toggleDropdown(link.name)}
                                                        className="flex items-center justify-between w-full px-4 py-3 text-gray-800 hover:bg-gray-100 rounded transition-colors"
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
                                                                    className="block px-4 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
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
                                                    className={`block px-4 py-3 text-gray-800 hover:bg-gray-100 rounded transition-colors ${link.path === '/' ? 'bg-gray-100' : ''
                                                        }`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                    <div className="px-4 mt-6">
                                        <button className="w-full border-2 border-gray-800 px-6 py-3 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                                            Register / Login
                                        </button>
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