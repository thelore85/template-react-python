import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



export default function SignupSpecialization() {

  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Select your Specialization</p>
        </div>

        <div class="col-md-7 col-lg-8 m-auto text-white">
          <form class="needs-validation" novalidate="">


            {/* SPECIALIZATION  */}
            <hr class="my-4" />

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="same-address" />
              <label class="form-check-label" for="same-address">Physiotherapist</label>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="same-address" />
              <label class="form-check-label" for="same-address">Psychologist</label>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="same-address" />
              <label class="form-check-label" for="same-address">Nutritionist</label>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="same-address" />
              <label class="form-check-label" for="same-address">Gynecologist</label>
            </div>
            
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="same-address" />
              <label class="form-check-label" for="same-address">Ophthalmologist</label>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="save-info" />
              <label class="form-check-label" for="save-info">Dentist</label>
            </div>




            <Link to="/signup/select-service" style={{ textDecoration:'none'}} >
              <button class="w-100 btn btn-primary btn-lg mt-5" type="submit">Next</button>
            </Link>

            <Link to="/signup/personal-data" className="" style={{ textDecoration:'none'}} >
              <p className="py-3 text-white" type="submit"> {'<'}  Go Back</p>
            </Link>

          </form>
        </div>

      </div>
    </section>
    
    </>
  )
}
