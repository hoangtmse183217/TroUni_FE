import React, { useState } from "react";
import { Megaphone, Smartphone, LogIn, UserPlus, Menu, X } from "lucide-react";
import LoginModal from "./LoginModal"; // Giả sử bạn có component này

// Một component con để làm cho code നാവിഗേഷൻ dễ đọc hơn
const NavLink = ({ children, href, isActive, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
    }`}
  >
    {children}
    {/* Dấu gạch chân cho item active */}
    <span
      className={`absolute bottom-0 left-1/2 h-0.5 w-full -translate-x-1/2 transform bg-blue-600 transition-all duration-300 ${
        isActive ? "scale-x-100" : "scale-x-0"
      }`}
    />
  </a>
);

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Nhà trọ, phòng trọ");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Nhà trọ, phòng trọ",
    "Nhà nguyên căn",
    "Căn hộ",
    "Video Review",
    "Blog",
  ];

  const handleNavClick = (item) => {
    setActiveNav(item);
    setIsMobileMenuOpen(false); // Đóng menu mobile khi chọn 1 item
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex flex-shrink-0 items-center space-x-3">
              <img
                src="/Logo.png" // Thay bằng logo của bạn
                alt="TroUni Logo"
                className="h-14 w-14 rounded-xl object-contain"
              />
              <span className="text-3xl font-bold text-blue-700 tracking-tight">
                TroUni
              </span>
            </a>

            {/* Navigation cho Desktop */}
            <nav className="hidden items-center space-x-2 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  href="#"
                  isActive={activeNav === item}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </NavLink>
              ))}
            </nav>

            {/* Actions cho Desktop */}
            <div className="hidden items-center space-x-4 md:flex">
              <a
                onClick={() => setIsLoginOpen(true)}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              >
                Đăng nhập
              </a>
              <a
                onClick={() => setIsLoginOpen(true)}
                className="cursor-pointer rounded-lg bg-blue-100/50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
              >
                Đăng ký
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-blue-700 transition-all hover:-translate-y-0.5"
              >
                <Megaphone className="h-4 w-4" />
                <span>Đăng tin</span>
              </a>
            </div>

            {/* Nút Hamburger cho Mobile */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menu cho Mobile */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => handleNavClick(item)}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    activeNav === item
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-800"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="border-t border-gray-200 px-4 pt-4 pb-3">
              <div className="space-y-3">
                <a
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex cursor-pointer items-center space-x-2 rounded-lg px-3 py-2 font-medium text-gray-600 hover:bg-gray-100"
                >
                  <LogIn className="h-5 w-5 text-gray-500" />
                  <span>Đăng nhập</span>
                </a>
                <a
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex cursor-pointer items-center space-x-2 rounded-lg px-3 py-2 font-medium text-gray-600 hover:bg-gray-100"
                >
                  <UserPlus className="h-5 w-5 text-gray-500" />
                  <span>Đăng ký</span>
                </a>
                <a
                  href="#"
                  className="mt-2 flex items-center justify-center space-x-2 rounded-lg bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-md hover:bg-blue-700 transition"
                >
                  <Megaphone className="h-5 w-5" />
                  <span>Đăng tin miễn phí</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default Header;
