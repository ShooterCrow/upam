import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ColonialBoundaries = () => {
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
              One People, Many Borders: How Colonial Boundaries Continue to Shape African Disunity
            </h1>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              The artificial borders imposed during colonial rule fragmented African societies, cultures, and economies, creating divisions that persist today. These boundaries disrupted pre-existing systems of cooperation and continue to influence political instability, ethnic tension, and weak regional integration. Understanding the historical origins and present consequences of colonial borders is essential for building a truly unified Africa.
            </p>
          </header>

          {/* Introduction */}
          <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
            <div className="flex flex-col gap-6 lg:w-[840px]">
              <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
                The Berlin Conference and the Scramble for Africa
              </h2>
              <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
                In 1884–1885, European powers convened in Berlin to divide Africa among themselves with little regard for the people who lived there. Lines were drawn across deserts, rivers, and forests — splitting ethnic groups, kingdoms, and trade networks that had existed for centuries. The Scramble for Africa resulted in over 10,000 distinct African polities being compressed into roughly 40 colonial territories, many with borders that bore no relationship to African geography, culture, or political organization.
              </p>
              <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
                These decisions, made in a European conference room without a single African representative, continue to shape the continent over a century later. Ethnic groups were divided across multiple nations. Pre-colonial trade corridors were severed. Communities that had governed themselves were placed under foreign administrators who favored certain groups over others, planting seeds of ethnic rivalry that persist today.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=860&q=80"
              alt="African map"
              className="w-full lg:w-[430px] h-auto lg:h-[319px] object-cover rounded-sm"
            />
          </section>

          {/* Legacy */}
          <section className="flex flex-col gap-6">
            <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
              The Lasting Legacy of Imposed Borders
            </h2>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              At independence, African leaders faced a dilemma: redraw borders based on ethnic and cultural lines — risking conflict and instability — or maintain colonial boundaries to preserve the fragile peace of newly independent states. The Organization of African Unity (OAU) adopted the latter in 1964, declaring colonial borders inviolable. While this prevented immediate territorial wars, it locked in the fractures colonialism created.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { label: "Political instability", desc: "Ethnic groups split across borders are politicized by governments seeking to consolidate power, fueling internal conflicts." },
                { label: "Economic fragmentation", desc: "Colonial borders disrupted natural trade routes, creating landlocked nations and economic dependencies on former colonial powers." },
                { label: "Cultural erosion", desc: "Colonial boundaries imposed foreign languages and administrative identities that weakened African cultural cohesion." },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFF5F5] border border-[#EB010C]/10 rounded-xl p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Path Forward */}
          <section className="flex flex-col gap-6">
            <h2 className="text-xl text-gray-900 font-semibold leading-[156%] tracking-[0.4px]">
              A Path Toward Unity Beyond Borders
            </h2>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              Pan-African unity does not require redrawing every border — it requires transcending them. The African Continental Free Trade Area (AfCFTA), regional blocs like ECOWAS and the EAC, and frameworks like the African Union's Agenda 2063 represent steps toward the kind of functional integration that reduces the impact of colonial fragmentation. Free movement of people, harmonized regulatory frameworks, and shared infrastructure investments can make borders less relevant economically and socially, even where they remain politically fixed.
            </p>
            <p className="text-base text-[#555555] leading-[170%] tracking-[0.32px]">
              UPAM advocates for a Pan-African identity that supersedes colonial boundaries — one built on shared history, cultural pride, and collective economic self-determination. Unity is not the absence of borders; it is the presence of a shared vision powerful enough to transcend them.
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

export default ColonialBoundaries;
