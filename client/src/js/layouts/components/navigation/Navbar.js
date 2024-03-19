import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

  return (
    <nav className="bg-white text-black sticky-top shadow">
      <div className="d-flex align-items-center container" style={{ height: "7vh" }}>

        <div className="me-auto fw-lighter">
          <Link to="/" className="text-decoration-none">
            <FontAwesomeIcon icon={faGhost} className="me-2" style={{height:'35px'}}/><span className="fw-bold">Template</span>
          </Link>
        </div>


          <div>
            <Link to="/login" className="text-decoration-none">
              <span className="mb-0 me-4">Login</span>
            </Link>
            <Link to="/signup/" className="text-decoration-none">
              <button className="btn btn-sm btn-primary text-white mb-0">New Account</button>
            </Link>
          </div>
    

      </div>
    </nav>
  );
}
