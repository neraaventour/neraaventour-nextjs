import Image from "next/image";
import WordRotate from "@/components/magicui/word-rotate";

const Hero = () => {
  const destinations = ["Nusa Penida", "Bali", "Lombok", "Raja Ampat"];

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative h-[calc(100vh-6rem)] rounded-lg overflow-hidden">
        <Image
          src="/nusa-penida.jpg"
          alt="Nusa Penida"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Discover new Adventure in
            </h1>
            <WordRotate
              words={destinations}
              className="text-5xl md:text-7xl font-extrabold text-yellow-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
