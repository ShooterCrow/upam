import React, { useState, useEffect } from 'react';
import { Upload, Shield, CheckCircle2, CheckCircle, ChevronRight, Info, AlertCircle, Loader2 } from 'lucide-react';
import { Country, State, City } from 'country-state-city';
import { useSubmitVerificationMutation, useGetMyVerificationQuery } from '../../platform/verificationApiSlice';
import SuccessState from '../../../component/ui/SuccessState';
import ErrorState from '../../../component/ui/ErrorState';
import useAuth from '../../../hooks/useAuth';

const MemberVerification = () => {
    const { data: myVerification, isLoading: isFetching } = useGetMyVerificationQuery();
    const [submitVerification, { isLoading: isSubmitting }] = useSubmitVerificationMutation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const { user } = useAuth();

    const [formData, setFormData] = useState({
        membershipType: '',
        tierClassification: '',
        fullLegalAge: '',
        dateOfBirth: '',
        gender: '',
        phone: '',
        email: '',
        nationality: '',
        countryOfResidence: '',
        city: '',
        stateProvince: '',
        governmentIdType: '',
        idNumber: '',
        departmentsOfInterest: [],
        serviceHoursAgreed: false,
        benefitsAcknowledged: false,
        termsAgreed: false
    });
    const [idFile, setIdFile] = useState(null);
    const [existingIdUrl, setExistingIdUrl] = useState(null);

    // Geographic Data State
    const [countries] = useState(Country.getAllCountries());
    const [residenceStates, setResidenceStates] = useState([]);
    const [residenceCities, setResidenceCities] = useState([]);

    // codes for lookups
    const [selectedCountryCode, setSelectedCountryCode] = useState('');

    // Pre-fill form if verification exists
    useEffect(() => {
        if (myVerification?.data) {
            const data = myVerification.data;
            setFormData({
                membershipType: data.membershipType || '',
                tierClassification: data.tierClassification || '',
                fullLegalAge: data.fullLegalAge || '',
                dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split('T')[0] : '',
                gender: data.gender || '',
                phone: data.phone || '',
                email: data.email || '',
                nationality: data.nationality || '',
                countryOfResidence: data.countryOfResidence || '',
                city: data.city || '',
                stateProvince: data.stateProvince || '',
                governmentIdType: data.governmentIdType || '',
                idNumber: data.idNumber || '',
                departmentsOfInterest: data.departmentsOfInterest || [],
                serviceHoursAgreed: data.serviceHoursAgreed || false,
                benefitsAcknowledged: data.benefitsAcknowledged || false,
                termsAgreed: data.termsAgreed || false
            });
            setExistingIdUrl(data.idDocumentUrl);

            // Re-populate state/city lists
            if (data.countryOfResidence) {
                const country = Country.getAllCountries().find(c => c.name === data.countryOfResidence);
                if (country) {
                    setSelectedCountryCode(country.isoCode);
                    const states = State.getStatesOfCountry(country.isoCode);
                    setResidenceStates(states);

                    if (data.stateProvince) {
                        const state = states.find(s => s.name === data.stateProvince);
                        if (state) {
                            setResidenceCities(City.getCitiesOfState(country.isoCode, state.isoCode));
                        }
                    }
                }
            }
        }
    }, [myVerification]);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setIdFile(files[0]);
        } else if (type === 'checkbox' && name === 'departmentsOfInterest') {
            const updatedDepartments = checked
                ? [...formData.departmentsOfInterest, value]
                : formData.departmentsOfInterest.filter(dept => dept !== value);
            setFormData(prev => ({ ...prev, departmentsOfInterest: updatedDepartments }));
        } else {
            setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
        }
    };

    const handleResidenceCountryChange = (e) => {
        if (myVerification?.data?.status === 'Pending') return;
        const countryName = e.target.value;
        const country = countries.find(c => c.name === countryName);

        setFormData(prev => ({
            ...prev,
            countryOfResidence: countryName,
            stateProvince: '',
            city: ''
        }));

        if (country) {
            setSelectedCountryCode(country.isoCode);
            setResidenceStates(State.getStatesOfCountry(country.isoCode));
        } else {
            setSelectedCountryCode('');
            setResidenceStates([]);
        }
        setResidenceCities([]);
    };

    const handleResidenceStateChange = (e) => {
        if (myVerification?.data?.status === 'Pending') return;
        const stateName = e.target.value;
        const state = residenceStates.find(s => s.name === stateName);

        setFormData(prev => ({
            ...prev,
            stateProvince: stateName,
            city: ''
        }));

        if (state) {
            setResidenceCities(City.getCitiesOfState(selectedCountryCode, state.isoCode));
        } else {
            setResidenceCities([]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (myVerification?.data?.status === 'Pending') return;

        if (!idFile && !existingIdUrl) {
            return setSubmitError("Please upload your government-issued ID document.");
        }

        try {
            const data = new FormData();

            // Append all form fields
            Object.keys(formData).forEach(key => {
                if (key === 'departmentsOfInterest') {
                    data.append(key, JSON.stringify(formData[key]));
                } else {
                    data.append(key, formData[key]);
                }
            });

            // Append the file
            data.append('idDocument', idFile);

            await submitVerification(data).unwrap();
            setIsSubmitted(true);
        } catch (err) {
            setSubmitError(err?.data?.message || "Failed to submit verification application");
        }
    };

    if (isFetching) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
                <Loader2 className="animate-spin text-red-600" size={40} />
                <p className="text-slate-500 font-medium">Loading application status...</p>
            </div>
        );
    }

    if (isSubmitted) {
        // ... same lines 128-135
    }

    const verificationStatus = myVerification?.data?.status;
    console.log(myVerification)
    const isPending = verificationStatus === 'Pending';
    const isRejected = verificationStatus === 'Rejected';
    const adminFeedback = myVerification?.data?.adminFeedback;

    const departments = [
        "Education & Pan African Club", "Business & Entrepreneurship", "Media & Communications",
        "Community Development", "Information Communication Technology", "International Relations",
        "Legal & Policy Affairs", "Engineering", "Finance", "Climate Change", "Human Rights",
        "Integration", "Health", "Partnership & Network", "Agriculture", "Trade & Industries",
        "Emergency Response Team", "Energy"
    ];

    return (
        <form onSubmit={handleSubmit} className="py-4 md:py-8 mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-slate-800">Membership Verification</h1>
                <p className="text-slate-500">Please provide accurate information for your membership verification process.</p>
            </div>

            {isPending && (
                <div className="p-6 bg-yellow-50 border border-yellow-100 rounded-3xl flex items-start gap-4 animate-in slide-in-from-top duration-500">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-yellow-500 shadow-sm border border-yellow-50 shrink-0">
                        <Info size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-yellow-900 text-lg">Application Under Review</h4>
                        <p className="text-yellow-700 mt-1">Your verification application has been submitted and is currently being reviewed by our team. You cannot make changes while the application is pending.</p>
                    </div>
                </div>
            )}

            {isRejected && (
                <div className="p-6 bg-red-50 border border-red-100 rounded-3xl flex items-start gap-4 animate-in slide-in-from-top duration-500">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm border border-red-50 shrink-0">
                        <AlertCircle size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-red-900 text-lg">Application Rejected</h4>
                        <p className="text-red-700 mt-1">Unfortunately, your application was not approved. You can correct the information below and re-submit for verification.</p>
                        {adminFeedback && (
                            <div className="mt-4 p-4 bg-white/50 rounded-2xl border border-red-100/50">
                                <p className="text-xs font-bold text-red-800 uppercase tracking-wider mb-1">Admin Feedback</p>
                                <p className="text-red-900">{adminFeedback}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8 bg-white py-6 lg:py-8">
                    {/* Membership Type */}
                    <Section title="Membership Type (Select One)">
                        <div className="space-y-3">
                            {["General Member", "Institutional Member"].map(type => (
                                <RadioField
                                    key={type}
                                    label={type}
                                    name="membershipType"
                                    value={type}
                                    checked={formData.membershipType === type}
                                    onChange={handleChange}
                                />
                            ))}
                        </div>
                    </Section>

                    {/* Personal Info */}
                    <Section title="Personal Information">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <InputField label="Full Legal Age" name="fullLegalAge" value={formData.fullLegalAge} onChange={handleChange} placeholder="John..." />
                            <InputField label="Date of Birth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
                        </div>
                        <div className="mt-6 flex flex-col gap-3">
                            <label className="text-sm font-bold text-slate-700">Gender</label>
                            <div className="flex gap-8">
                                {["Male", "Female"].map(g => (
                                    <RadioField
                                        key={g}
                                        label={g}
                                        name="gender"
                                        value={g}
                                        checked={formData.gender === g}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                        </div>
                    </Section>

                    {/* Origin Info */}
                    <Section title="Origins">
                        <div className="space-y-5">
                            <SelectField
                                label="Nationality"
                                name="nationality"
                                value={formData.nationality}
                                onChange={handleChange}
                                options={countries.map(c => ({ label: c.name, value: c.name }))}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <SelectField
                                label="Country of Residence"
                                name="countryOfResidence"
                                value={formData.countryOfResidence}
                                onChange={handleResidenceCountryChange}
                                options={countries.map(c => ({ label: c.name, value: c.name }))}
                            />
                            <SelectField
                                label="State / Province"
                                name="stateProvince"
                                value={formData.stateProvince}
                                onChange={handleResidenceStateChange}
                                disabled={!formData.countryOfResidence}
                                options={residenceStates.map(s => ({ label: s.name, value: s.name }))}
                            />
                        </div>
                        <div className="mt-5">
                            <SelectField
                                label="City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                disabled={!formData.stateProvince}
                                options={residenceCities.map(c => ({ label: c.name, value: c.name }))}
                            />
                        </div>
                    </Section>
                </div>

                {/* Right Column */}
                <div className="space-y-8 bg-white py-6 lg:py-8">
                    {/* Tier Classification */}
                    <Section title="Tier Classification">
                        <div className="space-y-3">
                            {["Tier A - Defined Diaspora", "Tier A - Africa & Caribbean"].map(tier => (
                                <RadioField
                                    key={tier}
                                    label={tier + " (Outside Africa & Caribbean)"}
                                    name="tierClassification"
                                    value={tier}
                                    checked={formData.tierClassification === tier}
                                    onChange={handleChange}
                                />
                            ))}
                        </div>
                    </Section>

                    {/* Contact Info */}
                    <Section title="Contact Information">
                        <div className="space-y-5">
                            <InputField label="Phone number (WhatsApp Preferred)" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000" />
                            <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                        </div>
                    </Section>

                    {/* Identity Verification */}
                    <Section title="Identity Verification">
                        <div className="space-y-5">
                            <label className="text-sm font-bold text-slate-700">Government Issued ID Provided</label>
                            <div className="flex gap-8">
                                {["National ID", "Passport"].map(id => (
                                    <RadioField
                                        key={id}
                                        label={id}
                                        name="governmentIdType"
                                        value={id}
                                        checked={formData.governmentIdType === id}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>

                            <div
                                onClick={() => document.getElementById('id-upload').click()}
                                className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer group ${idFile ? 'border-green-200 bg-green-50/30' : 'border-gray-200 bg-slate-50/50 hover:bg-slate-50'}`}
                            >
                                <input
                                    id="id-upload"
                                    type="file"
                                    className="hidden"
                                    onChange={handleChange}
                                    accept=".pdf,.jpg,.jpeg,.png"
                                />
                                <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-100 transition-transform group-hover:-translate-y-1 ${idFile ? 'text-green-500' : 'text-slate-400'}`}>
                                    {idFile ? <CheckCircle2 size={24} /> : <Upload size={24} />}
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-slate-800">
                                        {idFile ? idFile.name : "Upload document"}
                                    </p>
                                    <button type="button" className="mt-2 px-6 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                                        {idFile ? "Change File" : "Choose Files"}
                                    </button>
                                </div>
                            </div>

                            <InputField label="ID Number /Optional" name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="Enter your ID number" />
                        </div>
                    </Section>
                </div>
            </div>

            {/* Departments of Interest */}
            <Section className="py-6" title="Primary Department of Interest (Select One)">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                    {departments.map(dept => (
                        <CheckboxField
                            key={dept}
                            label={dept}
                            name="departmentsOfInterest"
                            value={dept}
                            checked={formData.departmentsOfInterest.includes(dept)}
                            onChange={handleChange}
                        />
                    ))}
                </div>
            </Section>

            {/* Agreements */}
            <Section className="py-6" title="Agreements & Acknowledgements">
                <div className="space-y-8">
                    <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100 flex gap-4">
                        <CheckboxField
                            name="serviceHoursAgreed"
                            checked={formData.serviceHoursAgreed}
                            onChange={handleChange}
                        />
                        <p className="text-sm text-slate-600 leading-relaxed font-medium">
                            I agree to complete a minimum of 12 service hours per month (or 36 per quarter) and log activities in the Digital Activity Register.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-slate-800">Membership Benefit Acknowledgement</h4>
                        <p className="text-sm text-slate-500">By joining UPAM, I understand that eligible benefits may include:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                            {["Education scholarships and grants", "Business and entrepreneurship support", "Life-Care and Wellness programs", "Pension and financial security programs", "Professional networking and global opportunities"].map(b => (
                                <li key={b} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> {b}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4 pt-2">
                            <CheckboxField
                                name="benefitsAcknowledged"
                                checked={formData.benefitsAcknowledged}
                                onChange={handleChange}
                            />
                            <p className="text-sm text-slate-600 font-medium">
                                I acknowledge that all benefits are subject to program-specific terms, conditions, and eligibility requirements.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 border-t border-slate-100 pt-8">
                        <h4 className="font-bold text-slate-800">Code of Conduct and Policy Agreement</h4>
                        <p className="text-sm text-slate-500 italic">I, the undersigned, affirm that:</p>
                        <ul className="space-y-3 pl-2">
                            {[
                                "I support the vision and mission of the United Pan-Africanist Movement (UPAM)",
                                "I agree to abide by the UPAM Constitution, Membership Policy, Code of Conduct, NDA, and all related governing documents",
                                "I understand that failure to comply may result in remediation, suspension, or termination of membership"
                            ].map(p => (
                                <li key={p} className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> {p}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4 pt-4">
                            <CheckboxField
                                name="termsAgreed"
                                checked={formData.termsAgreed}
                                onChange={handleChange}
                            />
                            <p className="text-sm text-blue-600 font-semibold">
                                I agree to all the terms and condition and to abide by all the rules and regulations
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {submitError && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-medium animate-in slide-in-from-top-2">
                    <AlertCircle size={20} />
                    {submitError}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting || !formData.termsAgreed || isPending}
                className="w-full py-5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold shadow-xs shadow-red-100 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
                {isSubmitting && <Loader2 className="animate-spin" size={24} />}
                {isSubmitting ? 'Submitting Application...' : isPending ? 'Application Pending Review' : 'Submit for Verification'}
            </button>
        </form>
    );
};

// Sub-components for cleaner code
const Section = ({ title, children, className }) => (
    <div className={`bg-white px-6 md:px-8 ${className}`}>
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-50 pb-4">{title}</h3>
        {children}
    </div>
);

const InputField = ({ label, ...props }) => (
    <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{label}</label>
        <input
            {...props}
            className="w-full px-4 py-3.5 rounded-xl bg-slate-50/30 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800"
        />
    </div>
);

const RadioField = ({ label, ...props }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center">
            <input type="radio" className="peer sr-only" {...props} />
            <div className="w-5 h-5 rounded-full border-2 border-slate-200 peer-checked:border-red-500 transition-colors" />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-red-500 scale-0 peer-checked:scale-100 transition-transform" />
        </div>
        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">{label}</span>
    </label>
);

const CheckboxField = ({ label, ...props }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center">
            <input type="checkbox" className="peer sr-only" {...props} />
            <div className="w-5 h-5 rounded-md border-2 border-slate-200 peer-checked:bg-red-500 peer-checked:border-red-500 transition-all" />
            <CheckCircle2 className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" size={14} />
        </div>
        {label && <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">{label}</span>}
    </label>
);

const SelectField = ({ label, options, ...props }) => (
    <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">{label}</label>
        <div className="relative">
            <select
                {...props}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-50/30 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-medium text-slate-800 appearance-none disabled:opacity-50"
            >
                <option value="">Select {label}</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronRight size={16} className="rotate-90" />
            </div>
        </div>
    </div>
);

export default MemberVerification;