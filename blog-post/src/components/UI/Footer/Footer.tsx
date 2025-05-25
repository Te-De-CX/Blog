import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    home: ["features", "blogs", "resources", "testimonials", "contact us", "newsletter"],
    news: ["trending stories", "featured videos", "technology", "health", "politics", "environment"],
    blogs: ["quantum computing", "ai ethics", "space exploration", "biotechnology", "renewable energy", "biohacking"],
    podcasts: ["ai revolution", "future tech", "tech talk", "science weekly"],
    resources: ["whitepapers", "ebooks", "reports", "research papers"]
  };

  const socialIcons = [
    { icon: <FiFacebook />, url: "#" },
    { icon: <FiTwitter />, url: "#" },
    { icon: <FiInstagram />, url: "#" },
    { icon: <FiLinkedin />, url: "#" },
    { icon: <FiYoutube />, url: "#" }
  ];

  return (
    <footer className="bg-[#0f0f0f] text-gray-300 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Home Column */}
          <div>
            <h6 className="text-yellow-400 uppercase text-xs font-bold mb-4 tracking-wider">Home</h6>
            <ul className="space-y-3">
              {links.home.map((value, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors capitalize">
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* News Column */}
          <div>
            <h6 className="text-yellow-400 uppercase text-xs font-bold mb-4 tracking-wider">News</h6>
            <ul className="space-y-3">
              {links.news.map((value, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors capitalize">
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs Column */}
          <div>
            <h6 className="text-yellow-400 uppercase text-xs font-bold mb-4 tracking-wider">Blogs</h6>
            <ul className="space-y-3">
              {links.blogs.map((value, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors capitalize">
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Podcasts Column */}
          <div>
            <h6 className="text-yellow-400 uppercase text-xs font-bold mb-4 tracking-wider">Podcasts</h6>
            <ul className="space-y-3">
              {links.podcasts.map((value, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors capitalize">
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h6 className="text-yellow-400 uppercase text-xs font-bold mb-4 tracking-wider">Resources</h6>
            <ul className="space-y-3">
              {links.resources.map((value, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors capitalize">
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#2a2a2a] pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
              <a href="#" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">Terms & Conditions</a>
              <span className="text-gray-600 hidden md:block">|</span>
              <a href="#" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <span className="text-gray-600 hidden md:block">|</span>
              <a href="#" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">Cookie Policy</a>
              <span className="text-gray-600 hidden md:block">|</span>
              <a href="#" className="text-xs text-gray-500 hover:text-yellow-400 transition-colors">GDPR</a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 mb-4 md:mb-0">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="text-gray-500 hover:text-yellow-400 transition-colors text-lg"
                  aria-label={`Social media link ${index}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500">
              © {year} futureTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;