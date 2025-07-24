import React from "react";
import { Link } from "react-router-dom";

const BoxHeadContent = () => {
  return (
    <section className="relative bg-[#030b2b] text-white overflow-hidden min-h-[500px]">
      {/* Full background image */}
      <img
        src="/houseBanner.jpg"
        alt="House"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.45 }}
      />

      {/* Background Stars Layer (optional) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: "url('/stars-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            TÌM NHANH, KIẾM DỄ <br /> TRỌ MỚI TOÀN QUỐC
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Trang thông tin và cho thuê phòng trọ nhanh chóng, hiệu quả
            <br />
            với hơn 500 tin đăng mới và 30.000 lượt xem mỗi ngày
          </p>
        </div>
        {/* Bạn có thể thêm nội dung bên phải nếu muốn */}
      </div>
    </section>
  );
};

export default BoxHeadContent;
