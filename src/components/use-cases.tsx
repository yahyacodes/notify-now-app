import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Briefcase,
  HeartPulse,
  DraftingCompass,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const UseCaseIcon = ({
  icon: Icon,
}: {
  icon: React.ElementType | null | undefined;
}) => {
  if (!Icon) {
    return null;
  }

  return (
    <div className="flex">
      <div className="mb-4 felx p-2 rounded-full bg-blue-50">
        <Icon className="h-6 w-6 text-primary" />
      </div>
    </div>
  );
};

const useCases = [
  {
    title: "E-commerce",
    description:
      "Boost sales with timely notifications for orders, shipping, and personalized promotions.",
    icon: ShoppingCart,
    tags: ["Order Updates", "Promotions", "Abandoned Cart"],
  },
  {
    title: "SaaS Platforms",
    description:
      "Improve user retention with updates on new features, system changes, and account activity.",
    icon: Briefcase,
    tags: ["Feature Alerts", "Usage Notifications", "Onboarding"],
  },
  {
    title: "Healthcare",
    description:
      "Enhance patient care with reminders for appointments, medications, and personalized health tips.",
    icon: HeartPulse,
    tags: ["Appointments", "Medication Reminders", "Health Tips"],
  },
];

const UseCaseCard = ({ useCase }: { useCase: (typeof useCases)[number] }) => {
  if (!useCase) {
    return null;
  }

  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex gap-4">
          <UseCaseIcon icon={useCase.icon} />
          <CardTitle className="mt-3">{useCase.title}</CardTitle>
        </div>
        <CardDescription>{useCase.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {useCase.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const NotifyNowUseCases = () => {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-36">
      <div className="container mx-auto px-4">
        <div className="flex-noen lg:flex gap-4 mb-8">
          <div>
            <Image
              className="rounded-xl border transition-all hover:shadow-lg"
              src="/assets/use-cases-image.png"
              alt="Use-cases-image"
              width={600}
              height={600}
              quality={100}
            />
          </div>
          <div className="mx-0 lg:mx-10 mt-10 lg:mt-0">
            <div className="bg-blue-50 p-1 border border-primary max-w-40 rounded-full mb-4">
              <div className="flex gap-2">
                <DraftingCompass className="text-primary w-4 h-4" />
                <p className="text-primary text-xs">NotifyNow Use Cases</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              NotifyNow Use Cases
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Discover how NotifyNow transforms communication across industries
            </p>
            <div className="flex">
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start border rounded-full p-2">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-2 md:mt-0.5" />
                  <span className="text-sm md:text-md">
                    Boost engagement with timely, personalized notifications
                    across multiple channels.
                  </span>
                </div>
                <div className="flex items-start border rounded-full p-2">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-2 md:mt-0.5" />
                  <span className="text-sm md:text-md">
                    Streamline communication workflows and reduce manual
                    outreach efforts.
                  </span>
                </div>
                <div className="flex items-start border rounded-full p-2">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-2 md:mt-0.5" />
                  <span className="text-sm md:text-md">
                    Increase user retention by delivering relevant updates and
                    actionable information.
                  </span>
                </div>
                <div className="flex items-start border rounded-full p-2">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-2 md:mt-0.5" />
                  <span className="text-sm md:text-md">
                    Enhance decision-making with real-time alerts for critical
                    events and data changes.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotifyNowUseCases;
