import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerIllustration from "../../assets/Register.png";
import { useSignupMutation } from "../../pages/authenticationPages/authApiSlice";
import { useDispatch } from "react-redux";
import ScrollReveal from "../../components/ScrollReveal";
import { ArrowRight } from "lucide-react";

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
  });

  const [signup, { isLoading }] = useSignupMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

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
      lastName: lastName || firstName,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");
    try {
      if (!formData.firstName || !formData.email || !formData.password) {
        setErrMsg("Please fill in all fields");
        return;
      }

      await signup(formData).unwrap();
      navigate("/login");
      alert("Registration successful! Please check your email to verify your account before logging in.");
    } catch (err) {
      if (err?.data?.message) {
        setErrMsg(err?.data.message);
      } else if (err.originalStatus === 409) {
        setErrMsg("Email or Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  return (
    <div className="bg-white min-h-screen pt-[40px] lg:pt-0">
      <div className="flex flex-col lg:flex-row-reverse min-h-screen bg-white">
        {/* Form Container */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-32 lg:pt-32 py-12">
          <ScrollReveal direction="up" className="w-full max-w-[450px] mx-auto">
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
              <div className="space-y-2">
                <label className="block text-xs font-black text-slate-900 tracking-widest uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Maxwell Diamein"
                  className={inputBase}
                  onChange={handleNameChange} // Simple handler for single input
                  required
                />
              </div>

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
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-4 bg-[#EB010C] text-white py-4 px-6 font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all duration-300 disabled:opacity-50 mt-4 group"
              >
                {isLoading ? "Registering..." : "Register Now"}
                {!isLoading && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </form>

            <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 text-center mt-8">
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
          {/* <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 via-gray-200/40 to-transparent" /> */}

          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full min-h-[300px] flex flex-col justify-center px-12">
            <h2 className="text-4xl xl:text-5xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6 drop-shadow-xl">
              Building <br />The Future.
            </h2>
            <div className="w-16 h-1 bg-[#EB010C] mx-auto mb-6"></div>
            <p className="text-base text-white/80 font-medium max-w-sm mx-auto">
              Become part of a continental evolution and secure a brighter tomorrow for all.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
