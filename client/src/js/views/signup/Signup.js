import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



export default function Signup() {

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
            <h4 class="mb-3">Personal data</h4>
          
            {/* PERSONAL DATA */}
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

              {/* STUDIO PAGE */}
              
              <hr class="my-4" />
              <h4 class="mb-3">About your studio</h4>

              <div class="col-12">
                <label for="username" class="form-label">center name</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input type="text" class="form-control" id="username" placeholder="Username" required="" />
                  <div class="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div class="col-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="col-md-5">
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

              <div class="col-md-4">
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

              <div class="col-md-3">
                <label for="zip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required="" />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>

            {/* SPECIALIZATION  */}
            <hr class="my-4" />
            <h4 class="mb-3">Select your Specialization</h4>

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


            {/* SERVICES  */}
            <hr class="my-4" />
            <h4 class="mb-3">Select your Services</h4>

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



            <hr class="my-4" />

            <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>

          </form>
        </div>

      </div>
    </section>
    
    </>
  )
}
