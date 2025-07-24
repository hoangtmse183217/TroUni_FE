import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// --- CÁC COMPONENT CẤU TRÚC VÀ PLACEHOLDER ---

// Component Header cho mỗi Section (giữ nguyên vì nó là cấu trúc, không phải dữ liệu)
const SectionHeader = ({ title, link = "#" }) => (
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
    <Link
      to={link}
      className="group flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
    >
      <span>Xem tất cả</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
);

// Component Placeholder cho Thẻ Phòng Trọ
const PropertyCardPlaceholder = () => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="h-52 w-full rounded-lg bg-slate-200 animate-pulse"></div>
    <div className="mt-4 space-y-3">
      <div className="h-5 w-3/4 rounded bg-slate-200 animate-pulse"></div>
      <div className="h-4 w-1/2 rounded bg-slate-200 animate-pulse"></div>
      <div className="h-6 w-1/3 rounded bg-slate-200 animate-pulse"></div>
      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
        <div className="h-4 w-1/4 rounded bg-slate-200 animate-pulse"></div>
        <div className="h-4 w-1/4 rounded bg-slate-200 animate-pulse"></div>
        <div className="h-4 w-1/4 rounded bg-slate-200 animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Component Placeholder cho Thẻ Thành Phố
const CityCardPlaceholder = () => (
  <div className="h-80 w-full rounded-2xl bg-slate-200 animate-pulse"></div>
);

// Component Placeholder cho Thẻ Tin Tức
const NewsCardPlaceholder = () => (
  <div className="space-y-3">
    <div className="h-40 w-full rounded-xl bg-slate-200 animate-pulse"></div>
    <div className="space-y-2">
      <div className="h-4 w-full rounded bg-slate-200 animate-pulse"></div>
      <div className="h-4 w-5/6 rounded bg-slate-200 animate-pulse"></div>
    </div>
  </div>
);

function Home() {
  return (
    // Giữ nguyên cấu trúc layout chính
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
        {/* Lựa chọn nổi bật */}
        <section>
          <SectionHeader title="Lựa chọn nổi bật" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Vòng lặp để tạo 3 khối placeholder */}
            {Array.from({ length: 3 }).map((_, index) => (
              <PropertyCardPlaceholder key={index} />
            ))}
          </div>
        </section>

        {/* Thành phố nổi bật */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">
              Khám phá theo Thành phố
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tìm kiếm nơi ở lý tưởng tại các trung tâm sầm uất nhất.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Vòng lặp để tạo 3 khối placeholder */}
            {Array.from({ length: 3 }).map((_, index) => (
              <CityCardPlaceholder key={index} />
            ))}
          </div>
        </section>

        {/* Tin tức */}
        <section>
          <SectionHeader title="Tin tức & Kinh nghiệm" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Vòng lặp để tạo 4 khối placeholder */}
            {Array.from({ length: 4 }).map((_, index) => (
              <NewsCardPlaceholder key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
