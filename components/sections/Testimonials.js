"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight } from "lucide-react"
import Image from "next/image"
import { testimonialsData } from "@/data/testimonials"

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-20 left-20 w-48 h-48 border-2 border-rose-100 rounded-full opacity-40"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-6 py-3 rounded-full text-sm font-medium border border-rose-200 mb-6"
          >
            Client Stories
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Love
            <span className="block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the couples whose special days we've made unforgettable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-gradient-to-br from-white to-rose-50/30 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden rounded-md">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4"
                >
                  <Quote className="h-12 w-12 text-rose-200" />
                </motion.div>
                <CardContent className="p-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center mb-6"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.6 + i * 0.1, type: "spring", stiffness: 300 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-5 w-5 text-rose-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-rose-200"
                    >
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-rose-600 text-sm">{testimonial.event}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
