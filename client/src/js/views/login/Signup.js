import React, {useEffect, useState} from "react";
import { useNavigate, Link} from 'react-router-dom'


export default function SignupPersonalData() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNext = (e) => {    
    e.preventDefault()
    createNewUser()
  }


const createNewUser = async () => {
  const url = process.env.BACK_URL + "/api/signup";
  const options = {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json"}
  };

  const response = await fetch(url, options)
  const data = await response.json()

  if(response.ok){
    console.log('response: ', data)
    navigate('/login')

  }


};




  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Signup</p>
        </div>

        <div className="col-md-7 col-lg-8 m-auto text-white">
          <form onSubmit={ handleNext } className="needs-validation mb-3" noValidate="">
            <hr className="my-4" />
          

              <div className="col-12 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="username" className="form-label">Password</label>
                <div className="input-group has-validation">
                  <input type="text" className="form-control" id="username" placeholder="*******" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <span className="input-group-text">@</span>
                  <div className="invalid-feedback">
                    Password required
                  </div>
                </div>
              </div>

            <hr className="my-4" />
            <input type='submit' value="submit" className="w-100 btn btn-primary btn-lg mt-5" />
            
          </form>

          <div>
            <span>Do you already have an account? <Link to="/login">Login here</Link></span>
          </div>
        </div>

      </div>
    </section>
    
    </>
  )
}
