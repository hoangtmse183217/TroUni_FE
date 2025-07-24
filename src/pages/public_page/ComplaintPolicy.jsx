import React from "react";

function ComplaintPolicy() {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Giải quyết khiếu nại</h2>
      <h3 className="font-semibold">I. NGUYÊN TẮC GIẢI QUYẾT</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Chúng tôi cam kết tiếp nhận và xử lý mọi khiếu nại một cách công bằng
          và nhanh chóng.
        </li>
        <li>
          Mọi tranh chấp sẽ được ưu tiên giải quyết thông qua thương lượng giữa
          các bên.
        </li>
      </ul>

      <h3 className="mt-6 font-semibold">II. QUY TRÌNH TIẾP NHẬN</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Người dùng gửi khiếu nại qua email hoặc biểu mẫu liên hệ trên website.
        </li>
        <li>Thời gian phản hồi ban đầu là trong vòng 3 ngày làm việc.</li>
      </ul>

      <h3 className="mt-6 font-semibold">III. GIẢI QUYẾT VÀ PHẢN HỒI</h3>
      <ul className="list-disc ml-5 space-y-2 text-sm">
        <li>
          Sau khi xác minh thông tin, chúng tôi sẽ đưa ra hướng xử lý trong vòng
          7 ngày.
        </li>
        <li>
          Nếu không đạt được thỏa thuận, các bên có thể đưa vụ việc lên cơ quan
          chức năng.
        </li>
      </ul>
    </>
  );
}

export default ComplaintPolicy;
