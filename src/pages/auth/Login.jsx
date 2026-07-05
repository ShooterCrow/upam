import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginIllustration from "../../assets/Register.png";
import { useLoginMutation } from "../../pages/authenticationPages/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../pages/authenticationPages/authSlice";
import ScrollReveal from "../../components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import useAuth from "../../hooks/useAuth";

/** Google "G" logo for Sign in with Google */
const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const EyeOpenIcon = () => (
  <svg className="w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);

const EyeOffIcon = () => (
  <svg className="w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878a4.5 4.5 0 106.262 6.262M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
);

const inputBase = "w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 rounded-none py-3 pr-10 outline-none focus:border-[#eb010c] focus:ring-0 transition-colors placeholder:text-slate-400";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [navTo, setNavTo] = useState("");

  const [login, { isLoading, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { roles, isLoggedIn } = useAuth();

  // If already logged in, redirect immediately
  useEffect(() => {
    if (isLoggedIn) {
      const isAdmin = roles?.includes('admin') || roles?.includes('manager');
      navigate(isAdmin ? "/admin" : "/user", { replace: true });
    }
  }, [isLoggedIn, roles, navigate]);

  useEffect(() => {
    if (isSuccess && navTo) navigate(navTo);
  }, [isSuccess, navigate, navTo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ identifier, password }).unwrap();
      const role = userData?.data?.user?.roles?.[0] || userData?.user?.roles?.[0];
      setNavTo(role === "admin" ? "/admin" : "/user");
      dispatch(setCredentials({ ...userData }));
    } catch (err) {
      if (err?.data?.message) {
        setErrMsg(err?.data.message);
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div className="bg-white min-h-screen pt-[40px] lg:pt-0">
      <div className="flex flex-col lg:flex-row min-h-screen bg-white">
        {/* Form Container */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-32 lg:pt-32 py-12">
          <ScrollReveal direction="up" className="w-full max-w-[450px] mx-auto">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] mb-6">
                Welcome Back
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[1.1] mb-4">
                Log In To <br />Your Account.
              </h1>
              <p className="text-base text-slate-600 font-medium">
                Enter your details to access your dashboard.
              </p>
              {errMsg && (
                <div className="mt-4 p-4 bg-red-50 border-l-4 border-[#EB010C] text-[#EB010C] text-sm font-bold">
                  {errMsg}
                </div>
              )}
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-xs font-black text-slate-900 tracking-widest uppercase">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  placeholder="user@gmail.com or +123..."
                  className={inputBase}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-black text-slate-900 tracking-widest uppercase">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className={inputBase}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-50 rounded-full transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeOpenIcon />}
                  </button>
                </div>
                <div className="flex justify-end pt-2">
                  <Link
                    to="/forgot-password"
                    className="text-[10px] font-black text-slate-400 hover:text-[#EB010C] uppercase tracking-widest transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-4 bg-[#EB010C] text-white py-4 px-6 font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all duration-300 disabled:opacity-50 mt-4 group"
              >
                {isLoading ? "Logging in..." : "Log In"}
                {!isLoading && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </form>

            {/* <div className="flex items-center gap-4 my-8">
              <div className="h-[1px] flex-1 bg-slate-100"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Or</span>
              <div className="h-[1px] flex-1 bg-slate-100"></div>
            </div> */}
            {/* 
            <button
              type="button"
              className="w-full border-2 border-slate-100 hover:border-slate-900 flex items-center justify-center gap-3 py-4 bg-white hover:bg-slate-50 transition-colors font-black uppercase text-[10px] tracking-widest text-slate-700"
            >
              <GoogleIcon />
              Sign in with Google
            </button> */}

            <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 text-center mt-8">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-[#EB010C] hover:text-slate-900 transition-colors">
                Register Now
              </Link>
            </p>
          </ScrollReveal>
        </div>

        {/* Visual Side */}
        <div className="hidden lg:flex flex-2 relative bg-gray-200 group overflow-hidden justify-center items-center">
          <img
            src={loginIllustration}
            alt="Login Header"
            className="w-[80%] md:w-[60%] h-full object-contain object-center opacity-100 transition-transform duration-[2s] group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
