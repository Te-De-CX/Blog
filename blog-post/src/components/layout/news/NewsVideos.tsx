import Image2 from "../../../../public/images/post/img2.jpg"
import Image3 from "../../../../public/images/post/img3.jpg"
import Image4 from "../../../../public/images/post/img10.jpg"
import { FiPlay, FiArrowRight } from "react-icons/fi";
import Image, { StaticImageData } from "next/image";

interface NewsVideoCardProp {
  videoSrc: string | StaticImageData;
  videoHeading: string;
  videoDescription: string;
  views: string;
  duration: string;
}

const NewsVideoCard: React.FC<NewsVideoCardProp> = ({
  videoSrc,
  videoHeading,
  videoDescription,
  views,
  duration
}) => {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300">
      {/* Video Thumbnail */}
      <div className="relative aspect-video">
        <Image 
          src={videoSrc} 
          alt="video image"
          fill
          className="w-full h-full object-cover"
        />
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-yellow-500 bg-opacity-90 flex items-center justify-center group-hover:bg-opacity-100 transition-all">
            <FiPlay className="text-xl text-[#0f0f0f] ml-1" />
          </div>
        </div>
        {/* Video Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <div className="flex justify-between text-sm text-white">
            <span>{views} views</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
      
      {/* Video Info */}
      <div className="p-6">
        <h5 className="text-lg font-bold text-white mb-2 line-clamp-2">{videoHeading}</h5>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{videoDescription}</p>
        <button className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">
          Watch now <FiArrowRight className="text-xs" />
        </button>
      </div>
    </div>
  );
};

const NewsVideos = () => {
  const featuredVideos = [
    {
      id: 1,
      videoSrc: Image2,
      videoHeading: "The AI Breakthrough That Could Change Everything",
      videoDescription: "Researchers demonstrate new capabilities in artificial general intelligence that could revolutionize multiple industries.",
      views: "1.2M",
      duration: "12:45"
    },
    {
      id: 2,
      videoSrc: Image3,
      videoHeading: "Quantum Computing Explained for Beginners",
      videoDescription: "Our experts break down the complex world of quantum computing into understandable concepts.",
      views: "856K",
      duration: "08:22"
    },
    {
      id: 3,
      videoSrc: Image4,
      videoHeading: "How Technology is Fighting Climate Change",
      videoDescription: "Innovative tech solutions being deployed globally to combat the effects of climate change.",
      views: "723K",
      duration: "15:10"
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <p className="text-yellow-400 font-medium mb-2 uppercase tracking-wider text-sm">
              Featured Videos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Visual Insights for the <span className="text-yellow-400">Modern Viewer</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] px-6 py-3 rounded-lg font-medium transition-colors">
            View all <FiArrowRight />
          </button>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video) => (
            <NewsVideoCard
              key={video.id}
              videoSrc={video.videoSrc}
              videoHeading={video.videoHeading}
              videoDescription={video.videoDescription}
              views={video.views}
              duration={video.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsVideos;