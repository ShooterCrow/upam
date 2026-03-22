import { useState } from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import DonationPaymentModal from './DonationPaymentModal';
import worldMapImg from '../../assets/world_map.png';

/* ── World map with circular avatar markers ── */
const mapMarkers = [
    { top: '24%', left: '52%', label: 'Kenya',    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face' },
    { top: '30%', left: '44%', label: 'Nigeria',  img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
    { top: '36%', left: '51%', label: 'Tanzania', img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=80&h=80&fit=crop&crop=face' },
    { top: '22%', left: '80%', label: 'Cameroon', img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=80&h=80&fit=crop&crop=face' },
    { top: '44%', left: '46%', label: 'Namibia',  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop&crop=face' },
    { top: '42%', left: '56%', label: 'Malawi',   img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face' },
];

const WorldMapWithMarkers = () => (
    <div className="relative w-full">
        <img src={worldMapImg} alt="Global reach map" className="w-full h-auto object-contain" />
        {mapMarkers.map((m, i) => (
            <div
                key={i}
                className="absolute flex flex-col items-center"
                style={{ top: m.top, left: m.left, transform: 'translate(-50%, -50%)' }}
            >
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md ring-1 ring-gray-200">
                    <img src={m.img} alt={m.label} className="w-full h-full object-cover" />
                </div>
                <div className="mt-1 bg-white text-[10px] font-medium text-gray-800 px-2 py-0.5 shadow-sm whitespace-nowrap">
                    {m.label}
                </div>
            </div>
        ))}
    </div>
);

/* ── Component ── */
const DonationFunds = () => {
    const [donationType, setDonationType]       = useState('one-time');
    const [selectedAmount, setSelectedAmount]   = useState('25');
    const [customAmount, setCustomAmount]       = useState('');
    const [anonymous, setAnonymous]             = useState(false);
    const [preferredArea, setPreferredArea]     = useState('');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNo: '',
        country: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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

    /* Shared input style – square corners to match Figma */
    const inputClass =
        'w-full border border-[#D1D5DB] bg-white py-3 px-4 text-sm text-[#374151] ' +
        'placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 ' +
        'focus:ring-[#EB010C] focus:border-[#EB010C] transition-all';

    const labelClass = 'block text-sm font-medium text-[#374151] mb-1.5';

    return (
        <div className="min-h-screen bg-[#F4F4F4] font-['Inter',_sans-serif]">

            {/* ── Page Header ── */}
            <div className="bg-[#F4F4F4]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-14 pb-10">
                    <h1 className="text-4xl md:text-5xl font-normal text-[#111827] mb-3">
                        Donation by Funds
                    </h1>
                    <p className="text-sm text-[#6B7280] max-w-xl leading-relaxed">
                        Your financial contribution strengthens the entire UPAM movement – from digital
                        infrastructure to youth empowerment initiatives.
                    </p>
                </div>
            </div>

            {/* ── Donation Form ── */}
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 pb-16">
                <form onSubmit={handleSubmit} className="max-w-[550px] space-y-6">

                    {/* Full name */}
                    <div>
                        <label className={labelClass}>Full name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleFormChange}
                            placeholder="Chuks mabuchi"
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
                            placeholder="e.g dell@gmail.com..."
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

                    {/* Country */}
                    <div>
                        <label className={labelClass}>Country</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleFormChange}
                            placeholder="e.g Ghana"
                            className={inputClass}
                        />
                    </div>

                    {/* Anonymous */}
                    <div className="flex items-center gap-3">
                        <input
                            id="anonymous"
                            type="checkbox"
                            checked={anonymous}
                            onChange={e => setAnonymous(e.target.checked)}
                            className="w-4 h-4 accent-[#EB010C] cursor-pointer"
                        />
                        <label htmlFor="anonymous" className="text-sm text-[#4B5563] cursor-pointer">
                            Anonymous Donation / Optional
                        </label>
                    </div>

                    {/* Preferred Area of Support */}
                    <div>
                        <label className={labelClass}>Preffered Area of Support</label>
                        <div className="relative">
                            <select
                                value={preferredArea}
                                onChange={e => setPreferredArea(e.target.value)}
                                className={`${inputClass} appearance-none pr-10`}
                            >
                                <option value="" disabled>Category</option>
                                <option value="education">Education</option>
                                <option value="leadership">Leadership Development</option>
                                <option value="digital">Digital Infrastructure</option>
                                <option value="youth">Youth Empowerment</option>
                                <option value="general">General Fund</option>
                            </select>
                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                        </div>
                    </div>

                    {/* Choose Donation Type */}
                    <div>
                        <label className={labelClass}>Choose Donation Type</label>
                        <div className="flex flex-col gap-3 mt-2">
                            {[
                                { value: 'one-time', label: 'One-Time Donation' },
                                { value: 'monthly', label: 'Monthly Recurring Support' },
                            ].map(opt => (
                                <label key={opt.value} className="flex items-center gap-2.5 text-sm text-[#374151] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="donationType"
                                        value={opt.value}
                                        checked={donationType === opt.value}
                                        onChange={() => setDonationType(opt.value)}
                                        className="w-4 h-4 accent-[#EB010C]"
                                    />
                                    {opt.label}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Choose Amount – vertical radio list */}
                    <div>
                        <label className={labelClass}>Choose Amount</label>
                        <div className="flex flex-col gap-3 mt-2">
                            {['5', '10', '25', '50'].map(amount => (
                                <label key={amount} className="flex items-center gap-2.5 text-sm text-[#374151] cursor-pointer">
                                    <input
                                        type="radio"
                                        name="amount"
                                        value={amount}
                                        checked={selectedAmount === amount}
                                        onChange={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                                        className="w-4 h-4 accent-[#EB010C]"
                                    />
                                    ${amount}
                                </label>
                            ))}
                            <label className="flex items-center gap-2.5 text-sm text-[#374151] cursor-pointer">
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
                                <div className="relative ml-6">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
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
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-[#EB010C] text-white py-3.5 px-6 text-sm font-semibold hover:bg-[#D0010B] active:scale-[0.99] transition-all"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </form>
            </div>

            {/* ── Contact Section ── */}
            <div className="bg-white py-16">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left: Contact form */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-10">
                                Get in touch with us. We're here to assist you.
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
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
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClass}>Message</label>
                                        <input
                                            type="text"
                                            placeholder="How can we help?"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Phone Number (optional)</label>
                                        <input
                                            type="tel"
                                            placeholder="+234 ..."
                                            className={inputClass}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="px-8 py-3 bg-[#EB010C] text-white text-sm font-semibold hover:bg-[#D0010B] transition-all"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>

                            {/* Social icons */}
                            <div className="flex gap-3 mt-10">
                                {[
                                    { icon: <Facebook size={16} />, href: '#' },
                                    { icon: <Instagram size={16} />, href: '#' },
                                    { icon: <Twitter size={16} />, href: '#' },
                                    { icon: <MessageCircle size={16} />, href: '#' },
                                ].map((s, i) => (
                                    <a
                                        key={i}
                                        href={s.href}
                                        className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-[#EB010C] hover:text-[#EB010C] transition-colors"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right: World map with avatar markers */}
                        <div className="relative w-full">
                            <WorldMapWithMarkers />
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
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
