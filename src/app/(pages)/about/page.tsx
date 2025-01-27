"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "10+ years of industry experience",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      description: "Award-winning designer",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emma Williams",
      role: "Lead Developer",
      description: "Full-stack development expert",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Kim",
      role: "Marketing Director",
      description: "Digital marketing specialist",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Checkered Pattern Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Row */}
          <div className="relative aspect-square order-1">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Our Story"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center order-2 md:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2020, we set out to revolutionize the industry with
                innovative solutions and customer-centric approaches. Our
                journey began with a simple idea: to make technology accessible
                to everyone.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="relative aspect-square order-3 md:order-4">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Our Vision"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center order-4 md:order-3">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground">
                We envision a future where technology seamlessly integrates with
                everyday life, making complex tasks simple and accessible to
                everyone. Our innovative solutions are designed to bridge gaps
                and create meaningful connections.
              </p>
            </div>
          </div>

          {/* Third Row */}
          <div className="relative aspect-square order-5 md:order-5">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Our Mission"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center order-6 md:order-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                We&apos;re committed to delivering exceptional value to our
                customers through cutting-edge technology and unparalleled
                service. Every day, we work towards creating solutions that make
                a difference in people&apos;s lives.
              </p>
            </div>
          </div>

          {/* <div className="relative aspect-square order-7 md:order-8">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Our Values"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center order-8 md:order-7">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p className="text-muted-foreground">
                Innovation, integrity, and customer satisfaction are at the
                heart of everything we do. We believe in fostering a culture of
                continuous improvement and maintaining the highest standards of
                professional excellence.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Team Carousel Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-auto max-w-sm">
                      <CardContent className="p-6">
                        <div className="relative w-48 h-48 mx-auto mb-4">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-primary font-medium">
                            {member.role}
                          </p>
                          <p className="text-muted-foreground mt-2">
                            {member.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index
                      ? "bg-primary"
                      : "bg-muted-foreground/20"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
