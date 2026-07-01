import React, { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';

export function GlobalErrorBoundary() {
    const error = useRouteError();

    useEffect(() => {
        // Check if the error is the dynamically imported module error
        const isChunkLoadError =
            error?.message?.includes("Failed to fetch dynamically imported module") ||
            error?.message?.includes("Importing a module script failed");

        if (isChunkLoadError) {
            // Force a hard refresh bypassing cache to fetch the new index.html and chunks
            window.location.reload(true);
        }
    }, [error]);

    // If it's a normal error (not a chunk load error), display a fallback UI
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-2">Oops! Something went wrong.</h1>
            <p className="text-gray-600 mb-4">{error?.message || "We encountered an unexpected error."}</p>
            <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-[#EB010C] text-white rounded hover:bg-black transition-colors"
            >
                Refresh Page
            </button>
        </div>
    );
}
