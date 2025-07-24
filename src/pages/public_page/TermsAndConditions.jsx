import React, { useState } from "react";
import SidebarPolicy from "../../components/SidebarPolicy";
import Breadcrumb from "../../components/Breadcrumb";
import CustomerSupport from "../../components/CustomerSupport";
import TermsOfUse from "./TermsOfUse";
import TermsOfOperation from "./TermsOfOperation";
import PrivacyPolicy from "./PrivacyPolicy";
import ComplaintPolicy from "./ComplaintPolicy";

function TermsAndConditions() {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Điều khoản & Cam kết</h2>
      <h3 className="font-semibold">I. ĐIỀU KHOẢN QUY ĐỊNH CHUNG</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>Người dùng chịu trách nhiệm về hoạt động của tài khoản.</li>
        <li>Không chấp nhận thông tin trái pháp luật, thuần phong mỹ tục.</li>
        <li>Sản phẩm không rõ nguồn gốc bị cấm.</li>
        <li>Hành vi phá hoại, gây tổn hại hệ thống sẽ bị xử lý.</li>
        <li>...</li>
      </ul>

      <h3 className="mt-6 font-semibold">
        II. ĐIỀU KHOẢN CHI TIẾT KHI SỬ DỤNG DỊCH VỤ TRỌ MỚI
      </h3>
      <p className="mt-2 font-medium">Điều 1: Nguyên tắc sử dụng</p>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>Người dùng phải chịu trách nhiệm về nội dung tài khoản.</li>
        <li>Không đăng nội dung trái thuần phong mỹ tục.</li>
      </ul>
    </>
  );
}

export default TermsAndConditions;
