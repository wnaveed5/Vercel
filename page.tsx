import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, GraduationCap, Calendar, Users2 } from "lucide-react"

export default function Home() {
  return (
    <>
      <header className="relative bg-gradient-to-b from-sky-50 to-white">
        {/* SEO Optimized Meta Title */}
        <title>Blue Sky Training & Development | Childcare Provider Education</title>
        <meta
          name="description"
          content="Empowering childcare providers with professional development, training, and strategic consulting services. Join our programs to enhance your childcare skills."
        />

        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-sky-900">BlueSky TD</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Meet The Team", "Classes", "FAQ", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-600 hover:text-sky-600 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="relative">
            <Plane className="absolute -left-12 top-0 text-sky-500 w-16 h-16 animate-bounce" />
            <Plane className="absolute -right-8 bottom-0 text-sky-500 w-12 h-12 animate-bounce delay-700" />

            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Empowering Childcare Providers for a <span className="text-sky-600">Brighter Tomorrow</span>
              </h1>
              <p className="text-xl text-gray-600 md:text-2xl">
                Equipping Childcare Providers With Essential Skills and Offering Strategic Consulting Services
              </p>
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-lg px-8 py-6">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="mission" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  Blue Sky Training and Development is dedicated to empowering the childcare workforce by providing
                  innovative, insightful, and immersive professional development solutions in the hopes that we will
                  make an impact and contribute to the dissemination of high-quality childcare.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/mission-image.jpg`}
                  alt="Childcare professionals collaborating"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-sky-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <GraduationCap className="w-8 h-8" />,
                  title: "Professional Training",
                  description: "Comprehensive courses designed for childcare providers",
                },
                {
                  icon: <Calendar className="w-8 h-8" />,
                  title: "Flexible Schedule",
                  description: "Learn at your own pace with our flexible programs",
                },
                {
                  icon: <Users2 className="w-8 h-8" />,
                  title: "Expert Guidance",
                  description: "Learn from experienced childcare professionals",
                },
                {
                  icon: <Plane className="w-8 h-8" />,
                  title: "Career Growth",
                  description: "Advance your childcare career with our support",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-xl">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

