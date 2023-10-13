import Navbar from "@/components/Navbar/NavBar";
import Contents from "@/components/ui/Content";
import SideBar from "@/components/ui/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { Layout } from "antd";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <div className="absolute lg:static">
        <SideBar />
      </div>

      <Contents>{children}</Contents>
    </Layout>
  );
};

export default AdminLayout;
