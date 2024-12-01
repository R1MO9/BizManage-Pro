import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import LoginPage from './pages/login_page';
import SignupPage from './pages/signup_page';
import CreateBusiness from './pages/create-business';
import ForgotPasswordPage from './pages/forgot_password_page';
import Loader from './components/common/loader';
import ThemeSwitcher from './components/common/theme_switcher';
import InventoryManagementPage from './pages/inventory_management_page';
import SalesPage from './pages/sales_page';
import HomePage from './pages/home_page';
import ContactPage from './pages/contact_page';
import NotFound from './pages/not_found_page';
import LogoutPage from './pages/logout_page';
import BusinessProfile from './pages/business-profile.jsx';
import VerifyAccount from './pages/verify_account.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }
  , []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/inventory" element={<InventoryManagementPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/create-business" element={<CreateBusiness />} />
        <Route path="/business-profile" element={<BusinessProfile />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/contact" element={<ContactPage />} />

      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
