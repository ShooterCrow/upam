import { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useVerifyEmailMutation } from "../../pages/authenticationPages/authApiSlice";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();
    const [status, setStatus] = useState("verifying"); // verifying, success, error
    const [errorMsg, setErrorMsg] = useState("");

    const [verifyEmail] = useVerifyEmailMutation();

    useEffect(() => {
        const performVerification = async () => {
            if (!token) {
                setStatus("error");
                setErrorMsg("Missing verification token.");
                return;
            }

            try {
                await verifyEmail({ token }).unwrap();
                setStatus("success");
                // Optional: auto-redirect after delay
                setTimeout(() => navigate("/login"), 5000);
            } catch (err) {
                setStatus("error");
                setErrorMsg(err.data?.message || "Email verification failed or link expired.");
            }
        };

        performVerification();
    }, [token, verifyEmail, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">


                {status === "verifying" && (
                    <div className="space-y-4">
                        <Loader2 className="w-16 h-16 text-[#eb010c] animate-spin mx-auto" />
                        <h1 className="text-2xl font-bold text-gray-900">Verifying your email</h1>
                        <p className="text-gray-600">Please wait while we confirm your account...</p>
                    </div>
                )}

                {status === "success" && (
                    <div className="space-y-4">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                        <h1 className="text-2xl font-bold text-gray-900">Email Verified!</h1>
                        <p className="text-gray-600">Your account has been successfully verified. You will be redirected to the login page shortly.</p>
                        <div className="pt-4">
                            <Link
                                to="/login"
                                className="inline-block w-full bg-[#eb010c] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#d0010b] transition-colors"
                            >
                                Sign In Now
                            </Link>
                        </div>
                    </div>
                )}

                {status === "error" && (
                    <div className="space-y-4">
                        <XCircle className="w-16 h-16 text-red-500 mx-auto" />
                        <h1 className="text-2xl font-bold text-gray-900">Verification Failed</h1>
                        <p className="text-gray-600">{errorMsg}</p>
                        <div className="pt-4 space-y-3">
                            <Link
                                to="/register"
                                className="inline-block w-full bg-[#eb010c] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#d0010b] transition-colors"
                            >
                                Create New Account
                            </Link>
                            <Link
                                to="/login"
                                className="block text-sm text-gray-500 hover:text-gray-700"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
