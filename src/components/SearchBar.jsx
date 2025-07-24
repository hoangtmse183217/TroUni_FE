import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const tabs = ["Tất cả", "Nhà trọ, phòng trọ", "Nhà nguyên căn", "Căn hộ"];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 -mt-14 relative z-10">
      {/* Tabs pill đẹp */}
      <div className="flex flex-wrap gap-3 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-[#1e3a8a] text-white shadow"
                : "bg-[#e2e8f0] text-[#475569] hover:bg-[#cbd5e1]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="bg-[#f8fafc] p-6 rounded-2xl shadow-lg flex flex-wrap md:flex-nowrap gap-4 items-center border border-[#e2e8f0]">
        {/* Input từ khóa */}
        <div className="relative flex-1 min-w-[200px]">
          <FaSearch className="absolute left-3 top-3 text-[#1e3a8a]" />
          <input
            type="text"
            placeholder="Bạn muốn tìm trọ ở đâu?"
            className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm bg-white text-gray-800 focus:outline-none focus:ring-2 ring-[#1e3a8a] border border-[#cbd5e1]"
          />
        </div>

        {/* Địa điểm */}
        <select className="flex-1 min-w-[150px] px-4 py-2.5 rounded-lg text-sm text-gray-800 bg-white border border-[#cbd5e1] focus:outline-none focus:ring-2 ring-[#1e3a8a]">
          <option>Địa điểm</option>
          <option>Hà Nội</option>
          <option>TP. HCM</option>
          <option>Đà Nẵng</option>
        </select>

        {/* Giá */}
        <select className="flex-1 min-w-[120px] px-4 py-2.5 rounded-lg text-sm text-gray-800 bg-white border border-[#cbd5e1] focus:outline-none focus:ring-2 ring-[#1e3a8a]">
          <option>Mức giá</option>
          <option>Dưới 1 triệu</option>
          <option>1-3 triệu</option>
          <option>Trên 3 triệu</option>
        </select>

        {/* Diện tích */}
        <select className="flex-1 min-w-[120px] px-4 py-2.5 rounded-lg text-sm text-gray-800 bg-white border border-[#cbd5e1] focus:outline-none focus:ring-2 ring-[#1e3a8a]">
          <option>Diện tích</option>
          <option>Dưới 20m²</option>
          <option>20 - 50m²</option>
          <option>Trên 50m²</option>
        </select>

        {/* Nút tìm kiếm */}
        <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 shadow-md transition transform hover:scale-105">
          <FaSearch />
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
