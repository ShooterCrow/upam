import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetChapterByIdQuery } from '../chapters/chaptersApiSlice';
import { Globe, Users, User, ArrowLeft, Search, Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react';
import LoadingState from '../../../../component/ui/LoadingState';
import ErrorState from '../../../../component/ui/ErrorState';

const ChapterDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const { data: chapterData, isLoading, isError, error, refetch } = useGetChapterByIdQuery(id);

    if (isLoading) return <LoadingState message="Loading chapter details..." />;
    if (isError) return <ErrorState message={error?.data?.message || "Error loading chapter"} onRetry={refetch} />;

    const chapter = chapterData;
    const representative = chapterData.representative;
    const members = chapterData.members || [];

    const filteredMembers = members.filter(m =>
        `${m.firstName} ${m.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.importedMember_id?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="animate-in fade-in duration-500 pb-10">
            {/* Header / Breadcrumbs */}
            <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">{chapter.chapter_name}</h2>
                        <p className="text-xs text-slate-500">Chapter Detail & Analytics</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100 flex items-center gap-1">
                        <Users size={10} />
                        {members.length} Members
                    </div>
                </div>
            </div>

            <div className="py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Information Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Chapter Card */}
                    <div className="bg-white border border-gray-100 p-6 shadow-sm overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500 opacity-50" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                {chapter.chapter_flag ? (
                                    <img
                                        src={chapter.chapter_flag}
                                        alt={chapter.chapter_name}
                                        className="w-16 h-10 object-cover rounded shadow-md border-2 border-white"
                                    />
                                ) : (
                                    <div className="w-16 h-10 bg-slate-100 flex items-center justify-center rounded border border-slate-200">
                                        <Globe size={24} className="text-slate-300" />
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-bold text-slate-800">{chapter.chapter_name}</h3>
                                    <p className="text-xs text-slate-400 font-mono">ID: {chapter.chapter_id}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                                        <Globe size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Slug</p>
                                        <p className="text-sm text-slate-700 font-medium">{chapter.chapter_url}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                                        <Calendar size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">Created At</p>
                                        <p className="text-sm text-slate-700 font-medium">{formatDate(chapter.createdAt)}</p>
                                    </div>
                                </div>

                                {chapter.chapter_note && (
                                    <div className="flex gap-3">
                                        <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                                            <MapPin size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase">About Chapter</p>
                                            <p className="text-sm text-slate-600 leading-relaxed italic">{chapter.chapter_note}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* National Representative Card */}
                    <div className="bg-white border border-gray-100 p-6 shadow-sm overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600" />
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                            <User size={14} className="text-blue-500" />
                            National Representative
                        </h3>

                        {representative ? (
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full border-2 border-blue-50 overflow-hidden bg-slate-50">
                                        {representative.image?.url ? (
                                            <img src={representative.image.url} alt={representative.firstName} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                <User size={30} />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{representative.firstName} {representative.lastName}</h4>
                                        <p className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded w-fit mt-1">
                                            {representative.title || representative.position || 'National Representative'}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-slate-50">
                                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                                        <Mail size={14} className="text-slate-400" />
                                        <span>{representative.email}</span>
                                    </div>
                                    {representative.phone && (
                                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                                            <Phone size={14} className="text-slate-400" />
                                            <span>{representative.phone}</span>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={() => navigate(`/admin/all-members/${representative._id}`)}
                                    className="w-full py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2"
                                >
                                    <ExternalLink size={12} />
                                    View Full Profile
                                </button>
                            </div>
                        ) : (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 text-slate-200">
                                    <User size={30} />
                                </div>
                                <p className="text-sm text-slate-400">No National Representative assigned to this chapter yet.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Member List Section */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full min-h-[500px]">
                        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h3 className="font-bold text-slate-800">Chapter Members</h3>
                            </div>

                            <div className="relative">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search members..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:border-blue-300 w-full md:w-64"
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto flex-1">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/30">
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Member</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                        {/* <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {filteredMembers.map((m) => (
                                        <tr onClick={() => navigate(`/admin/all-members/${m._id}`)} key={m._id} className="group cursor-pointer hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                                                        {m.image?.url ? <img src={m.image.url} alt={m.firstName} className="w-full h-full object-cover" /> : <User size={18} className="m-auto text-slate-300" />}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-800">{m.firstName} {m.lastName}</p>
                                                        <p className="text-[10px] text-slate-400 font-mono tracking-tighter uppercase">{m.importedMember_id || 'ID Pending'}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col gap-1">
                                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded w-fit ${m.isVerifiedMember ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                                                        {m.isVerifiedMember ? 'Verified Member' : 'Unverified'}
                                                    </span>
                                                    <p className="text-[10px] font-medium text-slate-400 truncate max-w-[150px]">
                                                        {m.title || m.position || m.email}
                                                    </p>
                                                </div>
                                            </td>
                                            {/* <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => navigate(`/admin/all-members/${m._id}`)}
                                                    className="text-xs font-bold text-blue-600 hover:underline"
                                                >
                                                    Detail
                                                </button>
                                            </td> */}
                                        </tr>
                                    ))}
                                    {filteredMembers.length === 0 && (
                                        <tr>
                                            <td colSpan="3" className="py-20 text-center">
                                                <Users size={32} className="mx-auto text-slate-200 mb-2" />
                                                <p className="text-sm text-slate-400">No members found in this chapter.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChapterDetail;
