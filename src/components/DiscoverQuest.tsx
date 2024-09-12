import Image from "next/image";
import Link from "next/link";
import { DashedStroke } from "@/components/ui/dashed-stroke";
import bali from "../app/public/images/bali.jpg";
import lombok from "../app/public/images/lombok.jpg";
import raja from "../app/public/images/raja.jpg";
import komodo from "../app/public/images/komodo.jpg";
import nusa from "../app/public/images/nusa.jpg";

const destinations = [
  { name: "Bali", image: bali, link: "/destinations/bali", size: "large" },
  {
    name: "Lombok",
    image: lombok,
    link: "/destinations/lombok",
    size: "small",
  },
  {
    name: "Raja Ampat",
    image: raja,
    link: "/destinations/raja-ampat",
    size: "small",
  },
  {
    name: "Komodo Island",
    image: komodo,
    link: "/destinations/komodo",
    size: "medium",
  },
  {
    name: "Nusa Penida",
    image: nusa,
    link: "/destinations/nusa-penida",
    size: "medium",
  },
];

const DiscoverQuest = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <DashedStroke className="absolute inset-0 z-0" />
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Discover Your Next Quest
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 h-[70vh]">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href={dest.link}
              className={`block relative overflow-hidden rounded-xl ${
                dest.size === "large"
                  ? "col-span-2 row-span-2"
                  : dest.size === "medium"
                  ? "col-span-2 md:col-span-1"
                  : ""
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-30 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-8 h-8 md:w-12 md:h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <h3 className="absolute bottom-2 left-2 md:bottom-4 md:left-4 text-lg md:text-xl font-semibold text-white">
                  {dest.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverQuest;
