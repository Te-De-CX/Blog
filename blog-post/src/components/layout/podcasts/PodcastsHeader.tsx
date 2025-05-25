import { FiPlay, FiHeadphones, FiClock, FiCalendar } from "react-icons/fi";

const PodcastHeader = () => {
  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Unlock the World of <span className="text-yellow-400">Artificial Intelligence</span>
        </h2>
        <p className="text-xl text-gray-400">
          Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you&apos;re an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.
        </p>
      </div>
    </section>
  );
};

interface PodcastCardProp {
  topic: string;
  name: string;
  videoSrc: string;
  title: string;
  text: string;
  numberOfEpisodes: string;
  duration: number;
  timeSpan: string;
}

const PodcastCard: React.FC<PodcastCardProp> = ({
  topic,
  name,
  videoSrc,
  title,
  text,
  numberOfEpisodes,
  duration,
  timeSpan
}) => {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300">
      {/* Header Section */}
      <div className="p-6 border-b border-[#2a2a2a]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="inline-block px-3 py-1 bg-[#2a2a2a] text-yellow-400 rounded-full text-xs font-medium mb-2">
              {topic}
            </span>
            <p className="text-gray-400 text-sm">Host: <span className="text-white">{name}</span></p>
          </div>
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <FiHeadphones /> Listen Podcast
          </button>
        </div>
      </div>
      
      {/* Video Preview */}
      <div className="relative aspect-video">
        <video 
          src={videoSrc} 
          className="w-full h-full object-cover"
          poster="/podcast-thumbnail.jpg" // Add actual thumbnail
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-yellow-500 bg-opacity-90 flex items-center justify-center group-hover:bg-opacity-100 transition-all">
            <FiPlay className="text-xl text-[#0f0f0f] ml-1" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h6 className="text-lg font-bold text-white mb-2">{title}</h6>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">{text}</p>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#2a2a2a] rounded-lg text-yellow-400">
              <FiHeadphones className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Episodes</p>
              <p className="text-sm text-white">{numberOfEpisodes}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#2a2a2a] rounded-lg text-yellow-400">
              <FiClock className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Avg. Length</p>
              <p className="text-sm text-white">{duration} min</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#2a2a2a] rounded-lg text-yellow-400">
              <FiCalendar className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Frequency</p>
              <p className="text-sm text-white">{timeSpan}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example Usage
const PodcastSection = () => {
  return (
    <>
      <PodcastHeader />
      <div className="bg-[#0f0f0f] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PodcastCard
            topic="AI Ethics"
            name="Dr. Sarah Chen"
            videoSrc="/ai-ethics-podcast.mp4"
            title="The Future of Responsible AI"
            text="Exploring the ethical implications of artificial intelligence and how we can develop responsible systems."
            numberOfEpisodes="24"
            duration={45}
            timeSpan="Weekly"
          />
          <PodcastCard
            topic="Quantum Computing"
            name="Prof. Michael Wong"
            videoSrc="/quantum-podcast.mp4"
            title="Quantum Leap in Computing"
            text="Understanding how quantum computing will revolutionize problem solving across industries."
            numberOfEpisodes="18"
            duration={38}
            timeSpan="Bi-weekly"
          />
          <PodcastCard
            topic="Machine Learning"
            name="Alex Johnson"
            videoSrc="/ml-podcast.mp4"
            title="ML in Everyday Life"
            text="How machine learning algorithms power the services we use daily without us even realizing."
            numberOfEpisodes="32"
            duration={42}
            timeSpan="Weekly"
          />
        </div>
      </div>
    </>
  );
};

export { PodcastHeader, PodcastCard, PodcastSection };