"use client"

import TeamMember from "@/components/team-member"
import Link from "next/link"
import { Particles } from "@/components/particles"
import ScrollAnimation from "@/components/scroll-animation"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24 md:py-32">
        <Particles className="absolute inset-0" quantity={40} />
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="elegant-heading mb-6">
                <span className="elegant-text">About Us</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <h2 className="elegant-subheading">Meet Statt</h2>
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
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fadeIn">
              <p className="elegant-paragraph leading-relaxed">
                Statt is changing the way public policy and regulatory professionals do their jobs, unlocking mission
                critical insights for large companies, professional services firms, governmental agencies, and policy
                organizations. We know how difficult it is to stay on top of and anticipate policy, regulatory, and
                geopolitical change and risk, and to separate the signal from the noise. That's why we've built Statt,
                the world's first-of-its kind datastream that fuels our automated, in-depth, and real-time policy and
                regulatory research, insights, and analysis. Statt's mission is to bring the power of cutting-edge
                public policy and regulatory AI to your fingertips.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fadeIn">
              <h2 className="elegant-heading text-center mb-4">Meet our team</h2>
              <p className="elegant-paragraph text-center mb-16">
                We're a team of policy wonks and machine learning engineers committed to bringing the power of AI to the
                public policy and regulatory spaces.
              </p>
            </ScrollAnimation>

            <div className="space-y-20">
              <ScrollAnimation animation="slideUp" delay={0.1}>
                <TeamMember
                  name="Steve Glickman"
                  title="Co-Founder / CEO"
                  bio="Steve Glickman is Co-founder and CEO of Statt. Over the past 20 years, Steve has been an entrepreneur, executive, and advisor focused on public policy, technology, financial services, and social impact. Prior to Statt, Steve was the Co-Founder and CEO of the Economic Innovation Group, a bipartisan think tank, which was the architect for the Opportunity Zones community development program. Earlier in his career, Steve received multiple presidential appointments in the Obama-Biden Administration, including in the National Security Council and National Economic Council, as Deputy Associate Counsel for the White House, and as Chief of Staff for the U.S. and Foreign Commercial Service. Steve previously practiced law, including for the U.S. House Oversight and Government Affairs Committee, where he led congressional hearings on the wars in Iraq and Afghanistan, as well as at the Justice Department. Steve received his B.A. and M.A., magna cum laude, from Georgetown University, J.D. from Columbia Law School, and LL.M., with highest honors, from the London School of Economics and Political Science. He was a longtime Adjunct Professor in Georgetown University's School of Foreign Service."
                />
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.2}>
                <TeamMember
                  name="Andrew Platt"
                  title="Co-Founder / CPO"
                  bio="Andrew Platt is Statt's Co-founder and Head of Product. A seasoned public policy pro and startup exec, Andrew started Statt on a hunch that domain-specific machine learning could generate proprietary regulatory and policy insights from public government data. Andrew previously served for four years in the Maryland state legislature, where he would nerd out on being able to detect in a real time regulatory and policy setting, how text and ideas could be generated and disseminated by civil society stakeholders to influence networks. After serving in the state legislature, Andrew led public policy for a fintech startup, where he pioneered a new public-private partnership for philanthropic capital to scale workforce training programs for in-demand, high-paying technical jobs for low-income adults. Andrew started out his career on Capitol Hill, doing public policy research and analysis for the U.S. House Democratic Caucus. Favorite book: A People's History of the United States. Favorite movie: Jaws. Favorite Song: If You're Ready (Come Go With Me) by The Staple Singers."
                />
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.3}>
                <TeamMember
                  name="Nathan Kozyra"
                  title="Head of Engineering"
                  bio="Nathan Kozyra is Statt's Head of Engineering. With a unique background in natural language processing, media, and data aggregation, Nathan is bringing his deep technical background to build and scale a cutting-edge software and data platform for the public policy and regulatory space. Prior to joining Statt, Nathan was the Cofounder and CTO of PointsLocal, a high-performance natural language processing startup that built an advanced data aggregation and digital content platform for the news and media industry. Nathan was also a Creative Technologist for the New York Times, where he built efficient technical solutions to solve complex, non-technical problems for reporters, producers, and investigative journalists. Nathan is a graduate of the University of Florida and received his Master's Degree in Machine Learning from Georgia Tech. His favorite programming language is Go."
                />
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.4}>
                <TeamMember
                  name="Chris Alexander"
                  title="Head of Machine Learning"
                  bio="Chris Alexander is Head of Machine Learning for Statt. Before joining Statt, Chris was a Machine Learning Engineer for Kensho, where he helped build an ML-powered global geopolitical risk data and analysis platform for the intelligence community. Chris previously worked as a software engineer on Wall Street where he built simulation engines to compute exposure in counterparty default scenarios. Chris has worked for JPMorgan Chase and Bank of America. Chris is a graduate of the University of Virginia and has graduate degrees from the University of Pennsylvania and Northwestern University. His favorite programming language is Julia."
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient"></div>
        <Particles className="absolute inset-0" quantity={30} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollAnimation animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join our team</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              We're looking for talented individuals who are passionate about AI, public policy, and making a
              difference.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Link
                href="/careers"
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors inline-block elegant-button"
              >
                View Open Positions
              </Link>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
