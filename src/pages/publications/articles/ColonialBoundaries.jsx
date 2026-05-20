import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ColonialBoundaries = () => {
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
            One People, Many Borders: How Colonial Boundaries Continue to Shape African Disunity
          </h1>
          <p className="text-base leading-[170%] text-slate-600">
            Africa is home to immense cultural, linguistic, and historical interconnectedness, yet it remains one of the most politically fragmented regions in the world. The borders that divide the continent today were largely imposed during colonial rule, with little regard for existing African societies, identities, or systems of governance. This paper examines how colonial boundaries continue to shape African disunity in the 21st century—politically, economically, socially, and psychologically. It argues that these borders are not merely geographic lines but enduring structures of division that hinder Pan-African unity and development. By analyzing their historical origins, contemporary impacts, and possible pathways toward transcending them, the paper positions border re-imagining as a central task in the realization of Pan-Africanism as a lived reality.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
                Introduction: The Border Question in Africa
              </h2>
              <div className="text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  Africa’s borders are among the most visible legacies of colonialism. Unlike many other regions of the world where borders evolved over long historical processes, African borders were largely drawn in a short period during the late 19th and early 20th centuries. These lines were imposed through negotiation among European powers, without consultation with African peoples.
                </p>
                <p>
                  Today, Africa has over 50 nation-states, each with its own political system, currency, immigration policies, and economic priorities. While political independence transferred governance to African leaders, the colonial borders remained intact. The result has been a continent that is politically sovereign but structurally fragmented. This paper argues that African disunity cannot be fully understood without confronting the enduring influence of colonial borders. It further contends that Pan-African unity requires not necessarily the erasure of borders, but a fundamental transformation of how they function and how Africans relate to one another across them.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[430px] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=860&q=80"
                alt="African boundaries map"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Historical Construction Section */}
        <section className="mb-12 lg:mb-16 max-w-4xl">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            The Colonial Construction of African Borders
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            The modern African border system emerged primarily from the Berlin Conference of 1884–1885 and subsequent colonial agreements. European powers partitioned the continent based on strategic interests, economic resources, and political convenience. Ethnic groups, kingdoms, and trade networks were split across artificial boundaries, while historically unrelated communities were forced into single political units. These borders served colonial objectives: control, extraction, and administration. They disrupted indigenous governance systems and reoriented African societies toward external centers of power. Colonial borders were not meant to foster unity or development; they were designed to facilitate domination. By the time African nations gained independence, these borders had hardened into internationally recognized boundaries, making their alteration politically risky and diplomatically complex.
          </p>
        </section>

        {/* Identity & Psychological Impact */}
        <section className="mb-12 lg:mb-16 p-8 bg-slate-50 border-l-4 border-[#EB010C]">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Borders and the Fragmentation of African Identity
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              Colonial borders reshaped how Africans understood themselves and one another. Communities that had shared language, culture, and ancestry for centuries were suddenly defined as “foreigners” to one another. Over time, colonial administrations reinforced new identities tied to colonial territories rather than shared African heritage.
            </p>
            <p>
              Post-independence education systems, national symbols, and political narratives often emphasized national identity over Pan-African consciousness. While national pride played an important role in state-building, it also contributed to a narrowing of identity that weakened continental solidarity. The psychological impact of borders is profound. Africans are often more familiar with European or American geography than with neighboring African countries. This mental fragmentation undermines the sense of shared destiny that Pan-Africanism seeks to cultivate.
            </p>
          </div>
        </section>

        {/* Political & Economic Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 lg:mb-16">
          <section>
            <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Political Disunity</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Colonial borders have also shaped Africa’s political landscape in ways that complicate governance. Many states encompass diverse ethnic groups, and arbitrary borders often make nation-building difficult. Competition over land and resources is exacerbated by borders that ignore historical realities, diverting resources from development and continental integration.
            </p>
          </section>
          <section>
            <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Economic Fragmentation</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Economically, colonial borders have created fragmented markets. Trade barriers, visa restrictions, and regulatory differences make it easier for African countries to trade with global partners than with neighbors. Infrastructure was originally designed for extraction, not connection, hindering growth and self-reliance.
            </p>
          </section>
        </div>

        {/* Mobility Section */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Borders, Mobility, and the African People
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-6">
            One of the most tangible ways colonial borders affect everyday life is through restrictions on mobility. Africans often face greater difficulty traveling within Africa than traveling outside the continent. Visa requirements and bureaucratic hurdles contradict the Pan-African ideal of shared belonging. Efforts like the AU’s Free Movement Protocol represent vital steps toward reimagining borders as points of connection.
          </p>
          <div className="bg-[#EB010C]/5 p-6 border border-red-100 italic">
            "Unity is not the absence of borders; it is the presence of a shared vision powerful enough to transcend them."
          </div>
        </section>

        {/* Rethinking Borders */}
        <section className="mb-12 lg:mb-16 max-w-4xl">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Rethinking Borders: Unity Without Erasure
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Addressing the legacy of colonial borders requires rethinking how they function. Borders can become administrative tools rather than psychological barriers. Regional integration initiatives demonstrate that shared policies and coordinated governance are possible. A Pan-African approach would prioritize common standards, shared institutions, and cultural exchange programs to rebuild social and psychological unity.
          </p>
        </section>

        {/* Youth & Diaspora Section */}
        <section className="mb-12 lg:mb-16 border border-slate-100 p-8">
          <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-4 uppercase">Youth, Diaspora, and Borderless Consciousness</h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              Young Africans are increasingly connected through digital platforms and culture, transcending borders with music, fashion, and film. The African diaspora also plays a vital role in fostering borderless consciousness, connecting people of African descent regardless of national origin.
            </p>
            <p className="font-bold text-slate-900">
              Organizations like UPAM help translate these connections into collective empowerment, connecting youth across borders and continents.
            </p>
          </div>
        </section>

        {/* Conclusion Section */}
        <footer className="pt-8 border-t border-slate-100 max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 uppercase text-center">Toward a Post-Colonial Geography of Unity</h2>
          <div className="text-base lg:text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              Ultimately, confronting colonial borders is about reclaiming African agency. It is about recognizing that the current map of Africa reflects historical injustice rather than natural divisions. A Pan-African future requires the courage to imagine new forms of belonging and cooperation.
            </p>
            <p>
              Addressing the legacy of borders is essential for realizing Pan-Africanism. By reimagining borders as bridges rather than barriers, Africa can move toward greater unity without erasing its diversity. Redrawing the meaning of belonging is the key to collective renewal and shared prosperity.
            </p>
            <div className="text-slate-900 font-black text-center pt-8 border-b-2 border-[#EB010C] w-fit mx-auto pb-2">
              RECLAIMING THE MAP. REDEFINING UNITY.
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ColonialBoundaries;
