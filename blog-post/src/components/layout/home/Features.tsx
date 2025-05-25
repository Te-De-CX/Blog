import React from "react";
import { FiCpu, FiDatabase, FiShield, FiZap, FiArrowRight } from "react-icons/fi";

// Features Component Card
interface FeaturesComponentCardProp {
    title: string,
    text: string,
}

const FeaturesComponentCard: React.FC<FeaturesComponentCardProp> = ({ title, text }) => {
    return (
        <div className="relative group p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#222222] border border-[#2e2e2e] hover:border-yellow-400/50 transition-all duration-300 shadow-lg hover:shadow-yellow-400/10">
            {/* Animated highlight */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-[#2a2a2a] rounded-lg text-yellow-400 group-hover:bg-yellow-400 group-hover:text-[#1a1a1a] transition-colors duration-300">
                    <FiZap className="text-lg" />
                </div>
                <div>
                    <h6 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{title}</h6>
                    <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </div>
            </div>
        </div>
    )
}

// Main Features Card
interface FeaturesCardProp {
    icon: React.ReactNode,
    name: string,
    description: string,
    card: {
        id: number,
        name: string,
        text: string
    }[],
}

const FeaturesCard: React.FC<FeaturesCardProp> = ({ icon, name, description, card }) => {
    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#222222] border border-[#2e2e2e] hover:border-yellow-400/50 transition-all duration-500 shadow-2xl hover:shadow-yellow-400/10">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a2a2a_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
                <div className="p-8 border-b border-[#2e2e2e]">
                    <div className="flex items-center gap-5 mb-5">
                        <div className="p-4 bg-gradient-to-br from-[#2a2a2a] to-[#333333] rounded-xl text-yellow-400 shadow-lg">
                            {icon}
                        </div>
                        <div>
                            <h5 className="text-2xl font-bold text-white">{name}</h5>
                            <p className="text-gray-400 mt-2 leading-relaxed">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 p-8">
                    {card.map(value => (
                        <FeaturesComponentCard 
                            key={value.id} 
                            title={value.name} 
                            text={value.text} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

// Home Features Component
const HomeFeatures = () => {
    const featureCategories = [
        {
            icon: <FiCpu className="text-3xl" />,
            name: "AI Processing",
            description: "Cutting-edge artificial intelligence capabilities that learn and adapt to your needs",
            card: [
                {
                    id: 1,
                    name: "Neural Networks",
                    text: "Self-improving deep learning architectures that evolve with your data patterns"
                },
                {
                    id: 2,
                    name: "Predictive Analysis",
                    text: "Anticipate market trends and user behavior with 95% accuracy"
                },
                {
                    id: 3,
                    name: "Natural Language",
                    text: "Human-like conversation models with contextual understanding"
                },
                {
                    id: 4,
                    name: "Computer Vision",
                    text: "Real-time object recognition with millimeter precision"
                }
            ]
        },
        {
            icon: <FiDatabase className="text-3xl" />,
            name: "Data Systems",
            description: "Enterprise-grade data infrastructure that scales infinitely",
            card: [
                {
                    id: 1,
                    name: "Quantum Databases",
                    text: "Next-generation storage leveraging quantum entanglement principles"
                },
                {
                    id: 2,
                    name: "Real-time Processing",
                    text: "Sub-millisecond insights from high-velocity data streams"
                },
                {
                    id: 3,
                    name: "Blockchain Storage",
                    text: "Immutable, decentralized data with cryptographic verification"
                },
                {
                    id: 4,
                    name: "Edge Computing",
                    text: "Distributed processing that reduces latency by 80%"
                }
            ]
        },
        {
            icon: <FiShield className="text-3xl" />,
            name: "Security",
            description: "Military-grade protection protocols for your digital assets",
            card: [
                {
                    id: 1,
                    name: "Quantum Encryption",
                    text: "Theoretically unbreakable security using quantum key distribution"
                },
                {
                    id: 2,
                    name: "Zero Trust",
                    text: "Continuous verification architecture that eliminates vulnerabilities"
                },
                {
                    id: 3,
                    name: "AI Threat Detection",
                    text: "Predictive breach prevention with 99.9% detection rate"
                },
                {
                    id: 4,
                    name: "Biometric Auth",
                    text: "Frictionless multi-factor authentication with 0 false positives"
                }
            ]
        }
    ];
    
    return (
        <section className="bg-gradient-to-b from-[#0a0a0a] to-[#141414] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block mb-4 px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-medium uppercase tracking-wider">
                        Unlock the power of
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        FutureTech <span className="text-yellow-400">Features</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Discover the cutting-edge technologies powering tomorrow&apos;s innovations today
                    </p>
                </div>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {featureCategories.map((feature, index) => (
                        <FeaturesCard
                            key={index}
                            icon={feature.icon}
                            name={feature.name}
                            description={feature.description}
                            card={feature.card}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <button className="relative overflow-hidden group px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-[#0a0a0a] font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-400/30">
                        <span className="relative z-10 flex items-center gap-2">
                            Explore All Features <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HomeFeatures;