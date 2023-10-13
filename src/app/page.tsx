import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";
import Spinner from "@/components/Spinner/Spinner";
import ClientReview from "@/components/ui/Slider/Slider";
import Button from "antd/es/button";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <ClientReview></ClientReview>
      <Footer></Footer>
    </div>
  );
}
