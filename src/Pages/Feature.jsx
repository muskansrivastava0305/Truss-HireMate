import { ArrowRight, Calendar, Database, Search, Zap } from 'lucide-react';
import React, { useState, useEffect , useRef } from 'react'

const features = [
  {
    icon: Database,
    title: "Data Management",
    description: "Efficiently organize candidate data and track the entire hiring lifecycle.",
    color: "bg-blue-500",
  },
  {
    icon: Search,
    title: "Sourcing",
    description: "Find top talent with intelligent sourcing features and automated candidate matching.",
    color: "bg-green-500",
  },
  {
    icon: Calendar,
    title: "Interview Management",
    description: "Easily schedule, track, and evaluate interviews with built-in tools.",
    color: "bg-purple-500",
  },
  {
    icon: Zap,
    title: "Smooth User Experience",
    description: "Intuitive design ensures a smooth experience from start to finish.",
    color: "bg-orange-500",
  },
]

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
    description: "Schedule interviews, collaborate with your team, and make data-driven hiring decisions.",
  },
]

const Feature = () => {
  const [isVisible, setIsVisible] = useState({});
  const featuresRef = useRef(null);
const howItWorksRef = useRef(null);


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
      <section id="features" ref={featuresRef} className="py-20 bg-white" data-animate>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why TrussHireMate?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform helps you manage hiring and interview processes with ease, bringing efficiency and
              intelligence to every step of your recruitment journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-gray-50 hover:bg-[#02786481] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
 ${
                  isVisible.features ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
                </div>
              </section>

              <section id="how-it-works" ref={howItWorksRef} className="py-20 bg-gray-50" data-animate>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with our streamlined process designed for maximum efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${isVisible["how-it-works"] ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
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

            </div>
        );
      }

      export default Feature;