import React, { useState, useEffect, useRef } from "react";
import {
  Megaphone,
  Menu,
  X,
  Bell,
  Heart,
  LogOut,
  Home,
  User,
  CreditCard,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useAuth } from "../contexts/AuthContext";
import CustomToast from "./CustomToast";
import ForgotPasswordModal from "./ForgotPasswordModal";

// NavLink component (không đổi)
const NavLink = ({ children, href, isActive, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
    }`}
  >
    {children}
    <span
      className={`absolute bottom-0 left-1/2 h-0.5 w-full -translate-x-1/2 transform bg-blue-600 transition-all duration-300 ${
        isActive ? "scale-x-100" : "scale-x-0"
      }`}
    />
  </a>
);

function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Nhà trọ, phòng trọ");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Danh sách các mục điều hướng
  const navItems = [
    "Nhà trọ, phòng trọ",
    "Nhà nguyên căn",
    "Căn hộ",
    "Ghép phòng",
    "Blog",
  ];

  // ✅ Tối ưu: Đưa các mục menu người dùng vào mảng
  const userMenuItems = [
    { href: "/profile", icon: Home, label: "Thông tin lưu trú" },
    { href: "#", icon: User, label: "Thông tin cá nhân" },
    { href: "#", icon: CreditCard, label: "Thông tin tài khoản" },
    { href: "/landlord-login", icon: Users, label: "Dành cho chủ trọ" },
  ];

  const handleNavClick = (item) => {
    setActiveNav(item);
    setIsMobileMenuOpen(false);
    // Thêm logic điều hướng nếu cần
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    setIsMobileMenuOpen(false); // Đóng cả menu mobile nếu đang mở
    logout();
    navigate("/");
  };

  // ✅ Thêm: Hàm hiển thị toast cho tính năng sắp có
  const handleFeatureComingSoon = (e) => {
    e.preventDefault();
    toast(
      ({ closeToast }) => (
        <CustomToast
          type="info"
          title="Thông báo"
          message="Tính năng này đang được phát triển, vui lòng quay lại sau."
          closeToast={closeToast}
        />
      ),
      { toastId: "coming-soon-toast" }
    );
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  // Animation variants
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  // ✅ Hàm để chuyển từ modal quên mật khẩu sang đăng nhập
  const handleSwitchToLogin = () => {
    setIsForgotPasswordOpen(false);
    setIsLoginOpen(true);
  };

  // ✅ Hàm để chuyển từ đăng nhập sang quên mật khẩu
  const handleSwitchToForgotPassword = () => {
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex flex-shrink-0 items-center space-x-3">
              <img
                src="/Logo.png"
                alt="TroUni Logo"
                className="h-14 w-14 rounded-xl object-contain"
              />
              <span className="text-3xl font-bold tracking-tight text-blue-700">
                TroUni
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
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

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              {user && (
                <>
                  {/* ✅ Thêm: onClick cho các nút sắp có */}
                  <a
                    href="#"
                    onClick={handleFeatureComingSoon}
                    aria-label="Thông báo"
                    className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Bell className="h-5 w-5 text-gray-600" />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-500"></span>
                  </a>
                  <a
                    href="#"
                    onClick={handleFeatureComingSoon}
                    aria-label="Bài đăng đã thích"
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Heart className="h-5 w-5 text-gray-600" />
                  </a>
                </>
              )}

              {!user ? (
                <>
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all"
                  >
                    Đăng nhập
                  </button>
                  <button
                    onClick={() => setIsRegisterOpen(true)}
                    className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-all"
                  >
                    Đăng ký
                  </button>
                </>
              ) : (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-label="Mở menu người dùng"
                    className={`flex items-center gap-2 rounded-full transition-all duration-300 ${
                      dropdownOpen ? "ring-2 ring-blue-400 ring-offset-2" : ""
                    }`}
                  >
                    <img
                      src={user?.picture || "/default-avatar.jpg"}
                      alt="avatar"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute right-0 mt-3 w-64 origin-top-right rounded-xl bg-white shadow-lg border z-50 overflow-hidden"
                      >
                        <div className="p-3 border-b">
                          <div className="flex items-center gap-3">
                            <img
                              src={user?.picture || "/default-avatar.jpg"}
                              alt="avatar"
                              className="h-11 w-11 rounded-full object-cover"
                            />
                            <div className="truncate">
                              <h4 className="font-semibold text-sm truncate">
                                {user?.name ||
                                  user?.fullName ||
                                  "Tên người dùng"}
                              </h4>
                              <p className="text-xs text-gray-500 truncate">
                                ID: #{user?.id || user?._id || "0000"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="py-1 text-sm text-gray-700">
                          {userMenuItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 transition-colors"
                            >
                              <item.icon size={16} className="text-gray-500" />
                              <span>{item.label}</span>
                            </a>
                          ))}
                          <div className="my-1 border-t border-gray-100"></div>
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors text-left"
                          >
                            <LogOut size={16} />
                            <span>Đăng xuất</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              <a
                href="/landlord-login"
                className="hidden lg:flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-md hover:bg-blue-700 transition-all hover:-translate-y-0.5"
              >
                <Megaphone className="h-4 w-4" />
                <span>Đăng tin</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Mở menu chính"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Nâng cấp: Mobile Menu hoàn thiện hơn */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="border-t border-gray-200 px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => handleNavClick(item)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      activeNav === item
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  {!user ? (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsLoginOpen(true);
                        }}
                        className="w-full text-center cursor-pointer rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all"
                      >
                        Đăng nhập
                      </button>
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsRegisterOpen(true);
                        }}
                        className="w-full text-center cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 transition-all"
                      >
                        Đăng ký
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 px-3">
                        <img
                          src={user?.picture || "/default-avatar.jpg"}
                          alt="avatar"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="truncate">
                          <h4 className="font-semibold text-base truncate">
                            {user?.name || user?.fullName || "Tên người dùng"}
                          </h4>
                        </div>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut size={18} />
                        <span>Đăng xuất</span>
                      </button>
                    </div>
                  )}
                  <a
                    href="/landlord-login"
                    className="mt-4 flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 px-4 py-2.5 text-base font-medium text-white shadow-md hover:bg-blue-700 transition-all"
                  >
                    <Megaphone className="h-5 w-5" />
                    <span>Đăng tin</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToForgotPassword={handleSwitchToForgotPassword} // ✅ Truyền prop mới
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        onSwitchToLogin={handleSwitchToLogin} // ✅ Truyền prop mới
      />
    </>
  );
}

export default Header;
