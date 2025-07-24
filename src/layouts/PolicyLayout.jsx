import React from "react";
import { useLocation } from "react-router-dom";
import SidebarPolicy from "../components/SidebarPolicy";
import Breadcrumb from "../components/Breadcrumb";
import CustomerSupport from "../components/CustomerSupport";

// Giả sử bạn có thể import mảng này từ một file chung hoặc từ SidebarPolicy
const policyItems = [
  { label: "Điều khoản sử dụng", path: "/terms-of-use" },
  { label: "Điều khoản cam kết", path: "/terms-and-conditions" },
  { label: "Quy chế hoạt động", path: "/terms-of-operation" },
  { label: "Chính sách bảo mật", path: "/privacy-policy" },
  { label: "Giải quyết khiếu nại", path: "/complaint-policy" },
];

function PolicyLayout({ children }) {
  const location = useLocation();

  // Logic để làm cho Breadcrumb động
  const currentItem = policyItems.find(
    (item) => item.path === location.pathname
  );
  const breadcrumbItems = [
    { label: "Trang chủ", to: "/" },
    // Nếu tìm thấy trang hiện tại trong danh sách, hiển thị label của nó
    currentItem ? { label: currentItem.label } : { label: "Thông tin" },
  ];

  return (
    // Sử dụng nền màu xám nhạt để làm nổi bật các khối nội dung trắng
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Main Grid - Tăng khoảng cách giữa các cột */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] lg:gap-16">
          {/* Sidebar - Container không cần style, để component con tự quyết định */}
          <aside className="h-fit sticky top-24">
            <SidebarPolicy selected={location.pathname} />
          </aside>

          {/* Content - Thiết kế lại để trông tinh tế hơn */}
          <main className="min-h-[60vh] rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            {children}
          </main>
        </div>

        {/* Customer Support - Tách biệt rõ ràng hơn */}
        <section className="mt-16 border-t border-slate-200 pt-16">
          <CustomerSupport />
        </section>
      </div>
    </div>
  );
}

export default PolicyLayout;
