import NotificationCard from "../components/notifications";
import NotifyNowFeatures from "@/components/features";
import NotifyNowUseCases from "@/components/use-cases";
import Navbar from "@/components/navbar";
import NotifyNowIntegrations from "@/components/integrations";
import NotifyNowFooter from "@/components/footer";
import PricingSection from "@/components/pricing";
import TestimonialsGrid from "@/components/testimonials";
import FAQSection from "@/components/faqs";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Navbar />
      <div className="">
        <NotificationCard />
        <NotifyNowFeatures />
        <NotifyNowUseCases />
        <NotifyNowIntegrations />
        <PricingSection />
        <TestimonialsGrid />
        <FAQSection />
        <CTASection />
      </div>
      <div className="py-12">
        <NotifyNowFooter />
      </div>
    </main>
  );
}
