import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'

// Components
import logo from '../../img/plannermed_logo.png';

export default function NavDashboard() {

  return (
    <nav className="p-4 bg-black sticky-top shadow ">
      <div className="d-flex align-items-center container">

        <div className="me-auto h7 fw-lighter" >
          <Link to="/" style={{ textDecoration:'none'}} >
            <img src={logo} width="60" className="me-3 rounded"></img>
          </Link>
        </div>

        <div>
          <Link to="/booking" style={{ textDecoration:'none'}}>
            <span className="mb-0 me-4 text-white">Booking</span>
          </Link>
        </div>
  
      </div>
    </nav>
  );
};
