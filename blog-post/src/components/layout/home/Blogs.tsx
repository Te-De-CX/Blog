
import Image1 from "../../../../public/images/profile/profile2.jpg"
import Image2 from "../../../../public/images/profile/profile16.jpg"
import Image3 from "../../../../public/images/profile/profile9.jpg"
import React from "react";
import Image from "next/image";

const HomeBlogs = () => {
  // Categories with active state
  const categories = [
    { id: 1, name: "all", active: true },
    { id: 2, name: "quantum computing", active: false },
    { id: 3, name: "ai ethics", active: false },
    { id: 4, name: "space exploration", active: false },
    { id: 5, name: "biotechnology", active: false },
    { id: 6, name: "renewable energy", active: false },
  ];

  // Template blog data
  const blogs = [
    {
      id: 1,
      img: Image1,
      username: "Dr. Sarah Chen",
      speciality: "Quantum Physicist",
      date: "May 15, 2023",
      topic: "The Quantum Supremacy Breakthrough: What It Really Means",
      text: "Exploring the recent quantum computing milestones and their practical implications for industries ranging from pharmaceuticals to cryptography.",
      category: "quantum computing",
      likes: 124,
      comments: 28,
    },
    {
      id: 2,
      img: Image2,
      username: "Marcus Johnson",
      speciality: "AI Ethicist",
      date: "April 28, 2023",
      topic: "Ethical Frameworks for Autonomous Decision Making",
      text: "Developing comprehensive guidelines for AI systems that make life-altering decisions in healthcare and criminal justice applications.",
      category: "ai ethics",
      likes: 89,
      comments: 42,
    },
    {
      id: 3,
      img: Image3,
      username: "Elena Rodriguez",
      speciality: "Astrobiology Researcher",
      date: "June 2, 2023",
      topic: "Mars Terraforming: Current Technologies and Future Prospects",
      text: "Assessing the feasibility of creating habitable environments on Mars using current biotechnology and atmospheric engineering approaches.",
      category: "space exploration",
      likes: 156,
      comments: 31,
    },
  ];

  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <p className="text-yellow-400 font-medium mb-2 uppercase tracking-wider text-sm">
              A Knowledge Treasure Trove
            </p>
            <h4 className="text-3xl md:text-4xl font-bold text-white">
              Explore FutureTech&apos;s In-Depth Blog Posts
            </h4>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] font-medium px-6 py-3 rounded-lg transition-colors duration-300">
            View All Blogs
          </button>
        </div>

        {/* Categories */}
        <ul className="flex flex-wrap gap-3 mb-12 border-b border-[#2a2a2a] pb-6">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category.active
                    ? "bg-yellow-500 text-[#0f0f0f]"
                    : "bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]"
                }`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300 h-full flex flex-col"
            >
              {/* Edge glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-yellow-400/10 transition-all duration-300 pointer-events-none" />
              
              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full p-6">
                {/* Author Section */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center overflow-hidden border border-[#333]">
                    <Image
                        src={blog.img}
                        alt="image"
                        className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-medium text-white">{blog.username}</h5>
                    <p className="text-sm text-yellow-400">{blog.speciality}</p>
                  </div>
                </div>
                
                {/* Date */}
                <span className="text-xs text-gray-400 mb-3">{blog.date}</span>
                
                {/* Blog Content */}
                <div className="flex-grow">
                  <h5 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {blog.topic}
                  </h5>
                  <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                    {blog.text}
                  </p>
                </div>
                
                {/* Analytics */}
                <div className="flex justify-between items-center mb-6 text-xs text-gray-500">
                  <span>{blog.likes} likes</span>
                  <span>{blog.comments} comments</span>
                </div>
                
                {/* Button */}
                <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-[#1a1a1a] font-medium rounded-lg transition-colors duration-300">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;