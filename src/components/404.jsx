import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-2">
        Trang không tồn tại
      </h2>
      <p className="text-slate-500 mb-6 text-center max-w-md">
        Có vẻ như bạn đã truy cập một liên kết không tồn tại hoặc đã bị di
        chuyển.
      </p>
      <Link
        to="/"
        className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
      >
        <ArrowLeftCircle className="mr-2 h-5 w-5" />
        Quay lại trang chủ
      </Link>
    </div>
  );
};

export default NotFoundPage;
