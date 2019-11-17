import React from 'react';
import './Recipe.css';





class Recipe extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
      return(
    <div className="Recipe">
  <div className="image-container">
      <a href={this.props.company.website}>
        <img src={this.props.company.image} alt=''/>
      </a>
  </div>
  <h1>{this.props.company.symbol}</h1>
  <h2>{this.props.company.companyName}</h2>
  <div className="Recipe-information">
    <div className="Recipe-address">
      <p>{this.props.company.ceo}</p>
      <p>{this.props.company.exchange}</p>
      
    </div>

  </div>
</div>
    );
  }
}

export default Recipe
