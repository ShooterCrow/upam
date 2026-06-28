import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Loader2, User } from 'lucide-react';
import { useGetUsersQuery } from '../../pages/platform/usersApiSlice';

const SearchableUserSelect = ({ value, onChange, disabled }) => {
    const { data: usersData, isLoading } = useGetUsersQuery({ limit: 1000 });
    const users = usersData?.data || [];

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const wrapperRef = useRef(null);

    const selectedUser = users.find(u => u._id === value);

    useEffect(() => {
        if (selectedUser && !isOpen) {
            setSearchTerm(`${selectedUser.firstName} ${selectedUser.lastName}`);
        } else if (!selectedUser && !isOpen) {
            setSearchTerm('');
        }
    }, [selectedUser, isOpen]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredUsers = users.filter(user => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        const email = user.email?.toLowerCase() || '';
        const search = searchTerm.toLowerCase();
        return fullName.includes(search) || email.includes(search);
    });

    return (
        <div ref={wrapperRef} className="relative w-full">
            <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setIsOpen(true);
                        if (e.target.value === '' && value) {
                            onChange(''); // Clear selection if input is cleared
                        }
                    }}
                    onFocus={() => setIsOpen(true)}
                    disabled={disabled || isLoading}
                    placeholder={isLoading ? "Loading users..." : "Search by name or email..."}
                    className="w-full pl-10 pr-10 py-3.5 bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm font-semibold text-slate-700 outline-none"
                />

                {isLoading && (
                    <Loader2 size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 animate-spin" />
                )}

                {value && !isLoading && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onChange('');
                            setSearchTerm('');
                            setIsOpen(true);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                        <X size={16} />
                    </button>
                )}
            </div>

            {isOpen && !disabled && !isLoading && (
                <div className="absolute z-[200] mt-2 w-full bg-white shadow-sm border border-slate-100 max-h-60 overflow-y-auto">
                    {filteredUsers.length === 0 ? (
                        <div className="p-4 text-center text-sm text-slate-500">No users found.</div>
                    ) : (
                        <div className="py-2">
                            {filteredUsers.map(user => (
                                <div
                                    key={user._id}
                                    onClick={() => {
                                        onChange(user._id);
                                        setIsOpen(false);
                                        setSearchTerm(`${user.firstName} ${user.lastName}`);
                                    }}
                                    className={`px-4 py-3 hover:bg-slate-50 cursor-pointer flex items-center gap-3 transition-colors ${value === user._id ? 'bg-blue-50/50' : ''}`}
                                >
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden shrink-0">
                                        {user.image?.url ? (
                                            <img src={user.image.url} alt="" className="w-full h-full object-cover" />
                                        ) : (
                                            <User size={14} className="text-slate-400" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">{user.firstName} {user.lastName}</p>
                                        <p className="text-xs text-slate-500">{user.email}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchableUserSelect;
