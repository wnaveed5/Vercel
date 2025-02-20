import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Laptop } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Seminars & Events | Professional Development Opportunities",
  description:
    "Browse upcoming seminars, workshops, and training events for childcare professionals. Join our expert-led sessions to enhance your skills and knowledge.",
  openGraph: {
    title: "Seminars & Events | Professional Development Opportunities",
    description:
      "Browse upcoming seminars and training events for childcare professionals. Expert-led sessions to enhance your skills.",
  },
}

export default function Seminars() {
  const featuredEvent = {
    title: "CDA Information Session",
    description:
      "Join us for a comprehensive virtual information session about the Child Development Associate (CDA) credential. Learn how this nationally-recognized certification can advance your career in early childhood education. Our experienced advisors will guide you through the certification process, requirements, and answer all your questions.",
    date: "February 24, 2025",
    time: "5:00 PM EST",
    location: "Virtual Event",
    benefits: [
      "Understanding CDA credential requirements",
      "Learning about the application process",
      "Exploring career advancement opportunities",
      "Q&A session with CDA advisors",
      "Free resource materials",
    ],
  }

  const upcomingEvents = [
    {
      title: "Early Childhood Development Workshop",
      description: "Interactive virtual workshop exploring developmental milestones and effective teaching strategies.",
      date: "February 27, 2025",
      time: "7:00 PM EST",
      location: "Virtual Event",
      type: "Virtual",
    },
    {
      title: "Positive Guidance Techniques Seminar",
      description:
        "Learn effective approaches to guide children's behavior and create a positive learning environment in this online seminar.",
      date: "March 1, 2025",
      time: "10:00 AM EST",
      location: "Virtual Event",
      type: "Virtual",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Featured CDA Information Session */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-sky-50 to-white rounded-2xl p-8">
            <div className="space-y-6">
              <Badge className="mb-4">Featured Event</Badge>
              <h1 className="text-4xl font-bold text-gray-900">{featuredEvent.title}</h1>
              <p className="text-gray-600">{featuredEvent.description}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5 text-sky-600" />
                  <span>{featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5 text-sky-600" />
                  <span>{featuredEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Laptop className="h-5 w-5 text-sky-600" />
                  <span>{featuredEvent.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">What you'll learn:</h3>
                <ul className="space-y-2">
                  {featuredEvent.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Button size="lg" className="w-full md:w-auto" asChild>
                <Link href="/register">Register Now - Free Event</Link>
              </Button>
            </div>
            <div className="relative h-[500px] md:h-[600px] order-first md:order-last">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CDA%20INFO%20SESSION-RbjU7BFY3TfLT4uubaoTcLoVSIcm1r.svg"
                alt="CDA Information Session"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Upcoming Virtual Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our online professional development events designed to enhance your skills and advance your career in
              early childhood education, all from the comfort of your home or office.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <Badge variant="secondary">{event.type}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4 text-sky-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4 text-sky-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Laptop className="h-4 w-4 text-sky-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full" asChild>
                    <Link href="/register">Register Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Want to stay updated on future virtual events? Join our mailing list!</p>
          <Button variant="outline" asChild>
            <Link href="/contact">Subscribe to Updates</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

