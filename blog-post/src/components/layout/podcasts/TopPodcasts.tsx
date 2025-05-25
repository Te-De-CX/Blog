
import Image1 from "../../../../public/images/post/img2.jpg"
import Image2 from "../../../../public/images/post/img8.jpg"
import Image3 from "../../../../public/images/post/img6.jpg"
import Image4 from "../../../../public/images/post/img7.jpg"
import Image from "next/image";
import { FiPlay, FiHeadphones, FiTrendingUp, FiClock, FiStar, FiArrowRight } from "react-icons/fi";

const TopPodcasts = () => {
  const topPodcasts = [
    {
      id: 1,
      rank: 1,
      title: "AI Revolution: The Future is Now",
      host: "Dr. Sarah Chen",
      duration: "45 min",
      listens: "1.2M",
      rating: "4.9",
      image: Image1,
      category: "Artificial Intelligence"
    },
    {
      id: 2,
      rank: 2,
      title: "Quantum Computing Explained",
      host: "Prof. Michael Wong",
      duration: "38 min",
      listens: "956K",
      rating: "4.8",
      image: Image2,
      category: "Emerging Tech"
    },
    {
      id: 3,
      rank: 3,
      title: "Ethics in Machine Learning",
      host: "Alex Johnson",
      duration: "42 min",
      listens: "872K",
      rating: "4.7",
      image: Image3,
      category: "AI Ethics"
    },
    {
      id: 4,
      rank: 4,
      title: "The Future of Robotics",
      host: "Dr. Elena Rodriguez",
      duration: "39 min",
      listens: "765K",
      rating: "4.6",
      image: Image4,
      category: "Robotics"
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-medium mb-2 uppercase tracking-wider text-sm">
            Community favorites
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Top <span className="text-yellow-400">Podcasts</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
            The most listened to and highly rated podcasts from our community
          </p>
        </div>

        {/* Podcast Rankings */}
        <div className="space-y-6">
          {topPodcasts.map((podcast) => (
            <div 
              key={podcast.id} 
              className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300 flex flex-col md:flex-row"
            >
              {/* Rank Badge */}
              <div className="w-full md:w-16 flex-shrink-0 bg-[#2a2a2a] flex items-center justify-center p-4 md:p-0">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                  podcast.rank === 1 ? 'bg-yellow-500 text-[#0f0f0f]' : 
                  podcast.rank === 2 ? 'bg-gray-300 text-[#0f0f0f]' : 
                  podcast.rank === 3 ? 'bg-amber-700 text-white' : 'bg-[#2a2a2a] text-white'
                }`}>
                  #{podcast.rank}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow p-6 flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="relative w-full md:w-40 h-40 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={podcast.image}
                    alt={podcast.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center transition-colors">
                      <FiPlay className="text-lg text-[#0f0f0f] ml-1" />
                    </div>
                  </button>
                </div>
                
                {/* Details */}
                <div className="flex-grow">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[#2a2a2a] text-yellow-400 rounded-full text-xs font-medium mb-2">
                        {podcast.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{podcast.title}</h3>
                      <p className="text-gray-400 text-sm">Host: {podcast.host}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <FiClock /> {podcast.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiTrendingUp /> {podcast.listens} listens
                        </span>
                        <span className="flex items-center gap-1 text-yellow-400">
                          <FiStar /> {podcast.rating}/5
                        </span>
                      </div>
                      
                      <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full md:w-auto justify-center">
                        <FiHeadphones /> Listen Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-transparent border border-yellow-500 hover:bg-yellow-500 hover:text-[#0f0f0f] text-yellow-400 px-6 py-3 rounded-lg font-bold transition-colors">
            View All Top Podcasts <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopPodcasts;