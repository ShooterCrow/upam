import React from 'react';

export class GlobalErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        const isChunkLoadError =
            error?.message?.includes("Failed to fetch dynamically imported module") ||
            error?.message?.includes("Importing a module script failed");

        if (isChunkLoadError) {
            window.location.reload(true);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-2">Oops! Something went wrong.</h1>
                    <p className="text-gray-600 mb-4">{this.state.error?.message || "We encountered an unexpected error."}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-[#EB010C] text-white rounded hover:bg-black transition-colors"
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
