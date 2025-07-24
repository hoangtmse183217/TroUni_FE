import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";

import SearchBar from "../components/SearchBar";
import BoxHeadContent from "../components/BoxHeadContent";

import TermsAndConditions from "../pages/public_page/TermsAndConditions";
import TermsOfUse from "../pages/public_page/TermsOfUse";
import ComplaintPolicy from "../pages/public_page/ComplaintPolicy";
import PrivacyPolicy from "../pages/public_page/PrivacyPolicy";
import TermsOfOperation from "../pages/public_page/TermsOfOperation";
import PolicyLayout from "../layouts/PolicyLayout";
import ContactPage from "../pages/public_page/ContactPage";

// Wrapper component to use useLocation
function Layout() {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === "/" && <BoxHeadContent />}
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<ContactPage />} />
        
        <Route
          path="/terms-and-conditions"
          element={
            <PolicyLayout>
              <TermsAndConditions />
            </PolicyLayout>
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <PolicyLayout>
              <TermsOfUse />
            </PolicyLayout>
          }
        />
        <Route
          path="/terms-of-operation"
          element={
            <PolicyLayout>
              <TermsOfOperation />
            </PolicyLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PolicyLayout>
              <PrivacyPolicy />
            </PolicyLayout>
          }
        />
        <Route
          path="/complaint-policy"
          element={
            <PolicyLayout>
              <ComplaintPolicy />
            </PolicyLayout>
          }
        />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
}

function AppRoutes() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default AppRoutes;
