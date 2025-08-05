import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { LoaderCircle } from "lucide-react";
import { useAuth } from "../contexts/AuthContext"; // Giả sử bạn có hàm updateUser trong context
import CustomToast from "./CustomToast";
// import { updateUserProfile } from '../services/userService'; // Service để gọi API

// Component con cho từng trường input
const FormRow = ({ label, children }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 md:gap-4 py-4 border-b border-gray-100">
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <div className="md:col-span-2">{children}</div>
  </div>
);

// Schema validation
const schema = yup.object().shape({
  name: yup.string().required("Họ tên là bắt buộc."),
  gender: yup.string().required("Vui lòng chọn giới tính."),
  dob: yup.string().required("Ngày sinh là bắt buộc."),
  nationalId: yup.string().required("Số CCCD là bắt buộc."),
  address: yup.string().required("Địa chỉ là bắt buộc."),
});

const ProfileForm = () => {
  // Giả sử bạn lấy user từ context và có hàm updateUser
  const { user, login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name || "",
      gender: user?.gender || "Nam",
      dob: user?.dob || "",
      nationalId: user?.nationalId || "",
      address: user?.address || "",
    },
  });

  const onSubmit = async (data) => {
    const toastId = "update-profile-promise";
    // Giả lập API call
    const updateUserProfile = (payload) =>
      new Promise((resolve) =>
        setTimeout(
          () => resolve({ data: { data: { ...user, ...payload } } }),
          1000
        )
      );

    await toast.promise(
      updateUserProfile(data).then((res) => {
        // Sau khi API thành công, cập nhật lại user trong context
        const updatedUser = res.data.data;
        login({ user: updatedUser, token: localStorage.getItem("token") }); // Cập nhật lại user trong AuthContext
      }),
      {
        pending: {
          render: ({ closeToast }) => (
            <CustomToast
              type="loading"
              title="Đang cập nhật..."
              closeToast={closeToast}
            />
          ),
        },
        success: {
          render: ({ closeToast }) => (
            <CustomToast
              type="success"
              title="Thành công!"
              message="Thông tin của bạn đã được cập nhật."
              closeToast={closeToast}
            />
          ),
        },
        error: {
          render: ({ data: err, closeToast }) => (
            <CustomToast
              type="error"
              title="Cập nhật thất bại!"
              message={err?.response?.data?.message || "Đã có lỗi xảy ra."}
              closeToast={closeToast}
            />
          ),
        },
      },
      { toastId }
    );
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">THÔNG TIN CÁ NHÂN</h2>
      <p className="mt-1 text-sm text-gray-500">
        Cập nhật thông tin của bạn và tìm hiểu các thông tin này được sử dụng ra
        sao.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <FormRow label="Họ tên">
          <input
            type="text"
            {...register("name")}
            className="form-input"
            placeholder="Hoàng Trịnh"
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </FormRow>

        <FormRow label="Giới tính">
          <select {...register("gender")} className="form-input">
            <option>Nam</option>
            <option>Nữ</option>
            <option>Khác</option>
          </select>
          {errors.gender && (
            <p className="form-error">{errors.gender.message}</p>
          )}
        </FormRow>

        <FormRow label="Ngày sinh">
          <input type="date" {...register("dob")} className="form-input" />
          {errors.dob && <p className="form-error">{errors.dob.message}</p>}
        </FormRow>

        <FormRow label="Số Căn cước công dân">
          <input
            type="text"
            {...register("nationalId")}
            className="form-input"
            placeholder="Vui lòng nhập"
          />
          {errors.nationalId && (
            <p className="form-error">{errors.nationalId.message}</p>
          )}
        </FormRow>

        <FormRow label="Địa chỉ">
          <input
            type="text"
            {...register("address")}
            className="form-input"
            placeholder="Vui lòng nhập"
          />
          {errors.address && (
            <p className="form-error">{errors.address.message}</p>
          )}
        </FormRow>

        <div className="mt-8 flex justify-end">
          <button type="submit" disabled={isSubmitting} className="btn-primary">
            {isSubmitting && (
              <LoaderCircle size={18} className="animate-spin" />
            )}
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
