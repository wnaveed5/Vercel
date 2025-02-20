"use client"; // Keep this since you're using interactive components

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NextSeo } from "next-seo";

export default function FAQ() {
  const faqs = [
    {
      question: "What types of training programs do you offer?",
      answer: "We offer a wide range of programs including Child Development Fundamentals, Safety and First Aid, Curriculum Planning, and Leadership in Childcare.",
    },
    {
      question: "How long are the training programs?",
      answer: "Program lengths vary from 4 to 12 weeks, depending on the course content and depth.",
    },
  ];

  return (
    <>
      <NextSeo
        title="Frequently Asked Questions"
        description="Find answers to common questions about our childcare training programs and services."
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-gray-600 text-lg">
                Find answers to common questions about our training programs and services.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
