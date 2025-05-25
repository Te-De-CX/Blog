import React from "react";

interface HomeBlogCardProp {
    img: string,
    username: string,
    speciality: string,
    date: string,
    topic: string,
    text: string
};

type HomeBlogCardType = React.FC<HomeBlogCardProp>

const HomeBlogCard: HomeBlogCardType = ({ img, username, speciality, date, topic, text }) => {
    return (
        <div className="relative group overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-yellow-400/30 transition-all duration-300 h-full flex flex-col">
            {/* Edge glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-yellow-400/10 transition-all duration-300 pointer-events-none" />
            
            {/* Inner glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-xl blur opacity-0 group-hover:opacity-30 transition-all duration-300" />
            
            {/* Card Content */}
            <div className="relative z-10 flex flex-col h-full p-6">
                {/* Author Section */}
                <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center overflow-hidden border border-[#333]">
                        {img} {/* Replace with <Image> component */}
                    </div>
                    <div>
                        <h5 className="font-medium text-white">{username}</h5>
                        <p className="text-sm text-yellow-400">{speciality}</p>
                    </div>
                </div>
                
                {/* Date */}
                <span className="text-xs text-gray-400 mb-3">{date}</span>
                
                {/* Blog Content */}
                <div className="flex-grow">
                    <h5 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        {topic}
                    </h5>
                    <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                        {text}
                    </p>
                </div>
                
                {/* Analytics */}
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-gray-500">Analytics</span>
                </div>
                
                {/* Button */}
                <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-[#1a1a1a] font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    View Blog
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default HomeBlogCard;