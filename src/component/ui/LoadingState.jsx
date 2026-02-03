import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState = ({ message = "Loading..." }) => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-10 w-10 text-red-600 animate-spin mb-4" />
            <p className="text-gray-600 font-medium">{message}</p>
        </div>
    );
};

export default LoadingState;
