import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AfricanEconomicEcosystem = () => {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24">
        <div className="flex flex-col gap-12 lg:gap-[50px]">

          {/* Back */}
          <Link to="/publications" className="inline-flex items-center gap-2 text-sm font-medium text-[#EB010C] hover:text-[#EB010C]/80 pt-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Publications
          </Link>

          {/* Header */}
          <header className="flex flex-col gap-7 max-w-[1218px]">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#EB010C]">Articles / Research</p>
            <h1 className="text-[28px] sm:text-[32px] font-semibold text-black leading-[139%] tracking-[0.64px]">
              Building an African Economic Ecosystem Owned by Africans
            </h1>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              Economic ownership remains one of the most critical challenges facing Africa and people of African descent in the post-colonial era. Despite vast natural resources, human capital, and cultural wealth, African economies remain largely dependent on external ownership, foreign capital, and extractive systems that limit long-term development. This paper argues that true African liberation cannot be achieved without an African-owned economic ecosystem — one that prioritizes African control, cooperation, and self-reliance as a foundation for political stability, cultural dignity, and generational prosperity.
            </p>
          </header>

          {/* Introduction */}
          <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
            <div className="flex flex-col gap-6 lg:w-[840px]">
              <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
                Introduction: The Question of Ownership
              </h2>
              <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
                Africa's economic story has long been framed around growth statistics, foreign investment inflows, and development aid. While these metrics often suggest progress, they rarely address a more fundamental question: Who owns Africa's economy? Ownership determines power — it shapes decision-making, value distribution, and long-term sustainability. Across much of the continent, key sectors — mining, oil, telecommunications, agriculture processing, banking, and even retail — are dominated or heavily influenced by foreign interests. As a result, wealth generated within Africa frequently flows outward, reinforcing dependency rather than building internal capacity.
              </p>
              <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
                This paper contends that economic growth without ownership is insufficient. For Africa to achieve meaningful development and unity, it must build an economic ecosystem owned, governed, and driven by Africans themselves.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=860&q=80"
              alt="African marketplace"
              className="w-full lg:w-[430px] h-auto lg:h-[319px] object-cover rounded-sm"
            />
          </section>

          {/* Historical Foundations */}
          <section className="flex flex-col gap-6">
            <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
              Historical Foundations of Economic Dependency
            </h2>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              The roots of Africa's economic dependency lie in the transatlantic slave trade and colonialism. These systems were designed to extract labor, resources, and wealth for external benefit. Colonial economies were structured around exporting raw materials and importing finished goods, leaving little room for industrialization or local enterprise. At independence, many African states inherited economies shaped by these extractive models. While political control shifted, economic structures often remained unchanged. Multinational corporations replaced colonial administrators, and foreign aid replaced direct rule, but dependency persisted.
            </p>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              Structural adjustment programs of the late 20th century further weakened African economic sovereignty by prioritizing privatization, deregulation, and reduced state involvement — often at the expense of local industries and social welfare. These historical forces continue to shape present realities, making the call for African-owned systems both urgent and complex.
            </p>
          </section>

          {/* Pillars */}
          <section className="flex flex-col gap-6">
            <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
              Pillars of an African-Owned Economic Ecosystem
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Intra-African Trade", body: "Expanding trade within Africa through agreements like the AfCFTA is essential. When Africans buy, sell, and invest primarily within the continent, wealth stays and multiplies locally rather than flowing to external economies." },
                { title: "African Finance & Capital", body: "Building African-owned banks, investment funds, and financial instruments ensures that capital raised on the continent serves African development priorities rather than external shareholder interests." },
                { title: "Technology & Innovation", body: "African-owned technology companies, platforms, and digital infrastructure allow the continent to define its own digital economy — creating jobs, IP ownership, and data sovereignty." },
                { title: "Agricultural Value Chains", body: "Processing raw agricultural products within Africa, rather than exporting raw commodities, dramatically increases export value and creates employment across the value chain." },
              ].map((p, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="flex flex-col gap-6 border-t border-gray-200 pt-10">
            <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
              Conclusion: Ownership as Liberation
            </h2>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              Building an African-owned economic ecosystem is not a rejection of global engagement — it is a demand for equitable participation. It means that Africa engages the world on its own terms, with its own institutions, capital, and negotiating power. This vision requires collective political will, sustained investment in African entrepreneurship, reformed trade policies, and a culture that values and rewards African-owned enterprise. UPAM believes this is not only possible but necessary for the realization of true Pan-African unity and prosperity.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB010C] text-white font-medium rounded hover:bg-[#EB010C]/90 transition-colors w-fit mt-2">
              Engage With UPAM
            </Link>
          </section>

        </div>
      </article>
    </div>
  );
};

export default AfricanEconomicEcosystem;
