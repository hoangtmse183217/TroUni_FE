import React from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Info,
  X,
  LoaderCircle,
} from "lucide-react";

// Cấu hình mới: Thêm màu nền (bgColor) cho icon
const toastDetails = {
  success: {
    icon: <CheckCircle2 size={22} />,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  error: {
    icon: <AlertTriangle size={22} />,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  info: {
    icon: <Info size={22} />,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  loading: {
    icon: <LoaderCircle size={22} className="animate-spin" />,
    bgColor: "bg-slate-100",
    iconColor: "text-slate-600",
  },
};

const CustomToast = ({
  type = "info",
  title = "Thông báo",
  message = "",
  closeToast,
}) => {
  const detail = toastDetails[type] || toastDetails["info"];

  return (
    // Container chính với bóng đổ và bo góc mềm mại hơn
    <div className="flex w-full max-w-sm items-center rounded-xl bg-white p-4 shadow-xl ring-1 ring-black ring-opacity-5">
      {/* Icon được đặt trong nền tròn */}
      <div
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${detail.bgColor}`}
      >
        <div className={detail.iconColor}>{detail.icon}</div>
      </div>

      {/* Phần nội dung text */}
      <div className="ml-4 flex-1">
        <p className="font-semibold text-slate-800">{title}</p>
        {message && (
          <p className="mt-1 text-sm text-slate-600 leading-snug">{message}</p>
        )}
      </div>

      {/* Nút đóng */}
      <button
        onClick={closeToast}
        className="ml-4 flex-shrink-0 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default CustomToast;
