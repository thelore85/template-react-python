import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



export default function SignupService() {

  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Select your Services</p>
        </div>

        <div className="col-md-7 col-lg-8 m-auto text-white">
          <form className="needs-validation" novalidate="">


            {/* SERVICES */}
            <hr className="my-4" />

            <div className="form-check">
              <input type="radio" className="form-check-input" id="physiotherapy-treatment1" name="physiotherapy-treatment" />
              <label className="form-check-label" for="physiotherapy-treatment1">Massage Therapy</label>
            </div>

            <div className="form-check">
              <input type="radio" className="form-check-input" id="physiotherapy-treatment2" name="physiotherapy-treatment" />
              <label className="form-check-label" for="physiotherapy-treatment2">Electrotherapy</label>
            </div>

            <div className="form-check">
              <input type="radio" className="form-check-input" id="physiotherapy-treatment3" name="physiotherapy-treatment" />
              <label className="form-check-label" for="physiotherapy-treatment3">Stretching Exercises</label>
            </div>

            <div className="form-check">
              <input type="radio" className="form-check-input" id="physiotherapy-treatment4" name="physiotherapy-treatment" />
              <label className="form-check-label" for="physiotherapy-treatment4">Joint Mobilization</label>
            </div>

            <div className="form-check">
              <input type="radio" className="form-check-input" id="physiotherapy-treatment5" name="physiotherapy-treatment" />
              <label className="form-check-label" for="physiotherapy-treatment5">Ultrasound Therapy</label>
            </div>

            <div className="form-check">
              <input type="radio" className="form-check-input" id="physiotherapy-treatment6" name="physiotherapy-treatment" />
              <label className="form-check-label" for="physiotherapy-treatment6">Heat Therapy</label>
            </div>


            <Link to="/signup/landing-page" className=" d-inline" style={{ textDecoration:'none'}} >
              <button className="w-100 btn btn-primary btn-lg mt-5" type="submit">Next</button>
            </Link>

            <Link to="/signup/select-specialization" className="" style={{ textDecoration:'none'}} >
              <p className="py-3 text-white" type="submit"> {'<'}  Go Back</p>
            </Link>

          </form>
        </div>

      </div>
    </section>
    
    </>
  )
}
