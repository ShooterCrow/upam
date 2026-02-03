import React from 'react';
import { CheckCircle } from 'lucide-react';

const SuccessState = ({ title = "Success!", message = "Operation completed successfully", actionLabel, onAction }) => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="bg-green-50 p-4 rounded-full mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-6 max-w-md">{message}</p>
            {actionLabel && onAction && (
                <button
                    onClick={onAction}
                    className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors uppercase font-bold tracking-wider text-sm"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
};

export default SuccessState;
