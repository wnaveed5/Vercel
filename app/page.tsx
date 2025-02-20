import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users2, Calendar, Award } from "lucide-react";

export const metadata = {
  title: "State-Approved Texas Childcare Training | Sugar Land's Premier Provider",
  description:
    "Get Texas state-approved childcare training in Sugar Land. Comprehensive courses for CDA certification, professional development, and childcare provider requirements.",
  openGraph: {
    title: "State-Approved Texas Childcare Training | Sugar Land's Premier Provider",
    description:
      "Get Texas state-approved childcare training in Sugar Land. Expert-led courses for childcare professionals.",
  },
};

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-sky-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Texas State-Approved <span className="text-sky-600">Childcare Training</span> in Sugar Land
              </h1>
              <p className="text-xl text-gray-600">
                Get certified with BlueSky TD's comprehensive childcare training programs, approved by the Texas
                Workforce Commission. Serving Sugar Land, Houston, and surrounding areas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/texas-childcare-training">Explore Texas Programs</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Our Sugar Land Office</Link>
                </Button>
              <a href="/houston-childcare-training">Texas Childcare Training in Houston</a>
</div>
            <a href="/houston-childcare-training">Texas Childcare Training in Houston</a>
</div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmf_7727-768x576.jpg-DHtkuirtZQh3DsEA1iQ9UEiSX7hTLf.webp"
                alt="Texas childcare training session in Sugar Land facility"
                fill
                className="object-cover"
                priority
              />
            <a href="/houston-childcare-training">Texas Childcare Training in Houston</a>
</div>
          <a href="/houston-childcare-training">Texas Childcare Training in Houston</a>
</div>
        <a href="/houston-childcare-training">Texas Childcare Training in Houston</a>
</div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose BlueSky for Texas Childcare Training?</h2>
            <p className="text-gray-600">
              We provide state-approved training solutions tailored to Texas childcare requirements and regulations.
            </p>
          <a href="/houston-childcare-training">Texas Childcare Training in Houston</a>
</div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="h-8 w-8" />, 
                title: "Texas State Approved",
                description: "All courses meet Texas Workforce Commission requirements",
              },
              {
                icon: <Users2 className="h-8 w-8" />, 
                title: "Local Support",
                description: "Based in Sugar Land with expert Texas trainers",
              },
              {
                icon: <Calendar className="h-8 w-8" />, 
                title: "Flexible Schedule",
                description: "Convenient times for Houston area providers",
              },
              {
                icon: <Award className="h-8 w-8" />, 
                title: "Texas CDA Program",
                description: "Complete certification path for Texas providers",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4">
                    {feature.icon}
                  <a href="/houston-childcare-training">Texas Childcare Training in Houston</a>
</div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          <a href="/houston-childcare-training">Texas Childcare Training in Houston</a>
</div>
        <a href="/houston-childcare-training">Texas Childcare Training in Houston</a>
</div>
      </section>
    </>
  );
}

