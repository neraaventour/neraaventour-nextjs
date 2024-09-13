import Image from "next/image";
import referral from "../app/public/referral.jpg";

const Referral = () => {
  return (
    <section
      className="relative py-16 text-white"
      style={{ backgroundColor: "#231F20" }}
    >
      {/* Zig-zag money emojis */}
      <div className="absolute -top-8 left-1/4 text-6xl">💸</div>
      <div className="absolute top-0 left-1/2 text-5xl">💰</div>
      <div className="absolute top-8 right-1/4 text-4xl">💵</div>

      <div className="container mx-auto px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-2 lg:gap-4">
          {/* Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Refer a Friend</h2>
            <p className="mb-6">
              Share the adventure with your friends and earn rewards! Invite
              your friends to join our platform and both of you will receive
              exclusive benefits.
            </p>
            <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
              Get Referral Link
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-md mx-auto lg:ml-auto lg:mr-0">
              <Image
                src={referral}
                width={400}
                height={400}
                alt="Referral image"
                className="rounded-lg"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
