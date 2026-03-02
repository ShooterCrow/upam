import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../../pages/authenticationPages/authApiSlice";
import { Lock, Eye, EyeOff, Loader2, CheckCircle } from "lucide-react";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = useState("");

    const [resetPassword] = useResetPasswordMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (!token) {
            setErrorMsg("Missing reset token. Please use the link from your email.");
            return;
        }

        if (password.length < 6) {
            setErrorMsg("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMsg("Passwords do not match.");
            return;
        }

        setStatus("loading");
        try {
            await resetPassword({ token, password }).unwrap();
            setStatus("success");
            setTimeout(() => navigate("/login"), 5000);
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.data?.message || "Failed to reset password. Link might be expired.");
        }
    };

    if (status === "success") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Password Reset!</h1>
                    <p className="text-gray-600 mb-6">Your password has been successfully updated. You will be redirected to the login page shortly.</p>
                    <Link
                        to="/login"
                        className="inline-block w-full bg-[#eb010c] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#d0010b] transition-colors"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white rounded-2xl p-8">

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Set new password</h1>
                    <p className="text-gray-600 mt-2">Please enter your new password below</p>
                </div>

                {errorMsg && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb010c] focus:border-transparent transition-all outline-none"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="block w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#eb010c] focus:border-transparent transition-all outline-none"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full flex items-center justify-center bg-[#eb010c] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#d0010b] transition-all disabled:opacity-50"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                Updating...
                            </>
                        ) : (
                            "Reset Password"
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-500">
                    Remember your password?{" "}
                    <Link to="/login" className="text-[#eb010c] font-semibold hover:underline">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
