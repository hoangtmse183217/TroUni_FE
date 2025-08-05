import React, { useState } from 'react';
import { Home, User, CreditCard, Star, Heart, Bell, LogOut, MessageSquare } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import ProfileForm from '../components/ProfileForm'; // Form người dùng

// Component cho mỗi mục trong sidebar
const SidebarLink = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {React.createElement(icon, { size: 18 })}
    <span>{label}</span>
  </button>
);

const UserProfileLayout = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("Thông tin cá nhân");

  const sidebarItems = [
    { icon: User, label: "Thông tin cá nhân" },
    { icon: CreditCard, label: "Thông tin tài khoản" },
    { icon: Home, label: "Thông tin lưu trú" },
    { icon: Star, label: "Quản lý đánh giá" },
    { icon: Heart, label: "Lưu trữ" },
    { icon: Bell, label: "Thông báo" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Thông tin cá nhân":
        return <ProfileForm />;
      // Thêm case cho tab khác ở đây nếu có
      default:
        return (
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-lg font-semibold">
              Tính năng đang được phát triển
            </h3>
            <p className="text-gray-500 mt-2">Vui lòng quay lại sau.</p>
          </div>
        );
    }
  };

  // Layout này sẽ được render bên trong <Outlet /> của MainLayout
  return (
    <div className="bg-gray-50 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex flex-col items-center text-center border-b pb-4">
              <img
                src={user?.picture || "/default-avatar.jpg"}
                alt="Avatar"
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <h3 className="font-bold text-gray-800">{user?.name}</h3>
              <p className="text-xs text-gray-500">ID: #{user?.id || "0000"}</p>
            </div>
            <nav className="mt-4 space-y-1">
              {sidebarItems.map((item) => (
                <SidebarLink
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  isActive={activeTab === item.label}
                  onClick={() => setActiveTab(item.label)}
                />
              ))}
              <div className="pt-2 mt-2 border-t">
                <SidebarLink icon={LogOut} label="Đăng xuất" onClick={logout} />
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">{renderContent()}</main>

        {/* Nút Hỗ trợ (tùy chọn) */}
        <button
          className="fixed bottom-8 right-8 bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-transform hover:scale-110"
          aria-label="Hỗ trợ"
        >
          <MessageSquare size={28} />
        </button>
      </div>
    </div>
  );
};

export default UserProfileLayout;