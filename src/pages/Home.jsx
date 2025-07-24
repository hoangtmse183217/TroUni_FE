import React from "react";

function Home() {
  return (
    <div className="space-y-12 px-6 py-10 max-w-7xl mx-auto">
      {/* Lựa chọn chỗ ở HOT */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 relative inline-block after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-1">
          Lựa chọn chỗ ở HOT
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex items-center justify-center font-semibold text-gray-700 text-lg"
            >
              Chỗ ở {item}
            </div>
          ))}
        </div>
      </section>

      {/* Nhà nguyên căn cho thuê */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 relative inline-block after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-1">
          Nhà nguyên căn cho thuê
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex items-center justify-center font-semibold text-gray-700 text-lg"
            >
              Nhà {item}
            </div>
          ))}
        </div>
      </section>

      {/* Căn hộ cho thuê */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 relative inline-block after:block after:w-16 after:h-1 after:bg-blue-600 after:mt-1">
          Căn hộ cho thuê
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex items-center justify-center font-semibold text-gray-700 text-lg"
            >
              Căn hộ {item}
            </div>
          ))}
        </div>
      </section>

      {/* Tỉnh, thành phố nổi bật */}
      <section className="mt-24">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12 tracking-wide">
          TỈNH, THÀNH PHỐ NỔI BẬT
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            { name: "Hồ Chí Minh", img: "hcmimg.jpeg" },
            { name: "Hà Nội", img: "hanoiimg.jpeg" },
            { name: "Đà Nẵng", img: "danangimg.jpeg" },
          ].map((city, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-3xl group shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-[240px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                <p className="text-white text-2xl font-semibold group-hover:text-blue-300">
                  {city.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tin tức nổi bật */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-1 after:bg-blue-600">
            TIN TỨC NỔI BẬT
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
          >
            Xem thêm <span className="text-xl">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-blue-600 font-semibold text-sm mb-1">
                  0{item.id < 10 ? item.id : item.id}
                </p>
                <p className="text-gray-800 font-medium text-sm leading-snug group-hover:text-blue-700 transition">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
