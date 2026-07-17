import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerIllustration from "../../assets/Register.png";
import { useSignupMutation, useSendOtpMutation } from "../../pages/authenticationPages/authApiSlice";
import { useDispatch } from "react-redux";
import ScrollReveal from "../../components/ScrollReveal";
import { ArrowRight, CheckCircle2, Loader2, Phone, MessageSquare, ShieldCheck, Globe, Calendar } from "lucide-react";
import { Country } from "country-state-city";
import { useGetSettingsQuery } from "../platform/settingsApiSlice";
import useAuth from "../../hooks/useAuth";

/** Google "G" logo for Sign up with Google */
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

const inputBase = "w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 rounded-none py-3 pr-10 outline-none focus:border-[#EB010C] focus:ring-0 transition-colors placeholder:text-slate-400";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    country: "",
    phone: "",
    gender: "",
    address: "",
    otpCode: "",
  });

  const [otpId, setOtpId] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [otpMethod, setOtpMethod] = useState("whatsapp");

  const [signup, { isLoading: isSigningUp }] = useSignupMutation();
  const [sendOtp, { isLoading: isSendingOtp }] = useSendOtpMutation();
  const { data: settingsResponse } = useGetSettingsQuery();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const { roles, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      const isPrivileged = roles?.some(r => ['admin', 'manager', 'representative'].includes(r));
      navigate(isPrivileged ? "/dashboard" : "/user", { replace: true });
    }
  }, [isLoggedIn, roles, navigate]);

  const requirePhoneVerification = settingsResponse?.data?.hotelInfo?.requirePhoneVerification ?? false;

  const countries = useMemo(() => Country.getAllCountries(), []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNameChange = (e) => {
    const fullName = e.target.value;
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    setFormData((prev) => ({
      ...prev,
      firstName: firstName,
      lastName: lastName,
    }));
  };

  const handleSendOtp = async (method = "whatsapp") => {
    if (!formData.phone) {
      setErrMsg("Please enter a phone number first");
      return;
    }
    setErrMsg("");
    setOtpMethod(method);
    try {
      const response = await sendOtp({ phone: formData.phone, method }).unwrap();
      setOtpId(response.data.otpId);
      setIsOtpSent(true);
    } catch (err) {
      setErrMsg(err?.data?.message || "Failed to send verification code");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");

    if (!formData.firstName || !formData.email || !formData.password || !formData.dob || !formData.country || !formData.gender || !formData.address || (requirePhoneVerification && !formData.phone)) {
      setErrMsg("Please fill in all required fields");
      return;
    }

    if (requirePhoneVerification && !isOtpSent) {
      setErrMsg("Please verify your phone number first");
      return;
    }

    if (requirePhoneVerification && !formData.otpCode) {
      setErrMsg("Please enter the verification code sent to your phone");
      return;
    }

    try {
      await signup({
        ...formData,
        otpId
      }).unwrap();
      navigate("/login");
      alert("Registration successful! Please check your email to verify your account before logging in.");
    } catch (err) {
      setErrMsg(err?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-[40px] lg:pt-0">
      <div className="flex flex-col lg:flex-row-reverse min-h-screen bg-white">
        {/* Form Container */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-32 lg:pt-32 py-12 scrollbar-hide overflow-y-auto">
          <ScrollReveal direction="up" className="w-full max-w-[500px] mx-auto">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EB010C]/10 text-[#EB010C] text-[10px] font-black uppercase tracking-widest border-l-2 border-[#EB010C] mb-6">
                Join UPAM
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[1.1] mb-4">
                Become A <br />Member.
              </h1>
              <p className="text-base text-slate-600 font-medium">
                Create an account to join the Pan-African movement.
              </p>
              {errMsg && (
                <div className="mt-4 p-4 bg-red-50 border-l-4 border-[#EB010C] text-[#EB010C] text-sm font-bold">
                  {errMsg}
                </div>
              )}
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-900 tracking-widest uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Maxwell Diamein"
                    className={inputBase}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-900 tracking-widest uppercase flex items-center gap-2">
                    <Calendar size={12} className="text-[#EB010C]" /> Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className={inputBase}
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-900 tracking-widest uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Example999@gmail.com"
                    className={inputBase}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-900 tracking-widest uppercase flex items-center gap-2">
                    <Globe size={12} className="text-[#EB010C]" /> Country/Chapter
                  </label>
                  <select
                    name="country"
                    className={inputBase}
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c.isoCode} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Gender & Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-900 tracking-widest uppercase">
                    Gender
                  </label>
                  <select
                    name="gender"
                    className={inputBase}
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-900 tracking-widest uppercase">
                    Full Home Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Street Name, City, Country"
                    className={inputBase}
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone & OTP Section */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="space-y-2">
                  <label className="block text-xs font-black text-slate-900 tracking-widest uppercase flex items-center gap-2">
                    <Phone size={12} className="text-[#EB010C]" /> Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+234 800 000 0000"
                      className={inputBase}
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isOtpSent}
                      required
                    />
                    {isPhoneVerified && (
                      <CheckCircle2 className="absolute right-0 top-1/2 -translate-y-1/2 text-green-500" size={20} />
                    )}
                  </div>
                </div>
                {console.log(requirePhoneVerification)}

                {requirePhoneVerification && !isOtpSent && (
                  <div className="flex flex-col gap-3">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verify your phone:</p>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => handleSendOtp("whatsapp")}
                        disabled={isSendingOtp || !formData.phone}
                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-500/10 text-emerald-600 py-3 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-50"
                      >
                        {isSendingOtp && otpMethod === 'whatsapp' ? <Loader2 size={14} className="animate-spin" /> : <MessageSquare size={14} />}
                        WhatsApp Secure
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSendOtp("sms")}
                        disabled={isSendingOtp || !formData.phone}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-500/10 text-blue-600 py-3 text-[10px] font-black uppercase tracking-widest border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50"
                      >
                        {isSendingOtp && otpMethod === 'sms' ? <Loader2 size={14} className="animate-spin" /> : <Phone size={14} />}
                        Send SMS
                      </button>
                    </div>
                  </div>
                )}

                {requirePhoneVerification && isOtpSent && (
                  <div className="bg-slate-50 p-4 border border-slate-100 flex flex-col gap-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-black text-slate-900 tracking-widest uppercase flex items-center gap-2">
                        <ShieldCheck size={14} className="text-[#EB010C]" /> Enter {formData.otpCode.length}/6 Digit Code
                      </label>
                      <button
                        type="button"
                        onClick={() => { setIsOtpSent(false); setFormData(p => ({ ...p, otpCode: "" })) }}
                        className="text-[10px] font-black text-[#EB010C] uppercase"
                      >
                        Change Number
                      </button>
                    </div>
                    <input
                      type="text"
                      name="otpCode"
                      maxLength={6}
                      placeholder="000000"
                      className="w-full bg-white border-2 border-slate-200 py-3 text-center text-2xl font-black tracking-[0.5em] focus:border-[#EB010C] outline-none transition-all"
                      value={formData.otpCode}
                      onChange={handleChange}
                    />
                    <p className="text-[9px] font-medium text-slate-500 text-center uppercase tracking-wider">
                      A verification code was sent to your phone via {otpMethod.toUpperCase()}.
                    </p>
                  </div>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-xs font-black text-slate-900 tracking-widest uppercase">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className={inputBase}
                    value={formData.password}
                    onChange={handleChange}
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
              </div>

              <button
                type="submit"
                disabled={isSigningUp || (requirePhoneVerification && !isOtpSent)}
                className="w-full flex items-center justify-center gap-4 bg-[#EB010C] text-white py-4 px-6 font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all duration-300 disabled:opacity-50 mt-4 group"
              >
                {isSigningUp ? <Loader2 className="animate-spin" size={16} /> : "Finalize Registration"}
                {!isSigningUp && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </form>

            <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 text-center mt-8 pb-10">
              Already have an account?{" "}
              <Link to="/login" className="text-[#EB010C] hover:text-slate-900 transition-colors">
                Sign In
              </Link>
            </p>
          </ScrollReveal>
        </div>

        {/* Visual Side */}
        <div className="hidden lg:flex flex-2 relative bg-gray-200 group overflow-hidden justify-center items-center">
          <img
            src={registerIllustration}
            alt="Register Context"
            className="w-[80%] md:w-[60%] h-full object-contain object-center opacity-100 transition-transform duration-[2s] group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

