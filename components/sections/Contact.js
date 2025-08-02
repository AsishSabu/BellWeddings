"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Twitter, Navigation, Clock, Globe } from "lucide-react"

const Contact = () => {
  const handleGetDirections = () => {
    const address = "Wedding Plaza, MG Road, Bangalore, Karnataka 560001"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, "_blank")
  }

  return (
    <section id="contact" className="pt-20 pb-10 bg-gradient-to-br from-rose-50 to-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-2  md:px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-4">
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
              className="inline-flex items-center bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-6 py-3 rounded-full text-sm font-medium border border-rose-200 mb-6"
            >
              Get In Touch
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Let's Plan Your
              <span className="block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                Perfect Wedding
              </span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Ready to start your wedding journey? Share your vision with us and let's create an unforgettable
              celebration that reflects your unique love story.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Call Us", info: "+91 98765 43210", action: "tel:+919876543210" },
                {
                  icon: Mail,
                  title: "Email Us",
                  info: "hello@bellweddings.com",
                  action: "mailto:hello@bellweddings.com",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  info: "Wedding Plaza, MG Road\nBangalore, Karnataka 560001",
                  action: null,
                },
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
                    className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center"
                  >
                    <contact.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-rose-600 mb-1">{contact.title}</div>
                    <div className="text-gray-700 whitespace-pre-line">{contact.info}</div>
                    {contact.action && (
                      <a
                        href={contact.action}
                        className="text-rose-500 hover:text-rose-600 text-sm font-medium mt-1 inline-block"
                      >
                        {contact.title === "Call Us" ? "Call Now" : "Send Email"}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>




          </motion.div>

          <div className="space-y-8">
            {/* Contact Form */}
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
                          className="border-rose-200 focus:border-rose-400 focus:ring-rose-200"
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
                          className="border-rose-200 focus:border-rose-400 focus:ring-rose-200"
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
                        className="border-rose-200 focus:border-rose-400 focus:ring-rose-200"
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
                        className="border-rose-200 focus:border-rose-400 focus:ring-rose-200"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Wedding Date</label>
                      <Input type="date" className="border-rose-200 focus:border-rose-400 focus:ring-rose-200" />
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
                        className="border-rose-200 focus:border-rose-400 focus:ring-rose-200"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white py-4 rounded-xl text-xs md:text-sm  lg:text-lg font-semibold">
                          Begin Our Journey Together
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map Section */}

          </div>

        </div>
             <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Map Header */}
                  <div className=" px-4 md:px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white ">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm md:text-xl font-bold mb-1">Visit Our Office</h3>
                        <p className="text-rose-100 text-xs md:text-sm">Wedding Plaza, MG Road, Bangalore</p>
                      </div>
                      <Globe className="h-8 w-8 text-rose-200" />
                    </div>
                  </div>

                  {/* Map Container */}
                  <div className="relative h-80 bg-gradient-to-br from-rose-100 to-pink-100">
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-16 w-16 text-rose-400 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Bell Wedding Planners</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Wedding Plaza, MG Road
                          <br />
                          Bangalore, Karnataka 560001
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            onClick={handleGetDirections}
                            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium shadow-lg"
                          >
                            <Navigation className="h-4 w-4 mr-2" />
                            Get Directions
                          </Button>
                        </motion.div>
                      </div>
                    </div> */}

                    {/* Optional: Replace above with actual Google Maps iframe */}

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="320"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />

                  </div>

                  {/* Map Footer with Quick Actions */}
                  <div className="px-4 py-2 bg-white border-t border-rose-100">
                    <div className="flex items-center justify-end text-sm">
                      {/* <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1 text-rose-500" />
                        <span>Open Now • Closes 7:00 PM</span>
                      </div> */}
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-rose-200 text-rose-600 hover:bg-rose-50 text-xs px-3 py-1 bg-transparent"
                          onClick={() => window.open("tel:+9123456789")}
                        >
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-rose-200 text-rose-600 hover:bg-rose-50 text-xs px-3 py-1 bg-transparent"
                          onClick={handleGetDirections}
                        >
                          <Navigation className="h-3 w-3 mr-1" />
                          Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
      </div>
    </section>
  )
}

export default Contact
