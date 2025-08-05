import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext";

// Lấy Client ID từ biến môi trường để bảo mật hơn
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    {/* 
      Bọc AuthProvider bên trong GoogleOAuthProvider.
      Điều này cho phép bạn sử dụng các hook của Google bên trong context của mình.
    */}
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
