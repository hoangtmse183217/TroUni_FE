import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  ShieldCheck,
  ScrollText,
  Lock,
  AlertCircle,
} from "lucide-react";

function SidebarPolicy({ selected }) {
  const navigate = useNavigate();

  const items = [
    { label: "Điều khoản sử dụng", path: "/terms-of-use", icon: FileText },
    {
      label: "Điều khoản cam kết",
      path: "/terms-and-conditions",
      icon: ShieldCheck,
    },
    {
      label: "Quy chế hoạt động",
      path: "/terms-of-operation",
      icon: ScrollText,
    },
    { label: "Chính sách bảo mật", path: "/privacy-policy", icon: Lock },
    {
      label: "Giải quyết khiếu nại",
      path: "/complaint-policy",
      icon: AlertCircle,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-2">
      {items.map((item) => {
        const Icon = item.icon;
        const isSelected = selected === item.path;

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex items-center w-full px-4 py-2 text-left rounded-lg transition ${
              isSelected
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Icon size={18} className="mr-2" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default SidebarPolicy;
