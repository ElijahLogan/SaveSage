import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';



import styled from 'styled-components';


//link will replace href

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 5.5em;
  text-align: center;
  color: red;
`;



// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  
 background-color: hsl(55, 37%, 40%);

  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;



  height:80vh;
  width:100vw;
`;



const Landing = () => {
  return (
    <Wrapper>
      <Title>
        Grow your wealth
      </Title>
    </Wrapper>
  )
}

export default Landing