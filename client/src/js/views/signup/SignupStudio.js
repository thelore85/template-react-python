import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default function SignupStudio() {

  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [url, setUrl] = useState('')
  const navigate = useNavigate()

  const studioData = {address, country, city, phone, url}
  
  const handleNext = () => {
    console.log(studioData)
    localStorage.setItem('signup_studio', JSON.stringify(studioData))
    navigate("/signup/review");
  };


  const handleBack = () => {
    localStorage.setItem("signup_studio", JSON.stringify(studioData));
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  useEffect(() => {
    const data = localStorage.getItem("signup_studio");
    if (data) {
      const parsedData = JSON.parse(data);

      console.log('studio: ', parsedData)
      setAddress(parsedData.address);
      setCountry(parsedData.country);
      setCity(parsedData.city);
      setPhone(parsedData.phone);
      setUrl(parsedData.url);
    }
  }, []);

  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">About Your studio</p>
        </div>

        <div className="col-md-7 col-lg-8 m-auto text-white">
          <form className="needs-validation" noValidate="">

             {/* STUDIO PAGE */}
             <hr className="my-4" />

              <div className="col-12 mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <div className="invalid-feedback">
                  Please enter your studio address.
                </div>
              </div>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select
                    className="form-select"
                    id="country"
                    required=""
                    value={country}
                    onChange={handleCountryChange}
                  >
                    <option value="">Choose...</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="state" className="form-label" >City</label>
                  <select className="form-select" id="state" required="" value={city} onChange={(e)=>setCity(e.target.value)}>
                    <option value="">Choose...</option>
                    <option>Milano</option>
                    <option>Rome</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <label htmlFor="address" className="form-label">Phone</label>
                  <input type="number" className="form-control" id="phone" placeholder="+39 331 1234567" required="" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                  <div className="invalid-feedback">
                    Please enter your Studio Phone Number.
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <label htmlFor="username" className="form-label">Personal URL</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">www.medagenda.com/</span>
                    <input type="text" className="form-control" id="url" placeholder="mystudio" required="" value={url} onChange={(e)=>setUrl(e.target.value)} />
                    <div className="invalid-feedback">
                      Name Require
                    </div>
                  </div>
                </div>

              </div>

              <button className="w-100 btn btn-primary btn-lg mt-5" onClick={handleNext}>Next</button>
              <Link to="/signup/select-service" className="" style={{ textDecoration:'none'}} >
                <p className="py-3 text-white" onClick={handleBack}> {'<'}  Go Back</p>
              </Link>

          </form>
        </div>

      </div>
    </section>
    
    </>
  )
}
