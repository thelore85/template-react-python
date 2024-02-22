import React, { useContext, useEffect, useState } from "react";


export default function Home() {

  return (
    <> 
    <main className="d-flex align-items-center bg-dark" style={{ minHeight: '80vh'}}>
      <div className="container py-5">
      
        <section className=" py-3 px-2 mb-4 border-bottom">
          <h1 className="text-white" style={{fontSize:"4rem"}}>Full Stack Template<br /><span className=" text-primary">React / Python</span><br /></h1>
        </section>
        
        <section className="row text-white py-3 px-2 mb-4 border-bottom">
        
          <div className="col-sm-4">
            <h4 className=" fw-normal text-primary">Frontend</h4>
            <ul>
              <li>React</li>
              <li>Bootstraps</li>
              <li>Font Awesome</li>
              <li>Webpack</li>
              <li>Node</li>
            </ul>
          </div>

          <div className="col-sm-4">
            <h4 className=" fw-normal text-primary">Backend</h4>
            <ul>
              <li>Python</li>
              <li>Flask</li>
              <li>SQLAlchemy</li>
              <li>Flux</li>
              <li>React Router</li>
              <li>JWT</li>
              <li>SQLight DB</li>
            </ul>
          </div>

          <div className="col-sm-4">
            <h4 className=" fw-normal text-primary">Functionality</h4>
            <ul>
              <li>Signup</li>
              <li>Login/Logout</li>
              <li>Dashboard</li>
              <li>PSW encription</li>
            </ul>
          </div>

        </section>

      </div>
    </main>
    </>
  )
}
