import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HomeTestimonial = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Quantum Computing Researcher",
      text: "FutureTech's insights on quantum algorithms helped our team solve a critical optimization problem. The depth of their technical coverage is unmatched in the industry.",
      rating: 5,
      date: "May 2023"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "AI Ethics Consultant",
      text: "I regularly reference FutureTech's policy frameworks when advising governments. Their balanced approach to AI ethics sets the standard for responsible reporting.",
      rating: 4,
      date: "April 2023"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Space Systems Engineer",
      text: "The Mars terraforming series completely changed our approach to atmospheric modeling. We've implemented three techniques from their featured research.",
      rating: 5,
      date: "June 2023"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Biotech Startup Founder",
      text: "As a non-technical founder, FutureTech's biotech primers helped me communicate effectively with my engineering team and investors.",
      rating: 5,
      date: "March 2023"
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <p className="text-yellow-400 font-medium mb-2 uppercase tracking-wider text-sm">
              What our readers say
            </p>
            <h4 className="text-3xl md:text-4xl font-bold text-white">
              Real words from real readers
            </h4>
          </div>
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] font-medium px-6 py-3 rounded-lg transition-colors duration-300">
            View all testimonials <FiArrowRight className="ml-1" />
          </button>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          {/* Navigation Arrows */}
          {/* <button className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-[#1a1a1a] p-3 rounded-full border border-[#2a2a2a] text-gray-300 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 z-10 bg-[#1a1a1a] p-3 rounded-full border border-[#2a2a2a] text-gray-300 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
            <FiChevronRight className="h-5 w-5" />
          </button> */}

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300 p-6"
              >
                {/* Edge glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-yellow-400/10 transition-all duration-300 pointer-events-none" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-gray-300 italic mb-6">
                  &quot;{testimonial.text}&quot;
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-white">{testimonial.name}</h5>
                    <p className="text-sm text-yellow-400">{testimonial.role}</p>
                  </div>
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;