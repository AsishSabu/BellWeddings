"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { servicesData } from "@/data/services"

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-blue-50 to-sky-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-blue-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300 rounded-xl transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-2 border-sky-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

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
            className="inline-flex items-center bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium border border-blue-200 mb-6"
          >
            Our Expertise
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Signature
            <span className="block bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate ceremonies to grand celebrations, we craft every detail to perfection
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-sky-500 rounded-xl flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <motion.div whileHover={{ x: 5 }}>
                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-semibold"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-400 to-sky-500 hover:from-blue-500 hover:to-sky-600 text-white rounded-full px-8 shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
