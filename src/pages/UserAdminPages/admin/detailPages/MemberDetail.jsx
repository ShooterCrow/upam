import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    ChevronLeft,
    CheckCircle2,
    XCircle,
    Clock,
    User,
    Mail,
    Phone,
    Globe,
    MapPin,
    Shield,
    FileText,
    Heart,
    Users,
    ExternalLink,
    AlertCircle,
    Loader2,
    Calendar,
    Briefcase
} from 'lucide-react';
import {
    useGetVerificationByIdQuery,
    useUpdateVerificationStatusMutation
} from '../../../platform/verificationApiSlice';

const MemberDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: response, isLoading, isError, refetch } = useGetVerificationByIdQuery(id);
    const [updateStatus, { isLoading: isUpdating }] = useUpdateVerificationStatusMutation();
    const [feedback, setFeedback] = useState('');
    const [showActionPanel, setShowActionPanel] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleStatusUpdate = async (newStatus) => {
        try {
            await updateStatus({
                id: application._id,
                status: newStatus,
                adminFeedback: feedback
            }).unwrap();
            setShowActionPanel(false);
            setFeedback('');
            setSuccessMessage(`Application ${newStatus.toLowerCase()} successfully!`);
            setTimeout(() => setSuccessMessage(null), 5000);
            refetch();
        } catch (err) {
            console.error('Failed to update status:', err);
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <Loader2 className="animate-spin text-red-600" size={48} />
                <p className="text-slate-500 font-medium text-lg">Loading application details...</p>
            </div>
        );
    }

    if (isError || !response?.data) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
                <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                    <AlertCircle size={40} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Application Not Found</h2>
                    <p className="text-slate-500 mt-2 max-w-md">We couldn't find the verification application you're looking for. It may have been deleted or the ID is incorrect.</p>
                </div>
                <button
                    onClick={() => navigate('/admin/members-application')}
                    className="px-6 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-all"
                >
                    Back to Applications
                </button>
            </div>
        );
    }

    const application = response.data;
    const userData = application.user;

    const StatusBadge = ({ status }) => {
        const configs = {
            Pending: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-100', label: 'Under Review' },
            Approved: { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100', label: 'Verified' },
            Rejected: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100', label: 'Rejected' }
        };
        const config = configs[status] || configs.Pending;
        const Icon = config.icon;

        return (
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border ${config.bg} ${config.color} ${config.border} font-bold text-sm`}>
                <Icon size={16} />
                {config.label}
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto pb-20 px-4 sm:px-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-8 border-b border-slate-100 mb-8">
                <div className="space-y-4">
                    <button
                        onClick={() => navigate('/admin/members-application')}
                        className="flex items-center gap-2 text-slate-400 hover:text-slate-800 transition-colors font-medium group"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to applications
                    </button>
                    <div className="flex flex-wrap items-center gap-4">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                            Members Application Details <span className="text-slate-400 font-medium">({userData?.firstName} {userData?.lastName})</span>
                        </h1>
                        <StatusBadge status={application.status} />
                    </div>
                    <p className="text-slate-500 font-medium">Here is the application details from {userData?.firstName} {userData?.lastName}</p>
                </div>

                {application.status === 'Pending' && (
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => { setShowActionPanel(true); setFeedback(''); }}
                            className="px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-slate-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Review Application
                        </button>
                    </div>
                )}
            </div>

            {successMessage && (
                <div className="mb-8 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-3 text-emerald-700 font-bold animate-in slide-in-from-top-4 duration-300">
                    <CheckCircle2 size={20} />
                    {successMessage}
                </div>
            )}

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-12 gap-y-12 bg-white p-10">
                {/* Main Details */}
                <div className="lg:col-span-3 space-y-12">
                    {/* Top Stats Layer */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
                        <DetailItem label="Membership Type" value={application.membershipType} />
                        <DetailItem label="Full Age" value={application.fullLegalAge} />
                        <DetailItem label="Date of Birth" value={application.dateOfBirth ? new Date(application.dateOfBirth).toLocaleDateString() : 'N/A'} />
                        <DetailItem label="Gender" value={application.gender} />
                        <DetailItem label="Country of Residence" value={application.countryOfResidence} />
                        <DetailItem label="Nationality" value={application.nationality} />
                        <DetailItem label="City" value={application.city} />
                        <DetailItem label="State/Province" value={application.stateProvince} />
                    </div>

                    {/* Secondary Layer */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                        <div className="md:col-span-2">
                            <DetailItem label="Tier Classification" value={application.tierClassification} />
                        </div>
                        <DetailItem label="Phone No" value={application.phone} />
                        <div className="md:col-span-2">
                            <DetailItem label="Email Address" value={application.email} />
                        </div>
                    </div>

                    {/* ID & Interests Layer */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                        <div className="space-y-6">
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Government Issued ID Provided</h3>
                            <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 flex items-start gap-4 hover:bg-white hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-red-500  border border-slate-50">
                                    <FileText size={24} />
                                </div>
                                <div className="flex-1 space-y-3">
                                    <div>
                                        <p className="font-bold text-slate-800">ID Document</p>
                                        <p className="text-sm text-slate-500 font-medium mt-0.5">{application.governmentIdType} {application.idNumber && `(${application.idNumber})`}</p>
                                    </div>
                                    {application.idDocumentUrl && (
                                        <a
                                            href={application.idDocumentUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all w-full justify-center"
                                        >
                                            <ExternalLink size={14} />
                                            View documents
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <DetailItem
                                label="Primary Department of Interest"
                                value={application.departmentsOfInterest?.join(', ')}
                            />
                            <DetailItem
                                label="Primary Department of Interest Agreement"
                                value={application.serviceHoursAgreed ? "Agreed" : "Not Agreed"}
                                valueColor="text-blue-500"
                            />
                            <DetailItem
                                label="Membership Benefit Acknowledgement"
                                value={application.benefitsAcknowledged ? "Agreed" : "Not Agreed"}
                                valueColor="text-blue-500"
                            />
                            <DetailItem
                                label="Code of Conduct and Policy Agreement"
                                value={application.termsAgreed ? "Agreed" : "Not Agreed"}
                                valueColor="text-blue-500"
                            />
                        </div>
                    </div>

                    {/* Monetary Section - Note: These would normally come from a payment model, using placeholders as per image */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-100">
                        <DetailItem label="Membership Fee Payment" value="Not Paid" valueColor="text-red-500" />
                        <DetailItem label="Outstanding Payment" value="$ - 32.00" valueColor="text-red-500" />
                        <DetailItem label="Total Spent" value="$ 0.00" />
                        <DetailItem label="Member ID.NO" value="20-10035" />
                    </div>

                    {/* Emergency Contacts */}
                    <div className="space-y-8 pt-8 border-t border-slate-100">
                        <SectionHeader icon={Heart} title="Emergency Contact" />
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            <DetailItem label="Name" value={userData?.emergencyContact?.fullName || 'N/A'} />
                            <DetailItem label="Relationship" value={userData?.emergencyContact?.relationship || 'N/A'} />
                            <DetailItem label="Email" value={userData?.emergencyContact?.email || 'N/A'} />
                            <DetailItem label="Address" value={userData?.emergencyContact?.address || 'N/A'} />
                            <DetailItem label="Country" value={userData?.emergencyContact?.country || 'N/A'} />
                        </div>
                    </div>

                    <div className="space-y-8 pt-8 border-t border-slate-100">
                        <SectionHeader icon={Users} title="Next of Kin" />
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            <DetailItem label="Name" value={userData?.nextOfKin?.fullName || 'N/A'} />
                            <DetailItem label="Relationship" value={userData?.nextOfKin?.relationship || 'N/A'} />
                            <DetailItem label="Email" value={userData?.nextOfKin?.email || 'N/A'} />
                            <DetailItem label="Address" value={userData?.nextOfKin?.address || 'N/A'} />
                            <DetailItem label="Country" value={userData?.nextOfKin?.country || 'N/A'} />
                        </div>
                    </div>

                    {/* Account Verified Banner */}
                    {application.status === 'Approved' && (
                        <div className="bg-emerald-50 border border-emerald-100 rounded-[2rem] p-8 text-center">
                            <h3 className="text-xl font-black text-emerald-800">Account Verified</h3>
                        </div>
                    )}

                    {/* Rejection Feedback */}
                    {application.status === 'Rejected' && (
                        <div className="bg-red-50 border border-red-100 rounded-[2rem] p-8">
                            <h3 className="text-lg font-black text-red-800 mb-2">Application Rejected</h3>
                            <p className="text-red-700 font-medium">Feedback: {application.adminFeedback || 'No specific feedback provided.'}</p>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 space-y-8 ">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="w-24 h-24 rounded-[2rem] bg-slate-50 flex items-center justify-center text-slate-300">
                                <User size={48} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 tracking-tight">{userData?.firstName} {userData?.lastName}</h2>
                                <p className="text-slate-400 font-medium">@{userData?.userName || 'username'}</p>
                            </div>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-slate-50">
                            <SidebarItem icon={Mail} label="Email address" value={userData?.email} />
                            <SidebarItem icon={Phone} label="Phone Number" value={userData?.phone || 'N/A'} />
                            <SidebarItem icon={MapPin} label="Chapter" value={userData?.chapter || 'N/A'} />
                            <SidebarItem icon={Globe} label="Country" value={userData?.country || 'N/A'} />
                            <SidebarItem icon={Calendar} label="Member Since" value={new Date(userData?.createdAt).toLocaleDateString()} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Popup */}
            {showActionPanel && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-lg rounded-[2.5rem] p-10 animate-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Review Application</h2>
                            <button onClick={() => setShowActionPanel(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400">
                                <XCircle size={24} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Administrator Feedback (Optional)</label>
                                <textarea
                                    className="w-full h-32 px-5 py-4 rounded-[1.5rem] bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all outline-none font-medium text-slate-800 placeholder:text-slate-400 text-sm"
                                    placeholder="Enter your comments for the applicant..."
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    disabled={isUpdating}
                                    onClick={() => handleStatusUpdate('Rejected')}
                                    className="flex items-center justify-center gap-2 py-4.5 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-all disabled:opacity-50"
                                >
                                    {isUpdating ? <Loader2 className="animate-spin" size={18} /> : <XCircle size={18} />}
                                    Reject
                                </button>
                                <button
                                    disabled={isUpdating}
                                    onClick={() => handleStatusUpdate('Approved')}
                                    className="flex items-center justify-center gap-2 py-4.5 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-100/50 disabled:opacity-50"
                                >
                                    {isUpdating ? <Loader2 className="animate-spin" size={18} /> : <CheckCircle2 size={18} />}
                                    Approve
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Sub-components
const DetailItem = ({ label, value, valueColor = "text-slate-800" }) => (
    <div className="space-y-1">
        <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{label}</p>
        <p className={`text-sm sm:text-base font-bold tracking-tight leading-tight ${valueColor}`}>{value || 'N/A'}</p>
    </div>
);

const SectionHeader = ({ icon: Icon, title, color = "text-slate-900" }) => (
    <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400  border border-slate-100">
            <Icon size={16} />
        </div>
        <h3 className={`text-xs sm:text-sm font-black uppercase tracking-widest ${color}`}>{title}</h3>
    </div>
);

const SidebarItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 shrink-0">
            <Icon size={18} />
        </div>
        <div className="min-w-0">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1.5">{label}</p>
            <p className="text-sm font-bold text-slate-700 truncate">{value || 'N/A'}</p>
        </div>
    </div>
);

export default MemberDetail;