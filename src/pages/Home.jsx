import React from "react";
import { ArrowRight, TrendingUp, MapPin, Star, Users, Clock } from "lucide-react";

function Home() {
  return (
    <div className="space-y-16 px-6 py-12 max-w-7xl mx-auto">
      {/* Lựa chọn chỗ ở HOT */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-gray-800 relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lựa chọn chỗ ở HOT
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-gray-600 mt-4">Những lựa chọn được yêu thích nhất hiện tại</p>
          </div>
          <TrendingUp className="w-8 h-8 text-orange-500 animate-bounce" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { id: 1, type: "Phòng trọ", price: "2.5 triệu", location: "Quận 1", gradient: "from-blue-500 to-cyan-500" },
            { id: 2, type: "Căn hộ", price: "8.5 triệu", location: "Quận 7", gradient: "from-purple-500 to-pink-500" },
            { id: 3, type: "Nhà nguyên căn", price: "15 triệu", location: "Thủ Đức", gradient: "from-green-500 to-emerald-500" }
          ].map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="p-8 relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.type}
                </h3>
                <p className="text-gray-600 mb-4">{item.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{item.price}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nhà nguyên căn cho thuê */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-gray-800 relative inline-block">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Nhà nguyên căn cho thuê
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
            </h2>
            <p className="text-gray-600 mt-4">Không gian riêng tư, thoải mái cho gia đình</p>
          </div>
          <Users className="w-8 h-8 text-green-500 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { id: 1, area: "120m²", rooms: "3PN 2WC", price: "15 triệu", location: "Bình Thạnh" },
            { id: 2, area: "80m²", rooms: "2PN 1WC", price: "12 triệu", location: "Gò Vấp" },
            { id: 3, area: "150m²", rooms: "4PN 3WC", price: "20 triệu", location: "Quận 2" }
          ].map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">{item.location}</p>
                  <p className="text-lg font-bold">{item.area}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">{item.rooms}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{item.price}</span>
                  <button className="bg-green-100 hover:bg-green-200 text-green-600 px-4 py-2 rounded-lg transition-colors duration-200">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Căn hộ cho thuê */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-gray-800 relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Căn hộ cho thuê
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </h2>
            <p className="text-gray-600 mt-4">Hiện đại, tiện nghi, view đẹp</p>
          </div>
          <Star className="w-8 h-8 text-purple-500 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { id: 1, type: "Studio", floor: "Tầng 15", price: "8.5 triệu", location: "Landmark 81" },
            { id: 2, type: "1PN", floor: "Tầng 22", price: "12 triệu", location: "Vinhomes" },
            { id: 3, type: "2PN", floor: "Tầng 18", price: "18 triệu", location: "Masteri" }
          ].map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">{item.location}</p>
                  <p className="text-lg font-bold">{item.floor}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">{item.type}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">{item.price}</span>
                  <button className="bg-purple-100 hover:bg-purple-200 text-purple-600 px-4 py-2 rounded-lg transition-colors duration-200">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Thống kê nhanh */}
      <section className="mt-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-center mb-8">TroUni trong con số</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50K+", label: "Tin đăng", icon: MapPin },
                { number: "100K+", label: "Người dùng", icon: Users },
                { number: "63", label: "Tỉnh thành", icon: Star },
                { number: "24/7", label: "Hỗ trợ", icon: Clock }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4 group-hover:bg-white/30 transition-all duration-300">
                      <Icon className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-3xl font-bold">{stat.number}</p>
                    </div>
                    <p className="text-white/90">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tỉnh, thành phố nổi bật - Enhanced */}
      <section className="mt-24">
        <h2 className="text-5xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            TỈNH, THÀNH PHỐ NỔI BẬT
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Lựa chọn chỗ ở HOT
          Khám phá những địa điểm có nhiều lựa chọn nhất
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            { name: "Hồ Chí Minh", img: "hcmimg.jpeg", count: "25,000+ tin", gradient: "from-orange-500 to-red-500" },
            { name: "Hà Nội", img: "hanoiimg.jpeg", count: "18,000+ tin", gradient: "from-blue-500 to-indigo-500" },
            { name: "Đà Nẵng", img: "danangimg.jpeg", count: "8,000+ tin", gradient: "from-green-500 to-emerald-500" },
          ].map((city, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-3xl group shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${city.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-white text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {city.name}
                </h3>
                <p className="text-white/90 text-sm mb-4">{city.count}</p>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-300 transform group-hover:scale-105">
                  Khám phá ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tin tức nổi bật */}
      <section className="mt-24">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-gray-800 relative inline-block">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                TIN TỨC NỔI BẬT
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
            </h2>
            <p className="text-gray-600 mt-4">Cập nhật thông tin mới nhất về thị trường bất động sản</p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-all duration-200"
          >
            Xem thêm <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: 1,
              title:
                '"Mẹo vàng" giúp bạn tìm phòng trọ chính chủ, tránh rủi ro đầu năm',
              img: "/news-1.jpg",
            },
            {
              id: 2,
              title:
                "Giá thuê trọ đầu năm 2025 tăng mạnh - Thực hư và giải pháp cho người thuê",
              img: "/news-2.jpg",
            },
            {
              id: 3,
              title:
                "Vì sao Gen Z sẵn sàng thuê trọ giá cao gấp 10-20 lần thế hệ trước?",
              img: "/news-3.jpg",
            },
            {
              id: 4,
              title: "Thực hư về hệ thống tìm trọ toàn quốc HOT NHẤT hiện nay!",
              img: "/news-4.jpg",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group transform hover:-translate-y-2"
            >
              <div className="overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[180px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Mới
                </div>
              </div>
              <div className="p-6">
                <p className="text-orange-600 font-bold text-sm mb-2 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Bài viết #{item.id.toString().padStart(2, '0')}
                </p>
                <h3 className="text-gray-800 font-semibold text-sm leading-relaxed group-hover:text-blue-700 transition-colors duration-300 line-clamp-3">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">2 ngày trước</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
