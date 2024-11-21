import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import LoginPage from './pages/login_page';
import SignupPage from './pages/signup_page';
import BusinessForm from './pages/craete_business';
import ForgotPasswordPage from './pages/forgot_password_page';
import Loader from './components/common/loader';
import ThemeSwitcher from './components/common/theme_switcher';
import InventoryManagementPage from './pages/inventory_management_page';
import SalesPage from './pages/sales_page';
import NotFound from './pages/not_found_page';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for fetching data or loading components
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/inventory" element={<InventoryManagementPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/create-business" element={<BusinessForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
