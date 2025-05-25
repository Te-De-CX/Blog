
import Image5 from "../../../../public/images/post/img5.jpg"
import Image1 from "../../../../public/images/post/img1.jpg"
import Image6 from "../../../../public/images/post/img6.jpg"
import Image7 from "../../../../public/images/post/img7.jpg"
import Image9 from "../../../../public/images/post/img11.jpg"
import Image, { StaticImageData } from "next/image";
import { FiArrowRight, FiCalendar, FiUser, FiTag } from "react-icons/fi";

// NewsCard Component
interface NewsCardProp {
  imageSrc: string | StaticImageData;
  section: string;
  title: string;
}

const NewsCard: React.FC<NewsCardProp> = ({ imageSrc, section, title }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-video">
        <Image
          src={imageSrc}
          alt={section}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-[#2a2a2a] text-yellow-400 rounded-full text-xs font-medium mb-3">
          {section}
        </span>
        <h5 className="text-lg font-bold text-white mb-4 line-clamp-2">{title}</h5>
        <button className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">
          Read more <FiArrowRight className="text-xs" />
        </button>
      </div>
    </div>
  );
};

// NewsHeader Component
const NewsHeader = () => {
  const newsItems = [
    {
      id: 1,
      title: "Global Climate Summit Addresses Urgent Climate Action",
      excerpt: "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
      category: "Environment",
      date: "October 10, 2023",
      author: "Jane Smith",
      image: Image5
    },
    {
      id: 2,
      title: "Tech Giant Unveils Revolutionary AI Assistant",
      excerpt: "New artificial intelligence platform promises to transform how we interact with technology in daily life.",
      category: "Technology",
      date: "October 8, 2023",
      author: "Michael Chen",
      image: Image6
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Today&apos;s Headlines: <span className="text-yellow-400">Stay Informed</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl">
            Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.
          </p>
        </div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {newsItems.map((news) => (
            <div key={news.id} className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-yellow-400/10 transition-all duration-300 pointer-events-none" />
              
              <div className="relative aspect-video">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h6 className="text-xl font-bold text-white mb-3">{news.title}</h6>
                <p className="text-gray-400 mb-6">{news.excerpt}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1">Category</span>
                    <span className="text-sm text-white flex items-center gap-1">
                      <FiTag className="text-yellow-400" /> {news.category}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1">Date</span>
                    <span className="text-sm text-white flex items-center gap-1">
                      <FiCalendar className="text-yellow-400" /> {news.date}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1">Author</span>
                    <span className="text-sm text-white flex items-center gap-1">
                      <FiUser className="text-yellow-400" /> {news.author}
                    </span>
                  </div>
                </div>
                
                <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] px-6 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  Read more <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard
            imageSrc={Image7}
            section="Technology"
            title="Quantum Computing Breakthrough Announced"
          />
          <NewsCard
            imageSrc={Image1}
            section="Health"
            title="New Study Reveals Benefits of Mediterranean Diet"
          />
          <NewsCard
            imageSrc={Image9}
            section="Politics"
            title="Global Leaders Meet for Annual Summit"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsHeader;