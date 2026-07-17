import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useGetMyEmergencyContactQuery, useUpdateMyEmergencyContactMutation } from '../../../app/api/emergencyContactsApiSlice';
import LoadingState from '../../../component/ui/LoadingState';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCompleteness } from '../../authenticationPages/authSlice';
import { Loader2 } from 'lucide-react';
import useAuth from '../../../hooks/useAuth';

const EmergencyContact = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const completeness = useSelector(selectCompleteness);
    const { data: contactData, isLoading, isFetching, isError } = useGetMyEmergencyContactQuery();
    const [updateEmergencyContact, { isLoading: isUpdating }] = useUpdateMyEmergencyContactMutation();
    const [wasSaving, setWasSaving] = useState(false);
    const { user } = useAuth();

    const initialContactState = {
        firstName: '',
        lastName: '',
        relationship: '',
        email: '',
        address: '',
        phone: '',
        country: ''
    };

    const [formState, setFormState] = useState({
        emergencyContact: { ...initialContactState },
        nextOfKin: { ...initialContactState }
    });

    const [missingFields, setMissingFields] = useState([]);
    const fieldRefs = useRef({});
    const hasScrolled = useRef(false);

    // Register a ref for a field
    const registerRef = useCallback((fieldKey, el) => {
        if (el) fieldRefs.current[fieldKey] = el;
    }, []);

    useEffect(() => {
        if (contactData?.data) {
            setFormState({
                emergencyContact: { ...initialContactState, ...(contactData.data.emergencyContact || {}) },
                nextOfKin: { ...initialContactState, ...(contactData.data.nextOfKin || {}) }
            });
            if (contactData.missingFields) {
                setMissingFields(contactData.missingFields);
            }
        }
    }, [contactData]);

    // Auto-scroll to first missing field
    useEffect(() => {
        if (missingFields.length > 0 && !hasScrolled.current) {
            const firstMissing = missingFields[0];
            const el = fieldRefs.current[firstMissing];
            if (el) {
                hasScrolled.current = true;
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    el.focus();
                }, 300);
            }
        }
    }, [missingFields]);

    const handleEmergencyContactChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            emergencyContact: { ...prev.emergencyContact, [name]: value }
        }));
        // Remove from missingFields as user fills in
        if (value.trim()) {
            setMissingFields(prev => prev.filter(f => f !== `emergencyContact.${name}`));
        } else {
            setMissingFields(prev => {
                if (!prev.includes(`emergencyContact.${name}`)) return [...prev, `emergencyContact.${name}`];
                return prev;
            });
        }
    };

    const handleNextOfKinChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            nextOfKin: { ...prev.nextOfKin, [name]: value }
        }));
        if (value.trim()) {
            setMissingFields(prev => prev.filter(f => f !== `nextOfKin.${name}`));
        } else {
            setMissingFields(prev => {
                if (!prev.includes(`nextOfKin.${name}`)) return [...prev, `nextOfKin.${name}`];
                return prev;
            });
        }
    };

    useEffect(() => {
        const isOnboarding = !completeness?.isAllComplete;

        if (wasSaving || isOnboarding) {
            if (completeness?.step3?.complete && !completeness.isAllComplete && location.pathname === completeness.step3.path) {
                const timer = setTimeout(() => {
                    navigate('/dashboard');
                    setWasSaving(false);
                }, 1500);
                return () => clearTimeout(timer);
            } else if (completeness?.isAllComplete && location.pathname === completeness.step3.path && wasSaving) {
                const privilegedRoles = ['Admin', 'Manager', 'Representative'];
                const rolePath = privilegedRoles.includes(authUser?.roles?.[0])
                    ? '/dashboard'
                    : '/user';
                const timer = setTimeout(() => {
                    navigate(rolePath);
                    setWasSaving(false);
                }, 1500);
                return () => clearTimeout(timer);
            }
        }
    }, [completeness?.step3?.complete, completeness?.isAllComplete, navigate, location.pathname, completeness?.step3?.path, user?.roles, wasSaving]);

    const getLoadingMessage = () => {
        if (isUpdating) return "Saving Changes...";
        if (isFetching) return "Confirming Completion...";
        if (completeness?.step3?.complete) return "Redirecting...";
        return "Saving Changes...";
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            await updateEmergencyContact(formState).unwrap();
            setWasSaving(true);
            alert("Emergency contact information saved successfully!");
        } catch (error) {
            console.error("Failed to update emergency contact details", error);
            alert("Failed to save changes. Please check the form data.");
        }
    };

    if (isLoading) {
        return <LoadingState message="Loading Emergency Contact Data..." />;
    }

    if (isError) {
        return <div className="text-red-500 p-4">Error loading data. Please refresh the page.</div>;
    }

    // Helper: check if a field is missing
    const isMissing = (fieldKey) => missingFields.includes(fieldKey);

    // Dynamic input class
    const inputClass = (fieldKey) =>
        `w-full border p-2.5 outline-none text-gray-700 bg-white transition-colors duration-200 ${isMissing(fieldKey)
            ? 'border-red-400 ring-2 ring-red-100 bg-red-50/30'
            : 'border-gray-200 focus:border-red-400'
        }`;

    // Dynamic label class
    const labelClass = (fieldKey) =>
        `text-sm font-medium ${isMissing(fieldKey) ? 'text-red-500' : 'text-gray-500'}`;

    // Reusable field renderer
    const renderField = (section, fieldName, label, type = 'text', handler) => {
        const key = `${section}.${fieldName}`;
        return (
            <div className="space-y-1" key={key}>
                <label className={labelClass(key)}>
                    {label}
                    {isMissing(key) && <span className="ml-1 text-red-400 text-xs font-bold">• Required</span>}
                </label>
                <input
                    ref={(el) => registerRef(key, el)}
                    type={type}
                    name={fieldName}
                    value={formState[section][fieldName]}
                    onChange={handler}
                    className={inputClass(key)}
                />
            </div>
        );
    };

    const ecFields = [
        ['firstName', 'First Name'],
        ['lastName', 'Last Name'],
        ['relationship', 'Relationship'],
        ['email', 'Email Address', 'email'],
        ['address', 'Residential Address'],
        ['phone', 'Phone No', 'tel'],
        ['country', 'Country'],
    ];

    const nokFields = [
        ['firstName', 'First Name'],
        ['lastName', 'Last Name'],
        ['email', 'Email Address', 'email'],
        ['relationship', 'Relationship'],
        ['phone', 'Phone No', 'tel'],
        ['address', 'Residential Address'],
        ['country', 'Country'],
    ];

    return (
        <div className="bg-gray-50 min-h-screen lg:p-6 font-sans">
            {missingFields.length > 0 && (
                <div className="max-w-7xl mx-auto mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 animate-in slide-in-from-top duration-500">
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

            <form onSubmit={handleSaveChanges} className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Emergency Contact Column */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Emergency Contact</h2>
                        <div className="bg-white p-8 border border-gray-100 space-y-5">
                            {ecFields.map(([name, label, type]) =>
                                renderField('emergencyContact', name, label, type || 'text', handleEmergencyContactChange)
                            )}
                        </div>
                    </div>

                    {/* Next of Kin Column */}
                    <div className="flex-1 mt-8 lg:mt-0">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Next of Kin</h2>
                        <div className="bg-white p-8 border border-gray-100 space-y-5">
                            {nokFields.map(([name, label, type]) =>
                                renderField('nextOfKin', name, label, type || 'text', handleNextOfKinChange)
                            )}
                        </div>
                    </div>
                </div>

                {/* Save Changes Button - Centered at the bottom */}
                <div className="w-full flex justify-center mt-12 pb-16">
                    <button
                        type="submit"
                        disabled={isUpdating || isFetching || (completeness?.step3?.complete && wasSaving)}
                        className={`w-full max-w-md py-4 text-white font-bold transition-all transform active:scale-95 flex items-center justify-center gap-2 ${isUpdating || isFetching || (completeness?.step3?.complete && wasSaving) ? 'bg-red-400 cursor-not-allowed' : 'bg-[#E50914] hover:bg-red-700 hover:shadow-red-900/30'}`}
                    >
                        {(isUpdating || isFetching || (completeness?.step3?.complete && wasSaving)) && <Loader2 className="animate-spin" size={20} />}
                        {isUpdating || isFetching || (completeness?.step3?.complete && wasSaving) ? getLoadingMessage() : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmergencyContact;
