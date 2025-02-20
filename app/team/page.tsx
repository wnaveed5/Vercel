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
      name: "Consuelo Haller",
      role: "Founder & Lead Trainer",
      bio: "With over 25 years in childcare and dual master's degrees in Business and Early Childhood Education, Consuelo founded BlueSky to transform Texas childcare education. Her vision focuses on empowering educators with high-quality training to create enriching environments for children across the state.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_Wb1l1ND.jpg-GPE6Ta7ZKcDLh2NlYjG1iPYuOmxiUH.webp",
    },
    {
      name: "Aurora Haller",
      role: "Administrator",
      bio: "Aurora Haller, our Administrator, has 26+ years of experience owning and operating a childcare center. With a degree in Education, her passion for nurturing children creates a thriving learning environment. She is dedicated to empowering educators to reach their full potential.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_7727-768x576.jpg-DHtkuirtZQh3DsEA1iQ9UEiSX7hTLf.webp",
    },
    {
      name: "Cheryl Greene",
      role: "Curriculum Developer",
      bio: "Cheryl Greene brings over 40 years of experience as a Director and 30+ years in childcare training. A Trainer of the Year awardee, she is passionate about educating future childcare professionals, especially in CDA (Child Development Associate) classes. She finds joy in mentoring and empowering teachers to reach their full potential in this rewarding field.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_40j5jd-1024x681-landscape-30d367d51b42069f01494a6f035f58f9-.jpg-wOrDybGEtyXUnrarg77CaZWNcHkHsl.jpeg",
    },
    {
      name: "Beverly Olasimbo",
      role: "Training Director",
      bio: "Beverly Olasimbo has over 25 years of experience in childcare, holding both a CDA and Director Credential. Passionate about mentoring childcare workers, she empowers them to reach their full potential. Her enthusiasm for working with children inspires both educators and young learners to thrive.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_5ZQOk3w-150x150.jpg-JUteVcXtUOATZDtrmIgWqV7ajCO3h8.jpeg",
    },
    {
      name: "Diana Correa",
      role: "Child Development Specialist",
      bio: "Diana Correa, with an Associate's in Early Childhood Education, CDA, and Director Credential, is a bilingual educator passionate about training and inspiring teachers. She empowers educators to enhance their teaching and instill a love for learning in their students.",
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
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
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

