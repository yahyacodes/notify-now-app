import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PricingSection() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-36">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
            Pricing Plans
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-accent md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the perfect plan for your notification needs
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>
                For small projects and individuals
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-3xl font-bold">
                $9<span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Up to 1,000
                  notifications/month
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Email notifications
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Basic analytics
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col transition-all hover:shadow-lg border-primary">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-3xl font-bold">
                $29<span className="text-sm font-normal">/month</span>
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Up to 10,000
                  notifications/month
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Email & SMS notifications
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Advanced analytics
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Custom branding
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="default">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large-scale operations</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-3xl font-bold">Custom</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Unlimited notifications
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> All notification channels
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Advanced analytics &
                  reporting
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> Dedicated support
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> SLA guarantees
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
