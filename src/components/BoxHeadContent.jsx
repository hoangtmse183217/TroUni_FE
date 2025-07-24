import React from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Star } from "lucide-react";

const BoxHeadContent = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#030b2b] via-[#1a237e] to-[#0d47a1] text-white overflow-hidden min-h-[600px]">
      {/* Full background image */}
      <img
        src="/houseBanner.jpg"
        alt="House"
        className="absolute inset-0 w-full h-full object-cover z-0 animate-pulse"
        style={{ opacity: 0.3 }}
      />

      {/* Animated background overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-blue-200 rounded-full animate-ping opacity-50"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <div className="flex items-center mb-4 space-x-2">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase">
              Nền tảng #1 Việt Nam
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent animate-slide-up">
            TÌM NHANH, KIẾM DỄ <br /> TRỌ MỚI TOÀN QUỐC
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            Trang thông tin và cho thuê phòng trọ nhanh chóng, hiệu quả
            <br />
            với hơn <span className="text-yellow-400 font-bold">500 tin đăng mới</span> và <span className="text-yellow-400 font-bold">30.000 lượt xem</span> mỗi ngày
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-8 animate-slide-up animation-delay-400">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Search className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium">50K+ Tìm kiếm/ngày</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="w-5 h-5 text-green-300" />
              <span className="text-sm font-medium">63 Tỉnh thành</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300 animate-slide-up animation-delay-600">
            <span className="flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Tìm trọ ngay</span>
            </span>
          </button>
        </div>

        {/* Right Content - Floating Cards */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative">
            {/* Floating card 1 */}
            <div className="absolute top-0 right-0 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl animate-float animation-delay-300 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold text-sm">Phòng trọ mới</p>
                  <p className="text-gray-600 text-xs">Quận 1, TP.HCM</p>
                  <p className="text-green-600 font-bold text-sm">2.5 triệu/tháng</p>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute top-32 right-20 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl animate-float animation-delay-500 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold text-sm">Căn hộ cao cấp</p>
                  <p className="text-gray-600 text-xs">Cầu Giấy, Hà Nội</p>
                  <p className="text-blue-600 font-bold text-sm">8.5 triệu/tháng</p>
                </div>
              </div>
            </div>

            {/* Floating card 3 */}
            <div className="absolute top-64 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl animate-float animation-delay-700 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold text-sm">Nhà nguyên căn</p>
                  <p className="text-gray-600 text-xs">Hải Châu, Đà Nẵng</p>
                  <p className="text-purple-600 font-bold text-sm">12 triệu/tháng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxHeadContent;
