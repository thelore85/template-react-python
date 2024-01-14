import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


export default function SignupReview() {
  
  const [proData, setProData] = useState()
  const [specializations, setSpecializations] = useState()
  const [services, setServices] = useState()
  const [studio, setStudio] = useState()

  
  // get data from local storage
  const setAllState = ()=>{
    setProData(JSON.parse(localStorage.getItem("signup_proData")))
    setSpecializations(JSON.parse(localStorage.getItem("signup_specializations")))
    setServices(JSON.parse(localStorage.getItem("signup_service")))
    setStudio(JSON.parse(localStorage.getItem("signup_studio")))
  }

  const handleConfirm = async () => {

      const email = proData.email
      const name = proData.name
      const password = proData.password
      const specializations = specializations
      const services = services
      const country = studio.country
      const city = studio.city
      const address = studio.address
      const studioUrl = studio.url

      const url = process.env.BACK_URL + "/api/signup";
      const options = {
          method: "POST",
          body: JSON.stringify({email, password, name, lastName, specializations, services, country, city, address, studioUrl}),
          headers: { "Content-Type": "application/json"}
        }
      const response = await fetch(url, options)
      if(response.ok){
        const data = await data.json()
        //delate all signup to local storage
        // redirect to login page
      }else{
          console.log(response.status, response.statusText)
      }

  }


  useEffect(()=>{
    setAllState()
  },[])

  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Check your data</p>
        </div>

        <div className="col-md-7 col-lg-8 m-auto text-white">

          <div className="mb-5">
            <h4>Personal Data</h4>
            <hr />
            <ul>
              <li>{proData && proData.name}</li>
              <li>{proData && proData.lastName}</li>
              <li>{proData && proData.email}</li>
            </ul>
          </div>

          <div className="mb-5">
            <h4>Specializations</h4>
            <hr />
            <ul>
              {specializations ? ( 
                specializations.map( (el,i) => <li key={i}>{el}</li> )) : null}
            </ul>
          </div>

          <div className="mb-5">
            <h4>Services</h4>
            <hr />
            <ul>
              {services ? ( 
                services.map( (el,i) => <li key={i}>{el}</li> )) : null}
            </ul>
          </div>

          <div className="mb-5">
            <h4>Studio info</h4>
            <hr />
            <ul>
              <li>www.medagenda.io/{studio && studio.url}</li>
              <li>{studio && studio.country}</li>
              <li>{studio && studio.city}</li>
              <li>{studio && studio.address}</li>
              <li>{studio && studio.phone}</li>
            </ul>
          </div>

          <button className="w-100 btn btn-primary btn-lg mt-5">Complete</button>

          <Link to="/signup/studio" className="" style={{ textDecoration:'none'}} >
            <p className="py-3 text-white"> {'<'}  Go Back</p>
          </Link>

          

        </div>


      </div>
    </section>
    
    </>
  )
}
