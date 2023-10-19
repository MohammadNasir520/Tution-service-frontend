import Services from "@/components/AvailableServices/Services";
import AvailableServices from "@/components/AvailableServices/Services";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";
import UpcomingServices from "@/components/UpComingServices/UpcomingServices";
import ClientReview from "@/components/ui/Slider/Slider";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="px-3 lg:px-5">
        <Services></Services>
        <UpcomingServices></UpcomingServices>
        <Faq></Faq>
        <ClientReview></ClientReview>
      </div>
      <Footer></Footer>
    </>
  );
}
