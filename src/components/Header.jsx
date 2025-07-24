import React, { useState } from "react";
import { Megaphone, Smartphone, LogIn, UserPlus } from "lucide-react";
import LoginModal from "./LoginModal";

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Nhà trọ, phòng trọ");
  const navItems = [
    "Nhà trọ, phòng trọ",
    "Nhà nguyên căn",
    "Căn hộ",
    "Video Review",
    "Blog",
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 group hover:scale-105 transition-transform"
          >
            <img
              src="/Logo.png"
              alt="logo"
              className="w-14 h-14 object-contain rounded-xl shadow-lg group-hover:shadow-blue-200 transition-shadow"
            />
            <span className="text-3xl font-extrabold text-blue-700 tracking-wide drop-shadow group-hover:text-[#2F54EB] transition-colors">
              TroUni
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveNav(item)}
                className={`${
                  activeNav === item
                    ? "bg-[#2F54EB] text-white px-4 py-2 rounded-lg font-medium"
                    : "text-gray-700 hover:text-blue-600 transition-colors"
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center px-3 py-1.5 text-green-600 font-medium border border-green-100 rounded-lg bg-green-50 hover:bg-green-100 transition"
            >
              <Smartphone className="w-4 h-4 mr-1" />
              Ứng dụng
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <a
              onClick={() => setIsLoginOpen(true)}
              className="cursor-pointer flex items-center text-blue-700 hover:underline"
            >
              <LogIn className="w-4 h-4 mr-1" />
              Đăng nhập
            </a>
            <span className="text-gray-300">|</span>
            <a
              onClick={() => setIsLoginOpen(true)}
              className="cursor-pointer flex items-center text-blue-700 hover:underline"
            >
              <UserPlus className="w-4 h-4 mr-1" />
              Đăng ký
            </a>
            <a
              href="#"
              className="flex items-center bg-[#2F54EB] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1D39C4] transition"
            >
              <Megaphone className="w-4 h-4 mr-1" />
              Quảng cáo Trọ
            </a>
          </div>
        </div>
      </div>
      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
}

export default Header;
