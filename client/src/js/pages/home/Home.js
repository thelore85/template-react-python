import React, { useContext, useEffect, useState } from "react";


export default function Home() {

  return (
    <> 
    <main className="d-flex align-items-center bg-dark" style={{ minHeight: '80vh'}}>
      <div className="container py-5">
      
        <section className=" py-3 px-2 mb-4 border-bottom">
          <h1 className="text-white" style={{fontSize:"4rem"}}>Template Full Stack<br /><span className=" text-primary">React/Python</span><br /></h1>
        </section>
        
        <section className="text-white py-3 px-2 mb-4 border-bottom">
          <h4 className=" fw-normal text-primary">Frontend</h4>
          <ul>
            <li>Node</li>
            <li>Bootstraps</li>
            <li>Font Awesome</li>
            <li>Webpack</li>
          </ul>
          <h4 className=" fw-normal text-primary">Backend</h4>
          <ul>
            <li>Flask</li>
            <li>SQLAlchemy</li>
            <li>Flux</li>
            <li>React Router</li>
            <li>JWT</li>
            <li>SQLight DB</li>
          </ul>
        </section>

      </div>
    </main>
    </>
  )
}
