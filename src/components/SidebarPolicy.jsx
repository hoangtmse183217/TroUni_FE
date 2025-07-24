import React from "react";
import { Link } from "react-router-dom"; // Sử dụng Link thay vì button và navigate
import {
  FileText,
  ShieldCheck,
  ScrollText,
  Lock,
  AlertCircle,
} from "lucide-react";

// Tách mảng items ra ngoài để component chính gọn hơn
const policyItems = [
  { label: "Điều khoản sử dụng", path: "/terms-of-use", icon: FileText },
  {
    label: "Điều khoản cam kết",
    path: "/terms-and-conditions",
    icon: ShieldCheck,
  },
  { label: "Quy chế hoạt động", path: "/terms-of-operation", icon: ScrollText },
  { label: "Chính sách bảo mật", path: "/privacy-policy", icon: Lock },
  {
    label: "Giải quyết khiếu nại",
    path: "/complaint-policy",
    icon: AlertCircle,
  },
];

function SidebarPolicy({ selected }) {
  return (
    // Sử dụng thẻ <aside> cho đúng ngữ nghĩa và style lại container chính
    <aside className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-5 shadow-lg">
      <h3 className="mb-4 text-lg font-bold text-slate-800 px-2">
        Chính sách & Điều khoản
      </h3>
      <nav className="space-y-1">
        {policyItems.map((item) => {
          const Icon = item.icon;
          const isSelected = selected === item.path;

          return (
            <Link
              key={item.path}
              to={item.path} // Dùng prop 'to' của Link
              className={`
                group flex items-center w-full rounded-lg p-3 text-sm font-medium transition-all duration-200
                border-l-4 
                ${
                  isSelected
                    ? "border-blue-600 bg-blue-50 text-blue-700" // Style cho mục được chọn
                    : "border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-800" // Style cho mục không được chọn
                }
              `}
            >
              <Icon
                className={`
                  mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200
                  ${
                    isSelected
                      ? "text-blue-600"
                      : "text-slate-400 group-hover:text-slate-600"
                  }
                `}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default SidebarPolicy;
