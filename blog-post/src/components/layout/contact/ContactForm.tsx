'use client'

import { FiSend } from "react-icons/fi";
import { useState, ChangeEvent, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement; // Type assertion for checkbox
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? target.checked : value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-[#0f0f0f] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch with <span className="text-yellow-400">AI Podcasts</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions or feedback about our AI podcasts? Fill out the form below and we&apos;ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div className="relative group">
              <label 
                htmlFor="firstName" 
                className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-yellow-400 transition-colors"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all"
                required
              />
            </div>

            {/* Last Name */}
            <div className="relative group">
              <label 
                htmlFor="lastName" 
                className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-yellow-400 transition-colors"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all"
                required
              />
            </div>

            {/* Email */}
            <div className="relative group md:col-span-2">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-yellow-400 transition-colors"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="relative group md:col-span-2">
              <label 
                htmlFor="phone" 
                className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-yellow-400 transition-colors"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all"
              />
            </div>

            {/* Message */}
            <div className="relative group md:col-span-2">
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-yellow-400 transition-colors"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your inquiry..."
                className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded-lg text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-8">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-600 bg-[#2a2a2a] text-yellow-400 focus:ring-yellow-400"
                  required
                />
              </div>
              <label htmlFor="agree" className="ml-3 text-sm text-gray-400">
                I agree with the <a href="#" className="text-yellow-400 hover:underline">Terms of Use</a> and <a href="#" className="text-yellow-400 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0f0f0f] px-6 py-3 rounded-lg font-bold transition-colors duration-300 group"
            >
              Send Message
              <FiSend className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;