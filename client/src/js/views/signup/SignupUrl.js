import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



export default function SignupUrl() {

  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Your Personal Url</p>
        </div>

        <div className="col-md-7 col-lg-8 m-auto text-white">
          <form className="needs-validation" novalidate="">


             {/* STUDIO PAGE */}
              
             <hr class="my-4" />


                <div class="col-12 mb-3">
                <label for="username" class="form-label">Personal URL</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">www.plannermed.com/</span>
                  <input type="text" class="form-control" id="username" placeholder="mystudio" required="" />
                  <div class="invalid-feedback">
                    Name Require
                  </div>
                </div>
              </div>


            <Link to="/signup/review" className=" d-inline" style={{ textDecoration:'none'}} >
              <button className="w-100 btn btn-primary btn-lg mt-5" type="submit">Next</button>
            </Link>

            <Link to="/signup/studio" className="" style={{ textDecoration:'none'}} >
              <p className="py-3 text-white" type="submit"> {'<'}  Go Back</p>
            </Link>

          </form>
        </div>

      </div>
    </section>
    
    </>
  )
}
