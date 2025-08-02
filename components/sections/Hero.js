"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/hero/wedding1.jpg",
    "/hero/wedding2.jpg",
    "/hero/wedding3.jpg",
    "/hero/wedding4.jpg",
    "/hero/wedding5.jpg",
    "/hero/wedding6.jpg",
  ];

  // Auto-scroll images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Full Screen Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Wedding ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}

        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center pt-18">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Creating Beautiful
              <span className="block bg-gradient-to-r from-rose-400 to-pink-300 bg-clip-text text-transparent">
                Wedding Moments
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Professional wedding planning with attention to every detail,
              creating unforgettable celebrations for your special day.
            </motion.p>

            {/* Single Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <Button
                size="lg"
                className="group bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Beautiful Image Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20 shadow-xl"
        >
          {/* Navigation Dots */}
          <div className="flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative transition-all duration-300 ${
                  index === currentImageIndex ? "scale-125" : "hover:scale-110"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-rose-400 shadow-lg shadow-rose-400/50"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
                {index === currentImageIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -inset-1 rounded-full border-2 border-rose-300"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-white/20" />

          {/* Counter */}
          <div className="text-white font-medium text-sm min-w-[60px] text-center">
            <motion.span
              key={currentImageIndex}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {String(currentImageIndex + 1).padStart(2, "0")}
            </motion.span>
            <span className="text-white/60">
              {" "}
              / {String(heroImages.length).padStart(2, "0")}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-rose-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{
                width: `${
                  ((currentImageIndex + 1) / heroImages.length) * 100
                }%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute hidden md:block bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-center z-20"
      >
        <div className="text-xs mb-2">Scroll Down</div>
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white/40 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
