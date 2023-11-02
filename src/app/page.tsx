import Services from "@/components/view/AvailableServices/Services";

import Banner from "@/components/Banner/Banner";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/ui/Navbar/NavBar";
import UpcomingServices from "@/components/view/UpComingServices/UpcomingServices";
import ClientReview from "@/components/ui/Slider/Slider";
import { FloatButton } from "antd";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="px-3 lg:px-5 ">
        <Services></Services>
        <UpcomingServices></UpcomingServices>
        <Faq></Faq>
        <ClientReview></ClientReview>
      </div>

      <Footer></Footer>
    </>
  );
}
