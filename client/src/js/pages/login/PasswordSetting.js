import React, { useState } from "react";
import { useNavigate, Link, useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faClose} from '@fortawesome/free-solid-svg-icons'


export default function PasswordSetting() {

  const navigate = useNavigate()
  const { token } = useParams();

  const [newPassword, setNewPassword] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);
    setShowSuccess(false);
    await fetchNewPasswordVerification(token);
  };
  
  const fetchNewPasswordVerification = async (token) => {
    const url = `${process.env.BACK_URL}/api/verify-reset-token`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({token})
    };
  
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        setShowSuccess(true);
        const data = await response.json();
        console.log('Password reset data: ', data);
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error('Error while fetching password reset:', error);
      setShowError(true);
    }
  };
  




  // Ora token contiene il valore del parametro :token dall'URL


  
  
  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5 px-2">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">Create New Password</p>
        </div>

        <div className="col-md-8 m-auto text-white">
          <form onSubmit={handleSubmit} className="needs-validation mb-3" noValidate="">
            <hr className="my-4" />
        
            <div className="col-12 mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group has-validation">
                  <input type={ !showPassword ? "password" : "text"} className="form-control" id="password" placeholder="*******" required="" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                  <span className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                    { !showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                  </span>
                </div>
              </div>

            <hr className="my-4" />
            <input type='submit' value="Change Password" className="w-100 btn btn-primary btn-lg mt-5" />
          </form>

          <div>
            <span className="d-block">No account yet? <Link to="/signup">Signup here</Link></span>
          </div>

          {/* Alert message */}
          <div>
            {showSuccess ? 
              <div className="bg-success rounded p-3 mt-4 d-flex justify-content-between align-items-center w-50 " style={{ position: 'fixed', left: '50%', transform: 'translateX(-50%)', bottom: '60px', zIndex: '999' }}>
                <p className="m-0">Check your email. A recovery link has been sent</p>
                <span className="p-2 rounded bg-light border text-black-50" style={{ cursor: "pointer" }} onClick={() => setShowSuccess(false)}><FontAwesomeIcon icon={faClose} /></span>
              </div>
              : null
            }
            { showError ? 
              <div className="bg-danger rounded p-3 mt-4 d-flex justify-content-between align-items-center w-50 " style={{ position: 'fixed', left: '50%', transform: 'translateX(-50%)', bottom: '60px', zIndex: '999' }}>
                <p className="m-0">Error. Try later of with another email</p>
                <span className="p-2 rounded bg-light border text-black-50" style={{ cursor: "pointer" }} onClick={() => setShowError(false)}><FontAwesomeIcon icon={faClose} /></span>
              </div>
              : null
            }

          </div>
        </div>


      </div>
    </section>
    
    </>
  )
}
