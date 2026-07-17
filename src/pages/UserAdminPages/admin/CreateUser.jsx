import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Shield, Loader2, Info } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from '../../authenticationPages/authSlice';
import { useGetChaptersQuery } from './chapters/chaptersApiSlice';

const CreateUser = () => {
    const navigate = useNavigate();
    const token = useSelector(selectCurrentToken);
    const currentUser = useSelector(selectCurrentUser);

    // Determine if the logged-in user is a representative (not admin/manager)
    const currentRoles = currentUser?.roles || [];
    const isRepresentative =
        currentRoles.includes('representative') &&
        !currentRoles.includes('admin') &&
        !currentRoles.includes('manager');

    // Fetch chapters for the dropdown
    const { data: chaptersData, isLoading: chaptersLoading } = useGetChaptersQuery();
    const chapters = chaptersData?.data || chaptersData || [];

    // For representatives, pre-fill their own chapter & country and lock it
    const repChapterId = isRepresentative ? (currentUser?.chapter?._id || currentUser?.chapter || '') : '';
    const repChapterName = isRepresentative ? (currentUser?.chapter?.chapter_name || '') : '';
    const repCountry = isRepresentative ? (currentUser?.country || repChapterName) : '';

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        chapter: repChapterId,
        country: repCountry,
        roles: 'user'
    });

    const defaultPassword = '12345678';
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // When chapter is selected, auto-derive country from chapter_name
    const handleChapterChange = (e) => {
        const selectedId = e.target.value;
        const selectedChapter = chapters.find(c => c._id === selectedId);
        setFormData(prev => ({
            ...prev,
            chapter: selectedId,
            country: selectedChapter ? selectedChapter.chapter_name : ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const body = {
                ...formData,
                password: defaultPassword,
                roles: isRepresentative ? ['user'] : [formData.roles],
            };

            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/admin-create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(body)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Failed to create user');
            }

            setSuccess(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                gender: '',
                dob: '',
                chapter: '',
                country: '',
                roles: 'user'
            });

            setTimeout(() => {
                navigate('/dashboard/all-members');
            }, 2000);

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="animate-in fade-in duration-500 pb-10 max-w-4xl mx-auto mt-6">
            <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
                            <UserPlus className="text-blue-600" /> Administrative Registration
                        </h2>
                        <p className="text-slate-500 mt-2 font-medium">Create a new platform user directly and assign roles.</p>
                    </div>
                </div>


                <div className="p-6 md:p-8">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 border border-red-100 font-bold flex items-center gap-3">
                            <Shield className="shrink-0" /> {error}
                        </div>
                    )}
                    {success && (
                        <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-100 font-bold flex items-center gap-3">
                            <Shield className="shrink-0" /> User successfully created! Redirecting to members...
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">First Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text" name="firstName" required
                                    value={formData.firstName} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800"
                                    placeholder="Enter first name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text" name="lastName" required
                                    value={formData.lastName} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800"
                                    placeholder="Enter last name"
                                />
                            </div>
                        </div>

                        {/* Contact row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email" name="email" required
                                    value={formData.email} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800"
                                    placeholder="user@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Phone Number</label>
                                <input
                                    type="text" name="phone"
                                    value={formData.phone} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800"
                                    placeholder="+1234567890"
                                />
                            </div>
                        </div>

                        {/* Gender & DOB */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Gender</label>
                                <select
                                    name="gender" value={formData.gender} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 appearance-none"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Date of Birth</label>
                                <input
                                    type="date" name="dob"
                                    value={formData.dob} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800"
                                />
                            </div>
                        </div>

                        {/* Chapter field — locked for reps, dropdown for admins */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Chapter</label>
                                {isRepresentative ? (
                                    <div className="w-full px-4 py-3 bg-slate-100 border border-slate-200 text-slate-700 font-medium flex items-center justify-between">
                                        <span>{repChapterName || 'Your chapter'}</span>
                                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-200 px-2 py-0.5">Locked</span>
                                    </div>
                                ) : (
                                    <select
                                        name="chapter"
                                        value={formData.chapter}
                                        onChange={handleChapterChange}
                                        disabled={chaptersLoading}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 appearance-none disabled:opacity-50"
                                    >
                                        <option value="">
                                            {chaptersLoading ? 'Loading chapters...' : 'Select Chapter'}
                                        </option>
                                        {chapters.map(ch => (
                                            <option key={ch._id} value={ch._id}>
                                                {ch.chapter_name}
                                            </option>
                                        ))}
                                    </select>
                                )}
                                {formData.country && (
                                    <p className="text-xs text-slate-500 mt-1">
                                        Country will be set to: <span className="font-bold text-slate-700">{formData.country}</span>
                                    </p>
                                )}
                            </div>
                            {!isRepresentative && (
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Initial Role <span className="text-red-500">*</span></label>
                                    <select
                                        name="roles" value={formData.roles} onChange={handleChange} required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-slate-800 appearance-none"
                                    >
                                        <option value="user">USER</option>
                                        <option value="manager">MANAGER</option>
                                        <option value="representative">REPRESENTATIVE</option>
                                        <option value="admin">ADMIN</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* Default password display */}
                        <div className="p-4 bg-slate-50 border border-dashed border-slate-300 mt-6 flex items-center justify-between">
                            <div>
                                <span className="block text-sm font-bold text-slate-700">Default Password</span>
                                <span className="block text-xs font-medium text-slate-500 mt-1">The user will be able to log in with this password immediately.</span>
                            </div>
                            <div className="font-mono bg-slate-200 text-slate-800 px-4 py-2 rounded-lg font-bold tracking-widest text-lg">
                                {defaultPassword}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex justify-end">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all disabled:opacity-50 flex items-center gap-2"
                            >
                                {isLoading && <Loader2 size={18} className="animate-spin" />}
                                {isLoading ? 'Creating...' : 'Create User'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
