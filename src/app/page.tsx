import Services from "@/components/view/AvailableServices/Services";

import Banner from "@/components/ui/Banner/Banner";
import Faq from "@/components/ui/Faq/Faq";
import Footer from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar/NavBar";
import UpcomingServices from "@/components/view/UpComingServices/UpcomingServices";
import ClientReview from "@/components/ui/Slider/Slider";

import NewsCard from "@/components/ui/LatestUpdateCard/LatestUpdateCard";
import LatestUpdate from "@/components/view/LatestUpdate/LatestUpdate";
import ServiceByCategory from "@/components/ui/ServiceByCategory/ServiceByCategory";
import TuitionPost from "@/components/view/TuitionPost/TuitionPost";
import Tutor from "@/components/view/tutor/Tutor";
import HomePageTutorStatics from "@/components/ui/HomePageTutorStatistics/HomePageTutorStatics";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="px-3 lg:px-5 ">
        <TuitionPost></TuitionPost>

        <Tutor></Tutor>

        <HomePageTutorStatics></HomePageTutorStatics>
        <Services></Services>
        <UpcomingServices></UpcomingServices>
        <ServiceByCategory></ServiceByCategory>
        <LatestUpdate></LatestUpdate>
        <Faq></Faq>
        <ClientReview></ClientReview>
      </div>

      <Footer></Footer>
    </>
  );
}
