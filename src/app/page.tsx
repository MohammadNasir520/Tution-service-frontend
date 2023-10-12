import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";
import Spinner from "@/components/Spinner/Spinner";
import Button from "antd/es/button";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Button type="primary"> button</Button>
      <Spinner></Spinner>
      <Footer></Footer>
    </div>
  );
}
