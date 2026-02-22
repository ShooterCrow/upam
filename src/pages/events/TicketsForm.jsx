import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { events } from './eventsData';

const MEMBERSHIP_OPTIONS = [
  'UPAM Members',
  'Upam Executive',
  'Non UPAM members',
  'Students',
  'Diaspora',
];

const ORGANIZATION_TYPES = ['Profits', 'Non - Profit', 'Government'];

const TICKET_TYPES = ['General', 'VIP'];

const TicketsForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    membership: '',
    country: 'Africa',
    event: '',
    ticketType: '',
    numberOfTickets: '',
    organizationName: '',
    organizationType: '',
    confirmEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirmSubmit = () => {
    console.log('Ticket request submitted:', formData);
    setShowModal(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      membership: '',
      country: 'Africa',
      event: '',
      ticketType: '',
      numberOfTickets: '',
      organizationName: '',
      organizationType: '',
      confirmEmail: '',
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-[#F4F4F4] border border-gray-200 rounded-lg focus:border-[#EB010C] focus:bg-white focus:outline-none transition-all';
  const labelClass = 'block text-sm font-semibold text-gray-800 mb-2';

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/events/tickets"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#EB010C] hover:text-[#EB010C]/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tickets
        </Link>

        <div className="max-w-2xl mx-auto pb-16">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
            Fill in the Following Information Below to Get your Ticket
          </h1>

          <form onSubmit={handleSubmitClick} className="space-y-5">
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John..."
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="John555@gmail.com"
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone No
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="membership" className={labelClass}>
                Membership
              </label>
              <div className="relative">
                <select
                  id="membership"
                  name="membership"
                  value={formData.membership}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Member</option>
                  {MEMBERSHIP_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div>
              <label htmlFor="country" className={labelClass}>
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="Africa">Africa</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Ghana">Ghana</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div>
              <label htmlFor="event" className={labelClass}>
                Event
              </label>
              <div className="relative">
                <select
                  id="event"
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select event</option>
                  {events.map((ev) => (
                    <option key={ev.id} value={ev.slug}>
                      {ev.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div>
              <label htmlFor="ticketType" className={labelClass}>
                Ticket Type
              </label>
              <div className="relative">
                <select
                  id="ticketType"
                  name="ticketType"
                  value={formData.ticketType}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Category</option>
                  {TICKET_TYPES.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div>
              <label htmlFor="numberOfTickets" className={labelClass}>
                Number of Tickets
              </label>
              <input
                id="numberOfTickets"
                type="number"
                name="numberOfTickets"
                value={formData.numberOfTickets}
                onChange={handleChange}
                min="1"
                placeholder="4.."
                className={inputClass}
                required
              />
            </div>

            <div>
              <label htmlFor="organizationName" className={labelClass}>
                Organization Name (Optional)
              </label>
              <input
                id="organizationName"
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="organizationType" className={labelClass}>
                Organization Type
              </label>
              <div className="relative">
                <select
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  {ORGANIZATION_TYPES.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div>
              <label htmlFor="confirmEmail" className={labelClass}>
                Confirm Email
              </label>
              <input
                id="confirmEmail"
                type="email"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
                placeholder="John555@gmail.com"
                className={inputClass}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#EB010C] text-white py-4 font-semibold rounded-lg hover:bg-[#EB010C]/90 transition-colors"
            >
              Get Tickets
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Are you sure you want to submit?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Please verify that all the information is correct before submitting. Once submitted, changes may not be allowed.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="flex-1 px-4 py-3 bg-[#EB010C] text-white font-semibold rounded-lg hover:bg-[#EB010C]/90 transition-colors"
              >
                Get Tickets
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketsForm;
