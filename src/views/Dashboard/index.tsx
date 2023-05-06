import React from "react";
import { DashboardBody, DashboardContent } from "./styles";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardTopbar from "../../components/DashboardTopbar";
import DashboardSideNav from "../../components/SideNav";
import { Outlet } from "react-router-dom";

const MerchantsDashboard = () => {
  return (
    <DashboardLayout>
      <DashboardSideNav />
      <DashboardBody>
        <DashboardTopbar />
        <DashboardContent>
          <Outlet />
        </DashboardContent>
      </DashboardBody>
    </DashboardLayout>
  );
};

export default MerchantsDashboard;
