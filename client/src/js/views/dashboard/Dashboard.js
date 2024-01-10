import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {

    const [userData, setUserData] = useState()
    

    useEffect(() => {

      const fetchData = async () => {
        try {
          const url = process.env.BACK_URL + "/api/dashboard";
          const token = localStorage.getItem('token');

          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
          });

          console.log(response)
  
          if (!response.ok) {
            throw new Error('Errore nella richiesta');
          }else{
            const data = await response.json();
            setUserData(data.logged_in_as[1])
          }
  
        } catch (error) {
          console.error('Errore:', error.message);
        }
      };
  
      fetchData();

    }, []);
  

  return (
    <> 
    <section id="signup" className="bg-dark" style={{ minHeight: '100vh'}}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="text-white fw-bolder fs-1">This is the dashboard</p>
        </div>
        {console.log(userData)}
        <div>
          {userData ? (
            userData.map((el, index) => <li key={index} style={{ color: 'white' }}>{el}</li>)
          ) : null}
        </div>


      </div>
    </section>
    
    </>
  )
}
