import React, { useState } from "react";
import { Megaphone, Smartphone, LogIn, UserPlus, Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Nhà trọ, phòng trọ");
  const navItems = [
    "Nhà trọ, phòng trọ",
    "Nhà nguyên căn",
    "Căn hộ",
    "Video Review",
    "Blog",
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300"
          >
            <img
              src="/Logo.png"
              alt="logo"
              className="w-14 h-14 object-contain rounded-xl shadow-lg group-hover:shadow-blue-300 transition-all duration-300 group-hover:rotate-3"
            />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent tracking-wide drop-shadow group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
              TroUni
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveNav(item)}
                className={`${
                  activeNav === item
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transform scale-105"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
                } relative overflow-hidden`}
              >
                {activeNav === item && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 animate-pulse"></div>
                )}
                <span className="relative z-10">{item}</span>
                {item}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center px-3 py-1.5 text-green-600 font-medium border border-green-200 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Smartphone className="w-4 h-4 mr-1" />
              Ứng dụng
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <a
              onClick={() => setIsLoginOpen(true)}
              className="cursor-pointer flex items-center text-blue-700 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
            >
              <LogIn className="w-4 h-4 mr-1" />
              Đăng nhập
            </a>
            <span className="text-gray-300">|</span>
            <a
              onClick={() => setIsLoginOpen(true)}
              className="cursor-pointer flex items-center text-blue-700 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
            >
              <UserPlus className="w-4 h-4 mr-1" />
              Đăng ký
            </a>
            <a
              href="#"
              className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Megaphone className="w-4 h-4 mr-1" />
              Quảng cáo Trọ
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2 bg-white/95 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => {
                  setActiveNav(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeNav === item
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <a
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer flex items-center text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Đăng nhập
              </a>
              <a
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer flex items-center text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Đăng ký
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
}

export default Header;
