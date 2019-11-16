import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component{
      constructor(props){
        super(props);
        this.state = {term:'',sortBy:'best_match'};
        this.handleTermChange = this.handleTermChange.bind(this);

        this.handleSearch = this.handleSearch.bind(this);
      }


getSortByClass(sortByOption){
  if(this.state.sortBy === sortByOption){
    return 'active';
  }
  else{
    return '';
  }
}

handleSortByChange(sortByOption){
  this.setState({sortBy:sortByOption})
}

handleTermChange(event){
  this.setState({term: event.target.value})
}


handleSearch(event){
  this.props.searchEdam(this.state.term);
  event.preventDefault();
}

    renderSortByOptions(){
    return  Object.keys(sortByOptions).map(option => {
        let sortByOptionValue = sortByOptions[option];
        return <li onClick = {this.handleSortByChange.bind(this, sortByOptionValue)} className= {this.getSortByClass(sortByOptionValue)}key = {sortByOptionValue}> {option}</li>
      })
    }

  render(){
    return(
      <div className="SearchBar">
 
  <div className="SearchBar-fields">
    <input onChange={this.handleTermChange} placeholder="pick a food we'll give you a recipe" />
    
  </div>
  <div className="SearchBar-submit">
    <a onClick = {this.handleSearch}>Let's Go</a>
  </div>
</div>
    )
  }
}

export default SearchBar;
