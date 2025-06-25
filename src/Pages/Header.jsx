import React, { useState } from "react";
import { Link } from 'react-scroll';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";


const NavbarMenu = [
  { id: 1, title: "Home", to: "home" },
  { id: 2, title: "Features", to: "features" },
  { id: 3, title: "Book a Demo", to: "demo" },
  { id: 4, title: "Contact Us", to: "contact" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-white shadow-sm z-50 px-6 py-1">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center max-w-7xl mx-auto"
      >
        {/* Logo section */}
        <div className="flex items-center w-full lg:w-auto"> 
            <img src="/logo.png" alt=""  className=" w-25"/>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
        {NavbarMenu.map((menu) => (
  <Link
    key={menu.id}
    to={menu.to}
    smooth={true}
    duration={500}
    offset={-70}
    className="relative inline-block py-2 px-3 font-medium text-xl text-gray-800 group transition-colors duration-300 hover:text-[#69a79c] cursor-pointer"
  >
    {menu.title}
    <span className="absolute left-1/2 -bottom-1.5 w-2 h-2 bg-[#69a79c] rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></span>
  </Link>
))}
          <button className="ml-4 bg-[#027864] py-2 px-4 rounded-xl text-white font-bold text-md hover:bg-[#02786470] hover:text-gray-700 cursor-pointer shadow-md transition-all">
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
