
import Image1 from "../../../../public/images/post/img5.jpg"
import Image2 from "../../../../public/images/post/img3.jpg"
import Image3 from "../../../../public/images/post/img13.jpg"
import Image4 from "../../../../public/images/post/img15.jpg"
import Image, { StaticImageData } from "next/image";
import { FiDownload, FiArrowRight, FiCalendar, FiUser, FiTag } from "react-icons/fi";

// Mini Resources Card Component
interface MiniResourcesCardProp {
  imageSrc: string | StaticImageData;
  topic: string;
  text: string;
}

const MiniResourcesCard: React.FC<MiniResourcesCardProp> = ({
  imageSrc,
  topic,
  text
}) => {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-video">
        <Image
          src={imageSrc}
          alt={topic}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h6 className="text-lg font-bold text-white mb-2">{topic}</h6>
        <p className="text-gray-400 text-sm mb-6 flex-grow">{text}</p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 py-2 px-4 border border-[#2a2a2a] text-white hover:bg-[#2a2a2a] rounded-lg text-sm transition-colors">
            View Details
          </button>
          <button className="flex-1 py-2 px-4 bg-yellow-500 hover:bg-yellow-400 text-[#1a1a1a] rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1">
            <FiDownload /> Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

// Full Resources Card Component
interface ResourcesCardProp {
  section: string;
  sectionText: string;
  imageSrc: string | StaticImageData;
  topic: string;
  date: string;
  author: string;
  text: string;
  category: string;
}

const ResourcesCard: React.FC<ResourcesCardProp> = ({
  section,
  sectionText,
  imageSrc,
  topic,
  date,
  author,
  text,
  category
}) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-[#2a2a2a]">
        <h4 className="text-2xl font-bold text-white mb-2">{section}</h4>
        <p className="text-gray-400">{sectionText}</p>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Image */}
        <div className="relative lg:col-span-1">
          <Image
            src={imageSrc}
            alt={topic}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="p-6 lg:col-span-2">
          <h5 className="text-xl font-bold text-white mb-3">{topic}</h5>
          <p className="text-gray-400 mb-6">{text}</p>
          <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-[#1a1a1a] px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            <FiDownload /> Download PDF Now
          </button>
        </div>
      </div>
      
      {/* Meta Data */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 border-t border-[#2a2a2a]">
        <div className="flex items-center gap-2 text-gray-400">
          <FiCalendar /> Production Date: <span className="text-white">{date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <FiTag /> Category: <span className="text-white">{category}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <FiUser /> Author: <span className="text-white">{author}</span>
        </div>
      </div>
    </div>
  );
};

// Resources Section Component
const ResourcesResources = () => {
  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-medium mb-2 uppercase tracking-wider text-sm">
            Dive into the details
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            In-Depth Reports and Analysis
          </h2>
          <button className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] px-6 py-3 rounded-lg font-medium transition-colors">
            Whitepaper eBooks and Reports <FiArrowRight />
          </button>
        </div>
        
        {/* Grid of Mini Resources Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <MiniResourcesCard
            imageSrc={Image1}
            topic="Quantum Computing Advances"
            text="Latest breakthroughs in quantum processing and their implications"
          />
          <MiniResourcesCard
            imageSrc={Image2}
            topic="AI Ethics Framework"
            text="Developing responsible AI systems for enterprise applications"
          />
          <MiniResourcesCard
            imageSrc={Image3}
            topic="Sustainable Tech"
            text="How renewable energy is transforming data centers"
          />
        </div>
        
        {/* Full Featured Resource Card */}
        <ResourcesCard
          section="Featured Report"
          sectionText="Our most comprehensive analysis of emerging technologies"
          imageSrc={Image4}
          topic="The Future of Human-AI Collaboration"
          date="June 2023"
          author="Dr. Sarah Chen"
          text="This groundbreaking report examines how AI will augment human capabilities rather than replace them, with case studies from leading tech firms."
          category="Research Papers"
        />
      </div>
    </section>
  );
};

export default ResourcesResources;