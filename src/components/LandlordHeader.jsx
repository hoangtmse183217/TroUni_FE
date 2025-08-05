import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LogIn,
  UserPlus,
  ArrowRight,
  Menu,
  X,
  LayoutDashboard,
  AppWindow,
  BadgeDollarSign,
  Newspaper,
  Home,
} from "lucide-react";

// Component con cho link điều hướng với hiệu ứng gạch chân
const NavLink = ({ children, href, isActive }) => (
  <Link
    to={href}
    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-blue-600"
    }`}
  >
    {children}
    {/* Dấu gạch chân cho item active */}
    <span
      className={`absolute bottom-0 left-1/2 h-0.5 w-full -translate-x-1/2 transform bg-blue-600 transition-all duration-300 ${
        isActive ? "scale-x-100" : "scale-x-0"
      }`}
    />
  </Link>
);

// === COMPONENT HEADER CHÍNH (PHIÊN BẢN GIỚI THIỆU) ===
const LandlordHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Dữ liệu cho các link điều hướng mang tính giới thiệu
  // href có thể trỏ đến các mục trên cùng một trang landing page hoặc các trang con thông tin
  const navItems = [
    {
      name: "Tính năng",
      href: "/landlord/landlord-features",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Ứng dụng",
      href: "/landlord/landlord-apps",
      icon: <AppWindow size={20} />,
    },
    {
      name: "Bảng giá",
      href: "/landlord/pricing",
      icon: <BadgeDollarSign size={20} />,
    },
    { name: "Về trang chủ", href: "/", icon: <Home size={20} /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/landlord/*"
            className="flex flex-shrink-0 items-center space-x-2"
          >
            <img
              src="/Logo.png" // Logo của bạn
              alt="TroUni Logo"
              className="h-10 w-10 rounded-lg object-contain"
            />
            <span className="text-2xl font-bold text-blue-700 tracking-tight">
              TroUni
            </span>
          </Link>

          {/* Điều hướng cho Desktop */}
          <nav className="hidden items-center space-x-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                isActive={
                  location.pathname.startsWith(item.href) && item.href !== "/"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions cho Desktop: Kêu gọi Đăng nhập / Đăng ký */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link
              to="/landlord-login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-600"
            >
              Đăng nhập
            </Link>
            <Link
              to="/landlord-login" // Thường dẫn đến cùng trang đăng nhập/đăng ký
              className="rounded-lg bg-blue-100/50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
            >
              Đăng ký
            </Link>
            <Link
              to="/landlord-login" // Nút chính cũng dẫn đến trang đăng nhập
              className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <ArrowRight className="h-4 w-4" />
              <span>Trang quản lý</span>
            </Link>
          </div>

          {/* Nút Hamburger cho Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu cho Mobile */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 md:hidden">
          <nav className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 rounded-md px-3 py-2 text-base font-medium ${
                  location.pathname.startsWith(item.href) && item.href !== "/"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="border-t border-gray-200 px-4 pt-4 pb-3">
            <div className="space-y-3">
              <Link
                to="/landlord-login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 rounded-lg px-3 py-2 font-medium text-gray-600 hover:bg-gray-100"
              >
                <LogIn className="h-5 w-5 text-gray-500" />
                <span>Đăng nhập</span>
              </Link>
              <Link
                to="/landlord-login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg bg-blue-600 py-3 text-white w-full flex justify-center items-center space-x-2"
              >
                <ArrowRight className="h-5 w-5" />
                <span>Đăng ký & Quản lý</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandlordHeader;
