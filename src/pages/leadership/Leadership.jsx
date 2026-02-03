import React from 'react';
import useAuth from '../../hooks/useAuth';
const globalExecutive = [
    {
        id: 1,
        name: "Benedicto Mbango",
        title: "Global President (UPAM)",
        image: "/images/leadership/benedicto-mbango.jpg"
    },
    {
        id: 2,
        name: "Priscilla Tsongavain",
        title: "Vice President (UPAM)",
        image: "/images/leadership/priscilla-tsongavain.jpg"
    },
    {
        id: 3,
        name: "Petrina Nghipondilo Shilindi",
        title: "Global Executive Administrator II",
        image: "/images/leadership/petrina-shilindi.jpg"
    },
    {
        id: 4,
        name: "Akpor Emmanuel Terfa",
        title: "Global Secretary General",
        image: "/images/leadership/akpor-terfa.jpg"
    },
    {
        id: 5,
        name: "Augustine Nyakaloma",
        title: "Speaker of National Representative",
        image: "/images/leadership/augustine-nyakaloma.jpg"
    },
    {
        id: 6,
        name: "Prof. Njoroge Gitomeh",
        title: "Global Secretary of Finance",
        image: "/images/leadership/njoroge-gitomeh.jpg"
    },
    {
        id: 7,
        name: "Dr Venesta Mwengella",
        title: "Global Secretary of Health",
        image: "/images/leadership/venesta-mwengella.jpg"
    },
    {
        id: 8,
        name: "Hon. Lorraine Malekanya",
        title: "Global Secretary of Legal Affairs",
        image: "/images/leadership/lorraine-malekanya.jpg"
    },
    {
        id: 9,
        name: "Mrs. Muthoni Mwangi",
        title: "Global Secretary of Partnership and Networking",
        image: "/images/leadership/muthoni-mwangi.jpg"
    },
    {
        id: 10,
        name: "Miheret Gemida",
        title: "Global Secretary of Business and Enterprises",
        image: "/images/leadership/miheret-gemida.jpg"
    },
    {
        id: 11,
        name: "Dr Huvayla Mohamed Ali",
        title: "Global Adviser",
        image: "/images/leadership/huvayla-ali.jpg"
    },
    {
        id: 12,
        name: "Pius Ntitya",
        title: "Global Secretary of Climate Change and Environmental Protection",
        image: "/images/leadership/pius-ntitya.jpg"
    },
    {
        id: 13,
        name: "Abdulhamid Idris Yusuf",
        title: "Global Secretary of ICT",
        image: "/images/leadership/abdulhamid-yusuf.jpg"
    },
    {
        id: 14,
        name: "Prisca Openna",
        title: "Global Secretary of Media and Communications",
        image: "/images/leadership/prisca-openna.jpg"
    },
    {
        id: 15,
        name: "Dr Titus Orngu",
        title: "Global Secretary of Women Children and Youth",
        image: "/images/leadership/titus-orngu.jpg"
    }
];

const nationalRepresentatives = [
    {
        id: 16,
        name: "Rachel Eleojo Sunday",
        title: "National Representative Nigeria",
        image: "/images/leadership/rachel-sunday.jpg"
    },
    {
        id: 17,
        name: "Kettie Mchekeni",
        title: "National Representative Malawi",
        image: "/images/leadership/kettie-mchekeni.jpg"
    },
    {
        id: 18,
        name: "Frank Minga",
        title: "National Representative Tanzania",
        image: "/images/leadership/frank-minga.jpg"
    }
];

const directors = [
    {
        id: 19,
        name: "Benedicto Mbango",
        title: "Director of UPAM Holdings",
        image: "/images/leadership/benedicto-mbango.jpg"
    },
    {
        id: 20,
        name: "Hon. Lorraine Malekanya",
        title: "Secretary of UPAM Holdings",
        image: "/images/leadership/lorraine-malekanya.jpg"
    },
    {
        id: 21,
        name: "Prof. Njoroge Gitomeh",
        title: "Finance Officer",
        image: "/images/leadership/njoroge-gitomeh.jpg"
    },
    {
        id: 22,
        name: "Dr Venesta Mwengella",
        title: "Treasurer",
        image: "/images/leadership/venesta-mwengella.jpg"
    },
    {
        id: 23,
        name: "Rachel Eleojo Sunday",
        title: "Director of UPAM Academy",
        image: "/images/leadership/rachel-sunday.jpg"
    }
];


function ProfileCard({ profile }) {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-full aspect-[4/5] bg-gray-200 overflow-hidden">
                <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/default-avatar.jpg";
                    }}
                />
            </div>
            <div>
                <h3 className="text-black font-normal text-sm leading-[139%] tracking-[0.28px]">
                    {profile.name}
                </h3>
                <p className="text-[#666] font-normal text-sm leading-[139%] tracking-[0.28px] mt-1">
                    {profile.title}
                </p>
            </div>
        </div>
    );
}

function Section({ title, subtitle, profiles, description }) {
    return (
        <section className="mb-16 md:mb-20">
            <div className="mb-8 md:mb-10">
                {subtitle && (
                    <p className="text-black text-base leading-[139%] tracking-[0.32px] mb-3">
                        {subtitle}
                    </p>
                )}
                <h2 className="text-black text-[32px] font-semibold leading-[139%] tracking-[0.64px] mb-3">
                    {title}
                </h2>
                {description && (
                    <p className="text-[#666] text-base leading-[139%] tracking-[0.32px] max-w-[637px]">
                        {description}
                    </p>
                )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
                {profiles.map((profile, index) => (
                    <ProfileCard key={`${title}-${index}`} profile={profile} />
                ))}
            </div>
        </section>
    );
}

const Leadership = () => {
    const auth = useAuth()
    console.log(auth)
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-12 md:pb-16 lg:pb-20">
                {/* Page Header */}
                <div className="mb-12 md:mb-16">
                    <h1 className="text-black text-4xl md:text-5xl font-bold leading-[139%] tracking-[0.8px] mb-4">
                        Our Leadership Team
                    </h1>
                    <p className="text-[#666] text-lg leading-[139%] tracking-[0.36px] max-w-3xl">
                        Meet the dedicated leaders who guide UPAM's vision and drive our mission forward through their expertise and commitment.
                    </p>
                </div>

                {/* Global Executive Section */}
                <Section
                    title="Global Executive"
                    subtitle="Leadership"
                    profiles={globalExecutive}
                    description="UPAM thrives through committed leaders, dedicated volunteers, and strategic partners."
                />

                {/* National Representatives Section */}
                <Section
                    title="National Representatives"
                    profiles={nationalRepresentatives}
                />

                {/* Directors Section */}
                <Section
                    title="Directors"
                    profiles={directors}
                />

                {/* Join Our Team CTA */}
                <div className="mt-20 pt-10 border-t border-gray-200">
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-black text-2xl font-semibold leading-[139%] tracking-[0.48px] mb-4">
                            Want to Join Our Team?
                        </h3>
                        <p className="text-[#666] text-base leading-[139%] tracking-[0.32px] mb-6">
                            We're always looking for passionate individuals to help drive our mission forward.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leadership