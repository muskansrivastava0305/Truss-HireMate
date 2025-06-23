import React from "react";
import { motion } from "framer-motion";
import ContactImg from "../assets/contact.png"; // Use your local image

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-[#f8f8f8] overflow-hidden px-6 md:px-16 py-12 flex items-center justify-center">
      {/* Decorative Blob Background */}
      <motion.div
        className="absolute -top-32 -left-32 w-[600px] md:w-[800px] opacity-20 -z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#69a79c"
            d="M55.6,-58.6C71.2,-47.4,81.5,-23.7,76.4,-5.4C71.2,12.9,50.5,25.8,34.8,41.6C19.1,57.4,9.5,76.2,-5.8,83.5C-21,90.7,-42,86.5,-56.4,73.1C-70.8,59.8,-78.7,37.4,-75.4,19.7C-72,2,-57.4,-10.8,-47.3,-24.1C-37.2,-37.5,-31.6,-51.3,-20.1,-63.4C-8.6,-75.5,8.6,-85.9,25.8,-82.2C43.1,-78.5,61.1,-60,55.6,-58.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* Contact Container */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Image */}
        <motion.div
          className="bg-gradient-to-br from-[#69a79c] to-[#58c8b6] flex items-center justify-center p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={ContactImg}
            alt="Contact Illustration"
            className="w-full max-w-[400px] drop-shadow-xl"
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="p-10 md:p-14"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.h2
            className="text-3xl font-bold text-[#69a79c] mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Contact Us
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            Have questions? Reach out to us.
          </motion.p>

          <form className="space-y-6">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#69a79c]"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65 }}
            >
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#69a79c]"
              />
            </motion.div>

            {/* Subject Dropdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Subject
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#69a79c]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option>General Inquiry</option>
                <option>Demo Request</option>
                <option>Technical Support</option>
              </select>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
            >
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#69a79c]"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <button
                type="submit"
                className="bg-gradient-to-r from-[#69a79c] to-[#58c8b6] hover:from-[#58c8b6] hover:to-[#69a79c] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
