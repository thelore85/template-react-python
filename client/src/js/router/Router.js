import React from "react";
import { HashRouter as ReactRouter, Route, Routes } from "react-router-dom"; // in prod import BrowserRouter instead of HashRouter

// Layout
import DashboardLayout from "../layouts/DashboardLayout";
import NavbarLayout from "../layouts/NavbarLayout";
import AuthLayout from "../layouts/AuthLayout";

// Pages
import Home from "../pages/home/Home";
import Login from "../pages/login/login.js";
import Signup from "../pages/login/Signup";
import PasswordRequest from "../pages/login/PasswordRequest.js";
import PasswordSetting from "../pages/login/PasswordSetting.js";
import Dashboard from "../pages/dashboard/Dashboard.js";
import File404 from "../pages/404/File404";

// Components
import ScrollToTop from "./ScrollToTop";
import injectContext from "../store/appContext.js"

const Router = () => {
  const basename = process.env.BASENAME || "/";

  return (

        <ReactRouter basename={basename}>

          <ScrollToTop>
            <Routes>

              {/* FRONTPAGE */}
              <Route index element={<NavbarLayout><Home /></NavbarLayout>} />
              <Route path="*" element={<NavbarLayout><File404 /></NavbarLayout>} />
              
              {/* SIGNUP */}
              <Route path="/login/" element={<AuthLayout><Login /></AuthLayout>} />
              <Route path="/signup/" element={<AuthLayout><Signup /></AuthLayout>} />
              <Route path="/password-request/" element={<AuthLayout><PasswordRequest /></AuthLayout>} />
              <Route path="/password-setting/:token" element={<AuthLayout><PasswordSetting /></AuthLayout>} />

              {/* DASHBOARD */}
              <Route path="/dashboard/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />

            </Routes>
          </ScrollToTop>

        </ReactRouter>
  );
}

export default injectContext(Router);