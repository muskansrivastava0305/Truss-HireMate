import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    path: "/features",
  },
  {
    id: 3,
    title: "Book a Demo",
    path: "/demo-booking",
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-white shadow-sm z-50 px-6 py-3">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center max-w-7xl mx-auto"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">TrussHireMate</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {NavbarMenu.map((menu) => (
            <Link
              key={menu.id}
              to={menu.path}
              className="relative inline-block py-2 px-3 font-medium text-gray-800 group transition-colors duration-300 hover:text-[#69a79c]"
            >
              {menu.title}
              <span className="absolute left-1/2 -bottom-1.5 w-2 h-2 bg-[#69a79c] rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          ))}
          <button className="ml-4 bg-orange-400 py-2 px-4 rounded-xl text-white font-bold text-md hover:bg-green-300 shadow-md transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose className="text-3xl" /> : <IoMdMenu className="text-3xl" />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 px-4 flex flex-col items-center space-y-4 lg:hidden">
            {NavbarMenu.map((menu) => (
              <Link
                key={menu.id}
                to={menu.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-[#69a79c] transition-colors"
              >
                {menu.title}
              </Link>
            ))}
            <button className="bg-orange-400 py-2 px-6 rounded-xl text-white font-bold text-md hover:bg-green-300 shadow-md transition-all">
              Get Started
            </button>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
