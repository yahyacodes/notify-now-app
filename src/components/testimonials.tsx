import Image from "next/image";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Manager",
    company: "Layers",
    content:
      "NotifyNow has revolutionized our customer communication. Our engagement rates have skyrocketed since we started using it!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Sisyphus",
    content:
      "The reliability and speed of NotifyNow are unmatched. It's been a game-changer for our patient notification system.",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Marketing",
    company: "Circooles",
    content:
      "NotifyNow's multi-channel support has made it incredibly easy to reach our students across various platforms. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    name: "David Thompson",
    role: "Product Manager",
    company: "Catalog",
    content:
      "We've seen a significant increase in user engagement since implementing NotifyNow. It's intuitive and powerful!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Lisa Patel",
    role: "Customer Success",
    company: "Quotient",
    content:
      "NotifyNow has streamlined our communication process. Our customers love the timely updates, and we love the ease of use!",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "Alex Novak",
    role: "IT Director",
    company: "Hourglass",
    content:
      "The integration capabilities of NotifyNow are impressive. It fits seamlessly into our existing tech stack.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

export default function TestimonialsGrid() {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-36">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col hover:shadow-lg overflow-hidden transition-all"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <div className="flex gap-2">
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic flex-grow">
                  "{testimonial.content}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
