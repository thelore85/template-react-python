import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



export default function SignupLandingPage() {

  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">About Your studio</p>
        </div>

        <div className="col-md-7 col-lg-8 m-auto text-white">
          <form className="needs-validation" novalidate="">


             {/* STUDIO PAGE */}
              
             <hr class="my-4" />

             <div class="col-12 mb-3">
                <label for="username" class="form-label">Brand or Center name</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input type="text" class="form-control" id="username" placeholder="Brand Name" required="" />
                  <div class="invalid-feedback">
                    Name Require
                  </div>
                </div>
              </div>


              <div class="col-12 mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="row">
                <div class="col-md-4 mb-3">
                  <label for="country" class="form-label">Country</label>
                  <select class="form-select" id="country" required="">
                    <option value="">Choose...</option>
                    <option>Italy</option>
                    <option>Spain</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div class="col-md-4 mb-3">
                  <label for="state" class="form-label">City</label>
                  <select class="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>Milano</option>
                    <option>Rome</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>


                <div class="col-md-4 mb-3">
                  <label for="zip" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required="" />
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              
              </div>


            <Link to="/signup/review" className=" d-inline" style={{ textDecoration:'none'}} >
              <button className="w-100 btn btn-primary btn-lg mt-5" type="submit">Next</button>
            </Link>

            <Link to="/signup/select-service" className="" style={{ textDecoration:'none'}} >
              <p className="py-3 text-white" type="submit"> {'<'}  Go Back</p>
            </Link>

          </form>
        </div>

      </div>
    </section>
    
    </>
  )
}
