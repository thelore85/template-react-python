import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Utility
import { initializeTagManager } from "../utility/gtm";
import  usePageTracking  from "../utility/usePageTracking";
import ScrollToTop from "./scrollToTop";
import injectContext from "../store/appContext";

// Layout
import LogoLayout from "../layouts/LogoLayout";
import DashboardLayout from "../layouts/DashLayout";
import NavbarLayout from "../layouts/NavbarLayout";

// Pages
import Login from "../pages/login/login.js";
import Home from "../pages/home/home";
import Signup from "../pages/login/Signup";
import PasswordRequest from "../pages/login/PasswordRequest.js";
import PasswordSetting from "../pages/login/PasswordSetting.js";
import Dashboard from "../pages/dashboard/Dashboard.js";
import File404 from "../pages/404/File404";


const Router = () => {

  useEffect(() => {
    initializeTagManager();
  }, []);
  
  usePageTracking();
  

	return (
		<div>
      <ScrollToTop>
        <Routes>

          {/* FRONTPAGE */}
            <Route index element={<NavbarLayout><Home /></NavbarLayout>} />
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
      </ScrollToTop>
		</div>
	);
};

export default injectContext(Router);
