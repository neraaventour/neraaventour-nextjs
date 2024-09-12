import Image from "next/image";
import compass from "../app/public/compass.svg";
import dog from "../app/public/dog.jpg";
import Link from "next/link";

const OurMission = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-2">
            <Image
              src={compass}
              alt="Compass"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:text-2xl md:text-3xl lg:text-4xl">
            We guide you through adventures that transcend ordinary travel,
            offering unforgettable experiences and thrills
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image
              src={dog}
              alt="Dog"
              width={350}
              height={100}
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900">Our Commitment</h3>
            <p className="text-xl text-gray-600 mb-2">
              Our mission is to redefine travel through{" "}
              <strong>
                <em>immersive and thrilling adventures</em>
              </strong>{" "}
              that go beyond the conventinal.
            </p>
            <p className="text-xl text-gray-600">
              This approach will transfoorm you from a mere tourist to an active
              explorer, engaging deeply with your journey.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                href="/about"
                className="inline-block bg-primary text-white font-semibold py-3 px-12 rounded-lg hover:bg-slate-700 transition duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
