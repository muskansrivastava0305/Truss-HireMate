import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Malhotra",
    title: "Software Engineer",
    quote:
      "TrussHireMate made my job search incredibly smooth. The interface is intuitive and efficient.",
    image: "https://i.pravatar.cc/100?img=1",
    stars: 5,
  },
  {
    name: "Sneha Kapoor",
    title: "HR Manager, PixelEdge",
    quote:
      "We've found some of our best hires through this platform. It's easy to navigate and very effective.",
    image: "https://i.pravatar.cc/100?img=2",
    stars: 5,
  },
  {
    name: "Rahul Das",
    title: "Marketing Executive",
    quote:
      "I got matched with jobs quickly. The process is fast, simple, and tailored.",
    image: "https://i.pravatar.cc/100?img=3",
    stars: 4,
  },
];

export default function TestimonialSlider() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Users Are Saying
        </h2>
        <p className="text-gray-600 mt-2">
          Hear directly from professionals and employers using TrussHireMate.
        </p>
      </div>

      {/* Scrollable Slider */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 px-2 snap-x snap-mandatory scroll-smooth">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[90%] md:min-w-[60%] lg:min-w-[40%] snap-center bg-gray-50 p-6 rounded-xl shadow-md flex flex-col justify-between"
            >
              <p className="text-gray-700 italic mb-4 leading-relaxed">“{item.quote}”</p>

              <div className="flex gap-1 mb-3">
                {Array(item.stars)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                  ))}
              </div>

              <div className="flex items-center gap-4 mt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div className="text-left">
                  <h4 className="text-base font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-500">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
