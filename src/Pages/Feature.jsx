import { ArrowRight, Calendar, Database, Search, Zap } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: Database,
    title: "Data Management",
    description:
      "Efficiently organize candidate data and track the entire hiring lifecycle.",
    color: "bg-blue-500",
  },
  {
    icon: Search,
    title: "Sourcing",
    description:
      "Find top talent with intelligent sourcing features and automated candidate matching.",
    color: "bg-green-500",
  },
  {
    icon: Calendar,
    title: "Interview Management",
    description:
      "Easily schedule, track, and evaluate interviews with built-in tools.",
    color: "bg-purple-500",
  },
  {
    icon: Zap,
    title: "Smooth User Experience",
    description:
      "Intuitive design ensures a smooth experience from start to finish.",
    color: "bg-orange-500",
  },
];

const steps = [
  {
    step: "01",
    title: "Post Your Job",
    description:
      "Create detailed job postings with our intuitive job builder and reach qualified candidates instantly.",
  },
  {
    step: "02",
    title: "Smart Matching",
    description:
      "Our AI-powered system automatically matches you with the most suitable candidates from our database.",
  },
  {
    step: "03",
    title: "Interview & Hire",
    description:
      "Schedule interviews, collaborate with your team, and make data-driven hiring decisions.",
  },
];

const images = [
  "/dashbord1.png",
  "/dashbord2.png", // Add more image paths here
];

const Feature = () => {
  const [isVisible, setIsVisible] = useState({});
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (howItWorksRef.current) observer.observe(howItWorksRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 font-sans overflow-hidden">
      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="py-20 bg-white"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why TrussHireMate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform helps you manage hiring and interview processes with
              ease, bringing efficiency and intelligence to every step of your
              recruitment journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-gray-50 hover:bg-[#02786481] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
 ${isVisible.features ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Dashboard Images */}
      <section
        id="how-it-works"
        ref={howItWorksRef}
        className=" bg-gray-50"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8 sm:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get Started with Smart Hiring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us and explore a smarter way to recruit. Our dashboard helps
              you manage applications, track progress, and make data-driven
              hiring decisions — all in one place.
            </p>
          </div>

          <div className="relative flex justify-center items-center h-[350px] sm:h-[550px] mb-8 sm:mb-16">
            {/* Carousel Image */}
            <img
              src={images[currentIndex]}
              alt={`Dashboard ${currentIndex + 1}`}
              className="w-full max-w-5xl h-full object-contain transition-all duration-700"
            />

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              ❯
            </button>
          </div>
        </div>

        <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-16 bg-gray-200 py-14">
          <div className="text-center space-y-4 mb-12 sm:mb-">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with our streamlined process designed for
              maximum efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${
                  isVisible["how-it-works"] ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-6xl font-bold text-blue-100 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* interview images*/}
      <section className=" sm:py-2 bg-gradient-to-br from-[#027864] via-teal-500 to-[#027864]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="text-center space-y-4 sm:mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-white">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Experience the future of recruitment with TrussHireMate. Easily
              schedule interviews with just a few clicks – set time slots, send
              automated invites, and manage everything in one place. Book a free
              demo today!
            </p>
          </div>
          {/* <div className="flex mt-16 h-full">
            <div className=" flex flex-col sm:flex-row h-[500px] w-[700px]  mb-24 sm:mb-2 sm:mt-12 gap-4 sm:gap-12">
              <img
                src="/Frame2.png"
                alt="TrussHireMate Demo"
                className="max-w-full h-[300px] w-[400px] sm:h-[500px] sm:w-[500px] transform transition-transform duration-500 hover:scale-105"
              />
              <div className="text-yellow-600 text-4xl flex justify-center items-center ">
                <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 text-black border rounded-full sm:mb-4 " />
              </div>
              <img
                src="/Frame1.png"
                alt="TrussHireMate Demo"
                className="max-w-full h-[300px] sm:h-[500px] w-[400px] sm:w-[500px] transform transition-transform duration-500 hover:scale-105 "
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Smart PI Form Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Try Our Smart PI Form
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience how TrussHireMate simplifies candidate profiling. Fill out our smart PI form today!
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/piform.png"
              alt="TrussHireMate Demo"
              className="max-w-full h-auto sm:h-[800px] sm:w-full transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/*Interview process*/}
      <section className="flex flex-col sm:flex-row w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 sm:w-1/2">
          <div className=" flex flex-col sm:flex-col gap-4 space-y-4 mb-12 sm:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Streamlined Interview Process
            </h2>
            <p className="flex  text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our platform simplifies the interview process for both
              candidates and recruiters.
            </p>
            <h1 className=" flex justify-start items-center font-semibold gap-3">
              <ArrowRight/> One-click scheduling based on availability — no back-and-forth.
            </h1>
            <h1 className="flex justify-start items-center font-semibold gap-3">
              <ArrowRight/> Built-in video interviews with real-time notes and ratings.
            </h1>
            <h1 className="flex justify-start items-center font-semibold gap-3">
                <ArrowRight/>   Instant feedback & progress tracking from a single dashboard.
            </h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 sm:w-1/2 h-auto">
          <img src="/interview.png" alt="Interview Process" className="w-full sm:h-[400px] h-[250px]" />
        </div>
      </section>
    </div>
  );
};

export default Feature;
