"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    event: "",
    role: "",
  })
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const data = await response.json()
    setMessage(data.message)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
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
                    <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
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
                  <Select name="event" onValueChange={(value) => handleSelectChange("event", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a virtual event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cda-info-session">
                        CDA Information Session - Feb 24, 2025, 5:00 PM EST
                      </SelectItem>
                      <SelectItem value="childhood-development">
                        Early Childhood Development Workshop - Feb 27, 2025, 7:00 PM EST
                      </SelectItem>
                      <SelectItem value="positive-guidance">
                        Positive Guidance Techniques Seminar - Mar 1, 2025, 10:00 AM EST
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Your Role</Label>
                  <RadioGroup onValueChange={(value) => handleSelectChange("role", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="teacher" id="teacher" />
                      <Label htmlFor="teacher">Teacher</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="assistant" id="assistant" />
                      <Label htmlFor="assistant">Teaching Assistant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="administrator" id="administrator" />
                      <Label htmlFor="administrator">Administrator</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full">
                  Register Now
                </Button>
              </form>
              {message && <p className="mt-4 text-green-500">{message}</p>}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
