import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import jumuiyaLogo from '../../assets/jumuiya_logo.png';
import upamEventsLogo from '../../assets/upam_events_logo.png';
import academyLogo from '../../assets/academy_logo.png';
import miaLogo from '../../assets/mia_logo.png';
import holdingsLogo from '../../assets/holdings_logo.png';

const Platform = () => {
  const activePlatforms = [
    {
      name: "WNN Africa",
      description: "Global media network and radio services.",
      link: "#",
      logo: '../../assets/wnn_logo.png'
    },
    {
      name: "Jumuiya Forum",
      description: "Vibrant social networking and knowledge hub.",
      link: "#",
      isActive: true,
      logo: jumuiyaLogo
    },
    {
      name: "UPAM Events",
      description: "Discover and participate in upcoming events.",
      link: "#",
      logo: upamEventsLogo
    },
    {
      name: "UPAM Academy Website",
      description: "Educational resources and leadership training.",
      link: "#",
      logo: academyLogo
    }
  ];

  const developmentPlatforms = [
    {
      name: "MIA",
      tagline: "Made In Africa",
      description: "A dedicated marketplace for African products.",
      logo: miaLogo
    },
    {
      name: "UPAM Holdings",
      tagline: "Investment opportunities and economic development.",
      description: "Investment opportunities and economic development.",
      logo: holdingsLogo
    }
  ];

  return (
    <div className="bg-white min-h-screen font-['Lato',_sans-serif] text-black">
      <div className="px-4 container mx-auto md:px-8 max-w-[1280px] pb-24">

        {/* Hero Section */}
        <section className="pt-16 md:pt-28 mb-16 max-w-4xl">
          <p className="text-[14px] leading-[139%] tracking-[0.02em] uppercase mb-5 font-medium">
            Platforms
          </p>
          <h1 className="text-[26px] md:text-[40px] font-semibold leading-[1.3] tracking-[0.02em]">
            Welcome to upam platforms, here you have various platforms that are operated by the organization
          </h1>
        </section>

        {/* Active Platforms Section */}
        <section className="mb-24">
          <h2 className="text-[16px] font-semibold mb-10 uppercase tracking-[0.05em]">Active Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {activePlatforms.map((platform, index) => (
              <div
                key={index}
                className={`group p-8 border border-gray-100 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:shadow-lg ${platform.isActive ? 'bg-[#EEEEEE]' : 'bg-[#F9F9F9]'}`}
              >
                <div>
                  {platform.logo && (
                    <div className="mb-4 h-10 w-auto">
                      <img src={platform.logo} alt={`${platform.name} Logo`} className="h-full object-contain" />
                    </div>
                  )}
                  <h3 className="text-[22px] font-bold mb-3 tracking-[0.01em]">{platform.name}</h3>
                  <p className="text-[14px] text-[#4A4A4A] leading-[1.6] mb-8 font-normal">
                    {platform.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <a
                    href={platform.link}
                    className="p-2 border border-black rounded-full transition-all duration-300 group-hover:bg-black group-hover:text-white"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Under Development Section */}
        <section className="mb-12">
          <h2 className="text-[16px] font-semibold mb-10 uppercase tracking-[0.05em] text-[#666666]">Under Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-[#666666]">
            {developmentPlatforms.map((platform, index) => (
              <div
                key={index}
                className="p-8 border border-gray-50 bg-[#F9F9F9] flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  {platform.logo && (
                    <div className="mb-4 h-10 w-auto opacity-60 grayscale">
                      <img src={platform.logo} alt={`${platform.name} Logo`} className="h-full object-contain" />
                    </div>
                  )}
                  <h3 className="text-[22px] font-bold mb-1 opacity-80">{platform.name}</h3>
                  {platform.tagline && (
                    <p className="text-[11px] font-semibold text-[#888888] mb-4 uppercase tracking-tighter">{platform.tagline}</p>
                  )}
                  <p className="text-[14px] leading-[1.6] mb-8 font-normal opacity-70">
                    {platform.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="p-2 border border-gray-200 rounded-full text-gray-300 cursor-not-allowed">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Platform;
