import React from 'react'
import {Link} from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import RecipeList from '../RecipeList/RecipeList';
import Edam from '../util/Edam';

class RecipeSearch extends React.Component {

	 constructor(props){
    super(props)
    this.state = { company: []
    }
    this.searchEdam = this.searchEdam.bind(this)
  }
 componentWillMount(){
  let majorIndexes =   Edam.search()
  finance.then(res => {

    console.log(majorIndexes)
    
  }).then()

 
}

componentDidMount(){

}


async searchEdam(term){
  //returns object
  let finance =  await Edam.search(term)
  return finance
  
 
 
 
  
  
}
	
	
	// React components are simple functions that take in props and state, and render HTML
	render() {
		return (
			<div>
                
 
			</div>
		);
	}
}

export default RecipeSearch