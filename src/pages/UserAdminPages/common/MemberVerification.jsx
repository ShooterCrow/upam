import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Upload, Shield, CheckCircle2, CheckCircle, ChevronRight, Info, AlertCircle, Loader2 } from 'lucide-react';
import { Country, State, City } from 'country-state-city';
import { useSubmitVerificationMutation, useGetMyVerificationQuery } from '../../platform/verificationApiSlice';
import SuccessState from '../../../component/ui/SuccessState';
import ErrorState from '../../../component/ui/ErrorState';
import useAuth from '../../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCompleteness } from '../../authenticationPages/authSlice';

const MemberVerification = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const completeness = useSelector(selectCompleteness);
    const { data: myVerification, isLoading: isFetching } = useGetMyVerificationQuery();
    const [submitVerification, { isLoading: isSubmitting }] = useSubmitVerificationMutation();
    const [submitError, setSubmitError] = useState(null);
    const [wasSaving, setWasSaving] = useState(false);
    const { user } = useAuth();
    const fullName = user?.firstName + ' ' + user?.lastName;
    const DRAFT_KEY = React.useMemo(() => `urbanice_member_verification_draft_${user?.id}`, [user?.id]);
    const [isInitialized, setIsInitialized] = useState(false);

    const [formData, setFormData] = useState({
        membershipType: '',
        tierClassification: '',
        fullLegalAge: '',
        dateOfBirth: '',
        gender: '',
        phone: '',
        email: user?.email || '',
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

    const [missingFields, setMissingFields] = useState([]);
    const fieldRefs = useRef({});
    const hasScrolled = useRef(false);

    const registerRef = useCallback((fieldKey, el) => {
        if (el) fieldRefs.current[fieldKey] = el;
    }, []);

    // Geographic Data State
    const [countries] = useState(Country.getAllCountries());
    const [residenceStates, setResidenceStates] = useState([]);
    const [residenceCities, setResidenceCities] = useState([]);

    // codes for lookups
    const [selectedCountryCode, setSelectedCountryCode] = useState('');

    const tierLabelToNumber = {
        'Tier A - Diaspora': 1,
        'Tier B - Africa & Caribbean': 2,
        'Tier B - Defined Diaspora': 1,
        'Tier A - Africa & Caribbean': 2,
    };

    useEffect(() => {
        if (!isFetching) {
            if (myVerification?.missingFields) {
                setMissingFields(myVerification.missingFields);
            }

            const savedDraft = localStorage.getItem(DRAFT_KEY);
            if (savedDraft && !myVerification?.data && !isInitialized) {
                try {
                    const draft = JSON.parse(savedDraft);
                    setFormData(prev => ({ ...prev, ...draft }));

                    if (draft.countryOfResidence) {
                        const country = Country.getAllCountries().find(c => c.name === draft.countryOfResidence);
                        if (country) {
                            setSelectedCountryCode(country.isoCode);
                            const states = State.getStatesOfCountry(country.isoCode);
                            setResidenceStates(states);
                            if (draft.stateProvince) {
                                const state = states.find(s => s.name === draft.stateProvince);
                                if (state) {
                                    setResidenceCities(City.getCitiesOfState(country.isoCode, state.isoCode));
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.error("Draft restore failed:", e);
                }
            } else if (myVerification?.data) {
                const data = myVerification.data;
                setFormData({
                    membershipType: data.membershipType || '',
                    tierClassification: tierLabelToNumber[data.tierClassification] || data.tierClassification || '',
                    fullLegalAge: fullName || data.fullLegalAge || '',
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
            setIsInitialized(true);
        }
    }, [myVerification, isFetching, user?.id, isInitialized, DRAFT_KEY]);

    // Derrive missing fields from formData
    useEffect(() => {
        if (!isInitialized) return;

        const requiredFields = [
            "membershipType",
            "tierClassification",
            "fullLegalAge",
            "dateOfBirth",
            "gender",
            "phone",
            "email",
            "nationality",
            "countryOfResidence",
            "stateProvince",
            "city",
            "governmentIdType",
            "idNumber",
            "departmentsOfInterest",
            "serviceHoursAgreed",
            "benefitsAcknowledged",
            "termsAgreed",
        ];

        const missing = requiredFields.filter((field) => {
            const value = formData[field];
            if (field === "departmentsOfInterest") {
                return !Array.isArray(value) || value.length === 0;
            }
            if (typeof value === "string") {
                return !value.trim();
            }
            return value === undefined || value === null || value === "";
        });

        if (!idFile && !existingIdUrl) {
            missing.push("idDocument");
        }

        setMissingFields(missing);
    }, [formData, idFile, existingIdUrl, isInitialized]);

    // Auto-scroll to first missing field
    useEffect(() => {
        if (missingFields.length > 0 && !hasScrolled.current && isInitialized) {
            const firstMissing = missingFields[0];
            const el = fieldRefs.current[firstMissing];
            if (el) {
                hasScrolled.current = true;
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    el.focus();
                }, 400);
            }
        }
    }, [missingFields, isInitialized]);

    // Save draft on every change
    useEffect(() => {
        if (isInitialized && formData && user?.id && !myVerification?.data) {
            localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
        }
    }, [formData, user?.id, myVerification?.data, isInitialized]);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        let newValue = value;

        if (type === 'file') {
            const file = files[0];
            setIdFile(file);
            return;
        } else if (type === 'checkbox' && name === 'departmentsOfInterest') {
            const updatedDepartments = checked
                ? [...formData.departmentsOfInterest, value]
                : formData.departmentsOfInterest.filter(dept => dept !== value);
            setFormData(prev => ({ ...prev, departmentsOfInterest: updatedDepartments }));
            return;
        } else if (name === 'tierClassification') {
            newValue = Number(value);
        } else if (type === 'checkbox') {
            newValue = checked;
        }

        setFormData(prev => ({ ...prev, [name]: newValue }));
    };

    useEffect(() => {
        const isOnboarding = !completeness?.isAllComplete;

        if (wasSaving || isOnboarding) {
            if (completeness?.step2?.complete && !completeness.isAllComplete && location.pathname === completeness.step2.path) {
                const timer = setTimeout(() => {
                    navigate(completeness.step3.path);
                    setWasSaving(false);
                }, 1500);
                return () => clearTimeout(timer);
            } else if (completeness?.isAllComplete && location.pathname === completeness.step2.path && wasSaving) {
                const rolePath = user?.roles?.[0] === 'Admin' ? '/admin' : '/user';
                const timer = setTimeout(() => {
                    navigate(rolePath);
                    setWasSaving(false);
                }, 1500);
                return () => clearTimeout(timer);
            }
        }
    }, [completeness?.step2?.complete, completeness?.step3?.path, completeness?.isAllComplete, navigate, location.pathname, completeness?.step2?.path, user?.roles, wasSaving]);

    const isRedirecting = completeness?.step2?.complete || completeness?.isAllComplete;

    const getLoadingMessage = () => {
        if (isSubmitting) return "Saving Changes...";
        if (isFetching) return "Confirming Completion...";
        if (isRedirecting) return "Redirecting...";
        return "Saving Changes...";
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

        if (formData.departmentsOfInterest.length === 0) {
            return setSubmitError("Please select at least one primary department of interest.");
        }
        if (!idFile && !existingIdUrl) {
            return setSubmitError("Please upload your government-issued ID document.");
        }

        try {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                if (key === 'departmentsOfInterest') {
                    data.append(key, JSON.stringify(formData[key]));
                } else {
                    data.append(key, formData[key]);
                }
            });
            await submitVerification(data).unwrap();
            localStorage.removeItem(DRAFT_KEY);
            setWasSaving(true);
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

    const verificationStatus = myVerification?.data?.status;
    const isPending = verificationStatus === 'Pending';
    const isRejected = verificationStatus === 'Rejected';
    const isApproved = verificationStatus === 'Approved';
    const adminFeedback = myVerification?.data?.adminFeedback;

    const departments = [
        "Education & Pan African Club", "Business & Entrepreneurship", "Media & Communications",
        "Community Development", "Information Communication Technology", "International Relations",
        "Legal & Policy Affairs", "Engineering", "Finance", "Climate Change", "Human Rights",
        "Integration", "Health", "Partnership & Network", "Agriculture", "Trade & Industries",
        "Emergency Response Team", "Energy"
    ];

    if (isApproved) {
        return (
            <div className="py-12 mx-auto max-w-3xl animate-in fade-in duration-500">
                <div className="bg-white p-10 border border-emerald-100 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-12 h-12 text-emerald-500" />
                    </div>
                    <h1 className="text-3xl font-black text-slate-800 mb-4">Membership Verified</h1>
                    <p className="text-slate-600 text-lg mb-8 max-w-lg">
                        Congratulations! Your membership verification has been approved. You now have full access to all verified member benefits and features.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
                        <div className="bg-slate-50 p-4 border border-slate-100 flex flex-col items-center">
                            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Membership ID</span>
                            <span className="text-slate-800 font-bold">{user?.importedMember_id || 'UPAM-VER-100'}</span>
                        </div>
                        <div className="bg-slate-50 p-4 border border-slate-100 flex flex-col items-center">
                            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-1">Country</span>
                            <span className="text-slate-800 font-bold text-center">{myVerification?.data?.countryOfResidence || 'General'}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const isMissing = (fieldKey) => missingFields.includes(fieldKey);

    const inputClass = (fieldKey) =>
        `w-full px-4 py-3.5 border-b outline-none transition-all font-medium text-slate-800 rounded-none ${isMissing(fieldKey)
            ? 'border-red-400 bg-red-50/30'
            : 'bg-white border-gray-100 focus:border-red-400'
        }`;

    const labelClass = (fieldKey) =>
        `text-xs font-bold uppercase tracking-wider flex justify-between ${isMissing(fieldKey) ? 'text-red-500' : 'text-slate-700'}`;

    return (
        <div className="relative">
            {/* Redirection / Confirming Overlay */}
            {((isFetching && wasSaving) || (isRedirecting && wasSaving && !isSubmitting)) && (
                <div className="fixed inset-0 z-[9999] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative">
                            <Loader2 className="animate-spin text-red-600" size={64} />
                            <Shield className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600/20" size={24} />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                                {isFetching ? "Confirming Completion" : "Redirecting"}
                            </h2>
                            <p className="text-slate-500 font-medium animate-pulse">
                                {isFetching ? "Syncing your profile status..." : "Taking you to your dashboard..."}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="py-4 md:py-8 mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
                {missingFields.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 animate-in slide-in-from-top duration-500">
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18 9 9 0 010-18z" />
                            </svg>
                        </div>
                        <p className="text-red-700 text-sm font-medium">
                            <span className="font-bold">{missingFields.length} field{missingFields.length > 1 ? 's' : ''}</span> still need{missingFields.length === 1 ? 's' : ''} your attention. Fields marked in <span className="text-red-500 font-bold">red</span> are required.
                        </p>
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-slate-800">Membership Verification</h1>
                    <p className="text-slate-500">Please provide accurate information for your membership verification process.</p>
                </div>

                {isPending && (
                    <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-3xl flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-yellow-500 border border-yellow-50 shrink-0">
                            <Info size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-yellow-900 text-lg">Application Under Review</h4>
                            <p className="text-yellow-700 mt-1">Your verification application has been submitted and is currently being reviewed by our team.</p>
                        </div>
                    </div>
                )}

                {isRejected && (
                    <div className="p-6 bg-red-50 border-2 border-red-200/60 flex flex-col md:flex-row items-start gap-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -mr-16 -mt-16 opacity-50 pointer-events-none" />
                        <div className="w-16 h-16 rounded-full bg-white flex flex-shrink-0 items-center justify-center text-red-500 border border-red-100 relative z-10">
                            <AlertCircle size={32} strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 relative z-10">
                            <h4 className="font-black text-red-950 text-xl tracking-tight mb-2">Verification Application Rejected</h4>
                            <p className="text-red-800/90 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                                We carefully reviewed your application, but unfortunately, we could not approve it. Please review our feedback, adjust your details, and submit again.
                            </p>
                            {adminFeedback && (
                                <div className="mt-5 p-5 bg-white/70 backdrop-blur-sm border border-red-100">
                                    <p className="text-xs font-black text-red-900/60 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <Shield size={14} /> Administrator Feedback
                                    </p>
                                    <p className="text-red-950 font-medium whitespace-pre-wrap">"{adminFeedback}"</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8 bg-white py-6 lg:py-8">
                        <Section title="Membership Type" isMissing={isMissing('membershipType')}>
                            <div className="space-y-3">
                                {["General Member", "Institutional Member"].map(type => (
                                    <RadioField
                                        ref={(el) => registerRef('membershipType', el)}
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

                        <Section title="Personal Information">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className={labelClass('fullLegalAge')}>
                                        Full Legal Name {isMissing('fullLegalAge') && <span className="ml-1 text-red-400">• Required</span>}
                                    </label>
                                    <input
                                        ref={(el) => registerRef('fullLegalAge', el)}
                                        name="fullLegalAge"
                                        value={formData.fullLegalAge}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className={inputClass('fullLegalAge')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={labelClass('dateOfBirth')}>
                                        Date of Birth {isMissing('dateOfBirth') && <span className="ml-1 text-red-400">• Required</span>}
                                    </label>
                                    <input
                                        ref={(el) => registerRef('dateOfBirth', el)}
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        className={inputClass('dateOfBirth')}
                                    />
                                </div>
                            </div>
                            <div className="mt-6 space-y-3">
                                <label className={labelClass('gender')}>
                                    Gender {isMissing('gender') && <span className="ml-1 text-red-400">• Required</span>}
                                </label>
                                <div className="flex gap-8">
                                    {["Male", "Female"].map(g => (
                                        <RadioField
                                            ref={(el) => registerRef('gender', el)}
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

                        <Section title="Origins">
                            <div className="space-y-5">
                                <SelectField
                                    ref={(el) => registerRef('nationality', el)}
                                    label="Nationality"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    options={countries.map(c => ({ label: c.name, value: c.name }))}
                                    isMissing={isMissing('nationality')}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <SelectField
                                    ref={(el) => registerRef('countryOfResidence', el)}
                                    label="Country of Residence"
                                    name="countryOfResidence"
                                    value={formData.countryOfResidence}
                                    onChange={handleResidenceCountryChange}
                                    options={countries.map(c => ({ label: c.name, value: c.name }))}
                                    isMissing={isMissing('countryOfResidence')}
                                />
                                <SelectField
                                    ref={(el) => registerRef('stateProvince', el)}
                                    label="State / Province"
                                    name="stateProvince"
                                    value={formData.stateProvince}
                                    onChange={handleResidenceStateChange}
                                    disabled={!formData.countryOfResidence}
                                    options={residenceStates.map(s => ({ label: s.name, value: s.name }))}
                                    isMissing={isMissing('stateProvince')}
                                />
                            </div>
                            <div className="mt-5">
                                <SelectField
                                    ref={(el) => registerRef('city', el)}
                                    label="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    disabled={!formData.stateProvince}
                                    options={residenceCities.map(c => ({ label: c.name, value: c.name }))}
                                    isMissing={isMissing('city')}
                                />
                            </div>
                        </Section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8 bg-white py-6 lg:py-8">
                        <Section title="Tier Classification" isMissing={isMissing('tierClassification')}>
                            <div className="space-y-3">
                                {[{ value: 1, label: 'Tier A - Diaspora' }, { value: 2, label: 'Tier B - Africa & Caribbean' }].map(tier => (
                                    <RadioField
                                        ref={(el) => registerRef('tierClassification', el)}
                                        key={tier.value}
                                        label={tier.label}
                                        name="tierClassification"
                                        value={tier.value}
                                        checked={formData.tierClassification === tier.value}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                        </Section>

                        <Section title="Contact Information">
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className={labelClass('phone')}>
                                        Phone Number {isMissing('phone') && <span className="ml-1 text-red-400">• Required</span>}
                                    </label>
                                    <input
                                        ref={(el) => registerRef('phone', el)}
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+234..."
                                        className={inputClass('phone')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={labelClass('email')}>
                                        Email Address {isMissing('email') && <span className="ml-1 text-red-400">• Required</span>}
                                    </label>
                                    <input
                                        ref={(el) => registerRef('email', el)}
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="email@example.com"
                                        className={inputClass('email')}
                                    />
                                </div>
                            </div>
                        </Section>

                        <Section title="Identity Verification">
                            <div className="space-y-5">
                                <label className={labelClass('governmentIdType')}>
                                    Government Issued ID Type {isMissing('governmentIdType') && <span className="ml-1 text-red-400">• Required</span>}
                                </label>
                                <div className="flex gap-8">
                                    {["National ID", "Passport"].map(id => (
                                        <RadioField
                                            ref={(el) => registerRef('governmentIdType', el)}
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
                                    className={`border-2 border-dashed p-8 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer group ${idFile ? 'border-green-200 bg-green-50/30' : isMissing('idDocument') ? 'border-red-400 bg-red-50/20' : 'border-gray-200 bg-slate-50/50 hover:bg-slate-50'}`}
                                >
                                    <input
                                        ref={(el) => registerRef('idDocument', el)}
                                        id="id-upload"
                                        type="file"
                                        className="hidden"
                                        onChange={handleChange}
                                        accept=".pdf,.jpg,.jpeg,.png"
                                    />
                                    <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center border transition-transform group-hover:-translate-y-1 ${idFile ? 'text-green-500 border-green-100' : isMissing('idDocument') ? 'text-red-500 border-red-100' : 'text-slate-400 border-gray-100'}`}>
                                        {idFile ? <CheckCircle2 size={24} /> : <Upload size={24} />}
                                    </div>
                                    <div className="text-center">
                                        <p className={`font-bold ${isMissing('idDocument') ? 'text-red-700' : 'text-slate-800'}`}>
                                            {idFile ? idFile.name : isMissing('idDocument') ? "Upload ID Document • Required" : "Upload document"}
                                        </p>
                                        <button type="button" className={`mt-2 px-6 py-2 bg-white border rounded-xl text-sm font-bold transition-colors ${isMissing('idDocument') ? 'border-red-200 text-red-600 hover:bg-red-50' : 'border-gray-200 text-slate-600 hover:bg-slate-50'}`}>
                                            {idFile ? "Change File" : "Choose Files"}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className={labelClass('idNumber')}>
                                        ID Number {isMissing('idNumber') && <span className="ml-1 text-red-400">• Required</span>}
                                    </label>
                                    <input
                                        ref={(el) => registerRef('idNumber', el)}
                                        name="idNumber"
                                        value={formData.idNumber}
                                        onChange={handleChange}
                                        placeholder="Enter ID number"
                                        className={inputClass('idNumber')}
                                    />
                                </div>
                            </div>
                        </Section>
                    </div>
                </div>

                <Section className="py-6" title="Primary Department of Interest" isMissing={isMissing('departmentsOfInterest')}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8" ref={(el) => registerRef('departmentsOfInterest', el)}>
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

                <Section className="py-6" title="Agreements & Acknowledgements">
                    <div className="space-y-8">
                        <div className={`p-6 border flex gap-4 transition-colors ${isMissing('serviceHoursAgreed') ? 'bg-red-50/30 border-red-200' : 'bg-slate-50/50 border-slate-100'}`}>
                            <CheckboxField
                                ref={(el) => registerRef('serviceHoursAgreed', el)}
                                name="serviceHoursAgreed"
                                checked={formData.serviceHoursAgreed}
                                onChange={handleChange}
                            />
                            <p className={`text-sm leading-relaxed font-medium ${isMissing('serviceHoursAgreed') ? 'text-red-700' : 'text-slate-600'}`}>
                                I agree to complete a minimum of 12 service hours per month (or 36 per quarter) and log activities in the Digital Activity Register.
                            </p>
                        </div>

                        <div className={`p-6 border space-y-4 transition-colors ${isMissing('benefitsAcknowledged') ? 'bg-red-50/30 border-red-200' : 'bg-white'}`}>
                            <h4 className={`font-bold ${isMissing('benefitsAcknowledged') ? 'text-red-900' : 'text-slate-800'}`}>Membership Benefit Acknowledgement</h4>
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
                                    ref={(el) => registerRef('benefitsAcknowledged', el)}
                                    name="benefitsAcknowledged"
                                    checked={formData.benefitsAcknowledged}
                                    onChange={handleChange}
                                />
                                <p className={`text-sm font-medium ${isMissing('benefitsAcknowledged') ? 'text-red-700' : 'text-slate-600'}`}>
                                    I acknowledge that all benefits are subject to program-specific terms, conditions, and eligibility requirements.
                                </p>
                            </div>
                        </div>

                        <div className={`p-6 border space-y-4 transition-colors ${isMissing('termsAgreed') ? 'bg-red-50/30 border-red-200' : 'bg-white'}`}>
                            <h4 className={`font-bold ${isMissing('termsAgreed') ? 'text-red-900' : 'text-slate-800'}`}>Code of Conduct and Policy Agreement</h4>
                            <ul className="space-y-3 pl-2">
                                {[
                                    "I support the vision and mission of the United Pan-Africanist Movement (UPAM)",
                                    "I agree to abide by the UPAM Constitution and Code of Conduct",
                                    "I understand that failure to comply may result in termination of membership"
                                ].map(p => (
                                    <li key={p} className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5" /> {p}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-4 pt-4">
                                <CheckboxField
                                    ref={(el) => registerRef('termsAgreed', el)}
                                    name="termsAgreed"
                                    checked={formData.termsAgreed}
                                    onChange={handleChange}
                                />
                                <p className={`text-sm font-semibold ${isMissing('termsAgreed') ? 'text-red-700' : 'text-blue-600'}`}>
                                    I agree to all the terms and conditions and to abide by all the rules and regulations.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {submitError && (
                    <div className="p-4 bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 text-sm font-medium animate-in slide-in-from-top-2">
                        <AlertCircle size={20} />
                        {submitError}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting || isPending || isFetching || completeness?.step2?.complete}
                    className="w-full py-5 bg-red-600 hover:bg-red-700 text-white font-bold shadow-xs transition-all transform hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-3"
                >
                    {(isSubmitting || isFetching || (completeness?.step2?.complete && !isPending)) && <Loader2 className="animate-spin" size={24} />}
                    {isSubmitting || isFetching || (completeness?.step2?.complete && !isPending)
                        ? getLoadingMessage()
                        : isPending
                            ? 'Application Pending Review'
                            : 'Submit for Verification'}
                </button>
            </form>
        </div>
    );
};

const Section = ({ title, children, className, isMissing }) => (
    <div className={`bg-white px-6 md:px-8 py-4 border-l-4 transition-colors ${isMissing ? 'border-red-400 bg-red-50/10' : 'border-transparent'} ${className}`}>
        <h3 className={`text-lg font-bold border-b border-slate-50 pb-4 mb-5 ${isMissing ? 'text-red-900' : 'text-slate-800'}`}>
            {title} {isMissing && <span className="text-xs font-black uppercase text-red-500 float-right mt-1.5 tracking-widest">• Action Needed</span>}
        </h3>
        {children}
    </div>
);

const RadioField = React.forwardRef(({ label, ...props }, ref) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center">
            <input ref={ref} type="radio" className="peer sr-only" {...props} />
            <div className="w-5 h-5 rounded-full border-2 border-slate-200 peer-checked:border-red-500 transition-colors" />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-red-500 scale-0 peer-checked:scale-100 transition-transform" />
        </div>
        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">{label}</span>
    </label>
));

const CheckboxField = React.forwardRef(({ label, ...props }, ref) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center">
            <input ref={ref} type="checkbox" className="peer sr-only" {...props} />
            <div className="w-5 h-5 rounded-md border-2 border-slate-200 peer-checked:bg-red-500 peer-checked:border-red-500 transition-all" />
            <CheckCircle2 className="absolute text-white scale-0 peer-checked:scale-100 transition-transform" size={14} />
        </div>
        {label && <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">{label}</span>}
    </label>
));

const SelectField = React.forwardRef(({ label, options, isMissing, ...props }, ref) => (
    <div className="space-y-2">
        <label className={`text-xs font-bold uppercase tracking-wider flex justify-between ${isMissing ? 'text-red-500' : 'text-slate-700'}`}>
            {label} {isMissing && <span className="text-red-400">• Required</span>}
        </label>
        <div className="relative">
            <select
                ref={ref}
                {...props}
                className={`w-full px-4 py-3.5 border-b outline-none transition-all font-medium text-slate-800 appearance-none disabled:opacity-50 rounded-none ${isMissing ? 'border-red-400 bg-red-50/30' : 'bg-white border-gray-100 focus:border-red-400'}`}
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
));

export default MemberVerification;