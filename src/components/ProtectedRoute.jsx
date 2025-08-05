import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  // Lấy trạng thái xác thực và trạng thái loading từ context
  const { isAuthenticated, loading } = useAuth();

  // Nếu đang trong quá trình kiểm tra (ví dụ: đọc từ localStorage),
  // hiển thị một màn hình chờ để tránh "nháy" giao diện.
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Đang tải...</div>
      </div>
    );
  }

  // Nếu đã xác thực, render các component con (ví dụ: UserProfileLayout).
  // <Outlet /> là một placeholder cho các route con.
  if (isAuthenticated) {
    return <Outlet />;
  }

  // Nếu không xác thực, chuyển hướng người dùng về trang chủ.
  // `replace` sẽ thay thế lịch sử duyệt web, người dùng không thể nhấn "Back" để quay lại trang được bảo vệ.
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
