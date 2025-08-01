"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { aboutData } from "@/data/about"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-sky-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-200"
          >
            Why Choose Us
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            What Makes Us
            <span className="block bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
              Special
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe every love story deserves a perfect celebration. Here's what sets us apart in creating
            unforgettable wedding experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
