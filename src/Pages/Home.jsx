import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-100 relative overflow-hidden">
      {/* Background Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#027864] rounded-full opacity-30 animate-pulse"></div>
        <div
          className="absolute top-1/4 -right-32 w-96 h-96 bg-orange-200 rounded-full opacity-25 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#02786462] rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Label */}
            <div className="inline-block">
              <span className="text-gray-600 text-sm lg:text-base font-medium tracking-wide uppercase animate-fade-in">
                Recruitment
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold flex text-center sm:text-left text-gray-900 leading-tight animate-slide-up">
                Effortless Hiring, Streamlined Data Management
              </h1>
            </div>

            {/* Description */}
            <p
              className={`text-gray-600 text-base flex text-center sm:text-left lg:text-lg leading-relaxed max-w-lg transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              Manage your hiring process from sourcing to interviews, all in one
              place.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <Link
                to="demo"
                smooth={true}
                duration={500}
                offset={-70}
                className="w-full sm:w-auto block"
              >
                <button className="flex items-center justify-center gap-2 group bg-gradient-to-r from-white to-[#58c8b6] text-black px-4 sm:px-6 py-3 cursor-pointer rounded-full font-semibold hover:from-[#58c8b6] hover:to-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-sm sm:text-base">
                  Book a Free Demo
                  <ArrowRight className="text-lg sm:text-xl group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300" />
                </button>
              </Link>
              <Link
                to="features"
                smooth={true}
                duration={500}
                offset={-70}
                className="w-full sm:w-auto block"
              >
                <button className="flex items-center justify-center gap-2 group bg-gradient-to-r from-white to-[#58c8b6] text-black px-4 sm:px-6 py-3 rounded-full cursor-pointer hover:from-[#58c8b6] hover:to-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-sm sm:text-base">
                  Learn More
                  <ArrowRight className="text-lg sm:text-xl group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Image Container with Hover Effect */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                <img
                  src="/hero.jpg"
                  alt="Professional smiling man with glasses holding coffee mug"
                  className="w-full h-[450px] object-cover"
                />

                {/* Overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-400 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}

// "use client"
// import { ArrowRight } from "lucide-react"
// import { motion } from "framer-motion"

// export const FadeUp = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       y: 50,
//     },
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         duration: 0.5,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   }
// }

// const Hero = () => {
//   return (
//     <section className="bg-[#027864] overflow-hidden relative px-4 sm:px-6 md:px-8 lg:px-10 py-1">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px] sm:min-h-[600px] md:min-h-[650px]">
//         {/* Brand Info */}
//         <div className="flex flex-col justify-center py-8 sm:py-12 md:py-14  relative z-20">
//           <div className="text-center md:text-left space-y-6 sm:space-y-8 lg:space-y-10 lg:max-w-[400px]">
//             <motion.h1
//               variants={FadeUp(0.6)}
//               initial="initial"
//               animate="animate"
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl w-full max-w-[350px] sm:max-w-[400px] md:max-w-none mx-auto md:mx-0 text-gray-100 font-bold !leading-snug"
//             >
//               Your Next Great Hire Is <span className="text-secondary">Just</span> a Click Away
//             </motion.h1>
//             <motion.div
//               variants={FadeUp(0.8)}
//               initial="initial"
//               animate="animate"
//               className="flex justify-center md:justify-start"
//             >
//               <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
//                 <button className="flex items-center justify-center gap-2 group bg-gradient-to-r from-white to-[#58c8b6] text-black px-4 sm:px-6 py-3 cursor-pointer rounded-full font-semibold hover:from-[#58c8b6] hover:to-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-sm sm:text-base">
//                   Book a Free Demo
//                   <ArrowRight className="text-lg sm:text-xl group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300" />
//                 </button>

//                 <button className="flex items-center justify-center gap-2 group bg-gradient-to-r from-white to-[#58c8b6] text-black px-4 sm:px-6 py-3 rounded-full cursor-pointer hover:from-[#58c8b6] hover:to-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-sm sm:text-base">
//                   Learn More
//                   <ArrowRight className="text-lg sm:text-xl group-hover:translate-x-2 group-hover:-rotate-45 transition-all duration-300" />
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Hero Image */}
//         <div className="flex justify-center items-center relative">
//           <motion.img
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
//             src="/placeholder.svg?height=400&width=400"
//             alt="Hero illustration"
//             className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[550px] rounded-b-full relative z-10 drop-shadow mb-8 sm:mb-12 md:mb-20"
//           />
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
//             className="absolute -bottom-16 sm:-bottom-24 md:-bottom-32 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1100px] z-[1] hidden sm:block"
//           >
//             {/* Blob SVG */}
//             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
//               <path
//                 fill="#58c8b6"
//                 d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.8,-0.2C89.6,15.9,86.6,31.8,78.9,45.2C71.2,58.6,58.8,69.5,44.7,76.4C30.6,83.3,15.3,86.2,-0.2,86.5C-15.7,86.8,-31.4,84.5,-45.2,77.6C-59,70.7,-71,59.2,-78.6,45.8C-86.2,32.4,-89.4,16.2,-89.2,0.1C-89,-16,-85.4,-32,-78.2,-45.4C-71,-58.8,-60.2,-69.6,-46.2,-76.8C-32.2,-84,-16.1,-87.6,0.1,-87.7C16.3,-87.8,32.6,-84.4,44.7,-76.4Z"
//                 transform="translate(100 100)"
//               />
//             </svg>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
