import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

// Tạo Context
const AuthContext = createContext(null);

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  // Lần đầu tải app, đọc dữ liệu từ localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      // Chỉ cần đọc user vì token đã được khởi tạo ngay trong useState
      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("❌ Lỗi khi parse user từ localStorage:", error);
      // Nếu dữ liệu hỏng, xóa nó đi
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } finally {
      setLoading(false); // Kết thúc loading dù thành công hay thất bại
    }
  }, [token]); // Chỉ chạy lại khi token thay đổi (ví dụ khi logout)

  // ✅ HÀM LOGIN CHUẨN: Cập nhật cả state và localStorage
  const login = useCallback(({ user, token }) => {
    if (user && token) {
      // 1. Cập nhật state của React -> Khiến Header và các component khác RE-RENDER NGAY LẬP TỨC
      setUser(user);
      setToken(token);

      // 2. Lưu vào localStorage để duy trì đăng nhập sau khi refresh
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    }
  }, []); // Hàm login không phụ thuộc vào gì, chỉ tạo 1 lần

  // Hàm Logout
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, []);

  // Tối ưu hóa giá trị context bằng useMemo
  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      login,
      logout,
      isAuthenticated: !!user && !!token,
    }),
    [user, token, loading, login, logout]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook để sử dụng context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
