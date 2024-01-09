import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



export default function SignupThankYou() {

  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Thank You!</p>
          <p className="text-white fs-5">Go to your personal dashboard to set your availability, holiday and more.</p>
        </div>

        <Link to="/dashboard/" className="" style={{ textDecoration:'none'}} >
          <button className="d-block mx-auto w-50 btn btn-primary btn-lg mt-5 " type="submit">Go To Your Dashboard</button>
        </Link>

      </div>
    </section>
    
    </>
  )
}
