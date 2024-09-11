import Image from "next/image";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { DashedStroke } from "@/components/ui/dashed-stroke";

const destinations = [
  { name: "Bali", image: "/public/bali.jpg", link: "/destinations/bali" },
  { name: "Lombok", image: "/public/lombok.jpg", link: "/destinations/lombok" },
  {
    name: "Raja Ampat",
    image: "/public/raja-ampat.jpg",
    link: "/destinations/raja-ampat",
  },
  {
    name: "Komodo Island",
    image: "/public/komodo.jpg",
    link: "/destinations/komodo",
  },
  {
    name: "Nusa Penida",
    image: "/public/nusa-penida.jpg",
    link: "/destinations/nusa-penida",
  },
];

const DiscoverQuest = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <DashedStroke className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Discover Your Next Quest
        </h2>
        <BentoGrid className="gap-4">
          {destinations.map((dest, index) => (
            <BentoGridItem
              key={dest.name}
              title={dest.name}
              className="relative group cursor-pointer"
            >
              <Link href={dest.link} className="block h-full">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-12 h-12 text-white"
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
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {dest.name}
                </h3>
              </Link>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default DiscoverQuest;
