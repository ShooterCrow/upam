import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Partnership = () => {
    const [formData, setFormData] = useState({
        orgName: '',
        orgType: '',
        yearEstablished: '',
        countryRegistration: '',
        countryOperation: '',
        website: '',
        officialEmail: '',
        officialPhone: '',
        partnershipType: '',
        areasOfInterest: [],
        collaborationDescription: '',
        resourcesContribute: [],
        commitmentLevel: '',
        legalStatus: '',
        conflictOfInterest: ''
    });

    const interestAreas = [
        "Pan-African Advocacy",
        "Youth & Leadership Development",
        "Community Development",
        "Economic Development",
        "Education & Skills",
        "Health & Wellness",
        "Technology & Innovation"
    ];

    const resourcesOptions = [
        "Funding",
        "Expertise",
        "Technology",
        "Network",
        "Media Reach",
        "Research",
        "Logistics"
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const listName = name === 'areasOfInterest' ? 'areasOfInterest' : 'resourcesContribute';
            const updatedList = checked
                ? [...formData[listName], value]
                : formData[listName].filter(item => item !== value);
            setFormData(prev => ({ ...prev, [listName]: updatedList }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Corrected Partnership Application Submitted:', formData);
    };

    return (
        <div className="bg-[#F4F4F4] min-h-screen font-['Inter',_sans-serif] text-black pb-20">
            {/* Header Section */}
            <div className="bg-white py-12 mb-12 shadow-sm">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold">
                        UPAM Partnership Application – Required Information
                    </h1>
                </div>
            </div>

            {/* Form Section */}
            <div className="container mx-auto px-4 max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Organization Details */}
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <InputField label="Organization Name" name="orgName" value={formData.orgName} onChange={handleChange} required />
                            <SelectField
                                label="Organization Type"
                                name="orgType"
                                value={formData.orgType}
                                onChange={handleChange}
                                options={["Private Company", "NGO", "Government Agency", "Educational Institution", "Media", "Community Group", "Foundation", "Other"]}
                                required
                            />
                            <InputField label="Year Established" name="yearEstablished" value={formData.yearEstablished} onChange={handleChange} type="number" />
                            <InputField label="Country of Registration" name="countryRegistration" value={formData.countryRegistration} onChange={handleChange} required />
                            <InputField label="Country(ies) of Operation" name="countryOperation" value={formData.countryOperation} onChange={handleChange} required />
                            <InputField label="Organization Website / IP-Key" name="website" value={formData.website} onChange={handleChange} />
                            <InputField label="Official Email Address" name="officialEmail" value={formData.officialEmail} onChange={handleChange} type="email" required />
                            <InputField label="Official Phone Number" name="officialPhone" value={formData.officialPhone} onChange={handleChange} placeholder="+254 ..." required />
                        </div>
                    </div>

                    {/* Partnership Details */}
                    <div className="space-y-8">
                        <SelectField
                            label="Type of Partnership Interested In"
                            name="partnershipType"
                            value={formData.partnershipType}
                            onChange={handleChange}
                            options={["Strategic Partner", "Program Partner", "Media Partner", "Research Partner", "Event Partner", "Community Group", "Funding Partner", "Technology & Innovation Partner", "Other"]}
                            required
                        />

                        <div>
                            <label className="block text-base font-bold mb-4">Area(s) of Interest</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {interestAreas.map(area => (
                                    <CheckboxItem
                                        key={area}
                                        name="areasOfInterest"
                                        label={area}
                                        checked={formData.areasOfInterest.includes(area)}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                        </div>

                        <TextareaField
                            label="Short Description of Proposed Collaboration"
                            name="collaborationDescription"
                            value={formData.collaborationDescription}
                            onChange={handleChange}
                            placeholder="Briefly describe how you envision working with UPAM..."
                            required
                        />
                    </div>

                    {/* Logistics & Resources */}
                    <div className="space-y-8">
                        <div>
                            <label className="block text-base font-bold mb-4">What resources can your organization contribute?</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {resourcesOptions.map(res => (
                                    <CheckboxItem
                                        key={res}
                                        name="resourcesContribute"
                                        label={res}
                                        checked={formData.resourcesContribute.includes(res)}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                        </div>

                        <SelectField
                            label="Estimated Level of Commitment"
                            name="commitmentLevel"
                            value={formData.commitmentLevel}
                            onChange={handleChange}
                            options={["One-time", "Short-term", "Long-term"]}
                            required
                        />

                        <SelectField
                            label="Is your organization legally registered? (Yes/No)"
                            name="legalStatus"
                            value={formData.legalStatus}
                            onChange={handleChange}
                            options={["Yes", "No"]}
                            required
                        />

                        <TextareaField
                            label="Any conflict of interest we should be aware of? (Describe if application)"
                            name="conflictOfInterest"
                            value={formData.conflictOfInterest}
                            onChange={handleChange}
                            placeholder="Please explain if any..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#EB010C] text-white py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded shadow-md mt-8"
                    >
                        Submit Information
                    </button>
                </form>
            </div>
        </div>
    );
};

// Helper Components
const InputField = ({ label, ...props }) => (
    <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-800">{label}</label>
        <input
            className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#EB010C] transition-colors rounded"
            {...props}
        />
    </div>
);

const SelectField = ({ label, options, ...props }) => (
    <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-800">{label}</label>
        <div className="relative">
            <select
                className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#EB010C] appearance-none transition-colors rounded"
                {...props}
            >
                <option value="">Select Option</option>
                {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
        </div>
    </div>
);

const TextareaField = ({ label, ...props }) => (
    <div className="space-y-2">
        <label className="block text-sm font-bold text-gray-800">{label}</label>
        <textarea
            rows="5"
            className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#EB010C] transition-colors rounded resize-none"
            {...props}
        />
    </div>
);

const CheckboxItem = ({ label, name, checked, onChange }) => (
    <label className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded cursor-pointer hover:border-[#EB010C]/50 transition-colors group">
        <input
            type="checkbox"
            name={name}
            value={label}
            checked={checked}
            onChange={onChange}
            className="w-5 h-5 accent-[#EB010C]"
        />
        <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">{label}</span>
    </label>
);

export default Partnership;
