import React from "react";
import CustomerSupport from "../../components/CustomerSupport";
import Breadcrumb from "../../components/Breadcrumb";
import { Send } from "lucide-react";

function ContactPage() {
  return (
    <div className="px-4 py-4 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Breadcrumb
          items={[{ label: "Trang chủ", to: "/" }, { label: "Liên hệ" }]}
        />
      </div>

      {/* Form + QR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Liên hệ với chúng tôi
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Ví dụ: Nguyen Van A"
                className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="text"
                placeholder="Ví dụ: 0123456789"
                className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Ghi chú
              </label>
              <textarea
                rows="5"
                placeholder="Nội dung"
                className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <Send size={18} /> Gửi
            </button>
          </form>
        </div>

        {/* QR Image */}
        <div className="w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <img
            src="/banner-contact.png"
            alt="QR"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      {/* Customer Support */}
      <CustomerSupport />
    </div>
  );
}

export default ContactPage;
