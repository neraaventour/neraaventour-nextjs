import Image from "next/image";
import suitcase from "../app/public/suitcase.svg";
import explorer1 from "../app/public/explorer1.jpg";
import explorer2 from "../app/public/explorer2.jpg";
import explorer3 from "../app/public/explorer3.jpg";

const testimonials = [
  {
    image: explorer1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    alt: "Explorer 1",
  },
  {
    image: explorer2,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    alt: "Explorer 2",
  },
  {
    image: explorer3,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    alt: "Explorer 3",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Icon */}
        <div className="flex justify-center mb-2">
          <Image src={suitcase} alt="Testimonial icon" width={60} height={60} />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-12">
          What our Explorers Said...
        </h1>

        {/* Testimonial box */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 relative">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center max-w-xs">
                <div
                  className={`w-32 h-32 ${
                    index === 1 ? "sm:w-40 sm:h-40 sm:-mt-8" : ""
                  } mb-4`}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    width={index === 1 ? 160 : 128}
                    height={index === 1 ? 160 : 128}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <p className="text-center mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
