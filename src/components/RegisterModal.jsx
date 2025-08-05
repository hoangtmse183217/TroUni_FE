import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  X,
  Mail,
  Eye,
  EyeOff,
  User,
  KeyRound,
  LoaderCircle,
} from "lucide-react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

import {
  registerUser,
  loginWithGoogle,
} from "../services/authService/auth.service";
import CustomToast from "./CustomToast";
import { useAuth } from "../contexts/AuthContext";

// 1. Schema xác thực dữ liệu
const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập họ và tên của bạn."),
  email: yup
    .string()
    .email("Định dạng email không hợp lệ.")
    .required("Vui lòng nhập địa chỉ email."),
  password: yup
    .string()
    .min(6, "Mật khẩu cần ít nhất 6 ký tự.")
    .required("Vui lòng nhập mật khẩu."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp.")
    .required("Vui lòng xác nhận lại mật khẩu."),
});

// 2. Component InputField (Tái sử dụng)
const InputField = ({
  id,
  label,
  type,
  register,
  error,
  icon,
  showPasswordToggle = false,
  onTogglePassword,
  isPasswordVisible,
  ...props
}) => (
  <div>
    <label
      htmlFor={id}
      className="block mb-1.5 text-sm font-medium text-slate-700"
    >
      {label}
    </label>
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400">
        {icon}
      </span>
      <input
        id={id}
        type={
          showPasswordToggle ? (isPasswordVisible ? "text" : "password") : type
        }
        {...register(id)}
        {...props}
        className={`w-full rounded-lg border bg-slate-50 py-2.5 pl-12 pr-10 text-slate-800 transition-colors duration-300 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
            : "border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
        } focus:outline-none focus:ring-2`}
      />
      {showPasswordToggle && (
        <span
          onClick={onTogglePassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-600"
        >
          {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
        </span>
      )}
    </div>
    <div className="h-5 mt-1">
      {error && <p className="text-xs text-red-600">{error.message}</p>}
    </div>
  </div>
);

// 3. Component SocialButton (Tái sử dụng)
const SocialButton = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex w-full items-center justify-center gap-3 rounded-lg bg-white/20 px-4 py-2.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/30"
  >
    <img src={icon} alt={`${label} logo`} className="h-5 w-5" />
    <span>Tiếp tục với {label}</span>
  </button>
);

// 4. Component chính: RegisterModal
const RegisterModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });

  // Hàm đăng ký bằng Email
  const onSubmit = async (data) => {
    const toastId = "register-promise-toast";
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "USER",
    };

    await toast.promise(
      registerUser(payload),
      {
        pending: {
          render: ({ closeToast }) => (
            <CustomToast
              type="loading"
              title="Đang tạo tài khoản..."
              message="Vui lòng chờ trong giây lát."
              closeToast={closeToast}
            />
          ),
        },
        success: {
          render: ({ closeToast }) => {
            onClose();
            return (
              <CustomToast
                type="success"
                title="Đăng ký thành công!"
                message="Chào mừng bạn đến với TroUni. Hãy đăng nhập nhé."
                closeToast={closeToast}
              />
            );
          },
        },
        error: {
          render: ({ data: err, closeToast }) => {
            const errorMessage =
              err?.response?.data?.message ||
              "Đã có lỗi xảy ra. Vui lòng thử lại.";
            return (
              <CustomToast
                type="error"
                title="Đăng ký thất bại!"
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
  const handleGoogleAuth = async (tokenResponse) => {
    const toastId = "google-auth-promise";
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
                title="Xác thực thành công!"
                message={`Chào mừng ${user.name || user.fullName}!`}
                closeToast={closeToast}
              />
            );
          },
        },
        error: {
          render: ({ data: err, closeToast }) => {
            const errorMessage =
              err?.response?.data?.message || "Xác thực Google thất bại.";
            return (
              <CustomToast
                type="error"
                title="Xác thực lỗi!"
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

  // Sử dụng hook `useGoogleLogin`
  const triggerGoogleAuth = useGoogleLogin({
    onSuccess: handleGoogleAuth,
    onError: () => toast.error("Xác thực Google thất bại. Vui lòng thử lại."),
  });

  const handleFeatureComingSoon = () =>
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
            className="relative w-full max-w-4xl grid md:grid-cols-2 grid-cols-1 bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Cột trái */}
            <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-blue-600 to-indigo-700">
              <h2 className="text-3xl font-bold text-white leading-tight">
                Bắt đầu hành trình mới với TroUni.
              </h2>
              <p className="mt-4 text-blue-200">
                Đăng ký nhanh bằng tài khoản mạng xã hội của bạn, hoặc điền
                thông tin bên cạnh.
              </p>
              <div className="mt-8 space-y-4">
                <SocialButton
                  icon="/google.webp"
                  label="Google"
                  onClick={() => triggerGoogleAuth()}
                />
                <SocialButton
                  icon="/facebook.webp"
                  label="Facebook"
                  onClick={handleFeatureComingSoon}
                />
              </div>
            </div>

            {/* Cột phải: form */}
            <div className="relative p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-slate-800">
                Tạo tài khoản
              </h2>
              <p className="mt-1 text-slate-500 mb-6">
                Điền thông tin của bạn vào form bên dưới.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
                <InputField
                  id="name"
                  label="Họ và Tên"
                  placeholder="Nguyễn Văn An"
                  register={register}
                  error={errors.name}
                  icon={<User size={18} />}
                />
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="your.email@example.com"
                  register={register}
                  error={errors.email}
                  icon={<Mail size={18} />}
                />
                <InputField
                  id="password"
                  label="Mật khẩu"
                  type="password"
                  placeholder="••••••••"
                  register={register}
                  error={errors.password}
                  icon={<KeyRound size={18} />}
                  showPasswordToggle
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  isPasswordVisible={showPassword}
                />
                <InputField
                  id="confirmPassword"
                  label="Xác nhận Mật khẩu"
                  type="password"
                  placeholder="••••••••"
                  register={register}
                  error={errors.confirmPassword}
                  icon={<KeyRound size={18} />}
                  showPasswordToggle
                  onTogglePassword={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  isPasswordVisible={showConfirmPassword}
                />

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting && (
                      <LoaderCircle size={20} className="animate-spin" />
                    )}
                    {isSubmitting ? "Đang xử lý..." : "Tạo tài khoản"}
                  </button>
                </div>
              </form>
              <p className="mt-6 text-center text-xs text-slate-500">
                Bằng việc đăng ký, bạn đồng ý với{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Điều khoản Dịch vụ
                </a>{" "}
                &{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Chính sách Bảo mật
                </a>
                .
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
