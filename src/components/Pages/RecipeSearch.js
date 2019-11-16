import React from 'react'
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import RecipeList from '../RecipeList/RecipeList';
import Edam from '../util/Edam';

class RecipeSearch extends React.Component {

	 constructor(props){
    super(props)
    this.state = {recipes:[]}
    this.searchEdam = this.searchEdam.bind(this)
  }
componentWillMount(){
  this.searchEdam()
}


async searchEdam(term){
  let recipes =  await Edam.search(term)
  let data = recipes.data.recipes
    this.setState({recipes:data})
    console.log(this.state.recipes)
}
	
	
	// React components are simple functions that take in props and state, and render HTML
	render() {
		return (
			<div>
			<SearchBar searchEdam = {this.searchEdam}/>
     	  <RecipeList recipes = {this.state.recipes}/>
			</div>
		);
	}
}

export default RecipeSearch