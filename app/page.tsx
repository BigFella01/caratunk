"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import Image from "next/image";

const mainImages = [
  { src: "main/IMG_1911.jpg", alt: "Excavation 1" },
  { src: "main/IMG_1746.jpg", alt: "Excavation 2" },
  { src: "main/IMG_2052.jpg", alt: "Excavation 3" },
  { src: "main/IMG_2059.jpg", alt: "Excavation 4" },
];

const galleryImages = [
  { src: "residential-addition/IMG_1671.jpg", alt: "Gallery 1" },
  { src: "residential-addition/IMG_1672.jpg", alt: "Gallery 2" },
  { src: "residential-addition/IMG_1598.jpg", alt: "Gallery 3" },
  { src: "residential-addition/IMG_1670.jpg", alt: "Gallery 4" },
  { src: "stone-pipe-sectic_pelham/IMG_2058.jpg", alt: "Gallery 5" },
  { src: "stone-pipe-sectic_pelham/IMG_2051.jpg", alt: "Gallery 6" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % mainImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] border-b border-secondary flex items-center justify-center bg-background text-text px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6 py-12">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
              <strong className="text-xl sm:text-2xl md:text-3xl">
                Caratunk Contractors LLC
              </strong>{" "}
              is an excavation company providing quality and professional work.
              We service campgrounds, mobile home parks, commercial, and
              residential excavation projects across New Hampshire.
            </p>
            <a
              href="/contact"
              className="my-10 inline-block bg-background text-primary outline outline-primary hover:bg-primary hover:text-background px-8 py-4 rounded-lg font-semibold transition text-lg"
            >
              Contact Us
            </a>
          </div>

          <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] overflow-hidden rounded-xl shadow-lg">
            {mainImages.map((image, index) => (
              <div className="absolute inset-0" key={index}>
                <Image
                  src={`/${image.src}`} // make sure it's `/main/IMG_1911.jpg`
                  alt={image.alt}
                  fill
                  unoptimized
                  className={`object-cover transition-opacity duration-300 ease-in-out ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-secondary py-20 min-h-screen flex items-center bg-background text-text px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Septic Systems */}
            <div className="p-6 border border-secondary rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Septic Systems</h3>
              <ul className="list-disc list-inside text-base text-primary space-y-1">
                <li>Septic System Installation</li>
                <li>Eljen & Enviro Septics</li>
                <li>Effluent Pumps & Gravity Systems</li>
                <li>Grease Traps</li>
                <li>Leach Field Replacement</li>
                <li>Septic Tank Replacement</li>
                <li>General Septic Repairs</li>
              </ul>
            </div>

            {/* Yard + Drainage */}
            <div className="p-6 border border-secondary rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Yard & Drainage</h3>
              <ul className="list-disc list-inside text-base text-primary space-y-1">
                <li>Yard Grading & Reconstruction</li>
                <li>Pool Demolition</li>
                <li>Drainage & Recharge Systems</li>
                <li>Underdrain & Culverts</li>
                <li>Catch Basins</li>
              </ul>
            </div>

            {/* Site Work + Retaining Walls */}
            <div className="p-6 border border-secondary rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">
                Site Work & Retaining Walls
              </h3>
              <ul className="list-disc list-inside text-base text-primary space-y-1">
                <li>Gravel Driveways & Parking</li>
                <li>Site Lighting</li>
                <li>Minor Site Cleanup</li>
                <li>Small Rock Retaining Walls</li>
                <li>Precast Retaining Walls</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="underline font-semibold hover:opacity-80 text-lg"
            >
              View All Services →
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="border-b border-secondary py-20 min-h-screen flex items-center text-text px-4">
        <div className="max-w-6xl mx-auto w-full text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Our Work in Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div className="relative w-full h-64" key={i}>
                <Image
                  src={`/${img.src}`}
                  alt={img.alt}
                  fill
                  unoptimized
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="/gallery"
              className="underline font-semibold hover:opacity-80 text-lg"
            >
              View Full Gallery →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Reach out for a free consultation.
          </p>
          <a
            href="/contact"
            className="bg-background text-primary outline outline-primary hover:bg-primary hover:text-background px-8 py-4 rounded-lg font-semibold transition text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
