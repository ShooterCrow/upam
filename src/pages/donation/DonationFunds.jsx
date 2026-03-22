import { useState } from 'react';
import DonationPaymentModal from './DonationPaymentModal';
import worldMapImg from '../../assets/world_map.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DonationFunds = () => {
    const [donationType, setDonationType] = useState('one-time');
    const [selectedAmount, setSelectedAmount] = useState('25');
    const [customAmount, setCustomAmount] = useState('');
    const [anonymous, setAnonymous] = useState(false);
    const [preferredArea, setPreferredArea] = useState('');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNo: '',
        country: '',
    });

    const [contactData, setContactData] = useState({
        yourName: '',
        emailAddress: '',
        message: '',
        phoneNumber: '',
    });

    const presetAmounts = ['5', '10', '25', '50'];

    const faqs = [
        {
            q: "Can I make an international donation?",
            a: "Yes, UPAM accepts donations from supporters worldwide. You can use major credit/debit cards or international bank transfers to support our Pan-African mission."
        },
        {
            q: "Can I donate anonymously?",
            a: "Absolutely. If you wish to remain anonymous, simply check the 'Anonymous Donation' box on the form, and your identity will not be publicly disclosed."
        },
        {
            q: "Will I receive a receipt for my donation?",
            a: "Yes, a digital receipt will be sent to the email address provided immediately after your transaction is processed. Please keep this for your records."
        },
        {
            q: "Can I direct my donation to a specific initiative?",
            a: "Yes, you can select your 'Preferred Area of Support' from the dropdown menu to ensure your contribution goes toward the cause you care about most, such as Education or Youth Empowerment."
        }
    ];

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email) {
            alert('Please provide at least your Full Name and Email');
            return;
        }
        setIsPaymentModalOpen(true);
    };

    const displayAmount = selectedAmount === 'custom' ? (customAmount || '0') : selectedAmount;

    const inputClass = "w-full border border-[#D1D5DB] bg-white py-3 px-4 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#EB010C] focus:border-[#EB010C] rounded-md transition-all";
    const labelClass = "block text-sm font-medium text-[#374151] mb-1.5";

    return (
        <div className="min-h-screen bg-[#F4F4F4] font-['Lato',_sans-serif]">
            
            {/* Page Header / Hero Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#111827] mb-4">
                        Donation Page
                    </h1>
                    <p className="text-sm md:text-base text-[#6B7280] max-w-2xl leading-relaxed">
                        Your financial contribution strengthens the entire UPAM movement – from digital
                        infrastructure to youth empowerment initiatives.
                    </p>
                </div>
            </div>

            {/* Donation Form Card Section */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
                <div className="max-w-[591px] mx-auto bg-white rounded-[10px] shadow-sm overflow-hidden p-8 md:p-10">
                    <h2 className="text-xl font-semibold text-[#111827] mb-8">Donation Details</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full name */}
                        <div>
                            <label className={labelClass}>Full name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleFormChange}
                                placeholder="Chuka mabachi"
                                className={inputClass}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className={labelClass}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                placeholder="e.g. info@gmail.com..."
                                className={inputClass}
                                required
                            />
                        </div>

                        {/* Phone no */}
                        <div>
                            <label className={labelClass}>Phone no</label>
                            <input
                                type="tel"
                                name="phoneNo"
                                value={formData.phoneNo}
                                onChange={handleFormChange}
                                placeholder="+234"
                                className={inputClass}
                            />
                        </div>

                        {/* Preferred Area of Support */}
                        <div>
                            <label className={labelClass}>Preferred Area of Support</label>
                            <select
                                value={preferredArea}
                                onChange={e => setPreferredArea(e.target.value)}
                                className={inputClass}
                            >
                                <option value="" disabled>Category</option>
                                <option value="education">Education</option>
                                <option value="leadership">Leadership Development</option>
                                <option value="digital">Digital Infrastructure</option>
                                <option value="youth">Youth Empowerment</option>
                                <option value="general">General Fund</option>
                            </select>
                        </div>

                        {/* Anonymous */}
                        <div className="flex items-center gap-3">
                            <input
                                id="anonymous"
                                type="checkbox"
                                checked={anonymous}
                                onChange={e => setAnonymous(e.target.checked)}
                                className="w-5 h-5 accent-[#EB010C] cursor-pointer rounded"
                            />
                            <label htmlFor="anonymous" className="text-sm text-[#4B5563] cursor-pointer">
                                Anonymous Donation / Optional
                            </label>
                        </div>

                        {/* Choose Donation Type */}
                        <div>
                            <label className={labelClass}>Choose Donation Type</label>
                            <div className="flex gap-6 mt-2">
                                <label className="flex items-center gap-2.5 text-sm text-[#374151] cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="donationType"
                                        value="one-time"
                                        checked={donationType === 'one-time'}
                                        onChange={() => setDonationType('one-time')}
                                        className="w-4 h-4 accent-[#EB010C]"
                                    />
                                    One-Time Donation
                                </label>
                                <label className="flex items-center gap-2.5 text-sm text-[#374151] cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="donationType"
                                        value="monthly"
                                        checked={donationType === 'monthly'}
                                        onChange={() => setDonationType('monthly')}
                                        className="w-4 h-4 accent-[#EB010C]"
                                    />
                                    Monthly Recurring Support
                                </label>
                            </div>
                        </div>

                        {/* Choose Amount */}
                        <div>
                            <label className={labelClass}>Choose Amount</label>
                            <div className="grid grid-cols-4 gap-3 mt-2">
                                {presetAmounts.map(amount => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                                        className={`py-2.5 px-4 text-sm font-medium border rounded-md transition-all ${
                                            selectedAmount === amount
                                                ? 'bg-[#EB010C] border-[#EB010C] text-white shadow-md'
                                                : 'bg-white border-[#D1D5DB] text-[#374151] hover:border-[#EB010C] hover:text-[#EB010C]'
                                        }`}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-4">
                                <label className="flex items-center gap-2.5 mb-2 text-sm text-[#374151] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="amount"
                                        value="custom"
                                        checked={selectedAmount === 'custom'}
                                        onChange={() => setSelectedAmount('custom')}
                                        className="w-4 h-4 accent-[#EB010C]"
                                    />
                                    Custom Amount
                                </label>
                                {selectedAmount === 'custom' && (
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                        <input
                                            type="number"
                                            min="1"
                                            value={customAmount}
                                            onChange={e => setCustomAmount(e.target.value)}
                                            placeholder="Enter amount"
                                            className={`${inputClass} pl-8`}
                                            autoFocus
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#EB010C] text-white py-4 px-6 text-base font-semibold hover:bg-[#D0010B] active:scale-[0.98] transition-all rounded-md shadow-lg shadow-red-200"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white py-20 border-y border-gray-100">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold text-[#111827] mb-4">Frequently Asked Questions</h2>
                        <p className="text-[#6B7280] mb-12">
                            Everything you need to know about supporting the UPAM movement.
                        </p>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border-b border-gray-100 last:border-0 pb-4">
                                    <button
                                        className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    >
                                        <span className="text-lg font-medium text-[#111827] group-hover:text-[#EB010C] transition-colors">
                                            {faq.q}
                                        </span>
                                        {openFaq === idx ? (
                                            <ChevronUp className="w-5 h-5 text-[#EB010C]" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        )}
                                    </button>
                                    {openFaq === idx && (
                                        <div className="pb-4 text-[#4B5563] leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-[#F8F9FA] px-6 md:px-12 py-24">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Contact Info & Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#111827] mb-8">
                                Get in touch with us. We're here to assist you.
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClass}>Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="example@mail.com"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClass}>Phone Number (optional)</label>
                                    <input
                                        type="tel"
                                        placeholder="+234 ..."
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label className={labelClass}>Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="How can we help?"
                                        className={`${inputClass} resize-none`}
                                    ></textarea>
                                </div>
                                <button
                                    type="button"
                                    className="px-10 py-3.5 bg-[#EB010C] text-white text-base font-semibold hover:bg-[#D0010B] transition-all rounded-md shadow-md"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* World Map with Pins */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#EB010C]/5 rounded-3xl -rotate-2 -z-10"></div>
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                                <img
                                    src={worldMapImg}
                                    alt="Global reach"
                                    className="w-full h-auto opacity-40 grayscale"
                                />
                                {[
                                    { label: 'Kenya', top: '38%', left: '58%' },
                                    { label: 'Nigeria', top: '46%', left: '44%' },
                                    { label: 'Tanzania', top: '52%', left: '60%' },
                                    { label: 'Cameroon', top: '44%', left: '48%' },
                                    { label: 'Malawi', top: '58%', left: '59%' },
                                    { label: 'Namibia', top: '65%', left: '52%' },
                                ].map(pin => (
                                    <div
                                        key={pin.label}
                                        className="absolute flex flex-col items-center group cursor-pointer"
                                        style={{ top: pin.top, left: pin.left }}
                                    >
                                        <div className="w-3 h-3 bg-[#EB010C] rounded-full border-2 border-white shadow-sm group-hover:scale-125 transition-transform" />
                                        <span className="mt-1 text-[10px] font-bold text-gray-800 bg-white/90 px-1.5 py-0.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {pin.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DonationPaymentModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                amount={displayAmount}
                donorInfo={{ firstName: formData.fullName, email: formData.email }}
                onSuccess={() => alert('Thank you for your generous donation!')}
            />
        </div>
    );
};

export default DonationFunds;
