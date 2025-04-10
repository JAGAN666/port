"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { CheckCircle } from "lucide-react"
import { Particles } from "@/components/particles"
import { motion } from "framer-motion"
import ScrollAnimation from "@/components/scroll-animation"

export default function RequestDemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    source: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSourceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, source: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Demo request submitted",
      description: "We'll be in touch with you shortly.",
    })

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      source: "",
    })
  }

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24">
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
                <span className="elegant-text">Request a Demo</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <p className="elegant-subheading mb-10">
                See how Statt can transform your policy and regulatory intelligence
              </p>
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

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <ScrollAnimation animation="fadeIn">
                <div className="text-center py-12 glass-effect rounded-2xl p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6"
                  >
                    <CheckCircle size={32} />
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-4">Thank you for your request!</h2>
                  <p className="elegant-paragraph mb-8">
                    We've received your demo request and will be in touch shortly. One of our team members will contact
                    you to schedule your personalized demo.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="elegant-button elegant-gradient text-white"
                    >
                      Submit Another Request
                    </Button>
                  </motion.div>
                </div>
              </ScrollAnimation>
            ) : (
              <>
                <ScrollAnimation animation="fadeIn">
                  <div className="glass-effect p-8 rounded-2xl mb-8">
                    <h2 className="text-2xl font-bold mb-6">Request a demo to see Statt in action</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-gray-700">
                            First name *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="elegant-input"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-gray-700">
                            Last name *
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="elegant-input"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="elegant-input"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-700">
                          Company/Organization *
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="elegant-input"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700">
                          Phone number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="elegant-input"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="source" className="text-gray-700">
                          How did you hear about us? *
                        </Label>
                        <Select value={formData.source} onValueChange={handleSourceChange} required>
                          <SelectTrigger className="elegant-input">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="search">Search Engine</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="event">Event or Conference</SelectItem>
                            <SelectItem value="news">News Article</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Button
                          type="submit"
                          className="w-full elegant-button elegant-gradient text-white py-3 rounded-lg transition-colors"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Submitting...
                            </div>
                          ) : (
                            "Submit Request"
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeIn" delay={0.2}>
                  <div className="glass-effect p-6 rounded-2xl border border-gray-200">
                    <h3 className="font-semibold mb-2">What happens next?</h3>
                    <p className="elegant-paragraph">
                      After submitting your request, a member of our team will contact you within 1 business day to
                      schedule a personalized demo tailored to your organization's needs.
                    </p>
                  </div>
                </ScrollAnimation>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
