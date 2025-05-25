import React from "react";
import { FiArrowRight, FiZap, FiUsers, FiBook, FiAward } from "react-icons/fi";

interface CTAcardProp {
    name: string,
    text: string,
    icon?: React.ReactNode
}

const CTAcard: React.FC<CTAcardProp> = ({ name, text, icon }) => {
    return (
        <div className="relative group p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#222222] border border-[#2e2e2e] hover:border-yellow-400/50 transition-all duration-300 shadow-lg hover:shadow-yellow-400/10">
            {/* Animated highlight */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-[#2a2a2a] rounded-lg text-yellow-400 group-hover:bg-yellow-400 group-hover:text-[#1a1a1a] transition-colors duration-300">
                    {icon || <FiZap className="text-lg" />}
                </div>
                <div>
                    <h6 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{name}</h6>
                    <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </div>
            </div>
        </div>
    )
}

const CTA = () => {
    const benefits = [
        {
            name: "Expert Resources",
            text: "Access cutting-edge research papers, tutorials, and case studies from industry leaders",
            icon: <FiBook className="text-lg" />
        },
        {
            name: "Community Network",
            text: "Connect with 50,000+ tech professionals and innovators worldwide",
            icon: <FiUsers className="text-lg" />
        },
        {
            name: "Skill Validation",
            text: "Earn verifiable certificates and badges for your achievements",
            icon: <FiAward className="text-lg" />
        }
    ];

    return (
        <section className="bg-gradient-to-b from-[#0a0a0a] to-[#141414] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2e2e2e]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block mb-4 px-4 py-2 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-medium uppercase tracking-wider">
                        Learn, Correct, and Innovate
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Be Part of the <span className="text-yellow-400">Tech Revolution</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry.
                    </p>
                    
                    <button className="relative overflow-hidden group px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-[#0a0a0a] font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-400/30">
                        <span className="relative z-10 flex items-center gap-2">
                            Join Our Community <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <CTAcard 
                            key={index}
                            name={benefit.name}
                            text={benefit.text}
                            icon={benefit.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CTA;