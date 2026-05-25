import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AfricanEconomicEcosystem = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Container */}
      <article className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back navigation link */}
        <div className="mb-12">
          <Link to="/publications" className="inline-flex items-center gap-2 text-sm font-black text-[#EB010C] hover:text-[#EB010C]/80 uppercase tracking-widest group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Publications
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-black leading-[130%] tracking-tight text-slate-900 mb-6 uppercase">
            Building an African Economic Ecosystem Owned by Africans
          </h1>
          <p className="text-base leading-[170%] text-slate-600">
            Economic ownership remains one of the most critical challenges facing Africa and people of African descent in the post-colonial era. Despite vast natural resources, human capital, and cultural wealth, African economies remain largely dependent on external ownership, foreign capital, and extractive systems that limit long-term development. This paper argues that true African liberation and Pan-African unity cannot be achieved without an African-owned economic ecosystem. It explores the historical roots of economic dependency, examines present structural challenges, and proposes pathways toward building systems of production, finance, trade, and innovation that are controlled and sustained by Africans. By centering ownership, cooperation, and self-reliance, the paper positions economic sovereignty as a foundation for political stability, cultural dignity, and generational prosperity.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
                Introduction: The Question of Ownership
              </h2>
              <div className="text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  Africa’s economic story has long been framed around growth statistics, foreign investment inflows, and development aid. While these metrics often suggest progress, they rarely address a more fundamental question: Who owns Africa’s economy? Ownership determines power. It shapes decision-making, value distribution, and long-term sustainability.
                </p>
                <p>
                  Across much of the continent, key sectors—mining, oil, telecommunications, agriculture processing, banking, and even retail—are dominated or heavily influenced by foreign interests. As a result, wealth generated within Africa frequently flows outward, reinforcing dependency rather than building internal capacity. This paper contends that economic growth without ownership is insufficient. For Africa to achieve meaningful development and unity, it must build an economic ecosystem owned, governed, and driven by Africans themselves.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[430px] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=860&q=80"
                alt="African economic growth"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Historical Context Section */}
        <section className="mb-12 lg:mb-16 max-w-4xl">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Historical Foundations of Economic Dependency
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              The roots of Africa’s economic dependency lie in the transatlantic slave trade and colonialism. These systems were not accidental; they were designed to extract labor, resources, and wealth for external benefit. Colonial economies were structured around exporting raw materials and importing finished goods, leaving little room for industrialization or local enterprise. At independence, many African states inherited economies shaped by these extractive models.
            </p>
            <p>
              While political control shifted, economic structures often remained unchanged. Multinational corporations replaced colonial administrators, and foreign aid replaced direct rule, but dependency persisted. Structural adjustment programs of the late 20th century further weakened African economic sovereignty by prioritizing privatization, deregulation, and reduced state involvement—often at the expense of local industries and social welfare. These historical forces continue to shape present realities, making the call for African-owned systems both urgent and complex.
            </p>
          </div>
        </section>

        {/* Defining Economic Ecosystem Section */}
        <section className="mb-12 lg:mb-16 p-8 bg-slate-50 border-l-4 border-[#EB010C]">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Defining an African-Owned Economic Ecosystem
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              An African economic ecosystem owned by Africans goes beyond individual businesses or national policies. It refers to an interconnected system in which Africans collectively control:
            </p>
            <ul className="space-y-2 list-none font-bold text-slate-800">
              <li className="flex items-center gap-3 italic">
                <div className="w-1.5 h-1.5 bg-[#EB010C]" /> Production (what is made and how)
              </li>
              <li className="flex items-center gap-3 italic">
                <div className="w-1.5 h-1.5 bg-[#EB010C]" /> Finance (how capital is generated and allocated)
              </li>
              <li className="flex items-center gap-3 italic">
                <div className="w-1.5 h-1.5 bg-[#EB010C]" /> Distribution (how goods and services move)
              </li>
              <li className="flex items-center gap-3 italic">
                <div className="w-1.5 h-1.5 bg-[#EB010C]" /> Consumption (how value circulates within communities)
              </li>
            </ul>
            <p>
              Ownership in this context is not limited to state control. It includes cooperatives, private enterprises, community-based organizations, and diaspora investments. The central principle is that African people retain decision-making power and benefit directly from economic activity. Such an ecosystem prioritizes long-term development over short-term profit and collective prosperity over extractive accumulation.
            </p>
          </div>
        </section>

        {/* Entrepreneurship Section */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            The Role of African Entrepreneurship and SMEs
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              Small and medium-sized enterprises (SMEs) form the backbone of most economies worldwide, and Africa is no exception. African entrepreneurs demonstrate remarkable resilience and creativity, often operating in challenging environments with limited access to capital and infrastructure.
            </p>
            <p className="font-black text-slate-900 uppercase text-sm">However, many African businesses struggle to scale due to systemic barriers:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Limited access to affordable financing",
                "Poor infrastructure",
                "Regulatory constraints",
                "Competition from foreign-owned firms"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 italic">
                  <span className="text-[#EB010C] font-black">#0{i + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              Building an African-owned economic ecosystem requires deliberate policies and institutions that support local entrepreneurship. This includes access to credit, business development services, regional markets, and protection from unfair competition. Entrepreneurship should not be framed solely as individual success but as a collective strategy for economic self-determination.
            </p>
          </div>
        </section>

        {/* Trade Section */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Intra-African Trade and Value Addition
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              Africa’s trade patterns remain outward-oriented, with many countries exporting raw materials and importing finished products. This limits job creation and value retention. Intra-African trade, by contrast, remains relatively low compared to other regions. The African Continental Free Trade Area (AfCFTA) offers a framework for transforming these patterns. Africa must also invest in:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 font-bold text-slate-800">
              <li>• Local manufacturing</li>
              <li>• Agro-processing</li>
              <li>• Regional supply chains</li>
              <li>• Logistics & Transport</li>
            </ul>
            <p>
              Value addition is essential. Processing African resources within Africa creates jobs, builds skills, and increases economic resilience. An African-owned ecosystem ensures that the benefits of value addition remain within the continent.
            </p>
          </div>
        </section>

        {/* Tech & Diaspora Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 lg:mb-16">
          <section>
            <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Technology & Innovation</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Technology presents both opportunities and risks. Digital platforms and fintech are transforming commerce, but many are foreign-owned, raising data sovereignty concerns. African-led innovation supported by local research is crucial for ensuring that technological advancement supports self-reliance rather than dependency.
            </p>
          </section>
          <section>
            <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Diaspora as Partners</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Beyond remittances, the diaspora contributes skills, networks, and investment. A Pan-African ecosystem must create structured pathways for engagement through investment platforms, dual residency, and knowledge exchange programs.
            </p>
          </section>
        </div>

        {/* Challenges Section */}
        <section className="mb-12 lg:mb-16 p-8 border border-slate-100">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Challenges and Structural Barriers
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>Building an African-owned economic ecosystem is not without challenges:</p>
            <ul className="space-y-2 list-none font-medium text-slate-700">
              <li className="flex items-start gap-4 p-3 bg-red-50/50">
                <span className="font-black text-[#EB010C]">01</span>
                <span>Weak governance and corruption</span>
              </li>
              <li className="flex items-start gap-4 p-3 bg-red-50/50">
                <span className="font-black text-[#EB010C]">02</span>
                <span>Political instability</span>
              </li>
              <li className="flex items-start gap-4 p-3 bg-red-50/50">
                <span className="font-black text-[#EB010C]">03</span>
                <span>Infrastructure deficits</span>
              </li>
              <li className="flex items-start gap-4 p-3 bg-red-50/50">
                <span className="font-black text-[#EB010C]">04</span>
                <span>Fragmented markets</span>
              </li>
            </ul>
            <p className="font-bold text-slate-900 pt-4">
              Addressing these challenges requires strong institutions, transparent governance, and accountability.
            </p>
          </div>
        </section>

        {/* Conclusion Section */}
        <footer className="pt-8 border-t border-slate-100 max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 uppercase text-center">Toward a Collective Economic Future</h2>
          <div className="text-base lg:text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              An African-owned economic ecosystem is not a rejection of global engagement but a rebalancing of power. Africa can engage globally on its own terms, as an equal partner rather than a dependent participant. This vision aligns with Pan-African principles of unity, self-determination, and collective progress.
            </p>
            <p>
              Economic ownership lies at the heart of Africa’s struggle for true independence. Without control over production, finance, and trade, political sovereignty remains fragile. Building an African economic ecosystem owned by Africans is both a moral imperative and a practical necessity.
            </p>
            <p className="text-slate-900 font-black text-center pt-4">
              The future of Africa depends not only on growth but on ownership.
            </p>
          </div>
        </footer>

        {/* Bottom navigation */}
        <div className="py-16 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/publications" className="inline-flex items-center gap-2 text-sm font-black text-[#EB010C] hover:text-[#EB010C]/80 uppercase tracking-widest group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Publications
          </Link>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">United Pan-African Movement</p>
        </div>
      </article>
    </div>
  );
};

export default AfricanEconomicEcosystem;
