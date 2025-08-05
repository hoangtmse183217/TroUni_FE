import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  X,
  Mail,
  KeyRound,
  LoaderCircle,
  Eye,
  EyeOff,
  Hash,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import CustomToast from "./CustomToast";
import {
  requestPasswordOtp,
  verifyOtp,
  resetPassword,
} from "../services/authService/auth.service";

// Schemas cho từng bước (không đổi)
const emailSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Vui lòng nhập email."),
  });
const otpSchema = yup
  .object()
  .shape({
    otp: yup
      .string()
      .length(6, "OTP phải có 6 chữ số.")
      .required("Vui lòng nhập OTP."),
  });
const passwordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, "Mật khẩu mới cần ít nhất 6 ký tự.")
    .required("Vui lòng nhập mật khẩu mới."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Mật khẩu xác nhận không khớp.")
    .required("Vui lòng xác nhận mật khẩu."),
});

// Component InputField (không đổi)
const InputField = ({ id, register, error, icon, ...props }) => (
  <div>
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400">
        {icon}
      </span>
      <input
        id={id}
        {...register(id)}
        {...props}
        className={`w-full rounded-lg border bg-slate-50 py-3 pl-12 pr-4 text-slate-800 transition-colors duration-300 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
            : "border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
        } focus:outline-none focus:ring-2`}
      />
    </div>
    {error && <p className="mt-1 text-xs text-red-600">{error.message}</p>}
  </div>
);

// Component PasswordField (không đổi)
const PasswordField = ({
  id,
  register,
  error,
  isVisible,
  onToggle,
  label,
  placeholder,
}) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1.5 block text-sm font-medium text-slate-700"
    >
      {label}
    </label>
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400">
        <KeyRound size={18} />
      </span>
      <input
        id={id}
        type={isVisible ? "text" : "password"}
        {...register(id)}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-slate-50 py-3 pl-12 pr-10 text-slate-800 transition-colors duration-300 ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
            : "border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
        } focus:outline-none focus:ring-2`}
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
      >
        {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
    {error && <p className="mt-1 text-xs text-red-600">{error.message}</p>}
  </div>
);

const ForgotPasswordModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(
      step === 1 ? emailSchema : step === 2 ? otpSchema : passwordSchema
    ),
    mode: "onBlur",
  });

  // Countdown timer effect
  useEffect(() => {
    let timer;
    if (step === 2 && countdown > 0) {
      timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [step, countdown]);

  // ✅ LOGIC GỬI OTP
  const handleSendOtp = async (data) => {
    setIsLoading(true);
    const toastId = "send-otp-promise";
    toast
      .promise(
        requestPasswordOtp(data).then(() => {
          setEmail(data.email);
          setStep(2);
          setCountdown(30);
          reset();
        }),
        {
          pending: {
            render: ({ closeToast }) => (
              <CustomToast
                type="loading"
                title="Đang gửi OTP..."
                closeToast={closeToast}
              />
            ),
          },
          success: {
            render: ({ closeToast }) => (
              <CustomToast
                type="success"
                title="Thành công!"
                message="OTP đã được gửi đến email của bạn."
                closeToast={closeToast}
              />
            ),
          },
          error: {
            render: ({ data: err, closeToast }) => (
              <CustomToast
                type="error"
                title="Gửi OTP thất bại!"
                message={err?.response?.data?.message || "Email không tồn tại."}
                closeToast={closeToast}
              />
            ),
          },
        },
        { toastId }
      )
      .finally(() => setIsLoading(false));
  };

  // ✅ LOGIC XÁC THỰC OTP
  const handleVerifyOtp = async (data) => {
    setIsLoading(true);
    const toastId = "verify-otp-promise";
    toast
      .promise(
        verifyOtp({ email, otp: data.otp }).then(() => {
          setOtp(data.otp);
          setStep(3);
          reset();
        }),
        {
          pending: {
            render: ({ closeToast }) => (
              <CustomToast
                type="loading"
                title="Đang xác thực OTP..."
                closeToast={closeToast}
              />
            ),
          },
          success: {
            render: ({ closeToast }) => (
              <CustomToast
                type="success"
                title="Xác thực thành công!"
                message="Vui lòng nhập mật khẩu mới."
                closeToast={closeToast}
              />
            ),
          },
          error: {
            render: ({ data: err, closeToast }) => (
              <CustomToast
                type="error"
                title="Xác thực thất bại!"
                message={
                  err?.response?.data?.message ||
                  "OTP không chính xác hoặc đã hết hạn."
                }
                closeToast={closeToast}
              />
            ),
          },
        },
        { toastId }
      )
      .finally(() => setIsLoading(false));
  };

  // ✅ LOGIC ĐẶT LẠI MẬT KHẨU
  const handleResetPassword = async (data) => {
    setIsLoading(true);
    const toastId = "reset-password-promise";
    toast
      .promise(
        resetPassword({ email, otp, newPassword: data.newPassword }).then(
          () => {
            // Delay một chút để người dùng kịp đọc toast thành công
            setTimeout(() => {
              onClose();
              onSwitchToLogin();
            }, 1000);
          }
        ),
        {
          pending: {
            render: ({ closeToast }) => (
              <CustomToast
                type="loading"
                title="Đang đặt lại mật khẩu..."
                closeToast={closeToast}
              />
            ),
          },
          success: {
            render: ({ closeToast }) => (
              <CustomToast
                type="success"
                title="Thành công!"
                message="Mật khẩu của bạn đã được đặt lại."
                closeToast={closeToast}
              />
            ),
          },
          error: {
            render: ({ data: err, closeToast }) => (
              <CustomToast
                type="error"
                title="Thất bại!"
                message={err?.response?.data?.message || "Đã có lỗi xảy ra."}
                closeToast={closeToast}
              />
            ),
          },
        },
        { toastId }
      )
      .finally(() => setIsLoading(false));
  };

  const ResendOtpButton = () => (
    <button
      type="button"
      disabled={countdown > 0}
      onClick={() => handleSendOtp({ email })}
      className="text-sm font-medium text-blue-600 hover:underline disabled:text-gray-500 disabled:cursor-not-allowed"
    >
      {countdown > 0 ? `Gửi lại sau (${countdown}s)` : "Gửi lại OTP"}
    </button>
  );

  const motionVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <button
              aria-label="Đóng modal"
              className="absolute top-4 right-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100"
              onClick={onClose}
            >
              <X size={22} />
            </button>
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-slate-800">
                Quên Mật Khẩu
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                {step === 1 && "Nhập email của bạn để nhận mã xác thực."}
                {step === 2 && `Mã OTP gồm 6 số đã được gửi đến ${email}.`}
                {step === 3 &&
                  "Tạo mật khẩu mới mạnh hơn cho tài khoản của bạn."}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.form
                  key="step1"
                  {...motionVariants}
                  onSubmit={handleSubmit(handleSendOtp)}
                  className="space-y-4"
                >
                  <InputField
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    register={register}
                    error={errors.email}
                    icon={<Mail size={18} />}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
                  >
                    {isLoading && (
                      <LoaderCircle size={18} className="animate-spin" />
                    )}{" "}
                    Gửi mã OTP
                  </button>
                </motion.form>
              )}

              {step === 2 && (
                <motion.form
                  key="step2"
                  {...motionVariants}
                  onSubmit={handleSubmit(handleVerifyOtp)}
                  className="space-y-4"
                >
                  <InputField
                    id="otp"
                    type="text"
                    placeholder="Nhập mã OTP"
                    register={register}
                    error={errors.otp}
                    icon={<Hash size={18} />}
                    inputMode="numeric"
                    maxLength="6"
                  />
                  <div className="text-center">
                    <ResendOtpButton />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
                  >
                    {isLoading && (
                      <LoaderCircle size={18} className="animate-spin" />
                    )}{" "}
                    Xác nhận
                  </button>
                </motion.form>
              )}

              {step === 3 && (
                <motion.form
                  key="step3"
                  {...motionVariants}
                  onSubmit={handleSubmit(handleResetPassword)}
                  className="space-y-3"
                >
                  <PasswordField
                    id="newPassword"
                    label="Mật khẩu mới"
                    placeholder="••••••••"
                    register={register}
                    error={errors.newPassword}
                    isVisible={showPassword}
                    onToggle={() => setShowPassword((p) => !p)}
                  />
                  <PasswordField
                    id="confirmPassword"
                    label="Xác nhận mật khẩu"
                    placeholder="••••••••"
                    register={register}
                    error={errors.confirmPassword}
                    isVisible={showConfirmPassword}
                    onToggle={() => setShowConfirmPassword((p) => !p)}
                  />
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
                    >
                      {isLoading && (
                        <LoaderCircle size={18} className="animate-spin" />
                      )}{" "}
                      Đặt lại mật khẩu
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ForgotPasswordModal;
