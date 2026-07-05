import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

const RateLimitBlocker = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let timeoutId;

        const handleRateLimitExceeded = (e) => {
            if (e.detail?.message) {
                setErrorMessage(e.detail.message);
            } else {
                setErrorMessage("Too many requests. Please try again later.");
            }

            setIsVisible(true);

            // Auto-hide after 3 seconds
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        };

        window.addEventListener('api-rate-limit-exceeded', handleRateLimitExceeded);

        return () => {
            window.removeEventListener('api-rate-limit-exceeded', handleRateLimitExceeded);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] transition-all duration-300 ease-in-out ${isVisible
                ? 'translate-y-0 opacity-100 pointer-events-auto'
                : 'translate-y-12 opacity-0 pointer-events-none'
                }`}
        >
            <div className="bg-white border-l-4 border-[#EB010C] shadow-lg px-6 py-2 flex items-center gap-4 min-w-[300px] max-w-[90vw]">
                <AlertCircle className="text-[#EB010C] shrink-0" size={24} />
                <div className="flex flex-col">
                    {/* <span className="font-semibold text-slate-800 text-sm">Access Restricted</span> */}
                    <span className="text-slate-600 text-xs">{errorMessage}</span>
                </div>
            </div>
        </div>
    );
};

export default RateLimitBlocker;
