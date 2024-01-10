import React, { useState } from "react";
import { useNavigate} from 'react-router-dom'


export default function Login() {

  const navigate = useNavigate()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()


  const handleClick = async () => {
    const url = process.env.BACK_URL + "/api/login";
    const options = {
      method: "POST",
      body: JSON.stringify({username, password}),
      headers: { "Content-Type": "application/json"}
    }

    const response = await fetch(url, options);
    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        console.log("data: ", data)
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
          <form className="needs-validation" noValidate="">
            <hr className="my-4" />
        

              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" onChange={(e) => setUsername(e.target.value)}/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="username" className="form-label">Password</label>
                <div className="input-group has-validation">
                  <input type="text" className="form-control" id="username" placeholder="*******"  onChange={(e) => setPassword(e.target.value)} />
                  <span className="input-group-text">@</span>
                  <div className="invalid-feedback">
                    Password required
                  </div>
                </div>
              </div>

            <hr className="my-4" />
            <button className="w-100 btn btn-primary btn-lg mt-5" onClick={handleClick} >Submit</button>

          </form>
        </div>

      </div>
    </section>
    
    </>
  )
}
