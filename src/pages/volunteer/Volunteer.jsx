import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    cityState: '',
    volunteerArea: '',
    volunteerType: '',
    availability: '',
    timeCommitment: '',
    motivation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer Application Submitted:', formData);
    // Add submission logic here
  };

  return (
    <div className="bg-white min-h-screen font-['Inter',_sans-serif] text-black pb-20">
      {/* Header Section */}
      <div className="bg-white py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-3xl font-bold">
            UPAM Volunteer Application – Required Information
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 max-w-[768px]">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <InputField 
            label="Full Name" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />

          <InputField 
            label="Email Address" 
            name="email" 
            type="email"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <InputField 
            label="Phone / Whatsapp Number" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />

          <InputField 
            label="Country of Residence" 
            name="country" 
            value={formData.country} 
            onChange={handleChange} 
            required 
          />

          <InputField 
            label="City / State (Optional)" 
            name="cityState" 
            value={formData.cityState} 
            onChange={handleChange} 
          />

          <SelectField 
            label="Area(s) You'd Like to Volunteer In" 
            name="volunteerArea" 
            value={formData.volunteerArea} 
            onChange={handleChange} 
            options={[
              "Community Outreach", 
              "Events & Programs", 
              "Media & Communications", 
              "Research & Writing", 
              "Technology & Digital Support", 
              "Youth Engagement", 
              "Administration & Coordination"
            ]}
            required 
          />

          <SelectField 
            label="Preferred Volunteer Type" 
            name="volunteerType" 
            value={formData.volunteerType} 
            onChange={handleChange} 
            options={["Remote", "On-site", "Hybrid"]}
            required 
          />

          <SelectField 
            label="Availability Schedule" 
            name="availability" 
            value={formData.availability} 
            onChange={handleChange} 
            options={["Weekdays", "Weekends", "Flexible"]}
            required 
          />

          <SelectField 
            label="Time Commitment" 
            name="timeCommitment" 
            value={formData.timeCommitment} 
            onChange={handleChange} 
            options={["Few hours weekly", "Monthly", "Project-based"]}
            required 
          />

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-800">Why do you want to volunteer with UPAM?</label>
            <textarea 
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 bg-[#F4F4F4] border border-transparent focus:border-[#EB010C] focus:bg-white focus:outline-none transition-all rounded resize-none"
              placeholder="Describe your motivation..."
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#EB010C] text-white py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded shadow-sm mt-8"
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
    <label className="block text-sm font-semibold text-gray-800">{label}</label>
    <input 
      className="w-full px-4 py-3 bg-[#F4F4F4] border border-transparent focus:border-[#EB010C] focus:bg-white focus:outline-none transition-all rounded"
      {...props} 
    />
  </div>
);

const SelectField = ({ label, options, ...props }) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-800">{label}</label>
    <div className="relative">
      <select 
        className="w-full px-4 py-3 bg-[#F4F4F4] border border-transparent focus:border-[#EB010C] focus:bg-white focus:outline-none appearance-none transition-all rounded"
        {...props}
      >
        <option value="">Select Option</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
    </div>
  </div>
);

export default Volunteer;
