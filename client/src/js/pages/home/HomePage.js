import React from "react";
import { Helmet } from 'react-helmet-async';

export default function HomePage() {

  return (
    <>
    <Helmet>

        <title>BIGWEB.club - Full Stack web template</title>
        <meta name="title" content="Fulll Web App template for your React app | BIGWEB.club"/>
        <meta name="description" content="Start developing your Web App in seconds! All basic functionality already in place to focus only on your app dev. Have Fun!"/>

    </Helmet>
    <main className="d-flex align-items-center bg-dark" style={{ minHeight: '80vh'}}>
      <div className="container py-5">
      
        <section className=" py-3 px-2 mb-4 border-bottom">
          <h1 className="text-white" style={{fontSize:"4rem"}}>Full Stack Template<br /><span className=" text-primary">React / Python</span><br /></h1>
        </section>
        
        <section className="row text-white py-3 px-2 mb-4 border-bottom">
        
          <div className="col-sm-3">
            <h4 className=" fw-normal text-primary">Frontend</h4>
            <ul>
              <li>Node</li>
              <li>React</li>
              <li>Bootstraps</li>
              <li>Font Awesome</li>
              <li>Webpack</li>
              <li>Eslint</li>
            </ul>
          </div>

          <div className="col-sm-3">
            <h4 className=" fw-normal text-primary">Backend</h4>
            <ul>
              <li>Python</li>
              <li>Flask</li>
              <li>SQLAlchemy</li>
              <li>Flux - server</li>
              <li>React Router</li>
              <li>JWT - auth manager</li>
              <li>SQLight DB</li>
              <li>Bcrypt - psw hashing</li>
              <li>Smtplib - email sender</li>
            </ul>
          </div>

          <div className="col-sm-3">
            <h4 className=" fw-normal text-primary">Functionality</h4>
            <ul>
              <li>Signup</li>
              <li>Login/Logout</li>
              <li>Dashboard</li>
              <li>PSW encription</li>
              <li>Password recovery</li>
            </ul>
          </div>

          <div className="col-sm-3">
            <h4 className=" fw-normal text-primary">Marketing</h4>
            <ul>
              <li>GTM raedy</li>
              <li>SEO: Open Graph tags</li>
              <li>Meta: react-helmet-async</li>
              <li>SSR: in progress</li>
            </ul>
          </div>

        </section>

      </div>
    </main>
    </>
  )
}
