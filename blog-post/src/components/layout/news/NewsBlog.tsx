import { FiArrowRight, FiClock, FiEye, FiMessageSquare } from "react-icons/fi";

const NewsBlog = () => {
  const categories = [
    { id: 1, name: "all", active: true },
    { id: 2, name: "technology", active: false },
    { id: 3, name: "politics", active: false },
    { id: 4, name: "health", active: false },
    { id: 5, name: "environment", active: false },
    { id: 6, name: "sports", active: false }
  ];

  const featuredNews = [
    {
      id: 1,
      title: "Quantum Computing Breakthrough Announced",
      excerpt: "Researchers achieve quantum supremacy with new 128-qubit processor",
      category: "technology",
      date: "May 15, 2023",
      views: "12.4k",
      comments: 42
    },
    {
      id: 2,
      title: "Global Climate Summit Reaches Historic Agreement",
      excerpt: "196 countries commit to accelerated emissions reductions",
      category: "environment",
      date: "May 12, 2023",
      views: "8.7k",
      comments: 28
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <p className="text-yellow-400 font-medium mb-2 uppercase tracking-wider text-sm">
              Welcome to our news hub
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Discover the World of <span className="text-yellow-400">Headlines</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] px-6 py-3 rounded-lg font-medium transition-colors">
            View all news <FiArrowRight />
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-[#2a2a2a] pb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category.active
                  ? "bg-yellow-500 text-[#0f0f0f]"
                  : "bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredNews.map((news) => (
            <div 
              key={news.id} 
              className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-yellow-400/10 transition-all duration-300 pointer-events-none" />
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#2a2a2a] text-yellow-400 rounded-full text-xs font-medium mb-4">
                  {news.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{news.title}</h3>
                <p className="text-gray-400 mb-6">{news.excerpt}</p>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FiClock /> {news.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiEye /> {news.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMessageSquare /> {news.comments}
                    </span>
                  </div>
                  <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1 transition-colors">
                    Read more <FiArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlog;