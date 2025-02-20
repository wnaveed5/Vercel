"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import emailjs from "@emailjs/browser"

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    event: "",
    role: "",
  })

  useEffect(() => {
    emailjs.init("U9nXuKC6PDnxdIjxY")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send("service_8k8f205", "template_5gyzizb", {
        to_email: "hello@blueskytd.com",
        to_name: "BlueSky Team",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        event: formData.event,
        role: formData.role,
        message: `New registration for ${formData.event}\n\nDetails:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRole: ${formData.role}`,
        reply_to: formData.email,
      })

      toast({
        title: "Registration submitted successfully!",
        description: "We'll send you a confirmation email shortly.",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        event: "",
        role: "",
      })
    } catch (error) {
      toast({
        title: "Error submitting registration",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
      console.error("Registration error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Register for a Virtual Event</h1>
            <p className="text-gray-600 text-lg">
              Take the next step in your professional development journey from anywhere.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Virtual Event Registration Form</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event">Select Virtual Event</Label>
                  <Select name="event" onValueChange={(value) => handleSelectChange("event", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a virtual event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CDA Information Session">
                        CDA Information Session - Feb 24, 2025, 5:00 PM EST
                      </SelectItem>
                      <SelectItem value="Early Childhood Development Workshop">
                        Early Childhood Development Workshop - Feb 27, 2025, 7:00 PM EST
                      </SelectItem>
                      <SelectItem value="Positive Guidance Techniques Seminar">
                        Positive Guidance Techniques Seminar - Mar 1, 2025, 10:00 AM EST
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Your Role</Label>
                  <RadioGroup onValueChange={(value) => handleSelectChange("role", value)} required>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Teacher" id="teacher" />
                      <Label htmlFor="teacher">Teacher</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Teaching Assistant" id="assistant" />
                      <Label htmlFor="assistant">Teaching Assistant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Administrator" id="administrator" />
                      <Label htmlFor="administrator">Administrator</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Register Now"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-gray-600">
            <p>
              By registering, you agree to our{" "}
              <a href="/terms" className="text-sky-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-sky-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

