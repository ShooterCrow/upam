import React, { useState } from 'react';
import { Download, ArrowRight } from 'lucide-react';

export default function Publications() {
    const [activeTab, setActiveTab] = useState('reports');

    const reports = [
        {
            id: 1,
            title: "UPAM Annual Report 2025",
            description: "An overview of UPAM's youth engagement programs, leadership training outcomes, and community impact across Africa and the diaspora"
        },
        {
            id: 2,
            title: "UPAM Annual Report 2025",
            description: "An overview of UPAM's youth engagement programs, leadership training outcomes, and community impact across Africa and the diaspora"
        },
        {
            id: 3,
            title: "UPAM Annual Report 2025",
            description: "An overview of UPAM's youth engagement programs, leadership training outcomes, and community impact across Africa and the diaspora"
        },
        {
            id: 4,
            title: "UPAM Annual Report 2025",
            description: "An overview of UPAM's youth engagement programs, leadership training outcomes, and community impact across Africa and the diaspora"
        }
    ];

    const articles = [
        {
            image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
            title: "Pan-African Unity in the 21st Century: From Ideology to Institutional Action",
            description: "Pan-Africanism has historically served as both an ideological framework and a political movement aimed at the liberation, unity, and advancement of African peoples globally."
        },
        {
            image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
            title: "Digital Literacy and Innovation as Tools for African Self-Sufficiency",
            description: "In the 21st century, digital literacy and technological innovation have become decisive factors in national development and global competitiveness. For Africa, expanding access to digital skills is not merely a technological goal but a strategic pathway toward self-sufficiency."
        },
        {
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
            title: "Building an African Economic Ecosystem Owned by Africans",
            description: "Africa's economic structure have long been shaped by external ownership and extractive models that limit local value creation. Building an African-owned economic ecosystem requires reimagining production, trade, finance, and entrepreneurship in ways that prioritize African control and benefit."
        },
        {
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80",
            title: "One People, Many Borders: How Colonial Boundaries Continue to Shape African Disunity",
            description: "The artificial borders imposed during colonial rule fragmented African societies, cultures, and economies, creating divisions that persist today. These boundaries disrupted pre-existing systems of cooperation and continue to influence political instability, ethnic tension, and weak regional integration."
        },
        {
            image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
            title: "African Self-Reliance: Moving Beyond Aid to Sustainable Development",
            description: "Foreign aid has played a role in addressing humanitarian crises in Africa, but long-term reliance on aid has often undermined local capacity, accountability, and innovation. African self-reliance emphasizes development strategies driven by local knowledge, resources, and institutions."
        },
        {
            image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&q=80",
            title: "Healing Historical Divides: Slavery, Colonialism, and the Path to Collective Renewal",
            description: "The legacies of slavery and colonialism have left deep psychological, social, and economic scars across Africa and the African diaspora. These histories foster mistrust, fragmentation, and internalized narratives that weaken collective progress."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <p className="text-sm text-gray-600 mb-3">Publications & Policy Insights</p>
                            <h1 className="text-2xl sm:text-xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                Knowledge that strengthens African unity, informs policy, and drives sustainable development.
                            </h1>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                UPAM publications reflect our commitment to research, advocacy, and evidence-based action. From
                                departmental reports to policy papers and research documents, these resources support informed
                                decision-making and Pan-African progress.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => setActiveTab('reports')}
                                    className={`px-6 py-3 font-medium transition-colors ${activeTab === 'reports'
                                        ? 'bg-red-600 text-white hover:bg-red-700'
                                        : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    Reports/Policy Papers
                                </button>
                                <button
                                    onClick={() => setActiveTab('articles')}
                                    className={`px-6 py-3 font-medium transition-colors ${activeTab === 'articles'
                                        ? 'bg-red-600 text-white hover:bg-red-700'
                                        : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    Articles/Research
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
                                alt="African children"
                                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'reports' && (
                <>
                    {/* Reports Section */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                            Evaluational and Departmental Report
                        </h2>

                        {/* Reports Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {reports.map((report) => (
                                <div
                                    key={report.id}
                                    className="rounded-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    {/* Logo Section */}
                                    <div className="p-8 pb-6">
                                        <div className="flex items-start gap-2 mb-6">
                                            <div className="">
                                                <img src="logoupam.png" alt="Upam Logo" />
                                            </div>
                                        </div>

                                        {/* Report Info */}
                                        <h3 className="font-bold text-gray-900 mb-3 text-xl leading-tight">
                                            {report.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {report.description}
                                        </p>
                                    </div>

                                    {/* Download Button */}
                                    <div className="px-8 pb-8 flex justify-end">
                                        <button className="flex items-center gap-2 text-gray-900 text-sm font-medium hover:text-red-600 transition-colors group">
                                            <span>Download</span>
                                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Policy Section */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-24">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                            Policy Papers
                        </h2>

                        {/* Reports Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {reports.map((report) => (
                                <div
                                    key={report.id}
                                    className="rounded-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    {/* Logo Section */}
                                    <div className="p-8 pb-6">
                                        <div className="flex items-start gap-2 mb-6">
                                            <div className="">
                                                <img src="logoupam.png" alt="Upam Logo" />
                                            </div>
                                        </div>

                                        {/* Report Info */}
                                        <h3 className="font-bold text-gray-900 mb-3 text-xl leading-tight">
                                            {report.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {report.description}
                                        </p>
                                    </div>

                                    {/* Download Button */}
                                    <div className="px-8 pb-8 flex justify-end">
                                        <button className="flex items-center gap-2 text-gray-900 text-sm font-medium hover:text-red-600 transition-colors group">
                                            <span>Download</span>
                                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {activeTab === 'articles' && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-red-600 font-medium mb-3">
                                        Articles/Research
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                                        {article.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">
                                        {article.description}
                                    </p>

                                    <button className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors group">
                                        Read more
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
