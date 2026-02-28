import React, { useState } from 'react';
import {
    Upload,
    Eye,
    EyeOff,
    User,
    Mail,
    MapPin,
    Shield,
    Globe,
    Building2,
    Loader2,
    Smartphone,
    Laptop
} from 'lucide-react';
import useAuth from '../../../hooks/useAuth';
import { useGetMeQuery, useUpdateMeMutation } from '../../platform/usersApiSlice';
import LoadingState from '../../../component/ui/LoadingState';
import ErrorState from '../../../component/ui/ErrorState';
import SuccessState from '../../../component/ui/SuccessState';

const MyProfile = () => {
    const { user: authUser } = useAuth();
    const { data: profileData, isLoading: isProfileLoading, isError: isProfileError, error: profileFetchError, refetch } = useGetMeQuery();
    const [updateMe, { isLoading: isUpdating }] = useUpdateMeMutation();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [updateStatus, setUpdateStatus] = useState({ type: null, message: '' }); // 'success', 'error'
    const [isUpdated, setIsUpdated] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        chapter: '',
        password: '',
        confirmPassword: ''
    });

    // Populate form data when profile data is loaded
    React.useEffect(() => {
        if (profileData?.data) {
            const user = profileData.data;
            setFormData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || '',
                phone: user.phone || '',
                country: user.country || '',
                chapter: user.chapter || '',
                password: '',
                confirmPassword: ''
            });
        }
    }, [profileData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdateStatus({ type: null, message: '' });

        if (formData.password && formData.password !== formData.confirmPassword) {
            return setUpdateStatus({ type: 'error', message: "Passwords do not match" });
        }

        try {
            const updateData = { ...formData };
            if (!updateData.password) {
                delete updateData.password;
                delete updateData.confirmPassword;
            }

            await updateMe(updateData).unwrap();
            setIsUpdated(true);
            refetch();
        } catch (err) {
            setUpdateStatus({
                type: 'error',
                message: err?.data?.message || "Failed to update profile"
            });
        }
    };

    if (isProfileLoading) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <LoadingState message="Fetching your profile..." />
            </div>
        );
    }

    if (isProfileError) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <ErrorState
                    message={profileFetchError?.data?.message || "Could not load profile data"}
                    onRetry={refetch}
                />
            </div>
        );
    }

    if (isUpdated) {
        return (
            <div className="h-[70vh] flex items-center justify-center">
                <SuccessState
                    title="Profile Updated!"
                    message="Your changes have been saved successfully."
                    actionLabel="Back to Profile"
                    onAction={() => setIsUpdated(false)}
                />
            </div>
        );
    }

    const user = profileData?.data;

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <h1 className="text-2xl font-bold text-slate-800">Account Settings</h1>

            <form id="profile-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Column */}
                <div className="space-y-6">
                    {/* Profile Picture Card */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-6">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 flex-shrink-0">
                            <img
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.firstName}`}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            <button type="button" className="absolute bottom-0 right-0 p-1.5 bg-white border border-gray-100 rounded-full hover:bg-slate-50 transition-colors z-10">
                                <Upload size={12} className="text-slate-600" />
                            </button>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-sm">Profile Picture</h3>
                            <p className="text-xs text-slate-400 mt-1">Recommended: Square image, at least 200x200px</p>
                        </div>
                    </div>

                    {/* Personal Information Card */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 space-y-5">
                        <h3 className="text-xl font-bold text-slate-800">Personal Information</h3>
                        <div className="grid grid-cols-1 gap-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone No</label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="+234"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Chapter</label>
                                <input
                                    type="text"
                                    name="chapter"
                                    value={formData.chapter}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col-reverse lg:flex-col h-full lg:max-w-md w-full gap-6">
                    {/* Last Logins Card */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col max-h-[500px] h-full">
                        <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-gray-50 pb-4 flex-shrink-0">Login History</h3>

                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
                            {user?.lastLogins && user.lastLogins.length > 0 ? (
                                user.lastLogins.map((login, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-gray-50 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 text-slate-400 flex-shrink-0">
                                            {login.deviceType?.toLowerCase().includes('android') || login.deviceType?.toLowerCase().includes('phone') || login.deviceType?.toLowerCase().includes('iphone') ? (
                                                <Smartphone size={20} />
                                            ) : (
                                                <Laptop size={20} />
                                            )}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="font-bold text-slate-800 text-sm truncate" title={login.deviceType}>
                                                {login.deviceType || 'Unknown Device'}
                                            </p>
                                            <p className="text-xs text-slate-400">
                                                {new Date(login.loginDate).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                                    <Shield size={48} className="opacity-10 mb-4" />
                                    <p className="text-xl font-medium text-slate-800">No login history</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Security Card */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 space-y-6">
                        <h3 className="text-xl font-bold text-slate-800">Security</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700">New Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium"
                                        autoComplete="new-password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium"
                                        autoComplete="new-password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {updateStatus.type === 'error' && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-medium animate-in fade-in slide-in-from-top-2">
                                <Shield size={18} className="flex-shrink-0" />
                                {updateStatus.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isUpdating}
                            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold shadow-lg shadow-red-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isUpdating && <Loader2 className="animate-spin" size={20} />}
                            {isUpdating ? 'Saving Changes...' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MyProfile;
