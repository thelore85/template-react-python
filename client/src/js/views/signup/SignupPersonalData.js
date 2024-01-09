import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



export default function SignupPersonalData() {

  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Create your Pro Account</p>
        </div>

        <div class="col-md-7 col-lg-8 m-auto text-white">
          <form class="needs-validation" novalidate="">
            <hr class="my-4" />
          
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

            </div>

            <hr class="my-4" />


            <Link to="/signup/select-specialization" style={{ textDecoration:'none'}} >
              <button class="w-100 btn btn-primary btn-lg mt-5" type="submit">Next</button>
            </Link>

          </form>
        </div>

      </div>
    </section>
    
    </>
  )
}
