import React from 'react';

const MembershipPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            UNITED PAN-AFRICANIST MOVEMENT (UPAM)
          </h1>
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              MEMBERSHIP POLICY
            </h2>
            <p className="text-lg font-semibold text-gray-700">VERSION 2.0</p>
          </div>
          <p className="text-gray-600">
            (Aligned with Article 8 of the UPAM Constitution)
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">INTRODUCTION</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UPAM publications reflect our commitment to research, advocacy, and evidence-based action.
            From departmental reports to policy papers and research documents, these resources support
            informed decision-making and Pan-African progress.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The UPAM Membership Policy defines who may join, how they join, their expected contributions,
            members benefits and how UPAM ensures fairness, accountability, and structured participation.
          </p>
          <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-3">
              <span className="font-semibold text-gray-900">Core Principle:</span> Membership is open to all people of African descent.
              Members shall be treated with respect, dignity and have the right to free will and
              freedom of expression without retaliation.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Gender Recognition:</span> UPAM recognizes male and female as the original
              and only genders in the Pan African Community.
            </p>
          </div>
        </div>

        {/* Two Column Layout for Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-16">
              {/* Section 1 */}
              <section>
                <div className="flex items-start mb-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">1</span>
                  <h3 className="text-xl font-bold text-gray-900">MEMBERSHIP ACQUISITION & ON-BOARDING</h3>
                </div>

                <div className="ml-11 space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Eligibility & Application</h4>
                    <p className="text-gray-700 mb-4">
                      Any individual who supports UPAM's vision for the African people is eligible to apply
                      through the Country Chapter of their residence or through the website.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-gray-800 mb-2">Geographic Residency Classification:</h5>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span><strong className="text-gray-900">Tier A</strong> — Defined Diaspora: Members residing outside Africa & the Caribbean</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span><strong className="text-gray-900">Tier B</strong> — Africa & Caribbean: Members residing permanently within Africa or the Caribbean</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-800 mb-2">Youth Eligibility (Ages 12–18):</h5>
                        <p className="text-gray-700">Youth may join with guardian consent through the Framework of Pan African Club.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Membership Application Process</h4>

                    <div className="mb-6">
                      <h5 className="font-medium text-gray-800 mb-2">Adult Applicants (18+):</h5>
                      <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                        <li>Online Application Form or fill the application in one of the UPAM Offices</li>
                        <li>Required Documents: National ID or Passport and sign membership Agreement</li>
                        <li>Obtain UPAM ID Number</li>
                        <li>Pay Registration Fee and Annual Dues</li>
                        <li>Assessment and Orientation</li>
                      </ol>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Youth Applicants (12–18):</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>Youth enroll through the Pan African Club</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>Follow the Pan African Club Registration Process</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Membership Classes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong className="text-gray-900">General Member (Adult)</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong className="text-gray-900">Youth Member (12–18)</strong></span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong className="text-gray-900">Executive Board Member</strong> (after 6 months + service hours)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong className="text-gray-900">Institution Membership</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-start mb-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">3</span>
                  <h3 className="text-xl font-bold text-gray-900">FINANCIAL CONTRIBUTIONS & SUSTAINING MEMBERSHIP</h3>
                </div>

                <div className="ml-11 space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Fee Schedule</h4>

                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Membership Tier</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Registration Fee</th>
                            <th className="py-3 px-4 text-left text-gray-700 font-semibold border-b">Annual Dues</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b">
                              <div className="font-medium text-gray-900">Tier A</div>
                              <div className="text-sm text-gray-600">Defined Diaspora</div>
                            </td>
                            <td className="py-3 px-4 border-b font-medium">$150</td>
                            <td className="py-3 px-4 border-b text-gray-700">Based on each Chapter</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="font-medium text-gray-900">Tier B</div>
                              <div className="text-sm text-gray-600">Africa & Caribbean</div>
                            </td>
                            <td className="py-3 px-4 font-medium">$36</td>
                            <td className="py-3 px-4 text-gray-700">Based on each Chapter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h5 className="font-medium text-gray-800 mb-2">Youth Symbolic Dues</h5>
                      <p className="text-gray-700">Youth can contribute through Pan African Club programs and activities.</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Payment Logistics & Compliance</h4>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Bank transfers, mobile money, cash, and online gateways</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>All payments must be receipted</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>30-day grace period after Dec 31</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Membership lapses on Jan 31 if unpaid</span>
                      </li>
                    </ul>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h5 className="font-medium text-gray-800 mb-2">Supplemental Pledges & Donations</h5>
                      <p className="text-gray-700">Members may commit to one-time, monthly, quarterly, or yearly pledges.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-start mb-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">5</span>
                  <h3 className="text-xl font-bold text-gray-900">GOVERNANCE, COMMITTEES & DISPUTE RESOLUTION</h3>
                </div>

                <div className="ml-11 space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Performance Management & Remediation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>5 appointed members</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Oversees vetting, performance reviews, discipline</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Youth cases follow the Youth Compliance Framework</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Global Membership Finance Directorate (GMFD)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>5 appointed members</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Oversees financial compliance and management</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Dispute Resolution Process</h4>
                    <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                      <li>Informal resolution with Department Lead</li>
                      <li>Mediation by Department of Legal Affairs</li>
                      <li>Final appeal to Global Executive Council (Adults) or Global Youth Office (Youth)</li>
                    </ol>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-16">
              {/* Section 2 */}
              <section>
                <div className="flex items-start mb-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">2</span>
                  <h3 className="text-xl font-bold text-gray-900">OVERVIEW OF THE MEMBERSHIP POLICY</h3>
                </div>

                <div className="ml-11">
                  <p className="text-gray-700 mb-4">
                    The UPAM Membership Policy defines who may join, how they join, their expected contributions,
                    members benefits and how UPAM ensures fairness, accountability, and structured participation.
                  </p>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                      Membership is open to all people of African descent and strongly uphold equality across
                      the organization despite their color of skin, the way they talk, cultural differences,
                      religion or beliefs education, social, political, economic, internal and community status.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-start mb-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">4</span>
                  <h3 className="text-xl font-bold text-gray-900">OPERATIONAL ENGAGEMENT: SERVICE HOURS & ROLES</h3>
                </div>

                <div className="ml-11 space-y-6">
                  <p className="text-gray-700 mb-4">
                    It explains departmental assignments, hour requirements, MAP submissions, youth activities,
                    and the verification of all work performed.
                  </p>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Departmental Integration</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Adults select a primary department</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Youth must join the Pan African Club to qualify for membership benefits</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Service Hour Requirements</h4>

                    <div className="mb-4">
                      <h5 className="font-medium text-gray-800 mb-2">Adults (18+):</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>12 hours/month or 36/quarter</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>Hours logged in Digital Activity Register</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Youth (12–18):</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>Through the Pan African Club programs</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Performance Management & Remediation</h4>
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-800 mb-2">For adults:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>Through quarterly review</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>Making recording to performance Explanation Form</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>Review the 60‑day Formal Performance Plan</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>Suspension or termination</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Financial Remediation (Adults Only)</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span><strong className="text-gray-900">Tier A:</strong> $10 per missed hour</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span><strong className="text-gray-900">Tier B:</strong> $1 per missed hour or Service‑for‑Dues (40 hours/month)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>Youth exempt</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <div className="flex items-start mb-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">6</span>
                  <h3 className="text-xl font-bold text-gray-900">POLICY ADMINISTRATION & AMENDMENTS</h3>
                </div>

                <div className="ml-11">
                  <p className="text-gray-700 mb-4">
                    Amendments require a two-thirds vote of the Global Executive Council.
                    Members must be notified 30 days before changes take effect.
                    The Constitution prevails in any conflict.
                  </p>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Related Documents:</h4>
                    <ul className="grid grid-cols-2 gap-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>UPAM Constitution</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Member Charter</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Code of Conduct</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>NDA</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Financial Procedures Manual</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Pan African Club Policy Manual</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Membership Benefits Section */}
              <section className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">MEMBERSHIP BENEFITS</h3>
                <p className="text-gray-700 mb-8 text-center leading-relaxed">
                  UPAM is committed to the holistic support of its members. Our benefits are designed
                  to empower you and your family, fostering growth, security, and prosperity.
                </p>

                <div className="space-y-6">
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

                <div className="mt-8 p-4 bg-white/70 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    <em>All benefits are subject to program-specific terms, conditions,
                      and eligibility criteria as outlined in their respective detailed policy documents.</em>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-16">
          {/* Section 1 */}
          <section>
            <div className="flex items-start mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">1</span>
              <h3 className="text-xl font-bold text-gray-900">MEMBERSHIP ACQUISITION & ON-BOARDING</h3>
            </div>

            <div className="ml-11 space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Eligibility & Application</h4>
                <p className="text-gray-700 mb-4">
                  Any individual who supports UPAM's vision for the African people is eligible to apply
                  through the Country Chapter of their residence or through the website.
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Geographic Residency Classification:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong className="text-gray-900">Tier A</strong> — Defined Diaspora: Outside of Africa/Caribbean</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span><strong className="text-gray-900">Tier B</strong> — Africa & Caribbean: Residents within Africa or Caribbean</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Youth Eligibility (Ages 12–18):</h5>
                    <p className="text-gray-700">Youth may join with guardian consent through the Framework of Pan African Club.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Membership Application Process</h4>

                <div className="mb-6">
                  <h5 className="font-medium text-gray-800 mb-2">Adult Applicants (18+):</h5>
                  <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                    <li>Online Application Form or fill the application in one of the UPAM Offices</li>
                    <li>Required Documents: National ID or Passport and sign membership Agreement</li>
                    <li>Obtain UPAM ID Number</li>
                    <li>Pay Registration Fee and Annual Dues</li>
                    <li>Assessment and Orientation</li>
                  </ol>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Youth Applicants (12–18):</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Youth enroll through the Pan African Club</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Follow the Pan African Club Registration Process</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Membership Classes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span><strong className="text-gray-900">General Member (Adult)</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span><strong className="text-gray-900">Youth Member (12–18)</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span><strong className="text-gray-900">Executive Board Member</strong> (after 6 months + service hours)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span><strong className="text-gray-900">Institution Membership</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-start mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">2</span>
              <h3 className="text-xl font-bold text-gray-900">OVERVIEW OF THE MEMBERSHIP POLICY</h3>
            </div>

            <div className="ml-11">
              <p className="text-gray-700 mb-4">
                The UPAM Membership Policy defines who may join, how they join, their expected contributions,
                members benefits and how UPAM ensures fairness, accountability, and structured participation.
              </p>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  Membership is open to all people of African descent and strongly uphold equality across
                  the organization despite their color of skin, the way they talk, cultural differences,
                  religion or beliefs education, social, political, economic, internal and community status.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-start mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">3</span>
              <h3 className="text-xl font-bold text-gray-900">FINANCIAL CONTRIBUTIONS & SUSTAINING MEMBERSHIP</h3>
            </div>

            <div className="ml-11 space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Fee Schedule</h4>

                <div className="mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="mb-3">
                      <h5 className="font-medium text-gray-800 mb-1">Tier Descriptions:</h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span><strong>Tier A:</strong> Members residing outside Africa & the Caribbean</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span><strong>Tier B:</strong> Members residing permanently within Africa or the Caribbean</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 bg-white rounded border">
                        <div>
                          <span className="font-medium text-gray-900">Tier A</span>
                          <div className="text-xs text-gray-600">Defined Diaspora</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">$150</div>
                          <div className="text-xs text-gray-600">+ Chapter dues</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-2 bg-white rounded border">
                        <div>
                          <span className="font-medium text-gray-900">Tier B</span>
                          <div className="text-xs text-gray-600">Africa & Caribbean</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">$36</div>
                          <div className="text-xs text-gray-600">+ Chapter dues</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6">
                  <h5 className="font-medium text-gray-800 mb-2">Youth Symbolic Dues</h5>
                  <p className="text-gray-700">Youth can contribute through Pan African Club programs and activities.</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Payment Logistics & Compliance</h4>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Bank transfers, mobile money, cash, and online gateways</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>All payments must be receipted</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>30-day grace period after Dec 31</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Membership lapses on Jan 31 if unpaid</span>
                  </li>
                </ul>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h5 className="font-medium text-gray-800 mb-2">Supplemental Pledges & Donations</h5>
                  <p className="text-gray-700">Members may commit to one-time, monthly, quarterly, or yearly pledges.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-start mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">4</span>
              <h3 className="text-xl font-bold text-gray-900">OPERATIONAL ENGAGEMENT: SERVICE HOURS & ROLES</h3>
            </div>

            <div className="ml-11 space-y-6">
              <p className="text-gray-700 mb-4">
                It explains departmental assignments, hour requirements, MAP submissions, youth activities,
                and the verification of all work performed.
              </p>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Departmental Integration</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Adults select a primary department</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Youth must join the Pan African Club to qualify for membership benefits</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Service Hour Requirements</h4>

                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 mb-2">Adults (18+):</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>12 hours/month or 36/quarter</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Hours logged in Digital Activity Register</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Youth (12–18):</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Through the Pan African Club programs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Performance Management & Remediation</h4>
                <div className="mb-4">
                  <h5 className="font-medium text-gray-800 mb-2">For adults:</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Through quarterly review</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Making recording to performance Explanation Form</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Review the 60‑day Formal Performance Plan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Suspension or termination</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Financial Remediation (Adults Only)</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span><strong className="text-gray-900">Tier A:</strong> $10 per missed hour</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span><strong className="text-gray-900">Tier B:</strong> $1 per missed hour or Service‑for‑Dues (40 hours/month)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Youth exempt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-start mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">5</span>
              <h3 className="text-xl font-bold text-gray-900">GOVERNANCE, COMMITTEES & DISPUTE RESOLUTION</h3>
            </div>

            <div className="ml-11 space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Performance Management & Remediation</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>5 appointed members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Oversees vetting, performance reviews, discipline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Youth cases follow the Youth Compliance Framework</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Global Membership Finance Directorate (GMFD)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>5 appointed members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Oversees financial compliance and management</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Dispute Resolution Process</h4>
                <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                  <li>Informal resolution with Department Lead</li>
                  <li>Mediation by Department of Legal Affairs</li>
                  <li>Final appeal to Global Executive Council (Adults) or Global Youth Office (Youth)</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <div className="flex items-start mb-6">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3 flex-shrink-0">6</span>
              <h3 className="text-xl font-bold text-gray-900">POLICY ADMINISTRATION & AMENDMENTS</h3>
            </div>

            <div className="ml-11">
              <p className="text-gray-700 mb-4">
                Amendments require a two-thirds vote of the Global Executive Council.
                Members must be notified 30 days before changes take effect.
                The Constitution prevails in any conflict.
              </p>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Related Documents:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>UPAM Constitution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Member Charter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Code of Conduct</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>NDA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Financial Procedures Manual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Pan African Club Policy Manual</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Membership Benefits - Mobile */}
          <section className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">MEMBERSHIP BENEFITS</h3>
            <p className="text-gray-700 mb-8 text-center leading-relaxed">
              UPAM is committed to the holistic support of its members. Our benefits are designed
              to empower you and your family, fostering growth, security, and prosperity.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-3">Education & Scholarships</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Scholarships & Grants for members and dependents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Partner School Network with tuition discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600 italic">Terms and conditions apply</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-3">Business & Entrepreneurship Support</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Startup Financing: Up to $5,000 business loans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Business Consulting services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Business Advertising & Promotion through UPAM channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600 italic">Additional terms and conditions apply</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-3">Life-Care & Wellness Program</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Bereavement Support: Up to $20,000 claim</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Health Insurance access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Short-Term Disability support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600 italic">Additional terms and conditions apply</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-3">Pension & Financial Security</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>UPAM Pension Program with matched contributions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-medium text-gray-900 mb-3">Professional & Networking Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Global networking opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Legal & Policy support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Digital Empowerment tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>Travel & Conference discounts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/70 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <em>All benefits are subject to program-specific terms, conditions,
                  and eligibility criteria as outlined in their respective detailed policy documents.</em>
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

// Reusable Benefit Card Component
const BenefitCard = ({ title, items }) => (
  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
    <h4 className="font-medium text-gray-900 mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-blue-500 mr-2 mt-1">•</span>
          <span className={`text-gray-700 ${item.highlight ? 'italic text-gray-600' : ''}`}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default MembershipPolicy;