import React from "react";
import { Send, User, Phone, MessageSquare } from "lucide-react";
import CustomerSupport from "../../components/CustomerSupport";
import Breadcrumb from "../../components/Breadcrumb";

// Các component con InputField và TextareaField được giữ nguyên
const InputField = ({ icon, label, type = "text", placeholder }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-slate-700">
      {label}
    </label>
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
        {React.cloneElement(icon, { className: "h-5 w-5 text-slate-400" })}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-11 pr-4 text-slate-800 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  </div>
);

const TextareaField = ({ icon, label, placeholder }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-slate-700">
      {label}
    </label>
    <div className="relative">
      <div className="pointer-events-none absolute top-3.5 left-0 flex items-center pl-3.5">
        {React.cloneElement(icon, { className: "h-5 w-5 text-slate-400" })}
      </div>
      <textarea
        rows="5"
        placeholder={placeholder}
        className="w-full resize-none rounded-lg border border-slate-300 bg-white py-2.5 pl-11 pr-4 text-slate-800 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      ></textarea>
    </div>
  </div>
);

function ContactPage() {
  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumb ở bên trái */}
        <div className="mb-8">
          <Breadcrumb
            items={[{ label: "Trang chủ", to: "/" }, { label: "Liên hệ" }]}
          />
        </div>

        {/* === PHẦN ĐÃ SỬA THEO YÊU CẦU MỚI === */}
        {/* Khối header được chuyển sang căn lề trái */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Luôn sẵn sàng lắng nghe
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Có bất kỳ câu hỏi hoặc góp ý nào? Đừng ngần ngại, hãy gửi thông tin
            cho chúng tôi. Đội ngũ TroUni sẽ phản hồi bạn trong thời gian sớm
            nhất.
          </p>
        </div>
        {/* === KẾT THÚC PHẦN SỬA === */}

        {/* Form và Hình ảnh */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form liên hệ */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <form className="space-y-6">
              <InputField
                icon={<User />}
                label="Họ và tên"
                placeholder="Ví dụ: Nguyễn Văn An"
              />
              <InputField
                icon={<Phone />}
                label="Số điện thoại"
                type="tel"
                placeholder="Ví dụ: 0123 456 789"
              />
              <TextareaField
                icon={<MessageSquare />}
                label="Nội dung tin nhắn"
                placeholder="Hãy cho chúng tôi biết bạn cần hỗ trợ điều gì..."
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-blue-600 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg active:scale-95"
              >
                <Send size={18} />
                <span>Gửi liên hệ</span>
              </button>
            </form>
          </div>

          {/* Hình ảnh */}
          <div className="group relative h-96 md:h-full w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/banner-contact.png"
              alt="Liên hệ TroUni"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Khu vực Hỗ trợ khách hàng */}
        <section className="mt-24 border-t border-slate-200 pt-24">
          <CustomerSupport />
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
