import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";
// import { Context } from "../store/GlobalContext";

// images
import starwars from '../../img/quote2.png'

export default function Home() {

  return (
    <> 
    <section className="bg-black" style={{ minHeight: '100vh'}}>
      <div className="container">

        <div className="text-center py-4" style={{ minHeight: '95vh'}}>
          <img className="" style={{width:"100%", maxWidth:"500px"}}  src={starwars}></img>
          <div className="text-center">
            <p className="small text-white">Scroll Down</p>
            <a href="#home"><FontAwesomeIcon icon={faChevronDown} beat className="text-warning h2"/></a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
