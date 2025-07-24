import React from "react";

function TermsOfOperation() {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Quy chế hoạt động</h2>
      <h3 className="font-semibold">I. NGUYÊN TẮC CHUNG</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>Nền tảng hoạt động trên nguyên tắc tự nguyện và trung thực.</li>
        <li>
          Các bên tham gia cần tuân thủ đúng pháp luật và quy định của nền tảng.
        </li>
      </ul>

      <h3 className="mt-6 font-semibold">II. CƠ CHẾ KẾT NỐI VÀ GIAO DỊCH</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Người dùng có thể đăng tin, tìm kiếm và liên hệ thông qua nền tảng.
        </li>
        <li>
          Giao dịch được thực hiện trực tiếp giữa hai bên, nền tảng không chịu
          trách nhiệm nếu có tranh chấp.
        </li>
      </ul>

      <h3 className="mt-6 font-semibold">III. CHẤM DỨT HOẠT ĐỘNG</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Chúng tôi có quyền chấm dứt tài khoản vi phạm quy định mà không cần
          báo trước.
        </li>
        <li>
          Người dùng có thể yêu cầu hủy tài khoản bằng cách gửi yêu cầu qua
          email hỗ trợ.
        </li>
      </ul>
    </>
  );
}

export default TermsOfOperation;
