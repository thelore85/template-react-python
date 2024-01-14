import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function SignupSpecialization() {

  const [specializations, setSpecializations] = useState([]);
  const navigate = useNavigate();


  const handleCheckboxChange = (specialization) => {
    setSpecializations((prevSpecializations) => {
      const isPresent = prevSpecializations.includes(specialization);
      return isPresent
        ? prevSpecializations.filter((spec) => spec !== specialization)
        : [...prevSpecializations, specialization];
    });  
  };
  

  const handleNext = () => {
    localStorage.setItem("signup_specializations", JSON.stringify(specializations));
    navigate("/signup/select-service");
  };

  const handleBack = () => {
    localStorage.setItem("signup_specializations", JSON.stringify(specializations));
  };



  useEffect(() => {
    const data = localStorage.getItem("signup_specializations");
    if (data) {
      const parsedData = JSON.parse(data);
      setSpecializations(parsedData);
    }
  }, []);

  return (
    <>
      <section id="signup" className="bg-dark" style={{ minHeight: '100vh' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="text-white fw-bolder fs-1">Select your Specialization</p>
          </div>

          <div className="col-md-7 col-lg-8 m-auto text-white">
            <form className="needs-validation" noValidate="">

              {/* SPECIALIZATIONS */}
              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="physiotherapist"
                  checked={specializations.some(el => el === 'physiotherapist')}
                  onChange={() => handleCheckboxChange("physiotherapist")}
                />
                <label className="form-check-label" htmlFor="physiotherapist">Physiotherapist</label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="psychologist"
                  checked={specializations.some(el => el === 'psychologist')}
                  onChange={() => handleCheckboxChange("psychologist")}
                />
                <label className="form-check-label" htmlFor="psychologist">Psychologist</label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="nutritionist"
                  checked={specializations.some(el => el === 'nutritionist')}
                  onChange={() => handleCheckboxChange("nutritionist")}
                />
                <label className="form-check-label" htmlFor="nutritionist">Nutritionist</label>
              </div>

              {/* Altri checkbox... */}

              <button className="w-100 btn btn-primary btn-lg mt-5" onClick={handleNext}>Next</button>

              <Link to="/signup/personal-data" className="" style={{ textDecoration: 'none' }}>
                <p className="py-3 text-white" onClick={handleBack}> {'<'} Go Back</p>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
