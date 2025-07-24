import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Chính sách bảo mật</h2>
      <h3 className="font-semibold">I. THU THẬP THÔNG TIN</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Chúng tôi thu thập thông tin cá nhân khi bạn đăng ký tài khoản hoặc
          sử dụng dịch vụ.
        </li>
        <li>
          Thông tin được sử dụng nhằm cải thiện trải nghiệm và hỗ trợ người
          dùng.
        </li>
      </ul>

      <h3 className="mt-6 font-semibold">II. LƯU TRỮ VÀ BẢO MẬT</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Dữ liệu được lưu trữ trên hệ thống có bảo mật và chỉ dùng nội bộ.
        </li>
        <li>
          Chúng tôi áp dụng các biện pháp kỹ thuật để ngăn chặn truy cập trái
          phép.
        </li>
      </ul>

      <h3 className="mt-6 font-semibold">III. QUYỀN CỦA NGƯỜI DÙNG</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Người dùng có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân.
        </li>
        <li>
          Mọi yêu cầu sẽ được xử lý trong vòng 7 ngày làm việc.
        </li>
      </ul>
    </>
  );
}

export default PrivacyPolicy;
