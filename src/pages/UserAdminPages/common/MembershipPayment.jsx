import React, { useState, useEffect } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Confetti from 'react-confetti';
import { ArrowLeft, ArrowRight, Check, Edit, Trash2, Plus, Loader2, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingState from '../../../component/ui/LoadingState';

import useAuth from '../../../hooks/useAuth';
import { useVerifyPaymentMutation } from '../admin/membershipPayment/paymentsApiSlice';
import { useCreateMembershipPlanMutation, useDeleteMembershipPlanMutation, useGetMembershipPlansQuery, useUpdateMembershipPlanMutation } from '../admin/membershipPayment/membershipPlansApiSlice';
import { useGetChaptersQuery, useUpdateChapterCurrencyMutation } from '../admin/chapters/chaptersApiSlice';
import SearchableCurrencySelect from '../../../component/ui/SearchableCurrencySelect';

const purposes = [
    { label: 'Membership Fee', value: 'Membership Fee' },
    { label: 'Donation', value: 'Donation' }
];

const MembershipPayment = () => {
    const [step, setStep] = useState('tier-selection'); // 'tier-selection', 'form', 'processing', 'success'
    const [selectedTier, setSelectedTier] = useState('');
    const [selectedPurpose, setSelectedPurpose] = useState(purposes[0]);
    const [selectedPlanID, setSelectedPlanID] = useState('');
    const [donationAmount, setDonationAmount] = useState('');
    const [selectedChapterId, setSelectedChapterId] = useState('');
    const [currencyUpdated, setCurrencyUpdated] = useState(false);
    const [responseMessage, setResponseMessage] = useState(['', '']);

    // Auth
    const {
        isAdmin,
        isRepresentative,
        user: currentUser,
        chapterId,
        chapterName,
        representedChapter,
        representedChapterId,
        representedChapterName,
    } = useAuth();
    const membershipLevel = selectedTier ? (selectedTier === 'tier-a' ? 'diaspora' : 'national') : undefined;
    const isPrivilegedPlanViewer = isAdmin || currentUser?.roles?.includes('manager');
    const ownMembershipChapterId = isRepresentative
        ? representedChapterId || chapterId
        : chapterId;
    const ownMembershipChapterName = isRepresentative
        ? representedChapterName || chapterName
        : chapterName;
    const ownMembershipChapter = isRepresentative
        ? representedChapter || currentUser?.chapter
        : currentUser?.chapter;
    const effectiveChapterId = isPrivilegedPlanViewer ? selectedChapterId : ownMembershipChapterId;
    const { data: chaptersData = [], isLoading: isLoadingChapters } = useGetChaptersQuery(
        undefined,
        { skip: selectedTier !== 'tier-b' || !isPrivilegedPlanViewer },
    );
    const chapters = chaptersData?.data || chaptersData || [];
    const assignedChapter = representedChapter || chapters.find(
        chapter => String(chapter.representative?._id || chapter.representative) === String(currentUser?.id),
    );
    // console.log(String(currentUser?.id), chaptersData);
    const canManagePlans = isAdmin || (
        isRepresentative &&
        !isAdmin &&
        selectedTier === 'tier-b' &&
        assignedChapter &&
        effectiveChapterId === assignedChapter._id
    );
    const canCreatePlan =
        (isAdmin && selectedTier === 'tier-a') ||
        (isRepresentative && !isAdmin && selectedTier === 'tier-b' && assignedChapter && effectiveChapterId === assignedChapter._id);
    const canDeletePlan = isRepresentative && !isAdmin && selectedTier === 'tier-b' && assignedChapter && effectiveChapterId === assignedChapter._id;
    const purposeOptions = [
        {
            label: selectedTier === 'tier-b' ? 'Tier B National Membership Fee' : 'Tier A Membership Fee',
            value: 'Membership Fee',
        },
        purposes[1],
    ];
    const selectedPurposeLabel = purposeOptions.find(purpose => purpose.value === selectedPurpose.value)?.label;
    const profilePath = isAdmin || currentUser?.roles?.includes('manager') || isRepresentative
        ? '/dashboard/my-profile'
        : '/user/my-profile';

    // Queries & Mutations
    const { currentData: plansData, isLoading: isLoadingPlans } = useGetMembershipPlansQuery(
        {
            membershipLevel,
            chapterId: membershipLevel === 'national'
                ? effectiveChapterId
                : undefined,
        },
        {
            skip: !membershipLevel || (
                membershipLevel === 'national' &&
                !effectiveChapterId
            ),
        },
    );
    const visibleChapterId = effectiveChapterId;
    const plans = (plansData || []).filter(
        plan =>
            (plan.membershipLevel || 'diaspora') === membershipLevel &&
            (membershipLevel !== 'national' || String(plan.chapter?._id || plan.chapter) === visibleChapterId),
    );
    const activeChapter = isPrivilegedPlanViewer
        ? chapters.find(chapter => String(chapter._id) === String(effectiveChapterId))
        : ownMembershipChapter;

    // CRUD Mutations
    const [createPlan, { isLoading: isCreating }] = useCreateMembershipPlanMutation();
    const [updatePlan, { isLoading: isUpdating }] = useUpdateMembershipPlanMutation();
    const [deletePlan, { isLoading: isDeleting }] = useDeleteMembershipPlanMutation();
    const [updateChapterCurrency, { isLoading: isUpdatingCurrency, isSuccess: isUpdateCurrencySuccess }] = useUpdateChapterCurrencyMutation();

    useEffect(() => {
        if (!plans.some(plan => plan._id === selectedPlanID)) {
            setSelectedPlanID(plans[0]?._id || '');
        }
    }, [plans, selectedPlanID]);

    useEffect(() => {
        if (isUpdateCurrencySuccess) {
            setResponseMessage(['Currency updated successfully.', 'blue']);
            setCurrencyUpdated(true);
            setTimeout(() => {
                setCurrencyUpdated(false);
            }, 3000)
        }
    }, [isUpdateCurrencySuccess]);

    useEffect(() => {
        if (selectedTier === 'tier-b' && !selectedChapterId) {
            const homeChapterId = currentUser?.chapter?._id || currentUser?.chapter;
            const defaultChapterId = isPrivilegedPlanViewer
                ? chapters.find(chapter => String(chapter._id) === String(homeChapterId))?._id
                : ownMembershipChapterId;
            if (defaultChapterId) setSelectedChapterId(defaultChapterId);
        }
    }, [selectedTier, selectedChapterId, chapters, currentUser?.chapter, isPrivilegedPlanViewer, ownMembershipChapterId]);

    // Admin CRUD Form State
    const [isEditingPlan, setIsEditingPlan] = useState(false);
    const [crudForm, setCrudForm] = useState({ id: '', name: '', currency: '', price: '' });

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

    const selectedPlan = plans.find(plan => plan._id === selectedPlanID);
    const paymentCurrency = selectedTier === 'tier-b'
        ? activeChapter?.currency || selectedPlan?.chapter?.currency || selectedPlan?.currency || 'USD'
        : selectedPlan?.currency || 'USD';

    const formatAmount = (amount, currency) => {
        try {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
        } catch {
            return `${currency} ${Number(amount).toFixed(2)}`;
        }
    };

    const config = {
        public_key: import.meta.env.VITE_FLW_PUBLIC_KEY || 'FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxx-X',
        tx_ref: `UPAM-${Date.now()}`,
        amount: determineAmount(),
        currency: paymentCurrency,
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: currentUser?.email || 'user@example.com',
            phone_number: currentUser?.phone || '0000000000',
            name: `${currentUser?.firstName} ${currentUser?.lastName}` || 'John Doe',
        },
        customizations: {
            title: 'UPAM Payment',
            description: selectedPurposeLabel,
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
                            currency: paymentCurrency,
                            paymentPlan: determineTitleOptions(),
                            purpose: selectedPurpose.value,
                            membershipLevel: selectedTier === 'tier-b' ? 'national' : selectedPurpose.value === 'Membership Fee' ? membershipLevel : undefined,
                            chapterId: selectedTier === 'tier-b' ? effectiveChapterId : undefined,
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
                await updatePlan({ id: crudForm.id, name: crudForm.name, price: Number(crudForm.price), currency: crudForm.currency }).unwrap();
            } else {
                await createPlan({
                    name: crudForm.name,
                    price: Number(crudForm.price),
                    currency: crudForm.currency,
                    membershipLevel,
                    ...(membershipLevel === 'national' ? { chapter: effectiveChapterId } : {}),
                }).unwrap();
            }
            resetCrudForm();
        } catch (error) {
            console.error("Failed to save plan:", error);
            alert("Failed to save plan. Please ensure name is unique and price is valid.");
        }
    };

    const updateCurrencyHandler = async (e) => {
        e.preventDefault();
        if (!crudForm.currency || !/^[A-Z]{3}$/.test(crudForm.currency)) {
            setResponseMessage(['Select a different currency from the list.', 'red']);
            setCurrencyUpdated(true);
            setTimeout(() => {
                setCurrencyUpdated(false);
            }, 3000)
            return
        }
        try {
            const savedCurrency = crudForm.currency;
            await updateChapterCurrency({ id: effectiveChapterId, currency: savedCurrency }).unwrap();
            // Keep the saved selection in the controlled input; clearing the whole
            // CRUD form falls back to the possibly stale chapter query value.
            setCrudForm((currentForm) => ({ ...currentForm, currency: savedCurrency }));
        } catch (error) {
            console.error("Failed to update currency:", error);
            alert("Failed to update currency. Please try again.");
        }
    }

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

    if (step === 'tier-selection') {
        const tierOptions = [
            {
                id: 'tier-a',
                title: 'Tier A Payment',
                subtitle: 'Diaspora Level',
                description: 'Choose this option for Tier A membership dues.',
            },
            {
                id: 'tier-b',
                title: 'Tier B Payment',
                subtitle: 'National Level',
                description: 'Choose this option for Tier B membership dues at the national level.',
            },
        ];

        return (
            <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center animate-in fade-in duration-500">
                <section className="w-full max-w-3xl bg-white p-8 md:p-10 shadow-sm">
                    <div className="text-center mb-8">
                        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-50 text-[#E50914] mb-4">
                            <CreditCard className="w-7 h-7" />
                        </span>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E50914] mb-2">Membership Payment</p>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Choose your payment level</h1>
                        <p className="text-sm text-gray-500 mt-3">Select the membership tier you want to pay for to continue.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2" role="radiogroup" aria-label="Membership payment level">
                        {tierOptions.map((tier) => {
                            const isSelected = selectedTier === tier.id;
                            return (
                                <button
                                    key={tier.id}
                                    type="button"
                                    role="radio"
                                    aria-checked={isSelected}
                                    onClick={() => setSelectedTier(tier.id)}
                                    className={`relative w-full text-left border-2 p-6 transition-all hover:border-red-300 hover:shadow-md ${isSelected ? 'border-[#E50914] bg-red-50/50 shadow-sm' : 'border-gray-200 bg-white'}`}
                                >
                                    <span className={`absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full border ${isSelected ? 'border-[#E50914] bg-[#E50914] text-white' : 'border-gray-300 text-transparent'}`}>
                                        <Check className="w-4 h-4" />
                                    </span>
                                    <span className="block text-lg font-bold text-gray-900 pr-8">{tier.title}</span>
                                    <span className="block mt-2 text-sm font-semibold text-[#E50914]">{tier.subtitle}</span>
                                    <span className="block mt-4 text-sm leading-6 text-gray-500">{tier.description}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            type="button"
                            disabled={!selectedTier}
                            onClick={() => setStep('form')}
                            className="inline-flex items-center gap-2 bg-[#E50914] px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                        >
                            Continue to payment <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </section>
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
                <button
                    type="button"
                    onClick={() => setStep('tier-selection')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#E50914] mb-5"
                >
                    <ArrowLeft className="w-4 h-4" /> Change payment level
                </button>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Membership Payment</h2>
                <p className="text-sm font-semibold text-[#E50914] mb-2">
                    {selectedTier === 'tier-a' ? 'Tier A Payment · Defined Diaspora' : 'Tier B Payment · National Level'}
                </p>
                {/* <p className="text-gray-500 text-sm mb-8">Outstanding Balance ($0.00) This Year</p> */}

                <div className="space-y-6">
                    {membershipLevel === 'national' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Country / Chapter</label>
                            {isPrivilegedPlanViewer && isLoadingChapters ? (
                                <div className="text-sm text-gray-500 flex items-center"><Loader2 className="w-4 h-4 mr-2 animate-spin text-red-500" /> Loading chapters...</div>
                            ) : isPrivilegedPlanViewer ? (
                                <select
                                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
                                    value={selectedChapterId}
                                    onChange={(event) => {
                                        setSelectedChapterId(event.target.value);
                                        setIsEditingPlan(false);
                                        setCrudForm({ id: '', name: '', price: '' });
                                    }}
                                >
                                    <option value="">Select country / chapter</option>
                                    {chapters.map(chapter => (
                                        <option key={chapter._id} value={chapter._id}>{chapter.chapter_name}</option>
                                    ))}
                                </select>
                            ) : ownMembershipChapterId ? (
                                <div className="w-full border border-gray-300 rounded-md p-3 bg-gray-100 text-gray-700">
                                    {ownMembershipChapterName || 'Your assigned chapter'}
                                </div>
                            ) : (
                                <div className="border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                                    <p>You can’t view Tier B plans yet because your profile doesn’t have a chapter assigned.</p>
                                    <Link to={profilePath} className="mt-2 inline-block font-bold text-[#E50914] underline hover:text-red-700">
                                        Go to My Profile to set your chapter
                                    </Link>
                                </div>
                            )}
                            {activeChapter?.currency && (
                                <p className="mt-2 text-xs text-gray-500">Payments for this chapter use <strong>{activeChapter.currency}</strong>.</p>
                            )}
                            {isRepresentative && !assignedChapter && !ownMembershipChapterId && !isLoadingChapters && (
                                <p className="mt-2 text-sm text-red-600">You are not assigned as a chapter representative.</p>
                            )}
                        </div>
                    )}

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
                            {purposeOptions.map((p, idx) => (
                                <option key={idx} value={p.value}>{p.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* 2. Select Amount / Plan */}
                    {selectedPurpose.value === 'Membership Fee' ? (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Membership Plan</label>
                            {membershipLevel === 'national' && !visibleChapterId && isPrivilegedPlanViewer ? (
                                <div className="text-sm text-gray-500 p-3 border border-gray-200 rounded bg-gray-50">Select a country / chapter to view its national plan.</div>
                            ) : membershipLevel === 'national' && !visibleChapterId ? (
                                <div className="text-sm text-gray-500 p-3 border border-gray-200 rounded bg-gray-50">A chapter must be set on your profile before a Tier B plan can be shown.</div>
                            ) : isLoadingPlans ? (
                                <div className="text-sm text-gray-500 flex items-center"><Loader2 className="w-4 h-4 mr-2 animate-spin text-red-500" /> Loading plans...</div>
                            ) : plans.length > 0 ? (
                                <select
                                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
                                    value={selectedPlanID}
                                    onChange={(e) => setSelectedPlanID(e.target.value)}
                                >
                                    {plans.map((p) => (
                                        <option key={p._id} value={p._id}>{p.name} ({formatAmount(p.price, p.chapter?.currency || p.currency || paymentCurrency)})</option>
                                    ))}
                                </select>
                            ) : (
                                <div className="text-sm text-red-500 p-3 border border-red-200 rounded bg-red-50">No membership plans available.</div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount ({paymentCurrency})</label>
                            <input
                                type="number"
                                min="1"
                                placeholder={`e.g. 50.00 ${paymentCurrency}`}
                                className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(e.target.value)}
                            />
                        </div>
                    )}

                    <div className="pt-4">
                        <button
                            onClick={handleProceed}
                            className={`w-full text-white font-medium py-4 rounded-md transition-all active:scale-[0.98] ${((isLoadingPlans && selectedPurpose.value === 'Membership Fee') || (selectedTier === 'tier-b' && !effectiveChapterId)) ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#E50914] hover:bg-red-700'}`}
                            disabled={(isLoadingPlans && selectedPurpose.value === 'Membership Fee') || (selectedTier === 'tier-b' && !effectiveChapterId)}
                        >
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>

            {/* Plans Display / Admin CRUD Panel */}
            <div className="bg-white w-full max-w-md p-8 border border-gray-200 mt-8 lg:mt-0">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-between">
                    {membershipLevel === 'national'
                        ? `National Plan${visibleChapterId ? ` · ${chapters.find(chapter => chapter._id === visibleChapterId)?.chapter_name || ownMembershipChapterName || ''}` : ''}`
                        : 'Diaspora Membership Plans'}
                    {canManagePlans && (isCreating || isUpdating || isDeleting) && <Loader2 className="w-5 h-5 text-red-500 animate-spin" />}
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
                                        {plan.chapter?.chapter_name && <p className="text-xs text-slate-500">{plan.chapter.chapter_name}</p>}
                                        <p className="text-sm text-slate-500 font-medium">{formatAmount(plan.price, plan.chapter?.currency || plan.currency || 'USD')}</p>
                                    </div>
                                    {canManagePlans && (
                                        <div className="flex space-x-2">
                                            <button onClick={() => handleEditClick(plan)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Edit"><Edit className="w-4 h-4" /></button>
                                            {canDeletePlan && <button onClick={() => handleDeletePlan(plan._id)} className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Delete"><Trash2 className="w-4 h-4" /></button>}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {canManagePlans && (
                    isEditingPlan ||
                    canCreatePlan
                ) && (
                        <>
                            <hr className="my-6 border-gray-100" />
                            {/* Add/Edit Form */}
                            <form onSubmit={handleSavePlan} className="space-y-4">
                                <h3 className="font-bold text-gray-800 mb-2">
                                    {isEditingPlan ? 'Edit Selected Plan' : membershipLevel === 'national' ? 'Create Chapter National Plan' : 'Add Tier A Diaspora Plan'}
                                </h3>
                                {membershipLevel === 'national' && visibleChapterId && (
                                    <p className="text-sm text-slate-600">Chapter: <strong>{chapters.find(chapter => chapter._id === visibleChapterId)?.chapter_name || ownMembershipChapterName}</strong></p>
                                )}
                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Plan Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Yearly Membership"
                                        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:border-red-500 bg-slate-50/50"
                                        value={crudForm.name}
                                        onChange={(e) => setCrudForm({ ...crudForm, name: e.target.value })}
                                    />
                                </div>
                                <div className="">
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Currency</label>
                                    <div className="flex space-x-3">
                                        <SearchableCurrencySelect
                                            enableBorder={true}
                                            value={crudForm.currency || (membershipLevel === 'national' ? activeChapter?.currency : activeChapter?.currency)}
                                            onChange={(currency) => setCrudForm({ ...crudForm, currency })} />
                                        <div
                                            disabled={isUpdatingCurrency}
                                            onClick={updateCurrencyHandler}
                                            className="flex-1 px-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-sm text-sm transition-all active:scale-[0.98] disabled:bg-green-400 flex justify-center items-center">
                                            {isEditingPlan ? 'Update Plan' : <>Update</>}
                                        </div>
                                    </div>
                                    {isUpdatingCurrency ? (
                                        <p className="mt-2 text-xs text-blue-500">Updating Currency...</p>
                                    ) : null}
                                    {currencyUpdated && (
                                        <p className={"mt-2 text-xs " + (responseMessage[1] === 'red' ? 'text-red-500' : 'text-green-500')}>
                                            {responseMessage[0]}  {crudForm.currency}
                                        </p>
                                        // currencyUpdated()
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Price ({activeChapter?.currency})</label>
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
                                        {isEditingPlan ? 'Update Plan' : <><Plus className="w-4 h-4 mr-1" /> {membershipLevel === 'national' ? 'Create Chapter Plan' : 'Create Tier A Plan'}</>}
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