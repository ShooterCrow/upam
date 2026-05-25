import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const HealingHistoricalDivides = () => {
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
            Healing Historical Divides: Slavery, Colonialism, and the Path to Collective Renewal
          </h1>
          <p className="text-base font-medium leading-[170%] text-slate-600">
            The African world comprising the continent and its global diaspora has been profoundly shaped by the historical traumas of slavery and colonialism. These systems inflicted deep social, economic, psychological, and cultural wounds that continue to influence African unity, identity, and development. This paper examines how historical divisions created by slavery and colonial rule persist into the present, fragmenting African peoples and weakening collective power. It argues that Pan-African renewal requires more than economic or political reform; it demands intentional healing, historical truth, and reconnection among Africans and people of African descent. By exploring memory, identity, reparative justice, and cultural restoration, the paper outlines pathways toward collective renewal grounded in dignity, unity, and shared responsibility.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
                Introduction: The Unfinished Work of Healing
              </h2>
              <div className="text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  Africa’s history is not only a story of resilience and civilization but also one of profound disruption. The transatlantic slave trade and European colonialism did not merely exploit African labor and resources; they fractured societies, displaced millions, and imposed systems designed to dehumanize and divide.
                </p>
                <p>
                  Although formal slavery and colonial rule have ended, their legacies remain embedded in global power structures and in the internal dynamics of African societies. Political borders, economic dependency, identity fragmentation, and psychological trauma are all remnants of these historical processes. This paper contends that Pan-African unity cannot be fully realized without confronting and healing these historical divides.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[430px] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1511376777868-611b54f68947?w=860&q=80"
                alt="Historical healing"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Fragmentation Systems Segment */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 lg:mb-16">
          <section>
            <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Slavery & Fragmentation</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              The transatlantic slave trade was a devastating system of forced displacement. Millions were removed from homelands and cultures, severing ancestral continuity. It commodified human beings and disrupted social trust, creating foundational traumas that continue to shape African realities globally.
            </p>
          </section>
          <section>
            <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Colonial Institutionalization</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Colonialism reorganized societies for external benefit, imposing borders and hierarchical power. It privileged European knowledge over African worldviews and designed education systems to produce intermediaries, reinforcing dependency narratives that hinder self-determination today.
            </p>
          </section>
        </div>

        {/* Trauma & Diaspora Section */}
        <section className="mb-12 lg:mb-16 p-8 bg-slate-50 border-l-4 border-[#EB010C]">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            The Psychological Burden & The Diaspora
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              Generations have lived under systems that devalued their culture, resulting in internalized oppression and identity conflict. Healing requires acknowledging this as a collective experience.
            </p>
            <p>
              The diaspora represents both the deepest wound and a massive opportunity for renewal. Pan-Africanism offers a framework for reconnection, recognizing the diaspora as an integral part of the African world through shared struggle and solidarity.
            </p>
          </div>
        </section>

        {/* Action Items: Healing Channels */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Essential Pillars of Renewal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Historical Truth-Telling", desc: "Reclaiming memory through research that centers African perspectives, preventing repetition of injustices." },
              { title: "Reparative Justice", desc: "Debt cancellation, fair trade, and returning stolen artifacts to restore material and structural balance." },
              { title: "Cultural Restoration", desc: "Reclaiming names, languages, and philosophies to affirm humanity on African terms." },
              { title: "Intergenerational Education", desc: "Equipping youth with critical history to foster borderless consciousness and purpose." }
            ].map((pillar, i) => (
              <div key={i} className="p-6 border border-slate-100 transition-shadow hover:shadow-lg">
                <h3 className="font-black text-[#EB010C] uppercase text-sm mb-2 italic">0{i + 1}. {pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Role of Movements */}
        <section className="mb-12 lg:mb-16 max-w-4xl italic">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase not-italic">
            The Role of Pan-African Movements
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Organizations like UPAM play a vital role in bridging historical divides. By creating spaces for dialogue and collaboration, they translate historical awareness into collective action. Unity is not automatic—it must be built intentionally through advocacy, research, and community engagement.
          </p>
        </section>

        {/* Conclusion Section */}
        <footer className="pt-8 border-t border-slate-100 max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 uppercase text-center">A Foundation for Shared Future</h2>
          <div className="text-base lg:text-lg text-slate-600 leading-relaxed space-y-6 text-center lg:text-left">
            <p>
              Collective renewal is not a return to a romanticized past, but a forward-looking process grounded in solidarity. It enables Africans and the diaspora to move from survival to self-definition.
            </p>
            <p>
              Healing requires truth, restored cultures, and reparative justice. The path forward lies in transforming history into a foundation for unity, dignity, and a shared prosperous future.
            </p>
            <div className="text-slate-900 font-black text-center pt-8 border-b-2 border-[#EB010C] w-fit mx-auto pb-2 uppercase text-xl">
              TRUTH. RECLAMATION. RENEWAL.
            </div>
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

export default HealingHistoricalDivides;
