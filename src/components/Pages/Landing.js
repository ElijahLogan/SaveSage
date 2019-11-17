import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';



import styled from 'styled-components';


//link will replace href

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  
  background-image: url(https://burst.shopifycdn.com/photos/stock-market-tracking-and-stocks.jpg?width=925&);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  
  height:100vh;
  width:100vw;
`;



const Landing= () => {
    return (
          <Wrapper>
              
        </Wrapper>
    )
}

export default Landing