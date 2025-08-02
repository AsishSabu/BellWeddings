"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Users,
  Award,
  Heart,
  Star,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Founder & Lead Planner",
      image: "/about/person.jpg",
      description:
        "With over 12 years of experience in wedding planning, Priya brings creativity and precision to every celebration.",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Creative Director",
      image: "/about/person.jpg",
      description:
        "Rajesh specializes in wedding decor and design, creating stunning visual experiences for couples.",
    },
    {
      id: 3,
      name: "Anita Patel",
      role: "Event Coordinator",
      image: "/about/person.jpg",
      description:
        "Anita ensures flawless execution on wedding day, managing every detail with care and professionalism.",
    },
  ];

  const achievements = [
    { icon: Users, number: "500+", label: "Happy Couples" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Heart, number: "12+", label: "Years Experience" },
    { icon: Star, number: "5.0", label: "Average Rating" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Perfection",
      description:
        "We pour our heart into every wedding, ensuring each detail reflects your unique love story.",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description:
        "Every couple receives personalized attention and customized planning tailored to their vision.",
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description:
        "Count on us for timely execution, transparent communication, and stress-free planning experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
              About
              <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Bell Weddings
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating magical wedding experiences with passion, creativity, and
              attention to every precious detail since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bell Wedding Planners was founded in 2010 with a simple belief:
                every couple deserves a wedding that perfectly reflects their
                unique love story. What started as a passion project has grown
                into one of India's most trusted wedding planning companies.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've had the privilege of planning over 500
                weddings, from intimate ceremonies to grand celebrations. Each
                wedding teaches us something new and reinforces our commitment
                to excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to push the boundaries of creativity while
                maintaining the personal touch that makes each celebration truly
                special.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/about/main.jpg"
                alt="Our Story"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl h-[500px] object-fit-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust
              our clients place in us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in creating extraordinary wedding
              experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate professionals behind every beautiful wedding
              celebration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-72">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-rose-600 font-medium mb-4">
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Plan Your Dream Wedding?
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              Let's create something beautiful together. Contact us today to
              start planning your perfect celebration.
            </p>
            <Button
              size="lg"
              className="bg-white text-rose-700 hover:bg-gray-100 rounded-full px-8 font-semibold"
            >
              Start Planning Today
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
