import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerIllustration from "../../assets/Register.png";
import { useSignupMutation } from "../../pages/authenticationPages/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../pages/authenticationPages/authSlice";

/** Google "G" logo for Sign up with Google */
const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

/** Eye icon - visible password */
const EyeOpenIcon = () => (
  <svg className="w-5 h-5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

/** Eye-off icon - hidden password */
const EyeOffIcon = () => (
  <svg className="w-5 h-5 text-[#666]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878a4.5 4.5 0 106.262 6.262M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

const inputBase = "w-full text-[16px] text-[#222] bg-transparent border-0 border-b border-[#ccc] rounded-none py-2.5 pr-10 tracking-[0.32px] outline-none focus:border-[#eb010c] focus:ring-0";

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
    // Basic splitting of full name input into first and last name
    const fullName = e.target.value;
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || ""; // Join the rest as last name, or empty if none

    // We can store the full raw input if needed, but for backend formatted:
    setFormData((prev) => ({
      ...prev,
      firstName: firstName,
      lastName: lastName || firstName, // Fallback if user only enters one name
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg("");
    try {
      // Backend expects firstName, lastName, email, password
      // The simple form has one "Name" field, so we split it roughly
      // Actually, let's just make the "Name" input update both if simpler,
      // OR update the UI to have two fields.
      // For now, adhering to UI constraint: First word is First Name, rest is Last Name.

      // Validation
      if (!formData.firstName || !formData.email || !formData.password) {
        setErrMsg("Please fill in all fields");
        return;
      }

      await signup(formData).unwrap();
      // On successful signup, usually we redirect to login or dashboard
      // Assuming backend doesn't auto-login unless it returns token
      navigate("/login");
      alert("Registration successful! Please login.");
    } catch (err) {
      if (err?.data.message) {
        setErrMsg(err?.data.message);
      } else if (err.originalStatus === 409) {
        setErrMsg("Email or Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <section className="">
        {/* max-w-7xl mx-auto mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-16 */}
        {/* Desktop: two-column — form left, illustration right */}
        <div className="hidden lg:flex justify-center w-full overflow-hidden" data-node-id="4792:29118">
          <div className="flex flex-row gap-[60px] items-center justify-around w-full">
            {/* Left: Form */}
            <div className="p-20 flex-1 min-w-0 flex flex-col gap-6 max-w-[500px]">
              <div>
                <h1 className="text-[28px] text-black tracking-[0.56px]">
                  Register
                </h1>
                <p className="text-[16px] text-[#666] tracking-[0.32px] mt-2">
                  Register as a new member
                </p>
                {errMsg && <p className="text-red-600 mt-2">{errMsg}</p>}
              </div>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[14px] text-[#444] tracking-[0.28px] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Maxwell Diamein"
                    className={inputBase + " pr-0"}
                    onChange={handleNameChange} // Simple handler for single input
                  />
                </div>
                <div>
                  <label className="block text-[14px] text-[#444] tracking-[0.28px] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Example999@gmail.com"
                    className={inputBase + " pr-0"}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-[14px] text-[#444] tracking-[0.28px] mb-1.5">
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
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:opacity-80"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeOpenIcon />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#eb010c] text-[16px] text-white py-3 px-4 rounded tracking-[0.32px] hover:bg-[#d0010b] transition-colors mt-1 disabled:opacity-50"
                >
                  {isLoading ? "Registering..." : "Register Now"}
                </button>
              </form>
              <button
                type="button"
                onClick={() => { }}
                className="w-full flex items-center justify-center gap-3 text-[16px] text-[#444] tracking-[0.32px] border border-[#ccc] rounded px-4 py-3 bg-white hover:bg-gray-50 hover:border-[#999] transition-colors"
              >
                <GoogleIcon />
                Sign up with Google
              </button>
              <p className="text-[14px] text-[#444] tracking-[0.28px] text-center pt-1">
                Already have an account?{" "}
                <Link to="/login" className="text-[#eb010c] underline decoration-solid underline-offset-2">
                  Sign in
                </Link>
              </p>
            </div>
            {/* Right: Illustration */}
            <div className="shrink-0 flex-1 h-full p-10 flex items-center justify-center overflow-hidden bg-gray-100">
              <img
                src={registerIllustration}
                alt=""
                className="w-[80%] md:w-[60%] h-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Mobile: stacked form, no illustration */}
        <div className="block lg:hidden pt-12" data-node-id="4792:29331">
          <div className="flex flex-col gap-6 w-full max-w-[400px] mx-auto">
            <div>
              <h1 className="font-medium text-[24px] text-black tracking-[0.48px]">
                Register
              </h1>
              <p className="text-[14px] text-[#666] tracking-[0.28px] mt-1.5">
                Register as a new member
              </p>
              {errMsg && <p className="text-red-600 mt-2">{errMsg}</p>}
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[14px] text-[#444] tracking-[0.28px] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Maxwell Diamein"
                  className={inputBase + " pr-0"}
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <label className="block text-[14px] text-[#444] tracking-[0.28px] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Example999@gmail.com"
                  className={inputBase + " pr-0"}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-[14px] text-[#444] tracking-[0.28px] mb-1">
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
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:opacity-80"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeOpenIcon />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#eb010c] text-[16px] text-white py-3 px-4 rounded tracking-[0.32px] hover:bg-[#d0010b] transition-colors disabled:opacity-50"
              >
                {isLoading ? "Registering..." : "Register Now"}
              </button>
            </form>
            <button
              type="button"
              onClick={() => { }}
              className="w-full flex items-center justify-center gap-3 text-[16px] text-[#444] tracking-[0.32px] border border-[#ccc] rounded px-4 py-3 bg-white hover:bg-gray-50 hover:border-[#999] transition-colors"
            >
              <GoogleIcon />
              Sign up with Google
            </button>
            <p className="text-[14px] text-[#444] tracking-[0.28px] text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-[#eb010c] underline decoration-solid underline-offset-2">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
