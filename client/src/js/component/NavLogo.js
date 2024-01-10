import React from "react";
import { Link } from "react-router-dom";

// Components
// import logo from '../../img/plannermed_logo.png';
import logo from '../../img/logo2.png';

export default function NavLogo() {

  return (
    <nav className="p-4 bg-black sticky-top shadow ">
      <div className="d-flex align-items-center container">

        <div className="" >
          <Link to="/" style={{ textDecoration:'none'}} >
            <img src={logo} width="60" className="me-3 rounded"></img>
          </Link>
        </div>

      </div>
    </nav>
  );
};
