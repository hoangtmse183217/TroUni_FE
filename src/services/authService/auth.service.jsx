import axiosClient from "../axiosClient";

// Đăng ký
export const registerUser = (payload) => {
  return axiosClient.post("/public/register", payload);
};

// Đăng nhập
export const loginUser = (payload) => {
  return axiosClient.post("/public/login", payload);
};

// Đăng nhập bằng Google
export const loginWithGoogle = (payload) => {
  return axiosClient.post("/public/auth/google", payload); // payload = { idToken }
};

// Gửi yêu cầu OTP quên mật khẩu
export const requestPasswordOtp = (payload) => {
  return axiosClient.post("/public/auth/forgot-password", payload); // payload = { email }
};

// Xác thực OTP
export const verifyOtp = (payload) => {
  return axiosClient.post("/public/auth/verify-otp", payload); // payload = { email, otp }
};

// Đặt lại mật khẩu mới
export const resetPassword = (payload) => {
  return axiosClient.post("/public/auth/reset-password", payload); // payload = { email, otp, newPassword }
};
