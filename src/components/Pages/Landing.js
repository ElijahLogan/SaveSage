import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';






const Landing = () => {
  return (
    <Fragment>
      <section className='landing'>
        <div className='text-container'>

          <div className='text-box'>
            <h1 className='hero_content'>Don't lose your money. Grow your money</h1>

            <p>
              Our all in one Savings platform gives you the tools to find the right companies, build your portfolio, and bring your financial goals to life
        </p>
          </div>

        </div>
        { /* seperation between text and imae container */}

        <div className='image-container' >

          <div className='cover-photo'>

          </div>

        </div>

      </section>
      { /* seperation between sections */}
      <section className='landing'>

        { /* seperation between text and imae container */}

        <div className='image-container' id="color">

          <div className='cover-photo-two' >

          </div>

        </div>

        { /* seperation between text and imae container */}

        <div className='text-container' id="color">

          <div className='text-box'>
            <h1 className='hero_content'>Learn about smart saving and investment</h1>

            <p>
              Your money should work for you. Look forward to articles that will help you make better informed decisions about how you grow your money
        </p>
          </div>

        </div>

      </section>

    </Fragment>



  )
}

export default Landing