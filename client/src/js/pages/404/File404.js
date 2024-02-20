import React from 'react'
import starwars from '../../../img/starwars.jpeg'

export default function File404() {
  return (
    <section className=" d-flex justify-content-center align-items-center bg-black" style={{minHeight: '85vh'}} >
      <div>
        <div className="text-center py-4">
          <img src={starwars}></img>
        </div>

        <h1 className="text-center text-warning">
          File not found, go back to home
        </h1>
      </div>

    </section>
  )
}
