import React from "react";
import { MdEmail, MdPhone, MdFacebook, MdChat } from "react-icons/md";

const supportOptions = [
  {
    id: "email",
    icon: <MdEmail className="w-6 h-6 text-blue-500" />,
    title: "EMAIL",
    description: "Chúng tôi sẽ trả lời thắc mắc của bạn trong vòng 24 giờ.",
    buttonText: "Email ngay",
    onClick: () => (window.location.href = "mailto:support@yourcompany.com"),
  },
  {
    id: "hotline",
    icon: <MdPhone className="w-6 h-6 text-green-500" />,
    title: "HOTLINE 24/7",
    description: "Điện thoại viên luôn sẵn sàng giải đáp các thắc mắc của bạn.",
    buttonText: "Gọi ngay",
    onClick: () => (window.location.href = "tel:+84123456789"),
  },
  {
    id: "facebook",
    icon: <MdFacebook className="w-6 h-6 text-blue-700" />,
    title: "FACEBOOK",
    description: "Nhắn tin với chúng tôi trên nền tảng Facebook Messenger.",
    buttonText: "Gửi tin nhắn",
    onClick: () => window.open("https://m.me/yourfacebookpageid", "_blank"),
  },
  {
    id: "zalo",
    icon: <MdChat className="w-6 h-6 text-cyan-600" />,
    title: "ZALO",
    description: "Nhắn tin hoặc gọi cho chúng tôi trên nền tảng Zalo.",
    buttonText: "Liên hệ ngay",
    onClick: () =>
      alert(
        'Vui lòng mở ứng dụng Zalo và tìm kiếm "Tên Zalo OA của bạn" hoặc quét mã QR.'
      ),
  },
];

const CustomerSupport = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">
        HỖ TRỢ KHÁCH HÀNG
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Bạn cần hỗ trợ trong{" "}
        <span className="text-blue-600 font-medium">Tìm Kiếm</span>,{" "}
        <span className="text-blue-600 font-medium">Đăng tin</span>,{" "}
        <span className="text-blue-600 font-medium">Thanh toán</span>? Liên hệ
        với chúng tôi ngay qua các hình thức:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {supportOptions.map((option) => (
          <div
            key={option.id}
            className="flex flex-col items-start gap-3 bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <div className="bg-gray-100 p-2 rounded-full">{option.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {option.title}
            </h3>
            <p className="text-sm text-gray-600">{option.description}</p>
            <button
              onClick={option.onClick}
              className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
              {option.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSupport;
