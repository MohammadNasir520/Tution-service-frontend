import Services from "@/components/view/AvailableServices/Services";

import Banner from "@/components/Banner/Banner";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";
import UpcomingServices from "@/components/view/UpComingServices/UpcomingServices";
import ClientReview from "@/components/ui/Slider/Slider";
import { FloatButton } from "antd";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="px-3 lg:px-5">
        <div className="min-h-[500px]">
          <h1 className="text-center text-2xl">Our Available Services</h1>
          <Services></Services>
        </div>
        <div className="min-h-[500px] my-7">
          <h1 className="text-center text-2xl">Our Upcoming Services</h1>
          <UpcomingServices></UpcomingServices>
        </div>

        <Faq></Faq>
        <ClientReview></ClientReview>
      </div>
      {/* <FloatButton.BackTop visibilityHeight={0} /> */}
      <Footer></Footer>
    </>
  );
}
