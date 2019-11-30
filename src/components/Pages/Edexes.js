import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card"
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
width:12rem;
height:15rem;
display:flex;
justify-content:center;
align-items:center;
`;

//return that index's information
const Index_Info = styled.section`
 color: palevioletred;
 font-size: 0.3em;
 margin: 1em;
 padding: 0.25em 1em;
 border: 2px solid gray
 border-radius: 3px;
 width:10vw;
 height:10vh
 display:flex;
 justify-content:center;
 align-items:center;
`;

const Ticker = styled.div`
width:30vw
height:50vh;
backgroundColor:red;
`;




function Index_Name({ props }) {
  const [display, setDisplay] = useState(true);
  const [index, setIndex] = useState(175);


  const changeDisplay = () => {
    let holder = display
    holder = holder ? false : true
    setDisplay(holder)
    console.log(display)

  }
  //return the index namee
  if (display) {
    return (
      <Fragment>
        <Card style={{ width: '18rem', marginBottom:'1rem',  boxShadow:' 2px 7px #888888'}} onClick={changeDisplay}>
          <Card.Body>
            <Card.Title>{props.indexName}</Card.Title>
            <Card.Text>
              information on the {props.indexName}
            </Card.Text>
            <Button variant="primary">check price</Button>
          </Card.Body>
        </Card>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <Card style={{ width: '18rem', marginBottom:'1rem'}} onClick={changeDisplay}>
        <Card.Body>
          <Card.Title> Index Ticker {props.ticker}</Card.Title>
          <Card.Text>
            changes: {props.changes}
            <br></br>
            current price:   ${props.price}




            {}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Fragment>
  )




}



export default Index_Name;