"use client";

import Spinner from "@/components/Spinner/Spinner";
import Contents from "@/components/ui/Content";
import SideBar from "@/components/ui/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { isLoggedIn } from "@/services/authServices";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default AdminLayout;
