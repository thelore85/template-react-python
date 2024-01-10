import React, {useState, useContext} from "react";
import { Link } from 'react-router-dom'
import { Context } from '../../store/GlobalContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default function SignupPersonalData() {

  const { store, actions } = useContext(Context)

  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const handleSubmit = async () => {
    const url = process.env.BACK_URL + "/api/signup";
    const options = {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: { "Content-Type": "application/json"}
    }

    const response = await fetch(url, options)
    if(response.ok){
      const data = await response.json()
      console.log(data)
    }else{
      console.log('error: no response from server')
    }
        console.log(response.status, response.statusText)
  }


  const handleNext = () => {
    const data = {
      name:name,
      lastName:lastName,
      email:email,
      password: password
    }

    const pro = store.pro
      // console.log('click on next: ', data)
      // const pro = store.pro
      // console.log('current pro data: ',pro)
      actions.pushProData(data);
  }
3
  const handleTest = () => {

      const pro = store
      console.log('current store: ',pro)

  }


  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Create your Pro Account</p>
        </div>

        <div className="col-md-7 col-lg-8 m-auto text-white">
          <form className="needs-validation" noValidate="">
            <hr className="my-4" />
          
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label" >First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="your name" required="" onChange={(e) => setName(e.target.value)}/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="lastname" required="" onChange={(e) => setLastName(e.target.value)}/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)}/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="username" className="form-label">Password</label>
                <div className="input-group has-validation">
                  <input type="text" className="form-control" id="username" placeholder="*******" required="" onChange={(e) => setPassword(e.target.value)}/>
                  <span className="input-group-text">@</span>
                  <div className="invalid-feedback">
                    Password required
                  </div>
                </div>
              </div>

            </div>

            <hr className="my-4" />


            {/* <Link to="/signup/select-specialization" style={{ textDecoration:'none'}} > */}
              <button className="w-100 btn btn-primary btn-lg mt-5" onClick={handleNext}>Next</button>
            {/* </Link> */}
              <button className="w-100 btn btn-primary btn-lg mt-5" onClick={handleSubmit}>Submit</button>
              <button className="w-100 btn btn-primary btn-lg mt-5" onClick={handleTest}>Test</button>

          </form>
        </div>

      </div>
    </section>
    
    </>
  )
}
