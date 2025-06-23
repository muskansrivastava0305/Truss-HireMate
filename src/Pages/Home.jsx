import React from "react";
import Navbar from "./Header";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../assets/Blob.svg";
import HeroPng from "../assets/hero.png";
import { animate, motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-[#f8f8f8] overflow-hidden relative  px-10 py-1">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Your Next Great Hire Is{" "}
              <span className="text-secondary">Just</span> a Click Away
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <div className="flex items-center space-x-4">
                <button className="flex items-center gap-2 group bg-gradient-to-r from-[#69a79c] to-[#58c8b6] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                  Book a Free Demo
                  <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300" />
                </button>

                <button className="flex items-center gap-2 group bg-gradient-to-r from-[#69a79c] to-[#58c8b6] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                  Learn More
                  <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300" />
                </button>
          </div>

            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
