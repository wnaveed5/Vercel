import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users2, Calendar, Award } from "lucide-react"

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-sky-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Childcare Providers for a <span className="text-sky-600">Brighter Tomorrow</span>
              </h1>
              <p className="text-xl text-gray-600">
                Equipping childcare providers with essential skills and offering strategic consulting services to
                enhance the quality of early childhood education.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/classes">Explore Classes</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_7727-768x576.jpg-DHtkuirtZQh3DsEA1iQ9UEiSX7hTLf.webp"
                alt="Teacher working with children"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose BlueSky?</h2>
            <p className="text-gray-600">
              We provide comprehensive training and development solutions tailored to the unique needs of childcare
              providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Expert Training",
                description: "Learn from experienced professionals in early childhood education",
              },
              {
                icon: <Users2 className="h-8 w-8" />,
                title: "Supportive Community",
                description: "Join a network of dedicated childcare providers",
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Flexible Schedule",
                description: "Choose from various course times that fit your schedule",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Certified Programs",
                description: "Earn recognized certifications in childcare",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-600">
                BlueSky Training and Development is dedicated to empowering the childcare workforce through innovative,
                insightful, and immersive professional development solutions. We strive to make a lasting impact on the
                quality of childcare services.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_7721-1024x683-landscape-2a9a16b0d2611187b970ab11a32c2ccd-.jpg-aXnNt8aw1gxO91oVv7qfOkUpZa4lTD.jpeg"
                alt="Interactive learning environment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

