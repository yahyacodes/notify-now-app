"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is NotifyNow?",
    answer:
      "NotifyNow is a powerful SaaS platform that enables businesses to send instant notifications across multiple channels, including email, SMS, and push notifications. It's designed to enhance customer engagement and streamline communication processes.",
  },
  {
    question: "How does NotifyNow improve customer engagement?",
    answer:
      "NotifyNow allows you to send timely, personalized notifications to your customers, keeping them informed and engaged. Whether it's order updates, appointment reminders, or promotional offers, NotifyNow ensures your messages reach your audience quickly and effectively.",
  },
  {
    question: "Is NotifyNow suitable for my industry?",
    answer:
      "Yes! NotifyNow is versatile and can be adapted to various industries, including e-commerce, healthcare, education, finance, and more. Our flexible API and integration options allow you to tailor the platform to your specific needs.",
  },
  {
    question: "How secure is NotifyNow?",
    answer:
      "Security is our top priority. NotifyNow uses bank-level encryption to protect your data and your customers' information. We also comply with industry standards and regulations to ensure the highest level of data protection and privacy.",
  },
  {
    question: "Can I integrate NotifyNow with my existing systems?",
    answer:
      "NotifyNow offers robust API and webhooks that allow for seamless integration with your existing CRM, e-commerce platform, or any other business systems you use. Our documentation provides detailed guidance on integration processes.",
  },
  {
    question: "What kind of customer support does NotifyNow offer?",
    answer:
      "We provide comprehensive customer support to ensure your success with NotifyNow. This includes 24/7 technical support, detailed documentation, video tutorials, and a dedicated account manager for enterprise clients. We're committed to helping you make the most of our platform.",
  },
];

function FAQItem({
  question,
  answer,
  isOpenByDefault = false,
}: {
  question: string;
  answer: string;
  isOpenByDefault?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <div className="border-b py-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}

export default function FAQSection() {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-36">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpenByDefault={index === 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
