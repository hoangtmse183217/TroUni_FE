import React, { useState } from "react";
import SidebarPolicy from "../../components/SidebarPolicy";
import Breadcrumb from "../../components/Breadcrumb";
import CustomerSupport from "../../components/CustomerSupport";

function TermsOfUse() {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Điều khoản sử dụng</h2>
      <h3 className="font-semibold">I. GIỚI THIỆU CHUNG</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Trang web cung cấp nền tảng kết nối giữa người thuê và người cho thuê
          trọ.
        </li>
        <li>
          Việc sử dụng dịch vụ đồng nghĩa với việc bạn chấp nhận các điều khoản
          dưới đây.
        </li>
      </ul>

      <h3 className="mt-6 font-semibold">
        II. QUYỀN VÀ TRÁCH NHIỆM CỦA NGƯỜI DÙNG
      </h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Người dùng phải cung cấp thông tin chính xác và đầy đủ khi đăng ký tài
          khoản.
        </li>
        <li>
          Không sử dụng dịch vụ vào mục đích trái pháp luật hoặc gây hại cho
          người khác.
        </li>
        <li>
          Không được sao chép, sửa đổi, phát tán nội dung trên website mà không
          có sự cho phép.
        </li>
      </ul>

      <h3 className="mt-6 font-semibold">
        III. QUYỀN VÀ TRÁCH NHIỆM CỦA CHÚNG TÔI
      </h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Chúng tôi có quyền chỉnh sửa nội dung và giao diện website mà không
          cần báo trước.
        </li>
        <li>
          Bảo vệ thông tin cá nhân của người dùng theo chính sách bảo mật.
        </li>
        <li>
          Có quyền đình chỉ tài khoản nếu phát hiện hành vi vi phạm điều khoản.
        </li>
      </ul>
    </>
  );
}

export default TermsOfUse;
