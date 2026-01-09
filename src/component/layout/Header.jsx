import React, { useState } from 'react';
import { Menu, X, ChevronDown, Home, Info, Users, Grid, Calendar, FileText, UserPlus, Mail, LogOut, Bell, HelpCircle, User, CreditCard, Phone } from 'lucide-react';

// Mock user data - in real app, this would come from your auth context/store
const mockUser = {
    name: "Victor Onyekwere",
    id: "20-1175",
    avatar: null // Could be an image URL
};

const Header = ({ isLoggedIn = false, isOnDashboard = false }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const navigationLinks = [
        { name: 'Home', href: '#', icon: Home },
        { name: 'About Us', href: '#', icon: Info },
        { name: 'Leadership', href: '#', icon: Users },
        { name: 'Platforms & Initiatives', href: '#', icon: Grid },
        { name: 'Events & Conferences', href: '#', icon: Calendar },
        {
            name: 'Resources & Media',
            href: '#',
            icon: FileText,
            hasDropdown: true
        },
        {
            name: 'Membership',
            href: '#',
            icon: UserPlus,
            hasDropdown: true
        },
        { name: 'Get Involved', href: '#', icon: UserPlus },
        { name: 'Contact Us', href: '#', icon: Mail },
    ];

    const dashboardLinks = [
        { name: 'Dashboard', href: '#', icon: Home, isActive: true },
        { name: 'Member Verification', href: '#', icon: User },
        { name: 'Membership Payment', href: '#', icon: CreditCard },
        { name: 'Emergency Contact', href: '#', icon: Phone },
        { name: 'Notification', href: '#', icon: Bell },
        { name: 'Support & Help', href: '#', icon: HelpCircle },
        { name: 'Account', href: '#', icon: User },
    ];

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden lg:block bg-gray-200 shadow-sm mb-20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src="/logoupam.png" alt="UPAM Logo" />
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
                            <div key={link.name} className="relative">
                                <a
                                    href={link.href}
                                    className="text-gray-800 hover:text-red-600 transition-colors text-sm font-medium flex items-center gap-1"
                                    onClick={(e) => {
                                        if (link.hasDropdown) {
                                            e.preventDefault();
                                            toggleDropdown(link.name);
                                        }
                                    }}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={16} />}
                                </a>
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
                            <img src="/logoupam.png" alt="UPAM Logo" />
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
                            {/* <div className="flex gap-0.5">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                            </div> */}
                            <div>
                                <div className="text-red-600 font-bold text-lg leading-none">UNITED</div>
                                <div className="text-green-600 text-xs leading-none">Pan-Africanism Movement</div>
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
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className={`flex items-center gap-3 px-4 py-3 rounded transition-colors ${link.isActive
                                                    ? 'bg-red-600 text-white'
                                                    : 'text-gray-800 hover:bg-gray-100'
                                                    }`}
                                            >
                                                <IconComponent size={20} />
                                                {link.name}
                                            </a>
                                        );
                                    })}
                                    <button className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-gray-100 w-full rounded transition-colors">
                                        <LogOut size={20} />
                                        Log out
                                    </button>
                                    <a href="#" className="block text-center text-red-600 font-semibold mt-6">
                                        Go to homepage
                                    </a>
                                </>
                            ) : isLoggedIn ? (
                                // Logged in, on homepage
                                <>
                                    {navigationLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className={`flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-100 rounded transition-colors ${link.name === 'Home' ? 'bg-gray-100' : ''
                                                }`}
                                        >
                                            <span>{link.name}</span>
                                            {link.hasDropdown && <ChevronDown size={16} />}
                                        </a>
                                    ))}
                                    <a href="#" className="block text-center text-red-600 font-semibold mt-6">
                                        Go back to Dashboard
                                    </a>
                                </>
                            ) : (
                                // Not logged in
                                <>
                                    {navigationLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className={`flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-100 rounded transition-colors ${link.name === 'Home' ? 'bg-gray-100' : ''
                                                }`}
                                        >
                                            <span>{link.name}</span>
                                            {link.hasDropdown && <ChevronDown size={16} />}
                                        </a>
                                    ))}
                                    <button className="w-full border-2 border-gray-800 px-6 py-3 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors mt-6">
                                        Register / Login
                                    </button>
                                </>
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;