import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaHeadset,
} from "react-icons/fa";
import { BsFillPinMapFill } from "react-icons/bs";
import { SiZalo } from "react-icons/si";

// Component con cho các liên kết ở footer để tái sử dụng và code gọn hơn
const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-gray-500 transition-colors duration-300 hover:text-blue-600 hover:underline"
    >
      {children}
    </a>
  </li>
);

// Component con cho các nút liên hệ nổi
const FloatingButton = ({ children, onClick, title }) => (
  <button
    onClick={onClick}
    title={title}
    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-blue-300"
  >
    {children}
  </button>
);

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-8">
        {/* Phần nội dung chính của Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-8">
          {/* Cột 1: Logo và giới thiệu */}
          <div className="md:col-span-12 lg:col-span-4">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/Logo.png"
                alt="TroUni Logo"
                className="h-12 w-12 rounded-lg object-contain"
              />
              <span className="text-2xl font-bold text-slate-800">TroUni</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              Nền tảng tìm kiếm phòng trọ, nhà ở dành cho sinh viên và người đi
              làm. Uy tín, tiện lợi và nhanh chóng.
            </p>
            <div className="mt-6">
              <p className="font-semibold text-slate-800">Tải ứng dụng</p>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" className="transition-transform hover:scale-105">
                  <img
                    src="/appstore.png"
                    alt="Download on the App Store"
                    className="h-10 w-auto"
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                  <img
                    src="/googleplay.png"
                    alt="Get it on Google Play"
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Cột 2: Các liên kết */}
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="font-semibold text-slate-800">Về chúng tôi</h3>
            <ul className="mt-4 space-y-3">
              <FooterLink href="#">Dành cho chủ trọ</FooterLink>
              <FooterLink href="#">Hướng dẫn</FooterLink>
              <FooterLink href="/contact">Liên hệ</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>

          {/* Cột 3: Chính sách */}
          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="font-semibold text-slate-800">
              Thông tin & Chính sách
            </h3>
            <ul className="mt-4 space-y-3">
              <FooterLink href="/terms-and-conditions">
                Điều khoản & Cam kết
              </FooterLink>
              <FooterLink href="/terms-of-operation">
                Quy chế hoạt động
              </FooterLink>
              <FooterLink href="/complaint-policy">
                Giải quyết khiếu nại
              </FooterLink>
              <FooterLink href="/privacy-policy">Chính sách bảo mật</FooterLink>
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="font-semibold text-slate-800">Thông tin liên hệ</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center gap-3">
                <FaPhone className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-600">033.323.1579</span>
              </li>
              <li className="flex items-center gap-3">
                <SiZalo className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-600">092.939.2391</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-600">info@trouni.com</span>
              </li>
              <li className="flex items-start gap-3">
                <BsFillPinMapFill className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-600">
                  184/34 Bùi Văn Ngữ, P. Hiệp Thành, Quận 12, TP.HCM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Phần chân Footer: Copyright và mạng xã hội */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} TroUni. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Các nút hành động nổi */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <FloatingButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Lên đầu trang"
        >
          <FaArrowUp size={20} />
        </FloatingButton>
        <FloatingButton title="Hỗ trợ trực tuyến">
          <FaHeadset size={20} />
        </FloatingButton>
      </div>
    </footer>
  );
}
