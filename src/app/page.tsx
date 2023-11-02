import Services from "@/components/view/AvailableServices/Services";

import Banner from "@/components/ui/Banner/Banner";
import Faq from "@/components/ui/Faq/Faq";
import Footer from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar/NavBar";
import UpcomingServices from "@/components/view/UpComingServices/UpcomingServices";
import ClientReview from "@/components/ui/Slider/Slider";
import { FloatButton } from "antd";
import NewsCard from "@/components/ui/LatestUpdateCard/LatestUpdateCard";
import LatestUpdate from "@/components/view/LatestUpdate/LatestUpdate";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="px-3 lg:px-5 ">
        <Services></Services>
        <UpcomingServices></UpcomingServices>
        <LatestUpdate></LatestUpdate>
        <Faq></Faq>
        <ClientReview></ClientReview>
      </div>

      <Footer></Footer>
    </>
  );
}
