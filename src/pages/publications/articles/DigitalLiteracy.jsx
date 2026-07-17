import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '../../../component/ScrollReveal';

const DigitalLiteracy = () => {
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
        <ScrollReveal direction="up"><header className="mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-black leading-[130%] tracking-tight text-slate-900 mb-6 uppercase">
            Digital Literacy and Innovation as Tools for African Self-Sufficiency
          </h1>
          <p className="text-base leading-[170%] text-slate-600">
            In the 21st century, digital literacy and technological innovation have become decisive forces shaping economic power, governance, education, and global influence. For Africa, these forces present both an opportunity and a risk. While digital tools offer pathways to self-sufficiency, innovation, and inclusion, the continent remains largely positioned as a consumer rather than a creator of digital technologies. This paper argues that African self-sufficiency in the modern era is inseparable from digital literacy and innovation. It explores the historical context of technological dependency, examines current gaps in digital capacity, and proposes strategic approaches to building African-led digital ecosystems. By centering people, education, and ownership, the paper positions digital empowerment as a cornerstone of Pan-African development and collective independence.
          </p>
        </header></ScrollReveal>

        {/* Introduction Section */}
        <section className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="flex-1">
              <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
                Introduction: Technology and the Question of Power
              </h2>
              <div className="text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  Throughout history, technological control has been closely linked to power and self-determination. From the Industrial Revolution to the digital age, societies that mastered technology shaped global systems, while those excluded were marginalized. Africaâ€™s experience reflects this pattern. Despite being rich in resources and human potential, the continent has often been positioned at the periphery of technological advancement.
                </p>
                <p>
                  Today, digital technology influences nearly every aspect of lifeâ€”commerce, governance, education, healthcare, and communication. For Africa, digital literacy and innovation are no longer optional; they are essential tools for survival, competitiveness, and independence. Without them, African societies risk deepening dependency on external systems that control data, platforms, and knowledge. This paper argues that digital literacy and innovation must be treated as strategic instruments of African self-sufficiency, not merely as development accessories or consumer conveniences.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[430px] shrink-0">
              <img
                src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779263591/03844d6c8c31f7c08718fa4374cf6d00fa346904_lpol7w.png"
                alt="African technology and community"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Historical Context Section */}
        <section className="mb-12 lg:mb-16 max-w-4xl">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Historical Context: Africa and Technological Marginalization
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Africaâ€™s technological marginalization did not emerge in isolation. Colonial systems actively suppressed indigenous knowledge systems and limited technological development to serve extractive interests. Infrastructure such as railways and ports was designed primarily to transport resources outward, not to support internal industrialization or innovation. After independence, many African countries faced limited access to capital, education, and research institutions necessary for technological advancement. Global technological revolutionsâ€”computing, telecommunications, and later the internetâ€”largely unfolded without African leadership or ownership. As a result, Africa became dependent on imported technologies, software, and expertise. This historical exclusion has shaped present realities, where many African economies rely heavily on foreign digital platforms and intellectual property, reinforcing economic and informational dependency.
          </p>
        </section>

        {/* Defining Digital Literacy Section */}
        <section className="mb-12 lg:mb-16 p-8 bg-slate-50 border-l-4 border-[#EB010C]">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Defining Digital Literacy Beyond Basic Skills
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              Digital literacy is often narrowly defined as the ability to use computers or smartphones. However, for African self-sufficiency, digital literacy must be understood more broadly. It includes:
            </p>
            <ul className="space-y-2 list-none font-bold text-slate-800">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#EB010C]" /> Critical understanding of digital systems
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#EB010C]" /> Ability to create, not just consume, digital content
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#EB010C]" /> Knowledge of data, privacy, and cybersecurity
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#EB010C]" /> Capacity to innovate and adapt technology to local needs
              </li>
            </ul>
            <p>
              True digital literacy empowers individuals to participate meaningfully in the digital economy, influence digital policy, and shape technological futures. Without this depth, digital access alone risks turning Africans into passive users within systems controlled by others.
            </p>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Innovation as a Pathway to Self-Reliance
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              Innovation is not limited to high-tech laboratories or Silicon Valley-style startups. In the African context, innovation often emerges from necessityâ€”solving local problems with limited resources. Mobile banking, agricultural technology, and health innovations demonstrate Africaâ€™s capacity for creative problem-solving.
            </p>
            <p className="font-black text-slate-900 uppercase text-sm">However, innovation ecosystems remain uneven due to systemic challenges:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Limited funding",
                "Weak research institutions",
                "Poor infrastructure",
                "Brain drain"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 italic">
                  <span className="text-[#EB010C] font-black">#0{i + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p>
              For innovation to drive self-sufficiency, it must be supported by intentional investment, policy frameworks, and education systems that nurture creativity and experimentation. African innovation must be African-led, addressing African realities rather than replicating external models.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Education and Digital Empowerment
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              Education lies at the heart of digital self-sufficiency. Many African education systems still emphasize rote learning over critical thinking, creativity, and technical skills. Bridging the digital divide requires transforming curricula to include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 font-bold text-slate-800">
              <li>â€¢ Coding and computational thinking</li>
              <li>â€¢ Digital entrepreneurship</li>
              <li>â€¢ Media and information literacy</li>
              <li>â€¢ African perspectives on technology and ethics</li>
            </ul>
            <p>
              Digital literacy programs must also extend beyond formal schooling to reach adults, rural communities, and marginalized groups. Inclusive digital education ensures that technological empowerment does not become another source of inequality.
            </p>
            <p className="border-l-2 border-slate-200 pl-4 italic">
              Organizations like UPAM can play a vital role by promoting accessible digital learning initiatives that align technology with African values and development goals.
            </p>
          </div>
        </section>

        {/* Ownership Section */}
        <section className="mb-12 lg:mb-16">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Digital Economies and African Ownership
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-6">
            The digital economy offers new avenues for wealth creation, yet ownership remains a critical concern. Many digital platforms operating in Africaâ€”social media, e-commerce, cloud servicesâ€”are owned by foreign corporations. This raises questions about data sovereignty, profit extraction, and long-term dependency. African self-sufficiency requires building and supporting African-owned digital platforms, fintech systems, and data infrastructure. Ownership ensures that value generated within African digital spaces circulates locally, funding further innovation and development. Data, often described as the â€œnew oil,â€ must be treated as a strategic resource. African control over data governance and digital infrastructure is essential for economic and political autonomy.
          </p>
          <img
            src="https://res.cloudinary.com/dyy6gisnk/image/upload/f_auto,q_auto/v1779263497/1586336c8630d744a01c5e9365c019966728c838_tcmo19.png"
            alt="African markets and vendors"
            className="w-full h-auto object-cover mb-8"
          />
        </section>

        {/* Governance & Youth Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 lg:mb-16">
          <section>
            <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">Governance & Participation</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Digital tools also shape governance and civic engagement. E-governance systems, digital identity, and online participation platforms can improve transparency, accountability, and citizen inclusion. However, without digital literacy, such tools risk exclusion or misuse. Empowering citizens with digital knowledge strengthens democracy and civic responsibility. It allows Africans to engage critically with information, counter misinformation, and participate in shaping public policy.
            </p>
          </section>
          <section>
            <h2 className="text-lg lg:text-xl font-black text-slate-900 mb-3 uppercase">The Role of Youth & Diaspora</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Africaâ€™s youthful population represents one of its greatest assets in the digital age. Supporting youth-led digital initiatives can accelerate self-sufficiency while fostering a sense of ownership and purpose. The African diaspora also plays a critical role, bringing technical expertise and global networks. Structured engagement with the diaspora can facilitate knowledge transfer, mentorship, and collaborative innovation.
            </p>
          </section>
        </div>

        {/* Challenges Section */}
        <section className="mb-12 lg:mb-16 p-8 border border-slate-100">
          <h2 className="text-xl lg:text-2xl font-black text-slate-900 mb-4 uppercase">
            Challenges and Ethical Considerations
          </h2>
          <div className="text-base text-slate-600 leading-relaxed space-y-4">
            <p>Despite its potential, digital transformation presents challenges:</p>
            <ul className="space-y-2 list-none font-medium text-slate-700">
              <li className="flex items-start gap-4 p-3 bg-red-50/50">
                <span className="font-black text-[#EB010C]">01</span>
                <span>Unequal access to infrastructure</span>
              </li>
              <li className="flex items-start gap-4 p-3 bg-red-50/50">
                <span className="font-black text-[#EB010C]">02</span>
                <span>Digital surveillance and privacy concerns</span>
              </li>
              <li className="flex items-start gap-4 p-3 bg-red-50/50">
                <span className="font-black text-[#EB010C]">03</span>
                <span>Cultural erosion through unregulated media</span>
              </li>
              <li className="flex items-start gap-4 p-3 bg-red-50/50">
                <span className="font-black text-[#EB010C]">04</span>
                <span>Dependence on foreign technology providers</span>
              </li>
            </ul>
            <p className="font-bold text-slate-900">
              Addressing these challenges requires ethical frameworks that prioritize African values, cultural preservation, and human dignity.
            </p>
          </div>
        </section>

        {/* Conclusion Section */}
        <footer className="pt-8 border-t border-slate-100 max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 uppercase text-center">From Digital Access to Digital Power</h2>
          <div className="text-base lg:text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              Digital access alone does not guarantee self-sufficiency. The goal must be digital powerâ€”the ability to design, control, and govern digital systems. This shift requires coordinated efforts across education, policy, investment, and cultural renewal.
            </p>
            <p>
              Digital literacy and innovation are among the most powerful tools available to Africa in the pursuit of self-sufficiency. When Africans understand, create, and own digital systems, technology becomes a means of liberation rather than dependency. Achieving this vision demands intentional investment, inclusive education, ethical governance, and Pan-African solidarity.
            </p>
            <p className="text-slate-900 font-black">
              Creation over consumption. Ownership over access.
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
}

export default DigitalLiteracy