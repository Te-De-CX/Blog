import { FiHeadphones, FiDownload, FiUsers, FiGlobe } from "react-icons/fi";

const ResourcesHeader = () => {
  const stats = [
    { value: "300+", label: "resources available", icon: <FiHeadphones className="text-xl" /> },
    { value: "12k+", label: "total downloads", icon: <FiDownload className="text-xl" /> },
    { value: "10k+", label: "active users", icon: <FiUsers className="text-xl" /> },
    { value: "100+", label: "countries access our content", icon: <FiGlobe className="text-xl" /> }
  ];

  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unlock a World of <span className="text-yellow-400">Knowledge</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you&apos;re an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300 p-6 text-center"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-yellow-400/10 transition-all duration-300 pointer-events-none" />
              
              <div className="flex justify-center text-yellow-400 mb-3">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesHeader;