

import Image2 from "../../../../public/images/post/img2.jpg"
import Image3 from "../../../../public/images/post/img3.jpg"
import Image4 from "../../../../public/images/post/img1.jpg"
import React from "react";
import Image, { StaticImageData } from "next/image";
import { FiDownload, FiEye, FiArrowRight } from "react-icons/fi";

interface HomeResourcesCardProp {
  name: string;
  nameText: string;
  buttonData: string;
  variety: string;
  varietyData: string;
  imageSrc: string | StaticImageData;
  total: string;
  expertiseData: string;
}

const HomeResourcesCard: React.FC<HomeResourcesCardProp> = ({
  name,
  nameText,
  buttonData,
  variety,
  varietyData,
  imageSrc,
  total,
  expertiseData,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300">
      {/* Edge glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-yellow-400/10 transition-all duration-300 pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Section */}
        <div className="p-6 border-b lg:border-b-0 lg:border-r border-[#2a2a2a]">
          <h6 className="text-xl font-bold text-white mb-2">{name}</h6>
          <p className="text-gray-400 mb-6">{nameText}</p>
          
          <button className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#1a1a1a] font-medium py-3 px-4 rounded-lg transition-colors duration-300 mb-6">
            {buttonData} <FiArrowRight className="ml-1" />
          </button>
          
          <div className="flex items-center gap-2 text-yellow-400">
            <FiDownload />
            <span className="text-sm">Download Data</span>
          </div>
        </div>
        
        {/* Middle Section */}
        <div className="p-6 border-b lg:border-b-0 lg:border-r border-[#2a2a2a] flex flex-col">
          <div className="mb-6">
            <h6 className="text-sm font-medium text-gray-400 mb-1 uppercase tracking-wider">{variety}</h6>
            <p className="text-white">{varietyData}</p>
          </div>
          
          <div className="relative aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden mt-auto">
            <Image
              src={imageSrc}
              alt={variety}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Right Section */}
        <div className="p-6 grid grid-cols-2 gap-4">
          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <p className="text-xs text-gray-400 mb-1">Total {variety}</p>
            <p className="text-yellow-400 font-medium">{total}</p>
          </div>
          
          <div className="bg-[#2a2a2a] p-4 rounded-lg">
            <p className="text-xs text-gray-400 mb-1">Download Formats</p>
            <p className="text-white text-sm mb-2">PSD Format for Access</p>
            <button className="text-xs flex items-center gap-1 text-yellow-400 hover:text-yellow-300">
              <FiEye className="text-sm" /> Preview
            </button>
          </div>
          
          <div className="bg-[#2a2a2a] p-4 rounded-lg col-span-2">
            <p className="text-xs text-gray-400 mb-1">Average Author Expertise</p>
            <p className="text-white">{expertiseData}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeResources = () => {
  const resources = [
    {
      id: 1,
      name: "AI Research Papers",
      nameText: "Cutting-edge research from leading AI labs worldwide",
      buttonData: "Access Papers",
      variety: "Categories",
      varietyData: "Machine Learning, Neural Networks, Robotics",
      imageSrc: Image2,
      total: "1,200+",
      expertiseData: "PhD Level (8+ years experience)"
    },
    {
      id: 2,
      name: "Tech Whitepapers",
      nameText: "In-depth analysis of emerging technologies",
      buttonData: "View Whitepapers",
      variety: "Topics",
      varietyData: "Quantum Computing, Blockchain, IoT",
      imageSrc: Image3,
      total: "850+",
      expertiseData: "Industry Experts (5+ years experience)"
    },
    {
      id: 3,
      name: "Developer Toolkits",
      nameText: "Ready-to-use resources for your projects",
      buttonData: "Get Toolkits",
      variety: "Tools Included",
      varietyData: "APIs, SDKs, Code Samples",
      imageSrc: Image4,
      total: "300+",
      expertiseData: "Senior Developers (10+ years experience)"
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <p className="text-yellow-400 font-medium mb-2 uppercase tracking-wider text-sm">
              Your gateway to in-depth information
            </p>
            <h5 className="text-3xl md:text-4xl font-bold text-white">
              Unlock valuable knowledge with FutureTech&apos;s resources
            </h5>
          </div>
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] font-medium px-6 py-3 rounded-lg transition-colors duration-300">
            View all resources <FiArrowRight className="ml-1" />
          </button>
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 gap-8">
          {resources.map((resource) => (
            <HomeResourcesCard
              key={resource.id}
              name={resource.name}
              nameText={resource.nameText}
              buttonData={resource.buttonData}
              variety={resource.variety}
              varietyData={resource.varietyData}
              imageSrc={resource.imageSrc}
              total={resource.total}
              expertiseData={resource.expertiseData}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeResources;