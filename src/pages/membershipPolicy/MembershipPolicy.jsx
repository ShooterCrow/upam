import React from 'react';
import { Shield, CheckCircle2, AlertCircle, FileText, UserPlus, Users, DollarSign, Clock, HelpCircle, ArrowRight, Gavel, FileCheck } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';

const SectionTitle = ({ number, title }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="flex items-center justify-center w-10 h-10 bg-[#003115] text-white text-sm font-black ">
      {number}
    </span>
    <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter ">
      {title}
    </h2>
  </div>
);

const SubSection = ({ title, children, icon: Icon }) => (
  <div className="border-l-4 border-slate-900 pl-6 mb-12">
    {title && (
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon size={18} className="text-[#EB010C]" />}
        <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest">{title}</h3>
      </div>
    )}
    <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
      {children}
    </div>
  </div>
);

const BenefitCard = ({ title, items }) => (
  <div className="bg-white border border-slate-100 p-8 hover:border-[#EB010C] transition-colors group">
    <h4 className="text-xl font-black text-slate-900 mb-6 uppercase  group-hover:text-[#EB010C] transition-colors">{title}</h4>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
          <div className="mt-1 flex-shrink-0">
            {item.highlight ? <AlertCircle size={14} className="text-[#EB010C]" /> : <CheckCircle2 size={14} className="text-slate-900" />}
          </div>
          <span className={item.highlight ? " font-bold text-slate-900" : ""}>{item.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MembershipPolicy = () => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen text-slate-900">
      {/* Header Hero */}
      <section className="bg-gradient-to-br from-[#FAFAFC] to-[#F3F4F6] pt-32 pb-16 px-6 md:px-12  border-b border-slate-200">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <span className="inline-block bg-[#EB010C] text-white text-[10px] font-black px-3 py-1 uppercase tracking-[0.2em] mb-6 ">
                  VERSION 2.0
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase  mb-8">
                  MEMBERSHIP <br />
                  <span className="text-[#EB010C]"> POLICY</span>
                </h1>
                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
                  (Aligned with Article 8 of the UPAM Constitution)
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="text-right border-r-4 border-[#EB010C] pr-6 py-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Last Updated</p>
                  <p className="text-2xl font-black text-slate-900 ">May 2024</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Rail - Navigation/Quick Info */}
          <div className="lg:col-span-4 space-y-12">
            <div className="sticky top-32 space-y-12">
              <ScrollReveal direction="left">
                <div className="p-8 bg-[#003115] text-white ">
                  <h3 className="headerWhite text-xl font-black uppercase mb-4 tracking-tighter">Core Principle</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                    Membership is open to all people of African descent. Members shall be treated with respect, dignity and have the right to free will and freedom of expression without retaliation.
                  </p>
                  <div className="flex items-center gap-2 text-[#EB010C] font-black text-xs uppercase tracking-widest">
                    <span>Unified Growth</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={100}>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Gender Recognition</h4>
                  <p className="text-slate-600 text-sm font-bold leading-relaxed">
                    UPAM recognizes male and female as the original and only genders in the Pan African Community.
                  </p>
                </div>
              </ScrollReveal>

              <div className="hidden lg:block space-y-4 mt-12 border-t border-slate-100 pt-12">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Related Documents</h4>
                {[
                  'UPAM Constitution', 'Member Charter', 'Code of Conduct',
                  'NDA', 'Financial Procedures Manual', 'Pan African Club Policy Manual'
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer group">
                    <FileText size={16} className="group-hover:text-[#EB010C]" />
                    <span className="text-sm font-bold uppercase tracking-tight ">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8">
            {/* Introduction */}
            <ScrollReveal>
              <div className="mb-24">
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter  mb-8">INTRODUCTION</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                  UPAM publications reflect our commitment to research, advocacy, and evidence-based action. From departmental reports to policy papers and research documents, these resources support informed decision-making and Pan-African progress.
                </p>
                <p className="text-slate-500 font-medium leading-relaxed">
                  The UPAM Membership Policy defines who may join, how they join, their expected contributions, members benefits and how UPAM ensures fairness, accountability, and structured participation.
                </p>
              </div>
            </ScrollReveal>

            {/* Section 1 */}
            <ScrollReveal>
              <section id="section-1" className="mb-24">
                <SectionTitle number="01" title="MEMBERSHIP ACQUISITION & ON-BOARDING" />
                <SubSection title="Eligibility & Application" icon={UserPlus}>
                  <p>
                    Any individual who supports UPAM's vision for the African people is eligible to apply through the Country Chapter of their residence or through the website.
                  </p>
                  <div className="space-y-4 mt-6">
                    <h5 className="font-black text-slate-900 uppercase text-xs">Geographic Residency Classification:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                        <p className="text-sm font-bold text-slate-900">Tier A — Defined Diaspora: Members residing outside Africa & the Caribbean</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                        <p className="text-sm font-bold text-slate-900">Tier B — Africa & Caribbean: Members residing permanently within Africa or the Caribbean</p>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <h5 className="font-black text-slate-900 uppercase text-xs mb-2">Youth Eligibility (Ages 12–18):</h5>
                    <p className="text-sm font-medium">Youth may join with guardian consent through the Framework of Pan African Club.</p>
                  </div>
                </SubSection>

                <SubSection title="Membership Application Process" icon={FileCheck}>
                  <div className="space-y-8">
                    <div>
                      <h5 className="font-black text-slate-900 uppercase text-xs mb-4">Adult Applicants (18+)</h5>
                      <ul className="space-y-3">
                        {[
                          'Online Application Form or fill the application in one of the UPAM Offices',
                          'Required Documents: National ID or Passport and sign membership Agreement',
                          'Obtain UPAM ID Number',
                          'Pay Registration Fee and Annual Dues',
                          'Assessment and Orientation'
                        ].map((step, i) => (
                          <li key={i} className="flex gap-4 text-sm font-medium">
                            <span className="text-[#EB010C] font-black">{i + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 uppercase text-xs mb-4">Youth Applicants (12–18)</h5>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                          <p className="text-sm font-medium">Youth enroll through the Pan African Club</p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                          <p className="text-sm font-medium">Follow the Pan African Club Registration Process</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SubSection>

                <SubSection title="Membership Classes" icon={Users}>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'General Member (Adult)',
                      'Youth Member (12–18)',
                      'Executive Board Member (after 6 months + service hours)',
                      'Institution Membership'
                    ].map((c, i) => (
                      <li key={i} className="flex items-center gap-3 p-4 bg-slate-50">
                        <div className="w-1.5 h-1.5 bg-[#EB010C] flex-shrink-0" />
                        <span className="text-sm font-black text-slate-900">{c}</span>
                      </li>
                    ))}
                  </ul>
                </SubSection>
              </section>
            </ScrollReveal>

            {/* Section 3 */}
            <ScrollReveal>
              <section id="section-3" className="mb-24">
                <SectionTitle number="03" title="FINANCIAL CONTRIBUTIONS & SUSTAINING MEMBERSHIP" />
                <SubSection title="Fee Schedule" icon={DollarSign}>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b-2 border-slate-900">
                          <th className="py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Membership Tier</th>
                          <th className="py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Registration Fee</th>
                          <th className="py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Annual Dues</th>
                        </tr>
                      </thead>
                      <tbody className="font-bold">
                        <tr className="border-b border-slate-100 group hover:bg-slate-50 transition-colors">
                          <td className="py-6 pr-4">
                            <span className="block text-slate-900 ">Tier A</span>
                            <span className="text-[10px] uppercase text-slate-400 font-medium">Defined Diaspora</span>
                          </td>
                          <td className="py-6 pr-4 text-2xl font-black text-slate-900 ">$150</td>
                          <td className="py-6 text-sm text-slate-500">Based on each Chapter</td>
                        </tr>
                        <tr className="border-b border-slate-100 group hover:bg-slate-50 transition-colors">
                          <td className="py-6 pr-4">
                            <span className="block text-slate-900 ">Tier B</span>
                            <span className="text-[10px] uppercase text-slate-400 font-medium">Africa & Caribbean</span>
                          </td>
                          <td className="py-6 pr-4 text-2xl font-black text-slate-900 ">$36</td>
                          <td className="py-6 text-sm text-slate-500">Based on each Chapter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-8 p-4 bg-[#003115] text-white  text-xs">
                    <p><strong>Youth Symbolic Dues:</strong> Youth can contribute through Pan African Club programs and activities.</p>
                  </div>
                </SubSection>

                <SubSection title="Payment Logistics & Compliance" icon={Clock}>
                  <ul className="space-y-4">
                    {[
                      'Bank transfers, mobile money, cash, and online gateways',
                      'All payments must be receipted',
                      '30-day grace period after Dec 31',
                      'Membership lapses on Jan 31 if unpaid'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#EB010C] flex-shrink-0" />
                        <span className="text-sm font-bold  tracking-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 p-6 bg-slate-50 border-r-4 border-slate-900">
                    <h5 className="font-black text-slate-900 uppercase text-xs mb-2">Supplemental Pledges & Donations</h5>
                    <p className="text-sm font-medium">Members may commit to one-time, monthly, quarterly, or yearly pledges.</p>
                  </div>
                </SubSection>
              </section>
            </ScrollReveal>

            {/* Section 5 */}
            <ScrollReveal>
              <section id="section-5" className="mb-24">
                <SectionTitle number="05" title="GOVERNANCE, COMMITTEES & DISPUTE RESOLUTION" />
                <SubSection title="Performance Management & Remediation" icon={Shield}>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                      <p className="text-sm font-medium">5 appointed members</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                      <p className="text-sm font-medium">Oversees vetting, performance reviews, discipline</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                      <p className="text-sm font-medium">Youth cases follow the Youth Compliance Framework</p>
                    </li>
                  </ul>
                </SubSection>

                <SubSection title="Global Membership Finance Directorate (GMFD)" icon={DollarSign}>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                      <p className="text-sm font-medium">5 appointed members</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                      <p className="text-sm font-medium">Oversees financial compliance and management</p>
                    </li>
                  </ul>
                </SubSection>

                <SubSection title="Dispute Resolution Process" icon={Gavel}>
                  <div className="space-y-4">
                    {[
                      'Informal resolution with Department Lead',
                      'Mediation by Department of Legal Affairs',
                      'Final appeal to Global Executive Council (Adults) or Global Youth Office (Youth)'
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-6 p-4 bg-slate-50 ">
                        <span className="text-[10px] font-black text-slate-400 min-w-[30px]">{i + 1}</span>
                        <span className="text-sm font-black text-slate-900">{step}</span>
                      </div>
                    ))}
                  </div>
                </SubSection>
              </section>
            </ScrollReveal>

            {/* Section 2 */}
            <ScrollReveal>
              <section id="section-2" className="mb-24">
                <SectionTitle number="02" title="OVERVIEW OF THE MEMBERSHIP POLICY" />
                <div className="space-y-8">
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    The UPAM Membership Policy defines who may join, how they join, their expected contributions, members benefits and how UPAM ensures fairness, accountability, and structured participation.
                  </p>
                  <div className="p-8 bg-[#003115] text-white">
                    <p className="text-sm leading-loose font-medium">
                      Membership is open to all people of African descent and strongly uphold equality across the organization despite their color of skin, the way they talk, cultural differences, religion or beliefs education, social, political, economic, internal and community status.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Section 4 */}
            <ScrollReveal>
              <section id="section-4" className="mb-24">
                <SectionTitle number="04" title="OPERATIONAL ENGAGEMENT: SERVICE HOURS & ROLES" />
                <p className="mb-8 font-medium">
                  It explains departmental assignments, hour requirements, MAP submissions, youth activities, and the verification of all work performed.
                </p>
                <SubSection title="Departmental Integration" icon={Users}>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                      <p className="text-sm font-medium">Adults select a primary department</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                      <p className="text-sm font-medium">Youth must join the Pan African Club to qualify for membership benefits</p>
                    </li>
                  </ul>
                </SubSection>

                <SubSection title="Service Hour Requirements" icon={Clock}>
                  <div className="space-y-8">
                    <div>
                      <h5 className="font-black text-slate-900 uppercase text-xs mb-4">Adults (18+)</h5>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                          <p className="text-sm font-bold text-slate-900">12 hours/month or 36/quarter</p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                          <p className="text-sm font-bold text-slate-900">Hours logged in Digital Activity Register</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 uppercase text-xs mb-2">Youth (12–18)</h5>
                      <p className="text-sm font-medium">Through the Pan African Club programs</p>
                    </div>
                  </div>
                </SubSection>

                <SubSection title="Performance Management & Remediation" icon={AlertCircle}>
                  <div className="space-y-8">
                    <div>
                      <h5 className="font-black text-slate-900 uppercase text-xs mb-4">For adults:</h5>
                      <ol className="space-y-3 list-decimal ml-5">
                        <li className="text-sm font-medium">Through quarterly review</li>
                        <li className="text-sm font-medium">Making recording to performance Explanation Form</li>
                        <li className="text-sm font-medium">Review the 60‑day Formal Performance Plan</li>
                        <li className="text-sm font-medium">Suspension or termination</li>
                      </ol>
                    </div>
                    <div className="mt-8 p-6 border-2 border-slate-900">
                      <h5 className="font-black text-slate-900 uppercase text-xs mb-4">Financial Remediation (Adults Only)</h5>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                          <p className="text-sm font-bold text-slate-900">Tier A: $10 per missed hour</p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                          <p className="text-sm font-bold text-slate-900">Tier B: $1 per missed hour or Service‑for‑Dues (40 hours/month)</p>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#EB010C] mt-2 flex-shrink-0" />
                          <p className="text-sm font-bold text-slate-900 uppercase text-[#EB010C]">Youth exempt</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SubSection>
              </section>
            </ScrollReveal>

            {/* Section 6 */}
            <ScrollReveal>
              <section id="section-6" className="mb-24">
                <SectionTitle number="06" title="POLICY ADMINISTRATION & AMENDMENTS" />
                <p className="text-lg font-medium leading-relaxed mb-8">
                  Amendments require a two-thirds vote of the Global Executive Council. Members must be notified 30 days before changes take effect. The Constitution prevails in any conflict.
                </p>
                <div className="space-y-4 border-t border-slate-100 pt-8">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Related Documents:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'UPAM Constitution', 'Member Charter', 'Code of Conduct',
                      'NDA', 'Financial Procedures Manual', 'Pan African Club Policy Manual'
                    ].map((doc, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-300 flex-shrink-0" />
                        <span className="text-sm font-bold uppercase tracking-tight text-slate-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </ScrollReveal>

            {/* Section 05 - Benefits */}
            <ScrollReveal>
              <section className="mb-24">
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter  mb-8">MEMBERSHIP BENEFITS</h2>
                <div className="mb-12">
                  <p className="text-xl text-slate-600 leading-relaxed font-medium ">
                    UPAM is committed to the holistic support of its members. Our benefits are designed to empower you and your family, fostering growth, security, and prosperity.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <BenefitCard
                    title="Education & Scholarships"
                    items={[
                      { text: "Scholarships & Grants: Members and their dependents are eligible to apply for UPAM-administered scholarships and education grants.", highlight: false },
                      { text: "Partner School Network: Exclusive discounts on tuition fees at a network of partner educational institutions", highlight: false },
                      { text: "Terms and conditions apply", highlight: true }
                    ]}
                  />
                  <BenefitCard
                    title="Business & Entrepreneurship Support"
                    items={[
                      { text: "Startup Financing: Eligible members can access business startup loans of up to $5,000, subject to formal application and review.", highlight: false },
                      { text: "Business Consulting: Complimentary access to expert business consulting services", highlight: false },
                      { text: "Business Advertising & Promotion: Opportunities through UPAM's official channels", highlight: false },
                      { text: "Additional terms and conditions apply", highlight: true }
                    ]}
                  />
                  <BenefitCard
                    title="Life-Care & Wellness Program"
                    items={[
                      { text: "Comprehensive safety net for members and their registered families", highlight: false },
                      { text: "Bereavement Support: Claim of up to $20,000 for expenses following passing of member or immediate family", highlight: false },
                      { text: "Health Insurance: Access to group health insurance plans", highlight: false },
                      { text: "Short-Term Disability: Financial support for temporary disability", highlight: false },
                      { text: "Additional terms and conditions apply", highlight: true }
                    ]}
                  />
                  <BenefitCard
                    title="Pension & Financial Security"
                    items={[
                      { text: "UPAM Pension Program: Voluntary enrollment in UPAM-managed pension scheme with matched contributions", highlight: false }
                    ]}
                  />
                  <BenefitCard
                    title="Professional & Networking Services"
                    items={[
                      { text: "Networking: Access to global network through exclusive events and online portal", highlight: false },
                      { text: "Legal & Policy Support: Assistance with business registration, contract review, and compliance", highlight: false },
                      { text: "Digital Empowerment: Free or discounted access to UPAM's digital tools and e-learning platforms", highlight: false },
                      { text: "Travel & Conference Discounts: Reduced rates for UPAM-organized events", highlight: false }
                    ]}
                  />
                </div>
                <div className="mt-12 p-8 bg-slate-50 border-r-8 border-[#EB010C]">
                  <p className="text-xs text-slate-500 font-bold  leading-relaxed text-center">
                    All benefits are subject to program-specific terms, conditions, and eligibility criteria as outlined in their respective detailed policy documents.
                  </p>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Newsletter/Footer Banner */}
      <section className="bg-[#EB010C] py-24 px-6 md:px-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 text-white">
              <div className="max-w-2xl">
                <h3 className="text-4xl md:text-6xl font-black uppercase  leading-[0.9] tracking-tighter mb-6">
                  Become a part of <br /> the global movement.
                </h3>
                <p className="text-white/80 font-bold uppercase text-sm tracking-widest">
                  Understand our values. Support the mission.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-slate-900 font-black uppercase  text-sm hover:bg-slate-100 transition-colors">
                  Register Now
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-black uppercase  text-sm hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default MembershipPolicy;