import React, { useState } from 'react';
import { X, Save, Loader2, Plus, Pencil, ChartCandlestick } from 'lucide-react';
import { toast } from 'react-toastify';
import { useAssignSharesMutation, useUpdateSharesMutation } from '../../../platform/sharesApiSlice';

const MODES = {
    assign: {
        label: 'Assign Shares',
        icon: Plus,
        title: 'Assign Shares',
        subtitle: 'Add shares on top of the current allocation',
        inputLabel: 'Assign Shares',
        placeholder: 'e.g. 50',
        submitText: 'Assign Shares',
    },
    edit: {
        label: 'Edit Shares',
        icon: Pencil,
        title: 'Edit Shares',
        subtitle: 'Replace the current allocation with a new total',
        inputLabel: 'Edit Shares',
        placeholder: 'e.g. 150',
        submitText: 'Save',
    },
};

const ShareManagementModal = ({ isOpen, onClose, member, currentShares = 0 }) => {
    const [mode, setMode] = useState('assign');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');

    const [assignShares, { isLoading: isAssigning }] = useAssignSharesMutation();
    const [updateShares, { isLoading: isUpdating }] = useUpdateSharesMutation();

    const isLoading = isAssigning || isUpdating;

    const handleModeChange = (nextMode) => {
        setMode(nextMode);
        // Pre-fill the current total when editing so admins adjust rather than retype
        setAmount(nextMode === 'edit' ? String(currentShares ?? 0) : '');
    };

    const parsedAmount = amount === '' ? null : Number(amount);
    const isValidAmount =
        parsedAmount !== null &&
        Number.isFinite(parsedAmount) &&
        Number.isInteger(parsedAmount) &&
        parsedAmount >= (mode === 'assign' ? 1 : 0);

    const projectedTotal = isValidAmount
        ? mode === 'assign'
            ? Number(currentShares || 0) + parsedAmount
            : parsedAmount
        : null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidAmount) {
            toast.error(
                mode === 'assign'
                    ? 'Enter a whole number of shares greater than 0'
                    : 'Enter a valid whole number of shares (0 or more)'
            );
            return;
        }

        try {
            if (mode === 'assign') {
                await assignShares({
                    id: member._id,
                    shares: parsedAmount,
                    note: note.trim() || undefined,
                }).unwrap();
                toast.success(
                    `${parsedAmount.toLocaleString()} shares assigned to ${member.firstName} ${member.lastName}`
                );
            } else {
                await updateShares({
                    id: member._id,
                    totalShares: parsedAmount,
                    note: note.trim() || undefined,
                }).unwrap();
                toast.success(
                    `${member.firstName} ${member.lastName}'s shares updated to ${parsedAmount.toLocaleString()}`
                );
            }
            onClose();
        } catch (err) {
            toast.error(err?.data?.message || 'Failed to update shares');
        }
    };

    if (!isOpen || !member) return null;

    const config = MODES[mode];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-xl shadow-sm overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100">
                {/* Header */}
                <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                    <div>
                        <h3 className="text-xl font-black text-slate-800">{config.title}</h3>
                        <p className="text-sm text-slate-500 font-medium">{config.subtitle}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                    {/* Member + current allocation */}
                    <div className="grid grid-cols-2 gap-6 pb-6 mb-6 border-b border-slate-50">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Member</p>
                            <p className="text-sm font-bold text-slate-800">
                                {member.firstName} {member.lastName}
                            </p>
                            <p className="text-xs text-slate-400 font-medium truncate" title={member.email}>{member.email}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Current Shares</p>
                            <p className="text-2xl font-black text-slate-800 flex items-center gap-2">
                                <ChartCandlestick size={18} className="text-orange-500" />
                                {Number(currentShares || 0).toLocaleString()}
                            </p>
                        </div>
                    </div>

                    {/* Mode switch */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {Object.entries(MODES).map(([key, item]) => {
                            const Icon = item.icon;
                            const isActive = mode === key;
                            return (
                                <button
                                    key={key}
                                    type="button"
                                    onClick={() => handleModeChange(key)}
                                    className={`flex items-center justify-center gap-2 px-4 py-3 text-xs font-black uppercase tracking-wider border transition-all active:scale-95 ${isActive
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-200'
                                        : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50'
                                        }`}
                                >
                                    <Icon size={14} />
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1">
                                {config.inputLabel}
                            </label>
                            <input
                                type="number"
                                inputMode="numeric"
                                name="shares"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                                min={mode === 'assign' ? 1 : 0}
                                step="1"
                                placeholder={config.placeholder}
                                className="w-full px-4 py-3.5 bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm font-semibold text-slate-700 outline-none"
                            />
                            {amount !== '' && !isValidAmount && (
                                <p className="text-xs font-bold text-red-500 ml-1">
                                    {mode === 'assign'
                                        ? 'Enter a whole number greater than 0'
                                        : 'Enter a whole number of 0 or more'}
                                </p>
                            )}
                            {projectedTotal !== null && (
                                <p className="text-xs font-bold text-slate-400 ml-1">
                                    New total after {mode === 'assign' ? 'assignment' : 'edit'}:{' '}
                                    <span className="text-slate-700">{projectedTotal.toLocaleString()}</span>
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1">
                                Note (Optional)
                            </label>
                            <textarea
                                name="note"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                rows="2"
                                placeholder="Reason for this share change..."
                                className="w-full px-4 py-3.5 bg-slate-50 border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 transition-all text-sm font-semibold text-slate-700 outline-none resize-none"
                            ></textarea>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-4 border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading || !isValidAmount}
                            className="flex-[2] px-6 py-4 bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 shadow-sm shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                            {config.submitText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShareManagementModal;
