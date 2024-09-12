import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Bell,
  Gauge,
  Smartphone,
  BarChart2,
  Github,
  Puzzle,
} from "lucide-react";

const FeatureIcon = ({
  icon: Icon,
}: {
  icon: React.ElementType | null | undefined;
}) => {
  if (!Icon) {
    return null;
  }

  return (
    <div className="flex">
      <div className="mb-4 text-primary bg-blue-50 p-2 rounded-full">
        <Icon className="h-6 w-6" />
      </div>
    </div>
  );
};

const features = [
  {
    title: "Instant Notifications",
    description:
      "Send real-time alerts to your users across multiple channels.",
    icon: Bell,
  },
  {
    title: "Performance Metrics",
    description: "Track delivery rates and engagement with detailed analytics.",
    icon: Gauge,
  },
  {
    title: "Mobile SDK",
    description:
      "Easily integrate notifications into your mobile applications.",
    icon: Smartphone,
  },
  {
    title: "Customizable Templates",
    description:
      "Create and manage notification templates for consistent messaging.",
    icon: Puzzle,
  },
  {
    title: "API Integration",
    description:
      "Seamlessly connect NotifyNow with your existing systems via our API.",
    icon: Github,
  },
  {
    title: "Insights Dashboard",
    description:
      "Gain valuable insights with our comprehensive reporting dashboard.",
    icon: BarChart2,
  },
];

const NotifyNowFeatures = () => {
  return (
    <main>
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-44">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Powerful Features for Seamless Notifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className=" transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex gap-4">
                  <FeatureIcon icon={feature.icon} />
                  <CardTitle className="mt-2">{feature.title}</CardTitle>
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default NotifyNowFeatures;
