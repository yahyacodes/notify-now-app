import { DiamondPlus } from "lucide-react";
import Logos from "./Logos";
import { Button } from "./ui/button";

export default function CTASection() {
  return (
    <main className="flex flex-col container mx-auto items-center py-16 sm:py-24 lg:py-36 px-4">
      {/* Floating Avatars */}
      <div className="relative mb-10 flex justify-center items-center h-20 w-full">
        <span className="absolute top-0 left-0 xl:left-52 text-primary border shadow-lg shadow-primary/40 rounded-full px-4 py-1">
          Instant
        </span>
        <span className="absolute top-2 right-10 md:right-32 xl:right-96  text-primary border shadow-lg shadow-primary/40 rounded-full px-4 py-1">
          Reliable
        </span>
        <span className="absolute md:top-10 top-12 left-10 xl:left-80 text-primary border shadow-lg shadow-primary/40 rounded-full px-4 py-1">
          Secure
        </span>
        <span className="absolute md:bottom-0 -bottom-2 right-4 xl:right-64 text-primary border shadow-lg shadow-primary/40 rounded-full px-4 py-1">
          Scalable
        </span>
        <div className="absolute h-10 w-10 bg-primary rounded-md flex items-center justify-center border">
          {/* Icon in center */}
          <DiamondPlus className="text-white" />
        </div>
      </div>

      {/* Main Text */}
      <h2 className="text-3xl font-semibold text-center mb-4 text-gray-900">
        Instant Notifications for Seamless Communication
      </h2>
      <p className="text-gray-500 text-center mb-8">
        Trusted by over 50k+ businesses to send real-time alerts that keep users
        engaged and informed.
      </p>

      {/* CTA Buttons */}
      <div className="flex space-x-4">
        <Button className="px-6 py-3 text-lg font-semibold transition">
          Start Free Trial
        </Button>
        <Button
          variant="outline"
          className="px-6 py-3 text-lg font-semiboldtransition text-primary"
        >
          Request Demo
        </Button>
      </div>

      {/* Logos */}
      <Logos />
    </main>
  );
}
