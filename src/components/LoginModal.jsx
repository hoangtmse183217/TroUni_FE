import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { X, Mail, Eye, EyeOff, KeyRound, LoaderCircle } from "lucide-react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios"; // ✅ Cần để gọi API của Google
import { useGoogleLogin } from "@react-oauth/google"; // ✅ Dùng hook thay cho component

import {
  loginUser,
  loginWithGoogle,
} from "../services/authService/auth.service";
import { useAuth } from "../contexts/AuthContext";
import CustomToast from "./CustomToast";

// 1. Schema xác thực dữ liệu (không đổi)
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải có tối thiểu 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
});

// 2. Component SocialButton (không đổi)
const SocialButton = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:shadow-sm"
  >
    <img src={icon} alt={`${label} logo`} className="h-5 w-5" />
    <span>Tiếp tục với {label}</span>
  </button>
);

// 3. Component chính: LoginModal
const LoginModal = ({ isOpen, onClose, onSwitchToForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  // Hàm đăng nhập bằng Email/Mật khẩu (không đổi)
  const onSubmit = async (data) => {
    const toastId = "login-promise-toast";
    await toast.promise(
      loginUser(data),
      {
        pending: {
          render: ({ closeToast }) => (
            <CustomToast
              type="loading"
              title="Đang đăng nhập..."
              message="Vui lòng chờ trong giây lát."
              closeToast={closeToast}
            />
          ),
        },
        success: {
          render: ({ data: res, closeToast }) => {
            const { token, user } = res.data.data;
            login({ user, token });
            onClose();
            return (
              <CustomToast
                type="success"
                title="Đăng nhập thành công!"
                message={`Chào mừng ${
                  user.name || user.fullName
                } quay trở lại.`}
                closeToast={closeToast}
              />
            );
          },
        },
        error: {
          render: ({ data: err, closeToast }) => {
            const errorMessage =
              err?.response?.data?.message ||
              "Thông tin đăng nhập không chính xác.";
            return (
              <CustomToast
                type="error"
                title="Đã xảy ra lỗi!"
                message={errorMessage}
                closeToast={closeToast}
              />
            );
          },
        },
      },
      { toastId }
    );
  };

  // Hàm xử lý logic sau khi Google trả về access_token
  const handleGoogleLogin = async (tokenResponse) => {
    const toastId = "google-login-promise";
    const accessToken = tokenResponse.access_token;

    await toast.promise(
      (async () => {
        const { data: profile } = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo",
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        const payload = {
          name: profile.name,
          email: profile.email,
          picture: profile.picture,
          googleId: profile.id,
        };
        return loginWithGoogle(payload);
      })(),
      {
        pending: {
          render: ({ closeToast }) => (
            <CustomToast
              type="loading"
              title="Đang xác thực..."
              message="Vui lòng chờ."
              closeToast={closeToast}
            />
          ),
        },
        success: {
          render: ({ data: res, closeToast }) => {
            const { token, user } = res.data.data;
            login({ user, token });
            onClose();
            return (
              <CustomToast
                type="success"
                title="Đăng nhập thành công!"
                message={`Chào mừng ${user.name || user.fullName}!`}
                closeToast={closeToast}
              />
            );
          },
        },
        error: {
          render: ({ data: err, closeToast }) => {
            const errorMessage =
              err?.response?.data?.message || "Đăng nhập Google thất bại.";
            return (
              <CustomToast
                type="error"
                title="Đăng nhập lỗi!"
                message={errorMessage}
                closeToast={closeToast}
              />
            );
          },
        },
      },
      { toastId }
    );
  };

  // Sử dụng hook `useGoogleLogin` để kích hoạt đăng nhập
  const triggerGoogleLogin = useGoogleLogin({
    onSuccess: handleGoogleLogin,
    onError: () => toast.error("Đăng nhập Google thất bại. Vui lòng thử lại."),
  });

  const handleFeatureComingSoon = () => {
    toast(
      ({ closeToast }) => (
        <CustomToast
          type="info"
          title="Thông báo"
          message="Tính năng này đang được phát triển, vui lòng quay lại sau."
          closeToast={closeToast}
        />
      ),
      { toastId: "coming-soon-toast" }
    );
  };

  const backdropVariants = { visible: { opacity: 1 }, hidden: { opacity: 0 } };
  const modalVariants = {
    hidden: { y: "50px", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: { y: "50px", opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={onClose}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              aria-label="Đóng modal"
              className="absolute top-4 right-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              onClick={onClose}
            >
              <X size={22} />
            </button>
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Chào mừng bạn
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Đăng nhập để bắt đầu hành trình của bạn.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="your@email.com"
                    className={`w-full rounded-lg border py-3 pl-11 pr-4 text-sm outline-none transition-all ${
                      errors.email
                        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                        : "border-slate-300 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Mật khẩu
                </label>
                <div className="relative">
                  <KeyRound className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="••••••••"
                    className={`w-full rounded-lg border py-3 pl-11 pr-10 text-sm outline-none transition-all ${
                      errors.password
                        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                        : "border-slate-300 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                    }`}
                  />
                  <button
                    type="button"
                    aria-label="Hiện/Ẩn mật khẩu"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
                <div className="mt-2 text-right">
                  {/* ✅ Sửa lại link này */}
                  <button
                    type="button"
                    onClick={onSwitchToForgotPassword}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Quên mật khẩu?
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting && (
                  <LoaderCircle size={18} className="animate-spin" />
                )}
                <span>
                  {isSubmitting ? "Đang xử lý..." : "Tiếp tục với Email"}
                </span>
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-3 text-slate-400">hoặc</span>
              </div>
            </div>

            <div className="space-y-3">
              <SocialButton
                icon="/google.webp"
                label="Google"
                onClick={() => triggerGoogleLogin()}
              />
              <SocialButton
                icon="/facebook.webp"
                label="Facebook"
                onClick={handleFeatureComingSoon}
              />
            </div>

            <p className="mt-6 text-center text-xs text-slate-500">
              Bằng việc tiếp tục, bạn đồng ý với{" "}
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Điều khoản Dịch vụ
              </a>{" "}
              và{" "}
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Chính sách Bảo mật
              </a>{" "}
              của TroUni.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
