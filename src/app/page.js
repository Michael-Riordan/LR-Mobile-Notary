
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Details from "./components/Details";
import ServiceInfo from "./components/ServiceInfo";
import ServicesList from "./components/ServicesList";
import PricingSection from "./components/Pricing";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> 
        <Hero />     
        <Details /> 
        <ServiceInfo /> 
        <ServicesList />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
