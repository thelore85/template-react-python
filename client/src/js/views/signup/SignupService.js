import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function SignupService() {

  const [service, setService] = useState([]);
  const navigate = useNavigate();


  const handleCheckboxChange = (serviceChecked) => {
    setService((prevservice) => {
      const isPresent = prevservice.includes(serviceChecked);
      return isPresent
        ? prevservice.filter((spec) => spec !== serviceChecked)
        : [...prevservice, serviceChecked];
    });  
  };
  

  const handleNext = () => {
    localStorage.setItem("signup_service", JSON.stringify(service));
    navigate("/signup/studio");
  };

  const handleBack = () => {
    localStorage.setItem("signup_service", JSON.stringify(service));
  };

  
  useEffect(() => {
    const data = localStorage.getItem("signup_service");
    if (data) {
      const parsedData = JSON.parse(data);
      setService(parsedData);
    }
  }, []);

  return (
    <>
      <section id="signup" className="bg-dark" style={{ minHeight: '100vh' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="text-white fw-bolder fs-1">Select your Service</p>
          </div>

          <div className="col-md-7 col-lg-8 m-auto text-white">
            <form className="needs-validation" noValidate="">

              {/* service */}
              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="physiotherapist"
                  checked={service.some(el => el === 'physiotherapist')}
                  onChange={() => handleCheckboxChange("physiotherapist")}
                />
                <label className="form-check-label" htmlFor="physiotherapist">Physiotherapist</label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="psychologist"
                  checked={service.some(el => el === 'psychologist')}
                  onChange={() => handleCheckboxChange("psychologist")}
                />
                <label className="form-check-label" htmlFor="psychologist">Psychologist</label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="nutritionist"
                  checked={service.some(el => el === 'nutritionist')}
                  onChange={() => handleCheckboxChange("nutritionist")}
                />
                <label className="form-check-label" htmlFor="nutritionist">Nutritionist</label>
              </div>

              {/* Altri checkbox... */}

              <button className="w-100 btn btn-primary btn-lg mt-5" onClick={handleNext}>Next</button>

              <Link to="/signup/select-specialization" className="" style={{ textDecoration: 'none' }}>
                <p className="py-3 text-white" onClick={handleBack}> {'<'} Go Back</p>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
