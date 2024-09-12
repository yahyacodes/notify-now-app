import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Slack, Github, Twitter, Zap, ArrowRight } from "lucide-react";

const integrations = [
  {
    name: "Email",
    description: "Send notifications directly to your users' inboxes.",
    icon: Mail,
    categories: ["Communication", "Marketing"],
  },
  {
    name: "Slack",
    description: "Keep your team in the loop with Slack channel notifications.",
    icon: Slack,
    categories: ["Team Collaboration", "Productivity"],
  },
  {
    name: "GitHub",
    description: "Notify developers about repository events and pull requests.",
    icon: Github,
    categories: ["Development", "Version Control"],
  },
  {
    name: "Twitter",
    description:
      "Automate tweets and engage with your audience on social media.",
    icon: Twitter,
    categories: ["Social Media", "Marketing"],
  },
  //   {
  //     name: "Trello",
  //     description: "Update cards and notify team members about project changes.",
  //     icon: Trello,
  //     categories: ["Project Management", "Productivity"],
  //   },
  //   {
  //     name: "Dropbox",
  //     description: "Send alerts for file changes and shared folder activities.",
  //     icon: Github,
  //     categories: ["File Sharing", "Collaboration"],
  //   },
];

const IntegrationCard = ({
  integration,
}: {
  integration: (typeof integrations)[number];
}) => {
  if (!integration?.icon) {
    return null;
  }

  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex gap-4">
          <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <integration.icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-lg">{integration.name}</CardTitle>
        </div>
        <CardDescription>{integration.description}</CardDescription>
      </CardHeader>
      <div className="px-6 pb-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {integration.categories.map((category, index) => (
            <Badge key={index} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

const NotifyNowIntegrations = () => {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-36">
      <div className="container mx-auto px-4">
        <div className="flex gap-4">
          <div className="mt-5">
            <div className="bg-blue-50 p-1 border border-primary max-w-40 rounded-full mb-4">
              <div className="flex gap-2">
                <Zap className="text-primary w-4 h-4" />
                <p className="text-primary text-xs">NotifyNow Integrations</p>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-xl">
              Connect NotifyNow with your favorite tools and platforms. Our API
              makes it easy to integrate NotifyNow with any custom solution.
            </p>
            <div className="flex gap-6">
              <div>
                <h1 className="font-bold text-xl text-gray-900">99.99%</h1>
                <p className="text-gray-600">Uptime</p>
              </div>
              <div className="w-px h-12 bg-primary" />

              <div>
                <h1 className="font-bold text-xl text-gray-900">50K+</h1>
                <p className="text-gray-600">Active API Users</p>
              </div>
              <div className="w-px h-12 bg-primary" />

              <div>
                <h1 className="font-bold text-xl text-gray-900">4.8/5</h1>
                <p className="text-gray-600">Average User Rating </p>
              </div>
            </div>
            <p className="text-primary flex gap-4 mt-10 cursor-pointer">
              View Our API Documentation
              <ArrowRight />
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <IntegrationCard key={index} integration={integration} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotifyNowIntegrations;
