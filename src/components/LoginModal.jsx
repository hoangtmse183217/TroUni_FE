import React from "react";
import { X, Mail } from "lucide-react";

// Component con cho các nút đăng nhập mạng xã hội để code gọn hơn
// Cải tiến lớn: Thêm văn bản để nút rõ ràng hơn cho người dùng
const SocialButton = ({ icon, label }) => (
  <button className="flex w-full items-center justify-center space-x-3 rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:shadow-sm">
    <img src={icon} alt={`${label} logo`} className="h-5 w-5" />
    <span>Tiếp tục với {label}</span>
  </button>
);

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // Backdrop với hiệu ứng mờ dần khi xuất hiện
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Nội dung Modal - thêm animation trượt lên và mờ dần vào */}
      <div
        className="relative w-full max-w-md transform rounded-2xl bg-white p-8 shadow-2xl transition-transform duration-500 ease-out animate-slide-up"
        onClick={(e) => e.stopPropagation()} // Ngăn việc nhấn vào modal bị đóng
      >
        {/* Nút đóng được thiết kế lại */}
        <button
          className="absolute top-4 right-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Header - tinh chỉnh font và màu sắc */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Chào mừng bạn
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Đăng nhập hoặc đăng ký để bắt đầu hành trình của bạn.
          </p>
        </div>

        <form className="space-y-5">
          {/* Input với Icon - trông hiện đại và trực quan hơn */}
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Địa chỉ email
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                className="w-full rounded-lg border border-slate-300 bg-slate-50 py-3 pl-11 pr-4 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Nút chính với hiệu ứng được tăng cường */}
          <button className="flex w-full transform items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg active:scale-95">
            Tiếp tục với Email
          </button>
        </form>

        {/* Dải phân cách được làm tinh tế hơn */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-3 text-slate-400">hoặc</span>
          </div>
        </div>

        {/* Nút đăng nhập mạng xã hội được thiết kế lại, rõ ràng và thân thiện hơn */}
        <div className="space-y-3">
          <SocialButton icon="/google.webp" label="Google" />
          <SocialButton icon="/facebook.webp" label="Facebook" />
        </div>

        {/* Điều khoản */}
        <p className="mt-8 text-center text-xs text-slate-500 leading-relaxed">
          Bằng việc tiếp tục, bạn đồng ý với{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Điều khoản Dịch vụ
          </a>{" "}
          và{" "}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Chính sách Bảo mật
          </a>{" "}
          của TroUni.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
