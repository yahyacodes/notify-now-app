import NotificationCard from "../components/notifications";
import NotifyNowFeatures from "@/components/features";
import NotifyNowUseCases from "@/components/use-cases";
import Navbar from "@/components/navbar";
import NotifyNowIntegrations from "@/components/integrations";
import NotifyNowFooter from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Navbar />
      <div className="mx-auto flex flex-col items-center justify-center">
        <NotificationCard />
        <NotifyNowFeatures />
        <NotifyNowUseCases />
        <NotifyNowIntegrations />
      </div>
      <NotifyNowFooter />
    </main>
  );
}
