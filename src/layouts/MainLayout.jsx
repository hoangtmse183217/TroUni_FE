import React from "react";
import { useLocation, Outlet } from "react-router-dom";

// Import các component cấu thành nên layout này
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import BoxHeadContent from "../components/BoxHeadContent";

/**
 * MainLayout là layout chính của ứng dụng, cung cấp Header và Footer chung.
 * Nó sử dụng <Outlet /> để render các component con dựa trên định tuyến trong AppRoutes.jsx.
 */
const MainLayout = () => {
  // Sử dụng hook useLocation để xác định xem trang hiện tại có phải là trang chủ hay không
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    // Sử dụng Fragment <>...</> để bọc các component mà không tạo thêm thẻ div không cần thiết
    <>
      {/* Header sẽ luôn được hiển thị ở tất cả các trang sử dụng layout này */}
      <Header />

      {/* 
        Các component đặc biệt như BoxHeadContent và SearchBar chỉ được hiển thị
        khi người dùng đang ở trang chủ (path là "/").
      */}
      {isHomePage && <BoxHeadContent />}
      {isHomePage && <SearchBar />}

      {/* 
        Thẻ <main> chứa nội dung chính của trang.
        <Outlet /> là một placeholder (vùng giữ chỗ) đặc biệt của React Router.
        Nó sẽ tự động render component tương ứng với route con đang hoạt động.
        Ví dụ:
        - Khi URL là "/", <Outlet /> sẽ render <Home />.
        - Khi URL là "/contact", <Outlet /> sẽ render <ContactPage />.
        - Khi URL là "/profile", <Outlet /> sẽ render <UserProfileLayout />.
        - ... và cứ thế.
        Class "min-h-screen" giúp đảm bảo Footer luôn nằm ở cuối trang, ngay cả khi nội dung ngắn.
      */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer sẽ luôn được hiển thị ở tất cả các trang sử dụng layout này */}
      <Footer />
    </>
  );
};

export default MainLayout;
