import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import injectContext from "../store/appContext";
import { initializeTagManager } from "../utility/gtm";
import  usePageTracking  from "../utility/usePageTracking";

// Layout
import LogoLayout from "../layouts/LogoLayout";
import DashboardLayout from "../layouts/DashLayout";
import NavbarLayout from "../layouts/NavbarLayout";

// Pages
import Login from "../pages/login/login.js";
import Signup from "../pages/login/Signup";
import PasswordRequest from "../pages/login/PasswordRequest.js";
import PasswordSetting from "../pages/login/PasswordSetting.js";
import Dashboard from "../pages/dashboard/Dashboard.js";
import File404 from "../pages/404/File404";
import HomePage from "../pages/home/HomePage.js";


const Router = () => {

  useEffect(() => {
    initializeTagManager();
  }, []);
  
  usePageTracking();
  

	return (
		<div>
      
        <Routes>

          {/* FRONTPAGE */}
            {/* <Route index element={<NavbarLayout><Home /></NavbarLayout>} /> */}
            <Route path="/" element={<LogoLayout><HomePage/></LogoLayout>} />
            <Route path="*" element={<NavbarLayout><File404 /></NavbarLayout>} />
            
            {/* SIGNUP */}
            <Route path="/login/" element={<LogoLayout><Login /></LogoLayout>} />
            <Route path="/signup/" element={<LogoLayout><Signup /></LogoLayout>} />
            <Route path="/password-request/" element={<LogoLayout><PasswordRequest /></LogoLayout>} />
            <Route path="/password-setting" element={<LogoLayout><PasswordSetting /></LogoLayout>} />
            {/* <Route path="/password-setting/*" element={<LogoLayout><PasswordSetting /></LogoLayout>} /> */}

            {/* DASHBOARD */}
            <Route path="/dashboard/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          
        </Routes>
      
		</div>
	);
};

export default injectContext(Router);
