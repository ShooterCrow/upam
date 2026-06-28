import React, { useState, useEffect } from 'react';
import { useGetSettingsQuery, useUpdateSettingsMutation } from '../../../platform/settingsApiSlice';
import { Save, AlertCircle, CheckCircle2 } from 'lucide-react';

const Settings = () => {
    const { data: response, isLoading, isError, error } = useGetSettingsQuery();
    const [updateSettings, { isLoading: isUpdating }] = useUpdateSettingsMutation();
    const [requireEmailVerification, setRequireEmailVerification] = useState(false);
    const [requirePhoneVerification, setRequirePhoneVerification] = useState(false);
    const [allowVerifiedEdit, setAllowVerifiedEdit] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    //ewwewe

    useEffect(() => {
        if (response?.data?.hotelInfo) {
            setRequireEmailVerification(response.data.hotelInfo.requireEmailVerification ?? false);
            setRequirePhoneVerification(response.data.hotelInfo.requirePhoneVerification ?? false);
            setAllowVerifiedEdit(response.data.hotelInfo.allowVerifiedEdit ?? false);
        }
    }, [response]);

    const handleSave = async () => {
        setSuccessMessage('');
        setErrorMessage('');
        try {
            const currentSettings = response?.data || {};
            const hotelInfo = currentSettings.hotelInfo || {};

            // The backend updateSettings expects formData for image uploads, but can handle JSON
            // Since we are only updating text/boolean fields, we'll construct a FormData
            const formData = new FormData();

            // Construct the updated hotelInfo
            const updatedHotelInfo = {
                ...hotelInfo,
                requireEmailVerification,
                requirePhoneVerification,
                allowVerifiedEdit
            };

            formData.append('hotelInfo', JSON.stringify(updatedHotelInfo));

            await updateSettings(formData).unwrap();
            setSuccessMessage('Settings updated successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (err) {
            setErrorMessage(err?.data?.message || 'Failed to update settings');
            console.error('Failed to update settings:', err);
        }
    };

    if (isLoading) {
        return <div className="p-8 text-center text-gray-500">Loading settings...</div>;
    }

    if (isError) {
        return <div className="p-8 text-center text-red-500">Error loading settings: {error?.data?.message || 'Unknown error'}</div>;
    }

    return (
        <div className="p-6 max-w-4xl mx-auto font-sans">
            <h1 className="text-2xl font-bold mb-6 text-gray-900">Platform Settings</h1>

            {successMessage && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    <span>{successMessage}</span>
                </div>
            )}

            {errorMessage && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                    <AlertCircle size={20} />
                    <span>{errorMessage}</span>
                </div>
            )}

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Authentication Settings</h2>

                    <div className="flex items-center justify-between py-4">
                        <div>
                            <h3 className="font-medium text-gray-900">Require Email Verification</h3>
                            <p className="text-sm text-gray-500 mt-1 max-w-xl">
                                When enabled, new users must verify their email address before they can log in. When disabled, users can log in immediately after registration without verifying their email.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={requireEmailVerification}
                                onChange={(e) => setRequireEmailVerification(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between py-4 border-t border-gray-100">
                        <div>
                            <h3 className="font-medium text-gray-900">Require Phone Verification</h3>
                            <p className="text-sm text-gray-500 mt-1 max-w-xl">
                                When enabled, new users must verify their phone number via WhatsApp or SMS (Bird.com) during registration.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={requirePhoneVerification}
                                onChange={(e) => setRequirePhoneVerification(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between py-4 border-t border-gray-100">
                        <div>
                            <h3 className="font-medium text-gray-900">Allow Verified Members Profile Editing</h3>
                            <p className="text-sm text-gray-500 mt-1 max-w-xl">
                                When enabled, verified members can edit their personal profile information (such as name, phone, dob, country, chapter) at any time. When disabled, profile fields are locked once they are filled.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={allowVerifiedEdit}
                                onChange={(e) => setAllowVerifiedEdit(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                        </label>
                    </div>
                </div>
                {console.log(requirePhoneVerification)}

                <div className="p-6 bg-gray-50 flex justify-end">
                    <button
                        onClick={handleSave}
                        disabled={isUpdating}
                        className="flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Save size={18} />
                        {isUpdating ? 'Saving...' : 'Save Settings'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
