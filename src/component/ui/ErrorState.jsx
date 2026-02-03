import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

const ErrorState = ({ message = "Something went wrong", onRetry }) => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="bg-red-50 p-4 rounded-full mb-4">
                <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Occurred</h3>
            <p className="text-gray-600 mb-6 max-w-md">{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                    <RefreshCw size={18} />
                    Try Again
                </button>
            )}
        </div>
    );
};

export default ErrorState;
