import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/NavBar";
import Header from "@/components/ui/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
