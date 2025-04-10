"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart2, Database, FileText, Bell, ArrowUpRight, ChevronDown } from "lucide-react"
import NewsCard from "@/components/news-card"
import ClientLogos from "@/components/client-logos"
import { Particles } from "@/components/particles"
import AnimatedText from "@/components/animated-text"
import ScrollAnimation from "@/components/scroll-animation"
import Card3D from "@/components/card-3d"
import Marquee from "@/components/marquee"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-20">
        <Particles className="absolute inset-0" quantity={50} />
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="elegant-heading mb-6">
                <span className="elegant-text">Automated policy and regulatory intelligence</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <p className="elegant-subheading mb-10">
                AI-driven public policy, regulatory, and geopolitical insights and data to turbocharge your work
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button asChild size="lg" className="elegant-button elegant-gradient text-white hover:shadow-glow">
                <Link href="/request-demo">Request Demo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="elegant-button border-primary-600 text-primary-600 hover:bg-primary-50"
              >
                <Link href="/learn-more">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Abstract shapes */}
        <motion.div
          className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute top-24 -right-16 w-72 h-72 bg-indigo-100 rounded-full opacity-40 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          onClick={scrollToContent}
        >
          <ChevronDown className="text-primary-600 w-8 h-8" />
        </motion.div>
      </section>

      {/* News Section */}
      <section ref={scrollRef} className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <AnimatedText text="Latest News" className="text-3xl font-bold" />
            <Link
              href="/news"
              className="text-primary-600 hover:text-primary-700 flex items-center gap-1 font-medium group"
            >
              <span>View all</span>
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <ArrowUpRight size={16} />
              </motion.div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation animation="slideUp" delay={0.1}>
              <NewsCard
                title="AI startup aimed at demystifying the world of public policy secures new funding"
                content="Statt Inc., which uses AI to distill the vast amount of global public policy information available online, has secured $2.8 million in new funding, the company told Semafor exclusively."
              />
            </ScrollAnimation>
            <ScrollAnimation animation="slideUp" delay={0.2}>
              <NewsCard
                title="Early-stage funding flows to local AI startups"
                content="Austin has been home to many AI companies through the years. In September 2024, several early-stage AI startups began to emerge and secure seed funding rounds. In this story, we look at three recent deals, as well as explore the technologies and investors involved."
              />
            </ScrollAnimation>
            <ScrollAnimation animation="slideUp" delay={0.3}>
              <NewsCard
                title="Silver Spring AI startup geared toward public affairs pros lands major investment"
                content="It's one of several AI-focused startups developing software tools to help public affairs professionals quickly digest information."
              />
            </ScrollAnimation>
            <ScrollAnimation animation="slideUp" delay={0.4}>
              <NewsCard
                title="Statt Secures $2.8 Million Seed Round to Scale its AI and Data SaaS Platform"
                content="Statt Inc., an innovative big data and artificial intelligence company for the public policy, regulatory, and strategic communications sectors, today announced it secured $2.8 million in seed funding."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* StattChat Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slideRight">
              <AnimatedText text="Your Automated Policy and Regulatory Analyst" className="text-3xl font-bold mb-4" />
              <h3 className="text-2xl font-semibold mb-6 elegant-text">StattChat</h3>
              <p className="elegant-paragraph mb-8">
                Use cutting-edge AI to do comprehensive public policy, legislative, and regulatory research and
                analysis. What took hours, or even days, now takes a few minutes.
              </p>
              <ul className="space-y-6">
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 bg-primary-100 p-2 rounded-full text-primary-600">
                    <ArrowRight size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Save time</p>
                    <p className="text-gray-600">Do a week's worth of research and analysis in less than an hour.</p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 bg-primary-100 p-2 rounded-full text-primary-600">
                    <ArrowRight size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Automate workflow</p>
                    <p className="text-gray-600">
                      Use our AI answers engine to seamlessly execute your work deliverables and products.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 bg-primary-100 p-2 rounded-full text-primary-600">
                    <ArrowRight size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Be the smartest in the room</p>
                    <p className="text-gray-600">
                      Generate new policy and regulatory insights at the press of a button on any issue or topic.
                    </p>
                  </div>
                </motion.li>
              </ul>
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              <Card3D className="elegant-card">
                <div className="relative p-4">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl"></div>
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="StattChat product screenshot"
                    className="w-full h-auto rounded-xl relative z-10"
                  />
                </div>
              </Card3D>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-16 overflow-hidden">
        <Marquee className="py-4" speed={30}>
          <div className="flex items-center space-x-16 mr-16">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="text-4xl font-bold elegant-text">
                Policy Intelligence • Regulatory Insights • AI-Powered Analysis • Real-time Data •
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      {/* Data Insights Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <ScrollAnimation animation="fadeIn">
              <h2 className="elegant-heading mb-4">Data-driven insights</h2>
              <p className="elegant-text text-xl font-semibold">Unified policy and regulatory data and intelligence</p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="fadeIn" delay={0.2}>
            <p className="elegant-paragraph text-center max-w-3xl mx-auto mb-16">
              Statt's first-of-its-kind real-time datastream and AI powers automated insights and analysis to offer
              unparalleled clarity on policy and regulatory risk and sentiment.
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation animation="slideUp" delay={0.1}>
              <Card3D className="elegant-card h-full">
                <CardContent className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                      <Database className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Robust Datastream</h3>
                  </div>
                  <p className="elegant-paragraph">
                    We have real-time policy data that nobody else has, containing billions of data points and hundreds
                    of millions of policy and regulatory documents.
                  </p>
                </CardContent>
              </Card3D>
            </ScrollAnimation>
            <ScrollAnimation animation="slideUp" delay={0.2}>
              <Card3D className="elegant-card h-full">
                <CardContent className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Federal & State Legislation</h3>
                  </div>
                  <p className="elegant-paragraph">
                    Gain breaking federal legislative insights and analysis on bills, hearings, and more.
                  </p>
                </CardContent>
              </Card3D>
            </ScrollAnimation>
            <ScrollAnimation animation="slideUp" delay={0.3}>
              <Card3D className="elegant-card h-full">
                <CardContent className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                      <BarChart2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Federal & State Regulation</h3>
                  </div>
                  <p className="elegant-paragraph">
                    Understand what's being said to regulators. Use our AI to search and analyze federal comment letters
                    and unlock valuable regulatory intelligence and risk.
                  </p>
                </CardContent>
              </Card3D>
            </ScrollAnimation>
            <ScrollAnimation animation="slideUp" delay={0.4}>
              <Card3D className="elegant-card h-full">
                <CardContent className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-3 rounded-lg text-primary-600 mr-4">
                      <Bell className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">Proprietary Insights</h3>
                  </div>
                  <p className="elegant-paragraph">
                    Connect your data with Statt's data and AI to generate proprietary policy and regulatory insights.
                  </p>
                </CardContent>
              </Card3D>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Reports & Alerts Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slideRight" className="order-2 lg:order-1">
              <Card3D className="elegant-card">
                <div className="relative p-4">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl"></div>
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="Reports and alerts product screenshot"
                    className="w-full h-auto rounded-xl relative z-10"
                  />
                </div>
              </Card3D>
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft" className="order-1 lg:order-2">
              <AnimatedText
                text="Detailed reporting that replaces expensive experts"
                className="text-3xl font-bold mb-4"
              />
              <h3 className="text-2xl font-semibold mb-6 elegant-text">Reports & Alerts</h3>
              <p className="elegant-paragraph mb-8">
                Statt's AI public policy and regulatory agents can generate in-depth, long form reports and analysis for
                you. Set up automated alerts so you never miss a beat.
              </p>
              <ul className="space-y-6">
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 bg-primary-100 p-2 rounded-full text-primary-600">
                    <ArrowRight size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">In-depth analysis</p>
                    <p className="text-gray-600">
                      Use our report builder AI and choose from more than 20 report templates to create in-depth
                      analysis and briefs for your organization or client.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 bg-primary-100 p-2 rounded-full text-primary-600">
                    <ArrowRight size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Customizable reports</p>
                    <p className="text-gray-600">
                      Our report builder AI agent can tailor and customize reports and in-depth analysis for a specific
                      company or client.
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 mt-1 bg-primary-100 p-2 rounded-full text-primary-600">
                    <ArrowRight size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-1">Alerts</p>
                    <p className="text-gray-600">
                      Set alerts on any topic, company, or industry to be delivered to your inbox.
                    </p>
                  </div>
                </motion.li>
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient"></div>
        <Particles className="absolute inset-0" quantity={30} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollAnimation animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to transform your policy and regulatory work?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Join the leading organizations using Statt to gain a competitive edge in policy and regulatory
              intelligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="elegant-button bg-white text-primary-700 hover:bg-gray-100"
              >
                <Link href="/request-demo">Request Demo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="elegant-button border-white text-white hover:bg-white/10"
              >
                <Link href="/learn-more">Learn More</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="fadeIn">
            <h2 className="text-2xl font-bold mb-12">Trusted by the world's most innovative teams</h2>
            <ClientLogos />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
