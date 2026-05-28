import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const clauses = [
  {
    title: "Acceptance of Terms",
    body: "By proceeding, you confirm that you have read, understood, and agree to be fully bound by this Membership Agreement, the UPAM Constitution, and all related policies including but not limited to the Non-Disclosure Policy, Zero Tolerance Policy, and Financial Policy."
  },
  {
    title: "Eligibility",
    body: "Membership is open to all people of African descent aged 18 years and above who share the values of Pan-African unity, dignity, and collective progress. UPAM reserves the right to approve or decline any membership application at its discretion."
  },
  {
    title: "Member Conduct",
    body: "Members are expected to uphold exemplary conduct within their communities and within UPAM spaces — physical and digital. Any form of discrimination, harassment, or misconduct is grounds for immediate suspension or termination of membership."
  },
  {
    title: "Financial Obligations",
    body: "Members agree to pay the applicable membership fee as determined by UPAM's financial policy. Fees contribute directly to the organisation's programs, operations, and the advancement of Pan-African objectives in every country of membership."
  },
  {
    title: "Non-Disclosure",
    body: "Members agree not to disclose confidential information, internal communications, or proprietary strategies of UPAM to any third party without prior written consent from authorised leadership."
  },
  {
    title: "Support of Vision",
    body: "Members commit to actively supporting UPAM's vision of a united, prosperous, and self-reliant Africa. This includes participating in initiatives, respecting organisational decisions, and contributing positively to the movement's growth."
  },
  {
    title: "Termination",
    body: "UPAM reserves the right to terminate membership for breach of this agreement, the UPAM Constitution, or any associated policies. Members may also voluntarily withdraw by submitting a formal notice to their chapter administrator."
  },
];

const MembershipAgreement = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (agreed) {
      navigate("/register");
    } else {
      alert("Please agree to the membership terms before proceeding.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#003115] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest border-l-2 border-[#EB010C] mb-6">
            Membership
          </div>
          <h1 className="headerWhite text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
            Membership Agreement
          </h1>
          <p className="text-white/70 text-base font-medium max-w-2xl">
            Please read the following agreement carefully before proceeding with your UPAM membership registration.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Preamble */}
        <div className="mb-12 p-6 border-l-4 border-[#EB010C] bg-[#EB010C]/5">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#EB010C] mb-2">Read Carefully</p>
          <p className="text-[#555555] text-base leading-relaxed">
            This Membership Agreement governs the relationship between you and the United Pan-Africanist Movement (UPAM). By accepting, you agree to all terms and conditions herein, including the UPAM Constitution, Non-Disclosure Policy, Zero Tolerance Policy, and Financial Policy.
          </p>
        </div>

        {/* Clauses */}
        <div className="space-y-6 mb-14">
          {clauses.map((clause, idx) => (
            <div key={idx} className="flex gap-5 items-start p-6 border border-slate-100 hover:border-[#003115]/20 transition-colors duration-300">
              <div className="shrink-0 w-8 h-8 bg-[#003115] flex items-center justify-center">
                <span className="text-white text-xs font-black">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-black text-[#555555] uppercase tracking-tight">{clause.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{clause.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Agreement checkbox */}
        <div className="border-t border-slate-100 pt-10 space-y-8">
          <label className="flex items-start gap-4 cursor-pointer group">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 shrink-0 size-5 cursor-pointer accent-[#EB010C]"
            />
            <span className="text-sm text-[#555555] leading-relaxed font-medium group-hover:text-[#333333] transition-colors">
              I have read and fully understood this Membership Agreement. I agree to be bound by all its terms and conditions, as well as the UPAM Constitution and associated policies.
            </span>
          </label>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleNext}
              className={`inline-flex items-center gap-3 px-8 py-4 text-sm font-black uppercase tracking-widest transition-all duration-200 ${agreed
                  ? "bg-[#EB010C] text-white hover:bg-[#EB010C]/90"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              disabled={!agreed}
            >
              Proceed to Register
              <ArrowRight size={16} />
            </button>

            <p className="text-sm text-[#555555]">
              Already a member?{" "}
              <Link to="/login" className="text-[#EB010C] font-bold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/membership-policy" className="text-xs font-black text-[#555555] hover:text-[#EB010C] uppercase tracking-widest transition-colors">
            ← View Membership Policy
          </Link>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">United Pan-African Movement</p>
        </div>
      </section>
    </div>
  );
};

export default MembershipAgreement;
