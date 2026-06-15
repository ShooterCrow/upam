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
    Laptop,
    X,
    Lock,
    CheckCircle2,
    MessageSquare,
    ShieldCheck,
    Phone as PhoneIcon
} from 'lucide-react';
import useAuth from '../../../hooks/useAuth';
import { useGetMeQuery, useUpdateMeMutation } from '../../platform/usersApiSlice';
import LoadingState from '../../../component/ui/LoadingState';
import ErrorState from '../../../component/ui/ErrorState';
import SuccessState from '../../../component/ui/SuccessState';
import { useSendOtpMutation } from '../../authenticationPages/authApiSlice';
import { useVerifyPhoneMutation } from '../../platform/usersApiSlice';
import { useGetSettingsQuery } from '../../platform/settingsApiSlice';

const MyProfile = () => {
    const { user: authUser } = useAuth();
    const { data: profileData, isLoading: isProfileLoading, isError: isProfileError, error: profileFetchError, refetch } = useGetMeQuery();
    const [updateMe, { isLoading: isUpdating }] = useUpdateMeMutation();
    console.log(profileData)

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [updateStatus, setUpdateStatus] = useState({ type: null, message: '' }); // 'success', 'error'
    const [isUpdated, setIsUpdated] = useState(false);

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    // Phone Verification State
    const [sendOtp, { isLoading: isSendingOtp }] = useSendOtpMutation();
    const [verifyPhone, { isLoading: isVerifyingOTP }] = useVerifyPhoneMutation();
    const { data: settingsResponse } = useGetSettingsQuery();
    const [otpId, setOtpId] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otpCode, setOtpCode] = useState("");
    const [otpMethod, setOtpMethod] = useState("whatsapp");
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [phoneError, setPhoneError] = useState("");

    const requirePhoneVerification = settingsResponse?.data?.hotelInfo?.requirePhoneVerification ?? false;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        chapter: '',
        dob: '',
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
                chapter: user.chapter?._id || user.chapter || '',
                dob: user.dob ? user.dob.split('T')[0] : '',
                password: '',
                confirmPassword: ''
            });
            setPhoneVerified(user.phoneVerified || false);
        }
    }, [profileData]);

    const isVerified = profileData?.data?.isVerifiedMember;
    const user = profileData?.data;

    const isFieldLocked = (fieldName) => {
        if (!isVerified) return false;
        const val = user?.[fieldName];
        // For chapter, check if it exists as an object or id
        if (fieldName === 'chapter') {
            return !!(user?.chapter?._id || user?.chapter);
        }
        return !!val;
    };

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
            const formDataToSend = new FormData();

            if (formData.firstName) formDataToSend.append('firstName', formData.firstName);
            if (formData.lastName) formDataToSend.append('lastName', formData.lastName);
            if (formData.email) formDataToSend.append('email', formData.email);
            if (formData.phone) formDataToSend.append('phone', formData.phone);
            if (formData.country) formDataToSend.append('country', formData.country);
            if (formData.chapter) formDataToSend.append('chapter', formData.chapter);
            if (formData.dob) formDataToSend.append('dob', formData.dob);
            if (formData.password) formDataToSend.append('password', formData.password);
            if (imageFile) formDataToSend.append('profileImage', imageFile);

            await updateMe(formDataToSend).unwrap();
            setIsUpdated(true);
            refetch();
        } catch (err) {
            setUpdateStatus({
                type: 'error',
                message: err?.data?.message || "Failed to update profile"
            });
        }
    };

    const handleSendOtp = async (method = "whatsapp") => {
        if (!formData.phone) {
            setPhoneError("Please enter a phone number first");
            return;
        }
        setPhoneError("");
        setOtpMethod(method);
        try {
            const response = await sendOtp({ phone: formData.phone, method }).unwrap();
            setOtpId(response.data.otpId);
            setIsOtpSent(true);
        } catch (err) {
            setPhoneError(err?.data?.message || "Failed to send verification code");
        }
    };

    const handleVerifyOtp = async () => {
        if (otpCode.length !== 6) {
            setPhoneError("Please enter a 6-digit code");
            return;
        }
        setPhoneError("");
        try {
            await verifyPhone({ otpId, otpCode }).unwrap();
            setPhoneVerified(true);
            setIsOtpSent(false);
            setOtpCode("");
            refetch();
        } catch (err) {
            setPhoneError(err?.data?.message || "Invalid verification code");
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


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-slate-800">Account Settings</h1>
                {isVerified && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 slide-in-from-right duration-500">
                        <Shield size={18} className="fill-emerald-700/10" />
                        <span className="text-xs font-black uppercase tracking-widest">Verified Member</span>
                    </div>
                )}
            </div>

            {isVerified && (
                <div className="p-4 bg-blue-50 border border-blue-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-500 border border-blue-50 shrink-0">
                        <Lock size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-blue-900">Identity Protection</h4>
                        <p className="text-blue-700 text-sm mt-1 leading-relaxed">
                            Your identity has been verified. To maintain account integrity, fields you have already filled (such as your name, email, or DOB) are now permanently locked. You can still set any missing information once.
                        </p>
                    </div>
                </div>
            )}

            <form id="profile-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Column */}
                <div className="space-y-6">
                    {/* Profile Picture Card */}
                    <div className="bg-white p-6 border border-gray-100 flex items-center gap-6">
                        <div className="relative w-24 h-24 flex-shrink-0 group cursor-pointer">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-100 shadow-sm">
                                <img
                                    src={imagePreview || user?.image?.url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.firstName}`}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <label className="absolute inset-0 bg-black/50 rounded-full flex flex-col items-center justify-center lg:opacity-20 group-hover:opacity-100 transition-opacity cursor-pointer z-10 backdrop-blur-[2px]">
                                <Upload size={24} className="text-white mb-1 drop-shadow-md" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-wider drop-shadow-md">Change</span>
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                            </label>
                            {isVerified && (
                                <div className="absolute right-0 bottom-0 p-1.5 bg-emerald-500 text-white rounded-full border-2 border-white shadow-sm z-10">
                                    <Shield size={12} />
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-sm">Profile Picture</h3>
                            <p className="text-xs text-slate-400 mt-1 mb-2">Recommended: Square image, at least 200x200px</p>
                            <button
                                type="button"
                                onClick={() => setIsViewModalOpen(true)}
                                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors"
                            >
                                <Eye size={14} />
                                View Photo
                            </button>
                        </div>
                    </div>

                    {/* Personal Information Card */}
                    <div className="bg-white p-6 md:p-8 border border-gray-100 space-y-5">
                        <h3 className="text-xl font-bold text-slate-800">Personal Information</h3>
                        <div className="grid grid-cols-1 gap-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    disabled={isFieldLocked('firstName')}
                                    className={`w-full px-4 py-3  bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800 ${isFieldLocked('firstName') ? 'bg-slate-50 text-slate-500 cursor-not-allowed opacity-75' : ''}`}
                                />
                                {isFieldLocked('firstName') && <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-1 flex items-center gap-1"><Shield size={10} /> Permanently Locked</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="flex justify-between w-full text-xs font-bold text-slate-700 uppercase tracking-wider"><span>Last Name</span> {!formData.lastName && <span className="text-[10px] text-red-600 font-black uppercase tracking-widest flex items-center gap-1"><Shield size={10} /> Lastname Required</span>} </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    disabled={isFieldLocked('lastName')}
                                    className={`w-full px-4 py-3  bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800 ${isFieldLocked('lastName') ? 'bg-slate-50 text-slate-500 cursor-not-allowed opacity-75' : ''}`}
                                />
                                {isFieldLocked('lastName') && <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-1 flex items-center gap-1"><Shield size={10} /> Permanently Locked</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isFieldLocked('email')}
                                    className={`w-full px-4 py-3  bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800 ${isFieldLocked('email') ? 'bg-slate-50 text-slate-500 cursor-not-allowed opacity-75' : ''}`}
                                />
                                {isFieldLocked('email') && <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-1 flex items-center gap-1"><Shield size={10} /> Permanently Locked</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                                    <span>Phone No</span> {!formData.phone ? <span className="text-[10px] text-red-600 font-black uppercase tracking-widest flex items-center gap-1"><Shield size={10} /> Phone Number Required</span> : (requirePhoneVerification && !phoneVerified) && <span className="text-[10px] text-red-600 font-black uppercase tracking-widest flex items-center gap-1"><Shield size={10} /> Unverified Number</span>}
                                    {phoneVerified && <span className="text-[10px] text-emerald-600 font-black uppercase tracking-widest flex items-center gap-1"><CheckCircle2 size={12} /> Verified</span>}
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="+234"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        disabled={isFieldLocked('phone') || isOtpSent}
                                        className={`w-full px-4 py-3  bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800 ${isFieldLocked('phone') ? 'bg-slate-50 text-slate-500 cursor-not-allowed opacity-75' : ''}`}
                                    />
                                    {phoneVerified && <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />}
                                </div>
                                {isFieldLocked('phone') && <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-1 flex items-center gap-1"><Shield size={10} /> Permanently Locked</p>}

                                {/* Phone Verification Logic */}
                                {!phoneVerified && formData.phone && !isOtpSent && (
                                    <div className="mt-4 p-4 bg-slate-50 border border-dashed border-slate-200 space-y-4">
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Verify your phone number:</p>
                                        <div className="flex flex-col sm:flex-row gap-2">
                                            <button
                                                type="button"
                                                onClick={() => handleSendOtp("whatsapp")}
                                                disabled={isSendingOtp}
                                                className="flex-1 flex items-center justify-center gap-2 bg-emerald-500/10 text-emerald-600 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-50"
                                            >
                                                {isSendingOtp && otpMethod === 'whatsapp' ? <Loader2 size={14} className="animate-spin" /> : <MessageSquare size={14} />}
                                                WhatsApp
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleSendOtp("sms")}
                                                disabled={isSendingOtp}
                                                className="flex-1 flex items-center justify-center gap-2 bg-blue-500/10 text-blue-600 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50"
                                            >
                                                {isSendingOtp && otpMethod === 'sms' ? <Loader2 size={14} className="animate-spin" /> : <PhoneIcon size={14} />}
                                                SMS OTP
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {isOtpSent && (
                                    <div className="mt-4 p-4 bg-red-50 border border-red-100 space-y-4 animate-in fade-in slide-in-from-top-2">
                                        <div className="flex items-center justify-between">
                                            <label className="text-[10px] font-black text-red-900 tracking-widest uppercase flex items-center gap-2">
                                                <ShieldCheck size={14} className="text-red-600" /> Enter 6 Digit Code
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => setIsOtpSent(false)}
                                                className="text-[10px] font-black text-red-600 uppercase"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            maxLength={6}
                                            placeholder="000000"
                                            className="w-full bg-white border-2 border-red-100 py-3  text-center text-xl font-black tracking-[0.5em] focus:border-red-500 outline-none transition-all"
                                            value={otpCode}
                                            onChange={(e) => setOtpCode(e.target.value)}
                                        />
                                        <button
                                            type="button"
                                            onClick={handleVerifyOtp}
                                            disabled={isVerifyingOTP || otpCode.length !== 6}
                                            className="w-full py-3 bg-red-600 text-white  font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                        >
                                            {isVerifyingOTP && <Loader2 size={14} className="animate-spin" />}
                                            Verify Code
                                        </button>
                                    </div>
                                )}

                                {phoneError && <p className="text-[10px] text-red-600 font-bold uppercase tracking-wider mt-2">{phoneError}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    disabled={isFieldLocked('dob')}
                                    className={`w-full px-4 py-3  bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800 ${isFieldLocked('dob') ? 'bg-slate-50 text-slate-500 cursor-not-allowed opacity-75' : ''}`}
                                />
                                {isFieldLocked('dob') && <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-1 flex items-center gap-1"><Shield size={10} /> Permanently Locked</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    disabled={isFieldLocked('country')}
                                    className={`w-full px-4 py-3  bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800 ${isFieldLocked('country') ? 'bg-slate-50 text-slate-500 cursor-not-allowed opacity-75' : ''}`}
                                />
                                {isFieldLocked('country') && <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-1 flex items-center gap-1"><Shield size={10} /> Permanently Locked</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Chapter</label>
                                <select
                                    name="chapter"
                                    value={formData.chapter}
                                    onChange={handleChange}
                                    disabled={isFieldLocked('chapter')}
                                    className={`w-full px-4 py-3  bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800 appearance-none ${isFieldLocked('chapter') ? 'bg-slate-50 text-slate-500 cursor-not-allowed opacity-75' : ''}`}
                                >
                                    <option value="">Select a Chapter</option>
                                    {profileData?.chapters?.map((ch) => (
                                        <option key={ch._id} value={ch._id}>
                                            {ch.chapter_name}
                                        </option>
                                    ))}
                                </select>
                                {isFieldLocked('chapter') && <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-1 flex items-center gap-1"><Shield size={10} /> Permanently Locked</p>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col-reverse lg:flex-col h-full lg:max-w-md w-full gap-6">
                    {/* Last Logins Card */}
                    <div className="bg-white p-8 border border-gray-100 flex flex-col max-h-[500px] h-full">
                        <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-gray-50 pb-4 flex-shrink-0">Login History</h3>

                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
                            {user?.lastLogins && user.lastLogins.length > 0 ? (
                                user.lastLogins.map((login, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4  border border-gray-50 bg-slate-50/50 hover:bg-slate-50 transition-colors">
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
                    <div className="bg-white p-6 md:p-8 border border-gray-100 space-y-6">
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
                                        className="w-full px-4 py-3  bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium"
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
                                        className="w-full px-4 py-3  bg-white border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium"
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
                            <div className="p-4 bg-red-50 border border-red-100  flex items-center gap-3 text-red-600 text-sm font-medium animate-in fade-in slide-in-from-top-2">
                                <Shield size={18} className="flex-shrink-0" />
                                {updateStatus.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isUpdating}
                            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white  font-bold shadow-lg shadow-red-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isUpdating && <Loader2 className="animate-spin" size={20} />}
                            {isUpdating ? 'Saving Changes...' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            </form>
            {/* View Profile Picture Modal */}
            {isViewModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="relative bg-white p-2 max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col items-center shadow-2xl animate-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="w-full flex justify-between items-center px-4 py-2 border-b border-gray-100">
                            <h3 className="font-bold text-slate-800 text-sm">Profile Picture</h3>
                            <button
                                type="button"
                                onClick={() => setIsViewModalOpen(false)}
                                className="p-1 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        {/* Image body */}
                        <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
                            <img
                                src={imagePreview || user?.image?.url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.firstName}`}
                                alt="Profile Full Size"
                                className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-sm border border-slate-100"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProfile;
