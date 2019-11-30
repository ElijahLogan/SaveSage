import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import {Carousel} from 'react-bootstrap'
//link will replace href

const Nutrition = () => {
    return (
        <Fragment>
           <Carousel >
  <Carousel.Item style = {{height:'30vh', marginBottom:'14rem'}}>
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/53/1920/1920"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>What foods do you love</h3>
      <p>Find meals that fit into your diet and taste good for you</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style = {{height:'30vh', marginBottom:'14rem'}} > 
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/43/1920/1920"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Eating in the big city</h3>
      <p>Find meals you can make with the ingredients near you</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style = {{height:'30vh', marginBottom:'14rem'}} >
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/22/1920/1920"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Eating on the go</h3>
      <p>Find recipes that you can make to eat out</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </Fragment>
    )
}

export default Nutrition