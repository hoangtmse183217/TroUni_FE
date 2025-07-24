import React, { useState } from "react";
import { Search, MapPin, DollarSign, Home } from "lucide-react";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const tabs = ["Tất cả", "Nhà trọ, phòng trọ", "Nhà nguyên căn", "Căn hộ"];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 -mt-10 relative z-10">
      {/* Tabs */}
      <div className="flex gap-1 mb-0 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-t-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
              activeTab === tab
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105"
                : "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Search Form */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-6 rounded-b-2xl rounded-tr-2xl shadow-2xl flex flex-wrap lg:flex-nowrap gap-4 items-center backdrop-blur-sm">
        {/* Keyword */}
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
          <input
            type="text"
            placeholder="Bạn muốn tìm trọ ở đâu?"
            className="w-full pl-12 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white text-gray-700 shadow-md hover:shadow-lg transition-all duration-200"
          />
        </div>

        {/* Địa điểm */}
        <div className="relative flex-1 min-w-[150px]">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <select className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-gray-700 bg-white shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none cursor-pointer">
            <option>Địa điểm</option>
            <option>Hà Nội</option>
            <option>TP. HCM</option>
            <option>Đà Nẵng</option>
          </select>
        </div>

        {/* Giá */}
        <div className="relative flex-1 min-w-[120px]">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <select className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-gray-700 bg-white shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none cursor-pointer">
            <option>Mức giá</option>
            <option>Dưới 1 triệu</option>
            <option>1-3 triệu</option>
            <option>Trên 3 triệu</option>
          </select>
        </div>

        {/* Diện tích */}
        <div className="relative flex-1 min-w-[120px]">
          <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <select className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-gray-700 bg-white shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none cursor-pointer">
            <option>Diện tích</option>
            <option>Dưới 20m²</option>
            <option>20 - 50m²</option>
            <option>Trên 50m²</option>
          </select>
        </div>

        {/* Nút tìm */}
        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap">
          <Search className="w-5 h-5" />
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}
