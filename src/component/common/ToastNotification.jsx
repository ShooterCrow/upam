import React, { useState, useEffect, useCallback } from 'react';
import { AlertCircle, ArrowUpAZ, ArrowDownAZ, ArrowUpDown, ArrowUp01, ArrowDown01, Info } from 'lucide-react';

/**
 * Generic toast notification component.
 *
 * Listens for global custom events:
 *   - 'api-rate-limit-exceeded' → shows an error toast
 *   - 'toast-notification'      → shows a generic info/sort toast
 *                                  event.detail = { message, icon?, type? }
 *                                  type: 'error' | 'info' | 'sort-asc' | 'sort-desc' | 'sort-reset'
 */

const ICON_MAP = {
    'error': AlertCircle,
    'info': Info,
    'sort-asc': ArrowUpAZ,
    'sort-desc': ArrowDownAZ,
    'sort-num-asc': ArrowUp01,
    'sort-num-desc': ArrowDown01,
    'sort-reset': ArrowUpDown,
};

const COLOR_MAP = {
    'error': { border: 'border-[#EB010C]', icon: 'text-[#EB010C]' },
    'info': { border: 'border-blue-500', icon: 'text-blue-500' },
    'sort-asc': { border: 'border-emerald-500', icon: 'text-emerald-500' },
    'sort-desc': { border: 'border-orange-500', icon: 'text-orange-500' },
    'sort-num-asc': { border: 'border-emerald-500', icon: 'text-emerald-500' },
    'sort-num-desc': { border: 'border-orange-500', icon: 'text-orange-500' },
    'sort-reset': { border: 'border-slate-400', icon: 'text-slate-400' },
};

const ToastNotification = () => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = 'info') => {
        const id = Date.now();
        // Replace all existing toasts so rapid clicks don't stack
        setToasts([{ id, message, type }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 2500);
    }, []);

    useEffect(() => {
        const handleRateLimit = (e) => {
            addToast(e.detail?.message || 'Too many requests. Please try again later.', 'error');
        };
        const handleGeneric = (e) => {
            addToast(e.detail?.message || 'Done.', e.detail?.type || 'info');
        };

        window.addEventListener('api-rate-limit-exceeded', handleRateLimit);
        window.addEventListener('toast-notification', handleGeneric);

        return () => {
            window.removeEventListener('api-rate-limit-exceeded', handleRateLimit);
            window.removeEventListener('toast-notification', handleGeneric);
        };
    }, [addToast]);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] flex flex-col items-center gap-2 pointer-events-none">
            {toasts.map((toast) => {
                const IconComponent = ICON_MAP[toast.type] || Info;
                const colors = COLOR_MAP[toast.type] || COLOR_MAP['info'];
                return (
                    <div
                        key={toast.id}
                        className={`bg-white border-l-4 ${colors.border} shadow-lg px-6 py-2 flex items-center gap-4 min-w-[280px] max-w-[90vw] animate-in fade-in slide-in-from-bottom-4 duration-300`}
                    >
                        <IconComponent className={`${colors.icon} shrink-0`} size={20} />
                        <span className="text-slate-600 text-xs font-medium">{toast.message}</span>
                    </div>
                );
            })}
        </div>
    );
};

/**
 * Helper to fire a sort toast from anywhere in the app.
 */
export const fireSortToast = (message, type = 'sort-asc') => {
    window.dispatchEvent(new CustomEvent('toast-notification', { detail: { message, type } }));
};

export default ToastNotification;
