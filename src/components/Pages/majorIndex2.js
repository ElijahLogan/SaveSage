import React, { Fragment, useState, useEffect } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card"
import { Link } from 'react-router-dom';
import Edam from '../util/Edam';
import Edex from '../Pages/Edexes';
import styled from 'styled-components';

const Index_div = styled.div`
  width:100%
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:1rem;
  overflow:scroll;

`;

function MajorIndex2() {
    const [indexes, setIndex] = useState([]);


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        //get back indexes
        let majorIndexes = Edam.search_index()
        majorIndexes.then(res => {

            //array of index
            let res_indexes = res.data.majorIndexesList
            console.log(res_indexes)
            console.log("res indexes")

            setIndex(res_indexes)
        })
        console.log(indexes)
    }, []);

    return (
        <Index_div>
            {indexes.map((index) => {
                return (<Edex props={index} />)
            })}
        </Index_div>
    )

}

export default MajorIndex2