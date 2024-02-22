import React, {useContext, useEffect, useState} from "react";
import { useNavigate, Link} from 'react-router-dom'
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


export default function SignupPersonalData() {

  const navigate = useNavigate()
  const {store, actions} = useContext(Context)

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const signup = await actions.signup(userName, email, password)
      if(signup){
        actions.logout()
        console.log('response: ', signup)
        navigate('/login')  
      }else{
        alert('impossible to register a new user')
      }
    }catch(error){
      console.error('signup error: ', error)
    }
  }


  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Signup</p>
        </div>

        <div className="col-md-7 col-lg-8 m-auto text-white">
          <form onSubmit={ handleSubmit } className="needs-validation mb-3" noValidate="">
            <hr className="my-4" />
          
              <div className="col-12 mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="you@example.com" value={userName} onChange={(e) => setUserName(e.target.value)}/>
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group has-validation">
                  <input type={ !showPassword ? "password" : "text"} className="form-control" id="password" placeholder="*******" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <span className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                    { !showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                  </span>
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
