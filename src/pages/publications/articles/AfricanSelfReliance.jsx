import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AfricanSelfReliance = () => {
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
            African Self-Reliance: Moving Beyond Aid to Sustainable Development
          </h1>
          <p className="text-base leading-[170%] text-slate-600">
            For decades, Africa’s development trajectory has been shaped by foreign aid, loans, and external interventions. While aid has played a role in humanitarian relief and short-term stabilization, it has not delivered lasting economic independence or structural transformation. This paper argues that true African development must be rooted in self-reliance—defined as the capacity of African societies to determine their priorities, mobilize internal resources, and build sustainable systems that serve their people. By examining the limitations of aid-dependent development models, the paper explores alternative pathways centered on local production, institutional strengthening, knowledge sovereignty, and Pan-African cooperation. African self-reliance is presented not as isolationism, but as a foundation for dignity, resilience, and long-term prosperity.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
                Introduction: Rethinking Development in Africa
              </h2>
              <div className="text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  Since independence, many African nations have pursued development strategies heavily influenced by external actors. International financial institutions, donor governments, and non-governmental organizations have shaped policies, priorities, and metrics of success. Despite decades of aid inflows, Africa continues to face persistent challenges such as poverty, unemployment, infrastructure deficits, and vulnerability to global economic shocks.
                </p>
                <p>
                  This paradox—high aid dependency alongside limited development outcomes—has prompted renewed debate about the effectiveness of aid as a development strategy. Increasingly, African scholars, policymakers, and Pan-African movements argue that sustainable progress requires a shift from dependency to self-reliance. This paper explores what African self-reliance means in practice, why aid-centered models have fallen short, and how Africa can build development pathways grounded in its own resources, people, and collective strength.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[430px] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=860&q=80"
                alt="African sustainable energy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Aid Paradigm Section */}
        <section className="mb-12 lg:mb-16 max-w-4xl">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            The Aid Paradigm and Its Structural Limitations
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              Foreign aid has often been framed as a moral obligation or a technical solution. However, aid is rarely neutral. It is shaped by donor interests and assumptions. One major limitation is policy distortion, where governments prioritize donor preferences over local needs.
            </p>
            <p>
              Aid can also weaken state accountability, as governments rely on external funding rather than domestic taxation. Furthermore, unpredictable flows and conditionality undermine long-term planning, reinforcing vulnerability. While aid can provide temporary relief, it does not address structural causes of underdevelopment like unequal trade and weak industrial bases.
            </p>
          </div>
        </section>

        {/* Psychological Context Segment */}
        <section className="mb-12 lg:mb-16 p-8 bg-slate-50 border-l-4 border-[#EB010C]">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Psychological and Political Effects of Aid Dependence
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              Beyond economics, aid dependency reinforces narratives of African incapacity, undermining confidence in local leadership. Societies may internalize the belief that solutions must come from outside.
            </p>
            <p>
              Politically, reliance on aid erodes democratic ownership and limits experimentation with indigenous solutions. African self-reliance requires a shift in mindset—from seeing Africa as a recipient to recognizing it as a producer of ideas and systems.
            </p>
          </div>
        </section>

        {/* Definitions Checklist */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Defining African Self-Reliance
          </h2>
          <div className="text-base text-slate-600 leading-relaxed">
            <p className="mb-6">
              African self-reliance does not mean rejecting global cooperation. Rather, it means prioritizing African agency in defining development through:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Mobilizing domestic resources",
                "Building productive economies",
                "Strengthening institutions",
                "Investing in human capital",
                "Knowledge sovereignty",
                "Intra-African integration"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 italic font-black text-slate-900 text-sm">
                  <div className="w-1.5 h-1.5 bg-[#EB010C]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Economic & Knowledge Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 lg:mb-16">
          <section>
            <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Economic Transformation</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Building productive capacity requires investment in agriculture, manufacturing, and technology. Value addition within Africa generates employment and reduces dependency on external markets. Supporting local industries is essential for economic self-determination.
            </p>
          </section>
          <section>
            <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Knowledge & Innovation</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Education systems must generate solutions relevant to African realities. Self-reliance requires investing in African research and cultural production. Knowledge sovereignty—control over data and narratives—is a critical dimension of self-reliance.
            </p>
          </section>
        </div>

        {/* Governance Section */}
        <section className="mb-12 lg:mb-16 border border-slate-100 p-8 bg-slate-50/50">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Governance and Institutional Strengthening
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Strong, accountable institutions are essential. Self-reliant development prioritizes institution-building: effective public administration, transparent financial management, and inclusive political processes. Citizen participation is central, as development becomes a shared responsibility rather than an externally managed project.
          </p>
        </section>

        {/* Pan-African Cooperation */}
        <section className="mb-12 lg:mb-16 max-w-4xl">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            The Role of Pan-African Cooperation
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            African self-reliance is a continental project. Challenges like trade, infrastructure, and climate change transcend borders. Pan-African cooperation allows countries to pool resources and strengthen bargaining power. Continental frameworks such as AfCFTA reduce external dependency through internal integration.
          </p>
        </section>

        {/* Practical Pathways List */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase text-center">
            Moving Beyond Aid: Practical Pathways
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Reforming tax systems to mobilize domestic revenue",
              "Reducing capital flight and illicit financial flows",
              "Investing in local production and infrastructure",
              "Prioritizing regional trade and cooperation",
              "Aligning development plans with long-term goals"
            ].map((path, i) => (
              <div key={i} className="flex gap-4 p-4 border-b border-slate-100 items-center transition-colors hover:bg-slate-50 group">
                <span className="font-black text-slate-300 group-hover:text-[#EB010C]">0{i + 1}</span>
                <p className="text-slate-700 font-medium italic">{path}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion Section */}
        <footer className="pt-8 border-t border-slate-100 max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 uppercase text-center">A Reassertion of Agency</h2>
          <div className="text-base lg:text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              African self-reliance is not a rejection of cooperation but a reassertion of agency. Aid-dependent models address symptoms rather than structures. A self-reliant Africa builds on its resources, invests in its people, and collaborates internally.
            </p>
            <p>
              Transitioning beyond aid is a necessary step toward shaping the continent's future. For Africa to prosper, development must be something Africans do for themselves—together.
            </p>
            <div className="text-slate-900 font-black text-center pt-8 border-b-2 border-[#EB010C] w-fit mx-auto pb-2">
              DIGNITY. RESILIENCE. PROSPERITY.
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default AfricanSelfReliance;
