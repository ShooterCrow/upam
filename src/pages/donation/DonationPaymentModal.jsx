import React, { useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { X, Lock } from 'lucide-react';

const DonationPaymentModal = ({ isOpen, onClose, amount, onSuccess, donorInfo }) => {
    const [isProcessing, setIsProcessing] = useState(false);

    // Provide default email if missing to satisfy Flutterwave
    const config = {
        public_key: import.meta.env.VITE_FLW_PUBLIC_KEY || 'FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxx-X',
        tx_ref: `UPAM-DON-${Date.now()}`,
        amount: parseFloat(amount) || 0,
        currency: 'USD',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: donorInfo?.email || 'donor@example.com',
            phone_number: donorInfo?.phone || '0000000000',
            name: `${donorInfo?.firstName || ''} ${donorInfo?.lastName || ''}`.trim() || 'Anonymous Donor',
        },
        customizations: {
            title: 'UPAM Donation',
            description: 'Support the Movement',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    if (!isOpen) return null;

    const handleProceed = () => {
        setIsProcessing(true);
        handleFlutterPayment({
            callback: (response) => {
                closePaymentModal();
                if (response.status === "successful") {
                    onSuccess();
                    onClose();
                } else {
                    setIsProcessing(false);
                }
            },
            onClose: () => {
                setIsProcessing(false);
                // Allow them to try again if they just closed the modal
            },
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200"
                role="dialog"
                aria-modal="true"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#E50914] flex items-center justify-center">
                            <Lock className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900">Secure Payment</span>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                        disabled={isProcessing}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8 text-center">
                    <div className="mb-6">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Donation Amount</p>
                        <h2 className="text-4xl font-bold text-gray-900">${amount}</h2>
                    </div>
                    
                    <p className="text-gray-600 mb-8">
                        You will be redirected to our secure payment partner, Flutterwave, to complete your donation.
                    </p>

                    <button
                        onClick={handleProceed}
                        disabled={isProcessing}
                        className="w-full bg-[#EB010C] text-white py-4 rounded-md font-semibold text-lg hover:bg-red-700 transition-colors flex justify-center items-center shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isProcessing ? (
                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            `Proceed to Pay $${amount}`
                        )}
                    </button>
                    
                    <div className="mt-6 flex items-center justify-center gap-1 text-xs text-gray-500">
                        <Lock className="w-3 h-3" />
                        <span>Secured by Flutterwave</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationPaymentModal;
