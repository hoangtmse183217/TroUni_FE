import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const tabs = ["Tất cả", "Nhà trọ, phòng trọ", "Nhà nguyên căn", "Căn hộ"];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 -mt-10 relative z-10">
      {/* Tabs */}
      <div className="flex gap-2 mb-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-md font-semibold text-sm transition ${
              activeTab === tab
                ? "bg-[#2A41A6] text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Search Form */}
      <div className="bg-[#2A41A6] p-4 rounded-b-xl shadow-lg flex flex-wrap md:flex-nowrap gap-3 items-center">
        {/* Keyword */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-3 text-blue-300" />
          <input
            type="text"
            placeholder="Bạn muốn tìm trọ ở đâu?"
            className="w-full pl-10 pr-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 ring-blue-300 bg-white text-gray-700"
          />
        </div>

        {/* Địa điểm */}
        <select className="flex-1 min-w-[150px] px-3 py-2 rounded-md text-sm text-gray-700 bg-white">
          <option>Địa điểm</option>
          <option>Hà Nội</option>
          <option>TP. HCM</option>
          <option>Đà Nẵng</option>
        </select>

        {/* Giá */}
        <select className="flex-1 min-w-[120px] px-3 py-2 rounded-md text-sm text-gray-700 bg-white">
          <option>Mức giá</option>
          <option>Dưới 1 triệu</option>
          <option>1-3 triệu</option>
          <option>Trên 3 triệu</option>
        </select>

        {/* Diện tích */}
        <select className="flex-1 min-w-[120px] px-3 py-2 rounded-md text-sm text-gray-700 bg-white">
          <option>Diện tích</option>
          <option>Dưới 20m²</option>
          <option>20 - 50m²</option>
          <option>Trên 50m²</option>
        </select>

        {/* Nút tìm */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-md flex items-center gap-2 shadow transition">
          <FaSearch />
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
