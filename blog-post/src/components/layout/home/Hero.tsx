'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Image1 from "../../../../public/images/post/img1.jpg";
import { FiArrowRight, FiBookOpen, FiUsers, FiGlobe } from "react-icons/fi";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

const HomeHero = () => {
  const data = [
    { id: 1, name: 'resources available', amount: 300 },
    { id: 2, name: 'total downloads', amount: "12k" },
    { id: 3, name: 'active users', amount: "10k" },
  ];

  const info = [
    {
      id: 1,
      name: "latest news updates",
      text: "stay current",
      description: "over 1,000 articles published monthly",
      icon: <FiBookOpen className="text-3xl text-yellow-400" />,
    },
    {
      id: 2,
      name: "Expert Contributors",
      text: "Trusted Insights",
      description: "50+ renowned AI experts on our team",
      icon: <FiUsers className="text-3xl text-yellow-400" />,
    },
    {
      id: 3,
      name: "cloud readership",
      text: "worldwide impact",
      description: "2 million monthly readers",
      icon: <FiGlobe className="text-3xl text-yellow-400" />,
    },
  ];

  return (
    <motion.header 
      className="bg-[#141414] text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={container}>
            <motion.p 
              className="text-yellow-400 font-medium mb-3"
              variants={item}
            >
              Your journey to tomorrow begins here
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={item}
            >
              Explore the frontiers of artificial intelligence
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-lg"
              variants={item}
            >
              Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-8"
              variants={container}
            >
              {data.map((value) => (
                <motion.div 
                  key={value.id} 
                  className="relative bg-[#1a1a1a] p-4 rounded-lg group overflow-hidden"
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Edge glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-yellow-400/10 transition-all duration-300 pointer-events-none" />
                  <h4 className="text-2xl font-bold relative z-10">
                    {value.amount}<span className="text-yellow-400">+</span>
                  </h4>
                  <p className="text-sm text-gray-400 capitalize relative z-10">
                    {value.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="relative"
            variants={fadeIn}
          >
            <motion.div 
              className="bg-[#1a1a1a] rounded-xl overflow-hidden h-80 mb-6 border border-[#2a2a2a]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <Image
                  src={Image1}
                  alt="image"
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              className="relative group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-all duration-300" />
              <div className="relative bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] group-hover:border-yellow-400/30 transition-colors">
                <h5 className="text-xl font-bold mb-2">
                  Explore 1000+ resources
                </h5>
                <p className="text-gray-400 mb-4">
                  Over 1,000 articles on emerging tech trends and breakthroughs
                </p>
                <motion.button 
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#141414] px-5 py-3 rounded-lg transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore resources <FiArrowRight />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="bg-[#1a1a1a] py-12 border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {info.map((value) => (
              <motion.div 
                key={value.id} 
                className="relative group overflow-hidden rounded-xl"
                variants={item}
                whileHover={{ y: -5 }}
              >
                {/* Edge glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-yellow-400/10 transition-all duration-300 pointer-events-none" />
                {/* Inner glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-xl blur opacity-0 group-hover:opacity-50 transition-all duration-300" />
                
                <div className="relative bg-[#141414] p-6 h-full border border-[#2a2a2a] group-hover:border-yellow-400/30 transition-all duration-300 z-10">
                  <div className="flex flex-col items-start h-full">
                    <div className="mb-4 p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2 capitalize">
                      {value.name}
                    </h4>
                    <p className="text-yellow-400 font-medium mb-3">
                      {value.text}
                    </p>
                    <p className="text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default HomeHero;