import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  KeyRound, // ✅ Thay thế SVG bằng icon cho nhất quán
} from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// ✅ 1. Import motion và AnimatePresence từ framer-motion
import { motion, AnimatePresence } from "framer-motion";

// ✅ 2. Cập nhật SocialButton để nhận hiệu ứng
const SocialButton = ({ icon, label }) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="flex w-full items-center justify-center space-x-3 rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
  >
    <img src={icon} alt={`${label} logo`} className="h-5 w-5" />
    <span>Tiếp tục với {label}</span>
  </motion.button>
);

// Xác thực với Yup (không đổi)
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(6, "Mật khẩu tối thiểu 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
});

const LandlordLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("✅ Dữ liệu hợp lệ:", data);
    // Gọi API đăng nhập ở đây
  };

  // ✅ 3. Định nghĩa các "variants" cho hiệu ứng
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        // Hiệu ứng so le cho các phần tử con
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const errorVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, y: -5, height: 0 },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* Thay thế class animate-fade-in bằng motion.div */}
      <motion.div
        className="flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Bên trái: Banner */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/landlordloginbanner.png"
            alt="Một căn phòng trọ hiện đại và sạch sẽ"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Bên phải: Form */}
        <div className="flex w-full flex-col p-8 md:w-1/2 lg:p-12">
          {/* ✅ 4. Áp dụng variant cho container của form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="flex h-full flex-col"
          >
            <div>
              <motion.div variants={itemVariants} className="mb-6 text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Chào Mừng Trở Lại
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Dành cho chủ trọ & môi giới. Đăng nhập để quản lý tin đăng.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <motion.div variants={itemVariants}>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Địa chỉ email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="Nhập địa chỉ email của bạn"
                      className={`w-full rounded-lg border py-3 pl-11 pr-4 text-sm outline-none transition-all ${
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                          : "border-slate-300 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                      }`}
                    />
                  </div>
                  {/* ✅ 5. Hiệu ứng cho thông báo lỗi */}
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        variants={errorVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block mb-2 text-sm font-medium text-slate-700">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <KeyRound className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="Nhập mật khẩu của bạn"
                      className={`w-full rounded-lg border py-3 pl-11 pr-10 text-sm outline-none transition-all ${
                        errors.password
                          ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                          : "border-slate-300 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <AnimatePresence>
                    {errors.password && (
                      <motion.p
                        variants={errorVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="mt-1 text-sm text-red-500"
                      >
                        {errors.password.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* ✅ 6. Hiệu ứng cho nút submit */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                      boxShadow: "0 8px 20px -5px rgb(99 102 241 / 0.5)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-md"
                  >
                    Tiếp tục với Email
                  </motion.button>
                </motion.div>
              </form>

              <motion.div variants={itemVariants} className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-3 text-slate-400">hoặc</span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <SocialButton icon="/google.webp" label="Google" />
                <SocialButton icon="/facebook.webp" label="Facebook" />
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="mt-8 text-center text-xs text-slate-500 leading-relaxed"
              >
                Khi tiếp tục, bạn đồng ý với{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Điều khoản Dịch vụ
                </a>{" "}
                và{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Chính sách Bảo mật
                </a>{" "}
                của TroUni.
              </motion.p>
            </div>

            {/* Điều hướng dưới cùng */}
            <div className="mt-auto border-t border-slate-200 pt-6">
              <div className="flex justify-between items-center text-sm">
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Về Trang Chủ</span>
                </Link>
                <Link
                  to="/landlord/*"
                  className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <span>Chủ Trọ, Môi Giới</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandlordLoginPage;
