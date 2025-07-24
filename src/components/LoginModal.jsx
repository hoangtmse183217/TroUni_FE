import React, { useState } from "react";
import { X } from "lucide-react";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl transform transition-all scale-100 z-10">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          onClick={onClose}
        >
          <X size={20} className="text-gray-500 hover:text-gray-700" />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Đăng nhập hoặc tạo tài khoản
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Bạn có thể đăng nhập tài khoản TroUni của mình để truy cập các dịch vụ
          của chúng tôi.
        </p>

        {/* Email Input */}
        <label className="block mb-2 font-medium text-sm text-gray-700">
          Địa chỉ email
        </label>
        <input
          type="email"
          placeholder="Nhập địa chỉ email của bạn"
          className="w-full border border-gray-300 px-4 py-2.5 rounded-lg mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        />

        {/* Continue Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg">
          Tiếp tục với email
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 text-gray-500 bg-white">
              hoặc sử dụng một trong các lựa chọn này
            </span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-md">
            <img src="/google.webp" alt="Google" className="w-6 h-6" />
          </button>
          <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-md">
            <img src="/facebook.webp" alt="Facebook" className="w-6 h-6" />
          </button>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 mt-8 text-center leading-relaxed">
          Bằng việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
          >
            Điều khoản và Điều kiện
          </a>{" "}
          cùng như{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
          >
            Chính sách Bảo mật
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
