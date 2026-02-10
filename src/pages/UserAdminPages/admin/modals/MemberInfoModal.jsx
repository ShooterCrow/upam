import React from 'react';
import {
    X,
    User,
    Mail,
    Phone,
    Globe,
    MapPin,
    Calendar,
    Heart,
    Users,
    IdCard,
    Shield
} from 'lucide-react';

const MemberInfoModal = ({ isOpen, onClose, member }) => {
    if (!isOpen || !member) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-4xl rounded-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="sticky top-0 bg-white px-8 py-6 border-b border-gray-100 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                            <User size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">Member Information</h2>
                            <p className="text-sm text-slate-500 font-medium">Detailed profile for {member.firstName} {member.lastName}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400 hover:text-slate-600"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 space-y-10">
                    {/* Basic Info */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <InfoItem icon={User} label="Full Name" value={`${member.firstName} ${member.lastName}`} />
                        <InfoItem icon={Mail} label="Email Address" value={member.email} />
                        <InfoItem icon={Phone} label="Phone Number" value={member.phone || 'N/A'} />
                        <InfoItem icon={Globe} label="Country" value={member.country || 'N/A'} />
                        <InfoItem icon={MapPin} label="Chapter" value={member.chapter || 'N/A'} />
                        <InfoItem icon={IdCard} label="Member ID" value={member._id} />
                        <InfoItem icon={Calendar} label="Member Since" value={new Date(member.createdAt).toLocaleDateString()} />
                        <InfoItem icon={Shield} label="Roles" value={member.roles?.join(', ') || 'user'} />
                        <InfoItem icon={User} label="Username" value={member.userName ? `@${member.userName}` : 'N/A'} />
                    </section>

                    <div className="h-px bg-slate-50" />

                    {/* Emergency Contact */}
                    <section className="space-y-6 text-slate-900">
                        <div className="flex items-center gap-3">
                            <Heart className="text-red-500" size={20} />
                            <h3 className="text-sm font-black uppercase tracking-widest ">Emergency Contact</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                            <InfoItem label="Full Name" value={member.emergencyContact?.fullName || 'N/A'} />
                            <InfoItem label="Relationship" value={member.emergencyContact?.relationship || 'N/A'} />
                            <InfoItem label="Phone Number" value={member.emergencyContact?.phone || 'N/A'} />
                            <InfoItem label="Email" value={member.emergencyContact?.email || 'N/A'} />
                            <div className="md:col-span-2">
                                <InfoItem label="Address" value={member.emergencyContact?.address || 'N/A'} />
                            </div>
                        </div>
                    </section>

                    <div className="h-px bg-slate-50" />

                    {/* Next of Kin */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Users className="text-blue-500" size={20} />
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Next of Kin</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <InfoItem label="Full Name" value={member.nextOfKin?.fullName || 'N/A'} />
                            <InfoItem label="Relationship" value={member.nextOfKin?.relationship || 'N/A'} />
                            <InfoItem label="Phone Number" value={member.nextOfKin?.phone || 'N/A'} />
                            <InfoItem label="Email" value={member.nextOfKin?.email || 'N/A'} />
                            <div className="md:col-span-2">
                                <InfoItem label="Address" value={member.nextOfKin?.address || 'N/A'} />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 bg-slate-50/50 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                        Close Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-slate-400">
            {Icon && <Icon size={14} />}
            <p className="text-[10px] font-black uppercase tracking-widest">{label}</p>
        </div>
        <p className="text-sm font-bold text-slate-800 leading-tight">{value || 'N/A'}</p>
    </div>
);

export default MemberInfoModal;
