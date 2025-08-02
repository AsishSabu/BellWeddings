"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: "/gallery/img1.jpg",
      title: "Royal Heritage Wedding",
      location: "City Palace, Udaipur",
      date: "December 2023",
      category: "Traditional",
    },
    {
      id: 2,
      image: "/gallery/img2.jpg",
      title: "Beachside Celebration",
      location: "Taj Resort, Goa",
      date: "November 2023",
      category: "Destination",
    },
    {
      id: 3,
      image: "/gallery/img3.jpg",
      title: "Garden Paradise",
      location: "Backwater Resort, Kerala",
      date: "October 2023",
      category: "Outdoor",
    },
    {
      id: 4,
      image: "/gallery/img4.jpg",
      title: "Modern Luxury",
      location: "5-Star Hotel, Mumbai",
      date: "September 2023",
      category: "Modern",
    },
    {
      id: 5,
      image: "/gallery/img5.jpg",
      title: "Traditional Elegance",
      location: "Heritage Hotel, Jaipur",
      date: "August 2023",
      category: "Traditional",
    },
    {
      id: 6,
      image: "/gallery/img6.jpg",
      title: "Mountain Retreat",
      location: "Hill Station, Shimla",
      date: "July 2023",
      category: "Destination",
    },
    {
      id: 7,
      image: "/gallery/img7.jpg",
      title: "Palace Grandeur",
      location: "Lake Palace, Udaipur",
      date: "June 2023",
      category: "Luxury",
    },
    {
      id: 8,
      image: "/gallery/img8.jpg",
      title: "Intimate Celebration",
      location: "Private Villa, Lonavala",
      date: "May 2023",
      category: "Intimate",
    },
    {
      id: 9,
      image: "/gallery/img9.jpg",
      title: "Tropical Paradise",
      location: "Beach Resort, Maldives",
      date: "April 2023",
      category: "Destination",
    },
  ];

  const categories = [
    "All",
    "Traditional",
    "Modern",
    "Destination",
    "Outdoor",
    "Luxury",
    "Intimate",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-6 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Wedding
              <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of beautiful weddings and celebrations
              we've had the honor to plan and execute
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-rose-200 text-rose-700 hover:bg-rose-50 rounded-full px-6 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-rose-700 px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center text-sm text-gray-200 mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {item.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-200">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    <Heart className="h-5 w-5 text-gray-400 hover:text-rose-500 cursor-pointer transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-2"
            >
              View More
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
