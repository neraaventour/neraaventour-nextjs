"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sectionRefs = {
    help: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
    booking: useRef<HTMLDivElement>(null),
    payment: useRef<HTMLDivElement>(null),
    partnership: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionId: keyof typeof sectionRefs) => {
    setActiveSection(sectionId);
    const yOffset = -80; // Adjust this value to control the amount of padding
    const element = sectionRefs[sectionId].current;
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionRefs[hash as keyof typeof sectionRefs]) {
      scrollToSection(hash as keyof typeof sectionRefs);
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden lg:block w-64 bg-muted p-4 sticky top-0 h-screen overflow-auto">
        <nav>
          <ul>
            {Object.keys(sectionRefs).map((sectionId) => (
              <li key={sectionId} className="mb-2">
                <Button
                  variant={activeSection === sectionId ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() =>
                    scrollToSection(sectionId as keyof typeof sectionRefs)
                  }
                >
                  {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl mb-8">
          No question is too big or too small. Contact us and we&apos;ll be
          happy to assist you.
        </p>

        <div
          ref={sectionRefs.help}
          id="help"
          className={`mb-12 ${activeSection === "help" ? "pt-20 -mt-20" : ""}`}
        >
          <h2 className="text-2xl font-bold mb-4">Help Center</h2>
          <Input
            type="text"
            placeholder="I have a question about..."
            className="mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Bookings & Cancellations",
              "Covid19 Cancellations",
              "Can I talk to you?",
              "Can I promote trips?",
            ].map((item) => (
              <Button key={item} variant="outline" className="justify-between">
                {item}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>

        <div
          ref={sectionRefs.contact}
          id="contact"
          className={`mb-12 ${
            activeSection === "contact" ? "pt-20 -mt-20" : ""
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-4">
            You can reach us through the following channels:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Email: support@example.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Main St, Anytown, AN 12345</li>
          </ul>
          <Button>Send us a message</Button>
        </div>

        <div
          ref={sectionRefs.booking}
          id="booking"
          className={`mb-12 ${
            activeSection === "booking" ? "pt-20 -mt-20" : ""
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Booking Information</h2>
          <p className="mb-4">To make a booking, please follow these steps:</p>
          <ol className="list-decimal pl-5 mb-4">
            <li>Browse our available trips</li>
            <li>Select your desired dates</li>
            <li>Choose your accommodation preferences</li>
            <li>Complete the booking form</li>
            <li>Proceed to payment</li>
          </ol>
          <Button>Start Booking</Button>
        </div>

        <div
          ref={sectionRefs.payment}
          id="payment"
          className={`mb-12 ${
            activeSection === "payment" ? "pt-20 -mt-20" : ""
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Payment Options</h2>
          <p className="mb-4">We accept the following payment methods:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Credit Cards (Visa, MasterCard, American Express)</li>
            <li>PayPal</li>
            <li>Bank Transfer</li>
          </ul>
          <p>
            For any payment-related queries, please contact our finance team.
          </p>
        </div>

        <div
          ref={sectionRefs.partnership}
          id="partnership"
          className={`mb-12 ${
            activeSection === "partnership" ? "pt-20 -mt-20" : ""
          }`}
        >
          <h2 className="text-2xl font-bold mb-4">Partnership Opportunities</h2>
          <p className="mb-4">
            We&apos;re always looking for new partners to enhance our services.
            If you&apos;re interested in partnering with us, please provide the
            following information:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Your company name</li>
            <li>Nature of your business</li>
            <li>Proposed partnership model</li>
            <li>Contact information</li>
          </ul>
          <Button>Submit Partnership Inquiry</Button>
        </div>
      </main>
    </div>
  );
}
