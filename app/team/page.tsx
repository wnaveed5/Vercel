import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export const metadata = {
  title: "Meet The Team",
  description: "Get to know our experienced team of childcare training professionals.",
}

export default function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Trainer",
      bio: "With over 15 years of experience in early childhood education, Sarah leads our training programs with passion and expertise.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_Wb1l1ND.jpg-GPE6Ta7ZKcDLh2NlYjG1iPYuOmxiUH.webp",
    },
    {
      name: "Michael Chen",
      role: "Curriculum Developer",
      bio: "Michael specializes in creating engaging and effective learning materials for childcare professionals.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_40j5jd-1024x681-landscape-30d367d51b42069f01494a6f035f58f9-.jpg-wOrDybGEtyXUnrarg77CaZWNcHkHsl.jpeg",
    },
    {
      name: "Lisa Rodriguez",
      role: "Training Coordinator",
      bio: "Lisa ensures smooth operation of all our training programs and provides support to our students.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_5ZQOk3w-150x150.jpg-JUteVcXtUOATZDtrmIgWqV7ajCO3h8.jpeg",
    },
    {
      name: "David Thompson",
      role: "Child Development Specialist",
      bio: "David brings his extensive knowledge of child psychology and development to our advanced courses.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_40j5jd-150x150.jpg-VPbpQVKTZxecaGBbT9Ds5gVPnvHybN.jpeg",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-gray-600 text-lg">
            Our experienced professionals are dedicated to providing the highest quality training and support for
            childcare providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h2 className="text-xl font-semibold mb-1">{member.name}</h2>
                <p className="text-sky-600 mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@blueskytd.com`}
                    className="text-gray-400 hover:text-sky-600"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

