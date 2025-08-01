"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Twitter } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-blue-50 to-sky-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium border border-blue-200 mb-6"
            >
              Get In Touch
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Let's Plan Your
              <span className="block bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
                Perfect Wedding
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Ready to start your wedding journey? Share your vision with us and let's create an unforgettable
              celebration that reflects your unique love story.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Call Us", info: "+91 98765 43210" },
                { icon: Mail, title: "Email Us", info: "hello@bellweddings.com" },
                { icon: MapPin, title: "Visit Us", info: "Wedding Plaza, MG Road\nBangalore, Karnataka 560001" },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center"
                  >
                    <contact.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-lg font-semibold text-blue-600 mb-1">{contact.title}</div>
                    <div className="text-gray-700 whitespace-pre-line">{contact.info}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-4 mt-12"
            >
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="icon"
                    className="bg-white border border-blue-200 hover:border-blue-400 hover:bg-blue-50 rounded-xl text-blue-600"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Start Your Journey</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <Input
                        placeholder="Enter your name"
                        className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Partner's Name</label>
                      <Input
                        placeholder="Partner's name"
                        className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      placeholder="+91 98765 43210"
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Wedding Date</label>
                    <Input type="date" className="border-blue-200 focus:border-blue-400 focus:ring-blue-200" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your dream wedding
                    </label>
                    <Textarea
                      placeholder="Share your vision, preferences, and any special requirements..."
                      rows={4}
                      className="border-blue-200 focus:border-blue-400 focus:ring-blue-200"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-gradient-to-r from-blue-400 to-sky-500 hover:from-blue-500 hover:to-sky-600 text-white py-4 rounded-xl text-lg font-semibold">
                        Begin Our Journey Together
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
