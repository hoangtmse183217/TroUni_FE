// src/layouts/LandlordHomeLayout.js

import React from "react";
// SỬA ĐỔI: Import thêm Outlet
import { useLocation, Outlet } from "react-router-dom";
import LandlordHeader from "../components/LandlordHeader";
import Footer from "../components/Footer";

const LandlordHomeLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <LandlordHeader />

      {/* Có thể thêm Banner nếu cần như: location.pathname === "/dashboard" && <DashboardBanner /> */}

      <main className="flex-grow bg-gray-50">
        {/* 
          SỬA ĐỔI: Dùng <Outlet /> tại đây.
          Đây là nơi nội dung của các route con (như Dashboard, Listings, Analytics,...) sẽ được hiển thị.
        */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default LandlordHomeLayout;
