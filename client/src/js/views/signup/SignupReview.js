import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



export default function SignupReview() {

  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Check your data</p>
        </div>

        <div className="col-md-7 col-lg-8 m-auto text-white">
          
          <div>
            <p>Lorenzo Garofalo</p>
            <p>lorenzo@gmail.com</p>
          <hr />
            <p>Specialized in: Phisioterapy </p>
            <p>Service Selected:</p>
              <ul>
                <li>Servide 1</li>
                <li>Servide 2</li>
                <li>Servide 3</li>
              </ul>
          <hr />
          </div>

        <Link to="/signup/thank-you" className=" d-inline" style={{ textDecoration:'none'}} >
          <button className="w-100 btn btn-primary btn-lg mt-5" type="submit">Complete</button>
        </Link>

        <Link to="/signup/url" className="" style={{ textDecoration:'none'}} >
          <p className="py-3 text-white" type="submit"> {'<'}  Go Back</p>
        </Link>

          

        </div>


      </div>
    </section>
    
    </>
  )
}
