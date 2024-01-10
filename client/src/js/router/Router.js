import React from "react";
import { HashRouter as ReactRouter, Route, Routes } from "react-router-dom"; // in prod import BrowserRouter instead of HashRouter

// Layout
import DashboardLayout from "../layout/DashboardLayout";
import NavbarLayout from "../layout/NavbarLayout"; 
import SignupLayout from "../layout/SignupLayout"; 

// Views
import Home from "../views/Home";
import Login from "../views/login/login.js";
import Signup from "../views/signup/Signup";
import SignupPersonalData from "../views/signup/SignupPersonalData";
import SignupSpecialization from "../views/signup/SignupSpecialization.js";
import SignupService from "../views/signup/SignupService.js";
import SignupStudio from "../views/signup/SignupStudio.js";
import SignupUrl from "../views/signup/SignupUrl.js";
import SignupReview from "../views/signup/SignupReview.js";
import SignupThankYou from "../views/signup/SignupThankYou.js";
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
              <Route path="/signup/" element={<SignupLayout><Signup /></SignupLayout>} />
              <Route path="/login/" element={<SignupLayout><Login /></SignupLayout>} />
              <Route path="/signup/personal-data" element={<SignupLayout><SignupPersonalData /></SignupLayout>} />
              <Route path="/signup/select-specialization" element={<SignupLayout><SignupSpecialization /></SignupLayout>} />
              <Route path="/signup/select-service" element={<SignupLayout><SignupService /></SignupLayout>} />
              <Route path="/signup/studio" element={<SignupLayout><SignupStudio /></SignupLayout>} />
              <Route path="/signup/url" element={<SignupLayout><SignupUrl /></SignupLayout>} />
              <Route path="/signup/review" element={<SignupLayout><SignupReview /></SignupLayout>} />
              <Route path="/signup/thank-you" element={<SignupLayout><SignupThankYou /></SignupLayout>} />
            
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
