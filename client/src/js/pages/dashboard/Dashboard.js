import React, {useContext, useEffect, useState,} from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router";


export default function Dashboard() {

  const {store, actions} = useContext(Context) 
  const navigate = useNavigate()

  const [usersList, setUsersList] = useState([])
  const [usersName, setUsersName] = useState([])
  const [email, setEmail] = useState([])

  useEffect(()=>{
    if(!store.login){navigate("/")}
  },[store.pro])

  useEffect(() => {
    const fetchData = async () => {
      const users = await actions.getUsers()
      setUsersList(users)
    }
    fetchData()
  }, [store.login]);

    const handleChangePassword = () => {
      
    }

  return (
    <> 
    <main id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">
      
        <div className="mb-5">
          <h1 className="text-white fw-bolder fs-1">Dashboard</h1>
        </div>

        <div className="d-flex">
          <div className="text-gray border rounded bg-light p-3 w-50 me-3 h-auto">
            <h4 className="mb-3 text-decoration-underline" >My data</h4>
            <p className="fw-lighter"> Username - <span className="fw-normal">{store.user.user_name}</span></p>
            <p className="fw-lighter"> Email - <span className="fw-normal">{store.user.email}</span></p>
            <div className="d-flex">
              <button className="btn-sm btn-light border" onClick={handleChangePassword}>Change psw</button>
            </div>
          </div>

          <div className="text-gray border rounded bg-light p-3 w-50">
            <h4 className="mb-3 text-decoration-underline" >Users List</h4>
            {usersList.map( user => {
              return <p key={user.id} className="fw-lighter"><span className="fw-normal">{user.user_name}</span></p>
            })}
          </div>
        </div>
        

      </div>
    </main>
    
    </>
  )
}
