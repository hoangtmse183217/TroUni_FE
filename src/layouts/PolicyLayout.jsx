import React from "react";
import SidebarPolicy from "../components/SidebarPolicy";
import Breadcrumb from "../components/Breadcrumb";
import CustomerSupport from "../components/CustomerSupport";
import { useLocation } from "react-router-dom";

function PolicyLayout({ children }) {
  const location = useLocation();
  const breadcrumbItems = [
    { label: "Trang chủ", to: "/" },
    { label: "Thông tin" },
  ];

  return (
    <div className="px-4 py-4 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-2">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
        {/* Sidebar */}
        <aside className="bg-white shadow-md rounded-xl p-2 h-fit sticky top-24">
          <SidebarPolicy selected={location.pathname} />
        </aside>

        {/* Content */}
        <main className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
          {children}
        </main>
      </div>

      {/* Customer Support */}
      <div className="mt-12">
        <CustomerSupport />
      </div>
    </div>
  );
}

export default PolicyLayout;
