import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";
import ClientReview from "@/components/ui/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Faq></Faq>
      <ClientReview></ClientReview>
      <Footer></Footer>
    </div>
  );
}
