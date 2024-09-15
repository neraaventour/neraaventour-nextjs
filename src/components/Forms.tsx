"use client";

import Image from "next/image";
import boat from "../app/public/boat.svg"; // Replace with your actual icon

const Forms = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-2">
        {/* Icon and Heading */}
        <div className="text-center mb-10">
          <Image
            src={boat}
            alt="Adventure icon"
            width={64}
            height={64}
            className="mx-auto"
          />
          <h2 className="text-6xl font-bold">Ready for an Adventure?</h2>
          <p className="text-xl font-semibold mt-3">
            contact our travel specialist and we&apos;ll reply you within 24
            hours
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid pl-2 md:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-4 md:block">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
                <a
                  href="https://wa.me/11234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-800 cursor-pointer transition duration-300 relative group"
                >
                  <span className="relative z-10">☎️ +1 (123) 456-7890</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Chat with Us</h3>
                <a
                  href="#"
                  className="text-slate-600 hover:text-slate-800 cursor-pointer transition duration-300 relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Chat functionality not implemented yet");
                  }}
                >
                  <span className="relative z-10">💬 Start a live chat</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
                />
              </div>
              <input
                type="email"
                placeholder="you@examplemail.com"
                className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
              />
              <textarea
                placeholder="tell us your desired adventure..."
                rows={4}
                className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#4A96D0] text-white px-4 py-2 rounded-full hover:bg-[#3A45A2] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
