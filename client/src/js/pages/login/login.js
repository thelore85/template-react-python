import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom'
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


export default function Login() {

  const navigate = useNavigate()

  const {store, actions} = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)


  useEffect(() => {
    // Authenticate user
    const fetchAuthentication = async () => {
      const auth = await actions.authentication()
      if(auth.data){ navigate("/dashboard") }
    }
    fetchAuthentication()
  }, [store.login]);


  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(email, password)
  };


  const userLogin = async (email, password) => {
    const data = await actions.login(email, password);
    if (data.message) {
      console.log(data.message)
    }else{
      console.log(data.error);
    }
  }

  
  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Login</p>
        </div>

        <div className="col-md-7 col-lg-8 m-auto text-white">
          <form onSubmit={handleSubmit} className="needs-validation mb-3" noValidate="">
            <hr className="my-4" />
        
            <div className="col-12 mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="you@example.com" 
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email" 
              />
            </div>

            <div className="col-12 mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group has-validation">
                <input 
                  type={ !showPassword ? "password" : "text"} 
                  className="form-control" 
                  id="password" 
                  placeholder="*******" 
                  required="" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <span className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                  { !showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                </span>
              </div>
            </div>


            <hr className="my-4" />
            <input type='submit' value="submit" className="w-100 btn btn-primary btn-lg mt-5" />

          </form>

          <div>
            <p className="mb-2">No account yet? <Link to="/signup">Signup here</Link></p>
            <p>Forgot your password? <Link to="/password-request">Recovery now</Link></p>
          </div>
        </div>

      </div>
    </section>
    
    </>
  )
}
