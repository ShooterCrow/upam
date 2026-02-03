import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import {
    ChevronDown,
    LayoutDashboard,
    Users,
    Settings,
    FileText,
    BarChart,
    Shield,
    Bell,
    LogOut,
    User,
    CheckCircle,
    CreditCard,
    AlertCircle,
    Headphones
} from 'lucide-react'

const ProfileBox = ({ show = false }) => {
    const { user, roles } = useAuth()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Admin links
    const adminLinks = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Manage Users', path: '/admin/users', icon: Users },
        { name: 'Content', path: '/admin/content', icon: FileText },
        { name: 'Analytics', path: '/admin/analytics', icon: BarChart },
        { name: 'Security', path: '/admin/security', icon: Shield },
        { name: 'Notifications', path: '/admin/notifications', icon: Bell },
        { name: 'Settings', path: '/admin/settings', icon: Settings },
        { name: 'My Profile', path: '/admin/profile', icon: User },
        { name: 'Log out', path: '/logout', icon: LogOut },
    ]

    // User links
    const userLinks = [
        { name: 'Dashboard', path: '/user', icon: LayoutDashboard },
        { name: 'Member Verification', path: '/user/verification', icon: CheckCircle },
        { name: 'Membership Payment', path: '/user/payment', icon: CreditCard },
        { name: 'Emergency Contact', path: '/user/emergency', icon: AlertCircle },
        { name: 'Notification', path: '/user/notifications', icon: Bell },
        { name: 'Support & Help', path: '/user/support', icon: Headphones },
        { name: 'All Members', path: '/user/members', icon: Users },
        { name: 'Members Application', path: '/user/applications', icon: FileText },
        { name: 'Account', path: '/user/account', icon: User },
        { name: 'Log out', path: '/logout', icon: LogOut },
    ]

    // Get links based on user role
    const links = roles.includes('admin') ? adminLinks : userLinks

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 pl-4 border-l border-gray-100 dark:border-slate-800 hover:opacity-80 transition-opacity"
            >
                <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-gray-200">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="hidden sm:block text-left">
                    <p className="text-xs font-bold text-slate-800 dark:text-white leading-tight">
                        {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-[10px] text-green-500 font-medium leading-tight">{user?.email}</p>
                </div>
                <ChevronDown
                    size={14}
                    className={`hidden sm:block text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>

            {/* Dropdown Menu */}
            {(isDropdownOpen && show) && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="py-2 overflow-y-auto">
                        {links.map((link, index) => {
                            const Icon = link.icon
                            const isLogout = link.path === '/logout'
                            const isDivider = isLogout || (user?.role === 'admin' && link.name === 'My Profile') || (user?.role !== 'admin' && link.name === 'Account')

                            return (
                                <React.Fragment key={link.path}>
                                    {isDivider && index > 0 && (
                                        <div className="my-1 border-t border-gray-100 dark:border-slate-800" />
                                    )}
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsDropdownOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${isLogout
                                            ? 'text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-red-600'
                                            }`}
                                    >
                                        <Icon size={16} />
                                        {link.name}
                                    </Link>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileBox