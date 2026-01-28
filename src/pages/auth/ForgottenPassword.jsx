import { Link } from "react-router-dom";
import forgottenPasswordIllustration from "../../assets/ForgottenPassword.png";

const inputBase =
  "w-full font-['Lato',sans-serif] text-[16px] text-[#222] bg-transparent border-0 border-b border-[#ccc] rounded-none py-2.5 tracking-[0.32px] outline-none focus:border-[#eb010c] focus:ring-0";

const ForgottenPassword = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Desktop: two-column — form left, illustration right */}
        <div
          className="hidden lg:flex justify-center w-full overflow-hidden"
          data-node-id="4792:30544"
        >
          <div className="flex flex-row gap-[60px] items-center w-full max-w-[1000px] min-w-0">
            {/* Left: Form */}
            <div className="flex-1 min-w-0 flex flex-col gap-6 max-w-[400px]">
              <div>
                <h1 className="font-['Lato',sans-serif] font-medium text-[28px] text-black tracking-[0.56px]">
                Forgot Password
                </h1>
                <p className="font-['Lato',sans-serif] text-[16px] text-[#666] tracking-[0.32px] mt-2">
                Your password will be sent to the email you provide                </p>
              </div>
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block font-['Lato',sans-serif] text-[14px] text-[#444] tracking-[0.28px] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={inputBase}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#eb010c] font-['Lato',sans-serif] text-[16px] text-white py-3 px-4 rounded tracking-[0.32px] hover:bg-[#d0010b] transition-colors mt-1"
                >
                  Send reset link
                </button>
              </form>
              <p className="font-['Lato',sans-serif] text-[14px] text-[#444] tracking-[0.28px] text-center pt-1">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="text-[#eb010c] underline decoration-solid underline-offset-2"
                >
                  Sign in
                </Link>
              </p>
            </div>
            {/* Right: Illustration */}
            <div className="shrink-0 w-[420px] h-[380px] flex items-center justify-center rounded-xl overflow-hidden">
              <img
                src={forgottenPasswordIllustration}
                alt=""
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        {/* Mobile: stacked form, no illustration */}
        <div className="block lg:hidden">
          <div className="flex flex-col gap-6 w-full max-w-[400px] mx-auto">
            <div>
              <h1 className="font-['Lato',sans-serif] font-medium text-[24px] text-black tracking-[0.48px]">
                Forgotten Password
              </h1>
              <p className="font-['Lato',sans-serif] text-[14px] text-[#666] tracking-[0.28px] mt-1.5">
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>
            </div>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block font-['Lato',sans-serif] text-[14px] text-[#444] tracking-[0.28px] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={inputBase}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#eb010c] font-['Lato',sans-serif] text-[16px] text-white py-3 px-4 rounded tracking-[0.32px] hover:bg-[#d0010b] transition-colors"
              >
                Send reset link
              </button>
            </form>
            <p className="font-['Lato',sans-serif] text-[14px] text-[#444] tracking-[0.28px] text-center">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-[#eb010c] underline decoration-solid underline-offset-2"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgottenPassword;
