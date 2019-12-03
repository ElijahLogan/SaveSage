import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';






const Landing = () => {
  return (
<Fragment>
  <section className='landing'>
    <div className='text-container'>

      <div className='text-box'>
        <h1 className='hero_content'>Make your side hustle your main hustle</h1>

        <p>
          Our all in one marketing platform gives you the tools to find the right customers, build your audience, and bring your brand to life
        </p>
      </div>

    </div>
    { /* seperation between text and imae container */}

    <div className='image-container'>

      <div className='cover-photo'>

      </div>

    </div>

  </section>
  { /* seperation between sections */}
  <section className='landing'>

    { /* seperation between text and imae container */}

    <div className='image-container'>

      <div className='cover-photo-two'>

      </div>

    </div>

    { /* seperation between text and imae container */}

    <div className='text-container'>

      <div className='text-box'>
        <h1 className='hero_content'>Make your side hustle your main hustle</h1>

        <p>
          Our all in one marketing platform gives you the tools to find the right customers, build your audience, and bring your brand to life
        </p>
      </div>

    </div>

  </section>

</Fragment>
   
    
    
  )
}

export default Landing