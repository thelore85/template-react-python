import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'

// Components
// import logo from '../../img/plannermed_logo.png';
import logo from '../../img/logo2.png';
import { Context } from "../store/GlobalContext";

export default function Navbar() {

  const {store, actions} = useContext(Context)
  const navigate = useNavigate()

  const handleLogout = () => {
    actions.logout()
    navigate("/login")
  }

  return (

    <nav className="p-4 bg-black sticky-top shadow ">
      <div className="d-flex align-items-center container">

        <div className="me-auto h7 fw-lighter" >
          <Link to="/" style={{ textDecoration:'none'}} >
            <img src={logo} width="60" className="me-3 rounded"></img>
          </Link>
        </div>


        {store.isLogin ? (
          <div>
            <Link to="/dashboard"><button className="btn btn-sm btn-light me-3" >Dashboard</button></Link>
            <button className="btn btn-sm btn-primary" onClick={handleLogout}>Logout</button>
          </div>
        ):(
          <div>
              <Link to="/signup/personal-data" style={{ textDecoration:'none'}}>
                <span className="mb-0 me-4 text-white">Signup</span>
              </Link>
              <Link to="/login" style={{ textDecoration:'none'}}>
                <span className="mb-0 me-4 text-white">Login</span>
              </Link>
          </div>
        )}


      </div>
    </nav>
  );
};
