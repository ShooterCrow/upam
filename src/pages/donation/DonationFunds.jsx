import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Heart, Users, Globe2, Shield } from 'lucide-react';
import FAQ from '../../component/ui/FAQ';
import DonationPaymentModal from './DonationPaymentModal';
import worldMapImg from '../../assets/world_map.png';

const Donation = () => {
    const [donationType, setDonationType] = useState('one-time');
    const [selectedAmount, setSelectedAmount] = useState('50');
    const [customAmount, setCustomAmount] = useState('');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const presetAmounts = ['10', '20', '50', '100', '500'];

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setSelectedAmount('Other');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDonateClick = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.email) {
            alert("Please provide at least your First Name and Email");
            return;
        }
        setIsPaymentModalOpen(true);
    };

    const displayAmount = selectedAmount === 'Other' ? (customAmount || '0') : selectedAmount;

    return (
        <div className="min-h-screen bg-white text-black font-['Inter',_sans-serif]">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900 border-b-4 border-[#2E7D32]">
                <div className="absolute inset-0">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/b3564abd0e1fb1dfb19649f1092e28adc8a02548?width=1310"
                        alt="Graduation background"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>
                
                <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Support the Movement.<br className="hidden md:block" /> Strengthen the Mission.
                    </h1>
                    <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto font-light">
                        Your contribution helps us build a more united, self-reliant, and prosperous Africa. Every donation directly impacts our programs and communities.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button 
                            onClick={() => document.getElementById('donation-form').scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-8 py-3.5 bg-[#EB010C] text-white font-semibold rounded hover:bg-red-700 transition-colors shadow-lg flex justify-center"
                        >
                            Donate Funds
                        </button>
                        <Link 
                            to="/volunteer"
                            className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 font-semibold rounded hover:bg-gray-100 transition-colors shadow-lg flex justify-center"
                        >
                            Offer Professional Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="py-12 bg-[#F4F4F4]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-4">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-2">200+</h3>
                            <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold">Lives Impacted</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-2">15+</h3>
                            <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold">Countries Reach</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-2">5,000+</h3>
                            <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold">Active Members</p>
                        </div>
                        <div className="p-4">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-2">10</h3>
                            <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold">Major Projects</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Your Support Matters & Main Donation Form */}
            <section className="py-20 bg-white" id="donation-form">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Text and Map Column */}
                        <div className="flex flex-col gap-8 order-2 lg:order-1">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Your Support Matters</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    A United Africa for sustainable development for all Africans Descent. UPAM is a continental evolution and an all-African organization, seeking to enhance the unification of African nations as a whole and reclaiming its hope for the destined future.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    Your donation enables us to fund critical education initiatives, leadership programs, and economic development projects that reach every corner of the continent and the diaspora.
                                </p>
                            </div>
                            
                            {/* Graphic */}
                            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center p-8 border border-gray-100">
                                <img
                                    src={worldMapImg}
                                    alt="Global reach"
                                    className="w-full h-auto object-contain opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#2E7D32]/10 via-transparent to-[#EB010C]/5 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Donation Form Column */}
                        <div className="order-1 lg:order-2">
                            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 border border-gray-100 sticky top-24">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900">Make a Donation</h3>
                                    <p className="text-gray-500 mt-2">Choose your donation frequency and amount.</p>
                                </div>

                                {/* Tabs */}
                                <div className="flex p-1 bg-gray-100 rounded-lg mb-8">
                                    <button
                                        onClick={() => setDonationType('one-time')}
                                        className={`flex-1 py-3 text-sm font-semibold rounded-md transition-all ${
                                            donationType === 'one-time' 
                                                ? 'bg-white text-gray-900 shadow-sm' 
                                                : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        One-Time
                                    </button>
                                    <button
                                        onClick={() => setDonationType('monthly')}
                                        className={`flex-1 py-3 text-sm font-semibold rounded-md transition-all ${
                                            donationType === 'monthly' 
                                                ? 'bg-white text-gray-900 shadow-sm' 
                                                : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        Monthly
                                    </button>
                                </div>

                                <form onSubmit={handleDonateClick} className="space-y-8">
                                    {/* Amount Grid */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-4">Select Amount (USD)</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {presetAmounts.map(amount => (
                                                <button
                                                    key={amount}
                                                    type="button"
                                                    onClick={() => handleAmountSelect(amount)}
                                                    className={`py-3 px-2 text-base font-bold rounded-lg border-2 transition-all ${
                                                        selectedAmount === amount 
                                                            ? 'border-[#2E7D32] bg-[#2E7D32]/5 text-[#2E7D32]' 
                                                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                                                    }`}
                                                >
                                                    ${amount}
                                                </button>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => handleAmountSelect('Other')}
                                                className={`py-3 px-2 text-base font-bold rounded-lg border-2 transition-all ${
                                                    selectedAmount === 'Other' 
                                                        ? 'border-[#2E7D32] bg-[#2E7D32]/5 text-[#2E7D32]' 
                                                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                                                }`}
                                            >
                                                Other
                                            </button>
                                        </div>
                                        
                                        {/* Custom Amount Input */}
                                        {selectedAmount === 'Other' && (
                                            <div className="mt-4 relative animate-in fade-in slide-in-from-top-2 duration-300">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={customAmount}
                                                    onChange={handleCustomAmountChange}
                                                    placeholder="Enter custom amount"
                                                    className="w-full pl-8 pr-4 py-3 bg-white border-2 border-[#2E7D32] rounded-lg focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/20 font-semibold"
                                                    autoFocus
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Personal Info */}
                                    <div className="space-y-4 pt-4 border-t border-gray-100">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:bg-white transition-colors"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:bg-white transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#2E7D32] focus:bg-white transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#EB010C] text-white py-4 font-bold text-lg rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 flex justify-center items-center gap-2 group"
                                    >
                                        <span>Donate ${displayAmount}</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    
                                    <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-500 pt-2">
                                        <Shield className="w-4 h-4 text-[#2E7D32]" />
                                        <span>Securely processed with enterprise-grade encryption</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <div className="bg-[#F4F4F4] py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FAQ />
                </div>
            </div>

            {/* Be Part of the Movement CTA */}
            <section className="relative py-24 bg-[#2E7D32] overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full mix-blend-overlay filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay filter blur-3xl translate-y-1/2 -translate-x-1/4"></div>
                </div>
                
                <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Be Part of the Movement</h2>
                    <p className="text-white/90 text-lg mb-10 leading-relaxed">
                        Join thousands of Africans and diaspora members in building a sustainable, united future. Your contribution, whether financial or through service, makes a difference.
                    </p>
                    <button 
                        onClick={() => document.getElementById('donation-form').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-[#2E7D32] font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-xl group inline-flex items-center gap-2"
                    >
                        Donate Funds
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            {/* Render Modal */}
            <DonationPaymentModal 
                isOpen={isPaymentModalOpen} 
                onClose={() => setIsPaymentModalOpen(false)} 
                amount={displayAmount}
                donorInfo={formData}
                onSuccess={() => {
                    alert("Thank you for your generous donation!");
                    // Reset form or redirect
                }}
            />
        </div>
    );
};

export default Donation;
