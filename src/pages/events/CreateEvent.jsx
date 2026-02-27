import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowLeft, Upload } from 'lucide-react';

const EVENT_CATEGORIES = [
  'Conference & Summit',
  'Workshop & Training',
  'Seminar & Talks',
  'Cultural & Festival',
  'Music & Entertainment',
  'Community & Outreach',
  'Business & Networking',
  'Virtual Event',
  'Other',
];

const TICKET_NAMES = ['General', 'VIP'];

const CreateEvent = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    eventTitle: '',
    eventCategory: '',
    eventDescription: '',
    eventFormat: 'physical', // physical | virtual | hybrid
    audienceType: [], // ['General Public', 'Members', 'Invitations only']
    eventStartDate: '',
    eventEndDate: '',
    // If Physical / Hybrid
    venueName: '',
    venueAddress: '',
    country: '',
    city: '',
    // If Virtual / Hybrid
    onlinePlatform: '', // Zoom | Googlemeet | Microsoft Teams
    eventEntry: 'free', // free | paid
    // If Paid
    ticketName: '',
    ticketPrice: '',
    ticketQuantity: '',
    bannerFile: null,
  });
  const [fileName, setFileName] = useState('No File Chosen');

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = e.target.checked;
      setFormData((prev) => ({
        ...prev,
        audienceType: checked
          ? [...prev.audienceType, value]
          : prev.audienceType.filter((v) => v !== value),
      }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFormData((prev) => ({ ...prev, bannerFile: file || null }));
    setFileName(file ? file.name : 'No File Chosen');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Create Event submitted:', formData);
  };

  const isPhysicalOrHybrid = formData.eventFormat === 'physical' || formData.eventFormat === 'hybrid';
  const isVirtualOrHybrid = formData.eventFormat === 'virtual' || formData.eventFormat === 'hybrid';
  const isPaid = formData.eventEntry === 'paid';

  const inputClass =
    'w-full px-4 py-3 bg-[#F4F4F4] border border-gray-200 focus:border-[#EB010C] focus:bg-white focus:outline-none transition-all rounded';
  const labelClass = 'block text-sm font-semibold text-gray-800 mb-2';

  return (
    <div className="min-h-screen bg-gray-100 font-['Lato',sans-serif] text-black pb-16">

      {/* ── Hero Banner ── */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80"
            alt="Create Event"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#EB010C] mb-4">
            UPAM Events
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Create Your Event, Reach Your Audience, Make it Happen
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
            Share your event with the Pan-African community. Fill in the details below to publish and promote your event.
          </p>
        </div>
      </section>

      {/* ── Form Container ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#EB010C] hover:text-[#EB010C]/80 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        {/* Light blue header bar + title */}
        <div className="bg-[#E8F4FD] px-4 py-3 rounded-t-lg mb-0">
          <h1 className="text-lg md:text-xl font-bold text-gray-900">
            Fill in the Following Information Below to Create your Event
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-b-lg rounded-t-none shadow-sm border border-t-0 border-gray-200 px-4 sm:px-6 py-8 space-y-6">
          {/* Event Title */}
          <div>
            <label htmlFor="eventTitle" className={labelClass}>
              Event Title
            </label>
            <input
              id="eventTitle"
              type="text"
              name="eventTitle"
              value={formData.eventTitle}
              onChange={handleChange}
              placeholder="Event Title..."
              className={inputClass}
              required
            />
          </div>

          {/* Event Category */}
          <div>
            <label htmlFor="eventCategory" className={labelClass}>
              Event Category
            </label>
            <select
              id="eventCategory"
              name="eventCategory"
              value={formData.eventCategory}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Category</option>
              {EVENT_CATEGORIES.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Event Description */}
          <div>
            <label htmlFor="eventDescription" className={labelClass}>
              Event Description
            </label>
            <textarea
              id="eventDescription"
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleChange}
              rows={4}
              placeholder="Describe..."
              className={`${inputClass} resize-none`}
              required
            />
          </div>

          {/* Event Format */}
          <div>
            <label className={labelClass}>Event Format</label>
            <div className="flex flex-wrap gap-6">
              {[
                { value: 'physical', label: 'Physical (In person)' },
                { value: 'virtual', label: 'Virtual (Online)' },
                { value: 'hybrid', label: 'Hybrid (Physical + Online)' },
              ].map(({ value, label }) => (
                <label key={value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="eventFormat"
                    value={value}
                    checked={formData.eventFormat === value}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#EB010C]"
                  />
                  <span className="text-sm font-medium text-gray-800">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Audience Type */}
          <div>
            <label className={labelClass}>Audience Type</label>
            <div className="flex flex-wrap gap-6">
              {['General Public', 'Members', 'Invitations only'].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={opt}
                    checked={formData.audienceType.includes(opt)}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300 text-[#EB010C] focus:ring-[#EB010C]"
                  />
                  <span className="text-sm font-medium text-gray-800">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Event Start Date / End Date */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventStartDate" className={labelClass}>
                Event Start Date (/ Optional)
              </label>
              <input
                id="eventStartDate"
                type="date"
                name="eventStartDate"
                value={formData.eventStartDate}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="eventEndDate" className={labelClass}>
                Event End Date (/ Optional)
              </label>
              <input
                id="eventEndDate"
                type="date"
                name="eventEndDate"
                value={formData.eventEndDate}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* If Physical / Hybrid */}
          {isPhysicalOrHybrid && (
            <section className="space-y-4 pt-4 border-t border-gray-200">
              <h2 className="text-base font-bold text-gray-900">If Physical / Hybrid</h2>
              <div>
                <label htmlFor="venueName" className={labelClass}>
                  Venue Name
                </label>
                <input
                  id="venueName"
                  type="text"
                  name="venueName"
                  value={formData.venueName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="venueAddress" className={labelClass}>
                  Venue Address
                </label>
                <input
                  id="venueAddress"
                  type="text"
                  name="venueAddress"
                  value={formData.venueAddress}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="country" className={labelClass}>
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="city" className={labelClass}>
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </section>
          )}

          {/* If Virtual / Hybrid */}
          {isVirtualOrHybrid && (
            <section className="space-y-4 pt-4 border-t border-gray-200">
              <h2 className="text-base font-bold text-gray-900">If Virtual / Hybrid</h2>
              <div>
                <label className={labelClass}>Online Platform</label>
                <div className="flex flex-wrap gap-6">
                  {['Zoom', 'Googlemeet', 'Microsoft Teams'].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="onlinePlatform"
                        value={opt}
                        checked={formData.onlinePlatform === opt}
                        onChange={handleChange}
                        className="w-4 h-4 accent-[#EB010C]"
                      />
                      <span className="text-sm font-medium text-gray-800">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass}>Event Entry</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="eventEntry"
                      value="free"
                      checked={formData.eventEntry === 'free'}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[#EB010C]"
                    />
                    <span className="text-sm font-medium text-gray-800">Free</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="eventEntry"
                      value="paid"
                      checked={formData.eventEntry === 'paid'}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[#EB010C]"
                    />
                    <span className="text-sm font-medium text-gray-800">Paid</span>
                  </label>
                </div>
              </div>
            </section>
          )}

          {/* If Paid */}
          {isPaid && (
            <section className="space-y-4 pt-4 border-t border-gray-200">
              <h2 className="text-base font-bold text-gray-900">If Paid</h2>
              <div>
                <label htmlFor="ticketName" className={labelClass}>
                  Ticket Name
                </label>
                <div className="relative">
                  <select
                    id="ticketName"
                    name="ticketName"
                    value={formData.ticketName}
                    onChange={handleChange}
                    className={inputClass}
                    required={isPaid}
                  >
                    <option value="">Category</option>
                    {TICKET_NAMES.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
                </div>
              </div>
              <div>
                <label htmlFor="ticketPrice" className={labelClass}>
                  Ticket Price
                </label>
                <input
                  id="ticketPrice"
                  type="number"
                  name="ticketPrice"
                  value={formData.ticketPrice}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className={inputClass}
                  required={isPaid}
                />
              </div>
            </section>
          )}

          {/* Ticket Quantity */}
          <div>
            <label htmlFor="ticketQuantity" className={labelClass}>
              Ticket Quantity
            </label>
            <input
              id="ticketQuantity"
              type="number"
              name="ticketQuantity"
              value={formData.ticketQuantity}
              onChange={handleChange}
              min="1"
              placeholder=""
              className={inputClass}
            />
          </div>

          {/* Upload Banner Image */}
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-2">Upload Banner Image</h2>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file && file.type.startsWith('image/')) {
                  setFormData((prev) => ({ ...prev, bannerFile: file }));
                  setFileName(file.name);
                }
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Upload className="w-10 h-10 text-gray-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-3">Upload Banner Image</p>
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded border border-gray-300 hover:bg-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Choose Files
              </button>
              <span className="ml-2 text-sm text-gray-500">{fileName}</span>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#EB010C] text-white py-4 font-bold hover:bg-[#EB010C]/90 transition-colors rounded shadow-sm"
            >
              Publish Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
