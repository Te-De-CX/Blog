import Image from "next/image";
import { FiPlay, FiHeadphones, FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";

const LatestPodcasts = () => {
  const latestEpisodes = [
    {
      id: 1,
      title: "The Future of AI in Healthcare",
      description: "Exploring how artificial intelligence is revolutionizing diagnostics and patient care.",
      duration: "42 min",
      date: "May 15, 2023",
      category: "AI Applications",
      image: "/podcast-healthcare.jpg"
    },
    {
      id: 2,
      title: "Ethical Considerations in Machine Learning",
      description: "Discussing bias, fairness, and transparency in ML algorithms with industry experts.",
      duration: "38 min",
      date: "May 12, 2023",
      category: "AI Ethics",
      image: "/podcast-ethics.jpg"
    },
    {
      id: 3,
      title: "Quantum Computing Breakthroughs",
      description: "Analyzing recent advancements that bring us closer to practical quantum applications.",
      duration: "45 min",
      date: "May 8, 2023",
      category: "Emerging Tech",
      image: "/podcast-quantum.jpg"
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-medium mb-2 uppercase tracking-wider text-sm">
            Stay informed with fresh content
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest <span className="text-yellow-400">Podcast Episodes</span>
          </h2>
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestEpisodes.map((episode) => (
            <div 
              key={episode.id} 
              className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-yellow-400/10 transition-all duration-300 pointer-events-none" />
              
              {/* Image */}
              <div className="relative aspect-square">
                <Image
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center transition-colors">
                    <FiPlay className="text-xl text-[#0f0f0f] ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#2a2a2a] text-yellow-400 rounded-full text-xs font-medium mb-3">
                  {episode.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{episode.title}</h3>
                <p className="text-gray-400 mb-6">{episode.description}</p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiClock /> {episode.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar /> {episode.date}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">
                    <FiHeadphones /> Listen Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] px-6 py-3 rounded-lg font-bold transition-colors">
            View All Podcast Episodes <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestPodcasts;