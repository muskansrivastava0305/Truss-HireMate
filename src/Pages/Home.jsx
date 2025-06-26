import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const images = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png",
];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
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
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-14">
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
         <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-xl h-60 sm:h-72 md:h-80 lg:h-[400px]">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Image ${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out rounded-xl
            ${i === index
              ? "opacity-100 scale-100 translate-x-0 z-20"
              : "opacity-0 scale-90 -translate-x-full z-10"}
          `}
        />
      ))}
    </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
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

// ImageSlider component moved outside Hero
function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds delay

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto h-64 overflow-hidden rounded-xl">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
}
