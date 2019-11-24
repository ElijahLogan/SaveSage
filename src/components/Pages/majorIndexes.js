import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Edam from '../util/Edam';
import Edex from '../Pages/Edexes';
import styled from 'styled-components';



const Index_div = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:red;
  overflow:scroll;

`;

class MajorIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      company: []
    }
    this.searchEdam = this.searchEdam.bind(this)
  }


  componentWillMount() {
    let majorIndexes = Edam.search_index()
    majorIndexes.then(res => {

      //array of index
      let indexes = res.data.majorIndexesList
      this.setState({ company: indexes })
      console.log(this.state.company)
    })

  }



  async searchEdam(term) {


    //returns object
    let finance = await Edam.search(term)
    return finance
  }


  // React components are simple functions that take in props and state, and render HTML
  render() {
    let indexs = this.state.company;
    return (
      <div>
        <Index_div>
          {indexs.map((index) => {
            return <Edex props={index} />
          }

          )}
        </Index_div>
      </div>
    );
  }

  //end  of class3
}

export default MajorIndex