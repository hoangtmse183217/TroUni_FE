import React from "react";
import { Search, MapPin, Star } from "lucide-react";

// Component thống kê nhỏ
const StatItem = ({ icon: Icon, text, color }) => (
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 text-white shadow-md hover:shadow-lg transition">
    <Icon className={`w-5 h-5 ${color}`} />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

// Component card nổi
const FloatingCard = ({
  icon: Icon,
  title,
  location,
  price,
  color,
  className,
}) => (
  <div
    className={`absolute bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl animate-float ${className}`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="text-gray-800 font-semibold text-sm">{title}</p>
        <p className="text-gray-500 text-xs">{location}</p>
        <p className="font-bold text-sm text-blue-600">{price}</p>
      </div>
    </div>
  </div>
);

const BoxHeadContent = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#030b2b] via-[#1a237e] to-[#0d47a1] text-white overflow-visible min-h-screen">
      {/* Background image */}
      <img
        src="/houseBanner.jpg"
        alt="House"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay effects */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-40" />
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-blue-200 rounded-full animate-ping opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-24">
        {/* Left side */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 space-y-6 animate-fade-in">
          <div className="flex items-center space-x-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider">
            <Star className="w-6 h-6 animate-pulse" />
            <span>Nền tảng mới tại Việt Nam</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            TrọUni – Kết nối sinh viên với nơi ở lý tưởng.
          </h1>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed animate-slide-up animation-delay-200">
            Trang thông tin và cho thuê phòng trọ nhanh chóng, hiệu quả
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-400">
            <StatItem
              icon={Search}
              text="50K+ Tìm kiếm/ngày"
              color="text-blue-300"
            />
            <StatItem
              icon={MapPin}
              text="3 Thành phố lớn trên toàn quốc"
              color="text-green-300"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative">
            <FloatingCard
              icon={MapPin}
              title="Phòng trọ mới"
              location="Quận 1, TP.HCM"
              price="2.5 triệu/tháng"
              color="bg-gradient-to-r from-green-400 to-emerald-500"
              className="top-0 right-0 animation-delay-300 max-w-xs"
            />
            <FloatingCard
              icon={Star}
              title="Căn hộ cao cấp"
              location="Cầu Giấy, Hà Nội"
              price="8.5 triệu/tháng"
              color="bg-gradient-to-r from-blue-400 to-indigo-500"
              className="top-32 right-20 animation-delay-500 max-w-xs"
            />
            <FloatingCard
              icon={Search}
              title="Nhà nguyên căn"
              location="Hải Châu, Đà Nẵng"
              price="12 triệu/tháng"
              color="bg-gradient-to-r from-purple-400 to-pink-500"
              className="top-60 right-8 animation-delay-700 max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxHeadContent;
