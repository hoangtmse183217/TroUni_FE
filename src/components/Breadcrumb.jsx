import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

function Breadcrumb({ items }) {
  return (
    // Container chính với nền nhẹ và bo tròn, tạo cảm giác như một component riêng biệt
    <nav className="flex items-center space-x-1.5 rounded-lg bg-slate-50 p-2 text-sm">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {/* Dấu phân cách, hiển thị trước các item trừ item đầu tiên */}
          {index > 0 && (
            <ChevronRight className="h-4 w-4 flex-shrink-0 text-slate-400" />
          )}

          {/* Kiểm tra xem item có phải là link hay không */}
          {item.to ? (
            <Link
              to={item.to}
              className="flex items-center gap-2 rounded-md px-3 py-1.5 text-slate-600 transition-all duration-200 hover:bg-white hover:text-blue-600 hover:shadow-sm"
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {/* Thêm icon Home cho item đầu tiên */}
              {index === 0 && <Home className="h-4 w-4 flex-shrink-0" />}
              <span>{item.label}</span>
            </Link>
          ) : (
            // Item cuối cùng (trang hiện tại)
            <span className="flex items-center gap-2 rounded-md px-3 py-1.5 font-semibold text-slate-800">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumb;

/*
  CÁCH SỬ DỤNG:

  const breadcrumbItems = [
    { label: "Trang chủ", to: "/" },
    { label: "Nhà cho thuê", to: "/nha-cho-thue" },
    { label: "Căn hộ cao cấp tại Quận 2" }, // Item cuối không cần 'to'
  ];

  return <Breadcrumb items={breadcrumbItems} />;
*/
