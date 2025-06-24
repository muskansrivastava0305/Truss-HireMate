import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gradient-to-br  text-gray-800 font-sans overflow-hidden">
      {/* Footer Section */}
      <footer className="bg-gray-700 pt-12 pb-6 px-6 mt-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-[#027864]">TrussHireMate Inc.</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              123 Business Road,<br />
              Sector 21, Noida,<br />
              Uttar Pradesh, India - 201301
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-gray-100">Quick Links</h4>
            <ul className="space-y-1 text-gray-200">
              <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-gray-100">Connect with Us</h4>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#" className="text-gray-200 hover:text-indigo-500 text-xl"><FaLinkedin /></a>
              <a href="#" className="text-gray-200 hover:text-indigo-500 text-xl"><FaTwitter /></a>
              <a href="#" className="text-gray-200 hover:text-indigo-500 text-xl"><FaInstagram /></a>
            </div>

            <form className="mt-6">
              <label htmlFor="newsletter" className="block text-sm font-medium text-gray-600 mb-1">Subscribe to our newsletter</label>
              <div className="flex items-center">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-lg border border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500 border-t pt-4">
          <p>© 2025 TrussHireMate Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
