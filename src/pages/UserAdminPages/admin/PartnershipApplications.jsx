import React from 'react';
import { Building2, CalendarDays, FileText, Globe, Mail, Phone } from 'lucide-react';
import { useGetPartnersQuery } from '../../partnership/partnersApiSlice';
import ErrorState from '../../../component/ui/ErrorState';
import LoadingState from '../../../component/ui/LoadingState';

const APPLICATION_FIELDS = [
    ['Organization type', 'orgType'],
    ['Year established', 'yearEstablished'],
    ['Country of registration', 'countryRegistration'],
    ['Country/ies of operation', 'countryOperation'],
    ['Partnership type', 'partnershipType'],
    ['Areas of interest', 'areasOfInterest'],
    ['Proposed collaboration', 'collaborationDescription'],
    ['Resources contributed', 'resourcesContribute'],
    ['Commitment level', 'commitmentLevel'],
    ['Legally registered', 'legalStatus'],
    ['Conflict of interest', 'conflictOfInterest']
];

const formatValue = (value) => {
    if (Array.isArray(value)) return value.length ? value.join(', ') : 'Not provided';
    return value || 'Not provided';
};

const PartnershipApplications = () => {
    const { data: response, isLoading, isError, error, refetch } = useGetPartnersQuery();
    const applications = response?.data || [];

    if (isLoading) {
        return (
            <div className="flex h-[70vh] items-center justify-center">
                <LoadingState message="Fetching partnership applications..." />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex h-[70vh] items-center justify-center">
                <ErrorState
                    message={error?.data?.message || 'Could not load partnership applications'}
                    onRetry={refetch}
                />
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-500 pb-10">
            <div className="mb-6 border border-gray-100 bg-white px-6 py-5 shadow-sm">
                <div className="flex items-center gap-3">
                    <FileText className="text-[#EB010C]" />
                    <div>
                        <h1 className="text-xl font-bold text-slate-800">Partnership Applications</h1>
                        <p className="text-sm text-slate-500">
                            {response?.count ?? applications.length} submitted application{applications.length === 1 ? '' : 's'}
                        </p>
                    </div>
                </div>
            </div>

            {applications.length === 0 ? (
                <div className="border border-gray-100 bg-white px-6 py-16 text-center">
                    <Building2 className="mx-auto mb-4 text-slate-300" size={36} />
                    <p className="font-semibold text-slate-700">No partnership applications yet</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {applications.map((application) => (
                        <article key={application._id} className="border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start">
                                <div>
                                    <h2 className="text-lg font-bold text-slate-800">{application.orgName}</h2>
                                    <p className="mt-1 text-sm text-slate-500">{application.orgType}</p>
                                </div>
                                <p className="inline-flex items-center gap-2 text-xs text-slate-500">
                                    <CalendarDays size={14} />
                                    {application.createdAt ? new Date(application.createdAt).toLocaleString() : 'Date unavailable'}
                                </p>
                            </div>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <p className="flex min-w-0 items-start gap-2 break-all text-sm text-slate-700">
                                    <Mail size={16} className="mt-0.5 shrink-0 text-slate-400" />
                                    <a className="hover:text-[#EB010C]" href={`mailto:${application.officialEmail}`}>
                                        {application.officialEmail}
                                    </a>
                                </p>
                                <p className="flex items-start gap-2 text-sm text-slate-700">
                                    <Phone size={16} className="mt-0.5 shrink-0 text-slate-400" />
                                    {application.officialPhone}
                                </p>
                                <p className="flex min-w-0 items-start gap-2 break-all text-sm text-slate-700">
                                    <Globe size={16} className="mt-0.5 shrink-0 text-slate-400" />
                                    {application.website || 'Website not provided'}
                                </p>
                            </div>

                            <dl className="mt-6 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2">
                                {APPLICATION_FIELDS.map(([label, field]) => (
                                    <div key={field} className={field === 'collaborationDescription' || field === 'conflictOfInterest' ? 'sm:col-span-2' : ''}>
                                        <dt className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</dt>
                                        <dd className="mt-1 whitespace-pre-wrap break-words text-sm text-slate-700">
                                            {formatValue(application[field])}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PartnershipApplications;
