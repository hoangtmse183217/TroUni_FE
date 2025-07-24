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

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-blue-100 border-t pt-16 pb-0 px-4 text-sm text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Logo & App */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-3 mb-6 group">
            <img
              src="/Logo.png"
              alt="logo"
              className="w-16 h-16 object-contain rounded-xl shadow-lg group-hover:shadow-blue-200 transition-all duration-300"
            />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent tracking-wide drop-shadow">
              TroUni
            </span>
          </div>
          <p className="mb-4 text-blue-700 font-semibold text-center text-base bg-blue-50 px-4 py-1 rounded-full">
            TẢI APP TRỌ MỚI NGAY
          </p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="relative group">
              <img
                src="/qr.png"
                alt="qr"
                className="w-[104px] h-[104px] rounded-xl border border-blue-200 shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
            </div>
            <div className="space-y-4">
              <img
                src="/appstore.png"
                alt="appstore"
                className="w-[104px] h-[48px] object-contain hover:scale-105 transition-transform duration-200 cursor-pointer hover:drop-shadow-lg"
              />
              <img
                src="/googleplay.png"
                alt="googleplay"
                className="w-[104px] h-[48px] object-contain hover:scale-105 transition-transform duration-200 cursor-pointer hover:drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Hệ thống */}
        <div className="flex flex-col justify-center">
          <h4 className="font-semibold text-blue-800 mb-4 uppercase tracking-wider text-lg">
            HỆ THỐNG
          </h4>
          <ul className="space-y-3 mb-6">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors font-medium hover:translate-x-1 inline-block transform duration-200"
              >
                Dành cho chủ trọ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors font-medium hover:translate-x-1 inline-block transform duration-200"
              >
                Hướng dẫn
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600 transition-colors font-medium hover:translate-x-1 inline-block transform duration-200"
              >
                Liên hệ
              </a>
            </li>
          </ul>
          <h4 className="font-semibold text-blue-800 mb-4 mt-2 uppercase tracking-wider text-lg">
            THÔNG TIN
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="/terms-and-conditions"
                className="hover:text-blue-600 transition-colors font-medium hover:translate-x-1 inline-block transform duration-200"
              >
                Điều khoản & Cam kết
              </a>
            </li>
            <li>
              <a
                href="/terms-of-operation"
                className="hover:text-blue-600 transition-colors font-medium hover:translate-x-1 inline-block transform duration-200"
              >
                Quy chế hoạt động
              </a>
            </li>
            <li>
              <a
                href="/complaint-policy"
                className="hover:text-blue-600 transition-colors font-medium hover:translate-x-1 inline-block transform duration-200"
              >
                Giải quyết khiếu nại
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-blue-600 transition-colors font-medium hover:translate-x-1 inline-block transform duration-200"
              >
                Chính sách bảo mật
              </a>
            </li>
          </ul>
        </div>

        {/* Kết nối */}
        <div className="flex flex-col justify-center">
          <h4 className="font-semibold text-blue-800 mb-4 uppercase tracking-wider text-lg">
            KẾT NỐI VỚI CHÚNG TÔI
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 group">
              <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <FaPhone className="text-blue-600 text-lg" />
              </div>
              <span className="font-medium">033.323.1579 - 035.866.9939</span>
            </li>
            <li className="flex items-center space-x-3 group">
              <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <SiZalo className="text-blue-600 text-lg" />
              </div>
              <span className="font-medium">09293923912</span>
            </li>
            <li className="flex items-center space-x-3 group">
              <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <FaEnvelope className="text-blue-600 text-lg" />
              </div>
              <span className="font-medium">info@trouni.com</span>
            </li>
            <li className="flex items-start space-x-3 group">
              <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors mt-1">
                <BsFillPinMapFill className="text-blue-600 text-lg" />
              </div>
              <span>184/34 Bùi Văn Ngữ Hiệp Thành Quận 12</span>
            </li>
            <li className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://www.facebook.com/trouniFPT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-200 font-medium shadow-sm"
              >
                <FaFacebookF className="text-blue-700" /> trouniFPT
              </a>
              <a
                href="https://www.facebook.com/trounifsix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-200 font-medium shadow-sm"
              >
                <FaFacebookF className="text-blue-700" /> trounifsix
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-xs text-white relative right-4 w-[calc(100%+2rem)]">
        <div className="bg-gradient-to-r from-[#2A41A6] to-blue-700 py-4 shadow-inner">
          Copyright © 2015 - 2025 OHI Co.Ltd
        </div>
      </div>

      {/* Floating icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <button
          className="bg-white shadow-lg p-3 rounded-full hover:bg-blue-50 transition-all duration-300 hover:shadow-blue-200/50 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Lên đầu trang"
        >
          <FaArrowUp className="text-blue-700 text-xl group-hover:scale-110 transition-transform" />
        </button>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg p-4 rounded-full hover:shadow-blue-500/30 transition-all duration-300 group"
          title="Hỗ trợ"
        >
          <FaHeadset className="text-white text-xl group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
