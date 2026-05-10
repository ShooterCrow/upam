import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const imgArrowRightDoubleDesktop =
  "https://www.figma.com/api/mcp/asset/51bd4d8a-1e4d-427c-b441-180140fc4834";
const imgArrowRightDoubleMobile =
  "https://www.figma.com/api/mcp/asset/94276fcf-c295-47cd-9316-e3c662ab1272";

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
      <section className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Desktop view */}
        <div className="hidden lg:flex justify-center w-full overflow-hidden">
          <div
            className="flex flex-row gap-[60px] items-start w-full max-w-[1000px] min-w-0"
            data-node-id="4792:29063"
          >
            {/* Left: Text content */}
            <div
              className="flex flex-col gap-[122px] items-start flex-1 min-w-0"
              data-node-id="4792:29060"
            >
              <div
                className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full"
                data-node-id="4792:29059"
              >
                <div
                  className="content-stretch flex flex-col gap-[38px] items-start not-italic relative shrink-0 w-full"
                  data-node-id="4792:29058"
                >
                  <div
                    className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[normal] relative shrink-0"
                    data-node-id="4792:29039"
                  >
                    <p
                      className="col-1 font-['Lato:Medium',sans-serif] ml-0 mt-0 relative row-1 text-[28px] text-black tracking-[0.56px]"
                      data-node-id="4792:29040"
                    >
                      Membership Agreement
                    </p>
                    <p
                      className="col-1 font-['Lato:Regular',sans-serif] ml-0 mt-[36px] relative row-1 text-[18px] text-[color:var(--upam-website-brand-color-,#eb010c)] tracking-[0.36px]"
                      data-node-id="4792:29041"
                    >
                      Read Carefully!!!
                    </p>
                  </div>
                  <div
                    className="content-stretch flex flex-col font-['Lato:Regular',sans-serif] gap-[22px] items-start leading-[24px] relative shrink-0 text-[16px] text-[color:var(--color-neutral\/neutral,#666)] tracking-[0.32px] w-full whitespace-pre-wrap"
                    data-node-id="4792:29057"
                  >
                    <p
                      className="relative shrink-0 w-full"
                      data-node-id="4792:29042"
                    >
                      This membership agreement covers all those who are
                      interested in full time membership with UPAM By
                      accepting, you are agreeing to all the terms and
                      conditions including UPAM constitution, non-disclosure,
                      zero tolerance policy, financial policy and etc.
                    </p>
                    <p
                      className="relative shrink-0 w-full"
                      data-node-id="4792:29043"
                    >
                      Members should be willing to be of good conduct in their
                      communities, support the vision of UPAM and be willing to
                      pay a membership fee in other to foster objectives in
                      every country of membership.
                    </p>
                  </div>
                </div>
                <div
                  className="content-stretch flex gap-[19px] items-center justify-start relative shrink-0 cursor-pointer"
                  data-node-id="4792:29056"
                  onClick={() => setAgreed(!agreed)}
                >
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="shrink-0 size-[22px] cursor-pointer accent-[#eb010c]"
                  />
                  <p
                    className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-neutral\/neutral-dark,#444)] tracking-[0.28px]"
                    data-node-id="4792:29047"
                  >
                    Yes, i agreed to be bound by the agreement
                  </p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full"
                data-node-id="4792:29055"
              >
                <button
                  className={`${agreed
                    ? "bg-[var(--upam-website-brand-color-,#eb010c)]"
                    : "bg-gray-400 cursor-not-allowed"
                    } content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[10px] relative shrink-0 w-full transition-colors duration-200`}
                  data-node-id="4792:29048"
                  onClick={handleNext}
                >
                  <p
                    className="font-['Lato:Regular',sans-serif] leading-[1.56] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.32px]"
                    data-node-id="4792:29049"
                  >
                    Next
                  </p>
                  <div
                    className="relative shrink-0 size-[18px]"
                    data-name="arrow-right-double"
                    data-node-id="4792:29050"
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgArrowRightDoubleDesktop}
                    />
                  </div>
                </button>
                <p
                  className="font-['Lato:Regular',sans-serif] font-['Roboto:Regular',sans-serif] font-normal h-[16px] leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.25px] w-full whitespace-pre-wrap"
                  data-node-id="4792:29053"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <span className="leading-[28px]">
                    {`Already a member? `}
                  </span>
                  <Link
                    to="/login"
                    className="[text-decoration-skip-ink:none] decoration-solid leading-[28px] text-[#eb010c] underline"
                  >
                    sign in
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </div>
        {/* </div> */}

        {/* Mobile view */}
        <div className="block lg:hidden">
          <div
            className="content-stretch flex flex-col gap-[24px] items-start relative size-full"
            data-node-id="4791:28783"
          >
            <div
              className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full"
              data-node-id="4791:28758"
            >
              <div
                className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full"
                data-node-id="4791:28757"
              >
                <div
                  className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[normal] relative shrink-0"
                  data-node-id="4791:28382"
                >
                  <p
                    className="col-1 font-['Lato:Medium',sans-serif] ml-0 mt-0 relative row-1 text-[24px] text-black tracking-[0.48px]"
                    data-node-id="4791:28383"
                  >
                    Membership Agreement
                  </p>
                  <p
                    className="col-1 font-['Lato:Regular',sans-serif] ml-0 mt-[36px] relative row-1 text-[14px] text-[color:var(--upam-website-brand-color-,#eb010c)] tracking-[0.28px]"
                    data-node-id="4791:28384"
                  >
                    Read Carefully!!!
                  </p>
                </div>
                <p
                  className="font-['Lato:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[color:var(--color-neutral\/neutral-dark,#444)] tracking-[0.32px] w-[min-content] whitespace-pre-wrap"
                  data-node-id="4791:28609"
                >
                  This membership agreement covers all those who are interested
                  in full time membership with UPAM By accepting, you are
                  agreeing to all the terms and conditions including UPAM
                  constitution, non-disclosure, zero tolerance policy, financial
                  policy and etc.
                </p>
                <p
                  className="font-['Lato:Regular',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] text-[color:var(--color-neutral\/neutral-dark,#444)] tracking-[0.32px] w-[min-content] whitespace-pre-wrap"
                  data-node-id="4791:28611"
                >
                  Members should be willing to be of good conduct in their
                  communities, support the vision of UPAM and be willing to pay
                  a membership fee in other to foster objectives in every
                  country of membership.
                </p>
              </div>
              <div
                className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                data-node-id="4791:28756"
              >
                <div
                  className="content-stretch flex gap-[16px] items-center relative shrink-0 cursor-pointer"
                  data-node-id="4791:28616"
                  onClick={() => setAgreed(!agreed)}
                >
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="shrink-0 size-[14px] cursor-pointer accent-[#eb010c]"
                  />
                  <p
                    className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[color:var(--color-neutral\/neutral-dark,#444)] tracking-[0.28px]"
                    data-node-id="4791:28614"
                  >
                    Yes, i agreed to bound by the agreement
                  </p>
                </div>
                <button
                  className={`${agreed
                    ? "bg-[var(--upam-website-brand-color-,#eb010c)]"
                    : "bg-gray-400 cursor-not-allowed"
                    } content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[10px] relative shrink-0 w-full transition-colors duration-200`}
                  data-node-id="4791:28746"
                  onClick={handleNext}
                >
                  <p
                    className="font-['Lato:Regular',sans-serif] leading-[1.56] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.32px]"
                    data-node-id="4791:28747"
                  >
                    Next
                  </p>
                  <div
                    className="relative shrink-0 size-[18px]"
                    data-name="arrow-right-double"
                    data-node-id="4791:28748"
                  >
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgArrowRightDoubleMobile}
                    />
                  </div>
                </button>
              </div>
            </div>
            <p
              className="font-['Lato:Regular',sans-serif] font-['Roboto:Regular',sans-serif] font-normal h-[16px] leading-[0] not-italic relative shrink-0 text-[#4743e0] text-[14px] tracking-[0.25px] w-full whitespace-pre-wrap"
              data-node-id="4791:28759"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <span className="leading-[28px]">{`Already a member? `}</span>
              <Link
                to="/login"
                className="[text-decoration-skip-ink:none] decoration-solid leading-[28px] text-[#eb010c] underline"
              >
                sign in
              </Link>
            </p>
          </div>
        </div>
      </section >
    </div >
  );
};

export default MembershipAgreement;

