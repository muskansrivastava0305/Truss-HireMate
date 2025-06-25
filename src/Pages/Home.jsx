import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../assets/blob.svg";
import { animate, motion } from "framer-motion";
import { Link } from "react-scroll";

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
    <section className="bg-[#027864] overflow-hidden relative  px-15 py-1">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-12 md:py-0 relative z-20">
          <div className="text-center space-y-10 lg:max-w-[400px]">
            <div className=" flex flex-col">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="flex text-3xl lg:text-4xl w-[300px] sm:w-[500px] text-gray-100 font-bold !leading-snug  text-center"
            >
              Effortless Hiring, Streamlined Data Management 
  
</motion.h1>
<motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="flex text-md lg:text-xl w-[300px] sm:w-[500px] text-gray-300 font-semibold !leading-snug  text-center"
            >
Manage your hiring process from sourcing to interviews, all in one 
place.
            </motion.h1>
            
</div>


          
            
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <div className=" grid md:grid-cols-2 sm:gap-16 gap-6 items-center space-x-4 w-full sm:w-auto">
               <Link
  to="demo"
  smooth={true}
  duration={500}
  offset={-70}
  className="w-full sm:w-[220px] block"
>
  <button className="flex items-center justify-center text-center gap-2 group bg-gradient-to-r from-white to-[#58c8b6] text-black px-6 py-3 cursor-pointer rounded-full font-semibold hover:from-[#58c8b6] hover:to-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-full">
    Book a Free Demo
    <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300" />
  </button>
</Link>

                <button className="flex items-center justify-center text-center gap-2 group bg-gradient-to-r from-white to-[#58c8b6] text-black px-6 py-3 rounded-full cursor-pointer hover:from-[#58c8b6] hover:to-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
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
            src='/hero.png'
            alt=""
            className="w-[500px] xl:w-[550px] rounded-b-full relative z-10 drop-shadow mb-20 "
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[600px] md:w-[1100px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
