import React, { useState, useEffect } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Confetti from 'react-confetti';
import { Check, Edit, Trash2, Plus, Loader2, CreditCard } from 'lucide-react';
import LoadingState from '../../../component/ui/LoadingState';

import { useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { useVerifyPaymentMutation } from '../admin/membershipPayment/paymentsApiSlice';
import { useCreateMembershipPlanMutation, useDeleteMembershipPlanMutation, useGetMembershipPlansQuery, useUpdateMembershipPlanMutation } from '../admin/membershipPayment/membershipPlansApiSlice';

const purposes = [
    { label: 'Membership Fee', value: 'Membership Fee' },
    { label: 'Donation', value: 'Donation' }
];

const MembershipPayment = () => {
    // Auth
    const { isAdmin, user: currentUser } = useAuth();

    // Queries & Mutations
    const { data: plansData, isLoading: isLoadingPlans } = useGetMembershipPlansQuery();
    const plans = plansData || [];

    // CRUD Mutations
    const [createPlan, { isLoading: isCreating }] = useCreateMembershipPlanMutation();
    const [updatePlan, { isLoading: isUpdating }] = useUpdateMembershipPlanMutation();
    const [deletePlan, { isLoading: isDeleting }] = useDeleteMembershipPlanMutation();

    // Component State
    const [step, setStep] = useState('form'); // 'form', 'processing', 'success'

    // Form State
    const [selectedPurpose, setSelectedPurpose] = useState(purposes[0]);
    const [selectedPlanID, setSelectedPlanID] = useState('');
    const [donationAmount, setDonationAmount] = useState('');

    useEffect(() => {
        if (plans.length > 0 && !selectedPlanID) {
            setSelectedPlanID(plans[0]._id);
        }
    }, [plans]);

    // Admin CRUD Form State
    const [isEditingPlan, setIsEditingPlan] = useState(false);
    const [crudForm, setCrudForm] = useState({ id: '', name: '', price: '' });

    // API Mutation for Payments
    const [verifyPayment] = useVerifyPaymentMutation();

    // Get Window Size for Confetti
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const determineAmount = () => {
        if (selectedPurpose.value === 'Membership Fee') {
            const plan = plans.find(p => p._id === selectedPlanID);
            return plan ? plan.price : 0;
        }
        return parseFloat(donationAmount) || 0;
    };

    const determineTitleOptions = () => {
        if (selectedPurpose.value === 'Membership Fee') {
            const plan = plans.find(p => p._id === selectedPlanID);
            return plan ? plan.name : 'Unknown Plan';
        }
        return 'Custom Donation';
    };

    const config = {
        public_key: import.meta.env.VITE_FLW_PUBLIC_KEY || 'FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxx-X',
        tx_ref: `UPAM-${Date.now()}`,
        amount: determineAmount(),
        currency: 'USD',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: currentUser?.email || 'user@example.com',
            phone_number: currentUser?.phone || '0000000000',
            name: `${currentUser?.firstName} ${currentUser?.lastName}` || 'John Doe',
        },
        customizations: {
            title: 'UPAM Payment',
            description: selectedPurpose.label,
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    const handleProceed = () => {
        // Everyone can proceed with payment
        const amountToPay = determineAmount();
        if (amountToPay <= 0) {
            alert('Please select a valid plan or enter a donation amount greater than 0.');
            return;
        }

        setStep('processing');

        handleFlutterPayment({
            callback: async (response) => {
                closePaymentModal();

                if (response.status === "successful") {
                    try {
                        await verifyPayment({
                            transaction_id: response.transaction_id,
                            tx_ref: response.tx_ref,
                            amount: amountToPay,
                            currency: 'USD',
                            paymentPlan: determineTitleOptions(),
                            purpose: selectedPurpose.value
                        }).unwrap();

                        setStep('success');
                    } catch (error) {
                        console.error("Backend verification failed", error);
                        alert("Payment verification failed. Please contact support.");
                        setStep('form');
                    }
                } else {
                    setStep('form');
                }
            },
            onClose: () => {
                if (step !== 'success') {
                    setStep('form');
                }
            },
        });
    };

    // Admin Handlers
    const handleSavePlan = async (e) => {
        e.preventDefault();
        try {
            if (isEditingPlan && crudForm.id) {
                await updatePlan({ id: crudForm.id, name: crudForm.name, price: Number(crudForm.price) }).unwrap();
            } else {
                await createPlan({ name: crudForm.name, price: Number(crudForm.price) }).unwrap();
            }
            resetCrudForm();
        } catch (error) {
            console.error("Failed to save plan:", error);
            alert("Failed to save plan. Please ensure name is unique and price is valid.");
        }
    };

    const handleDeletePlan = async (id) => {
        if (window.confirm('Are you sure you want to delete this plan?')) {
            try {
                await deletePlan(id).unwrap();
            } catch (error) {
                console.error("Failed to delete plan:", error);
            }
        }
    };

    const handleEditClick = (plan) => {
        setIsEditingPlan(true);
        setCrudForm({ id: plan._id, name: plan.name, price: plan.price });
    };

    const resetCrudForm = () => {
        setIsEditingPlan(false);
        setCrudForm({ id: '', name: '', price: '' });
    };

    if (step === 'processing') {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="bg-white p-8 w-full max-w-md">
                    <LoadingState message="Initializing Payment..." />
                </div>
            </div>
        );
    }

    if (step === 'success') {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={false}
                    numberOfPieces={400}
                />
                <div className="bg-white p-12 w-full max-w-md flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden">
                    <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center mb-6 z-10 bg-white">
                        <Check className="text-green-500 w-10 h-10" strokeWidth={3} />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800 z-10">Payment Successful</h2>
                    <p className="text-gray-500 text-sm z-10">Your transaction has successfully been completed.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center lg:items-start lg:flex-row lg:justify-center lg:space-x-8 pt-12 animate-in fade-in duration-500">

            {/* Payment Form */}
            <div className="bg-white w-full max-w-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Membership Payment</h2>
                <p className="text-gray-500 text-sm mb-8">Outstanding Balance ($0.00) This Year</p>

                <div className="space-y-6">
                    {/* 1. What are you paying for */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of Payment</label>
                        <select
                            className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
                            value={selectedPurpose.value}
                            onChange={(e) => {
                                const selected = purposes.find(p => p.value === e.target.value);
                                setSelectedPurpose(selected);
                            }}
                        >
                            {purposes.map((p, idx) => (
                                <option key={idx} value={p.value}>{p.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* 2. Select Amount / Plan */}
                    {selectedPurpose.value === 'Membership Fee' ? (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Membership Plan</label>
                            {isLoadingPlans ? (
                                <div className="text-sm text-gray-500 flex items-center"><Loader2 className="w-4 h-4 mr-2 animate-spin text-red-500" /> Loading plans...</div>
                            ) : plans.length > 0 ? (
                                <select
                                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
                                    value={selectedPlanID}
                                    onChange={(e) => setSelectedPlanID(e.target.value)}
                                >
                                    {plans.map((p) => (
                                        <option key={p._id} value={p._id}>{p.name} (${p.price.toFixed(2)})</option>
                                    ))}
                                </select>
                            ) : (
                                <div className="text-sm text-red-500 p-3 border border-red-200 rounded bg-red-50">No membership plans available.</div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount ($)</label>
                            <input
                                type="number"
                                min="1"
                                placeholder="e.g. 50.00"
                                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(e.target.value)}
                            />
                        </div>
                    )}

                    <div className="pt-4">
                        <button
                            onClick={handleProceed}
                            className={`w-full text-white font-medium py-4 rounded-md transition-all active:scale-[0.98] ${isLoadingPlans && selectedPurpose.value === 'Membership Fee' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#E50914] hover:bg-red-700'}`}
                            disabled={isLoadingPlans && selectedPurpose.value === 'Membership Fee'}
                        >
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>

            {/* Plans Display / Admin CRUD Panel */}
            <div className="bg-white w-full max-w-md p-8 border border-gray-200 mt-8 lg:mt-0">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                    Membership Plans
                    {isAdmin && (isCreating || isUpdating || isDeleting) && <Loader2 className="w-5 h-5 text-red-500 animate-spin" />}
                </h2>

                {/* List Existing Plans */}
                <div className="mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {isLoadingPlans ? (
                        <p className="text-sm text-gray-500">Loading plans...</p>
                    ) : plans.length === 0 ? (
                        <p className="text-sm text-gray-500 text-center py-4">No plans available.</p>
                    ) : (
                        <ul className="space-y-3">
                            {plans.map(plan => (
                                <li key={plan._id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                    <div>
                                        <p className="font-bold text-slate-800">{plan.name}</p>
                                        <p className="text-sm text-slate-500 font-medium">${plan.price.toFixed(2)}</p>
                                    </div>
                                    {isAdmin && (
                                        <div className="flex space-x-2">
                                            <button onClick={() => handleEditClick(plan)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Edit"><Edit className="w-4 h-4" /></button>
                                            <button onClick={() => handleDeletePlan(plan._id)} className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Delete"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {isAdmin && (
                    <>
                        <hr className="my-6 border-gray-100" />
                        {/* Add/Edit Form */}
                        <form onSubmit={handleSavePlan} className="space-y-4">
                            <h3 className="font-bold text-gray-800 mb-2">{isEditingPlan ? 'Edit Selected Plan' : 'Add New Plan'}</h3>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Plan Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Gold Membership"
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:border-red-500 bg-slate-50/50"
                                    value={crudForm.name}
                                    onChange={(e) => setCrudForm({ ...crudForm, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Price ($)</label>
                                <input
                                    type="number"
                                    required
                                    min="0"
                                    step="any"
                                    placeholder="0.00"
                                    className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:border-red-500 bg-slate-50/50"
                                    value={crudForm.price}
                                    onChange={(e) => setCrudForm({ ...crudForm, price: e.target.value })}
                                />
                            </div>

                            <div className="flex space-x-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={isCreating || isUpdating}
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-sm transition-all shadow-md active:scale-[0.98] disabled:bg-green-400 flex justify-center items-center"
                                >
                                    {isEditingPlan ? 'Update Plan' : <><Plus className="w-4 h-4 mr-1" /> Create Plan</>}
                                </button>
                                {isEditingPlan && (
                                    <button
                                        type="button"
                                        onClick={resetCrudForm}
                                        className="px-4 py-3 border border-gray-200 text-gray-500 font-bold rounded-lg text-sm hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default MembershipPayment;