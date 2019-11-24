import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
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
const Index_Wrapper = styled.section`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid gray
border-radius: 3px;
width:30vw;
height:10vh
display:flex;
justify-content:center;
align-items:center;
`;

//return that index's information
const Index_Info = styled.section`
 color: palevioletred;
 font-size: 1em;
 margin: 1em;
 padding: 0.25em 1em;
 border: 2px solid gray
 border-radius: 3px;
 width:50vw;
 height:50vh
 display:flex;
 justify-content:center;
 align-items:center;
`;






function Index_Name() {
  const [display, setDisplay] = useState(true);
  const [index, setIndex] = useState(175);


  const changeDisplay = () => {
    let holder = display
    holder = holder ? false : true
    setDisplay(holder)

  }
  //return the index namee
  if (display) {
    return (
      <Fragment>
        <Index_Wrapper onClick={changeDisplay}>
          {display}
        </Index_Wrapper>
      </Fragment>
    )
  }
  return (
    <Index_Info onClick={changeDisplay}> hello </Index_Info>
  )




}



export default Index_Name;