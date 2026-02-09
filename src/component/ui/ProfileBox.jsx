import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useLogoutMutation } from '../../pages/authenticationPages/authApiSlice'
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
import { ADMIN_LINKS, ADMIN_BOTTOM_LINKS, USER_LINKS, USER_BOTTOM_LINKS } from '../../constants/navigation'

const ProfileBox = ({ show = false }) => {
    const { user, roles } = useAuth()
    const navigate = useNavigate()
    const [logout] = useLogoutMutation()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    const handleLogout = async () => {
        try {
            await logout().unwrap()
            navigate('/login')
        } catch (err) {
            console.error('Failed to logout:', err)
        }
    }

    // Admin links
    const adminLinks = ADMIN_LINKS.concat(ADMIN_BOTTOM_LINKS);

    // User links
    const userLinks = USER_LINKS.concat(USER_BOTTOM_LINKS);

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
                className="flex items-center gap-3 pl-4 border-l border-gray-100 hover:opacity-80 transition-opacity"
            >
                <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-gray-200">
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.firstName}`}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="hidden sm:block text-left">
                    <p className="text-xs font-bold text-slate-800 leading-tight">
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
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="py-2 overflow-y-auto">
                        {links.map((link, index) => {
                            const Icon = link.icon
                            const isLogout = link.path === '/logout'
                            const isDivider = isLogout || (user?.role === 'admin' && link.name === 'Account') || (user?.role !== 'admin' && link.name === 'Account')

                            return (
                                <React.Fragment key={link.path}>
                                    {isDivider && index > 0 && (
                                        <div className="my-1 border-t border-gray-100" />
                                    )}
                                    {isLogout ? (
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors text-red-600 hover:bg-red-50 w-full text-left"
                                        >
                                            <Icon size={16} />
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsDropdownOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${isLogout
                                                ? 'text-red-600 hover:bg-red-50'
                                                : 'text-slate-700 hover:bg-slate-50 hover:text-red-600'
                                                }`}
                                        >
                                            <Icon size={16} />
                                            {link.name}
                                        </Link>
                                    )}
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