import React, { useContext, useState } from "react";
import { useNavigate, Link} from 'react-router-dom'
import { Context } from "../../store/GlobalContext";


export default function Login() {

  const navigate = useNavigate()

  const {store, actions} = useContext(Context)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const handleSubmit = async () => {

    const url = process.env.BACK_URL + "/api/login";
    const options = {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: { "Content-Type": "application/json"}
    }

    const response = await fetch(url, options);
    if (response.ok) {
        const data = await response.json();
        actions.setLogin(data)
        navigate("/dashboard");
    }

    console.log(response.status, response.statusText)
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
                <input type="email" className="form-control" id="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)}/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="email" className="form-label">Password</label>
                <div className="input-group has-validation">
                  <input type="text" className="form-control" id="email" placeholder="*******"  onChange={(e) => setPassword(e.target.value)} />
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
            <span>No an account yet? <Link to="/signup">Signup here</Link></span>
          </div>
        </div>

      </div>
    </section>
    
    </>
  )
}