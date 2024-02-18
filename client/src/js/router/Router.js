import React from "react";
import { HashRouter as ReactRouter, Route, Routes } from "react-router-dom"; // in prod import BrowserRouter instead of HashRouter

// Layout
import DashboardLayout from "../layout/DashboardLayout";
import NavbarLayout from "../layout/NavbarLayout";
import SignupLayout from "../layout/SignupLayout";

// Views
import Home from "../views/Home";
import Login from "../views/login/login.js";
import Signup from "../views/login/Signup";


import Dashboard from "../views/dashboard/Dashboard.js";
import File404 from "../views/File404";

// Components
import ScrollToTop from "../component/ScrollToTop";
import { GlobalContext } from "../store/GlobalContext";

export default function Router() {
  const basename = process.env.BASENAME || "/";

  return (
    <GlobalContext>
        <ReactRouter basename={basename}>

          <ScrollToTop>
            <Routes>

              {/* FRONTPAGE */}
              <Route index element={<NavbarLayout><Home /></NavbarLayout>} />
              <Route path="*" element={<NavbarLayout><File404 /></NavbarLayout>} />
              
              {/* SIGNUP */}
              <Route path="/login/" element={<SignupLayout><Login /></SignupLayout>} />
              <Route path="/signup/" element={<SignupLayout><Signup /></SignupLayout>} />

            
              {/* DASHBOARD */}
              <Route path="/dashboard/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />

              {/* BOOKING PAGE */}
              <Route path="/booking/:pagename" element={<DashboardLayout><Dashboard /></DashboardLayout>} />

            </Routes>
          </ScrollToTop>

        </ReactRouter>
    </GlobalContext>
  );
}
