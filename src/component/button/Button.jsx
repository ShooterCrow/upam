const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
    const baseStyles = "px-8 py-3 font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105";

    const variants = {
        primary: "bg-red-600 text-white hover:bg-red-700",
        secondary: "bg-transparent text-gray-800 border-2 border-gray-800 hover:bg-gray-800 hover:text-white"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
            <span className="text-xl">»</span>
        </button>
    );
};

export default Button;
