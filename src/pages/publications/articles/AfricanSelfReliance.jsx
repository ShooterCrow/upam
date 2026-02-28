import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AfricanSelfReliance = () => {
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
              African Self-Reliance: Moving Beyond Aid to Sustainable Development
            </h1>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              Foreign aid has played a role in addressing humanitarian crises in Africa, but long-term reliance on aid has often undermined local capacity, accountability, and innovation. African self-reliance emphasizes development strategies driven by local knowledge, resources, and institutions — positioning the continent as the architect of its own progress rather than a recipient of external charity.
            </p>
          </header>

          {/* Introduction */}
          <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
            <div className="flex flex-col gap-6 lg:w-[840px]">
              <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
                The Aid Paradox
              </h2>
              <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
                Since the 1960s, Africa has received trillions of dollars in foreign aid. Yet by many measures, the continent's structural challenges — poverty, weak institutions, infrastructure deficits, and food insecurity — have not been systematically resolved. Critics of the aid model argue that it creates dependency, distorts local markets, undermines domestic accountability, and often serves the geopolitical interests of donor nations more than the long-term needs of African people.
              </p>
              <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
                This is not to say that humanitarian assistance has no place — emergency relief saves lives. But development aid, as a model for structural transformation, has largely failed to deliver the self-sustaining progress that African nations deserve. The question is not whether to reject external relationships, but how to reframe them on terms that empower rather than entrench dependency.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=860&q=80"
              alt="African development"
              className="w-full lg:w-[430px] h-auto lg:h-[319px] object-cover rounded-sm"
            />
          </section>

          {/* Pillars of Self-Reliance */}
          <section className="flex flex-col gap-6">
            <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
              Pillars of African Self-Reliance
            </h2>
            <div className="flex flex-col gap-4">
              {[
                {
                  num: "01",
                  title: "Domestic Revenue Mobilization",
                  body: "Strengthening tax systems, closing illicit financial flows, and ensuring that African governments capture a fair share of value from their own natural resources reduces the need for external aid and builds accountable governance."
                },
                {
                  num: "02",
                  title: "Local Food Production & Sovereignty",
                  body: "Investing in African agriculture — seeds, irrigation, storage, processing — reduces dependence on imported food and food aid. Food sovereignty is a cornerstone of self-reliance."
                },
                {
                  num: "03",
                  title: "Human Capital Development",
                  body: "World-class education and skills training within Africa keeps talent on the continent, drives innovation, and reduces the brain drain that weakens institutional capacity."
                },
                {
                  num: "04",
                  title: "Pan-African Investment & Finance",
                  body: "Channeling African savings and sovereign wealth funds into intra-African investment reduces reliance on external development financing and aligns capital with African priorities."
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start bg-gray-50 border border-gray-100 rounded-xl p-5">
                  <span className="text-2xl font-bold text-[#EB010C] shrink-0">{item.num}</span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-[#666666] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* UPAM Position */}
          <section className="flex flex-col gap-6 border-t border-gray-200 pt-10">
            <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
              UPAM's Position: From Charity to Partnership
            </h2>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              UPAM advocates for a transformation in how Africa engages with the international community — moving from charity-based relationships to genuine partnerships built on mutual respect, equitable benefit-sharing, and African agency. This means reforming international trade rules that disadvantage African producers, ending predatory loan structures, and demanding that technology transfer accompany foreign investment. Self-reliance is not isolationism; it is the confidence to engage the world from a position of strength.
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

export default AfricanSelfReliance;
