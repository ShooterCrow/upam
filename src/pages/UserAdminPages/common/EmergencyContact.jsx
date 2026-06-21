import React, { useState, useEffect } from 'react';
import { useGetMyEmergencyContactQuery, useUpdateMyEmergencyContactMutation } from '../../../app/api/emergencyContactsApiSlice';
import LoadingState from '../../../component/ui/LoadingState';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCompleteness } from '../../authenticationPages/authSlice';

const EmergencyContact = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const completeness = useSelector(selectCompleteness);
    const { data: contactData, isLoading, isError } = useGetMyEmergencyContactQuery();
    const [updateEmergencyContact, { isLoading: isUpdating }] = useUpdateMyEmergencyContactMutation();

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

    useEffect(() => {
        if (contactData?.data) {
            setFormState({
                emergencyContact: { ...initialContactState, ...(contactData.data.emergencyContact || {}) },
                nextOfKin: { ...initialContactState, ...(contactData.data.nextOfKin || {}) }
            });
        }
    }, [contactData]);

    const handleEmergencyContactChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            emergencyContact: { ...prev.emergencyContact, [name]: value }
        }));
    };

    const handleNextOfKinChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            nextOfKin: { ...prev.nextOfKin, [name]: value }
        }));
    };

    useEffect(() => {
        if (completeness?.step3?.complete && !completeness.isAllComplete && location.pathname === completeness.step3.path) {
            const timer = setTimeout(() => {
                navigate('/dashboard'); // Final step redirects to dashboard
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [completeness?.step3?.complete, completeness?.isAllComplete, navigate, location.pathname, completeness?.step3?.path]);

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            await updateEmergencyContact(formState).unwrap();
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
        return <div className="text-red-500 p-4">Error loading data. Please try again.</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen p-6 font-sans">
            <form onSubmit={handleSaveChanges} className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Emergency Contact Column */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Emergency Contact</h2>
                        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 space-y-5">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">First Name</label>
                                <input type="text" name="firstName" value={formState.emergencyContact.firstName} onChange={handleEmergencyContactChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Last Name</label>
                                <input type="text" name="lastName" value={formState.emergencyContact.lastName} onChange={handleEmergencyContactChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Relationship</label>
                                <input type="text" name="relationship" value={formState.emergencyContact.relationship} onChange={handleEmergencyContactChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Email Address</label>
                                <input type="email" name="email" value={formState.emergencyContact.email} onChange={handleEmergencyContactChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Residential Address</label>
                                <input type="text" name="address" placeholder="+234" value={formState.emergencyContact.address} onChange={handleEmergencyContactChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Phone No</label>
                                <input type="tel" name="phone" value={formState.emergencyContact.phone} onChange={handleEmergencyContactChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Country</label>
                                <input type="text" name="country" value={formState.emergencyContact.country} onChange={handleEmergencyContactChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                        </div>
                    </div>

                    {/* Next of Kin Column */}
                    <div className="flex-1 mt-8 lg:mt-0">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Next of Kin</h2>
                        <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 space-y-5">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">First Name</label>
                                <input type="text" name="firstName" value={formState.nextOfKin.firstName} onChange={handleNextOfKinChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Last Name</label>
                                <input type="text" name="lastName" value={formState.nextOfKin.lastName} onChange={handleNextOfKinChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Email Address</label>
                                <input type="email" name="email" value={formState.nextOfKin.email} onChange={handleNextOfKinChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Relationship</label>
                                <input type="text" name="relationship" value={formState.nextOfKin.relationship} onChange={handleNextOfKinChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Phone No</label>
                                <input type="tel" name="phone" value={formState.nextOfKin.phone} onChange={handleNextOfKinChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Residential Address</label>
                                <input type="text" name="address" value={formState.nextOfKin.address} onChange={handleNextOfKinChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">Country</label>
                                <input type="text" name="country" value={formState.nextOfKin.country} onChange={handleNextOfKinChange} className="w-full border border-gray-200 rounded p-2.5 outline-none focus:border-red-400 text-gray-700 bg-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Save Changes Button - Centered at the bottom */}
                <div className="w-full flex justify-center mt-12 pb-16">
                    <button
                        type="submit"
                        disabled={isUpdating}
                        className={`w-full max-w-md py-4 text-white font-bold rounded-lg shadow-lg transition-all transform active:scale-95 ${isUpdating ? 'bg-red-400 cursor-not-allowed' : 'bg-[#E50914] hover:bg-red-700 hover:shadow-red-900/30'}`}
                    >
                        {isUpdating ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmergencyContact;
