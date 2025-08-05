import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// --- Import Layouts ---
import MainLayout from "../layouts/MainLayout";
import LandlordHomeLayout from "../layouts/LandLordHomeLayout";
import PolicyLayout from "../layouts/PolicyLayout";
import UserProfileLayout from "../layouts/UserProfileLayout";

// --- Import Pages ---
import Home from "../pages/Home";
import ContactPage from "../pages/public_page/ContactPage";
import LandlordLogin from "../pages/landlord/LandlordLogin";
import TermsAndConditions from "../pages/public_page/TermsAndConditions";
// ... import các trang policy khác của bạn ...

// --- Import Components ---
import NotFoundPage from "../components/404";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Router>
      <>
        <Routes>
          {/* CẤU TRÚC 1: CÁC TRANG DÙNG CHUNG HEADER/FOOTER (MAINLAYOUT) */}
          <Route path="/" element={<MainLayout />}>
            
            {/* Các route con công khai (ai cũng xem được) */}
            <Route index element={<Home />} />
            <Route path="contact" element={<ContactPage />} />
            
            {/* Route cho các trang chính sách */}
            <Route 
              path="terms-and-conditions" 
              element={<PolicyLayout><TermsAndConditions /></PolicyLayout>} 
            />
            {/* ... Thêm các route policy khác của bạn vào đây ... */}

            {/* Các route con cần đăng nhập (sẽ được bọc bởi ProtectedRoute) */}
            <Route element={<ProtectedRoute />}>
              <Route path="profile" element={<UserProfileLayout />} />
              {/* Nếu có các trang khác cần đăng nhập, hãy thêm vào đây */}
              {/* Ví dụ: <Route path="settings" element={<SettingsPage />} /> */}
            </Route>

          </Route>

          {/* CẤU TRÚC 2: CÁC TRANG CÓ LAYOUT HOÀN TOÀN RIÊNG BIỆT */}
          <Route path="/landlord-login" element={<LandlordLogin />} />
          
          <Route 
            path="/landlord/*" 
            element={
              <ProtectedRoute>
                <LandlordHomeLayout />
              </ProtectedRoute>
            }
          />

          {/* Route 404 phải nằm ở cuối cùng để bắt tất cả các URL không khớp */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* ToastContainer (đã cấu hình chuẩn) */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light"
          transition={Slide}
          limit={1}
          icon={false}
          closeButton={false}
          toastClassName={() => "relative flex p-0 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-transparent"}
          bodyClassName={() => "text-sm font-white font-med block p-0 w-full"}
        />
      </>
    </Router>
  );
}

export default AppRoutes;