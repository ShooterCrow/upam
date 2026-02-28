import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const HealingHistoricalDivides = () => {
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
              Healing Historical Divides: Slavery, Colonialism, and the Path to Collective Renewal
            </h1>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              The legacies of slavery and colonialism have left deep psychological, social, and economic scars across Africa and the African diaspora. These histories foster mistrust, fragmentation, and internalized narratives that weaken collective progress. Healing these historical divides is not only a moral imperative — it is a practical precondition for achieving Pan-African unity and sustainable development.
            </p>
          </header>

          {/* Introduction */}
          <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
            <div className="flex flex-col gap-6 lg:w-[840px]">
              <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
                The Weight of History
              </h2>
              <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
                For over four centuries, the transatlantic slave trade removed an estimated 12–15 million Africans from the continent, forcibly dispersing them across the Americas and the Caribbean. Colonialism followed, stripping African nations of sovereignty, natural resources, and cultural identity. These were not distant historical events — their consequences are embedded in the present: in wealth disparities, in the geography of global power, in the mental frameworks that many Africans inherited about their own worth and capability.
              </p>
              <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
                Beyond the economic damage, slavery and colonialism created psychological wounds described by thinkers like Frantz Fanon and Aimé Césaire: a colonized consciousness that measured African people and cultures against European standards, often finding them lacking. Healing begins with naming these legacies clearly and refusing to let them define Africa's future.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1511376777868-611b54f68947?w=860&q=80"
              alt="Collective renewal"
              className="w-full lg:w-[430px] h-auto lg:h-[319px] object-cover rounded-sm"
            />
          </section>

          {/* Dimensions of Healing */}
          <section className="flex flex-col gap-6">
            <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
              Dimensions of Healing
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Reparatory Justice",
                  body: "A growing movement calls for reparations — financial, institutional, and symbolic — from nations that profited from slavery and colonialism. While politically complex, reparatory justice frameworks acknowledge historical responsibility and invest in the communities most affected."
                },
                {
                  title: "Cultural Reclamation",
                  body: "Reclaiming African languages, art, philosophy, and history is an act of healing. When African people see their cultures and contributions celebrated rather than diminished, it rebuilds dignity and collective pride."
                },
                {
                  title: "Diaspora Reconnection",
                  body: "Rebuilding meaningful bonds between continental Africans and the diaspora — through citizenship programs, investment corridors, and cultural exchange — heals the division that slavery created and multiplies Pan-African power."
                },
                {
                  title: "Transformative Education",
                  body: "Decolonizing education systems — rewriting curricula to reflect African history accurately and centering African voices — produces generations with a grounded, empowered sense of identity."
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Path to Collective Renewal */}
          <section className="flex flex-col gap-6">
            <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
              The Path to Collective Renewal
            </h2>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              Collective renewal does not mean forgetting history — it means refusing to be imprisoned by it. UPAM believes that Africa's greatest asset is its people: over 1.4 billion individuals with the creativity, resilience, and determination to build a new chapter. Healing historical divides is the foundation on which that chapter is written. When Africans on the continent and in the diaspora see each other as family — sharing a common past and a common future — the potential for Pan-African unity becomes not just idealistic but inevitable.
            </p>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              UPAM's programs in youth empowerment, cultural exchange, health awareness, and leadership development are all acts of healing — building the human infrastructure for an Africa that has moved beyond the damage of history and into the full expression of its potential.
            </p>
          </section>

          {/* CTA */}
          <section className="border-t border-gray-200 pt-8">
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 bg-[#EB010C] text-white font-medium rounded hover:bg-[#EB010C]/90 transition-colors">
              Engage With UPAM
            </Link>
          </section>

        </div>
      </article>
    </div>
  );
};

export default HealingHistoricalDivides;
