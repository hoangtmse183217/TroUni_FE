import React from "react";
import { MdEmail, MdPhone, MdFacebook } from "react-icons/md";
import { SiZalo } from "react-icons/si"; // Sử dụng icon Zalo từ react-icons cho nhất quán

// Component con cho mỗi thẻ hỗ trợ, giúp code gọn gàng và dễ quản lý
const SupportCard = ({
  icon,
  title,
  description,
  buttonText,
  onClick,
  colors,
}) => {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Icon với nền được phối màu theo chủ đề */}
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg}`}
      >
        {/* React.cloneElement để thêm class vào icon được truyền từ props */}
        {React.cloneElement(icon, { className: `h-7 w-7 ${colors.icon}` })}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-800">{title}</h3>
      <p className="mt-2 flex-grow text-sm text-slate-600 leading-relaxed">
        {description}
      </p>

      {/* Nút bấm cũng được phối màu theo chủ đề */}
      <button
        onClick={onClick}
        className={`mt-6 w-full rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 ${colors.button} hover:shadow-none active:scale-95`}
      >
        {buttonText}
      </button>
    </div>
  );
};

// Dữ liệu được tổ chức lại để bao gồm cả các lớp màu sắc
const supportOptions = [
  {
    id: "email",
    icon: <MdEmail />,
    title: "Gửi Email",
    description:
      "Chúng tôi sẽ phản hồi yêu cầu của bạn trong vòng 24 giờ làm việc.",
    buttonText: "Gửi Email ngay",
    onClick: () => (window.location.href = "mailto:support@trouni.com"),
    colors: {
      icon: "text-blue-600",
      bg: "bg-blue-100",
      button: "bg-blue-600 hover:bg-blue-700",
    },
  },
  {
    id: "hotline",
    icon: <MdPhone />,
    title: "Hotline 24/7",
    description:
      "Nhân viên tư vấn luôn sẵn sàng giải đáp mọi thắc mắc của bạn.",
    buttonText: "Gọi ngay",
    onClick: () => (window.location.href = "tel:+84123456789"),
    colors: {
      icon: "text-green-600",
      bg: "bg-green-100",
      button: "bg-green-600 hover:bg-green-700",
    },
  },
  {
    id: "facebook",
    icon: <MdFacebook />,
    title: "Facebook Messenger",
    description:
      "Trò chuyện trực tiếp với chúng tôi qua nền tảng Facebook Messenger.",
    buttonText: "Nhắn tin ngay",
    onClick: () => window.open("https://m.me/trouniFPT", "_blank"),
    colors: {
      icon: "text-indigo-600",
      bg: "bg-indigo-100",
      button: "bg-indigo-600 hover:bg-indigo-700",
    },
  },
  {
    id: "zalo",
    icon: <SiZalo />,
    title: "Chat qua Zalo",
    description:
      "Nhắn tin hoặc gọi cho chúng tôi một cách thuận tiện qua Zalo.",
    buttonText: "Liên hệ Zalo",
    onClick: () => window.open("https://zalo.me/your_zalo_number", "_blank"),
    colors: {
      icon: "text-sky-600",
      bg: "bg-sky-100",
      button: "bg-sky-600 hover:bg-sky-700",
    },
  },
];

const CustomerSupport = () => {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header được thiết kế lại để ấn tượng hơn */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Chúng tôi có thể giúp gì cho bạn?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Bạn cần hỗ trợ về{" "}
            <span className="font-semibold text-blue-600">Tìm kiếm</span>,
            <span className="font-semibold text-blue-600"> Đăng tin</span>, hay
            <span className="font-semibold text-blue-600"> Thanh toán</span>?
            Hãy chọn kênh hỗ trợ phù hợp nhất.
          </p>
        </div>

        {/* Grid sử dụng component SupportCard mới */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {supportOptions.map((option) => (
            <SupportCard
              key={option.id}
              icon={option.icon}
              title={option.title}
              description={option.description}
              buttonText={option.buttonText}
              onClick={option.onClick}
              colors={option.colors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
