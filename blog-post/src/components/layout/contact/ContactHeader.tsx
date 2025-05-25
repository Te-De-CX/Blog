import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiChevronRight } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const ContactHeading = () => {
  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We&apos;re here to help and answer any questions you might have. 
            Reach out to us through any of these channels.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* General Inquiries */}
          <div className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300">
            <div className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#2a2a2a] rounded-lg text-yellow-400">
                  <FiMail className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">General Inquiries</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-400">hello@futuretech.com</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <button className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 mt-4 transition-colors">
                  Contact us <FiArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Technical Support */}
          <div className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300">
            <div className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#2a2a2a] rounded-lg text-yellow-400">
                  <FiPhone className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Technical Support</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-400">support@futuretech.com</p>
                <p className="text-gray-400">+1 (555) 987-6543</p>
                <button className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 mt-4 transition-colors">
                  Get help <FiArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Our Office */}
          <div className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300">
            <div className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#2a2a2a] rounded-lg text-yellow-400">
                  <FiMapPin className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Office</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-400">123 Tech Boulevard</p>
                <p className="text-gray-400">San Francisco, CA 94107</p>
                <button className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 mt-4 transition-colors">
                  Get directions <FiArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300">
            <div className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-[#2a2a2a] rounded-lg text-yellow-400">
                  <FiChevronRight className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Connect With Us</h3>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-xl">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-xl">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-xl">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeading;