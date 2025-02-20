import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about our childcare training programs and services.",
}

export default function FAQ() {
  const faqs = [
    {
      question: "What types of training programs do you offer?",
      answer:
        "We offer a wide range of programs including Child Development Fundamentals, Safety and First Aid, Curriculum Planning, and Leadership in Childcare. Our courses are designed to meet various skill levels and professional development needs.",
    },
    {
      question: "How long are the training programs?",
      answer:
        "Program lengths vary from 4 to 12 weeks, depending on the course content and depth. We offer flexible scheduling options to accommodate working professionals.",
    },
    {
      question: "Are your programs certified?",
      answer:
        "Yes, all our programs are certified and meet state requirements for childcare professional development. Upon completion, you'll receive a recognized certification.",
    },
    {
      question: "Can I take courses online?",
      answer:
        "Yes, we offer both online and in-person training options. Our online courses provide the same high-quality content with added flexibility.",
    },
    {
      question: "What are the payment options?",
      answer:
        "We accept various payment methods including credit cards and payment plans. Some employers may qualify for group discounts.",
    },
    {
      question: "Do you offer job placement assistance?",
      answer:
        "While we don't directly place graduates, we maintain strong relationships with local childcare facilities and can provide networking opportunities and job search guidance.",
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our training programs and services.
            </p>
          <p>Want to learn more? Visit our <a href="/houston-childcare-training">Texas Childcare Training in Houston</a> page.</p>
</div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Still have questions?{" "}
              <a href="/contact" className="text-sky-600 hover:underline">
                Contact us
              </a>{" "}
              for more information.
            </p>
          <p>Want to learn more? Visit our <a href="/houston-childcare-training">Texas Childcare Training in Houston</a> page.</p>
</div>
        <p>Want to learn more? Visit our <a href="/houston-childcare-training">Texas Childcare Training in Houston</a> page.</p>
</div>
      <p>Want to learn more? Visit our <a href="/houston-childcare-training">Texas Childcare Training in Houston</a> page.</p>
</div>
    <p>Want to learn more? Visit our <a href="/houston-childcare-training">Texas Childcare Training in Houston</a> page.</p>
</div>
  )
}

