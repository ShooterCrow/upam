import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#eb010c] uppercase mb-4">
            404 error
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Page not found
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            The page you’re looking for doesn’t exist or may have been moved.
            Check the URL, or use the button below to go back to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#eb010c] text-white text-sm sm:text-base font-medium tracking-[0.04em] hover:bg-[#d0010b] transition-colors"
            >
              Go back home
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 text-sm sm:text-base font-medium tracking-[0.04em] text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Contact support
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

