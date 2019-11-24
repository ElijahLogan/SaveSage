import React, { useState }from 'react'
import { Link } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import RecipeList from '../RecipeList/RecipeList';
import Edam from '../util/Edam';

class MajorIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      company: []
    }
    this.searchEdam = this.searchEdam.bind(this)
  }
  componentWillMount() {
    let majorIndexes = Edam.search()
    majorIndexes.then(res => {

      console.log(majorIndexes)

    }).then()


  }

  componentDidMount() {

  }


  async searchEdam(term) {
    const [name, setName] = useState([]);

    
    //returns object
    let finance = await Edam.search(term)
    return finance






  }


  // React components are simple functions that take in props and state, and render HTML
  render() {
    return (
      <div>
        <h1> hello</h1>

      </div>
    );
  }
}

export default MajorIndex