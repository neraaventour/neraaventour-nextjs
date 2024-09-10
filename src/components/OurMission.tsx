import Image from "next/image";

const OurMission = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src="/compass-icon.svg"
              alt="Compass"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to inspiring and empowering travelers to explore
            the world's most breathtaking destinations. Our mission is to create
            unforgettable experiences that connect people with nature, culture,
            and adventure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
